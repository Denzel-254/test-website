import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStar, FaClock } from 'react-icons/fa';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = ['all', 'starters', 'main', 'desserts', 'drinks'];

  const menuItems = [
    {
      id: 1,
      name: 'Truffle Mushroom Risotto',
      description: 'Creamy arborio rice with wild mushrooms and truffle oil',
      price: '$24.99',
      category: 'main',
      image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      rating: 4.8,
      time: '20-25 min',
    },
    {
      id: 2,
      name: 'Grilled Salmon Fillet',
      description: 'Atlantic salmon with lemon butter sauce and seasonal vegetables',
      price: '$29.99',
      category: 'main',
      image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      rating: 4.9,
      time: '15-20 min',
    },
    {
      id: 3,
      name: 'Classic Caesar Salad',
      description: 'Crisp romaine lettuce with parmesan, croutons, and Caesar dressing',
      price: '$16.99',
      category: 'starters',
      image: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      rating: 4.6,
      time: '10-15 min',
    },
    {
      id: 4,
      name: 'Chocolate Lava Cake',
      description: 'Warm chocolate cake with a molten center, served with vanilla ice cream',
      price: '$12.99',
      category: 'desserts',
      image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      rating: 4.9,
      time: '15 min',
    },
    {
      id: 5,
      name: 'Mango Tango Smoothie',
      description: 'Fresh mango, banana, and yogurt blended to perfection',
      price: '$8.99',
      category: 'drinks',
      image: 'https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      rating: 4.7,
      time: '5 min',
    },
    {
      id: 6,
      name: 'Bruschetta Trio',
      description: 'Toasted bread topped with three different Italian-inspired toppings',
      price: '$14.99',
      category: 'starters',
      image: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      rating: 4.5,
      time: '10-12 min',
    },
  ];

  const filteredItems = activeCategory === 'all'
    ? menuItems
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <section style={{
      padding: '80px 0',
      backgroundColor: '#f9fafb'
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
            Our <span style={{ color: '#FF6B35' }}>Menu</span>
          </h2>
          <p style={{
            color: '#4B5563',
            maxWidth: '672px',
            margin: '0 auto'
          }}>
            Discover our carefully curated menu featuring the best of culinary excellence
          </p>
          <div style={{
            width: '96px',
            height: '4px',
            backgroundColor: '#FF6B35',
            margin: '16px auto 0',
            borderRadius: '9999px'
          }}></div>
        </motion.div>

        {/* Category Filters */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '16px',
          marginBottom: '48px'
        }}>
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              style={{
                padding: '8px 24px',
                borderRadius: '9999px',
                fontWeight: '600',
                textTransform: 'capitalize',
                transition: 'all 0.3s',
                backgroundColor: activeCategory === category ? '#FF6B35' : 'white',
                color: activeCategory === category ? 'white' : '#374151',
                boxShadow: activeCategory === category ? '0 10px 15px -3px rgba(0,0,0,0.1)' : 'none'
              }}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '32px'
            }}
            className="md:grid-cols-2 lg:grid-cols-3"
          >
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ y: -8 }}
                style={{
                  backgroundColor: 'white',
                  borderRadius: '16px',
                  boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)',
                  overflow: 'hidden'
                }}
              >
                <div style={{
                  position: 'relative',
                  height: '192px',
                  overflow: 'hidden'
                }}>
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.3s'
                    }}
                    className="hover:scale-110"
                  />
                  <div style={{
                    position: 'absolute',
                    top: '16px',
                    right: '16px',
                    backgroundColor: 'white',
                    borderRadius: '9999px',
                    padding: '4px 12px',
                    boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)'
                  }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      fontSize: '0.875rem',
                      fontWeight: '600'
                    }}>
                      <FaStar style={{ color: '#fbbf24' }} />
                      {item.rating}
                    </div>
                  </div>
                </div>
                <div style={{ padding: '24px' }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    marginBottom: '8px'
                  }}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>{item.name}</h3>
                    <span style={{
                      fontSize: '1.25rem',
                      fontWeight: 'bold',
                      color: '#FF6B35'
                    }}>{item.price}</span>
                  </div>
                  <p style={{
                    color: '#4B5563',
                    fontSize: '0.875rem',
                    marginBottom: '16px'
                  }}>{item.description}</p>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      fontSize: '0.875rem',
                      color: '#6B7280'
                    }}>
                      <FaClock />
                      <span>{item.time}</span>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      style={{
                        backgroundColor: '#FF6B35',
                        color: 'white',
                        padding: '8px 16px',
                        borderRadius: '9999px',
                        fontSize: '0.875rem',
                        fontWeight: '600',
                        border: 'none',
                        cursor: 'pointer',
                        transition: 'background-color 0.3s'
                      }}
                      className="hover:bg-primary-dark"
                    >
                      Order Now
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredItems.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{ textAlign: 'center', padding: '48px 0' }}
          >
            <p style={{ color: '#6B7280', fontSize: '1.125rem' }}>No items found in this category</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Menu;