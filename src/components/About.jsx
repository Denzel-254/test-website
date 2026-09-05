import React from 'react';
import { motion } from 'framer-motion';
import { FaLeaf, FaHeart, FaStar } from 'react-icons/fa';

const About = () => {
  const features = [
    {
      icon: <FaLeaf style={{ fontSize: '36px', color: '#FF6B35' }} />,
      title: 'Fresh Ingredients',
      description: 'We source only the freshest, locally-sourced ingredients for our dishes.',
    },
    {
      icon: <FaHeart style={{ fontSize: '36px', color: '#FF6B35' }} />,
      title: 'Made with Love',
      description: 'Every dish is prepared with passion and attention to detail.',
    },
    {
      icon: <FaStar style={{ fontSize: '36px', color: '#FF6B35' }} />,
      title: 'Award Winning',
      description: 'Recognized for excellence in culinary innovation and service.',
    },
  ];

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
            About <span style={{ color: '#FF6B35' }}>TastyBites</span>
          </h2>
          <div style={{
            width: '96px',
            height: '4px',
            backgroundColor: '#FF6B35',
            margin: '0 auto',
            borderRadius: '9999px'
          }}></div>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '48px',
          alignItems: 'center'
        }} className="md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Restaurant interior"
              style={{
                borderRadius: '16px',
                boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)',
                width: '100%',
                height: '400px',
                objectFit: 'cover'
              }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 style={{
              fontSize: '1.875rem',
              fontWeight: 'bold',
              marginBottom: '16px'
            }}>
              A Culinary Journey Since 2010
            </h3>
            <p style={{
              color: '#4B5563',
              marginBottom: '24px',
              lineHeight: '1.625'
            }}>
              At TastyBites, we believe that great food brings people together. 
              Our story began with a simple dream: to create a place where 
              authentic flavors meet modern culinary techniques.
            </p>
            <p style={{
              color: '#4B5563',
              marginBottom: '32px',
              lineHeight: '1.625'
            }}>
              Every dish tells a story of our commitment to quality, 
              sustainability, and the joy of sharing amazing food with 
              our community.
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '24px'
            }} className="md:grid-cols-3">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  style={{
                    textAlign: 'center',
                    padding: '16px',
                    backgroundColor: 'white',
                    borderRadius: '12px',
                    boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '12px' }}>
                    {feature.icon}
                  </div>
                  <h4 style={{ fontWeight: '600', marginBottom: '8px' }}>{feature.title}</h4>
                  <p style={{ fontSize: '0.875rem', color: '#4B5563' }}>{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;