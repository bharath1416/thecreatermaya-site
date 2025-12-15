// src/components/FooterCinematic.jsx
import React from "react";
import { Mail, Instagram, MessageSquare, ArrowUpRight } from "lucide-react";

export default function FooterCinematic() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="
        relative overflow-hidden
        bg-gradient-to-r from-[#030712] via-[#050b1a] to-[#0a1a4a]
        border-t border-white/10
      "
      aria-label="Site footer"
    >
      {/* soft grid texture */}
      <div className="pointer-events-none absolute inset-0 opacity-15 [background-image:radial-gradient(rgba(100,120,255,0.09)_1px,transparent_1px)] [background-size:22px_22px]" />

      {/* subtle glows */}
      <div className="pointer-events-none absolute -top-20 -left-28 h-72 w-72 rounded-full bg-sky-500/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-28 h-80 w-80 rounded-full bg-indigo-500/15 blur-3xl" />

      {/* content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-14">
        {/* top row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* brand */}
          <div className="md:col-span-2">
            <a
              href="#"
              className="inline-flex items-center gap-3 group"
              aria-label="the.creatormaya home"
            >
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-sky-500 to-indigo-600 shadow-[0_10px_30px_rgba(46,137,255,0.35)]" />
              <div className="text-left">
                <div className="text-white font-semibold text-lg leading-none">
                  the.<span className="text-sky-400">creatormaya</span>
                </div>
                <div className="text-[12px] text-indigo-200/80">
                  Visuals that stop the scroll
                </div>
              </div>
            </a>

            <p className="mt-4 text-indigo-100/85 max-w-lg">
              Short-form that looks cinematic. Strategy that converts. Editing that
              feels like magic—delivered fast and consistently.
            </p>

            {/* mini badges */}
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

          {/* links */}
          <nav className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-white/95 font-semibold text-sm mb-3">
                Quick Links
              </h4>
              <ul className="space-y-2 text-indigo-100/85 text-sm">
                {[
                  ["Home", "#"],
                  ["About", "#about"],
                  ["Services", "#services"],
                  ["Portfolio", "#portfolio"],
                  ["Packages", "#packages"],
                  ["Testimonials", "#testimonials"],
                  ["Contact", "#contact"],
                ].map(([label, href]) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="hover:text-white transition inline-flex items-center gap-1"
                    >
                      {label}
                      <ArrowUpRight size={14} className="opacity-60" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white/95 font-semibold text-sm mb-3">
                Services
              </h4>
              <ul className="space-y-2 text-indigo-100/85 text-sm">
                {[
                  "Reel/Short Editing",
                  "Motion Text & SFX",
                  "Color Grading",
                  "Thumbnails & Carousels",
                  "Content Calendar",
                  "Personal Branding",
                ].map((s) => (
                  <li key={s} className="hover:text-white transition">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          {/* contact / social */}
          <div>
            <h4 className="text-white/95 font-semibold text-sm mb-3">
              Let’s talk
            </h4>
            <div className="space-y-3 text-sm">
              <a
                href="mailto:business.bharathvarma@gmail.com"
                className="flex items-center gap-2 text-indigo-100/90 hover:text-white transition"
              >
                <Mail size={16} />
                business.bharathvarma@gmail.com
              </a>
              <a
                href="https://wa.me/9441619854"
                target="_blank"
                className="flex items-center gap-2 text-indigo-100/90 hover:text-white transition"
              >
                <MessageSquare size={16} />
                +91 94416 19854
              </a>
              <a
                href="https://instagram.com/the.creatormaya"
                target="_blank"
                className="flex items-center gap-2 text-indigo-100/90 hover:text-white transition"
              >
                <Instagram size={16} />
                @the.creatormaya
              </a>
            </div>

            {/* small CTA */}
            <a
              href="https://wa.me/9441619854"
              target="_blank"
              className="
                mt-5 inline-flex items-center justify-center w-full rounded-xl px-4 py-2.5 text-sm font-medium
                bg-gradient-to-r from-sky-500 to-indigo-500 text-white
                shadow-[0_10px_30px_rgba(46,137,255,0.35)]
                hover:shadow-[0_16px_40px_rgba(46,137,255,0.45)]
                transition
              "
            >
              Start a project
            </a>
          </div>
        </div>

        {/* separator */}
        <div className="mt-12 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />

        {/* bottom bar */}
        <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-[12px] text-indigo-200/75">
          <div>
            © {year} the.creatormaya — All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white transition">
              Terms
            </a>
            <span className="opacity-40">•</span>
            <a href="#" className="hover:text-white transition">
              Privacy
            </a>
            <span className="opacity-40">•</span>
            <a href="#contact" className="hover:text-white transition">
              Support
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
