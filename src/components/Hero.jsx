import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const Hero = () => {
  return (
    <div style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center'
    }}>
      {/* Background Image */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0,0,0,0.6)'
        }}></div>
      </div>

      {/* Content */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 20px',
        width: '100%'
      }}>
        <div style={{ maxWidth: '768px' }}>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              fontWeight: 'bold',
              color: 'white',
              marginBottom: '24px'
            }}
          >
            Welcome to{' '}
            <span style={{ color: '#FF6B35' }}>TastyBites</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              fontSize: '1.25rem',
              color: '#e5e7eb',
              marginBottom: '32px',
              lineHeight: '1.625'
            }}
          >
            Experience the finest culinary delights in a warm and inviting atmosphere. 
            Where every bite tells a story of passion and flavor.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#booking"
              style={{
                backgroundColor: '#FF6B35',
                color: 'white',
                padding: '16px 32px',
                borderRadius: '9999px',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 10px 15px -3px rgba(0,0,0,0.3)',
                transition: 'background-color 0.3s'
              }}
              className="hover:bg-primary-dark"
            >
              Book a Table
              <FaArrowRight />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#menu"
              style={{
                backgroundColor: 'rgba(255,255,255,0.2)',
                backdropFilter: 'blur(4px)',
                color: 'white',
                padding: '16px 32px',
                borderRadius: '9999px',
                fontWeight: '600',
                border: '2px solid white',
                transition: 'background-color 0.3s'
              }}
              className="hover:bg-white/30"
            >
              View Menu
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            style={{
              display: 'flex',
              gap: '32px',
              marginTop: '48px'
            }}
          >
            {[
              { number: '15+', label: 'Years Experience' },
              { number: '50+', label: 'Expert Chefs' },
              { number: '1000+', label: 'Happy Customers' },
            ].map((stat, index) => (
              <div key={index}>
                <div style={{
                  fontSize: '1.875rem',
                  fontWeight: 'bold',
                  color: '#FF6B35'
                }}>{stat.number}</div>
                <div style={{ color: '#d1d5db', fontSize: '0.875rem' }}>{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;