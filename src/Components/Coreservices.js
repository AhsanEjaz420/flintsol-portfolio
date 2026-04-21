import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Coreservices = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  const handleCardClick = (service) => {
    // Navigation logic - replace with your routing solution
    // For demo purposes, you can replace this with your actual navigation
    navigate(`/Core-services?service=${service}`);
  };

  const services = [
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
  ];

  const getServiceGradient = (serviceId) => {
    const gradients = {
      ai: 'linear-gradient(135deg, #9333ea, #2563eb)',
      web: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
      blockchain: 'linear-gradient(135deg, #eab308, #ea580c)',
      mobile: 'linear-gradient(135deg, #ec4899, #f43f5e)',
      mvp: 'linear-gradient(135deg, #f97316, #dc2626)',
      resource: 'linear-gradient(135deg, #059669, #0d9488)'
    };
    return gradients[serviceId] || 'linear-gradient(135deg, #6b7280, #4b5563)';
  };

  const getAccentColor = (serviceId) => {
    const colors = {
      ai: '#2563eb',
      web: '#06b6d4',
      blockchain: '#ea580c',
      mobile: '#f43f5e',
      mvp: '#dc2626',
      resource: '#0d9488'
    };
    return colors[serviceId] || '#6b7280';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Orange accent glow at bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-orange-500/5 via-transparent to-transparent pointer-events-none"></div>
      
      {/* Page Header */}
      <div className="pt-16 sm:pt-20 md:pt-24 lg:pt-28 pb-12 sm:pb-16 text-center px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-3 sm:mb-4 md:mb-6 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent leading-tight">
            Our Core Services
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            Empowering startups and enterprises through AI, automation, and full-stack development. 
            Digital transformation through innovation and cutting-edge technology solutions.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 lg:pb-24 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="bg-gradient-to-br from-slate-800/70 to-slate-900/70 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 cursor-pointer transition-all duration-300 border border-slate-700/50 hover:border-orange-500/50 group transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/20 min-h-[500px] sm:min-h-[550px] flex flex-col"
                style={{ animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both` }}
                onClick={() => {
                  if (service.id === 'mvp') {
                    navigate('/mvp-services');
                  } else {
                    handleCardClick(service.id);
                  }
                }}
              >
                {/* Icon and Title Section */}
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <span className="text-3xl sm:text-4xl lg:text-5xl">{service.icon}</span>
                  <div 
                    className="flex-1 h-1 rounded-full bg-gradient-to-r from-orange-400 to-orange-500"
                  ></div>
                </div>

                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 text-white group-hover:text-orange-400 transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed mb-6 sm:mb-8">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="flex-1 mb-6 sm:mb-8">
                  <ul className="space-y-3 sm:space-y-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-gray-200">
                        <div 
                          className="w-2 h-2 rounded-full flex-shrink-0 mt-2 bg-orange-500"
                        ></div>
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <button
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-full text-white font-semibold text-sm sm:text-base lg:text-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-orange-500/30 bg-gradient-to-r from-orange-500 to-orange-600 hover:shadow-lg hover:shadow-orange-500/30"
                  onClick={(e) => {
                    e.stopPropagation();
                    if (service.id === 'mvp') {
                      navigate('/mvp-services');
                    } else {
                      handleCardClick(service.id);
                    }
                  }}
                >
                  {service.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom styles for additional responsiveness and animations */}
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
        
        @media (max-width: 640px) {
          .grid {
            gap: 1rem;
          }
        }
        
        @media (min-width: 640px) and (max-width: 768px) {
          .grid {
            gap: 1.5rem;
          }
        }

        @media (min-width: 1280px) {
          .grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (min-width: 1536px) {
          .max-w-7xl {
            max-width: 90rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Coreservices;