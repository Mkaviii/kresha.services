import { Link } from "react-router-dom";
import { WhatsAppIcon } from "../Footer";
import FaqAccordion from "../FaqAccordion";
import Reveal from "../Reveal";
import { FAQS } from "../../data/content";
import { SectionWaves } from "../WaveBackdrop";

export const FaqSection = () => (
  <section data-testid="faq-section" className="section relative overflow-hidden bg-[#F5F7FA]">
    <SectionWaves />
    <div className="wrap relative grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
      <Reveal>
        <p className="eyebrow">FAQ</p>
        <h2 className="text-3xl sm:text-4xl">Questions? Straight answers.</h2>
        <p className="mt-4 max-w-md text-base leading-relaxed text-[#4B5563]">
          The same questions every business owner asks us — answered honestly, in plain language.
        </p>
        <div className="card mt-8 p-6">
          <p className="text-[15px] font-bold text-[#064A91]">Still unsure?</p>
          <p className="mt-1 text-[13.5px] leading-relaxed text-[#4B5563]">Message us on WhatsApp — a human replies, usually within minutes during work hours.</p>
          <a href="https://wa.me/919363100998?text=Hi%20Kresha%20Services!%20I%20have%20a%20question." target="_blank" rel="noopener noreferrer" data-testid="faq-whatsapp-cta" className="btn btn-wa mt-4">
            <WhatsAppIcon size={17} /> Ask on WhatsApp
          </a>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <FaqAccordion faqs={FAQS} />
      </Reveal>
    </div>
  </section>
);

export default FaqSection;
