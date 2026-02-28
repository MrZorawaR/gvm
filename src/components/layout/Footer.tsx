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

        {/* Minimalist Navigation */}
        <nav className="flex flex-wrap justify-center gap-x-8 md:gap-x-12 gap-y-4 mb-12">
          {[
            { name: 'Home', path: '/' },
            { name: 'About Us', path: '/#about-us' },
            { name: 'Admissions', path: '/#admissions' },
            { name: 'News & Events', path: '/#news' },
            { name: 'Contact', path: '/#contact' }
          ].map((item) => (
            <Link 
              key={item.name}
              to={item.path}
              className="text-accent-text/60 hover:text-accent-text text-sm font-medium tracking-widest transition-colors duration-300 uppercase"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Call to Action */}
        <div className="mb-12 flex justify-center">
          <DownloadFeeBtn />
        </div>

        {/* Bottom Bar */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/10">
          <p className="text-accent-text/40 text-xs tracking-wider text-center md:text-left">
            © {new Date().getFullYear()} GEETA VIDYA MANDIR PUBLIC SCHOOL. ALL RIGHTS RESERVED.
          </p>
          
          <div className="flex gap-6 text-xs tracking-wider text-accent-text/40">
            <Link to="#" className="hover:text-accent-text transition-colors duration-300 uppercase">Privacy Policy</Link>
            <Link to="#" className="hover:text-accent-text transition-colors duration-300 uppercase">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
