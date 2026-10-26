import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import { Seo } from "../components/Seo";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import CtaBand from "../components/CtaBand";
import { CITIES } from "../data/content";

const CARD_TEXT = {
  chennai: "Grow your Chennai business with SEO, Google Ads, social media marketing and website development.",
  erode: "Grow your Erode business with SEO, Google Ads, social media marketing and website development.",
};

const ROLE = { chennai: "Main Branch", erode: "Regional Hub" };

export default function ServiceLocationPage() {
  const cities = Object.entries(CITIES);

  return (
    <>
      <Seo
        title="Service Location | Kresha Services"
        description="Kresha Services offers digital marketing in Chennai and Erode, including SEO, Google Ads, social media marketing and website development."
        path="/service-location"
      />

      <PageHero
        eyebrow="Service Location"
        title="Serving Businesses in Tamil Nadu"
        sub="Choose your city to see how Kresha Services can help your business get more customers online."
      />

      <section className="section" data-testid="service-location-grid">
        <div className="wrap">
          <div className="mx-auto grid max-w-4xl gap-8 sm:grid-cols-2">
            {cities.map(([key, c], i) => (
              <Reveal key={key} delay={i * 0.08}>
                <Link
                  to={c.path}
                  data-testid={`service-location-card-${key}`}
                  className="card group flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_44px_rgba(6,74,145,0.14)]"
                >
                  <img
                    src={c.image}
                    alt={`Digital marketing agency in ${c.name}`}
                    loading="lazy"
                    className="h-48 w-full object-cover"
                  />
                  <div className="flex flex-1 flex-col items-center p-6 text-center">
                    <span className="mb-2 rounded-full bg-[#FFBD19]/25 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#064A91]">
                      {ROLE[key]}
                    </span>
                    <h2 className="flex items-center gap-2 text-xl font-bold text-[#064A91]">
                      <MapPin size={18} className="text-[#159BD7]" /> {c.name}
                    </h2>
                    <p className="mt-3 text-[14px] leading-relaxed text-[#4B5563]">{CARD_TEXT[key]}</p>
                    <span className="btn btn-primary mt-6">
                      Visit <ArrowRight size={16} />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-2xl text-center text-[14.5px] leading-relaxed text-[#4B5563]">
            Our main branch is in Chennai and our regional hub is in Erode. We also help businesses in other parts of Tamil Nadu. Contact us and we will tell you how we can work together.
          </p>
        </div>
      </section>

      <CtaBand title="Not sure which plan is right for you?" sub="Call us for a free chat in Tamil or English. We will give you an honest plan for your business and your budget." />
    </>
  );
}
