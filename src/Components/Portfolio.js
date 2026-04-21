import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const navigate = useNavigate();

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'ai', name: 'AI & Automation' },
    { id: 'mvp', name: 'MVP Development' },
    { id: 'mobile', name: 'Mobile App Development' },
    { id: 'blockchain', name: 'Blockchain' },
    { id: 'web', name: 'Web Projects' }
  ];

const projects = [
    // NEW CLICKABLE PRODUCTS (Featured at top)
    {
      id: 24,
      category: 'ai',
      title: 'Zikr AI',
      description: 'AI-Powered Islamic Spiritual Companion. Personalized spiritual guidance combining Quran, Duas, Prayer times, and AI assistance.',
      image: '/assets/products/zikr-ai/a landscape horizontaly longer image for zikrai.webp',
      tags: ['Islamic AI', 'Mobile App', 'Spiritual Tech'],
      clickable: true,
      route: '/product/zikr-ai'
    },
    {
      id: 25,
      category: 'ai',
      title: 'EDEN',
      description: 'AI Image & Video Generation Platform. Access 25+ AI models in one unified interface for creative content production.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80',
      tags: ['AI Generation', 'Content Creation', 'Web Platform'],
      clickable: true,
      route: '/product/eden'
    },
    {
      id: 26,
      category: 'mobile',
      title: 'Faith Coach',
      description: 'Daily Spiritual Growth Companion. Cross-platform app with AI-style mentor experiences, devotionals, and Round Table sessions.',
      image: '/assets/products/faith-coach/a landscape horizontaly longer image for faaithcoach.webp',
      tags: ['Faith Tech', 'Mentorship', 'Community'],
      clickable: true,
      route: '/product/faith-coach'
    },
    {
      id: 27,
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
      image: 'https://images.unsplash.com/photo-1507003211169-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80',
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
      category: 'ai',
      title: 'Multilingual Scheduling Voicebot',
      description: 'Smart voicebot handling appointment booking and management through natural conversation in multiple languages.',
      image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=800&q=80',
      tags: ['Voice AI', 'Scheduling', 'Multilingual']
    },
    {
      id: 8,
      category: 'ai',
      title: 'Sports Community Chatbot',
      description: 'Intelligent conversational assistant for sports communities with personalized recommendations and real-time engagement.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80',
      tags: ['Chatbot', 'Sports Tech', 'Community']
    },

    // Web Applications
    {
      id: 9,
      category: 'web',
      title: 'Real-Time Equipment Auction Platform',
      description: 'High-performance bidding platform for industrial equipment with real-time auctions and secure notifications.',
      image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=800&q=80',
      tags: ['Vue.js', 'Real-time', 'Auction']
    },
    {
      id: 10,
      category: 'web',
      title: 'AI-Driven Real Estate Portal',
      description: 'Modern real estate marketplace with location intelligence, mortgage calculators, and verified listing connections.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80',
      tags: ['React', 'Real Estate', 'AI-Driven']
    },
    {
      id: 11,
      category: 'web',
      title: 'P2P Auto Finance Platform',
      description: 'Canadian car loan marketplace with instant pre-approvals, loan comparison tools, and integrated KYC workflows.',
      image: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=800&q=80',
      tags: ['Fintech', 'P2P Lending', 'Auto Finance']
    },
    {
      id: 12,
      category: 'web',
      title: '3D Digital Cover Generator',
      description: 'Interactive marketing tool for creating 3D digital product covers using advanced 3D rendering and customization.',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
      tags: ['3D Graphics', 'Marketing Tools', 'Interactive']
    },
    {
      id: 13,
      category: 'web',
      title: 'Workforce Management Portal',
      description: 'Secure internal platform for recruiters with applicant tracking, job management, and analytics dashboards.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
      tags: ['HR Management', 'Analytics', 'Enterprise']
    },
    {
      id: 14,
      category: 'web',
      title: 'Health Intelligence Platform',
      description: 'Wellness analytics application with personalized health insights, activity tracking, and biometric visualization.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=800&q=80',
      tags: ['Health Tech', 'Analytics', 'Wellness']
    },

    // Mobile Applications
    {
      id: 15,
      category: 'mobile',
      title: 'AI Social Discovery App',
      description: 'Next-gen social app connecting users through location intelligence and behavioral matching with AI-powered safety features.',
      image: 'https://images.unsplash.com/photo-1611262588024-d12430b98920?auto=format&fit=crop&w=800&q=80',
      tags: ['Social Media', 'AI Matching', 'Location-based']
    },
    {
      id: 16,
      category: 'mobile',
      title: 'Logistics Management App',
      description: 'Cross-platform freight management platform connecting transporters and businesses with streamlined booking and tracking.',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=800&q=80',
      tags: ['React Native', 'Logistics', 'Fleet Management']
    },
    {
      id: 17,
      category: 'mobile',
      title: 'Insurance Claims Toolkit',
      description: 'Professional app for insurance adjusters offering quick claim estimation tools and streamlined processing workflows.',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80',
      tags: ['Insurance Tech', 'Claims Management', 'Professional Tools']
    },
    {
      id: 18,
      category: 'mobile',
      title: 'Digital Wallet & Merchant Services',
      description: 'Full-featured mobile wallet for merchants with secure transactions, real-time tracking, and biometric authentication.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80',
      tags: ['Fintech', 'Digital Wallet', 'Security']
    },
    {
      id: 19,
      category: 'mobile',
      title: 'SMS Analytics Platform',
      description: 'Comprehensive SMS gateway analytics with campaign tracking, delivery reports, and performance optimization tools.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      tags: ['SMS Marketing', 'Analytics', 'Communication']
    },
    {
      id: 20,
      category: 'mobile',
      title: 'Digital Business Card Platform',
      description: 'Contactless networking solution replacing traditional cards with dynamic digital profiles and QR-based sharing.',
      image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=800&q=80',
      tags: ['Networking', 'Digital Cards', 'QR Technology']
    },

    // MVP Development
    {
      id: 21,
      category: 'mvp',
      title: 'Business Intelligence MVP',
      description: 'Finance automation platform with cash flow forecasting, KPI dashboards, and investment readiness reports for SMBs.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      tags: ['Business Intelligence', 'Finance', 'SMB']
    },
    {
      id: 22,
      category: 'mvp',
      title: 'Global Consultant Marketplace',
      description: 'Platform connecting consultants with international clients featuring intelligent matching and multilingual support.',
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80',
      tags: ['Marketplace', 'Consulting', 'Global Platform']
    },
    {
      id: 23,
      category: 'mvp',
      title: 'Knowledge Sharing Platform',
      description: 'AI-powered content platform for expert-learner interactions with topic discussions and monetization features.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
      tags: ['Education Tech', 'Content Platform', 'AI-Powered']
    },
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const handleCardClick = (project) => {
    if (project.clickable && project.route) {
      navigate(project.route);
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 py-20" id="portfolio">
      {/* Clickable 100+ Projects stat */}
      
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 mt-14">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent mb-6 animate-pulse">
            Our Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our innovative solutions across AI, blockchain, mobile apps, and web development. 
            Each project showcases cutting-edge technology and exceptional user experience.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 hover:border-blue-300'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              onClick={() => handleCardClick(project)}
              className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-100 ${project.clickable ? 'cursor-pointer' : ''}`}
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden h-48 bg-gradient-to-br from-blue-100 to-purple-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-semibold text-gray-700 rounded-full">
                    {categories.find(cat => cat.id === project.category)?.name}
                  </span>
                </div>
                
                {/* New/Clickable Badge */}
                {project.clickable && (
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold rounded-full shadow-lg">
                      NEW
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 text-xs font-medium rounded-full border border-blue-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Button */}
                {/* <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-200">
                  View Details
                </button> */}
              </div>
            </div>
          ))}
        </div>
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
      `}</style>
    </section>
  );
};

export default Portfolio;