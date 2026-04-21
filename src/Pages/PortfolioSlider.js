import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles } from 'lucide-react';

const PortfolioSlider = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [itemsPerSlide, setItemsPerSlide] = useState(3);

  const projects = [
    // NEW CLICKABLE PRODUCTS (Featured at top)
    {
      id: 10,
      category: 'ai',
      title: 'Zikr AI',
      description: 'AI-Powered Islamic Spiritual Companion. Personalized spiritual guidance combining Quran, Duas, Prayer times, and AI assistance.',
      image: '/assets/products/zikr-ai/a landscape horizontaly longer image for zikrai.webp',
      tags: ['Islamic AI', 'Mobile App', 'Spiritual Tech'],
      clickable: true,
      route: '/product/zikr-ai'
    },
    {
      id: 11,
      category: 'ai',
      title: 'EDEN',
      description: 'AI Image & Video Generation Platform. Access 25+ AI models in one unified interface for creative content production.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80',
      tags: ['AI Generation', 'Content Creation', 'Web Platform'],
      clickable: true,
      route: '/product/eden'
    },
    {
      id: 12,
      category: 'mobile',
      title: 'Faith Coach',
      description: 'Daily Spiritual Growth Companion. Cross-platform app with AI-style mentor experiences, devotionals, and Round Table sessions.',
      image: '/assets/products/faith-coach/a landscape horizontaly longer image for faaithcoach.webp',
      tags: ['Faith Tech', 'Mentorship', 'Community'],
      clickable: true,
      route: '/product/faith-coach'
    },
    {
      id: 13,
      category: 'ai',
      title: 'NxtGenAI',
      description: 'Central Marketplace for Practical AI. 23+ AI tools and agents for content, business, marketing, and productivity.',
      image: '/assets/products/nxtgenai/nextgenAi home page ss.webp',
      tags: ['AI Marketplace', 'Business Tools', 'SaaS'],
      clickable: true,
      route: '/product/nxtgenai'
    },

    // AI & Automation Projects
    {
      id: 1,
      category: 'ai',
      title: 'Motion Detection Intelligence System',
      description: 'AI-powered surveillance platform that detects, analyzes, and alerts on motion events in real-time for enhanced security monitoring.',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80',
      tags: ['Computer Vision', 'AI/ML', 'Real-time']
    },
    {
      id: 2,
      category: 'ai',
      title: 'AI Meeting Assistant Platform',
      description: 'Multilingual meeting recorder that extracts key points, generates summaries, and automates follow-up communications.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80',
      tags: ['NLP', 'Automation', 'Multilingual']
    },
    {
      id: 3,
      category: 'ai',
      title: 'Intelligent ERP Co-Pilot',
      description: 'Next-gen ERP system with AI chatbot for real-time business insights and natural language navigation across modules.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      tags: ['ERP', 'AI Assistant', 'Business Intelligence']
    },
    {
      id: 4,
      category: 'ai',
      title: 'Recruitment Voice Agent',
      description: 'Advanced AI video interview platform with voice agents, cheat detection through eye tracking, and automated screening.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
      tags: ['Voice AI', 'HR Tech', 'Computer Vision']
    },
    {
      id: 5,
      category: 'ai',
      title: 'Legal Document Analyzer',
      description: 'LegalTech platform using AI for document summarization, clause detection, and legal workflow automation.',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80',
      tags: ['Legal AI', 'NLP', 'Document Analysis']
    },
    {
      id: 6,
      category: 'ai',
      title: 'Mental Health AI Companion',
      description: 'AI-powered mental health support platform providing personalized resources and 24/7 emotional well-being assistance.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=800&q=80',
      tags: ['Healthcare AI', 'Mental Health', 'Personalization']
    },
    {
      id: 7,
      category: 'web',
      title: 'Real-Time Equipment Auction Platform',
      description: 'High-performance bidding platform for industrial equipment with real-time auctions and secure notifications.',
      image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=800&q=80',
      tags: ['Vue.js', 'Real-time', 'Auction']
    },
    {
      id: 8,
      category: 'web',
      title: 'AI-Driven Real Estate Portal',
      description: 'Modern real estate marketplace with location intelligence, mortgage calculators, and verified listing connections.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80',
      tags: ['React', 'Real Estate', 'AI-Driven']
    },
    {
      id: 9,
      category: 'mobile',
      title: 'AI Social Discovery App',
      description: 'Next-gen social app connecting users through location intelligence and behavioral matching with AI-powered safety features.',
      image: 'https://images.unsplash.com/photo-1611262588024-d12430b98920?auto=format&fit=crop&w=800&q=80',
      tags: ['Social Media', 'AI Matching', 'Location-based']
    },
  ];

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

  // Group projects into slides based on itemsPerSlide
  const slides = [];
  for (let i = 0; i < projects.length; i += itemsPerSlide) {
    slides.push(projects.slice(i, i + itemsPerSlide));
  }

  const totalSlides = slides.length;

  // Reset current slide when itemsPerSlide changes
  useEffect(() => {
    if (currentSlide >= totalSlides) {
      setCurrentSlide(0);
    }
  }, [totalSlides, currentSlide]);

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying && totalSlides > 1) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, totalSlides]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const handleViewAll = () => {
    // In a real app, this would use React Router
    window.location.href = '/portfolio';
  };

  const handleCardClick = (project) => {
    if (project.clickable && project.route) {
      navigate(project.route);
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-100 to-slate-50 py-8 sm:py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 sm:mb-3">
            Featured Projects
            <div className="h-1 w-24 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto mt-3 rounded-full"></div>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Explore our latest innovations in AI, web development, and mobile applications. 
            Each project represents cutting-edge technology and exceptional user experience.
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-white/70 backdrop-blur-lg p-4 sm:p-6 lg:p-8 shadow-2xl border border-gray-200">
          {/* Navigation Buttons - Hidden on mobile, visible on larger screens */}
          {totalSlides > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="hidden sm:block absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-orange-500 text-orange-500 hover:text-white rounded-full p-2 sm:p-3 shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={currentSlide === 0}
              >
                <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
              </button>
              
              <button
                onClick={nextSlide}
                className="hidden sm:block absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-orange-500 text-orange-500 hover:text-white rounded-full p-2 sm:p-3 shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={currentSlide === totalSlides - 1}
              >
                <ChevronRight size={20} className="sm:w-6 sm:h-6" />
              </button>
            </>
          )}

          {/* Mobile Navigation Buttons */}
          {totalSlides > 1 && (
            <div className="flex sm:hidden justify-between items-center mb-4">
              <button
                onClick={prevSlide}
                className="bg-white hover:bg-orange-500 text-orange-500 hover:text-white rounded-full p-2 shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={currentSlide === 0}
              >
                <ChevronLeft size={20} />
              </button>
              
              <span className="text-sm text-gray-600 font-medium">
                {currentSlide + 1} / {totalSlides}
              </span>
              
              <button
                onClick={nextSlide}
                className="bg-white hover:bg-orange-500 text-orange-500 hover:text-white rounded-full p-2 shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={currentSlide === totalSlides - 1}
              >
                <ChevronRight size={20} />
              </button>
            </div>
          )}

          {/* Slides */}
          <div 
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
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
                  {slide.map((project, projectIndex) => (
                    <div
                      key={project.id}
                      onClick={() => handleCardClick(project)}
                      className={`group bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-200 hover:border-orange-500 ${project.clickable ? 'cursor-pointer' : ''}`}
                      style={{
                        animation: `fadeInUp 0.6s ease-out ${projectIndex * 0.2}s both`
                      }}
                    >
                      {/* Image Container */}
                      <div className="relative overflow-hidden h-40 sm:h-48 lg:h-48 bg-gradient-to-br from-orange-50 to-orange-100">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        
                        {/* Category Badge */}
                        <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                          <span className="px-2 py-1 sm:px-3 sm:py-1 bg-orange-500 text-white text-xs font-semibold rounded-full capitalize shadow-md">
                            {project.category === 'ai' ? 'AI & Automation' : 
                             project.category === 'web' ? 'Web Development' : 
                             project.category === 'mobile' ? 'Mobile App' : project.category}
                          </span>
                        </div>
                        
                        {/* New/Clickable Badge */}
                        {project.clickable && (
                          <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
                            <span className="px-2 py-1 sm:px-3 sm:py-1 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs font-bold rounded-full shadow-lg flex items-center gap-1">
                              <Sparkles size={12} />
                              NEW
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Content */}
                      <div className="p-4 sm:p-5 lg:p-6">
                        <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3 group-hover:text-orange-500 transition-colors duration-300 line-clamp-2">
                          {project.title}
                        </h3>
                        <p className="text-gray-600 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-sm line-clamp-3">
                          {project.description}
                        </p>
                        
                        {/* Tech Tags */}
                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                          {project.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="px-2 py-0.5 sm:px-3 sm:py-1 bg-orange-50 text-orange-600 text-xs font-medium rounded-full border border-orange-200"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Slide Indicators */}
          {totalSlides > 1 && (
            <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`slide-indicator transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-gradient-to-r from-orange-500 to-orange-600 scale-110'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* View All Button */}
        <div className="text-center mt-8 sm:mt-10 lg:mt-12">
          <button
            onClick={handleViewAll}
            className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold text-base sm:text-lg shadow-lg hover:shadow-2xl hover:shadow-orange-500/30 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
          >
            <span className="flex items-center justify-center gap-2 sm:gap-3">
              View All Projects
              <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={18} />
            </span>
          </button>
        </div>

        {/* Auto-play Toggle - Hidden on mobile for cleaner UI */}
        {/* <div className="hidden sm:block text-center mt-6">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="text-sm text-gray-500 hover:text-gray-700 transition-colors duration-300"
          >
            {isAutoPlaying ? '⏸️ Pause Auto-play' : '▶️ Resume Auto-play'}
          </button>
        </div> */}
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        /* Ensure slide indicators are perfectly circular */
        .slide-indicator {
          width: 12px !important;
          height: 12px !important;
          border-radius: 50% !important;
          min-width: 12px !important;
          min-height: 12px !important;
        }
      `}</style>
    </section>
  );
};

export default PortfolioSlider;