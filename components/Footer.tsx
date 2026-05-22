import Link from "next/link";
import { Flame, MapPin, Phone, Clock, Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1C1C1C] text-white">
      <div className="h-1 bg-gradient-to-r from-[#C0392B] via-[#E67E22] to-[#C0392B]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-[#C0392B] flex items-center justify-center rotate-6">
                <Flame size={18} className="text-white" fill="white" />
              </div>
              <div>
                <span className="font-accent text-xl block leading-tight">Iyadunni</span>
                <span className="font-body text-[10px] tracking-[0.25em] uppercase text-[#E67E22]">Chopz</span>
              </div>
            </div>
            <p className="font-body text-sm text-white/50 leading-relaxed mb-5">
              Real food. Real flavour. Made with love and served with fire in Ajuwon/Akute.
            </p>
            <div className="flex gap-3">
              {[Instagram, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="w-8 h-8 border border-white/20 flex items-center justify-center text-white/40 hover:text-[#E67E22] hover:border-[#E67E22] transition-colors">
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-body text-[10px] tracking-[0.25em] uppercase text-[#E67E22] mb-5">Quick Links</h3>
            <div className="flex flex-col gap-3">
              {[
                { href: "/", label: "Home" },
                { href: "/menu", label: "Our Menu" },
                { href: "/about", label: "About Us" },
                { href: "/order", label: "Order Now" },
                { href: "/contact", label: "Contact" },
              ].map((l) => (
                <Link key={l.href} href={l.href} className="font-body text-sm text-white/50 hover:text-[#E67E22] transition-colors">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-body text-[10px] tracking-[0.25em] uppercase text-[#E67E22] mb-5">Find Us</h3>
            <div className="flex flex-col gap-4">
              <div className="flex gap-3">
                <MapPin size={15} className="text-[#C0392B] shrink-0 mt-0.5" />
                <span className="font-body text-sm text-white/50 leading-relaxed">
                  1b Victory Street, off Onibudo Road, Ajuwon/Akute 112107, Ogun State
                </span>
              </div>
              <div className="flex gap-3 items-center">
                <Phone size={15} className="text-[#C0392B] shrink-0" />
                <a href="tel:08105240202" className="font-body text-sm text-white/50 hover:text-[#E67E22] transition-colors">
                  0810 524 0202
                </a>
              </div>
              <div className="flex gap-3 items-start">
                <Clock size={15} className="text-[#C0392B] shrink-0 mt-0.5" />
                <div className="font-body text-sm text-white/50">
                  <p>Mon – Sun</p>
                  <p>9:00 AM – 10:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Order CTA */}
          <div>
            <h3 className="font-body text-[10px] tracking-[0.25em] uppercase text-[#E67E22] mb-5">Hungry?</h3>
            <p className="font-body text-sm text-white/50 leading-relaxed mb-5">
              Fast delivery to your door. Minimum order ₦1,500. Delivery in 20–40 mins.
            </p>
            <Link href="/order" className="btn-fire text-sm block text-center">
              Order Now 🔥
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="font-body text-xs text-white/25">© 2025 Iyadunni Chopz. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span className="font-body text-xs text-white/25">Rated</span>
            <span className="font-accent text-sm text-[#D4A017]">5.0 ★</span>
            <span className="font-body text-xs text-white/25">on Google</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
