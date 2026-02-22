import { useState } from "react";
import { Link } from "react-router-dom";

export default function SideCTA() {
  const [show, setShow] = useState(false);

  return (
    <>
      {/* Left vertical CTA buttons */}
      <div className="fixed flex flex-col gap-2 top-1/2 left-0 -translate-y-1/2 z-999">
        {/* Enquire Now */}
        <button
          onClick={() => setShow(true)}
          className="bg-green-600 text-white px-1 py-3 text-xs font-semibold cursor-pointer border-none"
          style={{
            borderRadius: "0 6px 6px 0",
            writingMode: "vertical-rl",
          }}
        >
          <span
            className="inline-block"
            style={{ transform: "rotate(180deg)", fontSize: "0.8rem", fontWeight: 600 }}
          >
            Enquire Now
          </span>
        </button>

        {/* Get in Touch */}
        <Link
          to="/contact"
          className="bg-blue-600 text-white px-1 py-3 text-xs font-semibold no-underline"
          style={{
            borderRadius: "0 6px 6px 0",
            writingMode: "vertical-rl",
          }}
        >
          <span
            className="inline-block"
            style={{ transform: "rotate(180deg)", fontSize: "0.8rem", fontWeight: 600 }}
          >
            Get in Touch
          </span>
        </Link>
      </div>

      {/* Enquiry Modal */}
      {show && (
        <>
          <div className="fixed inset-0 z-1050 flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-4">
              <div
                className="flex items-center justify-between p-4 rounded-t-lg"
                style={{
                  background: "var(--color-accent-text)",
                  color: "var(--color-accent-bg)",
                }}
              >
                <h5 className="font-semibold m-0 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.399l-.451.03-.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2"/>
                  </svg>
                  Enquiry Form
                </h5>
                <button
                  className="text-2xl bg-transparent border-none cursor-pointer"
                  style={{ color: "var(--color-accent-bg)" }}
                  onClick={() => setShow(false)}
                >
                  ×
                </button>
              </div>
              <div className="p-4">
                <iframe
                  src="https://form.edmissioncrm.com/form-preview/7ab0060d-c4d1-4c23-bc52-b9f35527847e"
                  width="100%"
                  height="500"
                  style={{ border: "none", borderRadius: "8px", overflow: "hidden" }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 bg-black/50 z-1049" onClick={() => setShow(false)} />
        </>
      )}
    </>
  );
}
