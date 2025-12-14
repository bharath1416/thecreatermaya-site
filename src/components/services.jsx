// components/ServicesGraphysicPro.jsx
import React, { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

const services = [
  {
    title: "Video Editing",
    desc:
      "Reels, Shorts, Promos — professionally edited with trends, effects, and sound sync.",
    bullets: ["Beat-matched cuts", "Motion text & SFX", "Color styling"],
    tag: "Creator Pack",
  },
  {
    title: "Graphic Design",
    desc:
      "Eye-catching carousels, thumbnails, and story designs for Instagram & YouTube.",
    bullets: ["Templates & systems", "Thumbnail A/B", "Export presets"],
    tag: "Studio Ready",
  },
  {
    title: "Strategy & Growth",
    desc:
      "Monthly plans, captions, hooks, and trend mapping — everything to boost your online game.",
    bullets: ["Content calendar", "Hook library", "KPI review"],
    tag: "Growth Suite",
  },
  {
    title: "Personal Branding",
    desc:
      "Build your creator identity with color palette, logo design, and brand storytelling.",
    bullets: ["Palette & logo", "Voice & tone", "Brand rules"],
    tag: "Identity Core",
  },
];

function PhysicsCard({ children }) {
  const ref = useRef(null);

  const dx = useMotionValue(0);
  const dy = useMotionValue(0);

  const sdx = useSpring(dx, { stiffness: 240, damping: 20, mass: 0.25 });
  const sdy = useSpring(dy, { stiffness: 240, damping: 20, mass: 0.25 });

  const tiltX = useTransform(sdy, [-40, 40], [10, -10]);
  const tiltY = useTransform(sdx, [-40, 40], [-10, 10]);

  const layerX = useTransform(sdx, [-40, 40], [-6, 6]);
  const layerY = useTransform(sdy, [-40, 40], [-6, 6]);

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    dx.set((e.clientX - r.left - r.width / 2) / 3);
    dy.set((e.clientY - r.top - r.height / 2) / 3);
  };

  const onLeave = () => {
    dx.set(0);
    dy.set(0);
  };

  return (
    <motion.article
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{
        rotateX: tiltX,
        rotateY: tiltY,
        transformStyle: "preserve-3d",
      }}
      whileHover={{ scale: 1.02 }}
      className="
        group relative h-full
        rounded-2xl border border-indigo-800/70
        bg-[#0b102a]/60 backdrop-blur-md
        shadow-[0_0_30px_rgba(80,120,255,0.12)]
        transition-all
        p-6 flex flex-col
      "
    >
      {/* gradient border shimmer */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl [mask:linear-gradient(#fff,#fff)_content-box,linear-gradient(#fff,#fff)] [mask-composite:exclude] p-[1px] bg-gradient-to-br from-sky-400/30 via-indigo-500/20 to-transparent" />

      {/* top shine */}
      <div className="pointer-events-none absolute -inset-px rounded-2xl [mask-image:linear-gradient(to_bottom,white,transparent)] bg-gradient-to-b from-white/10 to-transparent" />

      {/* animated rails */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
        <span className="absolute -left-24 top-27 h-[2px] w-[320px] bg-gradient-to-r from-transparent via-sky-300/60 to-transparent animate-[rail_3.6s_linear_infinite]" />
        <span className="absolute -right-24 bottom-1/3 h-[2px] w-[320px] bg-gradient-to-r from-transparent via-indigo-300/60 to-transparent animate-[rail_4.1s_linear_infinite]" />
      </div>

      {/* parallax icon layer */}
      <motion.div
        style={{ x: layerX, y: layerY, transform: "translateZ(36px)" }}
        className="mb-1"
        aria-hidden="true"
      >
        <div className="inline-flex items-center justify-center h-10 w-10 rounded-xl bg-white/5 border border-white/10 shadow-[0_0_12px_rgba(56,189,248,0.25)]">
          <span className="text-2xl select-none">🪄</span>
        </div>
      </motion.div>

      {/* content */}
      <div className="mt-1 flex flex-col gap-2 flex-1">{children}</div>

      {/* hover ring */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-0 ring-indigo-500/0 transition-all duration-300 group-hover:ring-2 group-hover:ring-indigo-500/40" />

      {/* cursor spark */}
      <motion.span
        style={{ x: sdx, y: sdy }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-8 w-8 rounded-full bg-sky-300/10 blur-[10px]"
      />
    </motion.article>
  );
}

export default function ServicesGraphysicPro() {
  const reduceMotion = useReducedMotion();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: reduceMotion ? 0 : 0.08 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section
      id="services"
      aria-label="Services"
      className="relative py-28 overflow-hidden bg-gradient-to-r from-[#030712] via-[#050b1a] to-[#0a1a4a]"
    >
      {/* dynamic background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-25 [background-image:radial-gradient(rgba(99,102,241,0.18)_1px,transparent_1px)] [background-size:22px_22px] animate-[drift_22s_linear_infinite]" />
        <svg className="absolute inset-0 h-full w-full opacity-25" preserveAspectRatio="none">
          <defs>
            <linearGradient id="wire" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="rgba(92, 198, 243, 0)" />
              <stop offset="50%" stopColor="rgba(99,102,241,0.55)" />
              <stop offset="100%" stopColor="rgba(56,189,248,0)" />
            </linearGradient>
          </defs>
          <path d="M5,30 C25,10 75,50 95,30" stroke="url(#wire)" strokeWidth="1.6" fill="none">
            <animate attributeName="opacity" values="0.15;0.4;0.15" dur="7s" repeatCount="indefinite" />
          </path>
          <path d="M10,70 C35,45 65,95 90,70" stroke="url(#wire)" strokeWidth="1.4" fill="none">
            <animate attributeName="opacity" values="0.12;0.32;0.12" dur="6s" repeatCount="indefinite" />
          </path>
          <path d="M0,50 C20,40 80,60 100,50" stroke="url(#wire)" strokeWidth="1.2" fill="none">
            <animate attributeName="opacity" values="0.1;0.28;0.1" dur="5.5s" repeatCount="indefinite" />
          </path>
        </svg>
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col gap-12"
        >
          {/* header */}
          <motion.div variants={fadeUp} className="text-center space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-700/60 bg-white/5 px-3 py-1 text-xs tracking-wide uppercase text-indigo-300">
              <span className="h-2 w-2 rounded-full bg-sky-400/80 shadow-[0_0_12px_rgba(56,189,248,0.8)]" />
              Services
            </span>
            <h2 className="text-white text-4xl sm:text-5xl font-semibold leading-tight">
              What We <span className="text-sky-400">Deliver</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              A focused set of offerings for creators and brands that want results.
            </p>
          </motion.div>

          {/* grid */}
          <div
            className="
              grid gap-6 md:gap-8
              grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
              items-stretch
            "
          >
            {services.map((s) => (
              <motion.div key={s.title} variants={fadeUp} className="h-full">
                <PhysicsCard>
                  {/* body */}
                  <h3 className="text-white text-xl font-semibold mt-2">{s.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{s.desc}</p>

                  <div className="my-3 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                  <ul className="space-y-1.5 text-gray-300/90 text-sm flex-1">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <span className="mt-[3px] inline-block h-1.5 w-1.5 rounded-full bg-sky-400/80 shadow-[0_0_8px_rgba(56,189,248,0.6)]" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  {/* footer */}
                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-[11px] tracking-wide text-sky-200/80 border border-sky-400/30 bg-sky-400/10 px-2 py-0.5 rounded-full">
                      {s.tag}
                    </span>
                    <a
                      href="#contact"
                      className="text-[12px] underline underline-offset-4 text-indigo-200 hover:text-white"
                    >
                      Details
                    </a>
                  </div>
                </PhysicsCard>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* keyframes */}
      <style jsx>{`
        @keyframes drift {
          0% { background-position: 0px 0px; }
          100% { background-position: 220px 140px; }
        }
        @keyframes rail {
          0% { transform: translateX(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateX(600px); opacity: 0; }
        }
      `}</style>
    </section>
  );
}
