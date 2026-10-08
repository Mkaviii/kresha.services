import Reveal from "../Reveal";
import { WHY } from "../../data/content";
import { SectionWaves } from "../WaveBackdrop";

export const WhyUs = () => (
  <section data-testid="why-us-section" className="section relative overflow-hidden bg-[#F5F7FA]">
    <SectionWaves />
    <div className="wrap relative">
      <Reveal className="max-w-2xl">
        <p className="eyebrow">Why choose us</p>
        <h2 className="text-3xl sm:text-4xl">Built for Indian businesses, not boardrooms.</h2>
      </Reveal>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" data-testid="why-us-grid">
        {WHY.map((w, i) => (
          <Reveal key={w.title} delay={i * 0.08} className="h-full">
            <div className="card h-full p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_44px_rgba(6,74,145,0.14)]" data-testid={`why-card-${i}`}>
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#159BD7]/10 text-[#159BD7]">
                <w.icon size={22} />
              </span>
              <h3 className="mt-5 text-lg">{w.title}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-[#4B5563]">{w.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default WhyUs;
