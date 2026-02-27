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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert("Enquiry submitted successfully!");
  };

  return (
    <div
      className="relative flex justify-center items-center p-6 md:p-12 lg:p-16"
      style={{ background: "var(--color-accent-bg)", minHeight: "500px" }}
    >
      {/* Watermark logo */}
      <img
        src={"/gvmps-logo-white.webp"}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 max-w-[80%] md:max-w-[50%] h-auto z-1 pointer-events-none"
        alt=""
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-accent-bg/80 z-2 pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: About Text */}
        <div className="flex flex-col text-left lg:col-span-8">
          <h2 className="text-3xl md:text-4xl font-bold text-accent-text mb-6">
            About GVMPS
          </h2>
          
          {/* Desktop: full text */}
          <div className="hidden md:block text-accent-text/90 text-[1.1rem] leading-relaxed tracking-wide space-y-4 text-justify">
            <p>{aboutText[0]}</p>
            <p>{aboutText[1]}</p>
          </div>

          {/* Mobile: collapsible */}
          <div className="md:hidden w-full">
            <div
              ref={contentRef}
              className="relative overflow-hidden transition-[max-height] duration-500 ease-in-out"
              style={{ maxHeight: maxH }}
            >
              <div className="text-accent-text/90 text-[1.05rem] leading-relaxed tracking-wide space-y-4 text-justify">
                <p>{aboutText[0]}</p>
                <p>{aboutText[1]}</p>
              </div>

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
              className="mt-4 text-sm font-semibold border-none bg-transparent cursor-pointer flex items-center gap-1.5 text-accent-text/80 hover:text-accent-text transition-colors duration-200"
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

        {/* Right Column: Admission Enquiry Form */}
        <div className="w-full max-w-md mx-auto lg:mx-0 lg:ml-auto lg:col-span-4">
          <div className="relative group">
            {/* Subtle background glow */}
            
            
            <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-2xl overflow-hidden">
              {/* Decorative top highlight */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-white/50 to-transparent" />
              
              <div className="mb-8 text-center">
                <h3 className="text-3xl font-bold text-accent-text mb-2 tracking-tight">
                  Admission Enquiry
                </h3>
                <p className="text-accent-text/70 text-sm font-medium">
                  Take the first step towards excellence
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Student Name */}
                <div className="relative group/input">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-accent-text/50 group-focus-within/input:text-accent-text transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                      <path d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="studentName"
                    placeholder="Student Name"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl pl-11 pr-4 py-3.5 text-accent-text placeholder:text-accent-text/40 focus:outline-none focus:ring-2 focus:ring-white/30 focus:bg-white/10 transition-all duration-300 peer"
                  />
                  <div className="absolute inset-0 rounded-xl border border-white/0 peer-focus:border-white/20 pointer-events-none transition-colors duration-300" />
                </div>
                
                {/* Parent Name */}
                <div className="relative group/input">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-accent-text/50 group-focus-within/input:text-accent-text transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-5.5-2.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM10 12a5.99 5.99 0 00-4.793 2.39A6.483 6.483 0 0010 16.5a6.483 6.483 0 004.793-2.11A5.99 5.99 0 0010 12z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="parentName"
                    placeholder="Parent Name"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl pl-11 pr-4 py-3.5 text-accent-text placeholder:text-accent-text/40 focus:outline-none focus:ring-2 focus:ring-white/30 focus:bg-white/10 transition-all duration-300 peer"
                  />
                  <div className="absolute inset-0 rounded-xl border border-white/0 peer-focus:border-white/20 pointer-events-none transition-colors duration-300" />
                </div>

                {/* Phone Number */}
                <div className="relative group/input">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-accent-text/50 group-focus-within/input:text-accent-text transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                      <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="Phone Number"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl pl-11 pr-4 py-3.5 text-accent-text placeholder:text-accent-text/40 focus:outline-none focus:ring-2 focus:ring-white/30 focus:bg-white/10 transition-all duration-300 peer"
                  />
                  <div className="absolute inset-0 rounded-xl border border-white/0 peer-focus:border-white/20 pointer-events-none transition-colors duration-300" />
                </div>

                <div className="relative group/input">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-accent-text/50 group-focus-within/input:text-accent-text transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                      <path d="M3 4a2 2 0 00-2 2v8a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2H3zm1.06 2.59a.75.75 0 011.06-.02L10 10.84l4.88-4.27a.75.75 0 111.04 1.08l-5.4 4.72a.75.75 0 01-1.04 0l-5.4-4.72a.75.75 0 01-.02-1.06z" />
                    </svg>
                  </div>
                  <input
                    type="email"
                    id="email"
                    placeholder="Email Address"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl pl-11 pr-4 py-3.5 text-accent-text placeholder:text-accent-text/40 focus:outline-none focus:ring-2 focus:ring-white/30 focus:bg-white/10 transition-all duration-300 peer"
                  />
                  <div className="absolute inset-0 rounded-xl border border-white/0 peer-focus:border-white/20 pointer-events-none transition-colors duration-300" />
                </div>

                {/* Class Applied For */}
                <div className="relative group/input">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-accent-text/50 group-focus-within/input:text-accent-text transition-colors duration-300 z-10">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                      <path d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2h-5L9 2H4z" />
                    </svg>
                  </div>
                  <select
                    id="class"
                    required
                    defaultValue=""
                    className="w-full bg-white/5 border border-white/10 rounded-xl pl-11 pr-10 py-3.5 text-accent-text focus:outline-none focus:ring-2 focus:ring-white/30 focus:bg-white/10 transition-all duration-300 appearance-none peer cursor-pointer invalid:text-accent-text/40"
                    style={{ colorScheme: "dark" }}
                  >
                    <option value="" disabled className="bg-gray-800 text-gray-400">Select Class</option>
                    <option value="pre-nursery" className="bg-gray-800 text-white">Pre-Nursery</option>
                    <option value="nursery" className="bg-gray-800 text-white">Nursery</option>
                    <option value="kg" className="bg-gray-800 text-white">KG</option>
                    <option value="1" className="bg-gray-800 text-white">Class 1</option>
                    <option value="2" className="bg-gray-800 text-white">Class 2</option>
                    <option value="3" className="bg-gray-800 text-white">Class 3</option>
                    <option value="4" className="bg-gray-800 text-white">Class 4</option>
                    <option value="5" className="bg-gray-800 text-white">Class 5</option>
                    <option value="6" className="bg-gray-800 text-white">Class 6</option>
                    <option value="7" className="bg-gray-800 text-white">Class 7</option>
                    <option value="8" className="bg-gray-800 text-white">Class 8</option>
                    <option value="9" className="bg-gray-800 text-white">Class 9</option>
                    <option value="10" className="bg-gray-800 text-white">Class 10</option>
                    <option value="11" className="bg-gray-800 text-white">Class 11</option>
                    <option value="12" className="bg-gray-800 text-white">Class 12</option>
                  </select>
                  {/* Custom dropdown arrow */}
                  <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-accent-text/50 peer-focus:text-accent-text transition-colors duration-300">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="absolute inset-0 rounded-xl border border-white/0 peer-focus:border-white/20 pointer-events-none transition-colors duration-300" />
                </div>

                <button
                  type="submit"
                  className="relative w-full bg-accent-text text-accent-bg font-bold rounded-xl px-4 py-4 mt-4 overflow-hidden group/btn transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:-translate-y-0.5 active:translate-y-0"
                >
                  {/* Button hover effect background */}
                  <div className="absolute inset-0 bg-white opacity-0 group-hover/btn:opacity-10 transition-opacity duration-300" />
                  
                  <div className="relative flex justify-center items-center gap-2">
                    <span className="tracking-wide text-[1.05rem]">Submit Enquiry</span>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 20 20" 
                      fill="currentColor" 
                      className="w-5 h-5 transform group-hover/btn:translate-x-1.5 transition-transform duration-300"
                    >
                      <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                    </svg>
                  </div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

