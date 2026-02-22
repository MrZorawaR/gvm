import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import PopUpimg from "../../assets/images/kbws_popup.png";

export default function HomePopup() {
  const [show, setShow] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/" && location.pathname !== "/new-home") return;
    const timer = setTimeout(() => setShow(true), 600);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/60 z-1055 flex items-center justify-center">
      <div className="relative bg-white p-3.5 rounded-[10px] w-[90%] max-w-100 shadow-2xl max-sm:max-w-87.5">
        <img
          src={PopUpimg}
          alt="Popup"
          className="w-full max-w-87.5 max-sm:max-w-70 h-auto block mx-auto object-contain rounded-lg"
        />

        <div className="flex justify-end mt-3 gap-2">
          <button
            className="px-3 py-1 text-sm border border-gray-400 rounded bg-white text-gray-600 hover:bg-gray-100 cursor-pointer"
            onClick={() => setShow(false)}
          >
            Close
          </button>
          <Link
            to="/admissions"
            onClick={() => setShow(false)}
            className="px-3 py-1 text-sm bg-blue-600 text-white rounded no-underline hover:bg-blue-700"
          >
            Enquire Now
          </Link>
        </div>
      </div>
    </div>
  );
}
