import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  return (
    <Accordion.Root type="single" collapsible className="space-y-3">
      {items.map((item, index) => (
        <Accordion.Item
          key={index}
          value={`item-${index}`}
          className="bg-card border border-border rounded-lg overflow-hidden"
        >
          <Accordion.Header>
            <Accordion.Trigger className="flex items-center justify-between w-full p-5 text-right hover:bg-muted/50 transition-colors group">
              <span className="font-medium pr-4">{item.question}</span>
              <ChevronDown className="w-5 h-5 text-muted-foreground transition-transform duration-300 group-data-[state=open]:rotate-180 flex-shrink-0" />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up overflow-hidden">
            <div className="px-5 pb-5 pt-1 text-muted-foreground leading-relaxed">
              {item.answer}
            </div>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
