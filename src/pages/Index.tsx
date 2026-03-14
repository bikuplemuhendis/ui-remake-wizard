import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import ProductGrid from "@/components/home/ProductGrid";
import AIDesignerBanner from "@/components/home/AIDesignerBanner";
import PriceCalculator from "@/components/home/PriceCalculator";
import FeaturesSection from "@/components/home/FeaturesSection";
import FAQPreview from "@/components/home/FAQPreview";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ProductGrid />
      <AIDesignerBanner />
      <PriceCalculator />
      <FeaturesSection />
      <FAQPreview />
    </Layout>
  );
};

export default Index;
