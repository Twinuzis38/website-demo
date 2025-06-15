import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AnimatedSection, { SlideInLeft, SlideInRight, ScaleIn } from '../components/AnimatedSection';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          <h1>Equity & Health Literacy Project</h1>
          <p>Empowering communities through accessible health information and resources</p>
          <Link to="/contact" className="cta-button">
            Get Involved
          </Link>
        </motion.div>
      </section>

      <section className="featured-section">
        <AnimatedSection>
          <h2>Our Impact</h2>
        </AnimatedSection>
        
        <div className="featured-grid">
          <SlideInLeft delay={0.2}>
            <div className="featured-card">
              <h3>Multilingual Support</h3>
              <p>Providing healthcare information in multiple languages to ensure accessibility.</p>
            </div>
          </SlideInLeft>
          
          <ScaleIn delay={0.4}>
            <div className="featured-card">
              <h3>Cultural Competency</h3>
              <p>Training healthcare providers to better serve immigrant communities.</p>
            </div>
          </ScaleIn>
          
          <SlideInRight delay={0.6}>
            <div className="featured-card">
              <h3>Community Outreach</h3>
              <p>Connecting immigrant communities with essential healthcare resources.</p>
            </div>
          </SlideInRight>
        </div>
      </section>

      <section className="cta-section">
        <AnimatedSection>
          <h2>Join Our Mission</h2>
          <p>Together, we can make healthcare accessible for all.</p>
          <Link to="/contact" className="cta-button">
            Get Started
          </Link>
        </AnimatedSection>
      </section>
    </div>
  );
};

export default Home; 