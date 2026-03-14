import { useState } from "react";
import { Calculator, Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const PriceCalculator = () => {
  const [quantity, setQuantity] = useState(10);
  const [includeShorts, setIncludeShorts] = useState(false);
  const [includeSocks, setIncludeSocks] = useState(false);

  const basePrice = 280;
  const shortsPrice = 80;
  const socksPrice = 40;

  const unitPrice = basePrice + (includeShorts ? shortsPrice : 0) + (includeSocks ? socksPrice : 0);
  const totalPrice = unitPrice * quantity;

  return (
    <section className="py-12 md:py-16 bg-muted/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary mb-3">
              <Calculator className="h-3.5 w-3.5" />
              Fiyat Hesaplayıcı
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Forma Fiyatını 10 Saniyede Hesapla</h2>
          </div>

          <div className="rounded-xl border border-border bg-card p-6 md:p-8 shadow-card space-y-6">
            {/* Quantity */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Adet</label>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(5, quantity - 1))}
                  className="h-10 w-10 rounded-lg border border-border flex items-center justify-center hover:bg-muted transition-colors"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <div className="flex-1 h-10 rounded-lg bg-muted flex items-center justify-center text-lg font-bold text-foreground">
                  {quantity}
                </div>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="h-10 w-10 rounded-lg border border-border flex items-center justify-center hover:bg-muted transition-colors"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Options */}
            <div className="space-y-3">
              <label className="text-sm font-medium text-foreground">Ekstra Seçenekler</label>
              <div className="flex flex-col gap-2">
                <label className="flex items-center gap-3 rounded-lg border border-border p-3 cursor-pointer hover:bg-muted/50 transition-colors">
                  <input
                    type="checkbox"
                    checked={includeShorts}
                    onChange={(e) => setIncludeShorts(e.target.checked)}
                    className="h-4 w-4 rounded border-border accent-primary"
                  />
                  <span className="text-sm text-foreground flex-1">Çorap Ekle</span>
                  <span className="text-sm font-medium text-primary">+{socksPrice} ₺</span>
                </label>
                <label className="flex items-center gap-3 rounded-lg border border-border p-3 cursor-pointer hover:bg-muted/50 transition-colors">
                  <input
                    type="checkbox"
                    checked={includeSocks}
                    onChange={(e) => setIncludeSocks(e.target.checked)}
                    className="h-4 w-4 rounded border-border accent-primary"
                  />
                  <span className="text-sm text-foreground flex-1">Koleksi Forması Ekle</span>
                  <span className="text-sm font-medium text-primary">+{shortsPrice} ₺</span>
                </label>
              </div>
            </div>

            {/* Result */}
            <div className="rounded-xl gradient-brand p-6 text-center space-y-1">
              <p className="text-sm text-brand-foreground/70">Tahmini Fiyat</p>
              <p className="text-4xl font-extrabold text-brand-foreground">
                {totalPrice.toLocaleString("tr-TR")} <span className="text-xl">₺</span>
              </p>
              <p className="text-xs text-brand-foreground/60">Birim fiyat: {unitPrice} ₺ × {quantity} adet</p>
            </div>

            <div className="flex gap-3">
              <Button className="flex-1 gradient-brand text-brand-foreground h-12 rounded-lg font-semibold">
                Hızlı Sipariş
              </Button>
              <Button variant="outline" className="flex-1 h-12 rounded-lg font-semibold">
                Detaylı Sipariş Formu
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PriceCalculator;
