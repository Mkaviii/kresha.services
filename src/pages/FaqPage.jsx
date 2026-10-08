import { useEffect, useState } from "react";
import axios from "axios";
import { Seo } from "../components/Seo";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import FaqAccordion from "../components/FaqAccordion";
import CtaBand from "../components/CtaBand";
import { FAQS, faqSchema } from "../data/content";

import { API, HAS_BACKEND } from "../lib/api";

export default function FaqPage() {
  const [faqs, setFaqs] = useState(FAQS);

  useEffect(() => {
    if (!HAS_BACKEND) return;
    axios
      .get(`${API}/faqs`)
      .then((r) => {
        if (r.data?.faqs?.length) setFaqs(r.data.faqs);
      })
      .catch(() => {});
  }, []);

  return (
    <>
      <Seo
        title="FAQ — Digital Marketing Questions Answered | Kresha Services"
        description="Pricing, timelines, Tamil support, reports, GST invoices — honest answers about digital marketing for Chennai & Erode businesses."
        path="/faq"
        jsonLd={faqSchema(FAQS)}
      />

      <PageHero
        eyebrow="FAQ"
        title="Questions? Straight answers."
        sub="The same questions every business owner asks us — answered honestly, in plain language."
      />

      <section className="section">
        <div className="wrap max-w-3xl">
          <Reveal>
            <FaqAccordion faqs={faqs} />
          </Reveal>
        </div>
      </section>

      <CtaBand title="Still have a question?" sub="Message us on WhatsApp or book a free strategy call — a human replies, in Tamil or English." />
    </>
  );
}
