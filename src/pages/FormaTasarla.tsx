import Layout from "@/components/layout/Layout";
import { Wand2, Upload, Palette, CheckCircle, Shirt, Paintbrush, Users, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { products } from "@/data/products";

import jersey1 from "@/assets/jersey-1.png";
import jersey2 from "@/assets/jersey-2.png";
import jersey3 from "@/assets/jersey-3.png";
import jersey4 from "@/assets/jersey-4.png";
import jersey5 from "@/assets/jersey-5.png";
import jersey6 from "@/assets/jersey-6.png";
import jersey7 from "@/assets/jersey-7.png";
import jersey8 from "@/assets/jersey-8.png";

const designGallery = [jersey1, jersey2, jersey3, jersey4, jersey5, jersey6];

const FormaTasarla = () => {
  return (
    <Layout>
      {/* Hero / Intro */}
      <section className="bg-background py-10 md:py-14">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4 mb-10"
          >
            <h1 className="text-2xl md:text-4xl font-extrabold text-foreground">
              Halı Saha Forma Tasarla
            </h1>
            <p className="text-sm md:text-base text-muted-foreground max-w-3xl leading-relaxed">
              Superforma ile halı saha forması tasarlamak artık çok kolay! Renklerinizi ve logonuzu belirleyin, 
              profesyonel tasarım ekibimiz sizin için benzersiz formalar oluştursün. Takımınıza özel, 
              yüksek kaliteli forma tasarımları için doğru yerdesiniz.
            </p>
            <p className="text-sm text-muted-foreground max-w-3xl">
              Forma Tasarlama Portalına Hoşgeldiniz
            </p>
            <p className="text-xs text-muted-foreground max-w-3xl leading-relaxed">
              Superforma olarak halı saha formalarında Türkiye'nin en kapsamlı tasarım hizmetini sunuyoruz. 
              İster hazır modellerimizden seçin, ister sıfırdan tasarlayın – sonuç her zaman profesyonel.
            </p>
          </motion.div>

          {/* Design Preview Card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="rounded-xl border border-border bg-card p-6 md:p-8 shadow-card mb-8"
          >
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1 space-y-4">
                <h2 className="text-lg font-bold text-primary">Forma Tasarım</h2>
                <p className="text-xs text-muted-foreground">Aşağıdaki modellerden birini seçerek başlayın</p>
                <Button className="gradient-brand text-brand-foreground rounded-lg px-6 h-10 font-semibold text-sm">
                  <Link to="/forma-siparis">Başla</Link>
                </Button>
                <div className="flex gap-2 flex-wrap mt-4">
                  {designGallery.map((img, i) => (
                    <div key={i} className="w-12 h-12 md:w-14 md:h-14 rounded-lg border border-border overflow-hidden bg-muted">
                      <img src={img} alt={`Tasarım ${i + 1}`} className="w-full h-full object-cover object-top" />
                    </div>
                  ))}
                </div>
              </div>
              <div className="shrink-0 flex gap-3 items-end">
                <div className="w-32 h-48 md:w-40 md:h-56 rounded-lg overflow-hidden bg-muted">
                  <img src={jersey1} alt="Forma önizleme" className="w-full h-full object-cover object-top" />
                </div>
                <div className="w-32 h-48 md:w-40 md:h-56 rounded-lg overflow-hidden bg-muted">
                  <img src={jersey2} alt="Forma önizleme" className="w-full h-full object-cover object-top" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Warning / Info text */}
          <p className="text-xs text-primary font-medium mb-8">
            ⚠ Forma tasarımı yapmak için aşağıdaki bilgileri doldurmanız gerekmektedir. Eksik bilgilerle gönderilen talepler değerlendirilmemektedir.
          </p>

          {/* Feature List */}
          <div className="space-y-4 mb-10">
            {[
              { label: "Forma Tipi", desc: "Halı saha, futbol, voleybol veya basketbol forması seçin." },
              { label: "Renk Tercihi", desc: "Takımınızın renklerini belirleyin (Ana renk + yan renk)." },
              { label: "Yaka Modeli", desc: "V yaka, bisiklet yaka veya polo yaka seçeneklerinden birini tercih edin." },
              { label: "Logo & İsim", desc: "Takım logonuzu yükleyin, isim ve numara bilgilerini girin." },
              { label: "Baskı Kalitesi", desc: "Süblimasyon baskı ile solmayan, yıkanmaya dayanıklı formalar." },
              { label: "Kumaş Seçimi", desc: "Nefes alan, ter tutmayan Dry-Fit kumaş teknolojisi." },
              { label: "Teslimat", desc: "Tasarımınız onaylandıktan sonra 5-7 iş günü içinde kargoda." },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <div>
                  <span className="text-sm font-semibold text-foreground">{item.label}: </span>
                  <span className="text-sm text-muted-foreground">{item.desc}</span>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Banner */}
          <div className="rounded-xl gradient-brand p-5 md:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 mb-14">
            <p className="text-sm md:text-base font-semibold text-brand-foreground">
              Bugün forma tasarımınızı oluşturmak ister misiniz?
            </p>
            <div className="flex gap-3">
              <Button size="sm" className="bg-brand-foreground text-primary hover:bg-brand-foreground/90 rounded-lg px-5 font-semibold">
                <Link to="/forma-siparis">Forma Sipariş</Link>
              </Button>
              <Button size="sm" variant="outline" className="border-brand-foreground/30 text-brand-foreground hover:bg-brand-foreground/10 rounded-lg px-5 font-semibold bg-transparent">
                <Link to="/sss">Sıkça Sorulan Sorular</Link>
              </Button>
            </div>
          </div>

          {/* 3 Player Showcase */}
          <div className="flex justify-center gap-4 md:gap-8 mb-14">
            {[jersey3, jersey5, jersey7].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="w-28 h-40 md:w-48 md:h-64 rounded-xl overflow-hidden bg-muted shadow-card"
              >
                <img src={img} alt={`Forma model ${i + 1}`} className="w-full h-full object-cover object-top" />
              </motion.div>
            ))}
          </div>

          {/* SEO Long Text Block 1 */}
          <div className="max-w-3xl space-y-6 mb-14">
            <h2 className="text-xl md:text-2xl font-bold text-foreground">Halı Saha Forma Tasarla</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Halı saha forması tasarlamak, takımınızın kimliğini sahaya yansıtmanın en etkili yoludur. 
              Superforma olarak, profesyonel tasarım ekibimizle birlikte her takıma özel, benzersiz formalar üretiyoruz. 
              Forma tasarım sürecimiz tamamen dijitaldir ve sizin tercihlerinize göre şekillenir.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Tasarım sürecinde renk paletinizi, yaka modelinizi, kumaş tercihlerinizi ve baskı detaylarınızı belirleyerek 
              size özel bir forma oluşturuyoruz. Her bir forma, süblimasyon baskı teknolojisi ile üretilir ve 
              yıkama sonrası solma veya dökülme yaşanmaz.
            </p>

            <h3 className="text-base font-bold text-foreground">Neden Superforma?</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><span className="text-primary">•</span> Türkiye geneli ücretsiz kargo</li>
              <li className="flex items-start gap-2"><span className="text-primary">•</span> 5-7 iş günü teslimat süresi</li>
              <li className="flex items-start gap-2"><span className="text-primary">•</span> Süblimasyon baskı teknolojisi</li>
              <li className="flex items-start gap-2"><span className="text-primary">•</span> Dry-Fit nefes alan kumaş</li>
              <li className="flex items-start gap-2"><span className="text-primary">•</span> Profesyonel tasarım desteği</li>
              <li className="flex items-start gap-2"><span className="text-primary">•</span> 10+ yıllık deneyim</li>
            </ul>

            <h3 className="text-base font-bold text-foreground">Süblimasyon Baskı Teknolojisi</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Süblimasyon baskı, mürekkebin kumaş liflerine nüfuz etmesiyle gerçekleşen ileri bir baskı teknolojisidir. 
              Bu sayede baskı kumaşın bir parçası haline gelir ve yüzlerce yıkamaya dayanır. Geleneksel baskı 
              yöntemlerinin aksine, süblimasyon baskı ile formalarınız ilk günkü canlılığını korur.
            </p>

            <h3 className="text-base font-bold text-foreground">Kumaş Seçenekleri</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Formalarımızda kullanılan Dry-Fit kumaş, ter yönetimi konusunda üstün performans gösterir. 
              Vücuttan uzaklaştırdığı nem sayesinde oyuncuların serin ve kuru kalmasını sağlar. 
              Ayrıca hafif yapısı ile hareket özgürlüğü sunar.
            </p>
          </div>

          {/* Editor's Picks Grid */}
          <div className="mb-14">
            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-8 text-center">
              Sizler Tarafından Tasarlanan Editörün Seçimi Formalar
            </h2>
            <div className="grid grid-cols-2 gap-4 md:gap-6 max-w-3xl mx-auto">
              {[jersey1, jersey2, jersey3, jersey4, jersey5, jersey6, jersey7, jersey8].map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i % 2) * 0.1 }}
                  className="rounded-xl overflow-hidden bg-muted border border-border shadow-card"
                >
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={img}
                      alt={`Editör seçimi forma ${i + 1}`}
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-3 flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">Tasarım #{i + 1}</span>
                    <span className="text-xs font-medium text-primary">superforma.net</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* SEO Long Text Block 2 */}
          <div className="max-w-3xl space-y-6 mb-10">
            <h2 className="text-xl md:text-2xl font-bold text-foreground">Nasıl Çalışır?</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Forma tasarım sürecimiz son derece basittir. İlk olarak sipariş formundan renk, yaka modeli ve 
              logo bilgilerinizi gönderin. Tasarım ekibimiz 24 saat içinde size 2-3 farklı tasarım alternatifi sunar. 
              Beğendiğiniz tasarımı seçtikten sonra üretime geçilir ve 5-7 iş günü içinde formanız kapınıza ulaşır.
            </p>

            <h3 className="text-base font-bold text-foreground">Halı Saha Forması Fiyatları</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Halı saha forması fiyatları, seçilen kumaş kalitesi, baskı detayları ve adet sayısına göre değişiklik 
              gösterebilir. Genel olarak set başına (forma + şort) fiyatlarımız 280₺'den başlamaktadır. 
              10 ve üzeri adet siparişlerde özel indirimler uygulanmaktadır.
            </p>

            <h3 className="text-base font-bold text-foreground">Toplu Sipariş Avantajları</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              10 adet ve üzeri forma siparişlerinde toplu sipariş indirimi uygulanır. Ayrıca 20 adet üzeri 
              siparişlerde ücretsiz tasarım hizmeti sunulmaktadır. Okul takımları, kurumsal turnuvalar ve 
              halı saha ligleri için özel fiyat teklifleri hazırlanmaktadır.
            </p>

            <h3 className="text-base font-bold text-foreground">Kişiselleştirme Seçenekleri</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Her forma, oyuncu adı ve numarası ile kişiselleştirilebilir. Bunun yanı sıra takım logosu, 
              sponsor logoları ve özel grafikler de formaya eklenebilir. Tüm baskılar süblimasyon teknolojisi 
              ile yapıldığından, detaylar son derece net ve kalıcıdır.
            </p>

            <h3 className="text-base font-bold text-foreground">Kalite Garantisi</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Superforma olarak ürettiğimiz tüm formalarda kalite garantisi sunuyoruz. Baskı kalitesi, 
              kumaş dayanıklılığı ve dikiş işçiliği konusunda en yüksek standartları uyguluyoruz. 
              Memnun kalmadığınız durumda değişim garantisi sağlıyoruz.
            </p>

            <h3 className="text-base font-bold text-foreground">İade ve Değişim Politikası</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Tasarım onayından sonra üretime geçilen formalarda, üretim hatası kaynaklı sorunlarda 
              ücretsiz değişim yapılmaktadır. Beden değişimi talepleri, ürünün kullanılmamış ve etiketli 
              olması şartıyla 14 gün içinde kabul edilmektedir.
            </p>

            <h3 className="text-base font-bold text-foreground">Halı Saha Forma Trendi</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              2026 yılında halı saha formalarında minimalist tasarımlar, geometrik desenler ve retro kesimler 
              ön plana çıkıyor. Gradient geçişli formalar ve dijital kamuflaj desenleri de popülerliğini korumaya devam ediyor.
              Superforma olarak tüm trend tasarımları sizlere sunuyoruz.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FormaTasarla;
