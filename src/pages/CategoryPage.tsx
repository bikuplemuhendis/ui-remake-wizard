import { useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/data/products";
import { SlidersHorizontal, Grid3X3, List } from "lucide-react";

const CategoryPage = () => {
  const { slug } = useParams();
  const [sortBy, setSortBy] = useState("newest");

  const categoryName = categories.find(c => c.value === slug)?.label || "Tüm Ürünler";

  return (
    <Layout>
      {/* Banner */}
      <div className="gradient-brand">
        <div className="container py-8">
          <h1 className="text-2xl md:text-3xl font-extrabold text-brand-foreground">
            {categoryName.toUpperCase()} FORMA MODELLERİ
          </h1>
        </div>
      </div>

      <div className="container py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-60 shrink-0 space-y-6">
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-3">Kategoriler</h3>
              <nav className="space-y-1">
                {categories.map((cat) => (
                  <a
                    key={cat.value}
                    href={`/kategori/${cat.value}`}
                    className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors ${
                      slug === cat.value ? "bg-brand-light text-primary font-medium" : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    }`}
                  >
                    <span>{cat.label}</span>
                    <span className="text-xs">({cat.count})</span>
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-border">
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">{products.length} ürün</span>
              </div>
              <div className="flex items-center gap-3">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="h-9 rounded-lg border border-border bg-card px-3 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                >
                  <option value="newest">En Yeniler</option>
                  <option value="price-asc">Fiyat: Düşükten Yükseğe</option>
                  <option value="price-desc">Fiyat: Yüksekten Düşüğe</option>
                </select>
                <div className="hidden sm:flex items-center gap-1 border border-border rounded-lg p-0.5">
                  <button className="h-8 w-8 rounded-md bg-primary/10 flex items-center justify-center">
                    <Grid3X3 className="h-4 w-4 text-primary" />
                  </button>
                  <button className="h-8 w-8 rounded-md flex items-center justify-center hover:bg-muted transition-colors">
                    <List className="h-4 w-4 text-muted-foreground" />
                  </button>
                </div>
              </div>
            </div>

            {/* Product grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CategoryPage;
