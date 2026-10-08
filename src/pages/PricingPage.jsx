import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Seo } from "../components/Seo";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import PricingTiers from "../components/PricingTiers";
import CtaBand from "../components/CtaBand";

export default function PricingPage() {
  return (
    <>
      <Seo
        title="Pricing — Digital Marketing Packages for Tamil Nadu Businesses | Kresha Services"
        description="Transparent digital marketing packages: Starter, Growth and Pro. SEO, Google Ads, social media, websites and design. GST invoiced, no long lock-ins."
        path="/pricing"
      />

      <PageHero
        eyebrow="Pricing"
        title="Honest plans, sized to your budget."
        sub="Every business is different, so we quote after a free strategy call — not before. Expect an itemised, GST-invoiced quote within a day."
      >
        <Link to="/contact" data-testid="pricing-hero-cta" className="btn btn-primary">
          Get Custom Quote <ArrowRight size={16} />
        </Link>
      </PageHero>

      <section className="section">
        <div className="wrap">
          <PricingTiers />

          <Reveal delay={0.15} className="mx-auto mt-12 max-w-2xl">
            <div className="card p-6 text-center" data-testid="pricing-note">
              <p className="text-[14.5px] leading-relaxed text-[#4B5563]">
                <span className="font-bold text-[#064A91]">How quoting works:</span> on the free
                strategy call we map your goals to channels, then quote exactly what's needed —
                nothing padded. Ad spend is paid directly to Google/Meta so you always see where
                every rupee goes.
              </p>
              <p className="mt-4 text-[13px] font-semibold text-[#064A91]">
                Questions? Read the{" "}
                <Link to="/faq" data-testid="pricing-faq-link" className="text-[#159BD7] underline underline-offset-2">pricing FAQ</Link>{" "}
                or call 93631 00998.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand title="Let's price your growth plan" sub="A 20-minute call is all it takes to get an honest, itemised quote in Tamil or English." />
    </>
  );
}
