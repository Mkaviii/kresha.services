import logoImg from "../assets/kresha-logo.png";

export const Logo = ({ light = false }) =>
  light ? (
    <span className="inline-flex items-center rounded-xl bg-white px-3 py-1.5" aria-label="Kresha Services">
      <img src={logoImg} alt="Kresha Services — Grow Your Business, Digitally." title="Kresha Services" width="166" height="44" className="h-11 w-auto" />
    </span>
  ) : (
    <img src={logoImg} alt="Kresha Services — Grow Your Business, Digitally." title="Kresha Services" width="212" height="56" className="h-14 w-auto" aria-label="Kresha Services" />
  );

export default Logo;
