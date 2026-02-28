import { useState, useCallback, useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import { features } from "../../../data/featuresData";
import FeatureCard from "./features/FeatureCard";
import DotButton from "./features/DotButton";
import DownloadFeeBtn from "../../ui/DownloadFeeBtn";

export default function FeaturesSection() {
  const autoplayPlugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
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
    <section className="relative py-16 md:py-24 overflow-hidden" id="why-gvmps">
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
              Why Choose Us
            </span>
            <span className="inline-block w-8 h-0.5 rounded-full bg-accent-text/40" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-accent-text leading-tight">
            School Features &amp; Facilities
          </h2>
          <p className="mt-3 text-accent-text/60 max-w-5xl mx-auto text-base">
            Everything your child needs for a well-rounded education — modern
            infrastructure, expert guidance, and a vibrant learning atmosphere.
          </p>
          <div className="mt-6">
            <DownloadFeeBtn />
          </div>
        </div>

        {/* Carousel */}
        <div
          className="overflow-hidden"
          ref={emblaRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="flex -ml-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="min-w-0 shrink-0 grow-0 pl-4
                  basis-full sm:basis-1/2 lg:basis-1/3"
              >
                <FeatureCard feature={feature} />
              </div>
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
