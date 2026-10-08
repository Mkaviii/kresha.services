import { Link } from "react-router-dom";
import Reveal from "../Reveal";
import { INDUSTRIES, INDUSTRY_PAGES } from "../../data/content";

export const Industries = () => (
  <section id="industries" data-testid="industries-section" className="section">
    <div className="wrap">
      <Reveal className="max-w-2xl">
        <p className="eyebrow">Industries we serve</p>
        <h2 className="text-3xl sm:text-4xl">We speak your industry's language.</h2>
        <p className="mt-4 text-base leading-relaxed text-[#4B5563] md:text-lg">
          From Erode's textile mills to Chennai's clinics and startups — strategies shaped around
          how your customers actually buy.
        </p>
      </Reveal>
    </div>

    <div className="wrap mt-12 hidden gap-5 sm:grid lg:grid-cols-4" data-testid="industries-grid">
      {INDUSTRIES.map((ind, i) => {
        const inner = (
          <>
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#159BD7]/10 text-[#159BD7] transition-colors duration-300 group-hover:bg-[#159BD7] group-hover:text-white">
              <ind.icon size={22} />
            </span>
            <span className="mt-4 block text-[15.5px] font-bold text-[#064A91]">{ind.name}</span>
            <span className="mt-1 block text-[13px] leading-snug text-[#4B5563]">{ind.blurb}</span>
          </>
        );
        const cls = `card group h-full p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_44px_rgba(6,74,145,0.14)] ${ind.slug ? "" : "opacity-90"}`;
        return (
          <Reveal key={ind.name} delay={(i % 4) * 0.07} className="h-full">
            {ind.slug ? (
              <Link to={`/industries/${ind.slug}`} data-testid={`industry-card-${ind.slug}`} className={cls}>{inner}</Link>
            ) : (
              <div className={cls} data-testid={`industry-card-${ind.name.toLowerCase().replace(/\s+/g, "-")}`}>{inner}</div>
            )}
          </Reveal>
        );
      })}
    </div>

    <div className="wrap mt-10 sm:hidden" data-testid="industries-cards-mobile">
      <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3 [scrollbar-width:none]">
        {INDUSTRIES.map((ind) => {
          const img = INDUSTRY_PAGES[ind.slug]?.image;
          const card = (
            <>
              <div className="h-[104px] w-full overflow-hidden">
                <img src={img} alt={ind.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
              </div>
              <div className="p-3">
                <p className="text-[13.5px] font-bold leading-tight text-[#064A91]">{ind.name}</p>
                <p className="mt-1 text-[11.5px] leading-snug text-[#4B5563]">{ind.blurb}</p>
              </div>
            </>
          );
          const cls = "group w-[172px] shrink-0 snap-start overflow-hidden rounded-2xl border border-[#E5EAF2] bg-white text-left shadow-[0_4px_20px_rgba(6,74,145,0.08)]";
          return ind.slug ? (
            <Link key={ind.name} to={`/industries/${ind.slug}`} data-testid={`industry-card-m-${ind.slug}`} className={cls}>{card}</Link>
          ) : (
            <div key={ind.name} className={cls}>{card}</div>
          );
        })}
      </div>
      <p className="mt-1 text-[11.5px] text-[#93A3BD]">Swipe to see all industries →</p>
    </div>
  </section>
);

export default Industries;
