// import React, { useState, useEffect } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';

// const IndustriesSlider = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
// const navigate = useNavigate();
//   // Only 9 featured industries
//   const industries = [
//     { name: 'HealthTech', icon: '🏥', description: 'Digital health solutions & medical platforms', color: 'from-emerald-500/20 to-teal-500/20' },
//     { name: 'FinTech', icon: '💳', description: 'Financial apps & payment systems', color: 'from-blue-500/20 to-cyan-500/20' },
//     { name: 'E-Commerce', icon: '🛒', description: 'Online stores & marketplace solutions', color: 'from-orange-500/20 to-red-500/20' },
//     { name: 'EdTech', icon: '📚', description: 'Educational platforms & learning management', color: 'from-purple-500/20 to-pink-500/20' },
//     { name: 'Real Estate', icon: '🏢', description: 'Property management & listing platforms', color: 'from-gray-500/20 to-slate-500/20' },
//     { name: 'LegalTech', icon: '⚖️', description: 'Legal management & compliance tools', color: 'from-amber-500/20 to-yellow-500/20' },
//     { name: 'SaaS Platforms', icon: '☁️', description: 'Cloud-based software solutions', color: 'from-sky-500/20 to-blue-500/20' },
//     { name: 'Gaming', icon: '🎮', description: 'Mobile games & interactive entertainment', color: 'from-violet-500/20 to-purple-500/20' },
//     { name: 'IoT Solutions', icon: '🌐', description: 'Connected devices & smart systems', color: 'from-green-500/20 to-emerald-500/20' }
//   ];

//   const totalSlides = 3; // 3 slides, 3 industries each

//   const nextSlide = () => {
//     setCurrentSlide(prev => prev === totalSlides - 1 ? 0 : prev + 1);
//   };

//   const prevSlide = () => {
//     setCurrentSlide(prev => prev === 0 ? totalSlides - 1 : prev - 1);
//   };

//   // Auto-slide functionality
//   useEffect(() => {
//     const interval = setInterval(nextSlide, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   const getCurrentSlideItems = () => {
//     const startIndex = currentSlide * 3;
//     return industries.slice(startIndex, startIndex + 3);
//   };

//   return (
//     <section className="py-24 relative overflow-hidden">
//       {/* Enhanced Animated Background */}
//       <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
//         {/* Dynamic Floating Elements */}
//         <div className="absolute top-20 left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl animate-pulse"></div>
//         <div className="absolute top-60 right-20 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
//         <div className="absolute bottom-32 left-1/4 w-48 h-48 bg-orange-500/10 rounded-full blur-2xl animate-pulse delay-2000"></div>
//         <div className="absolute bottom-60 right-1/3 w-36 h-36 bg-green-500/10 rounded-full blur-xl animate-pulse delay-3000"></div>
//         <div className="absolute top-1/3 left-1/2 w-28 h-28 bg-pink-500/10 rounded-full blur-lg animate-pulse delay-4000"></div>
        
//         {/* Enhanced Grid Pattern */}
//         <div className="absolute inset-0 opacity-5">
//           <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
//         </div>
        
//         {/* Multiple Gradient Overlays */}
//         <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-slate-900/40"></div>
//         <div className="absolute inset-0 bg-gradient-to-r from-slate-900/30 via-transparent to-slate-900/30"></div>
//       </div>

//       <div className="relative z-10 container mx-auto px-6">
//         {/* Enhanced Header Section */}
//         <div className="text-center mb-20">
//           <div className="inline-flex items-center bg-blue-600/20 backdrop-blur-sm rounded-full px-8 py-3 mb-8 border border-blue-400/30 hover:border-blue-400/50 transition-all duration-300">
//             <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 animate-pulse"></div>
//             <span className="text-blue-300 text-sm font-medium tracking-wide">Featured Industries</span>
//           </div>
          
//           <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
//             Industries We
//             <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400 bg-clip-text text-transparent animate-pulse">
//               Revolutionize
//             </span>
//           </h2>
          
//           <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
//             Transforming businesses across key sectors with innovative technology solutions, 
//             cutting-edge development, and forward-thinking digital experiences.
//           </p>

//           {/* Enhanced Decorative Elements */}
//           <div className="flex justify-center items-center space-x-4 mt-12">
//             <div className="w-16 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent rounded-full"></div>
//             <div className="w-3 h-3 bg-orange-400 rounded-full animate-pulse"></div>
//             <div className="w-24 h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent rounded-full"></div>
//             <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-500"></div>
//             <div className="w-16 h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent rounded-full"></div>
//           </div>
//         </div>

