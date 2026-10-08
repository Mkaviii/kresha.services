import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X, Calculator } from "lucide-react";
import Logo from "./Logo";
import { NAV, SITE } from "../data/content";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (item) =>
    item.to.includes("#") ? false : pathname === item.to;

  return (
    <header
      data-testid="site-navbar"
      className={`sticky top-0 z-50 bg-white/90 backdrop-blur-md transition-shadow duration-300 ${
        scrolled ? "shadow-[0_4px_20px_rgba(6,74,145,0.12)]" : "border-b border-[#E5EAF2]"
      }`}
    >
      <div className="wrap flex h-[72px] items-center justify-between">
        <Link to="/" data-testid="navbar-logo-link" aria-label="Kresha Services home" className="shrink-0 pr-2 md:pr-5">
          <Logo />
        </Link>

        <nav className="hidden lg:flex items-center gap-5 whitespace-nowrap" aria-label="Primary">
          {NAV.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              data-testid={`nav-link-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
              className={`text-[14px] font-semibold transition-colors duration-200 ${
                isActive(item) ? "text-[#159BD7]" : "text-[#064A91] hover:text-[#159BD7]"
              }`}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-2.5">
          <a
            href={SITE.tel}
            data-testid="navbar-call-link"
            className="inline-flex items-center gap-2 rounded-lg border-2 border-[#064A91] px-4 py-2 text-[14px] font-bold text-[#064A91] transition-colors duration-200 hover:bg-[#064A91] hover:text-white"
          >
            <Phone size={15} strokeWidth={2.4} />
            {SITE.phoneDisplay}
          </a>
          <Link
            to="/contact"
            data-testid="navbar-get-started-cta"
            className="inline-flex h-11 items-center justify-center rounded-lg bg-[#FFBD19] px-5 text-[14px] font-bold text-[#064A91] transition-colors duration-200 hover:bg-[#FFCA3D]"
          >
            Get Started
          </Link>
        </div>

        <div className="flex lg:hidden items-center gap-2.5">
          <a
            href={SITE.tel}
            data-testid="navbar-mobile-call-button"
            aria-label={`Call ${SITE.phoneDisplay}`}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border-2 border-[#064A91] text-[#064A91] transition-colors duration-200 hover:bg-[#064A91] hover:text-white"
          >
            <Phone size={19} strokeWidth={2.2} />
          </a>
          <button
            onClick={() => setOpen(!open)}
            data-testid="navbar-mobile-menu-button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-[#064A91] text-white"
          >
            {open ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </div>

      <div
        className="flex items-center gap-2 overflow-x-auto border-t border-[#E5EAF2] bg-white px-5 py-2 lg:hidden [scrollbar-width:none]"
        data-testid="mobile-quick-links"
      >
        <Link
          to="/campaign-calculator"
          data-testid="mobile-quick-free-tools"
          className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-[#FFBD19] px-3.5 py-2 text-[12.5px] font-extrabold text-[#064A91]"
        >
          <Calculator size={14} /> Free Tools
        </Link>
        <Link
          to="/contact"
          data-testid="mobile-quick-quote"
          className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-[#064A91] px-3.5 py-2 text-[12.5px] font-bold text-[#064A91]"
        >
          Get Custom Quote
        </Link>
        <a
          href={SITE.wa}
          target="_blank"
          rel="noopener noreferrer"
          data-testid="mobile-quick-whatsapp"
          className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-[#25D366] px-3.5 py-2 text-[12.5px] font-bold text-white"
        >
          WhatsApp Us
        </a>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            data-testid="mobile-menu-drawer"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="fixed inset-x-0 top-[72px] bottom-0 z-40 overflow-y-auto bg-white lg:hidden"
          >
            <nav className="wrap flex flex-col gap-1 py-6" aria-label="Mobile">
              {NAV.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.to}
                  data-testid={`mobile-nav-link-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                  className="rounded-lg px-3 py-4 text-xl font-bold text-[#064A91] transition-colors duration-200 hover:bg-[#F5F7FA] hover:text-[#159BD7]"
                >
                  {item.label}
                </NavLink>
              ))}
              <div className="mt-4 flex flex-col gap-3 pb-10">
                <a href={SITE.tel} data-testid="mobile-menu-call-cta" className="btn btn-outline">
                  <Phone size={17} /> Call {SITE.phoneDisplay}
                </a>
                <Link to="/contact" data-testid="mobile-menu-get-started-cta" className="btn btn-primary">
                  Get Started
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
