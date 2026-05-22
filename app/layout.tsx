import type { Metadata } from "next";
import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Iyadunni Chopz — Taste the Fire. Feel the Love. | Ajuwon, Ogun State",
    template: "%s | Iyadunni Chopz",
  },
  description:
    "Iyadunni Chopz — your favourite spot for jollof rice, shawarma, grilled chicken & more in Ajuwon/Akute, Ogun State. Fast delivery, real flavour. Rated 5 stars! 🔥",
  keywords: ["Iyadunni Chopz", "restaurant Ajuwon", "food delivery Akute", "shawarma Ogun State", "jollof rice delivery"],
  openGraph: {
    title: "Iyadunni Chopz — Taste the Fire. Feel the Love.",
    description: "Fast delivery. Real Nigerian flavour. 5★ rated restaurant in Ajuwon, Ogun State.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