//         {/* Enhanced Slider Container */}
//         <div className="relative max-w-7xl mx-auto">
//           {/* Premium Navigation Buttons */}
//           <button
//             onClick={prevSlide}
//             className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-30 bg-gradient-to-r from-slate-800/90 to-slate-700/90 backdrop-blur-md hover:from-slate-700/90 hover:to-slate-600/90 text-white p-4 rounded-2xl border border-slate-600/50 hover:border-blue-400/60 transition-all duration-300 hover:scale-110 shadow-2xl shadow-slate-900/50 group"
//           >
//             <ChevronLeft className="w-7 h-7 group-hover:text-blue-400 transition-colors duration-300" />
//             <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//           </button>

//           <button
//             onClick={nextSlide}
//             className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-30 bg-gradient-to-r from-slate-800/90 to-slate-700/90 backdrop-blur-md hover:from-slate-700/90 hover:to-slate-600/90 text-white p-4 rounded-2xl border border-slate-600/50 hover:border-blue-400/60 transition-all duration-300 hover:scale-110 shadow-2xl shadow-slate-900/50 group"
//           >
//             <ChevronRight className="w-7 h-7 group-hover:text-blue-400 transition-colors duration-300" />
//             <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//           </button>

//           {/* Enhanced Slider Content */}
//           <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-slate-800/20 to-slate-900/20 backdrop-blur-sm border border-slate-700/30 p-8">
//             <div 
//               className="flex transition-all duration-700 ease-out"
//               style={{ transform: `translateX(-${currentSlide * 100}%)` }}
//             >
//               {Array.from({ length: totalSlides }).map((_, slideIndex) => (
//                 <div key={slideIndex} className="w-full flex-shrink-0">
//                   <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
//                     {industries
//                       .slice(slideIndex * 3, (slideIndex + 1) * 3)
//                       .map((industry, index) => (
//                       <div
//                         key={index}
//                         className="group relative bg-gradient-to-br from-slate-800/70 to-slate-900/70 backdrop-blur-md rounded-3xl p-8 border border-slate-700/50 hover:border-blue-400/60 transition-all duration-500 cursor-pointer hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
//                       >
//                         {/* Enhanced Glow Effects */}
//                         <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
//                         <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
//                         {/* Card Content */}
//                         <div className="relative z-10 text-center">
//                           <div className="text-6xl mb-6 group-hover:scale-125 transition-all duration-500 filter drop-shadow-lg">
//                             {industry.icon}
//                           </div>
                          
//                           <h3 className="text-white font-bold text-2xl mb-4 group-hover:text-blue-300 transition-colors duration-300">
//                             {industry.name}
//                           </h3>
                          
//                           <div className="h-16 flex items-center justify-center">
//                             <p className="text-gray-400 text-base leading-relaxed opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 transition-all duration-700 delay-200">
//                               {industry.description}
//                             </p>
//                           </div>

//                           {/* Interactive Element */}
//                           <div className="mt-6 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-300">
//                             <div className="w-12 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mx-auto"></div>
//                           </div>
//                         </div>

//                         {/* Enhanced Hover Border Effect */}
//                         <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-400/30 via-purple-400/30 to-orange-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10 blur-sm"></div>
                        
//                         {/* Corner Accents */}
//                         <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-blue-400/0 group-hover:border-blue-400/60 transition-all duration-500 rounded-tr-xl"></div>
//                         <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-purple-400/0 group-hover:border-purple-400/60 transition-all duration-500 rounded-bl-xl"></div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Enhanced Slide Indicators */}
//           <div className="flex justify-center mt-12 space-x-3">
//             {Array.from({ length: totalSlides }).map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setCurrentSlide(index)}
//                 className={`relative transition-all duration-500 rounded-full ${
//                   currentSlide === index 
//                     ? 'w-12 h-4 bg-gradient-to-r from-blue-400 to-purple-400 shadow-lg shadow-blue-500/50' 
//                     : 'w-4 h-4 bg-slate-600 hover:bg-slate-500 hover:scale-110'
//                 }`}
//               >
//                 {currentSlide === index && (
//                   <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse"></div>
//                 )}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Enhanced View All Section */}
//         <div className="text-center mt-24">
//           <div className="relative bg-gradient-to-r from-slate-800/60 to-slate-900/60 backdrop-blur-md rounded-3xl p-12 border border-slate-700/50 max-w-4xl mx-auto group hover:border-blue-400/50 transition-all duration-500">
//             {/* Background Effect */}
//             <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
//             <div className="relative z-10">
//               <div className="inline-flex items-center bg-orange-500/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6 border border-orange-400/30">
//                 <span className="text-orange-300 text-sm font-medium">Complete Portfolio</span>
//               </div>
              
//               <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
//                 Explore Our Complete
//                 <span className="block bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
//                   Industry Portfolio
//                 </span>
//               </h3>
              
//               <p className="text-gray-300 mb-8 text-lg leading-relaxed">
//                 Discover how we've transformed businesses across 15+ industries with innovative solutions, 
//                 cutting-edge technology, and results-driven approaches.
//               </p>
              
