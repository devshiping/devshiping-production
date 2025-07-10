import "./globals.css";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";

import { Poppins, Geist, Geist_Mono } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata = {
  title: "Devshiping - Premium Web Development Solutions",
  description:
    "Transform your ideas into powerful digital experiences with our cutting-edge web development solutions",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="font-sans antialiased">
        <Header />
        {children}
        <WhatsAppWidget />
        <Footer />
      </body>
    </html>
  );
}
