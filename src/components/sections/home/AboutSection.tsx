import { Link } from "react-router-dom";
import aboutlogo from "../../../assets/images/logo_rbg.png";

export default function AboutSection() {
  return (
    <div
      className="relative flex flex-col justify-center items-center text-center p-4 mb-0"
      style={{ background: "var(--color-accent-bg)", minHeight: "500px" }}
    >
      {/* Watermark logo */}
      <img
        src={aboutlogo}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-15 max-w-[80%] h-auto z-1"
        alt=""
      />

      {/* About text */}
      <p className="z-2 text-accent-text w-[80%] max-w-175 mx-auto my-4 text-center text-[1.1rem] leading-relaxed tracking-wide">
        Welcome to Kualakubs World School, a CBSE formal school committed to
        building strong academic foundations, essential life skills, and a
        future-ready mindset in every child. With a blend of modern pedagogy,
        global teaching standards, and a safe, nurturing environment, Kualakubs
        empowers learners from Playgroup to Grade 12 to excel academically and
        grow holistically.
      </p>

      <Link
        to="/about"
        className="block z-2 no-underline text-accent-text text-lg"
      >
        Read More {"\u2192"}
      </Link>
    </div>
  );
}
