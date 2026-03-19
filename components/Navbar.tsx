import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { NavItem } from '../types';

const navStructure: NavItem[] = [
  {
    label: "Who We Are",
    subItems: [
      { label: "About Us", path: "/who-we-are/about" },
      { label: "Our Programs/Course", path: "/who-we-are/programs" }
    ]
  },
  {
    label: "Course Enrolment",
    subItems: [
      { label: "Pamphlets", path: "/enrolment/pamphlets" },
      { label: "Programs", path: "/enrolment/programs" },
      { label: "Locations", path: "/enrolment/locations" }
    ]
  },
  {
    label: "News and Media",
    subItems: [
      { label: "Blog", path: "/news/blog" },
      //{ label: "Navigating Health in Ontario", path: "/news/navigating-health" },
      { label: "Financial Barriers", path: "/news/financial-barriers" }
    ]
  },
  {
    label: "Contact Us",
    subItems: [
      { label: "Get Involved", path: "/contact/get-involved" },
      { label: "Contact Form", path: "/contact/form" } 
    ]
  }
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-2' : 'bg-white py-4 shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <NavLink to="/" className="flex items-center group">
            <div className="w-10 h-10 bg-emerald-700 rounded-lg flex items-center justify-center text-white font-bold text-xl mr-3 group-hover:bg-cyan-600 transition-colors">
              E
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl text-emerald-900 tracking-tight leading-none">EHLP</span>
              <span className="text-xs text-cyan-600 font-medium tracking-wider">Equity Health Literacy Project</span>
            </div>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navStructure.map((item) => (
              <div 
                key={item.label} 
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center text-slate-600 hover:text-cyan-600 font-medium transition-colors py-2">
                  {item.label}
                  <i className={`fas fa-chevron-down ml-1 text-xs transition-transform duration-200 ${activeDropdown === item.label ? 'rotate-180' : ''}`}></i>
                </button>
                
                {/* Dropdown */}
                <div 
                  className={`absolute left-0 mt-0 w-56 bg-white rounded-lg shadow-xl border border-slate-100 overflow-hidden transition-all duration-200 origin-top-left ${
                    activeDropdown === item.label ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
                  }`}
                >
                  <div className="py-2">
                    {item.subItems?.map((sub) => (
                      <NavLink
                        key={sub.path}
                        to={sub.path || '#'}
                        className={({ isActive }) => 
                          `block px-4 py-2 text-sm transition-colors ${
                            isActive 
                              ? 'bg-cyan-50 text-cyan-700 font-medium border-l-4 border-cyan-500' 
                              : 'text-slate-600 hover:bg-slate-50 hover:text-emerald-700'
                          }`
                        }
                      >
                        {sub.label}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
            ))}
            
            <NavLink 
              to="/enrolment/programs" 
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-5 py-2.5 rounded-full font-medium transition-all shadow-lg shadow-cyan-200 hover:shadow-cyan-300 transform hover:-translate-y-0.5"
            >
              Apply Now
            </NavLink>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-600 hover:text-emerald-700 focus:outline-none p-2"
            >
              <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden bg-white border-t border-slate-100 overflow-hidden transition-all duration-300 ${
          mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-1">
          {navStructure.map((item) => (
            <div key={item.label} className="py-1">
              <div className="font-semibold text-emerald-800 px-3 py-2 border-b border-slate-100 mb-1">
                {item.label}
              </div>
              <div className="pl-4 space-y-1">
                {item.subItems?.map((sub) => (
                  <NavLink
                    key={sub.path}
                    to={sub.path || '#'}
                    className={({ isActive }) => 
                      `block px-3 py-2 rounded-md text-sm font-medium ${
                        isActive 
                          ? 'bg-cyan-50 text-cyan-700' 
                          : 'text-slate-500 hover:text-emerald-600 hover:bg-slate-50'
                      }`
                    }
                  >
                    {sub.label}
                  </NavLink>
                ))}
              </div>
            </div>
          ))}
          <div className="pt-4 px-3">
             <NavLink 
              to="/enrolment/programs" 
              className="block w-full text-center bg-cyan-600 text-white px-4 py-3 rounded-lg font-bold"
            >
              Apply Now
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;