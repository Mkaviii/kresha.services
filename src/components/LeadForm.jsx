import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Send, Loader2 } from "lucide-react";
import { SITE, BUSINESS_TYPES } from "../data/content";

import { API, HAS_BACKEND } from "../lib/api";

const encode = (data) => new URLSearchParams(data).toString();

const waLink = (f) => {
  const text = `Hi Kresha Services! I am ${f.name} (${f.business_type}). ${f.message ? f.message + " " : ""}My WhatsApp number: ${f.phone}`;
  return `${SITE.wa.split("?")[0]}?text=${encodeURIComponent(text)}`;
};

export const LeadForm = () => {
  const [form, setForm] = useState({ name: "", phone: "", business_type: BUSINESS_TYPES[0], message: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setError("");
    if (!form.name.trim()) return setError("Please enter your name.");
    if (form.phone.replace(/\D/g, "").length < 10) return setError("Please enter a valid WhatsApp number (10 digits).");

    setLoading(true);
    try {
      let sent = false;
      if (HAS_BACKEND) {
        try {
          await axios.post(`${API}/leads`, form, { timeout: 15000 });
          sent = true;
        } catch (err) {
          // backend unreachable -> fall back to Netlify Forms below
        }
      }
      if (!sent) {
        const res = await fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({ "form-name": "enquiry", "bot-field": "", ...form }),
        });
        if (!res.ok) throw new Error(`Form error ${res.status}`);
      }
      toast.success("Enquiry received! We'll WhatsApp you within a few working hours.", {
        duration: 6000,
      });
      setForm({ name: "", phone: "", business_type: BUSINESS_TYPES[0], message: "" });
    } catch (err) {
      toast.error("We couldn't send that just now. Please WhatsApp us instead.", {
        duration: 12000,
        action: { label: "Open WhatsApp", onClick: () => window.open(waLink(form), "_blank", "noopener,noreferrer") },
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={submit} data-testid="lead-form" className="card p-6 md:p-8" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="lead-name" className="mb-1.5 block text-[13px] font-bold text-[#064A91]">Your name</label>
          <input
            id="lead-name"
            data-testid="lead-name-input"
            className="input"
            placeholder="e.g. Ramesh Kumar"
            value={form.name}
            onChange={set("name")}
          />
        </div>
        <div>
          <label htmlFor="lead-phone" className="mb-1.5 block text-[13px] font-bold text-[#064A91]">WhatsApp number</label>
          <input
            id="lead-phone"
            data-testid="lead-phone-input"
            className="input"
            type="tel"
            inputMode="tel"
            placeholder="10-digit mobile number"
            value={form.phone}
            onChange={set("phone")}
          />
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="lead-biztype" className="mb-1.5 block text-[13px] font-bold text-[#064A91]">Business type</label>
        <select
          id="lead-biztype"
          data-testid="lead-biztype-input"
          className="input"
          value={form.business_type}
          onChange={set("business_type")}
        >
          {BUSINESS_TYPES.map((b) => (
            <option key={b} value={b}>{b}</option>
          ))}
        </select>
      </div>

      <div className="mt-4">
        <label htmlFor="lead-message" className="mb-1.5 block text-[13px] font-bold text-[#064A91]">
          What do you want to achieve? <span className="font-normal text-[#93A3BD]">(optional)</span>
        </label>
        <textarea
          id="lead-message"
          data-testid="lead-message-input"
          className="input min-h-[110px] resize-y"
          placeholder="e.g. I run a saree shop in Erode and want more customers through WhatsApp and Google."
          value={form.message}
          onChange={set("message")}
        />
      </div>

      {error && (
        <p data-testid="lead-form-error" className="mt-3 rounded-lg bg-red-50 px-3 py-2 text-[13px] font-semibold text-red-600">
          {error}
        </p>
      )}

      <button type="submit" disabled={loading} data-testid="lead-form-submit-button" className="btn btn-primary mt-5 w-full disabled:opacity-60">
        {loading ? <Loader2 size={18} className="animate-spin" /> : <Send size={17} />}
        {loading ? "Sending…" : "Send Enquiry"}
      </button>
      <p className="mt-3 text-center text-[12px] text-[#93A3BD]">
        We reply on WhatsApp within a few working hours. Prefer talking? Call{" "}
        <a href={SITE.tel} data-testid="lead-form-phone-link" className="font-bold text-[#159BD7]">{SITE.phoneDisplay}</a>
      </p>
    </form>
  );
};

export default LeadForm;
