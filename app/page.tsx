import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Results from '@/components/Results';
import Services from '@/components/Services';
import Odontopediatria from '@/components/Odontopediatria';
import Differentials from '@/components/Differentials';
import Gallery from '@/components/Gallery';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="conteudo">
        <Hero />
        <Results />
        <Services />
        <Odontopediatria />
        <Differentials />
        <Gallery />
        <About />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
