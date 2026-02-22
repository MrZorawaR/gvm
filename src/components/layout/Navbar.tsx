import { useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../../data/navigation";

export default function Navbar() {
  const [show, setShow] = useState(false);

  return (
    <>
      {/* Hamburger button */}
      <button
        onClick={() => setShow(true)}
        className="fixed top-[2%] left-[2%] z-3 border-none rounded-[10px] w-12 h-12 opacity-80 text-2xl flex items-center justify-center cursor-pointer"
        style={{ backgroundColor: "var(--color-accent-text)" }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
        </svg>
      </button>

      {/* Backdrop */}
      {show && (
        <div
          className="fixed inset-0 bg-black/50 z-998"
          onClick={() => setShow(false)}
        />
      )}

      {/* Offcanvas drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-75 z-999 transition-transform duration-300 ease-in-out ${
          show ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ backgroundColor: "var(--color-accent-bg)" }}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 text-accent-text">
          <h5 className="font-semibold text-lg m-0">Kualakubs World School</h5>
          <button
            className="text-accent-text text-2xl bg-transparent border-none cursor-pointer"
            onClick={() => setShow(false)}
          >
            ×
          </button>
        </div>

        {/* Nav links */}
        <nav className="px-6">
          <ul className="list-none p-0 m-0 space-y-1">
            {navLinks.map((item) => (
              <li key={item.to}>
                <Link
                  className="block py-2 text-accent-text no-underline hover:opacity-75 transition-opacity"
                  to={item.to}
                  onClick={() => setShow(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <hr className="border-accent-text mx-4 my-4" />

        {/* ERP Login */}
        <div className="px-6">
          <Link
            to="https://eflow.kualakubsgurugram.in/"
            target="_blank"
            className="inline-block border border-accent-text text-accent-text px-4 py-2 no-underline hover:bg-accent-text hover:text-accent-bg transition-colors duration-300"
            onClick={() => setShow(false)}
          >
            ERP LOGIN →
          </Link>
        </div>

        {/* Social Icons */}
        <div className="mt-10 px-6 flex gap-4">
          {["facebook", "twitter", "instagram", "linkedin"].map((social) => (
            <a key={social} href="#" className="text-accent-text text-xl hover:opacity-75 transition-opacity">
              <SocialIcon name={social} />
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

function SocialIcon({ name }: { name: string }) {
  const icons: Record<string, React.ReactNode> = {
    facebook: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0 0 3.603 0 8.05 0 12.069 2.925 15.41 6.75 16v-5.625h-2v-2.326h2V6.293c0-2.004 1.196-3.107 3.02-3.107.875 0 1.79.157 1.79.157v1.968h-1.01c-.993 0-1.3.617-1.3 1.25v1.488h2.218l-.354 2.326H10.25V16c3.824-.59 6.75-3.93 6.75-7.951"/>
      </svg>
    ),
    twitter: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15"/>
      </svg>
    ),
    instagram: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034.992-.042 2.438-.042zM8 3.892a4.108 4.108 0 1 0 0 8.216 4.108 4.108 0 0 0 0-8.216m0 6.775a2.667 2.667 0 1 1 0-5.334 2.667 2.667 0 0 1 0 5.334m5.23-6.937a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92"/>
      </svg>
    ),
    linkedin: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
      </svg>
    ),
  };
  return icons[name] || null;
}
