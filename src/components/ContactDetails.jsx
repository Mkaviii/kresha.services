import { Phone, Mail, MapPin, Clock, BadgeCheck, Youtube, Instagram, Facebook, Linkedin } from "lucide-react";
import { WhatsAppIcon } from "./Footer";
import { SITE } from "../data/content";

export const ContactDetails = () => (
  <div data-testid="contact-details" className="flex flex-col gap-7">
    <div>
      <h3 className="text-2xl font-bold">Talk to a human</h3>
      <p className="mt-2 text-[15px] leading-relaxed text-[#4B5563]">
        No ticket numbers, no chatbots. Call or WhatsApp us directly — in Tamil or English.
      </p>
    </div>

    <ul className="space-y-4">
      <li>
        <a href={SITE.tel} data-testid="contact-details-phone" className="card flex items-center gap-4 p-4 transition-shadow duration-300 hover:shadow-[0_12px_36px_rgba(6,74,145,0.14)]">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#159BD7]/10 text-[#159BD7]"><Phone size={19} /></span>
          <span>
            <span className="block text-[13px] font-semibold text-[#93A3BD]">Call us</span>
            <span className="block font-bold text-[#064A91]">{SITE.phoneDisplay}</span>
          </span>
        </a>
      </li>
      <li>
        <a href={SITE.wa} target="_blank" rel="noopener noreferrer" data-testid="contact-details-whatsapp" className="card flex items-center gap-4 p-4 transition-shadow duration-300 hover:shadow-[0_12px_36px_rgba(6,74,145,0.14)]">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#25D366]/15 text-[#1FAF4F]"><WhatsAppIcon size={20} /></span>
          <span>
            <span className="block text-[13px] font-semibold text-[#93A3BD]">WhatsApp us</span>
            <span className="block font-bold text-[#064A91]">Fastest reply — usually minutes</span>
          </span>
        </a>
      </li>
      <li>
        <a href={`mailto:${SITE.email}`} data-testid="contact-details-email" className="card flex items-center gap-4 p-4 transition-shadow duration-300 hover:shadow-[0_12px_36px_rgba(6,74,145,0.14)]">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#159BD7]/10 text-[#159BD7]"><Mail size={19} /></span>
          <span>
            <span className="block text-[13px] font-semibold text-[#93A3BD]">Email us</span>
            <span className="block break-all font-bold text-[#064A91]">{SITE.email}</span>
          </span>
        </a>
      </li>
    </ul>

    <div className="card space-y-3 p-5 text-[14px] text-[#4B5563]">
      <p className="flex items-start gap-3"><MapPin size={17} className="mt-0.5 shrink-0 text-[#159BD7]" /> Serving Chennai &amp; Erode, Tamil Nadu — and all of India online</p>
      <p className="flex items-start gap-3"><BadgeCheck size={17} className="mt-0.5 shrink-0 text-[#159BD7]" /> Service-area business: we meet you at your shop, office or site</p>
      <p className="flex items-start gap-3"><Clock size={17} className="mt-0.5 shrink-0 text-[#159BD7]" /> Mon–Sat, 10am–7pm IST</p>
      <p className="flex items-start gap-3">
        <Youtube size={17} className="mt-0.5 shrink-0 text-[#159BD7]" />
        <a href={SITE.youtube} target="_blank" rel="noopener noreferrer" data-testid="contact-details-youtube" className="font-semibold text-[#159BD7]">youtube.com/@KreshaServices</a>
      </p>
    </div>

    <div className="flex items-center gap-3" data-testid="contact-socials">
      <span className="text-[13px] font-bold text-[#064A91]">Follow us:</span>
      {[
        { href: SITE.youtube, icon: Youtube, label: "YouTube", test: "social-youtube" },
        { href: SITE.instagram, icon: Instagram, label: "Instagram", test: "social-instagram" },
        { href: SITE.facebook, icon: Facebook, label: "Facebook", test: "social-facebook" },
        { href: SITE.linkedin, icon: Linkedin, label: "LinkedIn", test: "social-linkedin" },
        { href: SITE.wa, icon: null, label: "WhatsApp", test: "social-whatsapp" },
      ].map((s) => (
        <a
          key={s.test}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          data-testid={`contact-${s.test}`}
          aria-label={`Kresha Services on ${s.label}`}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#F5F7FA] text-[#064A91] transition-colors duration-200 hover:bg-[#159BD7] hover:text-white"
        >
          {s.icon ? <s.icon size={18} /> : <WhatsAppIcon size={18} />}
        </a>
      ))}
    </div>
  </div>
);

export default ContactDetails;
