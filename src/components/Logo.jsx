export const Logo = ({ light = false }) =>
  light ? (
    <span className="inline-flex items-center rounded-xl bg-white px-3 py-1.5" aria-label="Kresha Services">
      <img src="/logo.png" alt="Kresha Services — Grow Your Business, Digitally." className="h-11 w-auto" />
    </span>
  ) : (
    <img src="/logo.png" alt="Kresha Services — Grow Your Business, Digitally." className="h-14 w-auto" aria-label="Kresha Services" />
  );

export default Logo;
