import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ChatWidget from "@/components/chat/ChatWidget";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ruff Bootsreisen - Hausbootferien in Frankreich",
  description: "Entdecken Sie die schönsten Wasserwege Frankreichs mit unseren Hausbooten. Kein Führerschein erforderlich.",
  keywords: "Hausboot, Bootsverleih, Frankreich, Kanäle, Burgund, Canal du Midi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}

