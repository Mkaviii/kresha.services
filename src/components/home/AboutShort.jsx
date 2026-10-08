import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Quote } from "lucide-react";
import Reveal from "../Reveal";
import { IMG, SITE, FOUNDER } from "../../data/content";

export const AboutShort = () => (
  <section data-testid="about-section" className="section bg-[#F5F7FA]">
    <div className="wrap grid items-center gap-12 lg:grid-cols-2">
      <Reveal className="relative mx-auto w-full max-w-md lg:max-w-none">
        <div className="absolute -left-3 -top-3 h-full w-full rounded-[28px] border-2 border-[#159BD7]/30" aria-hidden="true" />
        <img
          src={IMG.founder}
          alt="Kavitha M, founder of Kresha Services"
          loading="lazy"
          className="relative aspect-[3/4] w-full rounded-[28px] border border-[#E5EAF2] object-cover shadow-[0_20px_60px_rgba(6,74,145,0.16)]"
          data-testid="about-founder-photo"
        />
        <span className="floaty absolute -bottom-5 left-5 inline-flex items-center gap-2 rounded-2xl border border-white/70 bg-white/85 px-4 py-2.5 text-[12.5px] font-bold text-[#064A91] shadow-[0_12px_36px_rgba(6,74,145,0.16)] backdrop-blur-md" data-testid="about-location-badge">
          <MapPin size={15} className="text-[#159BD7]" /> Kavitha M · Founder, {SITE.name}
        </span>
      </Reveal>

      <Reveal delay={0.1}>
        <p className="eyebrow">About Kresha</p>
        <h2 className="text-3xl sm:text-4xl">A digital growth partner, not another retainer.</h2>
        <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-[#4B5563] md:text-base" data-testid="about-story">
          <p>
            Kresha Services started with a simple observation: great local businesses across Chennai
            and Erode — textile shops, clinics, hotels, showrooms — were losing customers to
            competitors who simply showed up better on Google.
          </p>
          <p>
            We set out to fix that with affordable, effective and transparent digital marketing. No
            bloated retainers, no jargon, no hiding behind dashboards. Just clear work, explained in
            Tamil or English, measured in leads you can count on WhatsApp.
          </p>
          <p>
            Today we're a full-service digital team — SEO, AI search optimisation, social media,
            Google Ads, websites and design — built for Indian SMBs that want to grow without
            guessing.
          </p>
        </div>

        <div className="mt-7 grid gap-3 sm:grid-cols-2">
          <div className="card p-4">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#159BD7]">Vision</p>
            <p className="mt-1.5 text-[13.5px] font-semibold leading-snug text-[#064A91]">Trusted digital growth partner for Chennai, Erode and India.</p>
          </div>
          <div className="card p-4">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#159BD7]">Mission</p>
            <p className="mt-1.5 text-[13.5px] font-semibold leading-snug text-[#064A91]">Affordable, effective, transparent digital marketing.</p>
          </div>
        </div>

        <div className="card mt-4 flex items-start gap-4 p-5" data-testid="about-founder-card">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#159BD7]/10 text-[#159BD7]">
            <Quote size={18} />
          </span>
          <div>
            <p className="text-[13.5px] leading-relaxed text-[#4B5563]">{FOUNDER.bio}</p>
            <p className="mt-2.5 text-[13px] font-extrabold text-[#064A91]">
              Kavitha M <span className="font-semibold text-[#93A3BD]">· Founder, Kresha Services</span>
            </p>
          </div>
        </div>

        <Link to="/about" data-testid="about-more-link" className="btn btn-outline mt-8">
          More about us <ArrowRight size={16} />
        </Link>
      </Reveal>
    </div>
  </section>
);

export default AboutShort;
