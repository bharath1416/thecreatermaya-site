// src/components/PackagesPremiumCardsBreathing.jsx
import React from "react";
import { motion, useReducedMotion } from "framer-motion";

/* ===== WHATSAPP CONFIG ===== */
const WHATSAPP_NUMBER = "9441619854"; // e.g. 919876543210

const plans = [
  {
    key: "starter",
    emoji: "🔹",
    name: "Starter Reels Package",
    blurb: "Best for getting started with consistent reels.",
    price: "₹2,999 / month",
    tag: "Getting Started",
    features: [
      "10 Reels / Month (9:16)",
      "Basic Editing",
      "Trending Music",
      "10 Bonus Thumbnails",
    ],
  },
  {
    key: "growth",
    emoji: "🔹",
    name: "Growth Reels Package",
    blurb: "For smoother edits and better visual quality.",
    price: "₹4,999 / month",
    tag: "Popular Choice",
    features: [
      "10 Reels / Month (9:16)",
      "Smooth Transitions",
      "Color Correction",
      "Basic Effects",
      "10 Bonus Thumbnails",
      "Captions",
      "B-Roll Integration"
    ],
  },
  {
    key: "pro",
    emoji: "⭐",
    name: "Pro Reels Package",
    blurb: "Designed for creators aiming for high-quality output.",
    price: "₹8,999 / month",
    tag: "Best Value",
    featured: true,
    features: [
      "10 Reels / Month (9:16)",
      "Cinematic Editing",
      "Motion Text & Effects",
      "Professional Color Grading",
      "10 Bonus Thumbnails",
      "Priority Delivery",
      "Captions",
      "B-Roll Integration"
    ],
  },
  {
    key: "premium",
    emoji: "👑",
    name: "Premium Reels Package",
    blurb: "Maximum performance, speed, and creative support.",
    price: "₹11,999 / month",
    tag: "Maximum Impact",
    features: [
      "10 Reels / Month (9:16)",
      "Motion Graphics & 3D Animations",
      "Premium Storytelling Editing",
      "Advanced Effects & SFX",
      "High-Retention Hooks",
      "10 Bonus Thumbnails",
      "Unlimited Revisions",
      "Fastest Delivery",
      "Content Strategy Support",
      "Captions"
    ],
  },
];

export default function PackagesPremiumCardsBreathing() {
  const reduce = useReducedMotion();

  /* ===== WhatsApp Message Builder ===== */
  const getWhatsAppLink = (plan) => {
    const message = `
Hi Bharath,

I'm interested in the *${plan.name}*.

 Plan: ${plan.name}
 Price: ${plan.price}

Please let me know the next steps to get started.
    `.trim();

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;
  };

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: reduce ? 0 : 0.08 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: reduce ? 0 : 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="packages"
      aria-label="Packages"
      className="relative py-24 sm:py-28 bg-gradient-to-r from-[#030712] via-[#050b1a] to-[#0a1a4a] overflow-hidden"
    >
      {/* Subtle premium texture */}
      <div className="pointer-events-none absolute inset-0 opacity-15 [background-image:radial-gradient(rgba(100,120,255,0.10)_1px,transparent_1px)] [background-size:22px_22px]" />

      {/* Soft breathing glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-96 w-[60rem] rounded-full bg-gradient-to-r from-sky-500/10 via-indigo-500/10 to-sky-500/10 blur-3xl motion-safe:animate-breathe-medium" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        {/* HEADER */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs uppercase tracking-wide text-indigo-200"
          >
            <span className="h-2 w-2 rounded-full bg-sky-400" />
            Packages
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="mt-4 text-white text-4xl sm:text-5xl font-semibold"
          >
            Choose Your <span className="text-sky-400">Creator Plan</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-4 text-indigo-100/85 max-w-2xl mx-auto"
          >
            Clear deliverables. Cinematic quality. Built to grow your brand.
          </motion.p>
        </motion.div>

        {/* CARDS GRID */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 items-stretch"
        >
          {plans.map((p) => (
            <motion.article
              key={p.key}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              className={[
                "relative flex flex-col rounded-2xl p-7 backdrop-blur-md transition-all duration-300",
                "bg-white/10 border border-white/10",
                "shadow-[0_20px_60px_rgba(0,0,0,0.35)]",
                p.featured
                  ? "ring-2 ring-sky-400/50 shadow-[0_0_60px_rgba(56,189,248,0.45)] scale-[1.03]"
                  : "",
              ].join(" ")}
            >
              {/* Header row */}
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-2 text-sm text-indigo-100">
                  <span className="text-lg">{p.emoji}</span>
                  {p.name}
                </span>
                <span
                  className={[
                    "text-[11px] rounded-full px-2.5 py-0.5 border tracking-wide",
                    p.featured
                      ? "border-emerald-400/40 bg-emerald-400/10 text-emerald-200"
                      : "border-sky-400/30 bg-sky-400/10 text-sky-200",
                  ].join(" ")}
                >
                  {p.tag}
                </span>
              </div>

              <p className="text-sm text-indigo-100/85 mb-4">
                {p.blurb}
              </p>

              <ul className="space-y-2.5 text-sm text-indigo-50 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-sky-400" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 text-2xl font-semibold text-white">
                {p.price}
              </div>

              {/* CTA → WHATSAPP */}
              <a
                href={getWhatsAppLink(p)}
                target="_blank"
                rel="noopener noreferrer"
                className={[
                  "mt-4 inline-flex items-center justify-center w-full rounded-xl px-5 py-2.5 text-sm font-medium transition",
                  p.featured
                    ? "bg-gradient-to-r from-sky-500 to-indigo-500 text-white shadow-[0_10px_30px_rgba(46,137,255,0.35)] hover:shadow-[0_16px_40px_rgba(46,137,255,0.45)]"
                    : "border border-indigo-400/60 bg-white/5 text-indigo-50 hover:bg-white/10",
                ].join(" ")}
              >
                Get Started on WhatsApp
              </a>
            </motion.article>
          ))}
        </motion.div>

        {/* Trust strip */}
        <div className="mt-14 text-center">
          <p className="text-sm text-indigo-100/80">
            Transparent pricing • No hidden costs • Built for serious creators
          </p>
        </div>
      </div>

      {/* Breathing animation */}
      <style>{`
        @keyframes breathe-medium {
          0% { transform: scale(1); opacity: 0.35; }
          50% { transform: scale(1.08); opacity: 0.55; }
          100% { transform: scale(1); opacity: 0.35; }
        }
        .animate-breathe-medium {
          animation: breathe-medium 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
