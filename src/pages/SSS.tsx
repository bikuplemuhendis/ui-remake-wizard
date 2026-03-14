import Layout from "@/components/layout/Layout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const allFaqs = [
  { q: "Superforma.net ne hizmet sunar?", a: "Futbol, basketbol, voleybol ve diğer branşlar için özel tasarım forma, şort üretimi yapar." },
  { q: "Takım logosu ve sponsor baskısı eklenebilir mi?", a: "Evet, takım logosu, sponsor baskısı, isim ve numara gibi tüm detaylar formanıza eklenebilir." },
  { q: "Formalar tamamen kişiye özel mi hazırlanıyor?", a: "Evet, her forma siparişinize özel olarak tasarlanır ve üretilir." },
  { q: "Sipariş süresi ne kadar?", a: "Siparişler ortalama 3-5 iş günü içinde hazırlanıp kargoya verilir." },
  { q: "Minimum sipariş adedi var mı?", a: "Minimum sipariş adedimiz 5 adettir." },
  { q: "Sipariş ve destek hattı nedir?", a: "WhatsApp üzerinden 0531 242 7762 numarasından 7/24 bize ulaşabilirsiniz." },
  { q: "Forma tasarımını kim yapıyor?", a: "Profesyonel tasarım ekibimiz sizin isteklerinize göre forma tasarımı oluşturur. İsterseniz kendi tasarımınızı da gönderebilirsiniz." },
  { q: "Kendi tasarımımı gönderebilir miyim?", a: "Evet, kendi tasarımınızı PNG veya AI formatında gönderebilirsiniz." },
  { q: "Kumaş türleri nelerdir?", a: "Micro polyester, penye ve dryfit kumaş seçeneklerimiz mevcuttur." },
  { q: "Baskı türü nedir?", a: "Sublimasyonlu baskı teknolojisi kullanıyoruz. Bu sayede baskılar yıkamada solmaz." },
  { q: "Forma yıkandığında baskı zarar görür mü?", a: "Hayır, sublimasyonlu baskı teknolojisi sayesinde baskılar yıkamada solmaz ve zarar görmez." },
  { q: "Acil sipariş kabul ediliyor mu?", a: "Evet, acil siparişler için WhatsApp hattımızdan bize ulaşabilirsiniz." },
  { q: "Beden seçenekleri nelerdir?", a: "XS'den 4XL'ye kadar tüm beden seçeneklerimiz mevcuttur." },
  { q: "Kargo süreci nasıl işliyor?", a: "Siparişiniz hazırlandıktan sonra anlaşmalı kargo firmamız ile gönderilir. Kargo takip numaranız WhatsApp üzerinden paylaşılır." },
  { q: "Kargo ücreti kime aittir?", a: "Kargo ücreti alıcıya aittir. Ancak belirli adet üstü siparişlerde ücretsiz kargo kampanyalarımız bulunmaktadır." },
  { q: "İade veya değişim yapılabilir mi?", a: "Özel tasarım ürünler olduğu için iade kabul edilmemektedir. Ancak üretim hatası durumunda değişim yapılmaktadır." },
  { q: "Ödeme yöntemleri nelerdir?", a: "Havale/EFT ve kapıda ödeme seçeneklerimiz mevcuttur." },
];

const SSS = () => {
  return (
    <Layout>
      <div className="container py-12 md:py-16 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-extrabold text-foreground text-center mb-10">
          Sık Sorulan Sorular
        </h1>

        <Accordion type="single" collapsible className="space-y-2">
          {allFaqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="rounded-xl border border-border bg-card px-5 shadow-card"
            >
              <AccordionTrigger className="text-sm font-medium text-foreground hover:no-underline py-4">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground pb-4">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Layout>
  );
};

export default SSS;
