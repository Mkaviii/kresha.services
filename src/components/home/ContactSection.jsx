import Reveal from "../Reveal";
import LeadForm from "../LeadForm";
import ContactDetails from "../ContactDetails";

export const ContactSection = () => (
  <section id="contact" data-testid="contact-section" className="section">
    <div className="wrap grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
      <Reveal>
        <p className="eyebrow">Contact</p>
        <h2 className="text-3xl sm:text-4xl">Tell us about your business.</h2>
        <p className="mt-4 max-w-lg text-base leading-relaxed text-[#4B5563]">
          Fill this in and we'll WhatsApp you within a few working hours — with an honest first take
          on what would work for your business.
        </p>
        <div className="mt-8">
          <LeadForm />
        </div>
      </Reveal>
      <Reveal delay={0.12}>
        <ContactDetails />
      </Reveal>
    </div>
  </section>
);

export default ContactSection;
