import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-md gradient-brand flex items-center justify-center">
                <span className="text-sm font-black text-brand-foreground">SF</span>
              </div>
              <span className="text-lg font-extrabold tracking-tight text-foreground">
                super<span className="text-primary">forma</span>
              </span>
            </div>
            <div className="space-y-2 text-sm text-muted-foreground">
              <a href="tel:+905312427762" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="h-4 w-4" />
                +90 531 242 7762
              </a>
              <a href="mailto:superformasite@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="h-4 w-4" />
                superformasite@gmail.com
              </a>
              <p className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                Nuripaşa Mahallesi 15. Sokak 29/A Zeytinburnu / İstanbul
              </p>
            </div>
          </div>

          {/* Süper Forma */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Süper Forma</h4>
            <nav className="flex flex-col gap-2">
              {["Hakkımızda", "Blog", "İletişim", "Referanslar"].map((item) => (
                <Link key={item} to="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {item}
                </Link>
              ))}
            </nav>
          </div>

          {/* Kategoriler */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Kategoriler</h4>
            <nav className="flex flex-col gap-2">
              {[
                { label: "Futbol", href: "/kategori/futbol" },
                { label: "Basketbol", href: "/kategori/basketbol" },
                { label: "Voleybol", href: "/kategori/voleybol" },
                { label: "Aksesuarlar", href: "/kategori/aksesuarlar" },
                { label: "Tüm Ürünler", href: "/kategori/tum" },
              ].map((item) => (
                <Link key={item.label} to={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Bilgilendirme */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Bilgilendirme</h4>
            <nav className="flex flex-col gap-2">
              {["Gizlilik Politikası", "İade Politikası", "Hizmet Şartları", "SSS"].map((item) => (
                <Link key={item} to="/sss" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {item}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="container py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <p>Süper Forma 2019-2026® Bütün Hakları Saklıdır.</p>
          <p>Websitemizde Bulunan Resimler ve Meteryaller İzin Alınmadan Kullanılamaz.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
