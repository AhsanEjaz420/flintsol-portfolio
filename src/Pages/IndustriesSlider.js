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

  return (
    <section className="min-h-screen relative overflow-hidden flex flex-col">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        {/* Dynamic Floating Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-36 h-36 bg-orange-500/10 rounded-full blur-2xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-green-500/10 rounded-full blur-xl animate-pulse delay-3000"></div>
        
        {/* Enhanced Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        </div>
        
        {/* Multiple Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-slate-900/40"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/30 via-transparent to-slate-900/30"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 flex flex-col flex-1 justify-center py-8">
        {/* Compact Header Section */}
        <div className="text-center mb-6 md:mb-8">
          <div className="inline-flex items-center bg-blue-600/20 backdrop-blur-sm rounded-full px-4 py-2 mb-4 border border-blue-400/30">
            <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></div>
            <span className="text-blue-300 text-xs font-medium tracking-wide">Featured Industries</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 leading-tight">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">
              Industries We Revolutionize
            </span>
          </h2>
          
          <p className="text-sm md:text-base lg:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Transforming businesses across key sectors with innovative technology solutions.
          </p>
        </div>

        {/* Enhanced Slider Container */}
        <div className="relative max-w-7xl mx-auto">
          {/* Premium Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-30 bg-gradient-to-r from-slate-800/90 to-slate-700/90 backdrop-blur-md hover:from-slate-700/90 hover:to-slate-600/90 text-white p-4 rounded-2xl border border-slate-600/50 hover:border-blue-400/60 transition-all duration-300 hover:scale-110 shadow-2xl shadow-slate-900/50 group"
          >
            <ChevronLeft className="w-7 h-7 group-hover:text-blue-400 transition-colors duration-300" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-30 bg-gradient-to-r from-slate-800/90 to-slate-700/90 backdrop-blur-md hover:from-slate-700/90 hover:to-slate-600/90 text-white p-4 rounded-2xl border border-slate-600/50 hover:border-blue-400/60 transition-all duration-300 hover:scale-110 shadow-2xl shadow-slate-900/50 group"
          >
            <ChevronRight className="w-7 h-7 group-hover:text-blue-400 transition-colors duration-300" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>

          {/* Enhanced Slider Content */}
          <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-slate-800/20 to-slate-900/20 backdrop-blur-sm border border-slate-700/30 p-8">
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
                        className="group relative bg-gradient-to-br from-slate-800/70 to-slate-900/70 backdrop-blur-md rounded-3xl p-8 border border-slate-700/50 hover:border-blue-400/60 transition-all duration-500 cursor-pointer hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 w-full max-w-sm h-80 flex items-center justify-center"
                      >
                        {/* Enhanced Glow Effects */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        {/* Card Content */}
                        <div className="relative z-10 text-center flex flex-col items-center justify-center h-full">
                          {/* Icon and Title Container - Moves up more on hover */}
                          <div className="group-hover:-translate-y-8 transition-all duration-500 ease-out">
                            <div className="text-6xl mb-6 group-hover:scale-110 transition-all duration-500 filter drop-shadow-lg flex items-center justify-center">
                              {industry.icon}
                            </div>
                            
                            <h3 className="text-white font-bold text-2xl mb-4 group-hover:text-blue-300 transition-colors duration-300 text-center">
                              {industry.name}
                            </h3>
                          </div>
                          
                          {/* Description - Appears below on hover with full text */}
                          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full px-4 flex items-center justify-center">
                            <p className="text-gray-400 text-xs leading-tight opacity-0 group-hover:opacity-100 group-hover:translate-y-16 translate-y-0 transition-all duration-700 delay-200 text-center whitespace-nowrap">
                              {industry.description}
                            </p>
                          </div>

                          {/* Interactive Element - Appears right below title on hover */}
                          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-12 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-300">
                            <div className="w-12 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                          </div>
                        </div>

                        {/* Enhanced Hover Border Effect */}
                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-400/30 via-purple-400/30 to-orange-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10 blur-sm"></div>
                        
                        {/* Corner Accents */}
                        <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-blue-400/0 group-hover:border-blue-400/60 transition-all duration-500 rounded-tr-xl"></div>
                        <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-purple-400/0 group-hover:border-purple-400/60 transition-all duration-500 rounded-bl-xl"></div>
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
                          className="group relative bg-gradient-to-br from-slate-800/70 to-slate-900/70 backdrop-blur-md rounded-3xl p-8 border border-slate-700/50 hover:border-blue-400/60 transition-all duration-500 cursor-pointer hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 h-80 flex items-center justify-center"
                        >
                          {/* Enhanced Glow Effects */}
                          <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
                          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                          
                          {/* Card Content */}
                          <div className="relative z-10 text-center flex flex-col items-center justify-center h-full">
                            {/* Icon and Title Container - Moves up more on hover */}
                            <div className="group-hover:-translate-y-8 transition-all duration-500 ease-out">
                              <div className="text-6xl mb-6 group-hover:scale-110 transition-all duration-500 filter drop-shadow-lg flex items-center justify-center">
                                {industry.icon}
                              </div>
                              
                              <h3 className="text-white font-bold text-2xl mb-4 group-hover:text-blue-300 transition-colors duration-300 text-center">
                                {industry.name}
                              </h3>
                            </div>
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-12 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-300">
                              <div className="w-12 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                            </div>
                            
                          {/* Description - Appears below on hover with full text */}
                          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full px-4 flex items-center justify-center">
                            <p className="text-gray-400 text-xs leading-tight opacity-0 group-hover:opacity-100 group-hover:translate-y-16 translate-y-0 transition-all duration-700 delay-200 text-center whitespace-nowrap">
                              {industry.description}
                            </p>
                          </div>
                          </div>

                          {/* Enhanced Hover Border Effect */}
                          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-400/30 via-purple-400/30 to-orange-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10 blur-sm"></div>
                          
                          {/* Corner Accents */}
                          <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-blue-400/0 group-hover:border-blue-400/60 transition-all duration-500 rounded-tr-xl"></div>
                          <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-purple-400/0 group-hover:border-purple-400/60 transition-all duration-500 rounded-bl-xl"></div>
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
                    ? 'bg-gradient-to-r from-blue-400 to-purple-400 shadow-lg shadow-blue-500/50 scale-110' 
                    : 'bg-slate-600 hover:bg-slate-500 hover:scale-110'
                }`}
              >
                {currentSlide === index && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Compact View All Link */}
        <div className="text-center mt-6 md:mt-8">
          <button 
            onClick={() => navigate('/industries')}
            className="group inline-flex items-center gap-2 text-blue-300 hover:text-orange-400 transition-all duration-300 text-sm md:text-base font-medium"
          >
            <span>View All Industries</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSlider;