import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Categories from './components/Categories';
import Menu from './components/Menu';
import Testimonials from './components/Testimonials';
import Booking from './components/Booking';
import Footer from './components/Footer';

function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="categories">
          <Categories />
        </section>
        <section id="menu">
          <Menu />
        </section>
        <section id="testimonials">
          <Testimonials />
        </section>
        <section id="booking">
          <Booking />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;