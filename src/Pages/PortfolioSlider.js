import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles } from 'lucide-react';

const PortfolioSlider = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [itemsPerSlide, setItemsPerSlide] = useState(3);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

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
    navigate('/portfolio');
  };

  const handleCardClick = (project) => {
    if (project.clickable && project.route) {
      navigate(project.route);
    }
  };

  return (
    <section className="py-20" style={{ background: '#F9FAFB' }}>
    <div className="max-w-7xl mx-auto px-6">
      {/* Header: Premium Centered Layout */}
      <div className="text-center mb-16">
        <h2 className="text-black font-extrabold tracking-tight mb-4" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)' }}>
          Featured <span style={{ color: '#FF6B35' }}>Projects</span>
        </h2>
        <div className="w-20 h-1.5 bg-orange-500 mx-auto mb-6 rounded-full"></div>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
          Pushing the boundaries of AI and Development with precision-engineered solutions.
        </p>
      </div>

      {/* Slider Container: Removed outer borders for a cleaner look */}
      <div className="relative group">
        
        {/* Navigation - Floating outside the cards for better UX */}
        {totalSlides > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute -left-6 top-1/2 -translate-y-1/2 z-20 bg-white border border-gray-100 text-black hover:bg-black hover:text-white rounded-full p-4 shadow-xl transition-all duration-300 hover:scale-110 hidden lg:flex items-center justify-center"
            >
              <ChevronLeft size={24} />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute -right-6 top-1/2 -translate-y-1/2 z-20 bg-white border border-gray-100 text-black hover:bg-black hover:text-white rounded-full p-4 shadow-xl transition-all duration-300 hover:scale-110 hidden lg:flex items-center justify-center"
            >
              <ChevronRight size={24} />
            </button>
          </>
        )}

        <div className="overflow-hidden py-4">
          <div 
            className="flex transition-transform duration-700 cubic-bezier(0.4, 0, 0.2, 1)"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {slides.map((slide, slideIndex) => (
              <div key={slideIndex} className="w-full flex-shrink-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-2">
                  {slide.map((project) => (
                    <div
                      key={project.id}
                      onClick={() => project.clickable && navigate(project.route)}
                      className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 transition-all duration-500 hover:border-orange-500/50 cursor-pointer"
                      style={{ 
                        boxShadow: '0 10px 30px -15px rgba(0,0,0,0.1)',
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 20px 40px -15px rgba(255, 107, 53, 0.15)'}
                      onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 10px 30px -15px rgba(0,0,0,0.1)'}
                    >
                      {/* Image Section */}
                      <div className="relative h-56 overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
                        
                        {/* Top Badges */}
                        <div className="absolute top-4 left-4 flex gap-2">
                          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-black text-[10px] font-bold uppercase tracking-widest rounded-md border border-gray-100">
                            {project.category === 'ai' ? 'AI & Automation' : 
                             project.category === 'web' ? 'Web Development' : 
                             project.category === 'mobile' ? 'Mobile App' : project.category}
                          </span>
                        </div>

                        {project.clickable && (
                          <div className="absolute top-4 right-4">
                            <span className="flex items-center gap-1.5 px-3 py-1 bg-orange-500 text-white text-[10px] font-bold rounded-md shadow-lg">
                              <Sparkles size={12} /> NEW
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Content Section */}
                      <div className="p-8">
                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-500 transition-colors duration-300">
                          {project.title}
                        </h3>
                        <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-2">
                          {project.description}
                        </p>
                        
                        {/* Consistent Tag System */}
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag, i) => (
                            <span key={i} className="text-[11px] font-semibold text-gray-400 border border-gray-100 px-2 py-1 rounded-md uppercase tracking-wider group-hover:border-orange-100 group-hover:text-orange-400 transition-colors">
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
        </div>

        {/* Indicators: Minimalist Line Style */}
        {totalSlides > 1 && (
          <div className="flex justify-center mt-12 space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-1.5 transition-all duration-500 rounded-full ${
                  index === currentSlide ? 'w-12 bg-orange-500' : 'w-4 bg-gray-200 hover:bg-gray-300'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* View All: High-Contrast Premium Button */}
      <div className="text-center mt-16">
        <button
          onClick={() => navigate('/portfolio')}
          className="inline-flex items-center gap-3 bg-black text-white px-10 py-4 rounded-full font-bold hover:bg-orange-500 transition-all duration-300 hover:shadow-[0_10px_20px_rgba(255,107,53,0.3)] transform hover:-translate-y-1"
        >
          VIEW ALL INNOVATIONS
          <ArrowRight size={20} />
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
      .line-clamp-2 {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
    `}</style>
  </section>
);
};

export default PortfolioSlider;