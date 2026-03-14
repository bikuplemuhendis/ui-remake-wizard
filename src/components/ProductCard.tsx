import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { motion } from "framer-motion";

interface ProductCardProps {
  id: string;
  name: string;
  image: string;
  price: number;
  oldPrice?: number;
  badge?: string;
}

const ProductCard = ({ id, name, image, price, oldPrice, badge }: ProductCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link
        to={`/urun/${id}`}
        className="group block rounded-xl border border-border bg-card overflow-hidden shadow-card hover:shadow-elevated transition-shadow"
      >
        <div className="relative aspect-[3/4] overflow-hidden bg-muted">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          {badge && (
            <span className="absolute top-3 left-3 rounded-md gradient-brand px-2.5 py-1 text-xs font-semibold text-brand-foreground">
              {badge}
            </span>
          )}
          <button
            onClick={(e) => { e.preventDefault(); }}
            className="absolute top-3 right-3 h-8 w-8 rounded-full bg-background/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background"
          >
            <Heart className="h-4 w-4 text-muted-foreground" />
          </button>
        </div>
        <div className="p-3 space-y-1">
          <h3 className="text-sm font-medium text-foreground line-clamp-2 leading-snug">{name}</h3>
          <div className="flex items-center gap-2">
            {oldPrice && (
              <span className="text-xs text-muted-foreground line-through">{oldPrice.toLocaleString("tr-TR")} ₺</span>
            )}
            <span className="text-sm font-bold text-primary">{price.toLocaleString("tr-TR")} ₺</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
