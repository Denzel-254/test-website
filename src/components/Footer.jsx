import React from 'react';
import { motion } from 'framer-motion';
import { FaUtensils, FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: '#2D2D2D',
      color: 'white'
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '64px 20px'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '32px'
        }} className="md:grid-cols-4">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '16px'
            }}>
              <FaUtensils style={{ fontSize: '28px', color: '#FF6B35' }} />
              <span style={{
                fontSize: '24px',
                fontWeight: 'bold',
                color: '#FF6B35'
              }}>TastyBites</span>
            </div>
            <p style={{
              color: '#9CA3AF',
              marginBottom: '16px'
            }}>
              Where every bite tells a story of passion, quality, and culinary excellence.
            </p>
            <div style={{ display: 'flex', gap: '16px' }}>
              <motion.a
                whileHover={{ y: -3 }}
                href="#"
                style={{
                  color: '#9CA3AF',
                  fontSize: '20px',
                  transition: 'color 0.3s'
                }}
                className="hover:text-primary"
              >
                <FaFacebook />
              </motion.a>
              <motion.a
                whileHover={{ y: -3 }}
                href="#"
                style={{
                  color: '#9CA3AF',
                  fontSize: '20px',
                  transition: 'color 0.3s'
                }}
                className="hover:text-primary"
              >
                <FaInstagram />
              </motion.a>
              <motion.a
                whileHover={{ y: -3 }}
                href="#"
                style={{
                  color: '#9CA3AF',
                  fontSize: '20px',
                  transition: 'color 0.3s'
                }}
                className="hover:text-primary"
              >
                <FaTwitter />
              </motion.a>
              <motion.a
                whileHover={{ y: -3 }}
                href="#"
                style={{
                  color: '#9CA3AF',
                  fontSize: '20px',
                  transition: 'color 0.3s'
                }}
                className="hover:text-primary"
              >
                <FaYoutube />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 style={{
              fontSize: '1.25rem',
              fontWeight: 'bold',
              marginBottom: '16px'
            }}>Quick Links</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {['Home', 'About Us', 'Menu', 'Categories', 'Testimonials', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    style={{
                      color: '#9CA3AF',
                      transition: 'color 0.3s',
                      textDecoration: 'none'
                    }}
                    className="hover:text-primary"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 style={{
              fontSize: '1.25rem',
              fontWeight: 'bold',
              marginBottom: '16px'
            }}>Contact Info</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '12px'
              }}>
                <FaMapMarkerAlt style={{ color: '#FF6B35', marginTop: '4px' }} />
                <span style={{ color: '#9CA3AF' }}>123 Foodie Street, Culinary City, FC 12345</span>
              </li>
              <li style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}>
                <FaPhone style={{ color: '#FF6B35' }} />
                <span style={{ color: '#9CA3AF' }}>+1 (555) 123-4567</span>
              </li>
              <li style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}>
                <FaEnvelope style={{ color: '#FF6B35' }} />
                <span style={{ color: '#9CA3AF' }}>info@tastybites.com</span>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 style={{
              fontSize: '1.25rem',
              fontWeight: 'bold',
              marginBottom: '16px'
            }}>Newsletter</h4>
            <p style={{ color: '#9CA3AF', marginBottom: '16px' }}>
              Subscribe for exclusive offers and updates!
            </p>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <input
                type="email"
                placeholder="Your email"
                style={{
                  padding: '8px 16px',
                  borderRadius: '8px',
                  backgroundColor: '#1F2937',
                  color: 'white',
                  border: '1px solid #374151',
                  outline: 'none',
                  transition: 'all 0.3s'
                }}
                className="focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                style={{
                  backgroundColor: '#FF6B35',
                  color: 'white',
                  padding: '8px 24px',
                  borderRadius: '8px',
                  fontWeight: '600',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s'
                }}
                className="hover:bg-primary-dark"
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          style={{
            borderTop: '1px solid #374151',
            marginTop: '48px',
            paddingTop: '32px',
            textAlign: 'center',
            color: '#9CA3AF',
            fontSize: '0.875rem'
          }}
        >
          <p>© 2024 TastyBites. All rights reserved. Made with ❤️ and passion.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;