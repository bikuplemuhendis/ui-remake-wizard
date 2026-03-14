import Layout from "@/components/layout/Layout";
import { Wand2, Upload, Palette, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const steps = [
  { icon: Palette, title: "Renk ve stil seçin", desc: "Takımınızın renklerini ve forma stilini belirleyin." },
  { icon: Upload, title: "Logo yükleyin", desc: "Takım logonuzu PNG veya AI formatında yükleyin." },
  { icon: Wand2, title: "AI tasarlasın", desc: "Yapay zeka sizin için benzersiz formalar tasarlar." },
  { icon: CheckCircle, title: "Sipariş verin", desc: "Beğendiğiniz tasarımı seçin ve sipariş verin." },
];

const FormaTasarla = () => {
  return (
    <Layout>
      <div className="container py-12 md:py-16">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4 mb-12"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">
            <Wand2 className="h-3.5 w-3.5" />
            AI Forma Tasarımı
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-foreground">
            Halı Saha Forma Tasarlayın
          </h1>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Forma tasarlamak hiç bu kadar kolay olmamıştı. Renklerinizi seçin, logonuzu yükleyin ve yapay zeka sizin için benzersiz formalar tasarlasın.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-xl border border-border bg-card p-6 shadow-card text-center space-y-3"
            >
              <div className="mx-auto h-12 w-12 rounded-xl bg-brand-light flex items-center justify-center">
                <step.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-sm font-semibold text-foreground">{step.title}</h3>
              <p className="text-xs text-muted-foreground">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="rounded-2xl gradient-brand p-8 md:p-12 text-center space-y-4 mb-16">
          <h2 className="text-2xl md:text-3xl font-extrabold text-brand-foreground">
            Hayalindeki Formayı Tasarlamak İster misin?
          </h2>
          <p className="text-sm text-brand-foreground/80">
            İletişim sayfamızdan veya WhatsApp hattımızdan bize ulaşın.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button size="lg" className="bg-brand-foreground text-primary hover:bg-brand-foreground/90 h-12 px-6 rounded-lg font-semibold">
              Forma Modelleri
            </Button>
            <Button size="lg" variant="outline" className="border-brand-foreground/30 text-brand-foreground hover:bg-brand-foreground/10 h-12 px-6 rounded-lg font-semibold bg-transparent">
              Sık Sorulan Sorular
            </Button>
          </div>
        </div>

        {/* Popular designs */}
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-6">Sıkça Tercih Edilen Tasarımlar</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {products.slice(0, 8).map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FormaTasarla;
