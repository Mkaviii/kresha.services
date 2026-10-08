import { Link } from "react-router-dom";
import { BadgeCheck, ArrowRight } from "lucide-react";
import { Seo } from "../components/Seo";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import CtaBand from "../components/CtaBand";
import { CITIES, SERVICES } from "../data/content";

export default function CityPage({ city }) {
  const c = CITIES[city];

  return (
    <>
      <Seo title={`${c.title} | Kresha Services`} description={c.meta} path={c.path} />

      <PageHero eyebrow={`Kresha · ${c.name}`} title={c.title} sub={c.intro[0]} image={c.image} />

      <section className="section">
        <div className="wrap grid gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl">Digital marketing that understands {c.name}</h2>
            <p className="mt-6 text-[15px] leading-relaxed text-[#4B5563] md:text-base">{c.intro[1]}</p>
            <ul className="mt-8 grid gap-3.5" data-testid="city-local-points">
              {c.localPoints.map((p) => (
                <li key={p} className="flex items-start gap-3 text-[14.5px] font-semibold text-[#064A91]">
                  <BadgeCheck size={19} className="mt-0.5 shrink-0 text-[#159BD7]" />
                  {p}
                </li>
              ))}
            </ul>
            <Link to="/contact" data-testid="city-cta" className="btn btn-primary mt-9">
              Book a free strategy call <ArrowRight size={16} />
            </Link>
          </Reveal>

          <Reveal delay={0.1}>
            <h3 className="text-xl">Everything a {c.name} business needs</h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2" data-testid="city-services">
              {SERVICES.map((s) => (
                <Link
                  key={s.slug}
                  to={`/services/${s.slug}`}
                  data-testid={`city-service-link-${s.slug}`}
                  className="card group flex items-center gap-4 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_44px_rgba(6,74,145,0.14)]"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#159BD7]/10 text-[#159BD7] transition-colors duration-300 group-hover:bg-[#159BD7] group-hover:text-white">
                    <s.icon size={20} />
                  </span>
                  <span className="text-[14px] font-bold text-[#064A91]">{s.short}</span>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand title={`Ready to grow your ${c.name} business?`} sub="Free strategy call in Tamil or English — an honest plan for your market, your budget." />
    </>
  );
}
