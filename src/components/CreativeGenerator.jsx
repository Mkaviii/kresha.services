import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Wand2, Loader2, Download } from "lucide-react";

import { API, HAS_BACKEND } from "../lib/api";
import { SITE } from "../data/content";

const OCCASIONS = ["Deepavali Offer", "Pongal Greetings", "New Year Sale", "Weekend Offer", "Grand Opening", "General Offer"];
const LANGS = ["English", "Tamil"];

export const CreativeGenerator = () => {
  const [form, setForm] = useState({ business_type: "", offer: "", occasion: OCCASIONS[0], language: LANGS[0] });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const generate = async (e) => {
    e.preventDefault();
    if (form.business_type.trim().length < 2) return toast.error("Tell us your business type (e.g. Saree Shop)");
    if (form.offer.trim().length < 2) return toast.error("Write your offer (e.g. Flat 30% off this Deepavali)");
    if (!HAS_BACKEND) {
      const text = `Hi Kresha Services! Please design a ${form.occasion} poster for my business: ${form.business_type}. Offer: ${form.offer}. Poster language: ${form.language}.`;
      window.open(`${SITE.wa.split("?")[0]}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
      toast.success("Opening WhatsApp — send us the details and our designer will share your poster.");
      return;
    }
    setLoading(true);
    setResult(null);
    try {
      const { data } = await axios.post(`${API}/creative`, form, { timeout: 180000 });
      setResult(data);
      toast.success("Your creative is ready!");
    } catch (err) {
      toast.error(err?.response?.data?.detail || "Generation failed — please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card p-6 md:p-8" data-testid="creative-generator">
      <h3 className="text-xl sm:text-2xl">{HAS_BACKEND ? "Free AI Ad-Creative Generator" : "Free Festival & Offer Poster"}</h3>
      <p className="mt-2 max-w-2xl text-[14px] leading-relaxed text-[#4B5563]">
        {HAS_BACKEND
          ? "Describe your business and offer — get a ready-to-post festival or offer poster in seconds."
          : "Describe your business and offer — our designer prepares a ready-to-post festival or offer poster and shares it with you on WhatsApp."}
        {" "}Want brand-perfect creatives every week? That's what our Graphic Designing service does.
      </p>

      <form onSubmit={generate} className="mt-6 grid gap-4 sm:grid-cols-2" data-testid="creative-form">
        <div>
          <label htmlFor="cg-biz" className="mb-1.5 block text-[13px] font-bold text-[#064A91]">Your business</label>
          <input id="cg-biz" data-testid="creative-input-business" className="input" placeholder="e.g. Saree shop in Erode" value={form.business_type} onChange={set("business_type")} maxLength={80} />
        </div>
        <div>
          <label htmlFor="cg-occ" className="mb-1.5 block text-[13px] font-bold text-[#064A91]">Occasion</label>
          <select id="cg-occ" data-testid="creative-input-occasion" className="input" value={form.occasion} onChange={set("occasion")}>
            {OCCASIONS.map((o) => <option key={o}>{o}</option>)}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="cg-offer" className="mb-1.5 block text-[13px] font-bold text-[#064A91]">Your offer / message</label>
          <input id="cg-offer" data-testid="creative-input-offer" className="input" placeholder="e.g. Flat 30% off on all silk sarees" value={form.offer} onChange={set("offer")} maxLength={200} />
        </div>
        <div>
          <label htmlFor="cg-lang" className="mb-1.5 block text-[13px] font-bold text-[#064A91]">Poster language</label>
          <select id="cg-lang" data-testid="creative-input-language" className="input" value={form.language} onChange={set("language")}>
            {LANGS.map((l) => <option key={l}>{l}</option>)}
          </select>
        </div>
        <div className="flex items-end">
          <button type="submit" disabled={loading} data-testid="creative-generate-button" className="btn btn-primary w-full disabled:opacity-60">
            {loading ? <Loader2 size={18} className="animate-spin" /> : <Wand2 size={17} />}
            {loading ? "Designing your creative…" : HAS_BACKEND ? "Generate Creative" : "Get My Poster on WhatsApp"}
          </button>
        </div>
      </form>

      {result && (
        <div className="mt-7" data-testid="creative-result">
          <img src={result.image} alt="Generated ad creative" data-testid="creative-result-image" className="mx-auto max-h-[460px] rounded-2xl border border-[#E5EAF2] shadow-[0_4px_20px_rgba(6,74,145,0.08)]" />
          <div className="mt-4 flex justify-center">
            <a href={result.image} download={`kresha-creative.png`} data-testid="creative-download-button" className="btn btn-outline min-h-[44px]">
              <Download size={16} /> Download Poster
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreativeGenerator;
