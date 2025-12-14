// components/About.jsx
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import image from "../assets/creater-cutout.png";

const stats = [
  { value: "2+ Years", label: "Influencing Digital Landscapes Together" },
  { value: "100+ Projects", label: "Excellence Achieved Through Success" },
  { value: "20+ Appreciations", label: "Our dedication earns trust" },
  { value: "99% Happy Clients", label: "Focused on client satisfaction" },
];

export default function About() {
  const reduceMotion = useReducedMotion();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: reduceMotion ? 0 : 0.08 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="about"
      className="relative py-24 overflow-hidden bg-gradient-to-r from-[#030712] via-[#050b1a] to-[#0a1a4a]"
    >
      {/* background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_10%_40%,rgba(9,13,26,0.15),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_90%_60%,rgba(30,70,200,0.25),transparent)]" />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid lg:grid-cols-2 grid-cols-1 xl:gap-16 gap-10 items-center"
        >
          {/* LEFT — Content */}
          <div className="w-full flex flex-col items-start gap-10 text-left">
            <motion.div variants={fadeUp} className="flex flex-col gap-4">
              <h6 className="text-indigo-400 text-base font-medium uppercase tracking-wide">
                About Us
              </h6>
              <h2 className="text-white text-4xl sm:text-5xl font-semibold leading-tight">
                Hey, I’m <span className="text-sky-400">Bharath</span>
              </h2>
              <p className="text-gray-300 text-base leading-relaxed">
                I’m the creator behind{" "}
                <span className="font-medium text-indigo-300">
                  the.creatormaya
                </span>
                , focused on creating engaging short-form content and visual
                stories. My passion lies in transforming simple ideas into
                creative digital experiences that connect with audiences.
              </p>
            </motion.div>

            {/* STATS */}
            <div className="w-full flex flex-col gap-6">
              <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
                {stats.slice(0, 2).map((s, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    whileHover={{ y: -4, scale: 1.03 }}
                    className="p-4 bg-[#0a1029]/60 border border-indigo-800 rounded-xl backdrop-blur-md shadow-[0_0_25px_rgba(80,120,255,0.1)] transition-all duration-300"
                  >
                    <h4 className="text-white text-2xl font-bold mb-1">
                      {s.value}
                    </h4>
                    <p className="text-gray-300 text-sm">{s.label}</p>
                  </motion.div>
                ))}
              </div>

              <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
                {stats.slice(2).map((s, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    whileHover={{ y: -4, scale: 1.03 }}
                    className="p-4 bg-[#0a1029]/60 border border-indigo-800 rounded-xl backdrop-blur-md shadow-[0_0_25px_rgba(80,120,255,0.1)] transition-all duration-300"
                  >
                    <h4 className="text-white text-2xl font-bold mb-1">
                      {s.value}
                    </h4>
                    <p className="text-gray-300 text-sm">{s.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <motion.button
              variants={fadeUp}
              whileHover={{ scale: 1.05 }}
              className="mt-4 px-6 py-2 bg-white/10 text-white border border-indigo-500 rounded-lg shadow-[0_0_15px_rgba(80,120,255,0.3)] hover:bg-indigo-600 hover:shadow-[0_0_25px_rgba(80,120,255,0.5)] transition-all"
            >
              Read More
            </motion.button>
          </div>

       {/* RIGHT — HERO IMAGE (ENHANCED STAGE LIGHTING) */}
<motion.div
  variants={fadeUp}
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.4 }}
  transition={{ duration: 0.9, ease: "easeOut" }}
  className="
    relative w-full flex justify-center lg:justify-end
    mt-12 md:-mt-16 lg:-mt-20
    z-10
  "
>
  {/* 🟦 VERTICAL BACKPLATE (STRUCTURE) */}
  <div
    className="
      pointer-events-none
      absolute -z-10
      right-1/2 translate-x-1/2 lg:right-28 lg:translate-x-0
      top-12
      h-[72%] w-[260px] md:w-[320px]
      rounded-[2.5rem]
      bg-gradient-to-b from-indigo-500/15 via-sky-500/15 to-transparent
      blur-xl
    "
  />

  {/* ⚡ DIAGONAL LIGHT SPLASH — PRIMARY */}
  <div
    className="
      pointer-events-none
      absolute -z-10
      right-1/4 translate-x-1/2 lg:right-36 lg:translate-x-0
      top-12
      h-[70%] w-[6px]
      rotate-12
      bg-gradient-to-b from-sky-400/50 via-sky-400/10 to-transparent
      blur-sm
    "
  />

  {/* ⚡ DIAGONAL LIGHT SPLASH — SOFT FILL */}
  <div
    className="
      pointer-events-none
      absolute -z-10
      right-1/2 translate-x-1/2 lg:right-44 lg:translate-x-0
      top-20
      h-[60%] w-[14px]
      rotate-12
      bg-gradient-to-b from-indigo-400/25 to-transparent
      blur-lg
    "
  />

  {/* ✨ SIDE-ONLY RIM GLOW (NO TOP/BOTTOM) */}
  <div
    className="
      pointer-events-none
      absolute right-0 inset-y-12
      w-16
      bg-gradient-to-l from-sky-400/25 to-transparent
    "
  />

  {/* IMAGE */}
  <img
    src={image}
    alt="Creator cutout"
    draggable={false}
    className="
      h-[320px] sm:h-[380px] md:h-[500px] lg:h-[580px]
      object-contain
      drop-shadow-[0_45px_95px_rgba(0,0,0,0.75)]
      relative z-10
    "
  />
</motion.div>


        </motion.div>
      </div>
    </section>
  );
}
