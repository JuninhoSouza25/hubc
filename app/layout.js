import { Geist, Geist_Mono } from "next/font/google";
import "@/app/styles/styles.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import BackToTop from "@/components/BackToTop";
import ScrollToTop from "@/components/ScrollToTop";
import WhatsappComponent from "@/components/WhatsappComponent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Hub-C - Painéis Solares | Preço da China, Estoque no Brasil",
  description: "Hub-C oferece módulos de energia solar com preço competitivo da China e estoque no Brasil. Entrega rápida e qualidade garantida para seu projeto de energia solar.",
  keywords: "painéis solares, módulos solares, energia solar, atacado, importação, Brasil, China, Hub-C",
  openGraph: {
    title: "Hub-C - Painéis Solares | Preço da China, Estoque no Brasil",
    description: "Hub-C oferece módulos de energia solar com preço competitivo da China e estoque no Brasil. Entrega rápida e qualidade garantida para seu projeto de energia solar.",
    type: "website",
    locale: "pt_BR",
    url: "https://hub-c.com.br",
    siteName: "Hub-C",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hub-C - Painéis Solares | Preço da China, Estoque no Brasil",
    description: "Hub-C oferece módulos de energia solar com preço competitivo da China e estoque no Brasil. Entrega rápida e qualidade garantida para seu projeto de energia solar.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style dangerouslySetInnerHTML={{
          __html: `
            html, body {
              scroll-behavior: smooth;
            }
            /* Força scroll para o topo no carregamento */
            html {
              scroll-padding-top: 0;
            }
          `
        }} />
      </head>
      <body 
        className={`${geistSans.variable} ${geistMono.variable}`}
        suppressHydrationWarning={true}
      >
        <ScrollToTop />
        {children}
        <BackToTop />
        <WhatsappComponent />
        <script 
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js" 
          integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" 
          crossOrigin="anonymous"
          async
        />
      </body>
    </html>
  );
}
