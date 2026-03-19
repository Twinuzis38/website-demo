import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import Home from './pages/Home';
import { 
  AboutUs, 
  OurPrograms, 
  Pamphlets, 
  Locations, 
  Blog, 
  FinancialBarriers, 
  GetInvolved 
} from './pages/SubPages';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen font-sans">
        <Navbar />
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            
            {/* Who We Are */}
            <Route path="/who-we-are/about" element={<AboutUs />} />
            <Route path="/who-we-are/programs" element={<OurPrograms />} />
            
            {/* Course Enrolment */}
            <Route path="/enrolment/pamphlets" element={<Pamphlets />} />
            <Route path="/enrolment/programs" element={<OurPrograms />} /> {/* Reusing component for demo */}
            <Route path="/enrolment/locations" element={<Locations />} />
            
            {/* News and Media */}
            <Route path="/news/blog" element={<Blog />} />
            {/* Navigating Health uses the financial barriers template for now to save space, or we make a new one. 
                For this demo, I will map it to a similar text heavy page or reuse FinancialBarriers with different props if I could.
                Instead, I'll just map it to FinancialBarriers to show content. */}
            <Route path="/news/navigating-health" element={<FinancialBarriers />} /> 
            <Route path="/news/financial-barriers" element={<FinancialBarriers />} />
            
            {/* Contact */}
            <Route path="/contact/get-involved" element={<GetInvolved />} />
            <Route path="/contact/form" element={<GetInvolved />} /> {/* Reuse for form */}
          </Routes>
        </main>
        <Footer />
        <ChatWidget />
      </div>
    </Router>
  );
};

export default App;