import { Link } from "react-router-dom";
import DownloadFeeBtn from "../ui/DownloadFeeBtn";

export default function Footer() {
  return (
    <footer className="w-full bg-accent-bg text-accent-text relative overflow-hidden">
      {/* Subtle gradient separator */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-white/50 to-transparent" />

      <div className="max-w-5xl mx-auto px-6 py-12 md:py-16 flex flex-col items-center">
        {/* Brand */}
        <Link to="/" className="mb-8 group">
          <img
            src="/gvmps-logo-white.webp"
            alt="GVMPS Logo"
            className="h-30 w-auto opacity-80 group-hover:opacity-100 transition-opacity duration-500"
          />
        </Link>

        {/* Call to Action */}
        <div className="mb-12 flex justify-center">
          <DownloadFeeBtn />
        </div>

        {/* Bottom Bar */}
        <div className="w-full flex flex-col justify-between items-center gap-4 pt-8 border-t border-white/10">
          <p className="text-accent-text/40 text-xs tracking-wider text-center md:text-left">
            © {new Date().getFullYear()} GEETA VIDYA MANDIR PUBLIC SCHOOL. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
}
