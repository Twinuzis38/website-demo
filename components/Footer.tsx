import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-emerald-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-4">
               <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-emerald-800 font-bold text-xl mr-3">
                E
              </div>
              <span className="font-bold text-2xl tracking-tight">EHLP</span>
            </div>
            <p className="text-emerald-200 text-sm leading-relaxed mb-6">
              Empowering communities through health equity education. Building bridges to accessible healthcare for everyone in Ontario.
            </p>
            <div className="flex space-x-4">
              {/*}
              <a href="#" className="w-8 h-8 rounded-full bg-emerald-800 flex items-center justify-center hover:bg-cyan-500 transition-colors">
                <i className="fab fa-twitter text-sm"></i>
              </a>
              */}
              {/*}
              <a href="#" className="w-8 h-8 rounded-full bg-emerald-800 flex items-center justify-center hover:bg-cyan-500 transition-colors">
                <i className="fab fa-facebook-f text-sm"></i>
              </a>
              */}
              <a href="https://www.instagram.com/ehlpofficial/" className="w-8 h-8 rounded-full bg-emerald-800 flex items-center justify-center hover:bg-cyan-500 transition-colors">
                <i className="fab fa-instagram text-sm"></i>
              </a>
              <a href="https://www.linkedin.com/company/equity-health-literacy-project/" className="w-8 h-8 rounded-full bg-emerald-800 flex items-center justify-center hover:bg-cyan-500 transition-colors">
                <i className="fab fa-linkedin-in text-sm"></i>
              </a>
            </div>
          </div>

          {/* Links Column 1 */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400">Who We Are</h3>
            <ul className="space-y-2 text-emerald-100/80 text-sm">
              <li><NavLink to="/who-we-are/about" className="hover:text-white hover:underline decoration-cyan-400 underline-offset-4 transition-all">About Us</NavLink></li>
              <li><NavLink to="/who-we-are/programs" className="hover:text-white hover:underline decoration-cyan-400 underline-offset-4 transition-all">Our Mission</NavLink></li>
              <li><NavLink to="/who-we-are/programs" className="hover:text-white hover:underline decoration-cyan-400 underline-offset-4 transition-all">Leadership</NavLink></li>
              <li><NavLink to="/contact/get-involved" className="hover:text-white hover:underline decoration-cyan-400 underline-offset-4 transition-all">Partners</NavLink></li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400">Resources</h3>
            <ul className="space-y-2 text-emerald-100/80 text-sm">
              <li><NavLink to="/news/blog" className="hover:text-white hover:underline decoration-cyan-400 underline-offset-4 transition-all">Latest News</NavLink></li>
              <li><NavLink to="/news/navigating-health" className="hover:text-white hover:underline decoration-cyan-400 underline-offset-4 transition-all">Ontario Health Guide</NavLink></li>
              <li><NavLink to="/enrolment/pamphlets" className="hover:text-white hover:underline decoration-cyan-400 underline-offset-4 transition-all">Pamphlets</NavLink></li>
              <li><NavLink to="/news/financial-barriers" className="hover:text-white hover:underline decoration-cyan-400 underline-offset-4 transition-all">Financial Support</NavLink></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400">Contact Us</h3>
            <ul className="space-y-4 text-emerald-100/80 text-sm">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1 mr-3 text-cyan-500"></i>
                <span>7299 Yonge St, <br/> Thornhill, ON L3T 0C5,</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-phone-alt mr-3 text-cyan-500"></i>
                <span>(647) 539-3969</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-envelope mr-3 text-cyan-500"></i>
                <span>ehlp.contact@gmail.com</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-emerald-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-emerald-400">
          <p>&copy; {new Date().getFullYear()} Equity Health Literacy Project. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;