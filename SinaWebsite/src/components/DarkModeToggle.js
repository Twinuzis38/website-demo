import React from 'react';
import { motion } from 'framer-motion';
import '../styles/DarkModeToggle.css';

const DarkModeToggle = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <motion.button
      className="dark-mode-toggle"
      onClick={toggleDarkMode}
      aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="toggle-track"
        initial={false}
        animate={{
          backgroundColor: isDarkMode ? 'var(--deep-blue)' : 'var(--muted-gray)'
        }}
      >
        <motion.div
          className="toggle-thumb"
          initial={false}
          animate={{
            x: isDarkMode ? 20 : 0,
            backgroundColor: isDarkMode ? 'var(--teal)' : 'var(--soft-white)'
          }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 30
          }}
        >
          {isDarkMode ? '🌙' : '☀️'}
        </motion.div>
      </motion.div>
    </motion.button>
  );
};

export default DarkModeToggle; 