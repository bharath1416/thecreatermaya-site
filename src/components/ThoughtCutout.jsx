// components/ThoughtCutout.jsx
import React, { useState } from "react";
import image from '../assets/creater-cutout.png';

/**
 * A standalone, transparent PNG cutout that "stands" with a base shadow,
 * has a subtle 3D hover tilt, and a soft top "push" glow.
 */
export default function ThoughtCutout({
  src = {
    image
  },
  alt = "Cutout",
  heightClass = "h-[560px]",
}) {
  const [t, setT] = useState({ rx: 0, ry: 0, gx: 50, gy: 50 });

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    const rx = -py * 6;  // gentle tilt up/down
    const ry = px * 8;   // gentle tilt left/right
    const gx = ((e.clientX - r.left) / r.width) * 100;
    const gy = ((e.clientY - r.top) / r.height) * 100;
    setT({ rx, ry, gx, gy });
  };

  const onLeave = () => setT({ rx: 0, ry: 0, gx: 50, gy: 50 });

  return (
    <div className="relative flex items-end [perspective:1200px]">
      {/* “Stand” base */}
      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 h-8 w-[80%] rounded-full blur-xl opacity-60 bg-black/50" />

      {/* Cutout wrapper */}
      <div
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className={`
          relative ${heightClass} w-auto select-none
          [transform-style:preserve-3d] will-change-transform
          transition-transform duration-200
          drop-shadow-[0_25px_45px_rgba(40,80,255,0.28)]
        `}
        style={{ transform: `rotateX(${t.rx}deg) rotateY(${t.ry}deg)` }}
      >
        {/* Top “push” glow so it looks like it’s entering from above */}
        <div className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 h-16 w-[75%] rounded-full blur-3xl opacity-40 bg-gradient-to-b from-sky-400/20 to-transparent" />

        {/* The transparent PNG itself */}
        <img
          src={src}
          alt={alt}
          className="h-full w-auto object-contain"
          loading="lazy"
          style={{ transform: "translateZ(30px)" }}
        />

        {/* Cursor-tracked soft glare */}
        <div
          className="pointer-events-none absolute inset-0 mix-blend-screen"
          style={{
            backgroundImage: `radial-gradient(120px 140px at ${t.gx}% ${t.gy}%,
              rgba(255,255,255,0.18) 0%,
              rgba(99,102,241,0.18) 25%,
              rgba(56,189,248,0.14) 45%,
              transparent 60%)`,
          }}
        />
      </div>
    </div>
  );
}
