import HeroSection from "../components/sections/home/HeroSection";
import Divider from "../components/ui/Divider";
import AboutSection from "../components/sections/home/AboutSection";
import NewsTicker from "../components/sections/home/NewsTicker";
import CardSlider from "../components/sections/home/CardSlider";
import DiscoverGrid from "../components/sections/home/DiscoverGrid";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import HomePopup from "../components/ui/HomePopup";
import SideCTA from "../components/ui/SideCTA";
import WhatsappIcon from "../components/ui/WhatsappIcon";

import { headerLinks } from "../data/navigation";
import { homeGalleryItems } from "../data/gallery";

export default function Home() {
  return (
    <>
      <main>
        <HomePopup />
        <Navbar />

        {/* Hero section with carousel, overlay, and bottom strip */}
        <HeroSection headerlinks={headerLinks} />

        {/* Divider tagline */}
        <Divider />

        {/* About section */}
        <AboutSection />

        {/* Latest news ticker */}
        <NewsTicker />

        {/* Card slider */}
        <div className="mx-auto" style={{ width: "75%" }}>
          <CardSlider />
        </div>

        {/* Discover More gallery grid */}
        <DiscoverGrid
          galleryItems={homeGalleryItems}
          h="DISCOVER MORE"
          p="Find out about life at KualaKubs School, both inside and outside the classroom"
        />
      </main>

      <Footer />
      <SideCTA />
      <WhatsappIcon />
    </>
  );
}
