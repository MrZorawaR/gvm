import { useState, useRef, useEffect } from "react";

const aboutText = [
  "Welcome to Geeta Vidya Mandir Public School, Nimbri, Panipat — a place where learning begins with curiosity and grows into excellence. Every child is a natural learner with the desire to explore, discover, and share knowledge with the world around them. At our school, we believe education goes beyond textbooks; it nurtures creativity, values, confidence, and responsibility. With a vision to develop sensitive and responsible global citizens, the institution was established through the dedicated efforts and educational vision of Mr. S.P. Bansal and Mrs. Geeta Bansal, who aimed to create an environment that supports the holistic development of every child.",
  "Established in 1998, Geeta Vidya Mandir Public School has consistently delivered quality education while focusing on both academic excellence and character building. The campus offers a harmonious blend of modern infrastructure, well-planned architecture, and a serene learning environment that makes education engaging and enjoyable. Affiliated with the Central Board of Secondary Education (CBSE), the school provides comprehensive 10+2 schooling and is conveniently located near NHBC, Panipat and Nimbri on the Panipat–Haridwar Highway. At GVMPS, we strive to empower students with knowledge, skills, and values required to succeed in an ever-changing world.",
];

export default function AboutSection() {
  const [expanded, setExpanded] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [maxH, setMaxH] = useState("13em");

  useEffect(() => {
    if (expanded && contentRef.current) {
      setMaxH(`${contentRef.current.scrollHeight}px`);
    } else {
      setMaxH("9em");
    }
  }, [expanded]);

  return (
    <div
      className="relative flex flex-col justify-center items-center text-center p-4 mb-0"
      style={{ background: "var(--color-accent-bg)", minHeight: "500px" }}
    >
      {/* Watermark logo */}
      <img
        src={"/gvmps-logo-white.webp"}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-15 max-w-[80%] h-auto z-1"
        alt=""
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-accent-bg/80 z-2" />

      {/* Desktop: full text */}
      <p className="hidden md:block z-3 text-accent-text w-[80%] max-w-7xl mx-auto my-4 text-justify text-[1.1rem] leading-relaxed tracking-wide">
        {aboutText[0]}
        <br /><br />
        {aboutText[1]}
      </p>

      {/* Mobile: collapsible */}
      <div className="md:hidden z-3 w-[90%] max-w-7xl mx-auto my-4">
        <div
          ref={contentRef}
          className="relative overflow-hidden transition-[max-height] duration-500 ease-in-out"
          style={{ maxHeight: maxH }}
        >
          <p className="text-accent-text text-justify text-[1.05rem] leading-relaxed tracking-wide m-0">
            {aboutText[0]}
            <br /><br />
            {aboutText[1]}
          </p>

          {/* Fade when collapsed */}
          <div
            className={`absolute bottom-0 left-0 right-0 h-14 pointer-events-none transition-opacity duration-300 ${expanded ? "opacity-0" : "opacity-100"}`}
            style={{
              background: "linear-gradient(to top, var(--color-accent-bg) 0%, transparent 100%)",
            }}
          />
        </div>
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="mt-3 text-sm font-semibold border-none bg-transparent cursor-pointer flex items-center gap-1.5 mx-auto text-accent-text/80 hover:text-accent-text transition-colors duration-200"
        >
          {expanded ? "Read Less" : "Read More"}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className={`w-3.5 h-3.5 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </button>
      </div>

    </div>
  );
}
