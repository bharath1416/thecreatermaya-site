// src/components/TestimonialsContactEpicEqual.jsx
import React from "react";
import { motion } from "framer-motion";
import { Mail, MessageSquare, Instagram, Copy } from "lucide-react";

const testimonials = [
  {
    text: "Bharath literally transformed my content! His edits helped me grow 3x in 2 months.",
    author: "Ravi",
  },
  {
    text: "I sent raw clips. He sent back magic. Fast, creative, and professional.",
    author: "Anjali",
  },
  {
    text: "Transitions, pacing, and sound design were perfect — looked like a trailer!",
    author: "Prasanth",
  },
];

export default function TestimonialsContactEpicEqual() {
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("bussiness.bharathvar@gmail.com");
      alert("Email copied!");
    } catch {
      // fallback
    }
  };

  return (
    <section
      id="testimonials-contact"
      className="relative py-28 bg-gradient-to-r from-[#030712] via-[#050b1a] to-[#0a1a4a] overflow-hidden"
    >
      {/* breathing backdrop lights */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-28 left-1/2 -translate-x-1/2 h-[40rem] w-[70rem] bg-gradient-to-r from-sky-500/12 via-indigo-500/12 to-sky-500/12 blur-[140px]" />
        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full blur-3xl bg-sky-500/15" />
        <div className="absolute top-0 right-0 h-80 w-80 rounded-full blur-3xl bg-indigo-500/15" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10">
        {/* ===== Testimonials ===== */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          id="testimonials"
          className="mb-16 text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-semibold text-white">
            What <span className="text-sky-400">Clients Say</span>
          </h2>
          <p className="mt-3 text-indigo-100/85 max-w-2xl mx-auto">
            Real words from creators and brands who partnered with{" "}
            <span className="text-sky-300">the.creatormaya</span>.
          </p>
        </motion.div>

        {/* Equal-height testimonial grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-stretch"
          style={{ gridAutoRows: "1fr" }} // <-- makes all cards equal height
        >
          {testimonials.map((t, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              whileHover={{ y: -6 }}
              className="relative h-full rounded-2xl border border-white/10 bg-white/10 backdrop-blur-md p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
            >
              {/* static gradient frame */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl p-[1px] [mask:linear-gradient(#000,#000)_content-box,linear-gradient(#000,#000)] [mask-composite:exclude] bg-gradient-to-br from-sky-400/25 via-indigo-400/10 to-transparent" />
              {/* card content */}
              <div className="relative z-10 h-full flex flex-col">
                <p className="text-indigo-50/90 italic leading-relaxed">
                  “{t.text}”
                </p>
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[12px] text-indigo-200/80">
                    Verified feedback
                  </span>
                  <strong className="text-white font-medium">– {t.author}</strong>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* ===== Contact (new design) ===== */}
        <motion.div
          id="contact"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="mt-20 relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg p-8 md:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.4)] overflow-hidden"
        >
          {/* soft aura behind content */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-sky-500/10 via-indigo-500/10 to-sky-500/10 opacity-40 blur-2xl" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
            {/* Left intro */}
            <div className="lg:col-span-2">
              <h3 className="text-3xl sm:text-4xl font-semibold text-white">
                🚀 Let’s Create Something <span className="text-sky-400">Epic</span>
              </h3>
              <p className="mt-3 text-indigo-100/85">
                Whether you’re a creator, startup, or brand — if you want content
                that turns heads and stops thumbs, I’m ready to help make it happen.
              </p>

              {/* trust badges */}
              <div className="mt-5 flex flex-wrap gap-2 text-[11px] text-indigo-200/85">
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                  48h avg. turnaround
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                  NDA available
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                  Creator-first revisions
                </span>
              </div>
            </div>

            {/* Right dock of contact tiles */}
            <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Email tile */}
              <a
                href="mailto:bussiness.bharathvar@gmail.com"
                className="group relative rounded-2xl border border-white/10 bg-white/10 backdrop-blur-md p-5 hover:bg-white/15 transition"
              >
                <div className="pointer-events-none absolute inset-0 rounded-2xl p-[1px] [mask:linear-gradient(#000,#000)_content-box,linear-gradient(#000,#000)] [mask-composite:exclude] bg-gradient-to-br from-sky-400/25 via-indigo-400/10 to-transparent" />
                <div className="relative z-10 flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center gap-2 text-white">
                      <Mail size={18} />
                      <span className="font-medium">Email</span>
                    </div>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        copyEmail();
                      }}
                      title="Copy email"
                      className="text-indigo-200/80 hover:text-white transition"
                    >
                      <Copy size={16} />
                    </button>
                  </div>
                  <div className="text-sm truncate text-indigo-200/90">
                    bussiness.bharathvar@gmail.com
                  </div>
                  <div className="mt-2 text-[11px] text-indigo-300/80">
                    Expect reply in ~24h
                  </div>
                </div>
              </a>

              {/* WhatsApp tile */}
              <a
                href="https://wa.me/9441619854"
                target="_blank"
                className="group relative rounded-2xl border border-white/10 bg-white/10 backdrop-blur-md p-5 hover:bg-white/15 transition"
              >
                <div className="pointer-events-none absolute inset-0 rounded-2xl p-[1px] [mask:linear-gradient(#000,#000)_content-box,linear-gradient(#000,#000)] [mask-composite:exclude] bg-gradient-to-br from-emerald-400/25 via-indigo-400/10 to-transparent" />
                <div className="relative z-10 flex flex-col gap-3">
                  <div className="inline-flex items-center gap-2 text-white">
                    <MessageSquare size={18} />
                    <span className="font-medium">WhatsApp</span>
                  </div>
                  <div className="text-sm text-indigo-200/90">+91 94416 19854</div>
                  <div className="mt-2 text-[11px] text-indigo-300/80">
                    Quick chat • Project scope
                  </div>
                </div>
              </a>

              {/* Instagram tile */}
              <a
                href="https://instagram.com/the.creatormaya"
                target="_blank"
                className="group relative rounded-2xl border border-white/10 bg-white/10 backdrop-blur-md p-5 hover:bg-white/15 transition"
              >
                <div className="pointer-events-none absolute inset-0 rounded-2xl p-[1px] [mask:linear-gradient(#000,#000)_content-box,linear-gradient(#000,#000)] [mask-composite:exclude] bg-gradient-to-br from-fuchsia-400/25 via-indigo-400/10 to-transparent" />
                <div className="relative z-10 flex flex-col gap-3">
                  <div className="inline-flex items-center gap-2 text-white">
                    <Instagram size={18} />
                    <span className="font-medium">Instagram</span>
                  </div>
                  <div className="text-sm text-indigo-200/90">@the.creatormaya</div>
                  <div className="mt-2 text-[11px] text-indigo-300/80">
                    DM for reels & collabs
                  </div>
                </div>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
