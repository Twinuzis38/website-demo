import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import DarkModeToggle from './DarkModeToggle';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Check if device is touch-enabled
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);

    // Check for saved dark mode preference
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    setIsDarkMode(savedDarkMode);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    // Update document class and save preference
    document.documentElement.classList.toggle('dark-mode', isDarkMode);
    localStorage.setItem('darkMode', isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 }
  };

  const linkVariants = {
    hover: { scale: 1.1 },
    tap: { scale: 0.95 }
  };

  const mobileMenuVariants = {
    closed: { 
      opacity: 0,
      x: '100%',
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    },
    open: { 
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  };

  const menuItemVariants = {
    closed: { x: 20, opacity: 0 },
    open: i => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.3
      }
    })
  };

  return (
    <motion.header
      className={`navbar ${isScrolled ? 'scrolled' : ''}`}
      initial="hidden"
      animate="visible"
      variants={navVariants}
      transition={{ duration: 0.5 }}
    >
      <nav className="nav-container">
        <Link to="/" className="logo">
          Equity & Health Literacy Project
        </Link>

        <div className="nav-right">
          <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
          
          <button
            className="mobile-menu-button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <motion.span
              animate={isMobileMenuOpen ? 'open' : 'closed'}
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: 45, y: 8 }
              }}
              transition={{ duration: 0.3 }}
            >
              ☰
            </motion.span>
          </button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.ul
              className="nav-links mobile"
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              {['Home', 'About Us', 'Navigating Health In Ontario', 'Programs', 'Research and Advocacy', 'Blog', 'Get involved'].map((item, i) => (
                <motion.li 
                  key={item}
                  variants={menuItemVariants}
                  custom={i}
                >
                  <Link
                    to={item === 'Home' ? '/' : item === 'About Us' ? '/about' : `/${item.toLowerCase().replace(/\s+/g, '-')}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={location.pathname === (item === 'Home' ? '/' : item === 'About Us' ? '/about' : `/${item.toLowerCase().replace(/\s+/g, '-')}`) ? 'active' : ''}
                  >
                    {item}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>

        <ul className="nav-links desktop">
          {['Home', 'About Us', 'Navigating Health In Ontario', 'Programs', 'Research and Advocacy', 'Blog', 'Get involved'].map((item) => (
            <motion.li key={item}>
              <Link
                to={item === 'Home' ? '/' : item === 'About Us' ? '/about' : `/${item.toLowerCase().replace(/\s+/g, '-')}`}
                className={location.pathname === (item === 'Home' ? '/' : item === 'About Us' ? '/about' : `/${item.toLowerCase().replace(/\s+/g, '-')}`) ? 'active' : ''}
                variants={linkVariants}
                whileHover={!isTouchDevice ? "hover" : undefined}
                whileTap="tap"
              >
                {item}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
};

export default Navbar; 