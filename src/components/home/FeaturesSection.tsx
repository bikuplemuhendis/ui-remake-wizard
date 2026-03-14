import { Truck, Shield, Palette, Headphones } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Palette,
    title: "Özel Tasarım",
    description: "Her forma tamamen kişiye özel olarak tasarlanır ve üretilir.",
  },
  {
    icon: Truck,
    title: "Hızlı Teslimat",
    description: "3-5 iş günü içinde siparişiniz kargoya verilir.",
  },
  {
    icon: Shield,
    title: "Kalite Garantisi",
    description: "En iyi kumaş ve baskı teknolojileri ile üretim yapıyoruz.",
  },
  {
    icon: Headphones,
    title: "7/24 Destek",
    description: "WhatsApp üzerinden her an bize ulaşabilirsiniz.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
          Neden Süper Forma?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-xl border border-border bg-card p-6 shadow-card text-center space-y-3"
            >
              <div className="mx-auto h-12 w-12 rounded-xl bg-brand-light flex items-center justify-center">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-base font-semibold text-foreground">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
