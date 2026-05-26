import CustomCursor from '@/components/CustomCursor';
import Loader from '@/components/Loader';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Differentials from '@/components/Differentials';
import Services from '@/components/Services';
import Results from '@/components/Results';
import Gallery from '@/components/Gallery';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

export default function HomePage() {
  return (
    <>
      <CustomCursor />
      <Loader />
      <Navbar />
      <main>
        <Hero />
        <Results />
        <Services />
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
