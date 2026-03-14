import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import heroPlayer from "@/assets/hero-player.png";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
      </div>

      <div className="container relative">
        <div className="grid lg:grid-cols-2 items-center min-h-[480px] md:min-h-[540px] gap-8 py-12 md:py-16">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6 text-background"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-background/20 bg-background/10 px-4 py-1.5 text-xs font-medium backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5" />
              Yapay Zeka ile Forma Tasarla
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight">
              Forma Yaptırma ve
              <br />
              <span className="text-primary">Halı Saha Forma</span>
              <br />
              Tasarlama Merkezi
            </h1>

            <p className="text-base md:text-lg text-background/70 max-w-lg">
              Futbol, basketbol, voleybol ve diğer branşlar için özel tasarım forma ve şort üretimi yapıyoruz.
            </p>

            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="gradient-brand text-brand-foreground font-semibold rounded-lg h-12 px-6">
                <Link to="/kategori/futbol">
                  Formaları İncele
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-background/30 text-background hover:bg-background/10 rounded-lg h-12 px-6 bg-transparent">
                <Link to="/forma-tasarla">
                  Kendi Formanı Tasarla
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Player image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:flex justify-end"
          >
            <img
              src={heroPlayer}
              alt="Futbolcu"
              className="h-[460px] object-contain drop-shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
