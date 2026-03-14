import jersey1 from "@/assets/jersey-1.png";
import jersey2 from "@/assets/jersey-2.png";
import jersey3 from "@/assets/jersey-3.png";
import jersey4 from "@/assets/jersey-4.png";
import jersey5 from "@/assets/jersey-5.png";
import jersey6 from "@/assets/jersey-6.png";
import jersey7 from "@/assets/jersey-7.png";
import jersey8 from "@/assets/jersey-8.png";

export interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
  oldPrice?: number;
  badge?: string;
  category: string;
  description?: string;
}

export const products: Product[] = [
  { id: "1", name: "Kırmızı Siyah Halı Saha Forması", image: jersey1, price: 280, oldPrice: 350, badge: "Yeni", category: "futbol" },
  { id: "2", name: "Mavi Beyaz Kulüp Forması", image: jersey2, price: 290, oldPrice: 360, category: "futbol" },
  { id: "3", name: "Sarı Lacivert Maç Forması", image: jersey3, price: 270, category: "futbol" },
  { id: "4", name: "Yeşil Beyaz Spor Forması", image: jersey4, price: 260, oldPrice: 320, badge: "İndirim", category: "futbol" },
  { id: "5", name: "Turuncu Siyah Halı Saha Forması", image: jersey5, price: 280, category: "futbol" },
  { id: "6", name: "Mor Beyaz Kulüp Forması", image: jersey6, price: 300, oldPrice: 380, category: "futbol" },
  { id: "7", name: "Siyah Gold Premium Forma", image: jersey7, price: 350, badge: "Premium", category: "futbol" },
  { id: "8", name: "Turkuaz Siyah Cloud Forması", image: jersey8, price: 290, oldPrice: 360, category: "voleybol" },
];

export const categories = [
  { label: "Futbol", value: "futbol", count: 124 },
  { label: "Basketbol", value: "basketbol", count: 48 },
  { label: "Voleybol", value: "voleybol", count: 36 },
  { label: "Hentbol", value: "hentbol", count: 18 },
  { label: "Aksesuarlar", value: "aksesuarlar", count: 22 },
];
