import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Campground from '@/components/Campground';
import Farm from '@/components/Farm';
import Activities from '@/components/Activities';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';

export default function Home() {
  return (
    <main>
      <SmoothScroll />
      <Navigation />
      <Hero />
      <About />
      <Campground />
      <Farm />
      <Activities />
      <Contact />
      <Footer />
    </main>
  );
}
