"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Flame, Phone } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
  { href: "/order", label: "Order Now" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#1C1C1C] shadow-lg" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 bg-[#C0392B] flex items-center justify-center rotate-6 group-hover:rotate-12 transition-transform">
              <Flame size={18} className="text-white" fill="white" />
            </div>
            <div className="leading-none">
              <span className="font-accent text-xl text-white block leading-tight">Iyadunni</span>
              <span className="font-body text-[10px] tracking-[0.25em] uppercase text-[#E67E22]">Chopz</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.slice(0, -1).map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`font-body text-sm font-500 transition-colors duration-200 hover:text-[#E67E22] ${
                  pathname === l.href ? "text-[#E67E22]" : "text-white/80"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="tel:08105240202" className="flex items-center gap-1.5 text-white/60 text-xs hover:text-[#E67E22] transition-colors">
              <Phone size={13} /> 0810 524 0202
            </a>
            <Link href="/order" className="btn-fire text-sm py-2.5 px-5">
              Order Now 🔥
            </Link>
          </div>

          {/* Mobile */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white p-1"
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden bg-[#1C1C1C] overflow-hidden transition-all duration-300 ${open ? "max-h-screen" : "max-h-0"}`}>
        <nav className="px-6 py-5 flex flex-col gap-4 border-t border-white/10">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`font-body text-sm font-semibold ${pathname === l.href ? "text-[#E67E22]" : "text-white/80"}`}
            >
              {l.label}
            </Link>
          ))}
          <a href="tel:08105240202" className="font-body text-sm text-white/50 flex items-center gap-2 mt-2">
            <Phone size={14} /> 0810 524 0202
          </a>
        </nav>
      </div>
    </header>
  );
}
