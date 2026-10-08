import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Phone, Star, MapPin, Languages } from "lucide-react";
import { SITE, IMG } from "../../data/content";
import { WhatsAppIcon } from "../Footer";
import { HeroWaves } from "../WaveBackdrop";

const lineUp = (delay) => ({
  initial: { y: "112%" },
  animate: { y: "0%", transition: { duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] } },
});

const fade = (delay) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] } },
});

export const Hero = () => {
  const frame = useRef(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 110, damping: 16 });
  const sry = useSpring(ry, { stiffness: 110, damping: 16 });

  const onMove = (e) => {
    const r = frame.current?.getBoundingClientRect();
    if (!r) return;
    ry.set(((e.clientX - r.left) / r.width - 0.5) * 7);
    rx.set(-((e.clientY - r.top) / r.height - 0.5) * 7);
  };
  const onLeave = () => {
    rx.set(0);
    ry.set(0);
  };

  return (
    <section data-testid="hero-section" className="bg-grid relative overflow-hidden">
      <HeroWaves />
      <div className="wrap relative z-10 grid items-center gap-12 pb-14 pt-10 md:pb-20 md:pt-16 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="relative">
          <motion.p {...fade(0)} className="eyebrow" data-testid="hero-eyebrow">
            <MapPin size={13} /> Digital Marketing Agency · Chennai &amp; Erode
          </motion.p>

          <h1 className="text-[40px] font-extrabold leading-[1.04] sm:text-6xl lg:text-[64px]" data-testid="hero-heading">
            <span className="block overflow-hidden pb-1"><motion.span className="block" {...lineUp(0.1)}>Grow Your</motion.span></span>
            <span className="block overflow-hidden pb-1"><motion.span className="block" {...lineUp(0.22)}>Business,</motion.span></span>
            <span className="block overflow-hidden pb-2">
              <motion.span className="block" {...lineUp(0.34)}>
                <span className="relative inline-block text-[#159BD7]">
                  Digitally.
                  <svg className="absolute -bottom-2 left-0 h-2.5 w-full" viewBox="0 0 220 12" fill="none" preserveAspectRatio="none" aria-hidden="true">
                    <motion.path
                      d="M4 8.5C60 3.5 150 3 216 7.5"
                      stroke="#FFBD19"
                      strokeWidth="5"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.7, delay: 1.1, ease: "easeOut" }}
                    />
                  </svg>
                </span>
              </motion.span>
            </span>
          </h1>

          <motion.p {...fade(0.7)} className="mt-4 text-[15px] font-semibold" style={{ fontFamily: "'Noto Sans Tamil', sans-serif" }} data-testid="hero-tamil-tagline">
            <span className="text-[#159BD7]">{SITE.taglineTa}</span>
          </motion.p>

          <motion.p {...fade(0.82)} className="mt-4 max-w-xl text-base leading-relaxed text-[#4B5563] md:text-lg" data-testid="hero-subheadline">
            We help Tamil Nadu's shops, clinics, hotels and startups get found on Google, win leads on
            WhatsApp and grow with ads — affordable, transparent and in your language.
          </motion.p>

          <motion.div {...fade(0.95)} className="mt-8 flex flex-col gap-3 sm:flex-row" data-testid="hero-cta-row">
            <Link to="/contact" data-testid="hero-cta-strategy-call" className="btn btn-primary">
              <Phone size={17} /> Get Free Strategy Call
            </Link>
            <a href={SITE.wa} target="_blank" rel="noopener noreferrer" data-testid="hero-cta-whatsapp" className="btn btn-outline">
              <WhatsAppIcon size={18} /> Chat on WhatsApp
            </a>
          </motion.div>

          <motion.div {...fade(1.1)} className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] font-semibold text-[#4B5563]" data-testid="hero-trust-strip">
            <span className="inline-flex items-center gap-1.5">
              <Star size={15} className="fill-[#FFBD19] text-[#FFBD19]" /> Google Reviewed
            </span>
            <span className="hidden h-1 w-1 rounded-full bg-[#D8E0EC] sm:inline-block" aria-hidden="true" />
            <span>Based in Chennai &amp; Erode</span>
            <span className="hidden h-1 w-1 rounded-full bg-[#D8E0EC] sm:inline-block" aria-hidden="true" />
            <span className="inline-flex items-center gap-1.5">
              <Languages size={15} className="text-[#159BD7]" /> Tamil + English Support
            </span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div
            aria-hidden="true"
            className="absolute -right-8 -top-10 h-72 w-72 rounded-[45%_55%_60%_40%/50%_45%_55%_50%] bg-gradient-to-br from-[#159BD7]/25 to-[#FFBD19]/25 blur-2xl"
          />
          <motion.div
            ref={frame}
            onMouseMove={onMove}
            onMouseLeave={onLeave}
            style={{ rotateX: srx, rotateY: sry, transformPerspective: 900 }}
            className="relative"
            data-testid="hero-image-frame"
          >
            <img
              src={IMG.hero}
              alt="Digital marketing results — more traffic, more sales"
              fetchPriority="high"
              className="relative aspect-[3/2] w-full rounded-[28px] border border-[#E5EAF2] object-cover shadow-[0_20px_60px_rgba(6,74,145,0.18)]"
              data-testid="hero-image"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
