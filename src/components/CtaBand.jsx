import { Phone } from "lucide-react";
import Reveal from "./Reveal";
import { WhatsAppIcon } from "./Footer";
import { SITE } from "../data/content";

export const CtaBand = ({ title = "Ready to grow your business online?", sub = "Talk to us in Tamil or English — get a free strategy call and a clear, no-pressure 30-day plan." }) => (
  <section data-testid="cta-band" className="noise bg-[#FFBD19]">
    <div className="wrap flex flex-col items-start gap-8 py-14 md:flex-row md:items-center md:justify-between md:py-20">
      <Reveal className="max-w-2xl">
        <h2 className="text-3xl font-bold !text-[#064A91] sm:text-4xl">{title}</h2>
        <p className="mt-4 text-[15px] font-medium leading-relaxed text-[#064A91]/80 md:text-lg">{sub}</p>
      </Reveal>
      <Reveal delay={0.1} className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
        <a href={SITE.tel} data-testid="cta-band-call-button" className="btn btn-navy">
          <Phone size={17} /> Call {SITE.phoneDisplay}
        </a>
        <a
          href={SITE.wa}
          target="_blank"
          rel="noopener noreferrer"
          data-testid="cta-band-whatsapp-button"
          className="btn bg-white text-[#064A91] transition-colors duration-200 hover:bg-[#064A91] hover:text-white"
        >
          <WhatsAppIcon size={18} /> Chat on WhatsApp
        </a>
      </Reveal>
    </div>
  </section>
);

export default CtaBand;
