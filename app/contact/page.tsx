import type { Metadata } from "next";
import Image from "next/image";
import { Phone, MapPin, Clock, MessageCircle, Instagram, Facebook } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Iyadunni Chopz — call, WhatsApp, or visit us in Ajuwon, Ogun State.",
};

export default function ContactPage() {
  return (
    <>
      <section className="relative h-64 flex items-center justify-center overflow-hidden bg-[#1C1C1C] pt-20">
        <Image src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&q=80" alt="Contact" fill className="object-cover opacity-25" />
        <div className="absolute inset-0 bg-[#1C1C1C]/60" />
        <div className="relative z-10 text-center">
          <p className="font-body text-[10px] tracking-[0.35em] uppercase text-[#E67E22] mb-2">Get In Touch</p>
          <h1 className="font-accent text-5xl md:text-6xl text-white">Contact Us 📞</h1>
        </div>
      </section>

      <div className="h-1 bg-gradient-to-r from-[#C0392B] via-[#E67E22] to-[#C0392B]" />

      <section className="py-16 bg-[#FDF6EC]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {/* Call */}
            <a href="tel:08105240202" className="group bg-[#C0392B] p-8 text-white flex items-center gap-5 hover:bg-[#922B21] transition-colors">
              <Phone size={36} className="shrink-0" />
              <div>
                <p className="font-body text-xs tracking-wider uppercase text-white/60 mb-1">Call Us</p>
                <p className="font-display text-2xl font-bold">0810 524 0202</p>
                <p className="font-body text-sm text-white/70 mt-1">Available 9AM – 10PM daily</p>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/2348105240202"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#25D366] p-8 text-white flex items-center gap-5 hover:bg-[#128C7E] transition-colors"
            >
              <MessageCircle size={36} className="shrink-0" />
              <div>
                <p className="font-body text-xs tracking-wider uppercase text-white/70 mb-1">WhatsApp</p>
                <p className="font-display text-2xl font-bold">Chat with Us</p>
                <p className="font-body text-sm text-white/80 mt-1">Quick response guaranteed</p>
              </div>
            </a>
          </div>

          {/* Info cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
            {[
              {
                icon: <MapPin size={24} className="text-[#C0392B]" />,
                title: "Address",
                content: "1b Victory Street, off Onibudo Road, Ajuwon/Akute 112107, Ogun State",
              },
              {
                icon: <Clock size={24} className="text-[#C0392B]" />,
                title: "Opening Hours",
                content: "Monday – Sunday\n9:00 AM – 10:00 PM",
              },
              {
                icon: <MessageCircle size={24} className="text-[#C0392B]" />,
                title: "Social Media",
                content: "Follow us on Instagram & Facebook for updates and specials",
              },
            ].map((card, i) => (
              <div key={i} className="bg-white p-6">
                <div className="mb-4">{card.icon}</div>
                <p className="font-body text-xs tracking-wider uppercase text-[#1C1C1C]/40 mb-2">{card.title}</p>
                <p className="font-body text-sm text-[#1C1C1C]/70 leading-relaxed whitespace-pre-line">{card.content}</p>
              </div>
            ))}
          </div>

          {/* Map embed */}
          <div className="overflow-hidden h-72 mb-10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963!2d3.35!3d6.72!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sAjuwon%2C+Ogun+State!5e0!3m2!1sen!2sng!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Iyadunni Chopz Location"
            />
          </div>

          {/* Social */}
          <div className="bg-[#1C1C1C] p-8 text-center">
            <p className="font-body text-xs tracking-[0.25em] uppercase text-[#E67E22] mb-4">Follow Us</p>
            <p className="font-body text-sm text-white/50 mb-5">Stay updated with our daily specials and behind-the-scenes content</p>
            <div className="flex justify-center gap-4">
              {[
                { Icon: Instagram, label: "Instagram" },
                { Icon: Facebook, label: "Facebook" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  className="flex items-center gap-2 bg-white/10 hover:bg-[#C0392B] text-white text-sm font-body px-5 py-2.5 transition-colors"
                >
                  <Icon size={16} /> {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
