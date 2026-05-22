"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Star, Flame, Clock, MapPin, Zap, ChevronRight, Phone, ArrowRight } from "lucide-react";
import { menuCategories, reviews, info } from "@/lib/data";

const marqueeItems = ["🍛 Jollof Rice", "🌯 Shawarma", "🍗 Grilled Chicken", "🍲 Peppered Chicken", "🍌 Dodo", "🥤 Chapman", "🔥 Fast Delivery", "⭐ 5 Star Food"];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#1C1C1C]">
        {/* Background food image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=1800&q=85"
            alt="Delicious food"
            fill
            priority
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1C1C1C] via-[#1C1C1C]/90 to-transparent" />
        </div>

        {/* Floating emoji blobs */}
        {["🔥", "🌶️", "⭐", "🍛"].map((emoji, i) => (
          <motion.div
            key={i}
            className="absolute text-3xl sm:text-4xl select-none pointer-events-none"
            style={{
              top: `${[20, 65, 35, 75][i]}%`,
              right: `${[10, 20, 5, 15][i]}%`,
            }}
            animate={{ y: [0, -15, 0], rotate: [0, 10, -10, 0] }}
            transition={{ duration: 3 + i * 0.7, repeat: Infinity, delay: i * 0.5 }}
          >
            {emoji}
          </motion.div>
        ))}

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
          <div className="max-w-2xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-[#C0392B]/20 border border-[#C0392B]/40 text-[#E67E22] px-4 py-2 text-xs font-body font-semibold tracking-wider uppercase mb-6"
            >
              <Star size={12} fill="currentColor" /> Rated 5.0 — Ajuwon's Favourite
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="font-accent text-6xl sm:text-7xl md:text-8xl text-white leading-none mb-2"
            >
              Taste the
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.7 }}
              className="font-accent text-6xl sm:text-7xl md:text-8xl text-[#C0392B] leading-none mb-6"
            >
              Fire. 🔥
            </motion.h1>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.6 }}
              className="chili-divider origin-left mb-6"
            />

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="font-body text-lg text-white/70 leading-relaxed mb-8 max-w-lg"
            >
              Jollof rice, shawarma, grilled chicken & everything in between — made fresh and delivered fast to Ajuwon/Akute.
            </motion.p>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-5 mb-10"
            >
              {[
                { icon: <Star size={14} fill="#D4A017" className="text-[#D4A017]" />, text: "5.0 Google Rating" },
                { icon: <Zap size={14} className="text-[#E67E22]" />, text: "20–40 min delivery" },
                { icon: <Flame size={14} className="text-[#C0392B]" fill="#C0392B" />, text: "All food categories" },
              ].map((stat, i) => (
                <div key={i} className="flex items-center gap-2 text-white/60 text-sm font-body">
                  {stat.icon}
                  <span>{stat.text}</span>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/order" className="btn-fire text-base">
                Order Now — It&apos;s 🔥
              </Link>
              <Link href="/menu" className="btn-outline-fire text-base border-white/30 text-white hover:bg-white hover:text-[#1C1C1C]">
                See Full Menu →
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Phone CTA bottom */}
        <motion.a
          href="tel:08105240202"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/70 text-sm font-body px-5 py-2.5 hover:bg-white/20 transition-colors"
        >
          <Phone size={14} className="text-[#E67E22]" />
          Call to Order: 0810 524 0202
        </motion.a>
      </section>

      {/* ── MARQUEE ── */}
      <div className="bg-[#C0392B] py-3 overflow-hidden">
        <div className="flex whitespace-nowrap">
          <div className="marquee-track flex gap-8 pr-8">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span key={i} className="font-body text-sm font-semibold text-white/90 tracking-wide flex-shrink-0">
                {item} <span className="text-white/30 mx-2">·</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── WHY US ── */}
      <section className="py-20 bg-[#FDF6EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="font-body text-xs tracking-[0.3em] uppercase text-[#C0392B] mb-3">Why People Love Us</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[#1C1C1C]">
              Real Food. Real Fast.<br />
              <em className="text-[#C0392B]">Real Good.</em>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { emoji: "⚡", title: "Lightning Fast", desc: "We deliver in 20–40 minutes. Hot food, right to your door." },
              { emoji: "✅", title: "100% Accurate", desc: "You get exactly what you ordered — every single time." },
              { emoji: "🍽️", title: "All Categories", desc: "Rice dishes, shawarma, grilled meat, drinks — we do it all." },
              { emoji: "⭐", title: "5-Star Quality", desc: "Rated 5 stars on Google. The community doesn't lie." },
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-7 border-2 border-transparent hover:border-[#C0392B] transition-all duration-300 group"
              >
                <span className="text-4xl block mb-4">{card.emoji}</span>
                <h3 className="font-display text-xl font-bold text-[#1C1C1C] mb-2 group-hover:text-[#C0392B] transition-colors">
                  {card.title}
                </h3>
                <p className="font-body text-sm text-[#1C1C1C]/60 leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MENU PREVIEW ── */}
      <section className="py-20 bg-[#F5E6CC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <p className="font-body text-xs tracking-[0.3em] uppercase text-[#C0392B] mb-2">What We Serve</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-[#1C1C1C]">
                Our Bestsellers
              </h2>
            </div>
            <Link href="/menu" className="flex items-center gap-2 font-body text-sm font-semibold text-[#C0392B] hover:gap-3 transition-all">
              Full Menu <ArrowRight size={16} />
            </Link>
          </div>

          {/* Show popular items only */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuCategories.flatMap((c) => c.items.filter((i) => i.popular)).slice(0, 6).map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="menu-card bg-white overflow-hidden group"
              >
                <div className="relative h-48">
                  <Image src={item.image} alt={item.name} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute top-3 left-3 bg-[#C0392B] text-white text-[10px] font-body font-bold px-2.5 py-1 tracking-wider uppercase">
                    Popular
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-bold text-[#1C1C1C] mb-1">{item.name}</h3>
                  <p className="font-body text-xs text-[#1C1C1C]/55 leading-relaxed mb-4">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-accent text-xl text-[#C0392B]">₦{item.price.toLocaleString()}</span>
                    <Link href="/order" className="font-body text-xs font-semibold text-[#C0392B] border border-[#C0392B] px-3 py-1.5 hover:bg-[#C0392B] hover:text-white transition-colors">
                      Order
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/menu" className="btn-fire">
              See Full Menu 🍽️
            </Link>
          </div>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section className="py-20 bg-[#1C1C1C] relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C0392B] via-[#E67E22] to-[#C0392B]" />

        {/* Big star bg */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[300px] opacity-5 select-none pointer-events-none">⭐</div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="font-body text-xs tracking-[0.3em] uppercase text-[#E67E22] mb-3">Google Reviews</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
              The People Have Spoken
            </h2>
            {/* Big rating */}
            <div className="flex items-center justify-center gap-3 mt-4">
              {[1,2,3,4,5].map((s) => (
                <Star key={s} size={24} className="star" />
              ))}
              <span className="font-accent text-5xl text-[#D4A017] ml-2">5.0</span>
            </div>
            <p className="font-body text-sm text-white/40 mt-2">Based on {info.reviewCount} Google reviews</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-white/5 border border-white/10 p-7 relative"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#C0392B] to-[#E67E22]" />
                <div className="flex gap-1 mb-4">
                  {[1,2,3,4,5].map((s) => <Star key={s} size={14} className="star" />)}
                </div>
                <p className="font-body text-base text-white/75 italic leading-relaxed mb-5">
                  &ldquo;{r.text}&rdquo;
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-[#C0392B] flex items-center justify-center font-accent text-white text-lg">
                      {r.name[0]}
                    </div>
                    <div>
                      <p className="font-body text-sm font-semibold text-white">{r.name}</p>
                      <p className="font-body text-xs text-white/40">{r.date} · Google</p>
                    </div>
                  </div>
                  <span className="font-accent text-2xl text-[#D4A017]">★</span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-sm text-[#E67E22] hover:underline"
            >
              View all reviews on Google →
            </a>
          </div>
        </div>
      </section>

      {/* ── INFO BAR ── */}
      <section className="bg-[#C0392B] py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-white text-center sm:text-left">
            {[
              {
                icon: <MapPin size={20} className="shrink-0 text-white/60" />,
                title: "Find Us",
                text: "1b Victory Street, off Onibudo Road, Ajuwon/Akute, Ogun State",
              },
              {
                icon: <Clock size={20} className="shrink-0 text-white/60" />,
                title: "Opening Hours",
                text: "Every Day: 9:00 AM – 10:00 PM",
              },
              {
                icon: <Phone size={20} className="shrink-0 text-white/60" />,
                title: "Call to Order",
                text: "0810 524 0202",
              },
            ].map((item, i) => (
              <div key={i} className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                {item.icon}
                <div>
                  <p className="font-body text-[10px] tracking-[0.2em] uppercase text-white/60 mb-1">{item.title}</p>
                  <p className="font-body text-sm font-semibold text-white">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="relative py-24 bg-[#FDF6EC] overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none select-none">
          <span className="text-[400px] font-accent text-[#C0392B]">🔥</span>
        </div>
        <div className="relative z-10 text-center max-w-2xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <p className="font-body text-xs tracking-[0.3em] uppercase text-[#C0392B] mb-4">Ready to Eat?</p>
            <h2 className="font-display text-4xl md:text-6xl font-bold text-[#1C1C1C] mb-6">
              Your Next <em className="text-[#C0392B]">Favourite Meal</em><br />is One Call Away
            </h2>
            <p className="font-body text-base text-[#1C1C1C]/60 mb-8">
              Fast delivery · Accurate orders · 5-star taste. What are you waiting for?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/order" className="btn-fire text-base">
                Order Online Now 🔥
              </Link>
              <a href="tel:08105240202" className="btn-outline-fire text-base flex items-center justify-center gap-2">
                <Phone size={16} /> Call: 0810 524 0202
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
