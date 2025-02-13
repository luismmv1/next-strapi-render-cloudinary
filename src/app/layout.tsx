import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import PageTransition from "./components/PageTransition";
import CartContextProvider from "./context/CartContext";
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
  title: "NOMBRE SITIO AQUI",
  description: "Descripcion del Sitio Aqui",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextTopLoader color="#000" />
        <main className="">
        <CartContextProvider>
          <NavBar />
          <Header />
            <PageTransition>
              {children}
            </PageTransition>
          </CartContextProvider>
          </main>
        <Footer />
      </body>
    </html>
  );
};