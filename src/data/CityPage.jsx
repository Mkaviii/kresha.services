import { Link } from "react-router-dom";
import { BadgeCheck, ArrowRight } from "lucide-react";
import { Seo } from "../components/Seo";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import CtaBand from "../components/CtaBand";
import FaqAccordion from "../components/FaqAccordion";
import { CITIES, SERVICES, SITE } from "../data/content";

export default function CityPage({ city }) {
  const c = CITIES[city];
  const other = CITIES[city === "chennai" ? "erode" : "chennai"];

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: c.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <Seo title={`${c.title} | Kresha Services`} description={c.meta} path={c.path} jsonLd={faqLd} />

      <PageHero eyebrow={`Kresha · ${c.name}`} title={c.heroTitle} sub={c.heroSub} image={c.image}>
        <Link to="/contact" data-testid="city-hero-cta" className="btn btn-primary">
          Get a Free Consultation <ArrowRight size={16} />
        </Link>
        <a href={SITE.wa} target="_blank" rel="noreferrer" data-testid="city-hero-whatsapp" className="btn btn-outline">
          WhatsApp Us
        </a>
      </PageHero>

      <section className="section">
        <div className="wrap grid gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl">{c.aboutTitle}</h2>
            {c.about.map((p) => (
              <p key={p} className="mt-5 text-[15px] leading-relaxed text-[#4B5563] md:text-base">{p}</p>
            ))}
            <h3 className="mt-9 text-xl">{c.whyTitle}</h3>
            <ul className="mt-5 grid gap-3.5" data-testid="city-why-points">
              {c.why.map((p) => (
                <li key={p} className="flex items-start gap-3 text-[14.5px] font-semibold text-[#064A91]">
                  <BadgeCheck size={19} className="mt-0.5 shrink-0 text-[#159BD7]" />
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <h3 className="text-xl">Explore our services</h3>
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

      <section className="section bg-[#F5F8FC]" data-testid="city-service-list">
        <div className="wrap">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl">{c.servicesTitle}</h2>
          </Reveal>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {c.services.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.04}>
                <div className="card h-full p-6">
                  <h3 className="text-[16px] font-bold text-[#064A91]">{s.title}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-[#4B5563]">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" data-testid="city-who">
        <div className="wrap">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl">{c.whoTitle}</h2>
          </Reveal>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {c.who.map((w, i) => (
              <Reveal key={w.title} delay={i * 0.04}>
                <div className="card h-full p-6">
                  <h3 className="text-[16px] font-bold text-[#064A91]">{w.title}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-[#4B5563]">{w.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-[#F5F8FC]" data-testid="city-faq">
        <div className="wrap max-w-3xl">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl">Questions people ask in {c.name}</h2>
            <div className="mt-6">
              <FaqAccordion faqs={c.faqs} />
            </div>
            <p className="mt-8 text-[14px] text-[#4B5563]">
              Also serving {other.name}.{" "}
              <Link to={other.path} data-testid="city-other-link" className="font-bold text-[#159BD7] hover:underline">
                {other.title}
              </Link>
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBand title={c.ctaTitle} sub={c.ctaSub} />
    </>
  );
}
