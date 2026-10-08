import { WhatsAppIcon } from "./Footer";
import { SITE } from "../data/content";

export const WhatsAppFab = () => (
  <a
    href={SITE.wa}
    target="_blank"
    rel="noopener noreferrer"
    data-testid="whatsapp-fab"
    aria-label="Chat with us on WhatsApp"
    className="fixed bottom-5 right-5 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_rgba(37,211,102,0.45)] transition-transform duration-200 hover:scale-110 active:scale-95"
  >
    <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping [animation-duration:2.4s]" aria-hidden="true" />
    <WhatsAppIcon size={28} />
  </a>
);

export default WhatsAppFab;
