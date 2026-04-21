import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useData } from "../contexts/DataContext";
import { useScrollAnimation } from "../utils/useScrollAnimation";

const Coreservices = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  const { services } = useData();
  const handleCardClick = (service) => {
    // Navigation logic - replace with your routing solution
    // For demo purposes, you can replace this with your actual navigation
    navigate(`/Core-services?service=${service}`);
  };

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

  const [sectionRef, isSectionVisible] = useScrollAnimation(0.1);

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 50%, #F9F9F7 100%)',
      color: '#121D1A',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Animated Background Elements */}
      <div style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: '10%',
          right: '5%',
          width: '350px',
          height: '350px',
          background: 'radial-gradient(circle, rgba(255,107,53,0.12) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          animation: 'float 9s ease-in-out infinite'
        }}></div>
        <div style={{
          position: 'absolute',
          top: '40%',
          left: '8%',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          animation: 'float 11s ease-in-out infinite 2s'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '25%',
          right: '20%',
          width: '280px',
          height: '280px',
          background: 'radial-gradient(circle, rgba(147,51,234,0.08) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          animation: 'float 13s ease-in-out infinite 4s'
        }}></div>
        <style>{`
          @keyframes float {
            0%, 100% { transform: translate(0, 0) scale(1); }
            33% { transform: translate(-20px, 20px) scale(1.05); }
            66% { transform: translate(15px, -15px) scale(0.95); }
          }
        `}</style>
      </div>

      {/* Page Header */}
      <div style={{
        paddingTop: '100px',
        paddingBottom: '60px',
        textAlign: 'center',
        position: 'relative',
        zIndex: 10
      }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          padding: '0 20px'
        }}>
          {/* Badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'linear-gradient(135deg, rgba(255,107,53,0.1) 0%, rgba(255,143,101,0.05) 100%)',
            backdropFilter: 'blur(10px)',
            borderRadius: '50px',
            padding: '10px 20px',
            marginBottom: '24px',
            border: '1px solid rgba(255,107,53,0.2)'
          }}>
            <span style={{
              width: '8px',
              height: '8px',
              background: '#ff6b35',
              borderRadius: '50%',
              animation: 'pulse 2s infinite'
            }}></span>
            <span style={{
              fontSize: '0.85rem',
              fontWeight: 600,
              color: '#ff6b35',
              fontFamily: 'var(--font-sans)'
            }}>What We Offer</span>
          </div>

          <h1 style={{
            fontSize: 'clamp(3.5rem, 7vw, 4.5rem)',
            fontWeight: '800',
            marginBottom: '20px',
            fontFamily: 'var(--font-sans)',
            background: 'linear-gradient(135deg, #ff6b35 0%, #ff8f65 50%, #ff6b35 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            backgroundSize: '200% 200%',
            animation: 'gradient 8s ease infinite'
          }}>
            Our Core Services
          </h1>
          <style>{`
            @keyframes gradient {
              0% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
              100% { background-position: 0% 50%; }
            }
            @keyframes pulse {
              0%, 100% { opacity: 1; transform: scale(1); }
              50% { opacity: 0.7; transform: scale(1.2); }
            }
          `}</style>
          <p style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
            color: '#666666',
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: '1.6',
            fontFamily: 'var(--font-sans)'
          }}>
            Empowering startups and enterprises through AI, automation, and full-stack development.
            Digital transformation through innovation and cutting-edge technology solutions.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <section ref={sectionRef} style={{
        padding: '0 16px 60px',
        position: 'relative',
        zIndex: 10,
        opacity: isSectionVisible ? 1 : 0,
        transform: isSectionVisible ? 'translateY(0)' : 'translateY(30px)',
        transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" style={{
            gap: 'clamp(16px, 4vw, 30px)',
            marginBottom: 'clamp(30px, 6vw, 60px)'
          }}>
            {services.map((service, index) => (
              <div
                key={service.id}
                className="hover-lift glass-card-light"
                style={{
                  padding: 'clamp(20px, 5vw, 40px)',
                  cursor: 'pointer',
                  minHeight: '500px',
                  display: 'flex',
                  flexDirection: 'column',
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                  animationDelay: isSectionVisible ? `${index * 0.1}s` : '0s'
                }}
                onClick={() => {
                  if (service.id === 'mvp') {
                    navigate('/mvp-services');
                  } else {
                    handleCardClick(service.id);
                  }
                }}
              >
                {/* Icon and Title Section */}
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
                  fontFamily: 'var(--font-sans)',
                  color: '#121D1A'
                }}>
                  {service.title}
                </h3>

                <p style={{
                  fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                  color: '#666666',
                  lineHeight: '1.6',
                  marginBottom: '25px',
                  fontFamily: 'var(--font-sans)'
                }}>
                  {service.description}
                </p>

                {/* Features List */}
                <ul style={{
                  listStyle: 'none',
                  padding: '0',
                  margin: '0 0 30px 0',
                  flex: '1'
                }}>
                  {service.features.map((feature, idx) => (
                    <li key={idx} style={{
                      padding: '8px 0',
                      color: '#666666',
                      fontSize: 'clamp(0.85rem, 1.8vw, 0.95rem)',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '10px',
                      fontFamily: 'var(--font-sans)'
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

                {/* CTA Button */}
                <button
                  className="button-press"
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
                    maxWidth: '200px',
                    fontFamily: 'var(--font-sans)'
                  }}
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