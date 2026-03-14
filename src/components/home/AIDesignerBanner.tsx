import { Link } from "react-router-dom";
import { Wand2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const AIDesignerBanner = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-2xl gradient-brand p-8 md:p-12"
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)",
              backgroundSize: "32px 32px"
            }} />
          </div>

          <div className="relative flex flex-col md:flex-row items-center gap-6 md:gap-12">
            <div className="flex-1 space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-foreground/20 px-3 py-1 text-xs font-medium text-brand-foreground">
                <Wand2 className="h-3.5 w-3.5" />
                Yapay Zeka
              </div>
              <h2 className="text-2xl md:text-4xl font-extrabold text-brand-foreground leading-tight">
                Yapay Zeka ile
                <br />
                Formanı Tasarla
              </h2>
              <p className="text-sm md:text-base text-brand-foreground/80 max-w-md">
                Renklerinizi ve logonuzu seçin, yapay zeka size özel forma tasarımları oluştursun.
              </p>
              <Button asChild size="lg" className="bg-brand-foreground text-primary hover:bg-brand-foreground/90 rounded-lg h-12 px-6 font-semibold">
                <Link to="/forma-tasarla">
                  Hemen Tasarla <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="shrink-0 w-48 h-48 md:w-64 md:h-64 rounded-2xl bg-brand-foreground/10 border border-brand-foreground/20 flex items-center justify-center">
              <Wand2 className="h-16 w-16 text-brand-foreground/50" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AIDesignerBanner;
