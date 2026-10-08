import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const FaqAccordion = ({ faqs }) => (
  <Accordion type="single" collapsible className="w-full" data-testid="faq-accordion">
    {faqs.map((f, i) => (
      <AccordionItem key={i} value={`faq-${i}`} className="border-[#E5EAF2]">
        <AccordionTrigger
          data-testid={`faq-trigger-${i}`}
          className="text-left text-[15px] font-bold text-[#064A91] hover:text-[#159BD7] hover:no-underline md:text-base"
        >
          {f.q}
        </AccordionTrigger>
        <AccordionContent data-testid={`faq-content-${i}`} className="text-[14px] leading-relaxed text-[#4B5563]">
          {f.a}
        </AccordionContent>
      </AccordionItem>
    ))}
  </Accordion>
);

export default FaqAccordion;
