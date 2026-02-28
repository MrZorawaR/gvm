import { Link } from "react-router-dom";
import slide1 from "../../../assets/images/1.webp";
import HeaderLogo from "../../../assets/images/gvmps-logo.png";

interface HeaderLink {
  pathname: string;
  path: string;
}

export default function HeroSection({ headerlinks = [] }: { headerlinks?: HeaderLink[] }) {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Full-screen background image */}
      <img
        src={slide1}
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Overlay navigation panel — top-right */}
      <div className="absolute z-999 top-[1%] right-[2%] w-[10%] max-md:w-[25%] max-sm:w-[40%] text-white">
        <div className="pe-2">
          {/* Logo bar */}
          <div className="mb-1 flex justify-center items-center bg-accent-text">
            <Link to="/">
              <img
                src={HeaderLogo}
                alt="Header Logo"
                className="mt-4 md:mt-3 mb-4 md:mb-3 px-3 h-auto"
              />
            </Link>
          </div>

          {/* Dynamic navigation links */}
          {headerlinks.map((section, index) => (
            <Link
              key={index}
              to={section?.path || "#"}
              className="no-underline text-inherit p-0"
              onClick={(e) => {
                const path = section?.path || "";
                if (path.includes('#')) {
                  const hash = path.split('#')[1];
                  if (hash) {
                    e.preventDefault();
                    const el = document.getElementById(hash);
                    if (el) {
                      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                    window.history.pushState(null, '', path);
                  }
                }
              }}
            >
              <div className="overlay-row mb-1 p-2 flex justify-between items-center">
                <span className="overlay-link text-sm">
                  {section?.pathname || "Disabled"}
                </span>
                <span className="overlay-link">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
                    <path fillRule="evenodd" d="M4.646 11.354a.5.5 0 0 1 0-.708L10.293 5H6.5a.5.5 0 0 1 0-1h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V5.707l-5.646 5.647a.5.5 0 0 1-.708 0"/>
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Hero heading — centered */}
      <div className="absolute z-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center max-md:top-[65%] max-sm:top-[70%]">
        <h4 className="text-white text-[28px] max-md:text-xl max-sm:text-lg font-['Playfair_Display'] italic m-0">
          <i>Welcome to</i>
        </h4>
        <h1 className="text-white font-['Montserrat'] font-extrabold text-[60px] max-md:text-3xl max-sm:text-2xl m-0">
          Geeta Vidya Mandir Public School
        </h1>
        <a
          href="#about-us"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("about-us")?.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
          className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white text-gray-800 mt-3"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16" style={{ animation: "updown-arrow 3s ease-in-out infinite" }}>
            <path fillRule="evenodd" d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
            <path fillRule="evenodd" d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
          </svg>
        </a>
      </div>

      {/* Bottom strip */}
      <div
        className="absolute bottom-0 z-2 h-12.5 w-[40%] max-md:w-full max-md:h-7.5 flex justify-center items-center bg-accent-bg/85"
        style={{ clipPath: "polygon(0 0, 95% 0, 100% 100%, 0% 100%)" }}
      >
        <a href="/co-education" className="no-underline text-accent-text text-lg max-md:text-sm my-2 mx-2">
          Co-Education and Pre-Prep from 2026 &#8594;
        </a>
      </div>
    </div>
  );
}
