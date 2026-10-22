import React from "react";
import type { Metadata } from "next";
import Script from "next/script";
import { Topnav } from "@/components/layout/Topnav";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { LiveDashboard } from "@/components/sections/LiveDashboard";
import { ModuleIntro } from "@/components/sections/ModuleIntro";
import { ModuleSection } from "@/components/sections/ModuleSection";
import { StatementBand } from "@/components/sections/StatementBand";
import { CtaSection } from "@/components/sections/CtaSection";
import { AttendanceVisual } from "@/components/modules/AttendanceVisual";
import { PayrollVisual } from "@/components/modules/PayrollVisual";
import { ExamVisual } from "@/components/modules/ExamVisual";
import { LeaveVisual } from "@/components/modules/LeaveVisual";
import { LibraryVisual } from "@/components/modules/LibraryVisual";
import { PricingSection } from "@/components/sections/PricingSection";
import { TooltipProvider } from "@/components/ui/Tooltip";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { generateSchema } from "@/lib/schema";
import { getSiteConfig } from "@/lib/site";

export async function generateMetadata(): Promise<Metadata> {
  const config = await getSiteConfig();
  const domain = config.site.domain || "pulse.omnihr.id";
  const baseUrl = domain.startsWith("http") ? domain : `https://${domain}`;

  return {
    metadataBase: new URL(baseUrl),
    title: config.seo.meta_title,
    description: config.seo.meta_description,
    keywords: config.seo.keywords,
    authors: [{ name: "Akarindo OmniHR Team" }],
    icons: {
      icon: config.branding.favicon_url || "/favicon.svg",
    },
    alternates: {
      canonical: "/",
    },
    openGraph: {
      type: "website",
      locale: "id_ID",
      url: baseUrl,
      title: config.seo.meta_title,
      description: config.seo.meta_description,
      siteName: config.site.name,
      images: config.seo.og_image_url
        ? [{ url: config.seo.og_image_url }]
        : [{ url: "/opengraph-image" }],
    },
    twitter: {
      card: "summary_large_image",
      title: config.seo.meta_title,
      description: config.seo.meta_description,
      images: config.seo.og_image_url
        ? [config.seo.og_image_url]
        : ["/opengraph-image"],
    },
  };
}

