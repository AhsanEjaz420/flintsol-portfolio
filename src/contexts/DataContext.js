import React, { createContext, useContext } from 'react';

const DataContext = createContext();

// Exact data from Coreservices.js and OurServices.js - no changes to content
export const data = {
  services: [
    {
      id: "ai",
      icon: "🤖",
      title: "AI & Automation",
      description: "Transform your business with our AI-driven solutions, from intelligent chatbots to automated workflows that streamline operations.",
      features: [
        "LegalEaseAI – LegalTech automation",
        "AI Voice Agent – Voice-driven calendar booking", 
        "PocketMate – AI mental health chatbot",
        "TexMed – AI-powered medical billing",
        "Social Media Automation – AI-driven content scheduler"
      ],
      buttonText: "Explore AI Solutions",
      gradient: "from-purple-600 to-blue-600"
    },
    {
      id: "web",
      icon: "💻",
      title: "Web Development",
      description: "Full-stack web development solutions using cutting-edge technologies to create scalable, responsive applications.",
      features: [
        "EVBids (Vue + Docker) – Auction Platform",
        "VertikalRMS (React/Node) – SaaS HRM",
        "Cervelo & Dopper – eCommerce platforms",
        "Trulia & PropertyNest – Real Estate Portals",
        "Custom Web Applications & APIs"
      ],
      buttonText: "Start Web Project",
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      id: "blockchain",
      icon: "⛓️",
      title: "Blockchain Development",
      description: "Innovative blockchain solutions for secure, transparent, and efficient transactions.",
      features: [
        "Smart Contract Development",
        "Decentralized Application (DApp) Development",
        "Blockchain Integration Services",
        "Tokenization & ICO Services",
        "Custom Web Applications & APIs"
      ],
      buttonText: "Start Project",
      gradient: "from-yellow-500 to-orange-600"
    },
    {
      id: "mobile",
      icon: "📱",
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.",
      features: [
        "Laari (React Native) – Freight & Logistics",
        "Claim Toolkit – Insurance workflow tool",
        "Greencard Payments – Digital wallet system",
        "Gort, TrackHero, Chore Tools – Lifestyle apps",
        "Cross-platform Development Solutions"
      ],
      buttonText: "Launch Mobile App",
      gradient: "from-pink-500 to-rose-600"
    },
    {
      id: "mvp",
      icon: "⚡",
      title: "MVP Development",
      description: "Rapidly validate your ideas with our MVP development service. Get to market faster with lean, scalable solutions.",
      features: [
        "Rapid Prototyping & Validation",
        "Market-Ready Minimum Viable Products",
        "User-Centric Design & Development",
        "Scalable Architecture Foundation",
        "Agile Development Methodology"
      ],
      buttonText: "Build Your MVP",
      gradient: "from-orange-500 to-red-600"
    },
    {
      id: "resource",
      icon: "👨‍💻",
      title: "Resource Augmentation",
      description: "Scale your team instantly with our skilled tech professionals to accelerate project delivery and boost productivity.",
      features: [
        "Frontend & Backend Developers",
        "UI/UX Designers & Product Managers",
        "QA Engineers & Test Automation",
        "DevOps & Cloud Infrastructure Specialists",
        "Flexible Engagement Models"
      ],
      buttonText: "Augment Your Team",
      gradient: "from-green-500 to-teal-600"
    },
  ],
  
  portfolioItems: [
    {
      title: "LegalEaseAI",
      description: "AI-powered legal document automation platform that streamlines legal workflows and reduces processing time by 70%.",
      category: "AI & Legal Tech"
    },
    {
      title: "EVBids Auction Platform",
      description: "Comprehensive auction platform built with Vue.js and Docker, handling thousands of concurrent users and real-time bidding.",
      category: "Web Platform"
    },
    {
      title: "Laari Logistics App",
      description: "React Native freight and logistics mobile application connecting drivers with cargo owners across multiple regions.",
      category: "Mobile App"
    },
    {
      title: "PocketMate Mental Health",
      description: "AI-driven mental health chatbot providing 24/7 support and personalized therapy recommendations.",
      category: "AI & Healthcare"
    },
    {
      title: "VertikalRMS",
      description: "Full-featured SaaS HRM system built with React and Node.js, serving enterprise clients worldwide.",
      category: "SaaS Platform"
    },
    {
      title: "Greencard Payments",
      description: "Secure digital wallet system with advanced payment processing and multi-currency support.",
      category: "FinTech"
    }
  ],
  
  whyChooseFeatures: [
    {
      icon: "🚀",
      title: "Rapid Delivery",
      description: "Fast-track your delivery cycles with our agile development approach and efficient project management."
    },
    {
      icon: "🎯",
      title: "AI-First Approach",
      description: "Leverage cutting-edge AI technologies to automate processes and gain competitive advantages."
    },
    {
      icon: "💡",
      title: "Full-stack Excellence",
      description: "Complete end-to-end solutions from concept to deployment, covering all aspects of development."
    },
    {
      icon: "🌍",
      title: "Global Reach",
      description: "Serving clients worldwide with 24/7 support and international development standards."
    }
  ]
};

export const DataProvider = ({ children }) => {
  return (
    <DataContext.Provider value={data}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within DataProvider');
  }
  return context;
};
