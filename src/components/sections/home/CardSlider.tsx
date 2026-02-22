import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { sliderCards } from "../../../data/gallery";

export default function CardSlider() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % sliderCards.length);
    }, 3000);
    return () => {
      if (timerRef.current !== null) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  // Show up to 3 cards; on mobile 1, tablet 2, desktop 3
  return (
    <div className="my-10 overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${current * (100 / 3)}%)` }}
      >
        {/* We repeat the cards to make seamless looping */}
        {[...sliderCards, ...sliderCards].map((card, i) => (
          <div
            key={i}
            className="w-full sm:w-1/2 lg:w-1/3 shrink-0 px-2"
          >
            <div className="relative overflow-hidden">
              <Link to={card.link}>
                <img
                  src={card.img}
                  className="w-full h-62.5 object-cover"
                  alt={card.tag}
                />
              </Link>
              <h6
                className="absolute top-0 left-0 p-2 m-0 text-sm"
                style={{
                  backgroundColor: "var(--color-accent-text)",
                  opacity: 0.75,
                }}
              >
                {card.tag}
              </h6>
              <div
                className="absolute bottom-0 left-0 w-full opacity-75"
                style={{ backgroundColor: "var(--color-accent-bg)" }}
              >
                <p className="text-center text-white p-2 m-0 text-sm">
                  {card.text}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
