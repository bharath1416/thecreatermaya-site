// components/PortfolioStack.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const clips = [
  { src: "/videos/project1.mp4", type: "video/mp4", title: "Project 1" },
  { src: "/videos/project2.mp4", type: "video/mp4", title: "Project 2" },
  { src: "/videos/project3.mp4", type: "video/mp4", title: "Project 3" },
];

function useVideoDeck(n) {
  const [current, setCurrent] = useState(0);
  const next = () => setCurrent((c) => (c + 1) % n);
  const prev = () => setCurrent((c) => (c - 1 + n) % n);
  const to = (i) => setCurrent(((i % n) + n) % n);
  return { current, next, prev, to };
}

export default function PortfolioStack() {
  const { current, next, prev, to } = useVideoDeck(clips.length);
  const refs = useRef(clips.map(() => React.createRef()));

  // ensure only the center video plays
  useEffect(() => {
    refs.current.forEach((r, i) => {
      const v = r.current;
      if (!v) return;
      if (i === current) {
        // restart if at end; else just play
        if (v.currentTime >= v.duration - 0.1) v.currentTime = 0;
        v.play().catch(() => {});
      } else {
        v.pause();
      }
    });
  }, [current]);

  // keyboard support
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // layout helpers
  const order = useMemo(() => {
    // returns indices as [center, leftBack, rightBack]
    const left = (current + 1) % clips.length;
    const right = (current + 2) % clips.length;
    return [current, left, right];
  }, [current]);

  const variants = {
    center: {
      scale: 1,
      rotate: 0,
      x: 0,
      y: 0,
      zIndex: 30,
      filter: "blur(0px)",
      boxShadow: "0 20px 60px rgba(56, 189, 248, 0.25)",
    },
    leftBack: {
      scale: 0.86,
      rotate: -6,
      x: "-18%",
      y: "-4%",
      zIndex: 10,
      filter: "blur(1px)",
      boxShadow: "0 12px 40px rgba(99, 102, 241, 0.18)",
    },
    rightBack: {
      scale: 0.86,
      rotate: 6,
      x: "18%",
      y: "-4%",
      zIndex: 10,
      filter: "blur(1px)",
      boxShadow: "0 12px 40px rgba(99, 102, 241, 0.18)",
    },
  };

  return (
    <section
      id="portfolio"
      className="relative py-24 bg-gradient-to-r from-[#030712] via-[#050b1a] to-[#0a1a4a] overflow-hidden"
    >
      {/* backdrop texture */}
      <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:radial-gradient(rgba(100,120,255,0.08)_1px,transparent_1px)] [background-size:22px_22px]" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-700/60 bg-white/5 px-3 py-1 text-xs tracking-wide uppercase text-indigo-300">
            <span className="h-2 w-2 rounded-full bg-sky-400/80" />
            Portfolio
          </span>
          <h2 className="mt-3 text-white text-4xl sm:text-5xl font-semibold">
            Recent <span className="text-sky-400">Edits</span>
          </h2>
          <p className="mt-3 text-gray-300/90 max-w-2xl mx-auto">
            Three highlights. The center plays, the rest queue up behind it.
          </p>
        </div>

        {/* Deck */}
        <div className="relative mx-auto max-w-5xl">
          {/* Controls (desktop) */}
          <div className="hidden sm:flex justify-between mb-3 text-sm text-indigo-200">
            <button
              className="rounded-full cursor-pointer border border-indigo-400/40 px-3 py-1 hover:bg-white/10"
              onClick={prev}
            >
              ← Prev
            </button>
            <button
              className="rounded-full cursor-pointer border border-indigo-400/40 px-3 py-1 hover:bg-white/10"
              onClick={next}
            >
              Next →
            </button>
          </div>

          {/* Stack container */}
          <div className="relative aspect-[16/9] w-full">
            {/* We render all three, positioned absolutely, and animate between states */}
            {order.map((idx, pos) => {
              const role = pos === 0 ? "center" : pos === 1 ? "leftBack" : "rightBack";
              const isCenter = role === "center";
              return (
                <motion.div
                    key={idx}
                    initial={false}
                    animate={variants[role]}
                    transition={{ type: "spring", stiffness: 260, damping: 26 }}
                    className={`
                      absolute inset-0 rounded-2xl overflow-hidden
                      border border-indigo-400/20 bg-white/5 backdrop-blur-md
                      will-change-transform
                      ${isCenter ? "cursor-none" : "cursor-pointer"}
                    `}
                    onClick={() => !isCenter && to(idx)}
                    aria-label={isCenter ? "Playing video" : "Bring to front"}
                >
                  {/* subtle top shine */}
                  <div className="pointer-events-none absolute -inset-px rounded-2xl [mask-image:linear-gradient(to_bottom,white,transparent)] bg-gradient-to-b from-white/10 to-transparent" />

                  {/* Center video plays; back videos have slow vertical pan */}
                  <video
                    ref={refs.current[idx]}
                    className={`h-full w-full object-cover ${
                      isCenter ? "" : "animate-[pan_14s_linear_infinite] opacity-90"
                    }`}
                    muted
                    playsInline
                    // Center video autoplays; others paused via effect
                    autoPlay={isCenter}
                    controls={isCenter}
                    onEnded={() => next()}
                    preload="metadata"
                    poster={`/videos/poster${idx + 1}.jpg`}
                  >
                    <source src={clips[idx].src} type={clips[idx].type} />
                  </video>

                  {/* Footer bar */}
                  <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/40 to-transparent">
                    <div className="flex items-center justify-between">
                      <div className="text-white/90 text-sm">{clips[idx].title}</div>
                      {isCenter && (
                        <span className="text-[11px] text-sky-200/90 border border-sky-400/30 bg-sky-400/10 px-2 py-0.5 rounded-full">
                          Now Playing
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Dots */}
          <div className="mt-6 flex items-center justify-center gap-2">
            {clips.map((_, i) => (
              <button
                key={i}
                onClick={() => to(i)}
                className={`h-2.5 w-2.5 rounded-full transition-all ${
                  i === current ? "bg-sky-400" : "bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Go to video ${i + 1}`}
              />
            ))}
          </div>

          {/* CTA */}
          <p className="mt-10 text-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-indigo-400/70 bg-white/5 px-6 py-2 text-sm text-slate-100 backdrop-blur-sm shadow-[0_0_10px_rgba(100,120,255,0.3)] hover:bg-white hover:text-black transition"
            >
              ✨ Want results like these?
            </a>
          </p>
        </div>
      </div>

      {/* keyframes */}
      <style jsx>{`
        @keyframes pan {
          0% { object-position: 50% 45%; }
          50% { object-position: 50% 55%; }
          100% { object-position: 50% 45%; }
        }
      `}</style>
    </section>
  );
}
