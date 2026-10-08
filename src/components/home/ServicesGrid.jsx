import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "../Reveal";
import { SERVICES } from "../../data/content";

export const ServicesGrid = () => (
  <section id="services" data-testid="services-section" className="section">
    <div className="wrap">
      <Reveal className="max-w-2xl">
        <p className="eyebrow">What we do</p>
        <h2 className="text-3xl sm:text-4xl">Six services. One goal: more customers.</h2>
        <p className="mt-4 text-base leading-relaxed text-[#4B5563] md:text-lg">
          Pick one channel or run the full engine together — every service is built for Indian
          small businesses and measured in leads, not likes.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" data-testid="services-grid">
        {SERVICES.map((s, i) => (
          <Reveal key={s.slug} delay={(i % 3) * 0.08} className="h-full">
            <Link
              to={`/services/${s.slug}`}
              data-testid={`service-card-${s.slug}`}
              className="card group flex h-full flex-col p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_44px_rgba(6,74,145,0.14)]"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#159BD7]/10 text-[#159BD7] transition-colors duration-300 group-hover:bg-[#159BD7] group-hover:text-white">
                <s.icon size={22} />
              </span>
              <h3 className="mt-5 text-lg">{s.title}</h3>
              <p className="mt-2 flex-1 text-[14px] leading-relaxed text-[#4B5563]">{s.blurb}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-[13.5px] font-bold text-[#159BD7]">
                Learn more
                <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesGrid;
