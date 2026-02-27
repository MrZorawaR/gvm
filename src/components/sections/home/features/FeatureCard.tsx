import { useState } from "react";
import type { Feature } from "../../../../data/featuresData";

export default function FeatureCard({ feature }: { feature: Feature }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer select-none ring-1 ring-accent-text/15 hover:ring-accent-text/30 transition-all duration-300"
      onClick={() => setOpen((o) => !o)}
    >
      {/* Image */}
      <img
        src={feature.image}
        alt={feature.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* Permanent dark gradient at the bottom for title */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, rgba(10,20,35,0.95) 0%, rgba(25,45,69,0.55) 40%, transparent 100%)",
        }}
      />

      {/* Title + icon — always visible at bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-5 z-10 flex items-end justify-between">
        <h3 className="text-accent-text text-lg font-bold leading-snug m-0">
          {feature.title}
        </h3>
        {/* Toggle arrow — rotates when open */}
        <span
          className={`text-accent-text/70 transition-transform duration-300 shrink-0 ml-2 ${
            open ? "rotate-180" : ""
          } md:opacity-0 md:group-hover:opacity-100`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 15.75 7.5-7.5 7.5 7.5"
            />
          </svg>
        </span>
      </div>

      {/* Description overlay — hover on md+, click on mobile */}
      <div
        className={`absolute inset-0 flex items-center justify-center p-6 text-center transition-opacity duration-300 z-20
          ${open ? "opacity-100" : "opacity-0 pointer-events-none"}
          md:opacity-0 md:group-hover:opacity-100 md:pointer-events-auto`}
        style={{ background: "rgba(25,45,69,0.88)" }}
      >
        <p className="text-accent-text/90 text-sm leading-relaxed max-w-90 m-0">
          {feature.description}
        </p>
      </div>
    </div>
  );
}
