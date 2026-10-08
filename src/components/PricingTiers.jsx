import { Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import { PRICING } from "../data/content";

export const PricingTiers = () => (
  <div className="grid gap-6 md:grid-cols-3" data-testid="pricing-tiers">
    {PRICING.map((tier, i) => (
      <Reveal key={tier.name} delay={i * 0.08} className="h-full">
        <div
          data-testid={`pricing-card-${tier.name.toLowerCase()}`}
          className={`card relative flex h-full flex-col p-7 transition-shadow duration-300 hover:shadow-[0_12px_36px_rgba(6,74,145,0.14)] ${
            tier.featured ? "ring-2 ring-[#FFBD19]" : ""
          }`}
        >
          {tier.featured && (
            <span
              data-testid="pricing-featured-badge"
              className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-[#FFBD19] px-4 py-1 text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#064A91]"
            >
              Most Popular
            </span>
          )}
          <h3 className="text-xl font-bold">{tier.name}</h3>
          <p className="mt-1 text-[13px] font-semibold uppercase tracking-[0.14em] text-[#159BD7]">{tier.tagline}</p>
          <ul className="mt-6 flex-1 space-y-3.5">
            {tier.features.map((f) => (
              <li key={f} className="flex items-start gap-2.5 text-[14px] text-[#4B5563]">
                <Check size={17} strokeWidth={3} className="mt-0.5 shrink-0 text-[#159BD7]" />
                {f}
              </li>
            ))}
          </ul>
          <Link
            to="/contact"
            data-testid={`pricing-cta-${tier.name.toLowerCase()}`}
            className={`btn mt-7 w-full ${tier.featured ? "btn-primary" : "btn-outline"}`}
          >
            Get Custom Quote <ArrowRight size={16} />
          </Link>
        </div>
      </Reveal>
    ))}
  </div>
);

export default PricingTiers;