//               <button 
//                 onClick={() => {
//                   navigate('/industries');
//                 }}
//                 className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-500 hover:scale-105 group/btn overflow-hidden"
//               >
//                 <span className="relative z-10 flex items-center">
//                   View All Industries
//                   <span className="inline-block ml-3 group-hover/btn:translate-x-2 transition-transform duration-300">→</span>
//                 </span>
                
//                 {/* Button Glow Effect */}
//                 <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500 blur-xl"></div>
                
//                 {/* Button Animation */}
//                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const IndustriesSlider = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Only 9 featured industries
  const industries = [
    { name: 'HealthTech', icon: '🏥', description: 'Digital health solutions & medical platforms', color: 'from-emerald-500/20 to-teal-500/20' },
    { name: 'FinTech', icon: '💳', description: 'Financial apps & payment systems', color: 'from-blue-500/20 to-cyan-500/20' },
    { name: 'E-Commerce', icon: '🛒', description: 'Online stores & marketplace solutions', color: 'from-orange-500/20 to-red-500/20' },
    { name: 'EdTech', icon: '📚', description: 'Educational platforms & learning management', color: 'from-purple-500/20 to-pink-500/20' },
    { name: 'Real Estate', icon: '🏢', description: 'Property management & listing platforms', color: 'from-gray-500/20 to-slate-500/20' },
    { name: 'LegalTech', icon: '⚖️', description: 'Legal management & compliance tools', color: 'from-amber-500/20 to-yellow-500/20' },
    { name: 'SaaS Platforms', icon: '☁️', description: 'Cloud-based software solutions', color: 'from-sky-500/20 to-blue-500/20' },
    { name: 'Gaming', icon: '🎮', description: 'Mobile games & interactive entertainment', color: 'from-violet-500/20 to-purple-500/20' },
    { name: 'IoT Solutions', icon: '🌐', description: 'Connected devices & smart systems', color: 'from-green-500/20 to-emerald-500/20' }
  ];

  const totalSlides = isMobile ? industries.length : 3; // Mobile: 9 slides, Desktop: 3 slides
  const itemsPerSlide = isMobile ? 1 : 3;

  const nextSlide = () => {
    setCurrentSlide(prev => prev === totalSlides - 1 ? 0 : prev + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(prev => prev === 0 ? totalSlides - 1 : prev - 1);
  };

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  // Reset slide when switching between mobile/desktop
  useEffect(() => {
    setCurrentSlide(0);
  }, [isMobile]);

  const getCurrentSlideItems = () => {
    if (isMobile) {
      return [industries[currentSlide]];
    } else {
      const startIndex = currentSlide * 3;
      return industries.slice(startIndex, startIndex + 3);
    }
  };

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
    <section className="min-h-screen relative overflow-hidden flex flex-col" style={{ background: 'linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 50%, #F9F9F7 100%)' }}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-purple-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 flex flex-col flex-1 justify-center py-8">
        {/* Compact Header Section */}
        <div className="text-center mb-6 md:mb-8">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-100 to-orange-50 backdrop-blur-sm rounded-full px-6 py-2 mb-4 border border-orange-200 shadow-lg shadow-orange-100/50">
            <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
            <span className="text-orange-600 text-xs font-semibold" style={{ fontFamily: 'var(--font-sans)' }}>Featured Industries</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 leading-tight" style={{ fontFamily: 'var(--font-sans)', color: '#121D1A' }}>
            Industries We
            <span className="block bg-gradient-to-r from-orange-500 via-orange-600 to-orange-400 bg-clip-text text-transparent">
              Transform
            </span>
          </h2>
          
          <p className="text-sm md:text-base lg:text-lg max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'var(--font-sans)', color: '#666666' }}>
            Transforming businesses across key sectors with innovative technology solutions.
          </p>
        </div>

        {/* Enhanced Slider Container */}
        <div className="relative max-w-7xl mx-auto">
          {/* Premium Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-30 bg-white/90 backdrop-blur-md hover:bg-white text-gray-700 hover:text-orange-600 p-4 rounded-2xl border border-gray-200 hover:border-orange-300 transition-all duration-300 hover:scale-110 shadow-lg group"
          >
            <ChevronLeft className="w-7 h-7 transition-colors duration-300" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-30 bg-white/90 backdrop-blur-md hover:bg-white text-gray-700 hover:text-orange-600 p-4 rounded-2xl border border-gray-200 hover:border-orange-300 transition-all duration-300 hover:scale-110 shadow-lg group"
          >
            <ChevronRight className="w-7 h-7 transition-colors duration-300" />
          </button>

          {/* Enhanced Slider Content */}
          <div className="overflow-hidden p-8">
            <div 
              className="flex transition-all duration-700 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {isMobile ? (
                // Mobile: Individual slides
                industries.map((industry, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="flex justify-center px-4">
                      <div
                        className="group relative p-6 cursor-pointer rounded-2xl border backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden w-full max-w-sm h-80 flex items-center justify-center bg-white/70 border-white/50 hover:border-orange-200"
                        style={{ transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)' }}
                      >
                        {/* Gradient Background */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${getGradient(index)} opacity-50 group-hover:opacity-80 transition-opacity duration-500`}></div>
                        
                        {/* Hover Glow Effect */}
                        <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${getHoverGradient(index)} blur-xl`}></div>

                        {/* Card Content */}
                        <div className="relative z-10 text-center">
                          <div className={`text-4xl mb-4 transform transition-all duration-500 ${
                            index === currentSlide ? 'scale-125 rotate-6' : 'scale-100'
                          }`}>
                            {industry.icon}
                          </div>

                          <h3 className={`font-bold text-lg mb-2 transition-all duration-300 ${
                            index === currentSlide 
                              ? 'text-white scale-105' 
                              : 'text-gray-800'
                          }`} style={{ fontFamily: 'var(--font-sans)' }}>
                            {industry.name}
                          </h3>

                          <p className={`text-sm leading-relaxed transition-all duration-500 ${
                            index === currentSlide 
                              ? 'text-white/90 opacity-100 translate-y-0' 
                              : 'text-gray-600 opacity-100 translate-y-0'
                          }`} style={{ fontFamily: 'var(--font-sans)' }}>
                            {industry.description}
                          </p>

                          {/* Hover Indicator */}
                          <div className={`mt-4 w-8 h-1 rounded-full mx-auto transition-all duration-500 ${
                            index === currentSlide 
                              ? 'bg-white w-16' 
                              : 'bg-gradient-to-r from-orange-300 to-orange-500 w-8'
                          }`}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                // Desktop: 3 slides with 3 items each
                Array.from({ length: 3 }).map((_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
                      {industries
                        .slice(slideIndex * 3, (slideIndex + 1) * 3)
                        .map((industry, index) => (
                        <div
                          key={index}
                          className="group relative p-6 cursor-pointer rounded-2xl border backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden h-80 flex items-center justify-center bg-white/70 border-white/50 hover:border-orange-200"
                          style={{ transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)' }}
                        >
                          {/* Gradient Background */}
                          <div className={`absolute inset-0 bg-gradient-to-br ${getGradient(slideIndex * 3 + index)} opacity-50 group-hover:opacity-80 transition-opacity duration-500`}></div>
                          
                          {/* Hover Glow Effect */}
                          <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${getHoverGradient(slideIndex * 3 + index)} blur-xl`}></div>

                          {/* Card Content */}
                          <div className="relative z-10 text-center">
                            <div className={`text-4xl mb-4 transform transition-all duration-500 ${
                              false ? 'scale-125 rotate-6' : 'scale-100'
                            }`}>
                              {industry.icon}
                            </div>

                            <h3 className={`font-bold text-lg mb-2 transition-all duration-300 ${
                              false 
                                ? 'text-white scale-105' 
                                : 'text-gray-800'
                            }`} style={{ fontFamily: 'var(--font-sans)' }}>
                              {industry.name}
                            </h3>

                            <p className={`text-sm leading-relaxed transition-all duration-500 ${
                              false 
                                ? 'text-white/90 opacity-100 translate-y-0' 
                                : 'text-gray-600 opacity-100 translate-y-0'
                            }`} style={{ fontFamily: 'var(--font-sans)' }}>
                              {industry.description}
                            </p>

                            {/* Hover Indicator */}
                            <div className={`mt-4 w-8 h-1 rounded-full mx-auto transition-all duration-500 ${
                              false 
                                ? 'bg-white w-16' 
                                : 'bg-gradient-to-r from-orange-300 to-orange-500 w-8'
                            }`}></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Compact Slide Indicators */}
          <div className="flex justify-center mt-6 md:mt-8 space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`relative transition-all duration-500 rounded-full w-2 h-2 md:w-3 md:h-3 ${
                  currentSlide === index 
                    ? 'bg-gradient-to-r from-orange-400 to-orange-600 shadow-lg shadow-orange-500/50 scale-110' 
                    : 'bg-gray-300 hover:bg-gray-400 hover:scale-110'
                }`}
              >
                {currentSlide === index && (
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full animate-pulse"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Compact View All Link */}
        <div className="text-center mt-6 md:mt-8">
          <button 
            onClick={() => navigate('/industries')}
            className="relative overflow-hidden bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg shadow-orange-200 hover:shadow-orange-300 transition-all duration-300 hover:scale-105 inline-flex items-center gap-2"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            <span className="relative z-10">View All Industries</span>
            <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSlider;