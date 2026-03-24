import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Achievements from "@/components/Achievements";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FadeUp from "@/components/FadeUp";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <FadeUp>
        <About />
      </FadeUp>
      <FadeUp>
        <Achievements />
      </FadeUp>
      <Gallery />
      <FadeUp>
        <Contact />
      </FadeUp>
      <Footer />
    </main>
  );
}
