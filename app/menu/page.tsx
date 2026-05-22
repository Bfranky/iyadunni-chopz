import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { menuCategories } from "@/lib/data";

export const metadata: Metadata = {
  title: "Our Menu",
  description: "Browse the full Iyadunni Chopz menu — jollof rice, shawarma, grilled chicken, drinks and more.",
};

export default function MenuPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-64 flex items-center justify-center overflow-hidden bg-[#1C1C1C] pt-20">
        <Image src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1600&q=80" alt="Menu" fill className="object-cover opacity-30" />
        <div className="absolute inset-0 bg-[#1C1C1C]/60" />
        <div className="relative z-10 text-center">
          <p className="font-body text-[10px] tracking-[0.35em] uppercase text-[#E67E22] mb-2">Fresh & Delicious</p>
          <h1 className="font-accent text-5xl md:text-6xl text-white">Our Menu 🍽️</h1>
        </div>
      </section>

      <div className="h-1 bg-gradient-to-r from-[#C0392B] via-[#E67E22] to-[#C0392B]" />

      {/* Menu sections */}
      <section className="py-16 bg-[#FDF6EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {menuCategories.map((category, ci) => (
            <div key={category.id} className={`mb-16 ${ci > 0 ? "pt-8 border-t-2 border-[#F5E6CC]" : ""}`}>
              <div className="flex items-center gap-3 mb-8">
                <span className="text-3xl">{category.emoji}</span>
                <h2 className="font-display text-3xl font-bold text-[#1C1C1C]">{category.name}</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item, ii) => (
                  <div key={ii} className="menu-card bg-white overflow-hidden group">
                    <div className="relative h-44">
                      <Image src={item.image} alt={item.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                      {item.popular && (
                        <div className="absolute top-3 left-3 bg-[#C0392B] text-white text-[10px] font-body font-bold px-2.5 py-1 tracking-wider uppercase">
                          🔥 Popular
                        </div>
                      )}
                    </div>
                    <div className="p-5">
                      <h3 className="font-display text-lg font-bold text-[#1C1C1C] mb-1">{item.name}</h3>
                      <p className="font-body text-xs text-[#1C1C1C]/55 leading-relaxed mb-4">{item.description}</p>
                      <div className="flex items-center justify-between pt-3 border-t border-[#F5E6CC]">
                        <span className="font-accent text-2xl text-[#C0392B]">₦{item.price.toLocaleString()}</span>
                        <Link href="/order" className="font-body text-xs font-bold text-white bg-[#C0392B] px-4 py-2 hover:bg-[#922B21] transition-colors">
                          Order
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Note */}
          <div className="bg-[#1C1C1C] text-white p-8 text-center mt-8">
            <p className="font-body text-sm text-white/60 mb-2">Prices may vary. Call to confirm availability of special items.</p>
            <a href="tel:08105240202" className="font-body text-lg font-bold text-[#E67E22]">📞 0810 524 0202</a>
          </div>
        </div>
      </section>
    </>
  );
}
