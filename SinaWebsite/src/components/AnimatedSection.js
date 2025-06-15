import React from 'react';
import { motion } from 'framer-motion';

const AnimatedSection = ({ children, className, delay = 0 }) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{
        duration: 0.6,
        delay: delay,
        ease: [0.4, 0, 0.2, 1]
      }}
    >
      {children}
    </motion.div>
  );
};

export const SlideInLeft = ({ children, className, delay = 0 }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, x: -100 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: 100 }}
    transition={{
      duration: 0.6,
      delay: delay,
      ease: [0.4, 0, 0.2, 1]
    }}
  >
    {children}
  </motion.div>
);

export const SlideInRight = ({ children, className, delay = 0 }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, x: 100 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -100 }}
    transition={{
      duration: 0.6,
      delay: delay,
      ease: [0.4, 0, 0.2, 1]
    }}
  >
    {children}
  </motion.div>
);

export const ScaleIn = ({ children, className, delay = 0 }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.8 }}
    transition={{
      duration: 0.6,
      delay: delay,
      ease: [0.4, 0, 0.2, 1]
    }}
  >
    {children}
  </motion.div>
);

export const FadeIn = ({ children, className, delay = 0 }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{
      duration: 0.6,
      delay: delay,
      ease: [0.4, 0, 0.2, 1]
    }}
  >
    {children}
  </motion.div>
);

export default AnimatedSection; 