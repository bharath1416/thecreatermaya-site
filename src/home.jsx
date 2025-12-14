import React from 'react';
import HeroSection from './components/hero';
import Curser from './components/curser';
import About from './components/about';
import Services from './components/services';
import Projects from './components/projects';
import Pro from './components/pro';
import PackagesPremiumCards from './components/package';
import TestimonialsContactEpicEqual from './components/contact';
import Footer from './components/footer';

export default function Home() {
  return (
    <div className='w-full h-full scroll-smooth overflow-x-hidden'>
        <Curser />
        <HeroSection />
        <About />
        <Services />
        {/* <Projects /> */}
        <Pro />
        <PackagesPremiumCards />
        <TestimonialsContactEpicEqual />
        <Footer />
    </div>
  )
}
