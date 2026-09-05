import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaPizzaSlice, 
  FaHamburger, 
  FaFish, 
  FaCocktail, 
  FaIceCream, 
  FaLeaf 
} from 'react-icons/fa';

const Categories = () => {
  const categories = [
    {
      icon: <FaPizzaSlice style={{ fontSize: '48px' }} />,
      name: 'Pizza',
      items: '12 Items',
      color: 'from-red-500 to-orange-500',
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    },
    {
      icon: <FaHamburger style={{ fontSize: '48px' }} />,
      name: 'Burgers',
      items: '8 Items',
      color: 'from-yellow-500 to-orange-500',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    },
    {
      icon: <FaFish style={{ fontSize: '48px' }} />,
      name: 'Seafood',
      items: '10 Items',
      color: 'from-blue-400 to-cyan-500',
      image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    },
    {
      icon: <FaCocktail style={{ fontSize: '48px' }} />,
      name: 'Drinks',
      items: '15 Items',
      color: 'from-purple-400 to-pink-500',
      image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    },
    {
      icon: <FaIceCream style={{ fontSize: '48px' }} />,
      name: 'Desserts',
      items: '9 Items',
      color: 'from-pink-400 to-rose-500',
      image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    },
    {
      icon: <FaLeaf style={{ fontSize: '48px' }} />,
      name: 'Salads',
      items: '6 Items',
      color: 'from-green-400 to-emerald-500',
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    },
  ];

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
            Food <span style={{ color: '#FF6B35' }}>Categories</span>
          </h2>
          <p style={{
            color: '#4B5563',
            maxWidth: '672px',
            margin: '0 auto'
          }}>
            Explore our diverse menu categories, each crafted with the finest ingredients
            and authentic recipes.
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
          gap: '32px'
        }} className="sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              style={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '16px',
                boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)',
                cursor: 'pointer',
                height: '256px'
              }}
            >
              <div style={{ position: 'relative', height: '100%' }}>
                <img
                  src={category.image}
                  alt={category.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s'
                  }}
                  className="group-hover:scale-110"
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: `linear-gradient(to top, ${category.color.replace('from-', '').replace('to-', '')})`,
                  opacity: 0.7
                }}></div>
              </div>
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: '24px',
                color: 'white'
              }}>
                <div style={{ marginBottom: '8px' }}>{category.icon}</div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{category.name}</h3>
                <p style={{ fontSize: '0.875rem', opacity: 0.9 }}>{category.items}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;