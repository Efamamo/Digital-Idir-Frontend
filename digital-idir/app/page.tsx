import About from '@/components/ui/About';
import Contact from '@/components/ui/Contact';
import CallToAction from '@/components/ui/Cta';
import Accordion from '@/components/ui/FAQ';
import Features from '@/components/ui/Features';
import Footer from '@/components/ui/Footer';
import Header from '@/components/ui/Header';
import Hero from '@/components/ui/Hero';
import How from '@/components/ui/How';
import Scroll from '@/components/ui/Scroll';
import Testimonials from '@/components/ui/Testimonials';
import Image from 'next/image';
import React from 'react';

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <div className="bg-gradient-to-b from-[#101012] via-[#121417] to-black">
        <About />
        <Features />
        <How />
        <Testimonials />
      </div>
      <div className="bg-gradient-to-b from-black via-[#121417] to-[#101012]">
        <CallToAction />
        <Accordion />
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default Home;
