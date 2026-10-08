import { Seo } from "../components/Seo";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import LeadForm from "../components/LeadForm";
import ContactDetails from "../components/ContactDetails";

export default function ContactPage() {
  return (
    <>
      <Seo
        title="Contact Kresha Services — Digital Marketing Agency Chennai & Erode"
        description="Call 93631 00998, WhatsApp or send an enquiry. Kresha Services — digital marketing agency serving Chennai, Erode and all of Tamil Nadu."
        path="/contact"
      />

      <PageHero
        eyebrow="Contact"
        title="Let's talk about your growth."
        sub="WhatsApp is fastest. Or fill the form — we reply within a few working hours, in Tamil or English."
      />

      <section className="section">
        <div className="wrap grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <LeadForm />
          </Reveal>
          <Reveal delay={0.12}>
            <ContactDetails />
          </Reveal>
        </div>
      </section>
    </>
  );
}
