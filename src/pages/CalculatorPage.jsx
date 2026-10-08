import { Seo } from "../components/Seo";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import CampaignCalculator from "../components/CampaignCalculator";
import CreativeGenerator from "../components/CreativeGenerator";
import CtaBand from "../components/CtaBand";

const STEPS = [
  { n: "01", title: "Pick your campaign type", desc: "Organic/social post or paid campaign — the metrics adapt to what you run." },
  { n: "02", title: "Enter the numbers you know", desc: "Reach, engagement, clicks, leads and spend from Meta Ads, Google Ads or your page insights." },
  { n: "03", title: "Read your score honestly", desc: "Get engagement rate, CTR, conversion rate, CPM/CPC, ROAS and a 0–100 score against healthy benchmarks." },
];

export default function CalculatorPage() {
  return (
    <>
      <Seo
        title="Free Campaign Performance Calculator — Check Your Ads & Social ROI | Kresha Services"
        description="Enter your campaign numbers and instantly get engagement rate, CTR, conversion rate, CPM, CPC, ROAS and a 0–100 performance score. A free tool by Kresha Services, Chennai & Erode."
        path="/campaign-calculator"
      />

      <PageHero
        eyebrow="Free Tool"
        title="Campaign Performance Calculator"
        sub="Is your campaign actually doing well? Enter the numbers from your ads or social posts and get an honest score — in seconds, free."
      />

      <section className="section pt-4 md:pt-8">
        <div className="wrap">
          <Reveal>
            <CampaignCalculator />
          </Reveal>
        </div>
      </section>

      <section className="section bg-[#F5F7FA]">
        <div className="wrap">
          <Reveal>
            <CreativeGenerator />
          </Reveal>
        </div>
      </section>

      <section className="section bg-[#F5F7FA]">
        <div className="wrap">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">How it works</p>
            <h2 className="text-3xl sm:text-4xl">Three steps, thirty seconds.</h2>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-3" data-testid="calculator-steps">
            {STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.08} className="h-full">
                <div className="card h-full p-7">
                  <span className="text-4xl font-extrabold text-[#159BD7]/50">{s.n}</span>
                  <h3 className="mt-3 text-lg">{s.title}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-[#4B5563]">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.15} className="mt-8">
            <p className="text-[13px] leading-relaxed text-[#93A3BD]">
              Benchmarks are healthy ranges for local businesses in India; every business differs. Want a
              human read on your numbers? The strategy call is free.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBand title="Want us to improve these numbers?" sub="Bring your campaign data to a free strategy call — we'll show you exactly what to fix, in Tamil or English." />
    </>
  );
}
