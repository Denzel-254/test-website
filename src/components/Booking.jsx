import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaPhone, FaUsers, FaCalendarAlt, FaClock } from 'react-icons/fa';

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    specialRequests: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    console.log('Booking Data:', formData);
  };

  const inputStyle = {
    width: '100%',
    padding: '12px 16px',
    borderRadius: '8px',
    border: '1px solid #d1d5db',
    outline: 'none',
    transition: 'all 0.3s'
  };

  return (
    <section style={{
      padding: '80px 0',
      backgroundColor: 'white'
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
            Book Your <span style={{ color: '#FF6B35' }}>Table</span>
          </h2>
          <p style={{
            color: '#4B5563',
            maxWidth: '672px',
            margin: '0 auto'
          }}>
            Reserve your table now and experience an unforgettable dining journey with us
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
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '48px',
          maxWidth: '1152px',
          margin: '0 auto'
        }} className="md:grid-cols-2">
          {/* Booking Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
          >
            <div style={{
              backgroundColor: '#FFF3E0',
              borderRadius: '16px',
              padding: '32px'
            }}>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                marginBottom: '16px'
              }}>Why Book With Us?</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  { icon: <FaCalendarAlt />, text: 'Instant confirmation' },
                  { icon: <FaUsers />, text: 'Best table selection' },
                  { icon: <FaClock />, text: 'Flexible cancellation policy' },
                ].map((item, index) => (
                  <div key={index} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px'
                  }}>
                    <div style={{ color: '#FF6B35', fontSize: '1.25rem' }}>{item.icon}</div>
                    <span style={{ color: '#374151' }}>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{
              backgroundColor: '#FF6B35',
              color: 'white',
              borderRadius: '16px',
              padding: '32px'
            }}>
              <h4 style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                marginBottom: '8px'
              }}>Opening Hours</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <p>Monday - Friday: 11:00 AM - 11:00 PM</p>
                <p>Saturday - Sunday: 10:00 AM - 12:00 AM</p>
              </div>
            </div>
          </motion.div>

          {/* Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{
              backgroundColor: '#FFF3E0',
              borderRadius: '16px',
              padding: '32px'
            }}
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{ textAlign: 'center', padding: '48px 0' }}
              >
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>🎉</div>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  color: '#FF6B35'
                }}>Booking Confirmed!</h3>
                <p style={{ color: '#4B5563', marginTop: '8px' }}>We look forward to serving you.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    marginBottom: '8px'
                  }}>
                    <FaUser style={{ display: 'inline', marginRight: '8px', color: '#FF6B35' }} />
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    style={inputStyle}
                    placeholder="John Doe"
                    required
                    className="focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    marginBottom: '8px'
                  }}>
                    <FaEnvelope style={{ display: 'inline', marginRight: '8px', color: '#FF6B35' }} />
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    style={inputStyle}
                    placeholder="john@example.com"
                    required
                    className="focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    marginBottom: '8px'
                  }}>
                    <FaPhone style={{ display: 'inline', marginRight: '8px', color: '#FF6B35' }} />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    style={inputStyle}
                    placeholder="+1 (555) 000-0000"
                    required
                    className="focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '16px'
                }}>
                  <div>
                    <label style={{
                      display: 'block',
                      fontSize: '0.875rem',
                      fontWeight: '600',
                      marginBottom: '8px'
                    }}>
                      <FaCalendarAlt style={{ display: 'inline', marginRight: '8px', color: '#FF6B35' }} />
                      Date
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      style={inputStyle}
                      required
                      className="focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  <div>
                    <label style={{
                      display: 'block',
                      fontSize: '0.875rem',
                      fontWeight: '600',
                      marginBottom: '8px'
                    }}>
                      <FaClock style={{ display: 'inline', marginRight: '8px', color: '#FF6B35' }} />
                      Time
                    </label>
                    <input
                      type="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      style={inputStyle}
                      required
                      className="focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                </div>

                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    marginBottom: '8px'
                  }}>
                    <FaUsers style={{ display: 'inline', marginRight: '8px', color: '#FF6B35' }} />
                    Number of Guests
                  </label>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    style={inputStyle}
                    className="focus:border-primary focus:ring-2 focus:ring-primary/20"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? 'Guest' : 'Guests'}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    marginBottom: '8px'
                  }}>Special Requests</label>
                  <textarea
                    name="specialRequests"
                    value={formData.specialRequests}
                    onChange={handleChange}
                    style={{
                      ...inputStyle,
                      minHeight: '96px',
                      resize: 'vertical'
                    }}
                    placeholder="Any dietary requirements or special occasions?"
                    className="focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  style={{
                    width: '100%',
                    backgroundColor: '#FF6B35',
                    color: 'white',
                    padding: '16px',
                    borderRadius: '8px',
                    fontWeight: '600',
                    border: 'none',
                    cursor: 'pointer',
                    boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)',
                    transition: 'background-color 0.3s'
                  }}
                  className="hover:bg-primary-dark"
                >
                  Reserve Table
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Booking;