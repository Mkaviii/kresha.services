import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Reveal } from "./Reveal";

const num = (v) => {
  const n = parseFloat(v);
  return isFinite(n) && n >= 0 ? n : 0;
};
const pct = (v) => (isFinite(v) && v > 0 ? `${(v * 100).toFixed(2)}%` : "—");
const rs = (v) => (isFinite(v) && v > 0 ? `₹${v.toFixed(2)}` : "—");

const FIELDS = [
  { key: "reach", label: "Reach (people)", ph: "e.g. 12000", hint: "Unique people who saw it" },
  { key: "impressions", label: "Impressions", ph: "e.g. 18500", hint: "Use impressions if available" },
  { key: "engagements", label: "Engagements", ph: "Likes + comments + shares + saves", hint: "" },
  { key: "clicks", label: "Clicks / Link Clicks", ph: "e.g. 420", hint: "" },
  { key: "leads", label: "Leads / Conversions", ph: "e.g. 24", hint: "" },
  { key: "spend", label: "Ad Spend (₹)", ph: "Optional for organic posts", hint: "" },
  { key: "revenue", label: "Revenue / Conversion Value (₹)", ph: "e.g. 60000", hint: "Useful for calculating ROAS", full: true },
];

export const CampaignCalculator = () => {
  const [mode, setMode] = useState("organic");
  const [vals, setVals] = useState({ reach: "", impressions: "", engagements: "", clicks: "", leads: "", spend: "", revenue: "" });

  const set = (k) => (e) => setVals({ ...vals, [k]: e.target.value });

  const m = useMemo(() => {
    const reach = num(vals.reach);
    const impressions = num(vals.impressions);
    const engagements = num(vals.engagements);
    const clicks = num(vals.clicks);
    const leads = num(vals.leads);
    const spend = num(vals.spend);
    const revenue = num(vals.revenue);

    const impressionsEff = impressions > 0 ? impressions : reach;
    const clicksEff = clicks > 0 ? clicks : 0;

    const er = reach > 0 ? engagements / reach : NaN;
    const ctr = impressionsEff > 0 ? clicks / impressionsEff : NaN;
    const conv = clicksEff > 0 ? leads / clicksEff : NaN;
    const cpm = impressionsEff > 0 ? (spend / impressionsEff) * 1000 : NaN;
    const cpc = clicksEff > 0 ? spend / clicksEff : NaN;
    const roas = spend > 0 && revenue > 0 ? revenue / spend : NaN;

    let score = 0;
    if (mode === "organic") {
      score = Math.min(1, (er || 0) / 0.04) * 35 + Math.min(1, (ctr || 0) / 0.01) * 25 + Math.min(1, (conv || 0) / 0.1) * 40;
    } else if (isFinite(roas) && roas > 0) {
      score = Math.min(1, (er || 0) / 0.04) * 20 + Math.min(1, (ctr || 0) / 0.015) * 30 + Math.min(1, (conv || 0) / 0.1) * 30 + Math.min(2, roas / 4) * 20;
    } else {
      score = Math.min(1, (er || 0) / 0.04) * 25 + Math.min(1, (ctr || 0) / 0.015) * 35 + Math.min(1, (conv || 0) / 0.1) * 40;
    }
    score = Math.round(Math.min(100, Math.max(0, score)));

    const verdict =
      score >= 70 ? "Strong campaign — keep scaling what works." : score >= 40 ? "Decent start — a few tweaks can lift this a lot." : "Needs work — the funnel needs attention.";

    const hasAny = reach || impressions || engagements || clicks || leads || spend || revenue;
    return { er, ctr, conv, cpm, cpc, roas, score, verdict, hasAny: !!hasAny };
  }, [vals, mode]);

  const C = 2 * Math.PI * 54;

  const metrics = [
    { id: "engagement-rate", label: "Engagement Rate", value: pct(m.er), formula: "engagements ÷ reach" },
    { id: "ctr", label: "CTR", value: pct(m.ctr), formula: "clicks ÷ impressions" },
    { id: "conversion-rate", label: "Conversion Rate", value: pct(m.conv), formula: "leads ÷ clicks" },
    ...(mode === "paid"
      ? [
          { id: "cpm", label: "CPM", value: rs(m.cpm), formula: "cost per 1,000 impressions" },
          { id: "cpc", label: "CPC", value: rs(m.cpc), formula: "cost per click" },
        ]
      : []),
    ...(isFinite(m.roas) && m.roas > 0 ? [{ id: "roas", label: "ROAS", value: `${m.roas.toFixed(2)}x`, formula: "revenue ÷ spend" }] : []),
  ];

  return (
    <div className="grid gap-6 lg:grid-cols-2" data-testid="campaign-calculator">
      <div className="card p-6 md:p-8">
        <h3 className="text-xl sm:text-2xl">Enter Your Campaign Numbers</h3>
        <p className="mt-2 text-[14px] leading-relaxed text-[#4B5563]">
          You don't need advanced marketing knowledge. Just enter the numbers you know.
        </p>

        <div className="mt-6 grid grid-cols-2 gap-1 rounded-xl bg-[#F5F7FA] p-1.5" role="tablist" data-testid="calc-mode-tabs">
          {[
            { id: "organic", label: "Organic / Social Post" },
            { id: "paid", label: "Paid Campaign" },
          ].map((t) => (
            <button
              key={t.id}
              role="tab"
              aria-selected={mode === t.id}
              data-testid={`calc-mode-${t.id}`}
              onClick={() => setMode(t.id)}
              className={`min-h-[48px] cursor-pointer rounded-lg text-[14px] font-bold transition-colors duration-200 ${
                mode === t.id ? "bg-[#064A91] text-white shadow" : "text-[#064A91] hover:text-[#159BD7]"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {FIELDS.map((f) => (
            <div key={f.key} className={f.full ? "sm:col-span-2" : ""}>
              <label htmlFor={`calc-${f.key}`} className="mb-1.5 block text-[13px] font-bold text-[#064A91]">
                {f.label} {f.hint && <span className="font-normal text-[#93A3BD]">— {f.hint}</span>}
              </label>
              <input
                id={`calc-${f.key}`}
                data-testid={`calc-input-${f.key}`}
                type="number"
                inputMode="decimal"
                min="0"
                className="input"
                placeholder={f.ph}
                value={vals[f.key]}
                onChange={set(f.key)}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="noise rounded-2xl bg-[#123B70] p-6 text-white md:p-8" data-testid="calc-results-panel">
        <p className="text-[14px] text-white/70">Calculated from the numbers you entered.</p>

        <div className="card mt-5 flex items-center gap-5 border-0 bg-white/5 p-5 backdrop-blur-sm">
          <div className="relative h-[120px] w-[120px] shrink-0">
            <svg viewBox="0 0 120 120" className="h-full w-full -rotate-90">
              <circle cx="60" cy="60" r="54" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="9" />
              <motion.circle
                cx="60"
                cy="60"
                r="54"
                fill="none"
                stroke={m.score >= 70 ? "#25D366" : m.score >= 40 ? "#FFBD19" : "#F87171"}
                strokeWidth="9"
                strokeLinecap="round"
                strokeDasharray={C}
                animate={{ strokeDashoffset: m.hasAny ? C * (1 - m.score / 100) : C }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-2xl font-extrabold text-white" data-testid="calc-score-value">
                {m.hasAny ? m.score : "—"}
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-white/60">Score / 100</span>
            </div>
          </div>
          <div>
            <h4 className="text-lg !text-white">{m.hasAny ? m.verdict : "Enter your numbers"}</h4>
            <p className="mt-1.5 text-[13px] leading-relaxed text-white/70" data-testid="calc-score-hint">
              {m.hasAny
                ? "Score blends engagement, CTR, conversions and returns against healthy benchmarks."
                : "Your performance score will appear here once you enter your campaign numbers."}
            </p>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-4">
          {metrics.map((mt) => (
            <div key={mt.id} className="rounded-xl border border-white/10 bg-white/5 p-4" data-testid={`calc-metric-${mt.id}`}>
              <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#7FD4FF]">{mt.label}</p>
              <p className="mt-2 text-2xl font-extrabold text-white">{mt.value}</p>
              <p className="mt-1 text-[11px] text-white/50">{mt.formula}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-xl border border-[#FFBD19]/30 bg-[#FFBD19]/10 p-5">
          <p className="text-[13.5px] leading-relaxed text-white/85">
            Not happy with these numbers? We audit campaigns free — tell us your goal and we'll show you what to fix.
          </p>
          <Link to="/contact" data-testid="calc-improve-cta" className="btn btn-primary mt-4 min-h-[48px] w-full">
            Get Free Strategy Call <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CampaignCalculator;
