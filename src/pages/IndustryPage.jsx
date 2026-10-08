import { useParams, Link } from "react-router-dom";
import { Check, AlertCircle, ArrowRight } from "lucide-react";
import { Seo } from "../components/Seo";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import CtaBand from "../components/CtaBand";
import { INDUSTRIES, INDUSTRY_PAGES } from "../data/content";

export default function IndustryPage() {
  const { slug } = useParams();
  const page = INDUSTRY_PAGES[slug];

  if (!page) {
    return (
      <section className="wrap flex min-h-[50vh] flex-col items-center justify-center gap-5 py-20 text-center">
        <p className="text-lg font-bold text-[#064A91]">Industry page coming soon.</p>
        <Link to="/" data-testid="industry-not-found-home" className="btn btn-primary">Back to Home</Link>
      </section>
    );
  }

  const others = INDUSTRIES.filter((i) => i.slug && i.slug !== slug);

  return (
    <>
      <Seo title={`${page.name} Digital Marketing Agency | Kresha Services`} description={page.meta} path={`/industries/${slug}`} />

      <PageHero eyebrow={page.name} title={`Digital marketing for ${page.name.toLowerCase()} businesses`} sub={page.hero} image={page.image} />

      <section className="section">
        <div className="wrap grid gap-14 lg:grid-cols-2">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl">Sound familiar?</h2>
            <ul className="mt-7 space-y-4" data-testid="industry-pain-points">
              {page.painPoints.map((p) => (
                <li key={p} className="card flex items-start gap-3 p-5 text-[14px] leading-relaxed text-[#4B5563]">
                  <AlertCircle size={18} className="mt-0.5 shrink-0 text-[#E8A100]" />
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="text-2xl sm:text-3xl">How we fix it</h2>
            <ul className="mt-7 space-y-4" data-testid="industry-help">
              {page.help.map((h) => (
                <li key={h} className="card flex items-start gap-3 p-5 text-[14px] leading-relaxed text-[#4B5563]">
                  <Check size={18} strokeWidth={3} className="mt-0.5 shrink-0 text-[#159BD7]" />
                  {h}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="pb-14 md:pb-24">
        <div className="wrap">
          <Reveal>
            <div className="card flex flex-col items-start justify-between gap-5 p-7 md:flex-row md:items-center">
              <p className="text-[15px] font-bold text-[#064A91]">Also in: {others.map((o) => o.name).join(" · ")}</p>
              <Link to="/contact" data-testid="industry-cta" className="btn btn-primary shrink-0">
                Get a free strategy call <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand title={`Grow your ${page.name.toLowerCase()} business online`} sub="Free strategy call in Tamil or English. An honest plan, itemised pricing and weekly reports." />
    </>
  );
}
