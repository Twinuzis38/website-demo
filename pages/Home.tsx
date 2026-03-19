import React from 'react';
import { NavLink } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/id/16/2500/1667" 
            alt="Nature landscape representing growth" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/90 via-emerald-800/70 to-cyan-900/40"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-2xl animate-fade-in-up">
            <span className="inline-block bg-cyan-500/20 border border-cyan-400/30 text-cyan-200 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 tracking-wide">
              Empowering Communities
            </span>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Equity Health Literacy Project<br/>
              <span className="text-cyan-400">Learning Program</span>
            </h1>
            <p className="text-lg md:text-xl text-emerald-100 mb-8 leading-relaxed">
              Bridging the gap in healthcare accessibility through education, advocacy, and community support in Ontario. Join us in creating a more equitable future.
            </p>
            <div className="flex flex-wrap gap-4">
              <NavLink 
                to="/enrolment/programs" 
                className="bg-cyan-500 hover:bg-cyan-400 text-white text-lg font-semibold px-8 py-3.5 rounded-lg shadow-lg shadow-cyan-900/30 transition-all transform hover:-translate-y-1"
              >
                Enroll Now
              </NavLink>
              <NavLink 
                to="/who-we-are/about" 
                className="bg-transparent border-2 border-white hover:bg-white hover:text-emerald-900 text-white text-lg font-semibold px-8 py-3.5 rounded-lg transition-all"
              >
                Learn More
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-white py-16 -mt-20 relative z-20 mx-4 md:mx-auto max-w-7xl rounded-xl shadow-xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
          <div className="text-center p-6 border-b md:border-b-0 md:border-r border-slate-100">
            <div className="text-cyan-600 text-4xl font-bold mb-2">1000+</div>
            <div className="text-emerald-900 font-semibold mb-2">People Reached</div>
            <p className="text-slate-500 text-sm">Empowering individuals with health literacy since 2024.</p>
          </div>
          <div className="text-center p-6 border-b md:border-b-0 md:border-r border-slate-100">
             <div className="text-cyan-600 text-4xl font-bold mb-2">10+</div>
            <div className="text-emerald-900 font-semibold mb-2">Community Outreach Locations</div>
            <p className="text-slate-500 text-sm">With Locations All Across the GTA.</p>
          </div>
          <div className="text-center p-6">
             <div className="text-cyan-600 text-4xl font-bold mb-2">100%</div>
            <div className="text-emerald-900 font-semibold mb-2">Volunteer Driven</div>
            <p className="text-slate-500 text-sm">Passionate professionals dedicated to health equity.</p>
          </div>
        </div>
      </section>

      {/* Featured Programs Preview */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-4">Our Core Pillars</h2>
            <div className="w-20 h-1 bg-cyan-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { title: "Health Literacy", icon: "fa-book-medical", desc: "Understanding the complex medical landscape and terminology." },
              { title: "Financial Navigation", icon: "fa-hand-holding-usd", desc: "Guidance on finding funding, insurance, and accessible care options." },
              { title: "Community Advocacy", icon: "fa-users", desc: "Building a voice for underrepresented groups in the healthcare system." }
            ].map((card, i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-300 p-8 border border-slate-100 group">
                <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-700 text-2xl mb-6 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                  <i className={`fas ${card.icon}`}></i>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{card.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {card.desc}
                </p>
                <a href="#" className="text-cyan-600 font-medium hover:text-cyan-700 inline-flex items-center">
                  Read More <i className="fas fa-arrow-right ml-2 text-xs"></i>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News Preview */}
      <section className="py-20 bg-emerald-900 text-white relative overflow-hidden">
        {/* Decorative circle */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-emerald-800 rounded-full opacity-50 blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Latest from the Blog</h2>
              <p className="text-emerald-200">Stay updated with health news and EHLP announcements.</p>
            </div>
            <NavLink to="/news/blog" className="mt-4 md:mt-0 text-cyan-400 font-medium hover:text-cyan-300">
              View All Articles <i className="fas fa-arrow-right ml-1"></i>
            </NavLink>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             <div className="bg-emerald-800 rounded-lg overflow-hidden group">
               <div className="h-48 overflow-hidden">
                 <img src="https://picsum.photos/id/48/800/600" alt="Blog" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
               </div>
               <div className="p-6">
                 <div className="text-xs text-cyan-400 mb-2 font-semibold uppercase">Financial Barriers</div>
                 <h3 className="text-xl font-bold mb-3 leading-snug">New Grant Opportunities for Dental Care</h3>
                 <p className="text-emerald-200/80 text-sm mb-4">Exploring the new Ontario Seniors Dental Care Program and how to apply.</p>
               </div>
             </div>
             
             <div className="bg-emerald-800 rounded-lg overflow-hidden group">
               <div className="h-48 overflow-hidden">
                 <img src="https://picsum.photos/id/20/800/600" alt="Blog" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
               </div>
               <div className="p-6">
                 <div className="text-xs text-cyan-400 mb-2 font-semibold uppercase">Navigating Health</div>
                 <h3 className="text-xl font-bold mb-3 leading-snug">Finding a Family Doctor in 2024</h3>
                 <p className="text-emerald-200/80 text-sm mb-4">Tips and resources for navigating the current shortage of primary care physicians.</p>
               </div>
             </div>

             <div className="bg-emerald-800 rounded-lg overflow-hidden group md:hidden lg:block">
               <div className="h-48 overflow-hidden">
                 <img src="https://picsum.photos/id/60/800/600" alt="Blog" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
               </div>
               <div className="p-6">
                 <div className="text-xs text-cyan-400 mb-2 font-semibold uppercase">Community</div>
                 <h3 className="text-xl font-bold mb-3 leading-snug">EHLP Spring Workshop Series</h3>
                 <p className="text-emerald-200/80 text-sm mb-4">Join us for a weekend of learning, connection, and empowerment.</p>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mb-6">Ready to make a difference?</h2>
          <p className="text-xl text-slate-600 mb-10">Whether you need support or want to provide it, EHLP is your community.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <NavLink to="/contact/get-involved" className="bg-emerald-700 hover:bg-emerald-800 text-white text-lg font-semibold px-10 py-4 rounded-lg shadow-lg transition-colors">
              Get Involved
            </NavLink>
            <NavLink to="/contact/form" className="bg-white border-2 border-slate-200 hover:border-cyan-500 text-slate-700 hover:text-cyan-600 text-lg font-semibold px-10 py-4 rounded-lg transition-all">
              Contact Us
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;