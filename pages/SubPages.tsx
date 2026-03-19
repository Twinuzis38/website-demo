import React from 'react';

// --- Shared Layout for Subpages ---
const PageHeader: React.FC<{ title: string; subtitle: string; bgImage?: string }> = ({ title, subtitle, bgImage }) => (
  <div className="relative bg-emerald-900 py-24 sm:py-32">
    <div className="absolute inset-0 overflow-hidden">
      <img src={bgImage || "https://picsum.photos/id/190/2000/800"} alt="Background" className="w-full h-full object-cover opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-t from-emerald-900 via-transparent to-transparent"></div>
    </div>
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">{title}</h1>
      <p className="text-xl text-cyan-200 max-w-2xl mx-auto">{subtitle}</p>
    </div>
  </div>
);

// --- Who We Are ---

export const AboutUs: React.FC = () => (
  <div className="bg-white">
    <PageHeader title="About Us" subtitle="Dedicated to equitable health education." />
    <div className="max-w-4xl mx-auto px-4 py-16 space-y-12">
      <div>
        <h2 className="text-3xl font-bold text-emerald-900 mb-4">Meet the Team</h2>
        <p className="text-lg text-slate-600 leading-relaxed mb-8">Our diverse team is dedicated to making health equity a reality.</p>
        
        {/* Meet the Founders */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-cyan-700 mb-6">Meet the Founders</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { name: "Ilya Rahimi", bio: "Founder", image: "/photos/iliyarahimiheader.jpg" },
              { name: "Arya Soltani", bio: "Founder/Coordinator", image: "/photos/image0.jpg" }
            ].map((founder, i) => (
              <div key={i} className="bg-slate-50 p-8 rounded-lg border border-slate-200 text-center">
                <div className="w-32 h-32 mx-auto mb-4 bg-slate-300 rounded-full flex items-center justify-center overflow-hidden">
                  {founder.image ?(
                    <img src={founder.image} alt={founder.name} className="w-full h-full object-cover" />
                  ) : (
                    <i className="fas fa-user text-slate-400 text-4xl"></i>
                  )}
                </div>
                <h4 className="text-xl font-bold text-slate-800 mb-2">{founder.name}</h4>
                <p className="text-cyan-600 font-semibold mb-3">{founder.bio}</p>
                <p className="text-slate-600 text-sm"></p>
              </div>
            ))}
          </div>
        </div>

        {/* Meet Our Director of Operations */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-cyan-700 mb-6">Meet Our Director of Operations</h3>
          {(() => {
            const director = { name: "Arad Keshvadi", bio: "", image: "/photos/arad.png" };
            return (
              <div className="bg-slate-50 p-8 rounded-lg border border-slate-200 text-center max-w-md mx-auto">
                <div className="w-32 h-32 mx-auto mb-4 bg-slate-300 rounded-full flex items-center justify-center overflow-hidden">
                  {director.image ? (
                    <img src={director.image} alt={director.name} className="w-full h-full object-cover" />
                  ) : (
                    <i className="fas fa-user text-slate-400 text-4xl"></i>
                  )}
                </div>
                <h4 className="text-xl font-bold text-slate-800 mb-2">{director.name}</h4>
                <p className="text-cyan-600 font-semibold mb-3">Director of Operations</p>
                <p className="text-slate-600 text-sm">{director.bio}</p>
              </div>
            );
          })()}
        </div>

        {/* Meet Our Writing Team */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-cyan-700 mb-6">Meet Our Writing Team</h3>
          <div className="flex justify-center">
            {[
              { name: "Sadra Toosii", bio: "Writing team", image: "/photos/sadra.jpg" }
            ].map((writer, i) => (
              <div key={i} className="bg-slate-50 p-6 rounded-lg border border-slate-200 text-center w-64">
                <div className="w-28 h-28 mx-auto mb-4 bg-slate-300 rounded-full flex items-center justify-center overflow-hidden">
                  {writer.image ? (
                    <img src={writer.image} alt={writer.name} className="w-full h-full object-cover" />
                  ) : (
                    <i className="fas fa-user text-slate-400 text-3xl"></i>
                  )}
                </div>
                <h4 className="text-lg font-bold text-slate-800 mb-2">{writer.name}</h4>
                <p className="text-cyan-600 font-semibold mb-2 text-sm">Writing Team</p>
                <p className="text-slate-600 text-xs"></p>
              </div>
            ))}
          </div>
        </div>

        {/* Meet the Data Collection Team */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-cyan-700 mb-6">Meet the Data Collection Team</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {[
              { name: "Sina Dadashi", bio: "Research Coordinator", image: "/photos/sina.jpg" },
              { name: "Divine Nnaji", bio: "Data Collection Team", image: "" }
            ].map((collector, i) => (
              <div key={i} className="bg-slate-50 p-6 rounded-lg border border-slate-200 text-center">
                <div className="w-28 h-28 mx-auto mb-4 bg-slate-300 rounded-full flex items-center justify-center overflow-hidden">
                  {collector.image ? (
                    <img src={collector.image} alt={collector.name} className="w-full h-full object-cover" />
                  ) : (
                    <i className="fas fa-user text-slate-400 text-3xl"></i>
                  )}
                </div>
                <h4 className="text-lg font-bold text-slate-800 mb-2">{collector.name}</h4>
                <p className="text-cyan-600 font-semibold mb-2 text-sm">{collector.bio}</p>
                <p className="text-slate-600 text-xs"></p>
              </div>
            ))}
          </div>
        </div>

        {/* Meet Our Social Media Coordinator */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-cyan-700 mb-6">Meet Our Social Media Coordinator</h3>
          {(() => {
            const coordinator = { name: "Melody Mohammadi", bio: "", image: "/photos/melody.jpg" };
            return (
              <div className="bg-slate-50 p-8 rounded-lg border border-slate-200 text-center max-w-md mx-auto">
                <div className="w-32 h-32 mx-auto mb-4 bg-slate-300 rounded-full flex items-center justify-center overflow-hidden">
                  {coordinator.image ? (
                    <img src={coordinator.image} alt={coordinator.name} className="w-full h-full object-cover" />
                  ) : (
                    <i className="fas fa-user text-slate-400 text-4xl"></i>
                  )}
                </div>
                <h4 className="text-xl font-bold text-slate-800 mb-2">{coordinator.name}</h4>
                <p className="text-cyan-600 font-semibold mb-3">Social Media Coordinator</p>
                <p className="text-slate-600 text-sm">{coordinator.bio}</p>
              </div>
            );
          })()}
        </div>

        {/* Meet Our Health Literacy Content Designer */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-cyan-700 mb-6">Meet Our Health Literacy Content Designer</h3>
          {(() => {
            const designer = { name: "Sarah Merghani", bio: "Content Designer", image: "/photos/sara.jpeg" };
            return (
              <div className="bg-slate-50 p-8 rounded-lg border border-slate-200 text-center max-w-md mx-auto">
                <div className="w-32 h-32 mx-auto mb-4 bg-slate-300 rounded-full flex items-center justify-center overflow-hidden">
                  {designer.image ? (
                    <img src={designer.image} alt={designer.name} className="w-full h-full object-cover" />
                  ) : (
                    <i className="fas fa-user text-slate-400 text-4xl"></i>
                  )}
                </div>
                <h4 className="text-xl font-bold text-slate-800 mb-2">{designer.name}</h4>
                <p className="text-cyan-600 font-semibold mb-3">Content Designer</p>
                <p className="text-slate-600 text-sm"></p>
              </div>
            );
          })()}
        </div>

        {/* Meet Our IT Team */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-cyan-700 mb-6">Meet Our IT Team</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { name: "Arshia Baran", bio: "[Bio and background information goes here]", image: "/photos/arshiatwizz.jpg" },
              { name: "Arvin Vaziri", bio: "[Bio and background information goes here]", image: "/photos/arvinphoto.png" }
            ].map((member, i) => (
              <div key={i} className="bg-slate-50 p-6 rounded-lg border border-slate-200 text-center">
                <div className="w-28 h-28 mx-auto mb-4 bg-slate-300 rounded-full flex items-center justify-center overflow-hidden">
                  {member.image ? (
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  ) : (
                    <i className="fas fa-user text-slate-400 text-3xl"></i>
                  )}
                </div>
                <h4 className="text-lg font-bold text-slate-800 mb-2">{member.name}</h4>
                <p className="text-cyan-600 font-semibold mb-2 text-sm">IT Team Member</p>
                <p className="text-slate-600 text-xs"></p>
              </div>
            ))}
          </div>
        </div>

        {/* Meet Our Outreach Team */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-cyan-700 mb-6">Meet Our Outreach Team</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {[
              { name: "Yousef Elgawish", bio: "", image: "/photos/yousef.jpg" },
              { name: "Sean Wai", bio: "", image: "/photos/seanweiphoto.png" }
            ].map((member, i) => (
              <div key={i} className="bg-slate-50 p-6 rounded-lg border border-slate-200 text-center">
                <div className="w-28 h-28 mx-auto mb-4 bg-slate-300 rounded-full flex items-center justify-center overflow-hidden">
                  {member.image ? (
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  ) : (
                    <i className="fas fa-user text-slate-400 text-3xl"></i>
                  )}
                </div>
                <h4 className="text-lg font-bold text-slate-800 mb-2">{member.name}</h4>
                <p className="text-cyan-600 font-semibold mb-2 text-sm">Outreach Team Member</p>
                <p className="text-slate-600 text-xs">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Meet Our Finance Team */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-cyan-700 mb-6">Meet Our Finance Team</h3>
          <div className="flex justify-center">
            {[
              { name: "Koroush Saba", bio: "", image: "/photos/koroush.jpg" }
            ].map((member, i) => (
              <div key={i} className="bg-slate-50 p-6 rounded-lg border border-slate-200 text-center w-64">
                <div className="w-28 h-28 mx-auto mb-4 bg-slate-300 rounded-full flex items-center justify-center overflow-hidden">
                  {member.image ? (
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  ) : (
                    <i className="fas fa-user text-slate-400 text-3xl"></i>
                  )}
                </div>
                <h4 className="text-lg font-bold text-slate-800 mb-2">{member.name}</h4>
                <p className="text-cyan-600 font-semibold mb-2 text-sm">Finance Manager</p>
                <p className="text-slate-600 text-xs">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-3xl font-bold text-emerald-900 mb-6">Our Values</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-cyan-700 mb-2">Equity:</h3>
            <p className="text-slate-600 leading-relaxed">We prioritize the needs of those most excluded by traditional health systems.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-cyan-700 mb-2">Inclusion:</h3>
            <p className="text-slate-600 leading-relaxed">Language, disability, and culture should never be barriers to health.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-cyan-700 mb-2">Accessibility:</h3>
            <p className="text-slate-600 leading-relaxed">We meet people where they are—with visuals, plain language, and cultural relevance.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-cyan-700 mb-2">Community Power:</h3>
            <p className="text-slate-600 leading-relaxed">Our work is guided by lived experience, community feedback, and shared leadership.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-cyan-700 mb-2">Solidarity:</h3>
            <p className="text-slate-600 leading-relaxed">We partner with organizations aligned with racial, social, and economic justice.</p>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-3xl font-bold text-emerald-900 mb-4">Who We Are</h2>
        <p className="text-lg text-slate-600 leading-relaxed mb-4">
          The Equity & Health Literacy Project (EHLP) is a community-rooted health education initiative based in the Greater Toronto Area. We work to close the health literacy gap by creating accessible, multilingual, and culturally responsive resources that help individuals of all backgrounds confidently navigate the healthcare system.
        </p>
        <p className="text-lg text-slate-600 leading-relaxed">
          What began as a youth-led movement has grown into a broad, intergenerational project focused on reaching immigrant, racialized, low-income, and linguistically diverse communities. We are proud to be sponsored by the City of Vaughan, whose support has helped us expand our impact and deepen our community outreach.
        </p>
      </div>
      <div>
        <h2 className="text-3xl font-bold text-emerald-900 mb-4">What We Do</h2>
        <ul className="space-y-3">
          <li className="flex items-start text-slate-700">
            <i className="fas fa-check-circle text-cyan-500 mr-3 mt-1"></i>
            Develop health education materials at accessible reading levels, available in multiple languages
          </li>
          <li className="flex items-start text-slate-700">
            <i className="fas fa-check-circle text-cyan-500 mr-3 mt-1"></i>
            Host community workshops, both in-person and virtual, with interpretation and accessibility support
          </li>
          <li className="flex items-start text-slate-700">
            <i className="fas fa-check-circle text-cyan-500 mr-3 mt-1"></i>
            Create engaging digital tools—like mobile resource hubs and animated explainers—linked via QR codes
          </li>
          <li className="flex items-start text-slate-700">
            <i className="fas fa-check-circle text-cyan-500 mr-3 mt-1"></i>
            Listen to community voices through ongoing surveys and partnerships that inform everything we do
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export const OurPrograms: React.FC = () => (
  <div className="bg-white">
    <PageHeader title="Our Programs" subtitle="Curriculum designed for real-world impact." />
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
           <img src="https://picsum.photos/id/1/600/400" className="rounded-2xl shadow-xl" alt="Classroom" />
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-emerald-900">Comprehensive Health Literacy</h2>
          <p className="text-slate-600 text-lg">
            Our flagship course covers 8 weeks of intensive learning, focusing on:
          </p>
          <ul className="space-y-3">
            {[
              "Understanding Ontario's OHIP coverage",
              "Mental Health resources and access points",
              "Pharmacare and drug coverage options",
              "Patient rights and advocacy skills"
            ].map(item => (
              <li key={item} className="flex items-center text-slate-700">
                <i className="fas fa-check-circle text-cyan-500 mr-3"></i>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
);

// --- Course Enrolment ---

export const Pamphlets: React.FC = () => (
  <div className="bg-slate-50 min-h-screen">
    <PageHeader title="Resources & Pamphlets" subtitle="Downloadable guides to take with you." />
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {[
          { name: "Pamphlet 1", preview: "/photos/Pamphlet1.png" },
          { name: "Pamphlet 2", preview: "/photos/Pamphlet2.png" }
        ].map((pamphlet, i) => (
          <a
            key={i}
            href={pamphlet.preview}
            target="_blank"
            rel="noreferrer"
            className="bg-white rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow overflow-hidden"
          >
            <img
              src={pamphlet.preview}
              alt={pamphlet.name}
              className="w-full h-96 object-contain bg-slate-100"
            />
            <div className="p-6 text-center">
              <h3 className="font-bold text-slate-800 mb-2">{pamphlet.name}</h3>
              <p className="text-sm font-semibold text-cyan-600 hover:text-cyan-700">
                Open Preview <i className="fas fa-up-right-from-square ml-1"></i>
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  </div> 
);

export const Locations: React.FC = () => (
  <div className="bg-white">
    <PageHeader title="Our Locations" subtitle="Check out the map below to see where you can find our pamphlets!" />
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid lg:grid-cols-3 gap-8 items-start">
        {/* Google Map */}
        <div className="lg:col-span-2">
          <iframe 
            src="https://www.google.com/maps/d/u/2/embed?mid=1_-8erwBRvHP9hBRpG6rAiVjSyiG8Qxc&ehbc=2E312F&noprof=1" 
            width="100%" 
            height="480"
            style={{ border: 0, borderRadius: "0.5rem" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        
        {/* Address List */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-emerald-900 mb-6">Locations</h3>
          {[
            { name: "North York Central Library", address: "5120 Yonge St, North York, ON M2N 5N9" },
            { name: "Toronto Public Library - Fairview Branch", address: "35 Fairview Mall Dr, North York, ON M2J 4S4" },
            { name: "Bathurst Clark Resource Library", address: "900 Clark Ave W, Vaughan, ON L4J 8C1" },
            { name: "Civic Centre Resource Library", address: "2191 Major MacKenzie Dr W, Vaughan, ON L6A 4W2" },
            { name: "Carrville Community Centre", address: "655 Thomas Cook Ave, Maple, ON L6A 4M2" }
          ].map((loc, i) => (
            <div key={i} className="p-4 bg-slate-50 border border-slate-200 rounded-lg hover:border-cyan-500 transition-colors">
              <div className="flex items-start">
                <i className="fas fa-map-marker-alt text-emerald-600 text-lg mr-3 mt-1"></i>
                <div>
                  <h4 className="font-bold text-slate-800 mb-1">{loc.name}</h4>
                  <p className="text-sm text-slate-600">{loc.address}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

// --- News & Media ---

export const Blog: React.FC = () => (
  <div className="bg-slate-50 min-h-screen">
    <PageHeader title="News & Blog" subtitle="Stories from the community and health updates." />
    <div className="max-w-5xl mx-auto px-4 py-16">
      <div className="grid gap-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-white rounded-xl shadow-sm overflow-hidden flex flex-col md:flex-row hover:shadow-md transition-shadow">
            <div className="md:w-1/3">
              <img src={`https://picsum.photos/id/${i + 50}/800/600`} className="w-full h-full object-cover min-h-[200px]" alt="Blog Post" />
            </div>
            <div className="p-8 md:w-2/3 flex flex-col justify-center">
              <span className="text-cyan-600 font-bold text-xs uppercase tracking-wider mb-2">Health Policy</span>
              <h3 className="text-2xl font-bold text-slate-800 mb-3 hover:text-cyan-600 cursor-pointer">Understanding the New Pharmacare Draft</h3>
              <p className="text-slate-600 mb-4 line-clamp-2">The government has released new details regarding the rollout of national pharmacare. Here is what it means for equitable access...</p>
              <div className="flex items-center text-sm text-slate-400">
                <span>By Sarah Jenkins</span>
                <span className="mx-2">•</span>
                <span>Oct 12, 2024</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export const FinancialBarriers: React.FC = () => (
  <div className="bg-white">
    <PageHeader title="Financial Barriers" subtitle="Overcoming economic obstacles to health." bgImage="https://picsum.photos/id/20/2000/800" />
    <div className="max-w-4xl mx-auto px-4 py-16 text-slate-700 space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-emerald-900 mb-6">The Financial Barriers to Accessing Healthcare for Newcomers in Ontario</h2>
        
        <h3 className="text-2xl font-semibold text-cyan-700 mb-4">Overview</h3>
        <p className="text-lg leading-relaxed mb-6">
          Navigating the Ontario healthcare system can often be confusing and costly for newcomers, immigrants, and marginalized communities who are unfamiliar with the system. Despite Canada's reputation for providing publicly funded healthcare, financial challenges still hinder many individuals from receiving the care they need.
        </p>
        
        <h3 className="text-2xl font-semibold text-cyan-700 mb-4">How Payment Works</h3>
        <p className="text-lg leading-relaxed mb-4">
          Ontario residents' healthcare is covered by a valid Ontario Health Insurance Plan (OHIP), which pays for most hospital and doctor visits. However, OHIP excludes many individuals, such as:
        </p>
        <ul className="list-disc list-inside mb-6 space-y-2">
          <li>International students</li>
          <li>New permanent residents during the three-month waiting period</li>
          <li>Refugees</li>
        </ul>
        <p className="text-lg leading-relaxed mb-6">
          In such cases, individuals may rely on private insurance, which is often associated with employment, or purchased independently, which is not always financially accessible.
        </p>
        
        <h3 className="text-2xl font-semibold text-cyan-700 mb-4">Healthcare Settings</h3>
        <div className="space-y-4 mb-6">
          <div>
            <h4 className="text-xl font-medium text-emerald-800 mb-2">Hospitals:</h4>
            <p className="text-slate-600">Covered by OHIP for eligible residents.</p>
          </div>
          <div>
            <h4 className="text-xl font-medium text-emerald-800 mb-2">Walk-in Clinics:</h4>
            <p className="text-slate-600">Coverage varies. Some accept OHIP, while others charge privately.</p>
          </div>
          <div>
            <h4 className="text-xl font-medium text-emerald-800 mb-2">Private Clinics:</h4>
            <p className="text-slate-600">Services like therapy or dentistry require private insurance or personal payment.</p>
          </div>
        </div>
        
        <h3 className="text-2xl font-semibold text-cyan-700 mb-4">Why Financial Barriers Matter</h3>
        <p className="text-lg leading-relaxed mb-6">
          For newcomers, the Canadian healthcare system likely differs significantly from their countries of origin. With limited resources outlining how to navigate the system, there is increasing uncertainty and confusion regarding potential healthcare costs.
        </p>
        
        <h3 className="text-2xl font-semibold text-cyan-700 mb-4">Key Challenges</h3>
        <ul className="list-disc list-inside mb-6 space-y-2">
          <li>Language barriers</li>
          <li>Transportation</li>
          <li>Cultural beliefs regarding healthcare</li>
        </ul>
        
        <h3 className="text-2xl font-semibold text-cyan-700 mb-4">Additional Challenges</h3>
        <p className="text-lg leading-relaxed mb-6">
          Shame, discrimination, or assumptions that immigrants, refugees, international students, etc., do not deserve care further discourages marginalized groups from seeking care. Additionally, low health literacy—the ability to access, understand, and use health information—amplifies these challenges.
        </p>
        
        <h3 className="text-2xl font-semibold text-cyan-700 mb-4">What Needs to Change</h3>
        <p className="text-lg leading-relaxed mb-6">
          Addressing financial barriers requires better health literacy education, culturally sensitive resources, and systems that prioritize equity. Navigating healthcare should not come at the cost of one's well-being or become an additional source of stress.
        </p>
        
        <h3 className="text-2xl font-semibold text-cyan-700 mb-4">References</h3>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>Closing the Gap Healthcare. (2018, May 30). Healthcare in Ontario: How does it work and how is it funded? <a href="https://www.closingthegap.ca/healthcare-in-ontario-how-does-it-work-and-how-is-it-funded/" className="text-cyan-600 hover:underline">https://www.closingthegap.ca/healthcare-in-ontario-how-does-it-work-and-how-is-it-funded/</a></li>
          <li>Khandor, E., McDonald, J. T., Hwang, S. W., & Muntaner, C. (2011). Access to primary health care among homeless adults in Toronto, Canada: Results from the Street Health survey. Open Medicine, 5(2), e94–e103. <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3762743/" className="text-cyan-600 hover:underline">https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3762743/</a></li>
          <li>World Health Organization. (2023). Health literacy. <a href="https://www.who.int/news-room/fact-sheets/detail/health-literacy" className="text-cyan-600 hover:underline">https://www.who.int/news-room/fact-sheets/detail/health-literacy</a></li>
        </ul>
      </div>
    </div>
  </div>
);

// --- Contact ---

export const GetInvolved: React.FC = () => (
  <div className="bg-white">
    <PageHeader title="Get Involved" subtitle="Join the movement for health equity." />
    <div className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-16">
      <div className="space-y-8">
        <div>
          <h3 className="text-2xl font-bold text-emerald-900 mb-2">Volunteer</h3>
          <p className="text-slate-600">We are always looking for healthcare professionals, educators, and community organizers to help run our workshops.</p>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-emerald-900 mb-2">Donate</h3>
          <p className="text-slate-600">Your contributions fund our pamphlet printing, venue rentals for workshops, and support for families in crisis.</p>
        </div>
      </div>
      
      <div className="bg-white shadow-xl rounded-2xl p-8 border border-slate-100">
        <h3 className="text-xl font-bold mb-6 text-slate-800">Volunteer Interest Form</h3>
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-2 gap-4">
             <input type="text" placeholder="First Name" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-cyan-500 outline-none" />
             <input type="text" placeholder="Last Name" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-cyan-500 outline-none" />
          </div>
          <input type="email" placeholder="Email Address" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-cyan-500 outline-none" />
          <select className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-cyan-500 outline-none text-slate-500">
            <option>I want to help with...</option>
            <option>Teaching</option>
            <option>Event Planning</option>
            <option>Administration</option>
          </select>
          <textarea rows={4} placeholder="Tell us about yourself..." className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-cyan-500 outline-none"></textarea>
          <button className="w-full bg-emerald-700 text-white font-bold py-3 rounded-lg hover:bg-emerald-800 transition-colors">Submit Application</button>
        </form>
      </div>
    </div>
  </div>
);