import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaUtensils, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Categories', href: '#categories' },
    { name: 'Menu', href: '#menu' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Booking', href: '#booking' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      style={{
        position: 'fixed',
        width: '100%',
        zIndex: 50,
        transition: 'all 0.3s',
        backgroundColor: scrolled ? 'white' : 'transparent',
        boxShadow: scrolled ? '0 4px 6px -1px rgba(0,0,0,0.1)' : 'none'
      }}
    >
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '16px 20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <motion.div
          whileHover={{ scale: 1.05 }}
          style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
        >
          <FaUtensils style={{ fontSize: '28px', color: '#FF6B35' }} />
          <span style={{ fontSize: '24px', fontWeight: 'bold', color: '#FF6B35' }}>TastyBites</span>
        </motion.div>

        {/* Desktop Menu */}
        <div style={{ display: 'none', gap: '32px' }} className="md:flex">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              whileHover={{ scale: 1.1 }}
              style={{
                fontWeight: '500',
                transition: 'color 0.3s',
                color: scrolled ? '#2D2D2D' : 'white'
              }}
              className="hover:text-primary"
            >
              {link.name}
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          style={{ fontSize: '24px', display: 'block' }}
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <FaTimes style={{ color: scrolled ? '#2D2D2D' : 'white' }} />
          ) : (
            <FaBars style={{ color: scrolled ? '#2D2D2D' : 'white' }} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          style={{
            display: 'block',
            backgroundColor: 'white',
            boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)'
          }}
          className="md:hidden"
        >
          <div style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '16px 20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                style={{
                  color: '#2D2D2D',
                  fontWeight: '500',
                  transition: 'color 0.3s'
                }}
                className="hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;