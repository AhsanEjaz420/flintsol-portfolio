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

  // Generate gradient colors for each card based on index
  const getGradient = (index) => {
    const gradients = [
      'from-orange-400/20 via-orange-500/10 to-transparent',
      'from-blue-400/20 via-blue-500/10 to-transparent',
      'from-purple-400/20 via-purple-500/10 to-transparent',
      'from-emerald-400/20 via-emerald-500/10 to-transparent',
      'from-pink-400/20 via-pink-500/10 to-transparent',
      'from-cyan-400/20 via-cyan-500/10 to-transparent',
      'from-amber-400/20 via-amber-500/10 to-transparent',
      'from-indigo-400/20 via-indigo-500/10 to-transparent',
      'from-rose-400/20 via-rose-500/10 to-transparent',
      'from-teal-400/20 via-teal-500/10 to-transparent',
      'from-violet-400/20 via-violet-500/10 to-transparent',
      'from-fuchsia-400/20 via-fuchsia-500/10 to-transparent',
      'from-lime-400/20 via-lime-500/10 to-transparent',
      'from-sky-400/20 via-sky-500/10 to-transparent',
      'from-red-400/20 via-red-500/10 to-transparent',
    ];
    return gradients[index % gradients.length];
  };

  const getHoverGradient = (index) => {
    const gradients = [
      'from-orange-500/40 to-orange-600/30',
      'from-blue-500/40 to-blue-600/30',
      'from-purple-500/40 to-purple-600/30',
      'from-emerald-500/40 to-emerald-600/30',
      'from-pink-500/40 to-pink-600/30',
      'from-cyan-500/40 to-cyan-600/30',
      'from-amber-500/40 to-amber-600/30',
      'from-indigo-500/40 to-indigo-600/30',
      'from-rose-500/40 to-rose-600/30',
      'from-teal-500/40 to-teal-600/30',
      'from-violet-500/40 to-violet-600/30',
      'from-fuchsia-500/40 to-fuchsia-600/30',
      'from-lime-500/40 to-lime-600/30',
      'from-sky-500/40 to-sky-600/30',
      'from-red-500/40 to-red-600/30',
    ];
    return gradients[index % gradients.length];
  };

  return (
    <section className="min-h-screen relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 50%, #F9F9F7 100%)' }}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-purple-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20" style={{ marginTop: '100px' }}>
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-100 to-orange-50 backdrop-blur-sm rounded-full px-6 py-2 mb-6 border border-orange-200 shadow-lg shadow-orange-100/50">
            <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
            <span className="text-orange-600 text-sm font-semibold" style={{ fontFamily: 'var(--font-sans)' }}>Our Expertise</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: 'var(--font-sans)', color: '#121D1A' }}>
            Industries We
            <span className="block bg-gradient-to-r from-orange-500 via-orange-600 to-orange-400 bg-clip-text text-transparent">
              Transform
            </span>
          </h2>
          
          <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'var(--font-sans)', color: '#666666' }}>
            Empowering diverse industries with cutting-edge digital solutions, innovative software development,
            and transformative technology experiences that drive growth and success.
          </p>

          {/* Decorative Line */}
          <div className="flex justify-center mt-8">
            <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent rounded-full shadow-lg shadow-orange-200/50"></div>
          </div>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {industries.map((industry, index) => (
            <div
              key={index}
              className={`group relative p-6 cursor-pointer rounded-2xl border backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden ${
                hoveredIndex === index 
                  ? `bg-gradient-to-br ${getHoverGradient(index)} border-white/30 shadow-xl` 
                  : 'bg-white/70 border-white/50 hover:border-orange-200'
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${getGradient(index)} opacity-50 group-hover:opacity-80 transition-opacity duration-500`}></div>
              
              {/* Hover Glow Effect */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${getHoverGradient(index)} blur-xl`}></div>

              {/* Card Content */}
              <div className="relative z-10 text-center">
                <div className={`text-4xl mb-4 transform transition-all duration-500 ${
                  hoveredIndex === index ? 'scale-125 rotate-6' : 'scale-100'
                }`}>
                  {industry.icon}
                </div>

                <h3 className={`font-bold text-lg mb-2 transition-all duration-300 ${
                  hoveredIndex === index 
                    ? 'text-white scale-105' 
                    : 'text-gray-800'
                }`} style={{ fontFamily: 'var(--font-sans)' }}>
                  {industry.name}
                </h3>

                <p className={`text-sm leading-relaxed transition-all duration-500 ${
                  hoveredIndex === index 
                    ? 'text-white/90 opacity-100 translate-y-0' 
                    : 'text-gray-600 opacity-100 translate-y-0'
                }`} style={{ fontFamily: 'var(--font-sans)' }}>
                  {industry.description}
                </p>

                {/* Hover Indicator */}
                <div className={`mt-4 w-8 h-1 rounded-full mx-auto transition-all duration-500 ${
                  hoveredIndex === index 
                    ? 'bg-white w-16' 
                    : 'bg-gradient-to-r from-orange-300 to-orange-500 w-8'
                }`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-20 mb-16">
          <div className="relative p-8 max-w-4xl mx-auto rounded-3xl border border-white/50 backdrop-blur-xl overflow-hidden group hover:shadow-2xl transition-all duration-500" style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)' }}>
            {/* Animated Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-100/50 via-blue-100/50 to-purple-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: 'var(--font-sans)', color: '#121D1A' }}>
                Don't See Your Industry?
              </h3>
              <p className="mb-6 text-lg" style={{ fontFamily: 'var(--font-sans)', color: '#666666' }}>
                We adapt our expertise to serve businesses across all sectors. Let's discuss your unique requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="relative overflow-hidden bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg shadow-orange-200 hover:shadow-orange-300 transition-all duration-300 hover:scale-105"
                onClick={() => navigate('/Portfolio')} style={{ fontFamily: 'var(--font-sans)' }}>
                  <span className="relative z-10">View Portfolio</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;