import { Link } from "react-router-dom";
import { ArrowRight, Handshake, IndianRupee, Languages, Quote } from "lucide-react";
import { Seo } from "../components/Seo";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import CtaBand from "../components/CtaBand";
import { IMG, SITE, FOUNDER } from "../data/content";

const VALUES = [
  { icon: Handshake, title: "Partnership, not vendorship", desc: "We win when you win. Your leads are our report card — not impressions or reach." },
  { icon: IndianRupee, title: "Respect for every rupee", desc: "Small budgets handled with big-budget discipline. Every rupee is accounted for." },
  { icon: Languages, title: "Your language first", desc: "Tamil-first creatives and English when you want it. Your customers feel at home." },
];

export default function AboutPage() {
  return (
    <>
      <Seo
        title="About Kresha Services — Digital Growth Partner in Chennai & Erode"
        description="Kresha Services is a digital marketing agency for Chennai, Erode and India — affordable, effective, transparent. Meet the team behind the growth."
        path="/about"
      />

      <PageHero
        eyebrow="About us"
        title="We exist so good businesses don't lose to louder ones."
        sub="Kresha Services is a digital marketing agency built for Indian SMBs — affordable, effective and transparent, in Tamil and English."
      />

      <section className="section">
        <div className="wrap grid items-center gap-12 lg:grid-cols-2">
          <Reveal className="relative order-2 mx-auto w-full max-w-md lg:order-1 lg:max-w-none">
            <div className="absolute -left-3 -top-3 h-full w-full rounded-[28px] border-2 border-[#159BD7]/30" aria-hidden="true" />
            <img
              src={IMG.founder}
              alt="Kavitha M, founder of Kresha Services"
              loading="lazy"
              className="relative aspect-[3/4] w-full rounded-[28px] border border-[#E5EAF2] object-cover shadow-[0_20px_60px_rgba(6,74,145,0.16)]"
              data-testid="about-page-founder-photo"
            />
            <span className="floaty absolute -bottom-5 left-5 inline-flex items-center gap-2 rounded-2xl border border-white/70 bg-white/85 px-4 py-2.5 text-[12.5px] font-bold text-[#064A91] shadow-[0_12px_36px_rgba(6,74,145,0.16)] backdrop-blur-md">
              Kavitha M · Founder, {SITE.name}
            </span>
          </Reveal>

          <Reveal delay={0.1} className="order-1 lg:order-2">
            <p className="eyebrow">Our story</p>
            <h2 className="text-3xl sm:text-4xl">Built in Tamil Nadu, for Tamil Nadu.</h2>
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-[#4B5563] md:text-base" data-testid="about-page-story">
              <p>
                Kresha Services started with a simple observation: great local businesses across
                Chennai and Erode — textile shops, clinics, hotels, showrooms — were losing
                customers to competitors who simply showed up better on Google.
              </p>
              <p>
                We set out to fix that with affordable, effective and transparent digital marketing.
                No bloated retainers, no jargon, no hiding behind dashboards. Just clear work,
                explained in Tamil or English, measured in leads you can count on WhatsApp.
              </p>
              <p>
                Today we're a full-service digital team — SEO, AI search optimisation, social media,
                Google Ads, websites and design — built for Indian SMBs that want to grow without
                guessing. Based in Chennai and Erode, serving businesses across India.
              </p>
            </div>
            <div className="card mt-7 p-6" data-testid="about-page-founder-card">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#159BD7]/10 text-[#159BD7]">
                <Quote size={18} />
              </span>
              <p className="mt-3 text-[14.5px] leading-relaxed text-[#4B5563]">"{FOUNDER.bio}"</p>
              <p className="mt-3.5 text-[13.5px] font-extrabold text-[#064A91]">
                Kavitha M <span className="font-semibold text-[#93A3BD]">· {FOUNDER.role}</span>
              </p>
            </div>

            <Link to="/contact" data-testid="about-page-cta" className="btn btn-primary mt-8">
              Work with us <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section bg-[#F5F7FA]">
        <div className="wrap grid gap-5 md:grid-cols-3" data-testid="about-values">
          {VALUES.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.08} className="h-full">
              <div className="card h-full p-7">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#159BD7]/10 text-[#159BD7]">
                  <v.icon size={22} />
                </span>
                <h3 className="mt-5 text-lg">{v.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-[#4B5563]">{v.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
