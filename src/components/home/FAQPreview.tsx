import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Superforma.net ne hizmet sunar?", a: "Futbol, basketbol, voleybol ve diğer branşlar için özel tasarım forma, şort üretimi yapar." },
  { q: "Takım logosu ve sponsor baskısı eklenebilir mi?", a: "Evet, takım logosu, sponsor baskısı ve isim/numara gibi tüm detaylar formaya eklenebilir." },
  { q: "Sipariş süresi ne kadar?", a: "Siparişler ortalama 3-5 iş günü içinde hazırlanıp kargoya verilir." },
  { q: "Minimum sipariş adedi var mı?", a: "Minimum sipariş adedimiz 5 adettir. Numune, isim ve logo baskısı ücretsizdir." },
  { q: "Sipariş ve destek hattı nedir?", a: "WhatsApp üzerinden 0531 242 7762 numarasından bize ulaşabilirsiniz." },
];

const FAQPreview = () => {
  return (
    <section className="py-12 md:py-16 bg-muted/50">
      <div className="container max-w-3xl">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">Sık Sorulan Sorular</h2>
        </div>

        <Accordion type="single" collapsible className="space-y-2">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="rounded-xl border border-border bg-card px-5 shadow-card"
            >
              <AccordionTrigger className="text-sm font-medium text-foreground hover:no-underline py-4">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground pb-4">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-6">
          <Button asChild variant="ghost" className="text-primary hover:text-primary">
            <Link to="/sss">
              Tüm Soruları Gör <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FAQPreview;
