import Layout from "@/components/layout/Layout";
import PriceCalculator from "@/components/home/PriceCalculator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, FileText, Palette, Package, Truck } from "lucide-react";
import { motion } from "framer-motion";

const orderSteps = [
  { icon: Palette, title: "Tasarım", text: "Yapay Zeka aracı veya hazır model seçimi yapılır." },
  { icon: FileText, title: "Bilgi Aktarımı", text: "Oyuncu isimleri, beden ve logo bilgileri iletilir." },
  { icon: CheckCircle, title: "Tasarım Onayı", text: "Oluşturulan tasarımın onay süreçlerine geçilir." },
  { icon: Package, title: "Üretim", text: "Onay sonrası kendi fabrikamızda 3-5 gün içinde üretilir." },
  { icon: Truck, title: "Kargo", text: "Ürünler kargoya verilir, 1-2 gün içinde teslim edilir." },
];

const orderFaqs = [
  { q: "Kaparo ödemem gerekiyor mu?", a: "Hayır, kaparo almıyoruz. Ödeme kapıda veya havale ile yapılabilir." },
  { q: "Tasarım sürecinde değişiklik yapılabilir mi?", a: "Evet, onay aşamasına kadar değişiklik yapılabilir." },
  { q: "Adil sipariş edebilir miyim?", a: "Stok ve üretim kapasitemize göre acil siparişler değerlendirilir. WhatsApp hattımızdan bize ulaşın." },
];

const FormaSiparis = () => {
  return (
    <Layout>
      {/* Hero with calculator */}
      <PriceCalculator />

      <div className="container py-12 md:py-16 space-y-16">
        {/* Order info */}
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">Forma Sipariş</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Takımınız için forma siparişi vermek çok kolay. Kendi fabrikamızda üretim yapıyoruz. Süreçin 3-5 iş günü ve 7/24 destek ile formalarınız elinize ulaşır.
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-xl font-bold text-foreground mb-6">Forma Sipariş Süreci Nasıl İşler?</h3>
          <div className="space-y-4">
            {orderSteps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4 rounded-xl border border-border bg-card p-4 shadow-card"
              >
                <div className="h-10 w-10 shrink-0 rounded-lg bg-brand-light flex items-center justify-center">
                  <step.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{i + 1}. {step.title}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{step.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-xl font-bold text-foreground mb-6">Sık Sorulan Sorular</h3>
          <Accordion type="single" collapsible className="space-y-2">
            {orderFaqs.map((faq, i) => (
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
        </div>
      </div>
    </Layout>
  );
};

export default FormaSiparis;
