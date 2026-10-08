import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import Reveal from "./Reveal";

export const PageHero = ({ eyebrow, title, sub, image, imageClass = "", children }) => (
  <section className="bg-grid relative overflow-hidden border-b border-[#E5EAF2]">
    <div className={`wrap grid items-center gap-10 py-12 md:py-20 ${image ? "lg:grid-cols-[1.15fr_0.85fr]" : ""}`}>
      <Reveal>
        <nav aria-label="Breadcrumb" className="mb-5 flex items-center gap-1 text-[12px] font-semibold text-[#93A3BD]">
          <Link to="/" data-testid="breadcrumb-home" className="transition-colors duration-200 hover:text-[#159BD7]">Home</Link>
          <ChevronRight size={13} />
          <span className="text-[#159BD7]">{eyebrow}</span>
        </nav>
        <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">{title}</h1>
        {sub && <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#4B5563] md:text-lg">{sub}</p>}
        {children && <div className="mt-7 flex flex-col gap-3 sm:flex-row">{children}</div>}
      </Reveal>
      {image && (
        <Reveal delay={0.12} className="hidden lg:block">
          <div className="relative">
            <div className="absolute -inset-3 rounded-[28px] bg-[#159BD7]/10" aria-hidden="true" />
            <img
              src={image}
              alt={title}
              loading="eager"
              className={`relative ${imageClass} h-auto w-full rounded-2xl border border-[#E5EAF2] object-cover shadow-[0_4px_20px_rgba(6,74,145,0.08)]`}
            />
          </div>
        </Reveal>
      )}
    </div>
  </section>
);

export default PageHero;
