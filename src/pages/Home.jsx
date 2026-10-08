import { Seo } from "../components/Seo";
import { localBusinessSchema, SITE } from "../data/content";
import Hero from "../components/home/Hero";
import Marquee from "../components/Marquee";
import TrustStrip from "../components/home/TrustStrip";
import ServicesGrid from "../components/home/ServicesGrid";
import WhyUs from "../components/home/WhyUs";
import Industries from "../components/home/Industries";
import ProcessBand from "../components/home/ProcessBand";
import PricingSection from "../components/home/PricingSection";
import AboutShort from "../components/home/AboutShort";
import Reviews from "../components/home/Reviews";
import FaqSection from "../components/home/FaqSection";
import CtaBand from "../components/CtaBand";
import ContactSection from "../components/home/ContactSection";

export default function Home() {
  return (
    <>
      <Seo
        title="Kresha Services — Digital Marketing Agency in Chennai & Erode"
        description="Kresha Services helps Chennai & Erode businesses grow with SEO, AI search (AEO/GEO), social media, Google Ads, websites and design. Affordable, transparent, Tamil + English support."
        path="/"
        jsonLd={localBusinessSchema}
      />
      <Hero />
      <Marquee />
      <TrustStrip />
      <ServicesGrid />
      <WhyUs />
      <Industries />
      <ProcessBand />
      <PricingSection />
      <AboutShort />
      <Reviews />
      <FaqSection />
      <CtaBand />
      <ContactSection />
    </>
  );
}
