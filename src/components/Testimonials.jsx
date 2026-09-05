import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaQuoteRight, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Food Critic',
      image: 'https://images.unsplash.com/photo-1494790108372-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      quote: 'Absolutely phenomenal! The flavors are incredible and the service is top-notch. TastyBites has become my go-to restaurant for special occasions.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Regular Customer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      quote: 'The best dining experience in the city! The truffle risotto is to die for, and the ambiance is perfect for a romantic dinner.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Food Blogger',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      quote: 'Every dish tells a story of passion and quality. The attention to detail in both food and presentation is remarkable.',
      rating: 5,
    },
    {
      id: 4,
      name: 'David Kim',
      role: 'Business Executive',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      quote: 'Perfect for business lunches and dinner meetings. The service is impeccable and the food consistently excellent.',
      rating: 4,
    },
  ];

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section style={{
      padding: '80px 0',
      backgroundColor: '#FFF3E0'
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 20px'
      }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '64px' }}
        >
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 'bold',
            marginBottom: '16px'
          }}>
            What Our <span style={{ color: '#FF6B35' }}>Customers Say</span>
          </h2>
          <p style={{
            color: '#4B5563',
            maxWidth: '672px',
            margin: '0 auto'
          }}>
            Real reviews from real customers who have experienced the TastyBites difference
          </p>
          <div style={{
            width: '96px',
            height: '4px',
            backgroundColor: '#FF6B35',
            margin: '16px auto 0',
            borderRadius: '9999px'
          }}></div>
        </motion.div>

        <div style={{
          position: 'relative',
          maxWidth: '896px',
          margin: '0 auto'
        }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              style={{
                backgroundColor: 'white',
                borderRadius: '16px',
                boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)',
                padding: '32px'
              }}
              className="md:p-12"
            >
              <FaQuoteLeft style={{
                fontSize: '36px',
                color: 'rgba(255,107,53,0.2)',
                marginBottom: '16px'
              }} />
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                marginBottom: '24px'
              }}>
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    objectFit: 'cover'
                  }}
                />
                <div>
                  <h4 style={{ fontWeight: 'bold', fontSize: '1.125rem' }}>
                    {testimonials[currentIndex].name}
                  </h4>
                  <p style={{ color: '#6B7280', fontSize: '0.875rem' }}>
                    {testimonials[currentIndex].role}
                  </p>
                  <div style={{ display: 'flex', gap: '4px', marginTop: '4px' }}>
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        style={{
                          color: i < testimonials[currentIndex].rating ? '#fbbf24' : '#d1d5db'
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p style={{
                color: '#374151',
                fontSize: '1.125rem',
                lineHeight: '1.75',
                fontStyle: 'italic'
              }}>
                "{testimonials[currentIndex].quote}"
              </p>
              <FaQuoteRight style={{
                fontSize: '36px',
                color: 'rgba(255,107,53,0.2)',
                marginTop: '16px',
                marginLeft: 'auto',
                display: 'block'
              }} />
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrevious}
            style={{
              position: 'absolute',
              left: 0,
              top: '50%',
              transform: 'translateY(-50%)',
              backgroundColor: 'white',
              borderRadius: '50%',
              padding: '12px',
              boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)',
              border: 'none',
              cursor: 'pointer',
              transition: 'box-shadow 0.3s'
            }}
            className="hover:shadow-xl"
          >
            <FaChevronLeft style={{ color: '#FF6B35' }} />
          </button>
          <button
            onClick={handleNext}
            style={{
              position: 'absolute',
              right: 0,
              top: '50%',
              transform: 'translateY(-50%)',
              backgroundColor: 'white',
              borderRadius: '50%',
              padding: '12px',
              boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)',
              border: 'none',
              cursor: 'pointer',
              transition: 'box-shadow 0.3s'
            }}
            className="hover:shadow-xl"
          >
            <FaChevronRight style={{ color: '#FF6B35' }} />
          </button>

          {/* Dots */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '8px',
            marginTop: '32px'
          }}>
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                style={{
                  width: index === currentIndex ? '32px' : '12px',
                  height: '12px',
                  borderRadius: '9999px',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  backgroundColor: index === currentIndex ? '#FF6B35' : '#d1d5db'
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;