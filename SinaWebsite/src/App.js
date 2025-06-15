import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import About from './pages/About';
import NavigatingHealth from './pages/NavigatingHealth';
import Programs from './pages/Programs';
import ResearchAdvocacy from './pages/ResearchAdvocacy';
import Blog from './pages/Blog';
import GetInvolved from './pages/GetInvolved';
import Footer from './components/Footer';
import './styles/App.css';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/navigating-health-in-ontario" element={<NavigatingHealth />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/research-and-advocacy" element={<ResearchAdvocacy />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/get-involved" element={<GetInvolved />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main>
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App; 