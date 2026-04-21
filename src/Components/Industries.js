import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Industries = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);
  const industries = [
    { name: 'HealthTech', icon: '🏥', description: 'Digital health solutions & medical platforms' },
    { name: 'FinTech', icon: '💳', description: 'Financial apps & payment systems' },
    { name: 'E-Commerce', icon: '🛒', description: 'Online stores & marketplace solutions' },
    { name: 'EdTech', icon: '📚', description: 'Educational platforms & learning management' },
    { name: 'Real Estate', icon: '🏢', description: 'Property management & listing platforms' },
    { name: 'LegalTech', icon: '⚖️', description: 'Legal management & compliance tools' },
    { name: 'SaaS Platforms', icon: '☁️', description: 'Cloud-based software solutions' },
    { name: 'Logistics', icon: '🚚', description: 'Supply chain & delivery management' },
    { name: 'Gaming', icon: '🎮', description: 'Mobile games & interactive entertainment' },
    { name: 'IoT Solutions', icon: '🌐', description: 'Connected devices & smart systems' },
    { name: 'AgriTech', icon: '🌱', description: 'Agricultural technology & farming solutions' },
    { name: 'Travel & Tourism', icon: '✈️', description: 'Booking platforms & travel management' },
    { name: 'Media & Entertainment', icon: '🎬', description: 'Streaming platforms & content management' },
    { name: 'Manufacturing', icon: '🏭', description: 'Industrial automation & process optimization' },
    { name: 'Non-Profit', icon: '🤝', description: 'Community platforms & donation management' }
  ];

  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-orange-500/10 rounded-full blur-xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-green-500/10 rounded-full blur-xl animate-pulse delay-3000"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-slate-900/30"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20" style={{ marginTop: '100px' }}>
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-600/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6 border border-blue-400/30">
            <span className="text-blue-300 text-sm font-medium">Our Expertise</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Industries We
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">
              Transform
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Empowering diverse industries with cutting-edge digital solutions, innovative software development, 
            and transformative technology experiences that drive growth and success.
          </p>

          {/* Decorative Line */}
          <div className="flex justify-center mt-8">
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent rounded-full"></div>
          </div>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {industries.map((industry, index) => (
            <div
              key={index}
              className={`group relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-blue-400/50 transition-all duration-500 cursor-pointer ${
                hoveredIndex === index ? 'scale-105 shadow-2xl shadow-blue-500/20' : 'hover:scale-105'
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Card Content */}
              <div className="relative z-10 text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {industry.icon}
                </div>
                
                <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-blue-300 transition-colors duration-300">
                  {industry.name}
                </h3>
                
                <p className={`text-gray-400 text-sm leading-relaxed transition-all duration-500 ${
                  hoveredIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                }`}>
                  {industry.description}
                </p>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-20 mb-16">
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/50 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Don't See Your Industry?
            </h3>
            <p className="text-gray-300 mb-6 text-lg">
              We adapt our expertise to serve businesses across all sectors. Let's discuss your unique requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105">
                Get Custom Solution
              </button> */}
              <button className="border border-blue-400/50 text-blue-300 px-8 py-3 rounded-full font-semibold hover:bg-blue-400/10 hover:border-blue-400 transition-all duration-300"
              onClick={() => navigate('/Portfolio')}>
               
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;