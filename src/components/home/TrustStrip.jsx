import { Star, MapPin, Languages, BadgeCheck } from "lucide-react";
import Reveal from "../Reveal";

const ITEMS = [
  { icon: Star, title: "Google Reviewed", desc: "Real ratings from businesses like yours" },
  { icon: MapPin, title: "Chennai + Erode", desc: "Local team, local market knowledge" },
  { icon: Languages, title: "Tamil + English", desc: "Work and reports in your language" },
  { icon: BadgeCheck, title: "Service-area business", desc: "We come to your shop, office or site" },
];

export const TrustStrip = () => (
  <section data-testid="trust-strip" className="border-y border-[#E5EAF2] bg-[#F5F7FA]">
    <div className="wrap grid grid-cols-2 gap-x-6 gap-y-8 py-10 lg:grid-cols-4 md:py-12">
      {ITEMS.map((item, i) => (
        <Reveal key={item.title} delay={i * 0.07} className="flex items-start gap-3.5">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-[#159BD7] shadow-[0_4px_20px_rgba(6,74,145,0.08)]">
            <item.icon size={20} />
          </span>
          <span>
            <span className="block text-[15px] font-bold text-[#064A91]">{item.title}</span>
            <span className="mt-0.5 block text-[12.5px] leading-snug text-[#4B5563]">{item.desc}</span>
          </span>
        </Reveal>
      ))}
    </div>
  </section>
);

export default TrustStrip;