export default async function Home() {
  const config = await getSiteConfig();
  const schema = generateSchema(config);

  return (
    <TooltipProvider>
      {/* Dynamic Theme Color Injection from Laravel Admin */}
      {config.branding.primary_color && (
        <style>{`:root { --accent: ${config.branding.primary_color}; --accent-strong: ${config.branding.primary_color}; }`}</style>
      )}

      {/* Google Analytics Script if Configured in Admin */}
      {config.tracking.ga_id && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${config.tracking.ga_id}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${config.tracking.ga_id}');
            `}
          </Script>
        </>
      )}

      {/* Meta Pixel Script if Configured in Admin */}
      {config.tracking.meta_pixel_id && (
        <>
          <Script id="meta-pixel" strategy="afterInteractive">
            {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${config.tracking.meta_pixel_id}');
              fbq('track', 'PageView');
            `}
          </Script>
          <noscript>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              src={`https://www.facebook.com/tr?id=${config.tracking.meta_pixel_id}&ev=PageView&noscript=1`}
              alt=""
            />
          </noscript>
        </>
      )}

      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Dynamic Topnav */}
      <Topnav
        logoUrl={config.branding.logo_url}
        siteName={config.site.name}
        whatsappUrl={config.cta.whatsapp_url}
      />

      <main id="content">
        {/* Dynamic Hero Section */}
        <HeroSection
          headline={config.hero.headline}
          subheadline={config.hero.subheadline}
          ctaText={config.hero.cta_text}
          whatsappUrl={config.cta.whatsapp_url}
        />

        {/* Live Dashboard Section */}
        <LiveDashboard />

        {/* Module Intro Section */}
        <ModuleIntro />

        {/* 01. Absensi */}
        <ModuleSection
          id="absensi"
          index="01"
          title="Ketepatan waktu, terbaca per jam dan per tim."
          lead="Tren check-in 30 hari, jam sibuk per shift, dan heatmap kehadiran mingguan: supaya supervisor tahu di mana jadwal mulai bocor sebelum lembur menumpuk."
          points={[
            "Pola terlambat per shift dan per lantai",
            "Jam sibuk check-in & checkout",
            "Heatmap 7×12 jam tanpa ekspor manual",
          ]}
          imageSrc="/images/absensi.jpg"
          imageAlt="Seorang karyawan membuka pintu kaca kantor sambil membawa tas laptop pada pagi hari"
          imageCaptionLeft="Check-in lapangan · shift pagi"
          imageCaptionRight="08.57"
          visualComponent={<AttendanceVisual />}
        />

        {/* 02. Gaji / Payroll */}
        <ModuleSection
          id="gaji"
          index="02"
          title="Payroll bulan depan sudah kelihatan hari ini."
          lead="Proyeksi pengeluaran tiga bulan ke depan dari pola absensi dan lembur berjalan, plus beban lembur per divisi: dibandingkan langsung dengan pagu anggaran."
          points={[
            "Prediksi payroll 3 bulan, bukan 1",
            "Beban lembur per divisi",
            "Selisih pagu vs realisasi per bulan",
          ]}
          imageSrc="/images/gaji.jpg"
          imageAlt="Dua staf keuangan di kantor memeriksa dokumen penggajian dan tablet kerja"
          imageCaptionLeft="Payroll · tim finance"
          imageCaptionRight="Oktober"
          visualComponent={<PayrollVisual />}
          isReverse
        />

        {/* 03. Exam */}
        <ModuleSection
          id="exam"
          index="03"
          title="Skor ujian bukan angka mati: ini peta kompetensi."
          lead="Distribusi kurva normal menunjukkan apakah ujian terlalu mudah atau terlalu sulit, lalu analitik skill-gap menunjuk divisi mana yang butuh pelatihan berikutnya."
          points={[
            "Kurva distribusi skor per angkatan",
            "Ambang lulus & sebaran nilai",
            "Skill-gap per divisi, bukan per orang",
          ]}
          imageSrc="/images/exam.jpg"
          imageAlt="Tiga karyawan mengikuti sesi pelatihan dan ujian dengan laptop di ruang kelas kantor"
          imageCaptionLeft="Sertifikasi internal · batch 14"
          imageCaptionRight="86 / 100"
          visualComponent={<ExamVisual />}
        />

        {/* 04. Perizinan */}
        <ModuleSection
          id="perizinan"
          index="04"
          title="Musim cuti terlihat sebulan lebih awal."
          lead="Analitik musim cuti memetakan kapan tim akan kosong, lalu membandingkannya dengan kalender puncak operasional: supaya kepala unit bisa menggeser jadwal sebelum kekurangan staf terjadi."
          points={[
            "Pola cuti 12 bulan ke belakang",
            "Proyeksi kekurangan staf per pekan",
            "Peringatan tumpang tindih di bulan puncak",
          ]}
          imageSrc="/images/perizinan.jpg"
          imageAlt="Seorang karyawan duduk di sofa rumah sambil memegang cangkir kopi, suasana cuti"
          imageCaptionLeft="Kalender cuti · tim operasional"
          imageCaptionRight="Desember"
          visualComponent={<LeaveVisual />}
          isReverse
        />

        {/* 05. Library */}
        <ModuleSection
          id="library"
          index="05"
          title="Tahu siapa yang sudah membaca SOP: dan siapa yang belum."
          lead="Setiap dokumen membawa statistik bacaan dan konfirmasi per divisi. Bukan lagi daftar hadir sosialisasi, tapi bukti bahwa SOP baru benar-benar sampai ke tim."
          points={[
            "Status baca & konfirmasi per orang",
            "Cakupan per divisi dan lokasi kerja",
            "Pengingat otomatis ke yang belum",
          ]}
          imageSrc="/images/library.jpg"
          imageAlt="Empat karyawan berdiri di kantor sambil meninjau map dokumen SOP bersama"
          imageCaptionLeft="Library SOP · versi 4.2"
          imageCaptionRight="89% dibaca"
          visualComponent={<LibraryVisual />}
        />

        {/* Pricing & Interactive Cost Calculator */}
        <PricingSection whatsappNumber={config.cta.whatsapp_number} />

        {/* Statement Band */}
        <StatementBand />

        {/* Final Conversion CTA Strip */}
        <CtaSection whatsappUrl={config.cta.whatsapp_url} />
      </main>

      {/* Dynamic Footer */}
      <Footer
        logoUrl={config.branding.logo_url}
        siteName={config.site.name}
        email={config.contact.email}
        phone={config.contact.phone}
        socialLinks={config.contact.social_links}
        footerText={config.footer_text}
        whatsappUrl={config.cta.whatsapp_url}
      />

      {/* Floating WhatsApp CTA */}
      <FloatingWhatsApp whatsappUrl={config.cta.whatsapp_url} />
    </TooltipProvider>
  );
}
