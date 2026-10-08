import { BadgeCheck } from "lucide-react";
import Reveal from "../Reveal";
import PricingTiers from "../PricingTiers";

export const PricingSection = () => (
  <section data-testid="pricing-section" className="section">
    <div className="wrap">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="eyebrow">Pricing</p>
        <h2 className="text-3xl sm:text-4xl">Honest plans, sized to your budget.</h2>
        <p className="mt-4 text-base leading-relaxed text-[#4B5563] md:text-lg">
          Every business is different, so we quote after a free strategy call — not before. Pick a
          starting point and get an itemised, GST-invoiced quote within a day.
        </p>
      </Reveal>

      <div className="mt-12">
        <PricingTiers />
      </div>

      <Reveal delay={0.15} className="mt-8 flex flex-wrap items-center justify-center gap-x-7 gap-y-2 text-[13px] font-semibold text-[#4B5563]">
        <span className="inline-flex items-center gap-1.5"><BadgeCheck size={15} className="text-[#159BD7]" /> GST invoice every month</span>
        <span className="inline-flex items-center gap-1.5"><BadgeCheck size={15} className="text-[#159BD7]" /> No long lock-ins</span>
        <span className="inline-flex items-center gap-1.5"><BadgeCheck size={15} className="text-[#159BD7]" /> Full ad-spend transparency</span>
      </Reveal>
    </div>
  </section>
);

export default PricingSection;
