import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function NotFound() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-accent-bg">
      {/* Animated gradient orbs */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full blur-[150px] opacity-20 transition-transform duration-[2000ms] ease-out"
        style={{
          background: "radial-gradient(circle, #e2dccc 0%, transparent 70%)",
          top: "10%",
          left: "15%",
          transform: `translate(${mousePos.x * 30}px, ${mousePos.y * 30}px)`,
        }}
        aria-hidden="true"
      />
      <div
        className="absolute w-[400px] h-[400px] rounded-full blur-[120px] opacity-15 transition-transform duration-[2500ms] ease-out"
        style={{
          background: "radial-gradient(circle, #e2dccc 0%, transparent 70%)",
          bottom: "5%",
          right: "10%",
          transform: `translate(${mousePos.x * -20}px, ${mousePos.y * -20}px)`,
        }}
        aria-hidden="true"
      />
      <div
        className="absolute w-[300px] h-[300px] rounded-full blur-[100px] opacity-10 transition-transform duration-[3000ms] ease-out"
        style={{
          background: "radial-gradient(circle, #a8c0d8 0%, transparent 70%)",
          top: "50%",
          right: "30%",
          transform: `translate(${mousePos.x * 15}px, ${mousePos.y * 15}px)`,
        }}
        aria-hidden="true"
      />

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-accent-text/20"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `float-particle ${4 + Math.random() * 6}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s`,
          }}
          aria-hidden="true"
        />
      ))}

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(226, 220, 204, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(226, 220, 204, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      />

      {/* Main content */}
      <div
        className={`relative z-10 flex flex-col items-center text-center px-6 transition-all duration-1000 ease-out ${
          mounted
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
      >
        {/* Glitch-style 404 */}
        <div className="relative mb-2">
          <h1
            className="text-[10rem] sm:text-[14rem] md:text-[18rem] font-black leading-none tracking-tighter select-none"
            style={{
              color: "transparent",
              WebkitTextStroke: "2px rgba(226, 220, 204, 0.15)",
            }}
          >
            404
          </h1>

          {/* Filled overlay with clip animation */}
          <h1
            className="absolute inset-0 text-[10rem] sm:text-[14rem] md:text-[18rem] font-black leading-none tracking-tighter select-none text-accent-text/10"
            style={{
              animation: "text-reveal 3s ease-in-out infinite alternate",
            }}
          >
            404
          </h1>

          {/* Accent line through the number */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-px w-full max-w-md"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, #e2dccc 50%, transparent 100%)",
              opacity: 0.4,
            }}
            aria-hidden="true"
          />
        </div>

        {/* Text content */}
        <div
          className={`transition-all duration-1000 delay-300 ease-out ${
            mounted
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
        >
          <div className="flex items-center gap-3 justify-center mb-4">
            <span className="inline-block w-8 h-px bg-accent-text/30" />
            <span className="uppercase tracking-[0.3em] text-[0.65rem] font-semibold text-accent-text/50">
              Page Not Found
            </span>
            <span className="inline-block w-8 h-px bg-accent-text/30" />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent-text mb-4 tracking-tight">
            Lost in the Hallways
          </h2>

          <p className="text-accent-text/50 text-base sm:text-lg max-w-md mx-auto mb-10 leading-relaxed font-light">
            It seems the page you were looking for has moved to a different classroom. Let's get you back on track.
          </p>
        </div>

        {/* Buttons */}
        <div
          className={`flex flex-col sm:flex-row items-center gap-4 transition-all duration-1000 delay-500 ease-out ${
            mounted
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
        >
          <Link
            to="/"
            className="group relative px-8 py-4 bg-accent-text text-accent-bg font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(226,220,204,0.25)] hover:-translate-y-0.5 active:translate-y-0 no-underline"
          >
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-15 transition-opacity duration-300" />
            <div className="relative flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform duration-300"
              >
                <path
                  fillRule="evenodd"
                  d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="tracking-wide">Back to Home</span>
            </div>
          </Link>
        </div>
      </div>

      {/* Bottom decorative bar */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-text/20 to-transparent" />

      {/* Corner accents */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l border-t border-accent-text/10 rounded-tl-lg" aria-hidden="true" />
      <div className="absolute top-8 right-8 w-16 h-16 border-r border-t border-accent-text/10 rounded-tr-lg" aria-hidden="true" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l border-b border-accent-text/10 rounded-bl-lg" aria-hidden="true" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r border-b border-accent-text/10 rounded-br-lg" aria-hidden="true" />

      {/* Inline keyframe styles */}
      <style>{`
        @keyframes float-particle {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.2; }
          25% { transform: translateY(-20px) translateX(10px); opacity: 0.5; }
          50% { transform: translateY(-10px) translateX(-5px); opacity: 0.3; }
          75% { transform: translateY(-30px) translateX(15px); opacity: 0.6; }
        }
        @keyframes text-reveal {
          0% { clip-path: inset(0 100% 0 0); opacity: 0.08; }
          50% { clip-path: inset(0 0 0 0); opacity: 0.12; }
          100% { clip-path: inset(0 0 0 100%); opacity: 0.08; }
        }
      `}</style>
    </div>
  );
}
