// components/HeroSection.jsx
import React, { useEffect, useRef, useState } from "react";


const sources = [
  // Put tiny, looping showreel clips here (8–12s). Smallest first.
  // { src: "/reel/reel.webm", type: "video/webm" },
  { src: "/reel/reel.mp4", type: "video/mp4" },
];

export default function HeroSection() {
  // Cursor-driven shine for “maya”
  const [pos, setPos] = useState({ x: 50, y: 50 });

  // Timeline-scrub refs/state
  const videoRef = useRef(null);
  const wrapRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [progress, setProgress] = useState(0); // 0–1
  const rafRef = useRef(null);

  useEffect(() => {
    const move = (e) => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const xPercent = Math.min(Math.max((e.clientX / width) * 100, 0), 100);
      const yPercent = Math.min(Math.max((e.clientY / height) * 100, 0), 100);
      setPos({ x: xPercent, y: yPercent });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  // Update progress smoothly while playing
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const tick = () => {
      if (!v.duration) return (rafRef.current = requestAnimationFrame(tick));
      setProgress(v.currentTime / v.duration);
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  // Scrub on hover/move inside wrapper
  const handlePointerMove = (e) => {
    const v = videoRef.current;
    const el = wrapRef.current;
    if (!v || !el || !v.duration) return;
    const rect = el.getBoundingClientRect();
    const x = Math.min(Math.max(e.clientX - rect.left, 0), rect.width);
    const pct = x / rect.width;
    v.currentTime = pct * v.duration;
    setProgress(pct);
  };

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) v.play().catch(() => {});
    else v.pause();
  };

  const scrollToPro = () => {
    const el = document.getElementById("portfolio-reels");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    else window.location.hash = "#portfolio-reels";
  };

  const handleNavClick = (e, href) => {
    if (e && e.preventDefault) e.preventDefault();
    if (!href || href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const id = href.replace(/^#/, "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    else window.location.hash = href;
  };

  const onEnter = () => {
    setIsHovering(true);
    const v = videoRef.current;
    if (v && v.paused) v.play().catch(() => {});
  };
  const onLeave = () => {
    setIsHovering(false);
    const v = videoRef.current;
    if (!v) return;
    // keep playing but don’t hijack position on leave
  };

  return (
    <div className="relative overflow-hidden pt-48 pb-12 xl:pt-60 sm:pb-16 lg:pb-32 xl:pb-48 2xl:pb-56 bg-[#030712]">
      {/* Deep navy background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050814] via-[#0a0f2c] to-[#030712]" />
      <div
        className="pointer-events-none absolute -top-1/3 -left-1/4 h-[120vh] w-[120vw]
        opacity-40 blur-3xl mix-blend-screen
        bg-[conic-gradient(from_180deg_at_50%_50%,rgba(43,96,222,0.35),rgba(2,6,23,0),rgba(72,149,239,0.25),rgba(2,6,23,0),rgba(43,96,222,0.35))]
        motion-safe:animate-[spin_30s_linear_infinite]"
      />
      <div
        className="pointer-events-none absolute -bottom-1/3 -right-1/4 h-[120vh] w-[120vw]
        opacity-30 blur-3xl mix-blend-screen
        bg-[conic-gradient(from_0deg_at_50%_50%,rgba(32,78,210,0.3),rgba(2,6,23,0),rgba(72,149,239,0.25),rgba(2,6,23,0),rgba(32,78,210,0.3))]
        motion-safe:animate-[spin_40s_linear_infinite_reverse]"
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_400px_at_50%_120%,rgba(0,0,0,0.75),transparent)]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-40
        [background-image:radial-gradient(rgba(100,120,255,0.08)_1px,transparent_1px)]
        [background-size:24px_24px]
        [mask-image:radial-gradient(circle_at_center,black,transparent_72%)]"
      />

      {/* Header */}
      <header className="absolute inset-x-0 top-0 z-10 py-8 xl:py-12">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          <a
            href="#"
            className="inline-flex rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-4 focus:ring-offset-[#0b1130]"
          >
            <img
              className="h-14 w-auto drop-shadow-[0_0_12px_rgba(60,100,255,0.4)]"
              src="/Cm1.png"
              alt="Logo"
            />
          </a>

          <nav className="hidden md:flex md:items-center md:space-x-10 lg:ml-28">
            {[
              { label: "Home", href: "#" },
              { label: "About", href: "#about" },
              { label: "Services", href: "#services" },
              { label: "Portfolio", href: "#portfolio-reels" },
              { label: "Packages", href: "#packages" },
            ].map((nav) => (
              <a
                key={nav.label}
                href={nav.href}
                onClick={(e) => handleNavClick(e, nav.href)}
                className="text-md text-slate-300/80 hover:text-white transition-all hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
              >
                {nav.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="ml-4 inline-flex items-center justify-center rounded-full border border-indigo-400/70 bg-white/5 px-8 py-2 text-sm text-slate-100 backdrop-blur-sm shadow-[0_0_10px_rgba(100,120,255,0.3)] hover:bg-white hover:text-black transition"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-10">
          {/* Left copy */}
          <div className="lg:col-span-6 w-full">
            <p className="font-sans text-base tracking-tight text-slate-300/70">
              Grow a step further{" "}
              <span className="font-serif italic text-indigo-300 drop-shadow-[0_0_8px_rgba(80,120,255,0.3)]">
                Visually
              </span>
            </p>

            <h1 className="mt-6 tracking-tight">
              <span className="block font-sans text-6xl sm:text-7xl font-semibold text-white drop-shadow-[0_0_20px_rgba(100,120,255,0.25)]">
                the.Creater
              </span>

              {/* Gradient “maya” with cursor shine */}
              <span
                className="relative block font-serif italic text-7xl sm:text-8xl font-normal text-transparent bg-clip-text select-none transition-all duration-200 ease-out"
                style={{
                  backgroundImage: `
                    linear-gradient(to right, #6366f1, #38bdf8, #4f46e5),
                    radial-gradient(
                      circle at ${pos.x}% ${pos.y}%,
                      rgba(255,255,255,1) 0%,
                      rgba(56,189,248,0.9) 8%,
                      rgba(79,70,229,0.7) 18%,
                      rgba(56,189,248,0.5) 30%,
                      transparent 45%
                    )
                  `,
                  backgroundBlendMode: "screen",
                  WebkitBackgroundClip: "text",
                  backgroundSize: "100% 100%",
                }}
              >
                maya
              </span>
            </h1>

            <p className="mt-8 max-w-xl font-sans text-base leading-7 text-slate-300/85">
              🎬 Helping creators & startups grow with viral visual content. Let’s
              turn your brand into a scroll-stopper.
            </p>

            {/* CTAs */}
            <div className="mt-10 rounded-2xl border border-indigo-400/20 bg-white/5 p-5 backdrop-blur-md shadow-[0_0_40px_rgba(40,80,255,0.2)]">
              <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                <span className="rounded-full bg-indigo-600/10 px-4 py-1.5 text-sm text-indigo-200 shadow-[inset_0_0_10px_rgba(90,140,255,0.25)]">
                  Starting at 2,400/month
                </span>

                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full border border-indigo-400/60 bg-transparent px-5 py-2 text-sm font-medium text-slate-100 transition hover:bg-white hover:text-black hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]"
                >
                  Get work done
                </a>

                <button
                  onClick={scrollToPro}
                  className="inline-flex items-center justify-center rounded-full border border-indigo-400/60 bg-transparent px-5 py-2 text-sm font-medium text-slate-100 transition hover:bg-white hover:text-black hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]"
                >
                  <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.0416 4.9192C7.37507 4.51928 6.5271 4.99939 6.5271 5.77669V18.2232c0 .7773.84797 1.2574 1.5145.8575l10.3721-6.2233c.6473-.3884.6473-1.3266 0-1.715L8.0416 4.9192Z"
                    />
                  </svg>
                  Watch our work
                </button>
              </div>
            </div>

            <p className="mt-3 text-sm text-slate-400/80">
              Trusted by founders and teams who want results without the fluff.
            </p>
          </div>

          {/* Right: Timeline-scrub showreel */}
          <div className="lg:col-span-6">
            <div
              ref={wrapRef}
              onPointerEnter={onEnter}
              onPointerLeave={onLeave}
              onPointerMove={handlePointerMove}
              onClick={togglePlay}
              role="button"
              aria-label="Showreel. Move mouse to scrub, click to play/pause."
              className="
                relative aspect-[16/9] w-full overflow-hidden rounded-2xl
                border border-indigo-400/20 bg-white/5 backdrop-blur-md
                shadow-[0_0_40px_rgba(40,80,255,0.18)]
                ring-0 ring-transparent transition
                hover:ring-2 hover:ring-indigo-500/30
                cursor-none select-none
              "
            >
              {/* Video */}
              <video
                ref={videoRef}
                className="h-full w-full object-cover"
                playsInline
                muted
                loop
                preload="metadata"
                // Autoplay can be blocked on some devices; we start on hover/click too.
                autoPlay
                poster="/reel/reel-poster.jpg"
              >
                {sources.map((s) => (
                  <source key={s.src} src={s.src} type={s.type} />
                ))}
              </video>

              {/* Top-left label */}
              <div className="pointer-events-none absolute left-3 top-3 rounded-full border border-sky-400/30 bg-sky-400/10 px-2 py-0.5 text-[11px] tracking-wide text-sky-200">
                Showreel
              </div>

              {/* Progress rail */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1.5 bg-white/5">
                <div
                  className="h-full bg-gradient-to-r from-sky-400 to-indigo-500 transition-[width] duration-100"
                  style={{ width: `${Math.max(0, Math.min(progress, 1)) * 100}%` }}
                />
              </div>

              {/* Hover scrub hint */}
              <div
                className={`pointer-events-none absolute inset-x-0 bottom-5 mx-auto w-max rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-white/90 backdrop-blur-sm transition-opacity ${
                  isHovering ? "opacity-100" : "opacity-0"
                }`}
              >
                Move to scrub • Click to play/pause
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#050814] to-transparent" />
    </div>
  );
}
