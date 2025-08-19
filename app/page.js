
'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProductsSection from '@/components/ProductsSection';
import DifferentialsSection from '@/components/DifferentialsSection';
import About from '@/components/About';
import Benefits from '@/components/Benefits';
import ModulesProducts from '@/components/ModulesProducts';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <About /> */}
      <Benefits />
      <ProductsSection />
      <ModulesProducts />
      <DifferentialsSection />
      {/* <Testimonials /> */}
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}
