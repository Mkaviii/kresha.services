import { MARQUEE_ITEMS } from "../data/content";

const Row = ({ hidden = false }) => (
  <div aria-hidden={hidden} className="flex shrink-0 items-center">
    {MARQUEE_ITEMS.map((item) => (
      <span key={item} className="flex items-center whitespace-nowrap">
        <span className="px-6 text-[13px] font-bold uppercase tracking-[0.22em] text-[#064A91]/70 md:px-9 md:text-sm">
          {item}
        </span>
        <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
          <rect x="1.7" y="1.7" width="6.6" height="6.6" rx="1.5" transform="rotate(45 5 5)" fill="#159BD7" />
        </svg>
      </span>
    ))}
  </div>
);

export const Marquee = () => (
  <div data-testid="services-marquee" className="marquee overflow-hidden border-y border-[#E5EAF2] bg-white py-4">
    <div className="marquee-track">
      <Row />
      <Row hidden />
    </div>
  </div>
);

export default Marquee;
