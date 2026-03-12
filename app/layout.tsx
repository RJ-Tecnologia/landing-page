import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // O título ideal deve ter entre 10-60 caracteres
  title: "Zenit Finance",
  
  // A descrição ideal deve ter entre 140-160 caracteres
  description: "A plataforma definitiva para controlar seus gastos, investimentos e alcançar a liberdade financeira. Tecnologia de ponta desenvolvida por Zenit Tech.",
  
  // Palavras-chave ajudam o Google a entender o nicho do site
  keywords: [
    "finanças pessoais", 
    "controle de gastos", 
    "investimentos", 
    "liberdade financeira", 
    "gestão de dinheiro",
    "Zenit Finance"
  ],

  // Ícones (Favicon)
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg", // Melhora a aparência em iPhones
  },

  // OpenGraph: Como o site aparece quando compartilhado (WhatsApp, LinkedIn, etc)
  openGraph: {
    title: "Zenit Finance | Domine seu dinheiro",
    description: "Controle financeiro inteligente para quem busca liberdade.",
    url: "https://zenitfinance.com.br",
    siteName: "Zenit Finance",
    locale: "pt_BR",
    type: "website",
  },

  // Robots: Avisa ao Google que ele PODE indexar o site
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
