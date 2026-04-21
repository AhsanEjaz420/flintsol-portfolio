import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useData } from "../contexts/DataContext";

const OurServices = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  const { services, portfolioItems, whyChooseFeatures } = useData();

  // Helper to handle card click
  const handleCardClick = (service) => {
    if (service === "mvp") {
      navigate("/mvp-services");
    } else {
      navigate(`/Core-services?service=${service}`);
      // console.log(`Navigating to service: ${service}`);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 50%, #F9F9F7 100%)',
      color: '#121D1A',
      position: 'relative',
      overflow: 'hidden'
    }}
    >
      {/* Animated Background Elements */}
      <div style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: '5%',
          left: '5%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(255,107,53,0.15) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          animation: 'float 8s ease-in-out infinite'
        }}></div>
        <div style={{
          position: 'absolute',
          top: '30%',
          right: '10%',
          width: '350px',
          height: '350px',
          background: 'radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          animation: 'float 10s ease-in-out infinite 2s'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '20%',
          left: '15%',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(147,51,234,0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          animation: 'float 12s ease-in-out infinite 4s'
        }}></div>
        <style>{`
          @keyframes float {
            0%, 100% { transform: translate(0, 0) scale(1); }
            33% { transform: translate(30px, -30px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.95); }
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
            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
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
                className="hover-lift glass-card-light"
                style={{
                  padding: 'clamp(20px, 5vw, 40px)',
                  cursor: 'pointer',
                  minHeight: '500px',
                  display: 'flex',
                  flexDirection: 'column'
                }}
                onClick={() => handleCardClick(service.id)}
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
        background: 'rgba(248, 250, 252, 1)',
        backdropFilter: 'blur(10px)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 2.8rem)',
              fontWeight: '700',
              marginBottom: '20px',
              fontFamily: 'var(--font-sans)',
              background: 'linear-gradient(135deg, #ff6b35 0%, #ff8f65 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Featured Projects
            </h2>
            <p style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
              color: '#666666',
              maxWidth: '600px',
              margin: '0 auto',
              fontFamily: 'var(--font-sans)'
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
              <div key={index} className="hover-lift glass-card-light" style={{
                padding: 'clamp(20px, 4vw, 30px)'
              }}>
                <div style={{
                  fontSize: 'clamp(0.7rem, 1.5vw, 0.8rem)',
                  color: '#ff6b35',
                  fontWeight: '600',
                  marginBottom: '10px',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  fontFamily: 'var(--font-sans)'
                }}>
                  {item.category}
                </div>
                <h4 style={{
                  fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
                  fontWeight: '600',
                  marginBottom: '15px',
                  fontFamily: 'var(--font-sans)',
                  color: '#121D1A'
                }}>
                  {item.title}
                </h4>
                <p style={{
                  color: '#666666',
                  lineHeight: '1.6',
                  fontSize: 'clamp(0.85rem, 1.8vw, 0.95rem)',
                  fontFamily: 'var(--font-sans)'
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
              fontFamily: 'var(--font-sans)',
              background: 'linear-gradient(135deg, #ff6b35 0%, #ff8f65 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Why Choose Flint Sol
            </h2>
            <p style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
              color: '#666666',
              maxWidth: '600px',
              margin: '0 auto',
              fontFamily: 'var(--font-sans)'
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
              <div key={index} className="hover-lift glass-card-light" style={{
                textAlign: 'center',
                padding: 'clamp(30px, 6vw, 40px) clamp(20px, 4vw, 30px)'
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
                  fontFamily: 'var(--font-sans)',
                  color: '#121D1A'
                }}>
                  {feature.title}
                </h4>
                <p style={{
                  color: '#666666',
                  lineHeight: '1.6',
                  fontSize: 'clamp(0.85rem, 1.8vw, 0.95rem)',
                  fontFamily: 'var(--font-sans)'
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