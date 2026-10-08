import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Youtube, Clock, Instagram, Facebook, Linkedin } from "lucide-react";
import Logo from "./Logo";
import { SITE, SERVICES, INDUSTRIES, CITIES } from "../data/content";

const WhatsAppIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export { WhatsAppIcon };

export const Footer = () => (
  <footer data-testid="site-footer" className="noise bg-[#064A91] text-white">
    <div className="wrap grid gap-12 py-14 md:grid-cols-2 md:py-20 lg:grid-cols-4">
      <div>
        <Logo light />
        <p className="mt-5 text-[15px] leading-relaxed text-white/75">
          Grow Your Business, Digitally. Affordable, effective and transparent digital marketing for
          businesses in Chennai, Erode and across India.
        </p>
        <div className="mt-6 flex items-center gap-3">
          <a
            href={SITE.youtube}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="footer-youtube-link"
            aria-label="Kresha Services on YouTube"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 transition-colors duration-200 hover:bg-[#FFBD19] hover:text-[#064A91]"
          >
            <Youtube size={18} />
          </a>
          <a
            href={SITE.instagram}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="footer-instagram-link"
            aria-label="Kresha Services on Instagram"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 transition-colors duration-200 hover:bg-[#E1306C]"
          >
            <Instagram size={18} />
          </a>
          <a
            href={SITE.facebook}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="footer-facebook-link"
            aria-label="Kresha Services on Facebook"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 transition-colors duration-200 hover:bg-[#1877F2]"
          >
            <Facebook size={18} />
          </a>
          <a
            href={SITE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="footer-linkedin-link"
            aria-label="Kresha Services on LinkedIn"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 transition-colors duration-200 hover:bg-[#0A66C2]"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={SITE.wa}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="footer-whatsapp-link"
            aria-label="Chat on WhatsApp"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 transition-colors duration-200 hover:bg-[#25D366]"
          >
            <WhatsAppIcon />
          </a>
          <a
            href={`mailto:${SITE.email}`}
            data-testid="footer-email-link"
            aria-label={`Email ${SITE.email}`}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 transition-colors duration-200 hover:bg-[#159BD7]"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[#7FD4FF]">Services</h3>
        <ul className="mt-5 space-y-3">
          {SERVICES.map((s) => (
            <li key={s.slug}>
              <Link
                to={`/services/${s.slug}`}
                data-testid={`footer-service-link-${s.slug}`}
                className="text-[14px] text-white/75 transition-colors duration-200 hover:text-[#FFBD19]"
              >
                {s.short}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[#7FD4FF]">Explore</h3>
        <ul className="mt-5 space-y-3">
          {Object.values(CITIES).map((c) => (
            <li key={c.path}>
              <Link
                to={c.path}
                data-testid={`footer-city-link-${c.name.toLowerCase()}`}
                className="text-[14px] text-white/75 transition-colors duration-200 hover:text-[#FFBD19]"
              >
                Marketing Agency in {c.name}
              </Link>
            </li>
          ))}
          {INDUSTRIES.filter((i) => i.slug).map((i) => (
            <li key={i.slug}>
              <Link
                to={`/industries/${i.slug}`}
                data-testid={`footer-industry-link-${i.slug}`}
                className="text-[14px] text-white/75 transition-colors duration-200 hover:text-[#FFBD19]"
              >
                {i.name} Marketing
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[#7FD4FF]">Contact</h3>
        <ul className="mt-5 space-y-4 text-[14px] text-white/75">
          <li>
            <a href={SITE.tel} data-testid="footer-phone-link" className="flex items-start gap-3 transition-colors duration-200 hover:text-[#FFBD19]">
              <Phone size={17} className="mt-0.5 shrink-0 text-[#7FD4FF]" />
              {SITE.phoneDisplay}
            </a>
          </li>
          <li>
            <a href={`mailto:${SITE.email}`} data-testid="footer-email-text-link" className="flex items-start gap-3 break-all transition-colors duration-200 hover:text-[#FFBD19]">
              <Mail size={17} className="mt-0.5 shrink-0 text-[#7FD4FF]" />
              {SITE.email}
            </a>
          </li>
          <li className="flex items-start gap-3">
            <MapPin size={17} className="mt-0.5 shrink-0 text-[#7FD4FF]" />
            Serving Chennai &amp; Erode, Tamil Nadu
          </li>
          <li className="flex items-start gap-3">
            <Clock size={17} className="mt-0.5 shrink-0 text-[#7FD4FF]" />
            Mon–Sat, 10am–7pm IST
          </li>
        </ul>
      </div>
    </div>

    <div className="border-t border-white/15">
      <div className="wrap flex flex-col items-start justify-between gap-2 py-6 text-[13px] text-white/60 md:flex-row md:items-center">
        <span data-testid="footer-copyright">© {new Date().getFullYear()} Kresha Services. All rights reserved.</span>
        <span className="font-semibold text-white/75">Grow Your Business, Digitally.</span>
      </div>
    </div>
  </footer>
);

export default Footer;
