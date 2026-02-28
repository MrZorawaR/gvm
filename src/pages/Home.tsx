import HeroSection from "../components/sections/home/HeroSection";
import Divider from "../components/ui/Divider";
import AboutSection from "../components/sections/home/AboutSection";
import NewsTicker from "../components/sections/home/NewsTicker";
import CardSlider from "../components/sections/home/CardSlider";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import SideCTA from "../components/ui/SideCTA";
import WhatsappIcon from "../components/ui/WhatsappIcon";

import { headerLinks } from "../data/navigation";
import MessageSection from "../components/sections/home/MessageSection";
import FeaturesSection from "../components/sections/home/FeaturesSection";
import ContactSection from "../components/sections/home/ContactSection";
import { Messages } from "../data/message";

export default function Home() {
  return (
    <>
      <main>
        {/* <HomePopup /> */}
        <Navbar />

        {/* Hero section with carousel, overlay, and bottom strip */}
        <HeroSection headerlinks={headerLinks} />

        {/* Divider tagline */}
        {/* <Divider /> */}

        {/* About section */}
        <AboutSection />

        {/* Latest news ticker */}
        <NewsTicker />
        <MessageSection data={Messages[0]} id="chairman"/>
        <FeaturesSection />
        <MessageSection data={Messages[1]} id="principal"/>
        <CardSlider />
        <ContactSection />
      </main>

      <Footer />
      {/* <SideCTA /> */}
      <WhatsappIcon />
    </>
  );
}
