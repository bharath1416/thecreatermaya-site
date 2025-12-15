// components/PortfolioReelsPanorama.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";

/* ===== REELS JSON (thumbnail added only) ===== */
const reels = [
  {
    src: "/reels/reel1.mp4",
    type: "video/mp4",
    title: "Reel 1",
    thumbnail: "/images/reel1.jfif",
  },
  {
    src: "/reels/reel2.mp4",
    type: "video/mp4",
    title: "Reel 2",
    thumbnail: "/images/reel2.jfif",
  },
  {
    src: "/reels/reel3.mp4",
    type: "video/mp4",
    title: "Reel 3",
    thumbnail: "/images/reel3.jfif",
  },
  {
    src: "/reels/reel4.mp4",
    type: "video/mp4",
    title: "Reel 4",
    thumbnail: "/images/reel4.jfif",
  },
  {
    src: "/reels/reel5.mp4",
    type: "video/mp4",
    title: "Reel 5",
    thumbnail: "/images/reel5.jfif",
  }
];

function useDeck(n) {
  const [current, setCurrent] = useState(0);
  const next = () => setCurrent((c) => (c + 1) % n);
  const prev = () => setCurrent((c) => (c - 1 + n) % n);
  const to = (i) => setCurrent(((i % n) + n) % n);
  return { current, next, prev, to };
}

