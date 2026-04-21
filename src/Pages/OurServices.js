import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const OurServices = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  // Helper to handle card click
  const handleCardClick = (service) => {
    if (service === "mvp") {
      navigate("/mvp-services");
    } else {
      navigate(`/Core-services?service=${service}`);
      // console.log(`Navigating to service: ${service}`);
    }
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

  const portfolioItems = [
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
  ];

  const whyChooseFeatures = [
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
  ];

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0a0e27 0%, #1a1a2e 50%, #16213e 100%)',
      color: '#ffffff'
    }}
    >
      {/* Page Header */}
      <div style={{
        paddingTop: '100px',
        paddingBottom: '60px',
        textAlign: 'center'
      }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          padding: '0 20px'
        }}>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
            fontWeight: '800',
            marginBottom: '20px',
            background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Our Core Services
          </h1>
          <p style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
            color: '#b0b3c1',
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Empowering startups and enterprises through AI, automation, and full-stack development. 
            Digital transformation through innovation and cutting-edge technology solutions.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <section style={{ padding: '0 20px 80px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '30px',
            marginBottom: '60px',
            // Media queries using CSS custom properties
            '@media (min-width: 1200px)': {
              gridTemplateColumns: 'repeat(3, 1fr)'
            },
            '@media (min-width: 768px) and (max-width: 1199px)': {
              gridTemplateColumns: 'repeat(2, 1fr)'
            },
            '@media (max-width: 767px)': {
              gridTemplateColumns: '1fr'
            }
          }}>
            {services.map((service, index) => (
              <div
                key={service.id}
                style={{
                  background: 'linear-gradient(145deg, #1e2139 0%, #252845 100%)',
                  borderRadius: '20px',
                  padding: 'clamp(20px, 5vw, 40px)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  position: 'relative',
                  overflow: 'hidden',
                  transform: 'translateY(0)',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
                  minHeight: '500px',
                  display: 'flex',
                  flexDirection: 'column'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.4)';
                  e.currentTarget.style.borderColor = '#ff6b35';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                }}
              >
                <div style={{
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                  marginBottom: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '15px',
                  flexWrap: 'wrap'
                }}>
                  <span>{service.icon}</span>
                  <div style={{
                    width: 'clamp(40px, 8vw, 60px)',
                    height: '4px',
                    background: service.id === 'ai' ? 'linear-gradient(90deg, #9333ea, #2563eb)' :
                               service.id === 'mvp' ? 'linear-gradient(90deg, #f97316, #dc2626)' :
                               service.id === 'resource' ? 'linear-gradient(90deg, #059669, #0d9488)' :
                               service.id === 'web' ? 'linear-gradient(90deg, #3b82f6, #06b6d4)' :
                               'linear-gradient(90deg, #ec4899, #f43f5e)',
                    borderRadius: '2px'
                  }}></div>
                </div>
                <h3 style={{
                  fontSize: 'clamp(1.3rem, 3vw, 1.8rem)',
                  fontWeight: '700',
                  marginBottom: '15px',
                  color: '#ffffff'
                }}>
                  {service.title}
                </h3>
                <p style={{
                  fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                  color: '#b0b3c1',
                  lineHeight: '1.6',
                  marginBottom: '25px'
                }}>
                  {service.description}
                </p>
                <ul style={{
                  listStyle: 'none',
                  padding: '0',
                  margin: '0 0 30px 0',
                  flex: '1'
                }}>
                  {service.features.map((feature, idx) => (
                    <li key={idx} style={{
                      padding: '8px 0',
                      color: '#d1d5db',
                      fontSize: 'clamp(0.85rem, 1.8vw, 0.95rem)',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '10px'
                    }}>
                      <span style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        background: '#ff6b35',
                        flexShrink: 0,
                        marginTop: '8px'
                      }}></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  style={{
                    background: service.id === 'ai' ? 'linear-gradient(135deg, #9333ea, #2563eb)' :
                               service.id === 'mvp' ? 'linear-gradient(135deg, #f97316, #dc2626)' :
                               service.id === 'resource' ? 'linear-gradient(135deg, #059669, #0d9488)' :
                               service.id === 'web' ? 'linear-gradient(135deg, #3b82f6, #06b6d4)' :
                               'linear-gradient(135deg, #ec4899, #f43f5e)',
                    border: 'none',
                    borderRadius: '50px',
                    padding: 'clamp(10px, 2vw, 12px) clamp(20px, 4vw, 30px)',
                    color: '#ffffff',
                    fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    textTransform: 'none',
                    width: '100%',
                    maxWidth: '200px'
                  }}
                  onClick={() => {
                      handleCardClick(service.id);
                    
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)';
                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(255, 107, 53, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  {service.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Showcase */}
      <section style={{
        padding: '80px 20px',
        background: 'rgba(240, 240, 240, 1)',
        backdropFilter: 'blur(10px)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 2.8rem)',
              fontWeight: '700',
              marginBottom: '20px',
              background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Featured Projects
            </h2>
            <p style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
              color: '#212c5dff',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Showcasing our expertise across different industries and technologies
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'clamp(20px, 4vw, 30px)'
          }}>
            {portfolioItems.map((item, index) => (
              <div key={index} style={{
                background: 'linear-gradient(145deg, #1a1d35 0%, #252845 100%)',
                borderRadius: '15px',
                padding: 'clamp(20px, 4vw, 30px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.borderColor = 'rgba(255, 107, 53, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
              }}>
                <div style={{
                  fontSize: 'clamp(0.7rem, 1.5vw, 0.8rem)',
                  color: '#ff6b35',
                  fontWeight: '600',
                  marginBottom: '10px',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}>
                  {item.category}
                </div>
                <h4 style={{
                  fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
                  fontWeight: '600',
                  marginBottom: '15px',
                  color: '#ffffff'
                }}>
                  {item.title}
                </h4>
                <p style={{
                  color: '#b0b3c1',
                  lineHeight: '1.6',
                  fontSize: 'clamp(0.85rem, 1.8vw, 0.95rem)'
                }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
         <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 2.8rem)',
              fontWeight: '700',
              marginBottom: '20px',
              marginTop: '60px',
              background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Why Choose Flint Sol
            </h2>
            <p style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
             color: '#212c5dff',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              We combine technical expertise with innovative thinking to deliver solutions that exceed expectations
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: 'clamp(20px, 4vw, 30px)'
          }}>
            {whyChooseFeatures.map((feature, index) => (
              <div key={index} style={{
                textAlign: 'center',
                padding: 'clamp(30px, 6vw, 40px) clamp(20px, 4vw, 30px)',
                background: 'linear-gradient(145deg, #1a1d35 0%, #252845 100%)',
                borderRadius: '15px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.borderColor = 'rgba(255, 107, 53, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
              }}>
                <div style={{
                  fontSize: 'clamp(2.5rem, 5vw, 3rem)',
                  marginBottom: '20px'
                }}>
                  {feature.icon}
                </div>
                <h4 style={{
                  fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
                  fontWeight: '600',
                  marginBottom: '15px',
                  color: '#ffffff'
                }}>
                  {feature.title}
                </h4>
                <p style={{
                  color: '#b0b3c1',
                  lineHeight: '1.6',
                  fontSize: 'clamp(0.85rem, 1.8vw, 0.95rem)'
                }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom CSS for better responsive grid control */}
      <style>{`
        @media (min-width: 1200px) {
          .services-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        @media (min-width: 768px) and (max-width: 1199px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 767px) {
          .services-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};

export default OurServices;