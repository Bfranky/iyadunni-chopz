"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Phone, MessageCircle, CheckCircle, MapPin } from "lucide-react";
import { menuCategories } from "@/lib/data";

export default function OrderPage() {
  const [form, setForm] = useState({ name: "", phone: "", address: "", items: "", notes: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  const whatsappMsg = encodeURIComponent(
    `Hi Iyadunni Chopz! I want to place an order:\n\nName: ${form.name}\nPhone: ${form.phone}\nAddress: ${form.address}\nItems: ${form.items}\nNotes: ${form.notes}`
  );

  return (
    <>
      {/* Hero */}
      <section className="relative h-64 flex items-center justify-center overflow-hidden bg-[#1C1C1C] pt-20">
        <Image src="https://images.unsplash.com/photo-1561651188-d207bbec4ec3?w=1600&q=80" alt="Order" fill className="object-cover opacity-25" />
        <div className="absolute inset-0 bg-[#1C1C1C]/60" />
        <div className="relative z-10 text-center">
          <p className="font-body text-[10px] tracking-[0.35em] uppercase text-[#E67E22] mb-2">Let&apos;s Get You Fed</p>
          <h1 className="font-accent text-5xl md:text-6xl text-white">Order Now 🔥</h1>
        </div>
      </section>

      <div className="h-1 bg-gradient-to-r from-[#C0392B] via-[#E67E22] to-[#C0392B]" />

      <section className="py-16 bg-[#FDF6EC]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Quick order options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
            {/* Call */}
            <a href="tel:08105240202" className="group bg-[#1C1C1C] p-8 flex items-center gap-6 hover:bg-[#C0392B] transition-colors duration-300">
              <div className="w-16 h-16 bg-[#C0392B] group-hover:bg-white flex items-center justify-center shrink-0 transition-colors">
                <Phone size={28} className="text-white group-hover:text-[#C0392B] transition-colors" />
              </div>
              <div>
                <p className="font-body text-[10px] tracking-[0.2em] uppercase text-white/50 group-hover:text-white/70 mb-1">Call to Order</p>
                <p className="font-display text-2xl font-bold text-white mb-1">0810 524 0202</p>
                <p className="font-body text-sm text-white/50 group-hover:text-white/70">Talk to us directly — quickest way</p>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href={`https://wa.me/2348105240202?text=Hi%20Iyadunni%20Chopz!%20I'd%20like%20to%20place%20an%20order`}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#25D366] p-8 flex items-center gap-6 hover:bg-[#128C7E] transition-colors duration-300"
            >
              <div className="w-16 h-16 bg-white/20 flex items-center justify-center shrink-0">
                <MessageCircle size={28} className="text-white" />
              </div>
              <div>
                <p className="font-body text-[10px] tracking-[0.2em] uppercase text-white/70 mb-1">WhatsApp Order</p>
                <p className="font-display text-2xl font-bold text-white mb-1">Order on WhatsApp</p>
                <p className="font-body text-sm text-white/80">Send us your order on WhatsApp</p>
              </div>
            </a>
          </div>

          {/* Info bar */}
          <div className="bg-[#C0392B]/10 border border-[#C0392B]/20 p-5 flex flex-wrap gap-4 justify-center mb-12">
            {[
              { label: "Delivery Time", value: "20–40 minutes" },
              { label: "Minimum Order", value: "₦1,500" },
              { label: "Hours", value: "9:00 AM – 10:00 PM" },
              { label: "Area", value: "Ajuwon / Akute & surrounds" },
            ].map((item) => (
              <div key={item.label} className="text-center px-6 border-r border-[#C0392B]/20 last:border-0">
                <p className="font-body text-[10px] tracking-wider uppercase text-[#C0392B]/60 mb-0.5">{item.label}</p>
                <p className="font-body text-sm font-bold text-[#1C1C1C]">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Order form */}
            <div>
              <h2 className="font-display text-3xl font-bold text-[#1C1C1C] mb-6">Place Your Order Online</h2>

              {submitted ? (
                <div className="bg-white p-10 text-center">
                  <CheckCircle size={48} className="text-[#C0392B] mx-auto mb-4" />
                  <h3 className="font-display text-2xl font-bold text-[#1C1C1C] mb-2">Order Received! 🎉</h3>
                  <p className="font-body text-sm text-[#1C1C1C]/60 mb-4">
                    We&apos;ll call you shortly to confirm your order. Get ready for something delicious!
                  </p>
                  <p className="font-body text-sm font-semibold text-[#C0392B]">📞 0810 524 0202</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="font-body text-xs font-semibold tracking-wider uppercase text-[#1C1C1C]/50 block mb-1.5">Your Name</label>
                    <input name="name" value={form.name} onChange={handleChange} required placeholder="Full name" className="w-full border-2 border-[#F5E6CC] bg-white px-4 py-3 font-body text-sm outline-none focus:border-[#C0392B] transition-colors" />
                  </div>
                  <div>
                    <label className="font-body text-xs font-semibold tracking-wider uppercase text-[#1C1C1C]/50 block mb-1.5">Phone Number</label>
                    <input name="phone" value={form.phone} onChange={handleChange} required placeholder="08XX XXX XXXX" className="w-full border-2 border-[#F5E6CC] bg-white px-4 py-3 font-body text-sm outline-none focus:border-[#C0392B] transition-colors" />
                  </div>
                  <div>
                    <label className="font-body text-xs font-semibold tracking-wider uppercase text-[#1C1C1C]/50 block mb-1.5">Delivery Address</label>
                    <input name="address" value={form.address} onChange={handleChange} required placeholder="Full delivery address" className="w-full border-2 border-[#F5E6CC] bg-white px-4 py-3 font-body text-sm outline-none focus:border-[#C0392B] transition-colors" />
                  </div>
                  <div>
                    <label className="font-body text-xs font-semibold tracking-wider uppercase text-[#1C1C1C]/50 block mb-1.5">What do you want?</label>
                    <select name="items" value={form.items} onChange={handleChange} required className="w-full border-2 border-[#F5E6CC] bg-white px-4 py-3 font-body text-sm outline-none focus:border-[#C0392B] transition-colors">
                      <option value="">Choose a dish to start...</option>
                      {menuCategories.flatMap((cat) =>
                        cat.items.map((item) => (
                          <option key={item.name} value={item.name}>
                            {cat.emoji} {item.name} — ₦{item.price.toLocaleString()}
                          </option>
                        ))
                      )}
                    </select>
                  </div>
                  <div>
                    <label className="font-body text-xs font-semibold tracking-wider uppercase text-[#1C1C1C]/50 block mb-1.5">Additional items / notes</label>
                    <textarea name="notes" value={form.notes} onChange={handleChange} rows={3} placeholder="Any extras, combos, or special requests..." className="w-full border-2 border-[#F5E6CC] bg-white px-4 py-3 font-body text-sm outline-none focus:border-[#C0392B] transition-colors resize-none" />
                  </div>
                  <button type="submit" disabled={loading} className="btn-fire w-full text-base py-4 flex items-center justify-center gap-2">
                    {loading ? <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin inline-block" /> : "🔥"}
                    {loading ? "Placing Order..." : "Place My Order"}
                  </button>
                  <p className="font-body text-xs text-[#1C1C1C]/40 text-center">
                    We&apos;ll call you to confirm. You can also call us directly: <a href="tel:08105240202" className="text-[#C0392B]">0810 524 0202</a>
                  </p>
                </form>
              )}
            </div>

            {/* Menu quick reference */}
            <div>
              <h2 className="font-display text-3xl font-bold text-[#1C1C1C] mb-6">Quick Menu Reference</h2>
              <div className="space-y-4">
                {menuCategories.map((cat) => (
                  <div key={cat.id} className="bg-white p-5">
                    <h3 className="font-display text-lg font-bold text-[#1C1C1C] mb-3 flex items-center gap-2">
                      {cat.emoji} {cat.name}
                    </h3>
                    <div className="space-y-2">
                      {cat.items.map((item) => (
                        <div key={item.name} className="flex items-center justify-between text-sm">
                          <span className="font-body text-[#1C1C1C]/70 flex items-center gap-1.5">
                            {item.popular && <span className="text-[#C0392B] text-[10px]">🔥</span>}
                            {item.name}
                          </span>
                          <span className="font-body font-semibold text-[#C0392B]">₦{item.price.toLocaleString()}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Location */}
              <div className="bg-[#1C1C1C] p-5 mt-4 flex gap-3">
                <MapPin size={16} className="text-[#E67E22] shrink-0 mt-0.5" />
                <div>
                  <p className="font-body text-xs text-white/40 uppercase tracking-wider mb-1">Location</p>
                  <p className="font-body text-sm text-white">1b Victory Street, off Onibudo Road, Ajuwon/Akute 112107, Ogun State</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