export default function PortfolioReelsPanorama() {
  const { current, next, prev, to } = useDeck(reels.length);
  const refs = useRef(reels.map(() => React.createRef()));

  /* ===== ORIGINAL PLAY LOGIC (UNCHANGED) ===== */
  useEffect(() => {
    refs.current.forEach((r, i) => {
      const v = r.current;
      if (!v) return;
      if (i === current) {
        if (v.currentTime >= (v.duration || 0) - 0.1) v.currentTime = 0;
        v.play().catch(() => {});
      } else {
        v.pause();
      }
    });
  }, [current]);

  /* ===== ORIGINAL ORDER LOGIC (UNCHANGED) ===== */
  const order = useMemo(() => {
  const total = reels.length;
  const arr = [];

  for (let i = 0; i < total; i++) {
    arr.push((current + i) % total);
  }

  return arr;
}, [current]);


  /* ===== ORIGINAL POSES (UNCHANGED) ===== */
const getPose = (pos) => {
  // pos = 0 is center
  if (pos === 0) {
    return {
      left: "50%",
      x: "-50%",
      scale: 1,
      rotate: 0,
      zIndex: 40,
      filter: "blur(0px)",
      boxShadow: "0 30px 80px rgba(56,189,248,0.25)",
    };
  }

  // Zig-zag distribution
  const sideIndex = Math.ceil(pos / 2);     // 1,1,2,2,3,3...
  const isRight = pos % 2 === 1;             // odd → right, even → left
  const direction = isRight ? 1 : -1;

  return {
    left: `calc(50% + ${direction * sideIndex * 18}%)`,
    x: "-50%",
    scale: Math.max(0.72, 1 - sideIndex * 0.08),
    rotate: direction * sideIndex * 4,
    zIndex: 40 - sideIndex * 5,
    filter: "blur(1px)",
    boxShadow: "0 18px 50px rgba(99,102,241,0.20)",
  };
};



  const onDragEnd = (_e, info) => {
    const dx = info.offset.x;
    if (dx > 60) prev();
    else if (dx < -60) next();
  };

  return (
    <section
      id="portfolio-reels"
      className="relative py-24 bg-gradient-to-r from-[#030712] via-[#050b1a] to-[#0a1a4a] overflow-hidden"
    >
      {/* backdrop */}
      <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:radial-gradient(rgba(100,120,255,0.08)_1px,transparent_1px)] [background-size:22px_22px]" />

      {/* HEADER (UNCHANGED) */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-700/60 bg-white/5 px-3 py-1 text-xs uppercase text-indigo-300">
            <span className="h-2 w-2 rounded-full bg-sky-400/80" />
            Portfolio
          </span>
          <h2 className="mt-3 text-white text-4xl sm:text-5xl font-semibold">
            My special <span className="text-sky-400">Works</span>
          </h2>
          <p className="mt-3 text-gray-300/90 max-w-2xl mx-auto">
            High-quality vertical video reels with curated thumbnails and cinematic flow, built for modern social platforms.
          </p>
        </div>
      </div>

      {/* FULL-BLEED RAIL (UNCHANGED) */}
      <div className="relative z-10 w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
        <div className="relative w-full px-6 md:px-10 xl:px-16 [--reel-h:68vh] md:[--reel-h:64vh] lg:[--reel-h:62vh] xl:[--reel-h:60vh]">

          {/* PREV / NEXT BUTTONS (RESTORED & UNCHANGED) */}
          <div className="pointer-events-none absolute inset-y-0 left-0 right-0 flex items-center justify-between z-40">
            <button
              onClick={prev}
              className="pointer-events-auto ml-4 md:ml-8 xl:ml-12 rounded-full border border-indigo-400/40 bg-white/5 px-3 py-2 text-sm text-indigo-100 hover:bg-white/10"
            >
              ← Prev
            </button>
            <button
              onClick={next}
              className="pointer-events-auto mr-4 md:mr-8 xl:mr-12 rounded-full border border-indigo-400/40 bg-white/5 px-3 py-2 text-sm text-indigo-100 hover:bg-white/10"
            >
              Next →
            </button>
          </div>

          {/* DECK */}
          <div className="relative h-[var(--reel-h)] [perspective:1600px]">
            <div className="pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]" />

            {order.map((idx, pos) => {
              const isCenter = pos === 0;

              return (
                <motion.div
                  key={idx}
                  drag={isCenter ? "x" : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  onDragEnd={onDragEnd}
                  initial={false}
                  animate={getPose(pos, order.length)}
                  transition={{ type: "spring", stiffness: 260, damping: 26 }}
                  className={`absolute top-1/2 -translate-y-1/2 rounded-[1.2rem] overflow-hidden
                    border border-indigo-400/25 bg-white/5 backdrop-blur-md
                    ${isCenter ? "cursor-grab active:cursor-grabbing" : "cursor-pointer"}`}
                  style={{
                    height: "var(--reel-h)",
                    width: "calc(var(--reel-h) * 9 / 16)",
                  }}
                  onClick={() => !isCenter && to(idx)}
                >
                  {/* VIDEO (UNCHANGED) */}
                  <video
                    ref={refs.current[idx]}
                    className="h-full w-full object-cover"
                    muted
                    playsInline
                    autoPlay={isCenter}
                    controls={isCenter}
                    onEnded={() => next()}
                    preload="metadata"
                  >
                    <source src={reels[idx].src} type={reels[idx].type} />
                  </video>

                  {/* ✅ THUMBNAIL OVERLAY (ONLY ADDITION) */}
                  {!isCenter && (
                    <div className="absolute inset-0 z-20">
                      <img
                        src={reels[idx].thumbnail}
                        alt={`${reels[idx].title} thumbnail`}
                        className="h-full w-full object-cover"
                        draggable={false}
                      />
                      <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="h-14 w-14 rounded-full bg-black/60 border border-white/30 flex items-center justify-center text-white text-xl">
                          ▶
                        </div>
                      </div>
                    </div>
                  )}

                  {/* FOOTER (UNCHANGED) */}
                  <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/40 to-transparent">
                    <div className="flex items-center justify-between">
                      <div className="text-white/90 text-sm">
                        {reels[idx].title}
                      </div>
                      {isCenter && (
                        <span className="text-[11px] text-sky-200/90 border border-sky-400/30 bg-sky-400/10 px-2 py-0.5 rounded-full">
                          You are Watching
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
