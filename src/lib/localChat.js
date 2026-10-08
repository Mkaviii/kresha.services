import { FAQS, SITE } from "../data/content";

// Simple, honest quick-answer helper used when no AI backend is connected.
// Answers come from the site's own FAQ content; anything else goes to WhatsApp.

const SERVICES =
  "We offer SEO, AEO + GEO (AI search visibility), social media marketing, Google Ads, website development and graphic designing — for businesses in Chennai, Erode and across Tamil Nadu. Tell us your business type on WhatsApp and we'll suggest where to start.";

const faq = (i) => FAQS[i].a;

const RULES = [
  { re: /(price|pricing|cost|fee|fees|charge|rate|budget|package|how much|quote)/i, text: () => faq(0), handoff: true },
  { re: /(minimum|min\.?).*(ad|spend)|ad spend|google ads?/i, text: () => faq(6), handoff: true },
  { re: /(how soon|how long|result|timeline|when will|rank faster)/i, text: () => faq(1) },
  { re: /(tamil|language|english)/i, text: () => faq(2) },
  { re: /(report|dashboard|update)/i, text: () => faq(3) },
  { re: /(lock.?in|contract|commit|cancel)/i, text: () => faq(4) },
  { re: /(gst|invoice|bill|tax)/i, text: () => faq(5) },
  { re: /(area|areas|serve|location|city|chennai|erode|office|visit|where)/i, text: () => faq(7) },
  { re: /(website|web site|web design|build my site|develop)/i, text: () => "Yes — website development is one of our services. Share your business details on WhatsApp and we'll set up a free strategy call.", handoff: true },
  { re: /(seo|google map|ranking|rank|aeo|geo|chatgpt|ai search|gemini)/i, text: () => "SEO and AI-search (AEO + GEO) help customers find and choose your business on Google, Maps, ChatGPT and Gemini. We start with a clear 30-day roadmap — ask us on WhatsApp for a free review of your current presence.", handoff: true },
  { re: /(instagram|facebook|social|reels|youtube)/i, text: () => "Yes — we manage social media marketing: content planning, creatives, posting and ads, in Tamil and English." },
  { re: /(logo|poster|creative|banner|design|festival)/i, text: () => "Graphic designing is one of our services — logos, festival and offer creatives, catalogues and more. Send us your requirement on WhatsApp." },
  { re: /(service|offer|what do you do|help with|digital marketing)/i, text: () => SERVICES },
  { re: /^(hi|hello|hey|vanakkam|hai)\b/i, text: () => "Hello! Ask me about our services, pricing, timelines or reports — or WhatsApp us on " + SITE.phoneDisplay + "." },
];

const TAMIL = /[஀-௿]/;
const TAMIL_PRICE = /(விலை|எவ்வளவு|கட்டணம்)/;

export const localAnswer = (message) => {
  const msg = String(message || "").trim();

  if (TAMIL.test(msg)) {
    if (TAMIL_PRICE.test(msg)) {
      return {
        text: `விலை உங்கள் தேவை மற்றும் பட்ஜெட்டைப் பொறுத்தது. இலவச ஆலோசனைக்கு ${SITE.phoneDisplay} என்ற எண்ணில் WhatsApp செய்யுங்கள்.`,
        handoff: true,
      };
    }
    return {
      text: `உங்கள் கேள்விக்கு எங்கள் குழு நேரடியாக பதில் சொல்லும். ${SITE.phoneDisplay} என்ற எண்ணில் WhatsApp செய்யுங்கள்.`,
      handoff: true,
    };
  }

  for (const r of RULES) {
    if (r.re.test(msg)) return { text: r.text(), handoff: !!r.handoff };
  }

  return {
    text: `I'm a quick-answer assistant, so I'll hand this one to our team. WhatsApp us on ${SITE.phoneDisplay} and we'll reply within a few working hours.`,
    handoff: true,
  };
};
