import { useParams, Link } from "react-router-dom";
import { Check, ArrowRight, BadgeCheck } from "lucide-react";
import { Seo } from "../components/Seo";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import CtaBand from "../components/CtaBand";
import { SERVICES, serviceSchema } from "../data/content";

export default function ServicePage() {
  const { slug } = useParams();
  const s = SERVICES.find((x) => x.slug === slug);

  if (!s) {
    return (
      <section className="wrap flex min-h-[50vh] flex-col items-center justify-center gap-5 py-20 text-center">
        <p className="text-lg font-bold text-[#064A91]">Service not found.</p>
        <Link to="/" data-testid="service-not-found-home" className="btn btn-primary">Back to Home</Link>
      </section>
    );
  }

  const Icon = s.icon;

  return (
    <>
      <Seo title={`${s.title} in Chennai & Erode | Kresha Services`} description={s.meta} path={`/services/${s.slug}`} jsonLd={serviceSchema(s)} />

      <PageHero eyebrow={s.short} title={s.title} sub={s.hero} image={s.image}>
        <Link to="/contact" data-testid="service-hero-cta" className="btn btn-primary">
          Get Free Strategy Call <ArrowRight size={16} />
        </Link>
        <span className="hidden h-16 w-16 items-center justify-center rounded-2xl bg-[#159BD7]/10 text-[#159BD7] sm:flex">
          <Icon size={30} />
        </span>
      </PageHero>

      <section className="section">
        <div className="wrap grid gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Reveal>
              <h2 className="text-2xl sm:text-3xl">What's included</h2>
              <ul className="mt-7 grid gap-4 sm:grid-cols-2" data-testid="service-includes">
                {s.includes.map((inc) => (
                  <li key={inc} className="card flex items-start gap-3 p-4 text-[14px] font-semibold text-[#064A91]">
                    <Check size={17} strokeWidth={3} className="mt-0.5 shrink-0 text-[#159BD7]" />
                    {inc}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.1} className="mt-14">
              <h2 className="text-2xl sm:text-3xl">What you can expect</h2>
              <div className="mt-7 grid gap-4 sm:grid-cols-3" data-testid="service-outcomes">
                {s.outcomes.map((o) => (
                  <div key={o.title} className="card h-full p-5">
                    <p className="text-[15px] font-bold text-[#064A91]">{o.title}</p>
                    <p className="mt-2 text-[13px] leading-relaxed text-[#4B5563]">{o.desc}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <div className="card sticky top-24 p-7" data-testid="service-side-card">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#159BD7]/10 text-[#159BD7]">
                <Icon size={26} />
              </span>
              <h3 className="mt-5 text-xl">Start with a free call</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-[#4B5563]">
                20 minutes in Tamil or English. We'll tell you honestly whether {s.short.toLowerCase()} is
                the right investment for your business right now — and what it would cost.
              </p>
              <p className="mt-3 flex items-center gap-2 text-[12.5px] font-bold text-[#064A91]" data-testid="service-audit-note">
                <BadgeCheck size={15} className="shrink-0 text-[#159BD7]" />
                Every first call includes a free website &amp; SEO audit
              </p>
              <Link to="/contact" data-testid="service-side-cta" className="btn btn-primary mt-6 w-full">Get Custom Quote</Link>
              <p className="mt-3 text-center text-[12px] text-[#93A3BD]">No pressure · No long lock-ins · GST invoice</p>

              <div className="mt-7 border-t border-[#E5EAF2] pt-6">
                <p className="text-[12px] font-extrabold uppercase tracking-[0.18em] text-[#93A3BD]">Other services</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {SERVICES.filter((x) => x.slug !== s.slug).map((x) => (
                    <Link
                      key={x.slug}
                      to={`/services/${x.slug}`}
                      data-testid={`service-cross-link-${x.slug}`}
                      className="rounded-full border border-[#E5EAF2] px-3.5 py-2 text-[12.5px] font-bold text-[#064A91] transition-colors duration-200 hover:border-[#159BD7] hover:text-[#159BD7]"
                    >
                      {x.short}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand title={`Ready to grow with ${s.short}?`} sub={`Book a free strategy call — we'll show you exactly how ${s.short.toLowerCase()} would work for your business, in Tamil or English.`} />
    </>
  );
}
