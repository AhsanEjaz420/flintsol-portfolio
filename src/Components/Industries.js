import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Building2, CreditCard, ShoppingBag, BookOpen, Building, Scale, Cloud, Truck, Gamepad2, Globe, Sprout, Plane, Film, Factory, HandHeart } from 'lucide-react';

const Industries = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);
  const industries = [
    { name: 'HealthTech', icon: Building2, description: 'Digital health solutions & medical platforms' },
    { name: 'FinTech', icon: CreditCard, description: 'Financial apps & payment systems' },
    { name: 'E-Commerce', icon: ShoppingBag, description: 'Online stores & marketplace solutions' },
    { name: 'EdTech', icon: BookOpen, description: 'Educational platforms & learning management' },
    { name: 'Real Estate', icon: Building, description: 'Property management & listing platforms' },
    { name: 'LegalTech', icon: Scale, description: 'Legal management & compliance tools' },
    { name: 'SaaS Platforms', icon: Cloud, description: 'Cloud-based software solutions' },
    { name: 'Logistics', icon: Truck, description: 'Supply chain & delivery management' },
    { name: 'Gaming', icon: Gamepad2, description: 'Mobile games & interactive entertainment' },
    { name: 'IoT Solutions', icon: Globe, description: 'Connected devices & smart systems' },
    { name: 'AgriTech', icon: Sprout, description: 'Agricultural technology & farming solutions' },
    { name: 'Travel & Tourism', icon: Plane, description: 'Booking platforms & travel management' },
    { name: 'Media & Entertainment', icon: Film, description: 'Streaming platforms & content management' },
    { name: 'Manufacturing', icon: Factory, description: 'Industrial automation & process optimization' },
    { name: 'Non-Profit', icon: HandHeart, description: 'Community platforms & donation management' }
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
    <section className="min-h-screen relative overflow-hidden" style={{ background: 'var(--color-bg-dark-elegant)' }}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-orange-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gray-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '12s', animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-20" style={{ marginTop: '100px' }}>
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-100/10 to-orange-50/10 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 mb-4 sm:mb-6 border border-orange-200/20 shadow-lg shadow-orange-100/20">
            <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
            <span className="text-orange-500 text-xs sm:text-sm font-semibold" style={{ fontFamily: 'var(--font-sans)' }}>Our Expertise</span>
          </div>
          
          <h2 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 tracking-tight"
            style={{
              fontFamily: 'var(--font-sans)',
              background: 'linear-gradient(135deg, #ff6b35 0%, #ff8f65 50%, #ff6b35 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              backgroundSize: '200% 200%',
              animation: 'gradient 8s ease infinite'
            }}
          >
            Industries We Transform
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl max-w-4xl mx-auto leading-relaxed" style={{ fontFamily: 'var(--font-sans)', color: 'var(--color-text-secondary-dark)' }}>
            Empowering diverse industries with cutting-edge digital solutions, innovative software development,
            and transformative technology experiences that drive growth and success.
          </p>

          {/* Decorative Line */}
          <div className="flex justify-center mt-6 sm:mt-8">
            <div className="w-24 sm:w-32 h-1.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent rounded-full shadow-lg shadow-orange-500/20"></div>
          </div>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group relative p-4 sm:p-6 lg:p-8 cursor-pointer rounded-3xl border backdrop-blur-2xl transition-all duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden elegant-card"
              style={{ transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)' }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${getGradient(index)} opacity-50 group-hover:opacity-80 transition-opacity duration-500`}></div>
              
              {/* Hover Glow Effect */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${getHoverGradient(index)} blur-xl`}></div>

              {/* Card Content */}
              <div className="relative z-10 text-center">
                <div className={`mb-4 sm:mb-6 flex justify-center transform transition-all duration-500 ${
                  hoveredIndex === index ? 'scale-125 rotate-6' : 'scale-100'
                }`}>
                  <industry.icon className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14" style={{ color: '#ff6b35' }} />
                </div>

                <h3 className={`font-bold text-base sm:text-lg lg:text-xl mb-2 sm:mb-3 transition-all duration-300 ${
                  hoveredIndex === index 
                    ? 'text-white scale-105' 
                    : 'text-white'
                }`} style={{ fontFamily: 'var(--font-sans)' }}>
                  {industry.name}
                </h3>

                <p className={`text-xs sm:text-sm leading-relaxed transition-all duration-500 ${
                  hoveredIndex === index 
                    ? 'text-white/90 opacity-100 translate-y-0' 
                    : 'text-gray-400 opacity-100 translate-y-0'
                }`} style={{ fontFamily: 'var(--font-sans)' }}>
                  {industry.description}
                </p>

                {/* Hover Indicator */}
                <div className={`mt-4 h-1 rounded-full mx-auto transition-all duration-500 ${
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
          <div className="relative p-8 max-w-4xl mx-auto rounded-3xl border border-gray-700/50 backdrop-blur-2xl overflow-hidden group hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-500 elegant-card">
            {/* Animated Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-100/10 via-blue-100/10 to-purple-100/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: 'var(--font-sans)', color: 'var(--color-text-primary-dark)' }}>
                Don't See Your Industry?
              </h3>
              <p className="mb-6 text-lg" style={{ fontFamily: 'var(--font-sans)', color: 'var(--color-text-secondary-dark)' }}>
                We adapt our expertise to serve businesses across all sectors. Let's discuss your unique requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="relative overflow-hidden bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105"
                onClick={() => navigate('/Portfolio')} style={{ fontFamily: 'var(--font-sans)' }}>
                  <span className="relative z-10">View Portfolio</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  );
};

export default Industries;