import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, Building2, CreditCard, ShoppingBag, BookOpen, Building, Scale, Cloud, Truck, Gamepad2, Globe, Sprout, Plane, Film, Factory, HandHeart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const IndustriesSlider = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(3);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Update items per slide based on screen size
  useEffect(() => {
    const updateItemsPerSlide = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setItemsPerSlide(1); // Mobile: 1 item
      } else if (width < 1024) {
        setItemsPerSlide(2); // Tablet: 2 items
      } else {
        setItemsPerSlide(3); // Desktop: 3 items
      }
    };

    updateItemsPerSlide();
    window.addEventListener('resize', updateItemsPerSlide);
    return () => window.removeEventListener('resize', updateItemsPerSlide);
  }, []);

  // All 15 industries from main Industries page
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

  // Group projects into slides based on itemsPerSlide
  const slides = [];
  for (let i = 0; i < industries.length; i += itemsPerSlide) {
    slides.push(industries.slice(i, i + itemsPerSlide));
  }

  const totalSlides = slides.length;

  // Reset current slide when itemsPerSlide changes
  useEffect(() => {
    if (currentSlide >= totalSlides) {
      setCurrentSlide(0);
    }
  }, [totalSlides, currentSlide]);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Touch handlers for swipe functionality
  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
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
    <section className="min-h-screen relative overflow-hidden py-16 sm:py-20 lg:py-24" style={{ background: 'var(--color-bg-dark-elegant)' }}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-200/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-blue-200/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-purple-200/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Compact Header Section */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-100/10 to-orange-50/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6 border border-orange-200/20 shadow-lg shadow-orange-100/20">
            <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
            <span className="text-orange-500 text-xs font-semibold" style={{ fontFamily: 'var(--font-sans)' }}>Featured Industries</span>
          </div>

          <h2
            className="mb-3 leading-tight"
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(3.5rem, 7vw, 4.5rem)',
              fontWeight: '800',
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

          <p className="text-sm md:text-base lg:text-lg max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'var(--font-sans)', color: 'var(--color-text-secondary-dark)' }}>
            Transforming businesses across key sectors with innovative technology solutions.
          </p>
        </div>

        {/* Enhanced Slider Container */}
        <div className="relative max-w-7xl mx-auto">
          {/* Premium Navigation Buttons - Hidden on mobile */}
          <button
            onClick={prevSlide}
            className="hidden sm:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-30 bg-white/90 backdrop-blur-md hover:bg-white text-gray-700 hover:text-orange-600 p-4 rounded-2xl border border-gray-200 hover:border-orange-300 transition-all duration-300 hover:scale-110 shadow-lg group"
          >
            <ChevronLeft className="w-7 h-7 transition-colors duration-300" />
          </button>

          <button
            onClick={nextSlide}
            className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-30 bg-white/90 backdrop-blur-md hover:bg-white text-gray-700 hover:text-orange-600 p-4 rounded-2xl border border-gray-200 hover:border-orange-300 transition-all duration-300 hover:scale-110 shadow-lg group"
          >
            <ChevronRight className="w-7 h-7 transition-colors duration-300" />
          </button>

          {/* Enhanced Slider Content */}
          <div className="overflow-hidden p-4 sm:p-6 lg:p-8">
            <div 
              className="flex transition-all duration-700 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {slides.map((slide, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className={`grid gap-4 sm:gap-6 lg:gap-8 ${
                    itemsPerSlide === 1 
                      ? 'grid-cols-1' 
                      : itemsPerSlide === 2 
                      ? 'grid-cols-1 sm:grid-cols-2' 
                      : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
                  }`}>
                    {slide.map((industry, itemIndex) => (
                      <motion.div
                        key={itemIndex}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        className="group relative p-6 cursor-pointer rounded-2xl border backdrop-blur-sm transition-all duration-500 hover:shadow-2xl overflow-hidden min-h-[320px] flex items-center justify-center elegant-card"
                        style={{ transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)' }}
                      >
                        {/* Gradient Background */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${getGradient(slideIndex * itemsPerSlide + itemIndex)} opacity-50 group-hover:opacity-80 transition-opacity duration-500`}></div>
                        
                        {/* Hover Glow Effect */}
                        <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${getHoverGradient(slideIndex * itemsPerSlide + itemIndex)} blur-xl`}></div>

                        {/* Card Content */}
                        <div className="relative z-10 text-center">
                          <motion.div 
                            className="mb-4 flex justify-center"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ duration: 0.3 }}
                          >
                            <industry.icon className="w-12 h-12 sm:w-16 sm:h-16" style={{ color: '#ff6b35' }} />
                          </motion.div>

                          <h3 className="font-bold text-lg sm:text-xl mb-2 transition-all duration-300 group-hover:text-orange-600" style={{ fontFamily: 'var(--font-sans)', color: 'var(--color-text-primary-dark)' }}>
                            {industry.name}
                          </h3>

                          <p className="text-sm leading-relaxed transition-all duration-500" style={{ fontFamily: 'var(--font-sans)', color: 'var(--color-text-secondary-dark)' }}>
                            {industry.description}
                          </p>

                          {/* Hover Indicator */}
                          <motion.div 
                            className="mt-4 h-1 rounded-full mx-auto bg-gradient-to-r from-orange-300 to-orange-500"
                            initial={{ width: 32 }}
                            whileHover={{ width: 64 }}
                            transition={{ duration: 0.3 }}
                          ></motion.div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Navigation Buttons */}
          {totalSlides > 1 && (
            <div className="flex sm:hidden justify-between items-center mt-4 px-4">
              <button
                onClick={prevSlide}
                className="bg-white hover:bg-orange-500 text-orange-500 hover:text-white rounded-full p-2 shadow-lg transition-all duration-300"
              >
                <ChevronLeft size={20} />
              </button>
              
              <span className="text-sm text-gray-600 font-medium">
                {currentSlide + 1} / {totalSlides}
              </span>
              
              <button
                onClick={nextSlide}
                className="bg-white hover:bg-orange-500 text-orange-500 hover:text-white rounded-full p-2 shadow-lg transition-all duration-300"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          )}

          {/* Compact Slide Indicators */}
          {totalSlides > 1 && (
            <div className="flex justify-center mt-6 md:mt-8 space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
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
          )}
        </div>

        {/* Compact View All Link */}
        <div className="text-center mt-8 sm:mt-10 lg:mt-12">
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

export default IndustriesSlider;