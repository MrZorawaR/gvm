import { useState, useCallback, useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import classroomImg from "../../../assets/images/classroom_activity.png";
import sciencelabImg from "../../../assets/images/sciencelab_image.png";
import libraryImg from "../../../assets/images/library-869061_1280.jpg";
import collegeImg from "../../../assets/images/college-5757815_1280.jpg";
import buildingImg from "../../../assets/images/building-8259184_1280.jpg";
import partnershipImg from "../../../assets/images/partnership_image.png";

interface Feature {
  title: string;
  description: string;
  image: string;
}

const features: Feature[] = [
  {
    title: "Audio Visual",
    description:
      "In an era of technological advancement it is inevitable to impart quality education without teaching aids. Audio Visual Room is the place where students go through their lessons with the help of Visual Aids. By watching the things, along with the reading, the subject knowledge gets imprinted our minds.  Educational and entertainment movies are also shown there.",
    image: "/audio1.webp",
  },
  {
    title: "Salient Features",
    description:
      "To enable students to face the present competitive era and make them aware of various real-world scenarios, the school provides valuable guidance and counselling sessions conducted by experienced experts. These professionals assist students in making realistic educational and vocational choices according to their aptitude and interests.",
    image: collegeImg,
  },
  {
    title: "Computer Lab",
    description:
      "In this era of information technology , the school has its own grand computer lab equipped with 40 computers with Core 2 Duo Intel Processor, TFT Monitor . The computer lab is equipped with state of art projector and touch – screen control & command box.",
    image: "/computer.webp",
  },
  {
    title: "Science Lab",
    description:
      "To quench the desire of the students and make them familiar with latest researches in Science and Technology . the school is having separate Physics , Chemistry and Bio-Labs where the distinguished faculties train the students to cope with various experiments.",
    image: "/science.webp",
  },
  {
    title: "Library",
    description:
      "G.V.M. has a spacious library well stocked with about 15,000 books with the number increasing with each passing year. The library has sections ranging from text books and reference books to fiction and general knowledge. There are a variety of books available for students of all levels on various subjects, literature, travel etc. the school subscribes newspapers and magazines to enable students to gain knowledge and develop interest in reading. The students are encouraged to read good books to widen their interests and extend their mental horizon.",
    image: "/library.webp",
  },
  {
    title: "Guidance Bureau",
    description:
      "To enable the students to face the present competitive era and make them aware of various scenario in present time, the school is providing valuable guidance-cum-counselling by the area experts , who assist them in marking realistic educational and vocational choices as per their aptitude. The school psychiatrist also helps the students to overcome their personal as well as social problems in a specialized manner.",
    image: partnershipImg,
  },
  {
    title: "Games & Sports",
    description:
      "The school has a well equipped games and sports section with facilities for various indoor and outdoor games. The students are encouraged to participate in various sports activities to promote physical fitness and team spirit.",
    image: "/sports.webp",
  },
  {
    title: "Music & Dance",
    description:
      "Music and dance room equipped with various musical instruments and dedicated teachers are striving to develop their students as nightingale and rocking stars.",
    image: "/dance.webp",
  },
  {
    title: "Arts & Craft",
    description:
      "The well qualified art teachers bring the students close to the life of colors through regular periods and a large variety of co —curricular activities.",
    image: "/art-craft.webp",
  },
];

/* ── Feature Card ────────────────────────────────────── */

function FeatureCard({ feature }: { feature: Feature }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer select-none ring-1 ring-accent-text/15 hover:ring-accent-text/30 transition-all duration-300"
      onClick={() => setOpen((o) => !o)}
    >
      {/* Image */}
      <img
        src={feature.image}
        alt={feature.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* Permanent dark gradient at the bottom for title */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, rgba(10,20,35,0.95) 0%, rgba(25,45,69,0.55) 40%, transparent 100%)",
        }}
      />

      {/* Title + icon — always visible at bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-5 z-10 flex items-end justify-between">
        <h3 className="text-accent-text text-lg font-bold leading-snug m-0">
          {feature.title}
        </h3>
        {/* Toggle arrow — rotates when open */}
        <span
          className={`text-accent-text/70 transition-transform duration-300 shrink-0 ml-2 ${
            open ? "rotate-180" : ""
          } md:opacity-0 md:group-hover:opacity-100`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 15.75 7.5-7.5 7.5 7.5"
            />
          </svg>
        </span>
      </div>

      {/* Description overlay — hover on md+, click on mobile */}
      <div
        className={`absolute inset-0 flex items-center justify-center p-6 text-center transition-opacity duration-300 z-20
          ${open ? "opacity-100" : "opacity-0 pointer-events-none"}
          md:opacity-0 md:group-hover:opacity-100 md:pointer-events-auto`}
        style={{ background: "rgba(25,45,69,0.88)" }}
      >
        <p className="text-accent-text/90 text-sm leading-relaxed max-w-90 m-0">
          {feature.description}
        </p>
      </div>
    </div>
  );
}

/* ── Carousel Navigation Dots ────────────────────────── */

function DotButton({
  selected,
  onClick,
}: {
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full transition-all duration-300 border-none cursor-pointer ${
        selected
          ? "w-8 h-2.5 bg-accent-text"
          : "w-2.5 h-2.5 bg-accent-text/30 hover:bg-accent-text/50"
      }`}
    />
  );
}

/* ── Main Section ────────────────────────────────────── */

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
    <section className="relative py-16 md:py-24 overflow-hidden">
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
