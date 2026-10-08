import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "../Reveal";
import { PROCESS } from "../../data/content";

export const ProcessBand = () => (
  <section data-testid="process-section" className="noise bg-[#123B70]">
    <div className="wrap py-14 md:py-24">
      <Reveal className="max-w-2xl">
        <p className="eyebrow !text-[#7FD4FF]">Our process</p>
        <h2 className="text-3xl !text-white sm:text-4xl">A process built for busy owners.</h2>
        <p className="mt-4 text-base leading-relaxed text-white/70 md:text-lg">
          No 40-page proposals. One clear method that starts with a free call and shows you results
          every single week.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-10 md:grid-cols-4 md:gap-6" data-testid="process-steps">
        {PROCESS.map((step, i) => (
          <Reveal key={step.n} delay={i * 0.1}>
            <div className="flex items-center gap-4 md:flex-col md:items-start md:gap-0">
              <span className="text-5xl font-extrabold text-[#159BD7]/60 md:text-6xl">{step.n}</span>
              <span className="hidden h-px flex-1 border-t border-dashed border-white/25 md:mt-5 md:block" aria-hidden="true" />
            </div>
            <h3 className="mt-3 text-xl !text-white">{step.title}</h3>
            <p className="mt-2.5 text-[14px] leading-relaxed text-white/70">{step.desc}</p>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.2} className="mt-14">
        <Link to="/contact" data-testid="process-cta" className="btn btn-primary">
          Start with a free strategy call <ArrowRight size={16} />
        </Link>
      </Reveal>
    </div>
  </section>
);

export default ProcessBand;
