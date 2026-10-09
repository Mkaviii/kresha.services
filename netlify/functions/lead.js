// Netlify Function: receives the website enquiry and delivers it to
//   1) Gmail   (SMTP + Gmail App Password)
//   2) WhatsApp (CallMeBot free API -> your own WhatsApp number)
// Succeeds if at least ONE channel delivers. Secrets live in Netlify env vars.
const nodemailer = require("nodemailer");

const json = (statusCode, body) => ({
  statusCode,
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(body),
});

const esc = (s = "") =>
  String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

const clean = (s, max) => String(s || "").replace(/[\u0000-\u001f]+/g, " ").trim().slice(0, max);

async function sendEmail(lead) {
  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;
  if (!user || !pass) throw new Error("Gmail not configured");
  const to = process.env.LEAD_TO_EMAIL || user;

  const transporter = nodemailer.createTransport({ service: "gmail", auth: { user, pass } });
  await transporter.sendMail({
    from: `"Kresha Website" <${user}>`,
    to,
    replyTo: user,
    subject: `New website enquiry — ${lead.name} (${lead.business_type})`,
    text:
      `New enquiry from kreshaservices website\n\n` +
      `Name: ${lead.name}\nWhatsApp: ${lead.phone}\nBusiness: ${lead.business_type}\n` +
      `Message: ${lead.message || "-"}\nTime: ${lead.time}`,
    html: `
      <div style="font-family:Arial,sans-serif;max-width:560px">
        <h2 style="color:#064A91;margin:0 0 12px">New website enquiry</h2>
        <table cellpadding="8" style="border-collapse:collapse;width:100%;border:1px solid #e5e9f0">
          <tr><td><b>Name</b></td><td>${esc(lead.name)}</td></tr>
          <tr><td><b>WhatsApp</b></td><td><a href="https://wa.me/91${esc(lead.digits)}">${esc(lead.phone)}</a></td></tr>
          <tr><td><b>Business</b></td><td>${esc(lead.business_type)}</td></tr>
          <tr><td><b>Message</b></td><td>${esc(lead.message) || "—"}</td></tr>
          <tr><td><b>Time (IST)</b></td><td>${esc(lead.time)}</td></tr>
        </table>
      </div>`,
  });
}

async function sendWhatsApp(lead) {
  const phone = process.env.CALLMEBOT_PHONE; // your number with country code, e.g. 919363100998
  const apikey = process.env.CALLMEBOT_APIKEY;
  if (!phone || !apikey) throw new Error("WhatsApp not configured");
  const text =
    `*New Website Lead*\n` +
    `Name: ${lead.name}\nWhatsApp: ${lead.phone}\nBusiness: ${lead.business_type}\n` +
    `Message: ${lead.message || "-"}\n` +
    `Chat: https://wa.me/91${lead.digits}`;
  const url =
    `https://api.callmebot.com/whatsapp.php?phone=${encodeURIComponent(phone)}` +
    `&text=${encodeURIComponent(text)}&apikey=${encodeURIComponent(apikey)}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`CallMeBot ${res.status}`);
}

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") return json(405, { ok: false, error: "Method not allowed" });

  let data;
  try {
    data = JSON.parse(event.body || "{}");
  } catch {
    return json(400, { ok: false, error: "Bad request" });
  }

  // Honeypot: bots fill this hidden field. Pretend success.
  if (data["bot-field"]) return json(200, { ok: true });

  const digits = String(data.phone || "").replace(/\D/g, "").slice(-10);
  const lead = {
    name: clean(data.name, 100),
    phone: clean(data.phone, 20),
    digits,
    business_type: clean(data.business_type, 80) || "Not specified",
    message: clean(data.message, 1000),
    time: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
  };
  if (!lead.name || digits.length < 10) return json(400, { ok: false, error: "Name and a valid 10-digit number are required" });

  const [mail, wa] = await Promise.allSettled([sendEmail(lead), sendWhatsApp(lead)]);
  if (mail.status === "rejected") console.error("Email failed:", mail.reason && mail.reason.message);
  if (wa.status === "rejected") console.error("WhatsApp failed:", wa.reason && wa.reason.message);

  const emailOk = mail.status === "fulfilled";
  const whatsappOk = wa.status === "fulfilled";
  if (!emailOk && !whatsappOk) return json(502, { ok: false, error: "Delivery failed" });
  return json(200, { ok: true, email: emailOk, whatsapp: whatsappOk });
};