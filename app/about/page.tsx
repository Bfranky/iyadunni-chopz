import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { reviews } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Iyadunni Chopz — your favourite local restaurant in Ajuwon, Ogun State.",
};

export default function AboutPage() {
  return (
    <>
      <section className="relative h-64 flex items-center justify-center overflow-hidden bg-[#1C1C1C] pt-20">
        <Image src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&q=80" alt="About" fill className="object-cover opacity-25" />
        <div className="absolute inset-0 bg-[#1C1C1C]/60" />
        <div className="relative z-10 text-center">
          <p className="font-body text-[10px] tracking-[0.35em] uppercase text-[#E67E22] mb-2">Our Story</p>
          <h1 className="font-accent text-5xl md:text-6xl text-white">About Us ❤️</h1>
        </div>
      </section>

      <div className="h-1 bg-gradient-to-r from-[#C0392B] via-[#E67E22] to-[#C0392B]" />

      {/* Story */}
      <section className="py-20 bg-[#FDF6EC]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="font-body text-xs tracking-[0.3em] uppercase text-[#C0392B] mb-4">Who We Are</p>
              <h2 className="font-display text-4xl font-bold text-[#1C1C1C] mb-6">
                Flavour, Heart &<br />
                <em className="text-[#C0392B]">Community</em>
              </h2>
              <div className="chili-divider mb-7" />
              <p className="font-body text-base text-[#1C1C1C]/65 leading-relaxed mb-5">
                Iyadunni Chopz was born from a simple belief: that everyone deserves delicious, fresh food delivered fast and exactly as ordered. We&apos;re proudly based in Ajuwon/Akute, Ogun State, and we serve our community every single day.
              </p>
              <p className="font-body text-base text-[#1C1C1C]/65 leading-relaxed mb-8">
                From our smoky jollof rice and loaded shawarma to our perfectly grilled proteins and refreshing drinks — we pour passion into every plate. No shortcuts. No compromises. Just real food made with love.
              </p>
              <div className="flex flex-wrap gap-4">
                {["Jollof Rice", "Shawarma", "Grilled Chicken", "Drinks & More"].map((tag) => (
                  <span key={tag} className="font-body text-xs font-semibold bg-[#C0392B]/10 text-[#C0392B] px-3 py-1.5 border border-[#C0392B]/20">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative h-[420px]">
              <Image
                src="https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=700&q=80"
                alt="Delicious food"
                fill
                className="object-cover"
              />
              {/* Sticker */}
              <div className="sticker absolute -bottom-5 -left-5 w-20 h-20 text-sm font-accent leading-tight text-center">
                5★<br />Rated
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-[#1C1C1C]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-white text-center mb-12">
            What We Stand For
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { emoji: "❤️", title: "Made with Love", desc: "Every dish is prepared fresh with care and attention to detail." },
              { emoji: "⚡", title: "Served Fast", desc: "We know you&apos;re hungry. Your food will be there in 20–40 minutes." },
              { emoji: "💯", title: "Exactly as Ordered", desc: "No substitutions, no surprises. You get what you pay for." },
            ].map((val, i) => (
              <div key={i} className="text-center p-8 border border-white/10 hover:border-[#C0392B]/50 transition-colors">
                <span className="text-4xl block mb-4">{val.emoji}</span>
                <h3 className="font-display text-xl font-bold text-white mb-3">{val.title}</h3>
                <p className="font-body text-sm text-white/50 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 bg-[#F5E6CC]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-[#C0392B] mb-3">What Customers Say</p>
          <h2 className="font-display text-3xl font-bold text-[#1C1C1C] mb-10">Straight from Google ⭐</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {reviews.map((r, i) => (
              <div key={i} className="bg-white p-7">
                <div className="flex gap-1 mb-3">
                  {[1,2,3,4,5].map((s) => <Star key={s} size={14} className="star" />)}
                </div>
                <p className="font-body text-sm text-[#1C1C1C]/70 italic leading-relaxed mb-4">&ldquo;{r.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#C0392B] flex items-center justify-center font-accent text-white">
                    {r.name[0]}
                  </div>
                  <div>
                    <p className="font-body text-sm font-bold text-[#1C1C1C]">{r.name}</p>
                    <p className="font-body text-xs text-[#1C1C1C]/40">{r.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link href="/order" className="btn-fire text-base">Order Your Meal Now 🔥</Link>
          </div>
        </div>
      </section>
    </>
  );
}
