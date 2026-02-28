import { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { sliderCards } from "../../../data/gallery";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import DotButton from "./features/DotButton";

export default function CardSlider() {
  const autoplayPlugin = useRef(
    Autoplay({ delay: 1500, stopOnInteraction: false })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 1,
    },
    [autoplayPlugin.current]
  );

  const handleMouseEnter = useCallback(() => {
    autoplayPlugin.current.stop();
  }, []);

  const handleMouseLeave = useCallback(() => {
    autoplayPlugin.current.play();
  }, []);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);
  return (
    <section className="relative py-16 md:py-24 overflow-hidden" id="news">
      {/* Background */}
      <div
        className="absolute inset-0 -z-10"
        style={{ background: "var(--color-accent-bg)" }}
      />

      {/* Subtle decorative blobs */}
      <div
        className="absolute top-10 left-10 w-60 h-60 rounded-full blur-[100px] opacity-20"
        style={{ background: "var(--color-accent-text)" }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-10 w-80 h-80 rounded-full blur-[120px] opacity-15"
        style={{ background: "var(--color-accent-text)" }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="inline-block w-8 h-0.5 rounded-full bg-accent-text/40" />
            <span className="uppercase tracking-[0.25em] text-xs font-semibold text-accent-text/60">
              What's Happening
            </span>
            <span className="inline-block w-8 h-0.5 rounded-full bg-accent-text/40" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-accent-text leading-tight">
            Latest News & Activities
          </h2>
        </div>

        {/* Carousel */}
        <div
          className="overflow-hidden"
          ref={emblaRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="flex -ml-4">
            {sliderCards.map((card, index) => (
              <Link
                key={`${card.text}-${index}`}
                to={card.link || "#"}
                className="min-w-0 shrink-0 grow-0 pl-4
                      basis-full sm:basis-1/2 lg:basis-1/3"
              >
                <div className="group block relative h-80 rounded-2xl overflow-hidden ring-1 ring-accent-text/15 hover:ring-accent-text/30 transition-all duration-300">
                  <img
                    src={card.img}
                    alt={card.text}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(10,20,35,0.95) 0%, rgba(25,45,69,0.55) 40%, transparent 100%)",
                    }}
                  />
                  <div className="absolute inset-0 p-6 flex flex-col justify-end z-10">
                    <h3 className="text-xl font-bold text-white group-hover:text-amber-100 transition-colors duration-300">
                      {card.text}
                    </h3>
                    <span className="text-xs font-semibold uppercase tracking-wider text-accent-text/80 mb-2 block">
                      {card.tag}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {scrollSnaps.map((_, i) => (
            <DotButton
              key={i}
              selected={i === selectedIndex}
              onClick={() => scrollTo(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
