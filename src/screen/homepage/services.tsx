"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function Services() {
  const services = [
    {
      number: "01",
      title: "Interior Architecture & Design",
      description:
        "Complete space planning and architectural interior solutions tailored to your lifestyle and functional needs. We create cohesive environments that seamlessly blend form and function.",
    },
    {
      number: "02",
      title: "FF&E Design & Styling",
      description:
        "Curated selection of furniture, fixtures, and equipment that reflects your personal style. From custom pieces to carefully sourced vintage finds, every element is chosen with intention.",
    },
    {
      number: "03",
      title: "Procurement & Sourcing",
      description:
        "Global network of artisans, manufacturers, and suppliers ensures access to unique materials and furnishings. We handle all logistics from sourcing to delivery.",
    },
    {
      number: "04",
      title: "Turnkey Installation",
      description:
        "Comprehensive project management from initial concept through final installation. Our experienced team coordinates all trades and ensures flawless execution.",
    },
  ]

  return (
    <section id="services" className="w-full px-6 py-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-serif text-3xl lg:text-4xl font-bold text-primary mb-12 text-center">
          HOW WE CAN HELP YOU
        </h2>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {services.map((service, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b border-primary/20 pb-4">
              <AccordionTrigger className="flex items-center gap-6 hover:no-underline text-left py-4">
                <div className="font-serif text-2xl font-bold text-primary min-w-[60px]">{service.number}</div>
                <div className="flex-1">
                  <h3 className="font-serif text-xl font-semibold text-primary">{service.title}</h3>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pl-[84px] pr-8 pb-4">
                <p className="text-foreground leading-relaxed text-base">{service.description}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
