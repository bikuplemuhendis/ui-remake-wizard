import { useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { ShoppingCart, MessageCircle, Minus, Plus, Share2, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

const ProductDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const product = products.find(p => p.id === id) || products[0];
  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  // Simulate multiple images using the same product image with slight variations
  const galleryImages = [product.image, ...relatedProducts.slice(0, 3).map(p => p.image)];

  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="container py-3">
        <nav className="flex items-center gap-1 text-xs text-muted-foreground">
          <a href="/" className="hover:text-primary transition-colors">Ana Sayfa</a>
          <ChevronRight className="h-3 w-3" />
          <a href="/kategori/futbol" className="hover:text-primary transition-colors">Futbol</a>
          <ChevronRight className="h-3 w-3" />
          <span className="text-foreground">{product.name}</span>
        </nav>
      </div>

      <div className="container pb-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-3"
          >
            {/* Main Image */}
            <div className="aspect-square rounded-xl border border-border bg-muted overflow-hidden">
              <img
                src={galleryImages[selectedImage]}
                alt={product.name}
                className="h-full w-full object-cover object-top transition-all duration-300"
              />
            </div>
            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-4 gap-2">
              {galleryImages.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={cn(
                    "aspect-square rounded-lg border overflow-hidden bg-muted transition-all",
                    selectedImage === i
                      ? "border-primary ring-1 ring-primary"
                      : "border-border hover:border-muted-foreground/40"
                  )}
                >
                  <img src={img} alt={`${product.name} ${i + 1}`} className="h-full w-full object-cover object-top" />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-6"
          >
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-foreground">{product.name}</h1>
              <p className="text-xs text-muted-foreground mt-1">SKU: FORMA{product.id.padStart(3, "0")}</p>
            </div>

            <div className="flex items-baseline gap-3">
              {product.oldPrice && (
                <span className="text-lg text-muted-foreground line-through">{product.oldPrice} ₺</span>
              )}
              <span className="text-3xl font-extrabold text-primary">{product.price} ₺</span>
            </div>

            {/* Quantity */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Adet</label>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="h-10 w-10 rounded-lg border border-border flex items-center justify-center hover:bg-muted transition-colors"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-12 text-center text-lg font-bold text-foreground">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="h-10 w-10 rounded-lg border border-border flex items-center justify-center hover:bg-muted transition-colors"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-3">
              <a
                href="https://wa.me/905312427762"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 h-11 rounded-lg border border-border text-sm font-medium text-foreground hover:bg-muted transition-colors w-full"
              >
                <MessageCircle className="h-4 w-4 text-primary" />
                WhatsApp Sipariş
              </a>
              <Button className="w-full h-12 gradient-brand text-brand-foreground font-semibold rounded-lg text-base">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Sepete Ekle
              </Button>
            </div>

            {/* Share */}
            <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <Share2 className="h-4 w-4" />
              Paylaş
            </button>

            {/* Related */}
            <div className="pt-4 border-t border-border">
              <h3 className="text-sm font-semibold text-foreground mb-3">Beğenebileceğiniz...</h3>
              <div className="grid grid-cols-3 gap-3">
                {relatedProducts.slice(0, 3).map((p) => (
                  <a key={p.id} href={`/urun/${p.id}`} className="group">
                    <div className="aspect-square rounded-lg border border-border overflow-hidden bg-muted">
                      <img src={p.image} alt={p.name} className="h-full w-full object-cover group-hover:scale-105 transition-transform" />
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground line-clamp-2">{p.name}</p>
                    <p className="text-xs font-bold text-primary">{p.price} ₺</p>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Description tabs */}
        <div className="mt-12">
          <Tabs defaultValue="description">
            <TabsList className="bg-muted rounded-lg">
              <TabsTrigger value="description" className="rounded-md">Açıklama</TabsTrigger>
              <TabsTrigger value="reviews" className="rounded-md">Değerlendirmeler (0)</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="mt-6 space-y-4">
              <h2 className="text-xl font-bold text-foreground">{product.name}</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {product.name} konusunda sizlere hızlı ve profesyonel destek sunuyoruz.
                Forma yapımı ve tasarımı konusunda detaylı bilgi için WhatsApp hattımızdan bize ulaşabilirsiniz.
              </p>
              <div className="space-y-3">
                <h3 className="text-base font-semibold text-foreground">Forma Yaptırmada Kalite ve Konfor</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  En iyi malzemeler formaların ve giysilerin, sporcuların rahat kullanımı için en iyi malzemelerden üretilmektedir.
                  Yüksek kaliteli kumaşlar ve baskı teknolojileri ile uzun ömürlü formalar üretiyoruz.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="reviews" className="mt-6">
              <p className="text-sm text-muted-foreground">Henüz değerlendirme yapılmamış.</p>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
