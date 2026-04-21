import React, { useState } from 'react'

const Connectus = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      
      if (data.success) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error(data.message);
      }
      
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="contact" id="contact" style={{
        padding: '4rem 0',
        background: 'linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 50%, #F9F9F7 100%)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
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
            top: '20%',
            right: '10%',
            width: '300px',
            height: '300px',
            background: 'radial-gradient(circle, rgba(255,107,53,0.1) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(60px)',
            animation: 'float 10s ease-in-out infinite'
          }}></div>
          <div style={{
            position: 'absolute',
            bottom: '30%',
            left: '5%',
            width: '250px',
            height: '250px',
            background: 'radial-gradient(circle, rgba(102,126,234,0.08) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(60px)',
            animation: 'float 12s ease-in-out infinite 2s'
          }}></div>
          <style>{`
            @keyframes float {
              0%, 100% { transform: translate(0, 0) scale(1); }
              33% { transform: translate(-15px, 15px) scale(1.05); }
              66% { transform: translate(10px, -10px) scale(0.95); }
            }
          `}</style>
        </div>

        <div className="container" style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem',
          position: 'relative',
          zIndex: 10
        }}>
          <h2 className="section-title animate-on-scroll" style={{
            textAlign: 'center',
            fontSize: 'clamp(2rem,4vw,2.5rem)',
            fontWeight: 'bold',
            color: '#121D1A',
            marginBottom: '2rem',
            marginTop: '4rem',
            fontFamily: 'var(--font-sans)'
          }}>Get In Touch</h2>
          
          <div className="contact-content" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem',
            alignItems: 'start'
          }}>
            {/* Contact Info */}
            <div className="contact-info animate-left glass-card-light hover-lift" style={{
              padding: '2rem',
              borderRadius: '20px',
              fontFamily: 'var(--font-sans)'
            }}>
              <h3 style={{ 
                color: "#121D1A", 
                marginBottom: "2rem",
                fontSize: '1.8rem',
                fontWeight: 'bold'
              }}>Our Contact</h3>
              
              <div className="contact-item" style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '1.5rem',
                padding: '1rem',
                borderRadius: '15px',
                background: 'white',
                boxShadow: '0 5px 15px rgba(0,0,0,0.08)',
                transition: 'all 0.3s ease'
              }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  background: 'linear-gradient(135deg, #ff6b35, #ff8f65)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '1rem',
                  flexShrink: 0
                }}>
                  <i className="fas fa-phone" style={{
                    fontSize: '1.2rem',
                    color: 'white'
                  }}></i>
                </div>
                <div>
                  <strong style={{ color: '#121D1A' }}>Phone</strong><br />
                  <span style={{ color: '#666666' }}>+92 331 5411654</span>
                </div>
              </div>
              
              <div className="contact-item" style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '1.5rem',
                padding: '1rem',
                borderRadius: '15px',
                background: 'white',
                boxShadow: '0 5px 15px rgba(0,0,0,0.08)',
                transition: 'all 0.3s ease'
              }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  background: 'linear-gradient(135deg, #ff6b35, #ff8f65)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '1rem',
                  flexShrink: 0
                }}>
                  <i className="fas fa-globe" style={{
                    fontSize: '1.2rem',
                    color: 'white'
                  }}></i>
                </div>
                <div>
                  <strong style={{ color: '#121D1A' }}>Website</strong><br />
                  <span style={{ color: '#666666' }}>www.flint-sol.com</span>
                </div>
              </div>
              
              <div className="contact-item" style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '2rem',
                padding: '1rem',
                borderRadius: '15px',
                background: 'white',
                boxShadow: '0 5px 15px rgba(0,0,0,0.08)',
                transition: 'all 0.3s ease'
              }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  background: 'linear-gradient(135deg, #ff6b35, #ff8f65)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '1rem',
                  flexShrink: 0
                }}>
                  <i className="fas fa-map-marker-alt" style={{
                    fontSize: '1.2rem',
                    color: 'white'
                  }}></i>
                </div>
                <div>
                  <strong style={{ color: '#121D1A' }}>Address</strong><br />
                  <span style={{ color: '#666666' }}>H 14, St 49, G-13/2, Islamabad</span>
                </div>
              </div>

              <div className="contact-cta" style={{ 
                marginTop: '2rem',
                padding: '1.5rem',
                background: 'linear-gradient(135deg, #ff6b35, #ff8f65)',
                borderRadius: '15px',
                color: 'white'
              }}>
                <h3 style={{
                  color: 'white',
                  marginBottom: '1rem',
                  fontSize: '1.3rem',
                  fontFamily: 'var(--font-sans)'
                }}>Ready to Innovate, Integrate & Elevate with us?</h3>
                <p style={{ 
                  marginBottom: "0", 
                  opacity: 0.9,
                  color: 'rgba(255,255,255,0.9)',
                  lineHeight: '1.6',
                  fontFamily: 'var(--font-sans)'
                }}>
                  We don't just build tech - we deliver strategic innovation, seamless execution, and dependable partnerships that drive real business impact.
                </p>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="contact-form animate-right glass-card-light hover-lift" style={{
              padding: '2rem',
              borderRadius: '20px',
              fontFamily: 'var(--font-sans)'
            }}>
                             <h3 style={{
                 color: '#121D1A',
                 marginBottom: '2rem',
                 fontSize: '1.8rem',
                 fontWeight: 'bold'
               }}>Send us a Message</h3>

               <form onSubmit={handleSubmit}>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '1rem',
                  marginBottom: '1rem'
                }}>
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name *"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      style={{
                        width: '100%',
                        padding: '1rem',
                        border: '2px solid #e1e5e9',
                        borderRadius: '10px',
                        fontSize: '1rem',
                        transition: 'all 0.3s ease',
                        outline: 'none',
                        fontFamily: 'var(--font-sans)'
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#ff6b35'}
                      onBlur={(e) => e.target.style.borderColor = '#e1e5e9'}
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email *"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      style={{
                        width: '100%',
                        padding: '1rem',
                        border: '2px solid #e1e5e9',
                        borderRadius: '10px',
                        fontSize: '1rem',
                        transition: 'all 0.3s ease',
                        outline: 'none',
                        fontFamily: 'var(--font-sans)'
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#ff6b35'}
                      onBlur={(e) => e.target.style.borderColor = '#e1e5e9'}
                    />
                  </div>
                </div>

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '1rem',
                  marginBottom: '1rem'
                }}>
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Your Phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      style={{
                        width: '100%',
                        padding: '1rem',
                        border: '2px solid #e1e5e9',
                        borderRadius: '10px',
                        fontSize: '1rem',
                        transition: 'all 0.3s ease',
                        outline: 'none',
                        fontFamily: 'var(--font-sans)'
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#ff6b35'}
                      onBlur={(e) => e.target.style.borderColor = '#e1e5e9'}
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject *"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      style={{
                        width: '100%',
                        padding: '1rem',
                        border: '2px solid #e1e5e9',
                        borderRadius: '10px',
                        fontSize: '1rem',
                        transition: 'all 0.3s ease',
                        outline: 'none',
                        fontFamily: 'var(--font-sans)'
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#ff6b35'}
                      onBlur={(e) => e.target.style.borderColor = '#e1e5e9'}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: '2rem' }}>
                  <textarea
                    name="message"
                    placeholder="Your Message *"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="5"
                    style={{
                      width: '100%',
                      padding: '1rem',
                      border: '2px solid #e1e5e9',
                      borderRadius: '10px',
                      fontSize: '1rem',
                      transition: 'all 0.3s ease',
                      outline: 'none',
                      resize: 'vertical',
                      fontFamily: 'var(--font-sans)'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#ff6b35'}
                    onBlur={(e) => e.target.style.borderColor = '#e1e5e9'}
                  />
                </div>

                                 {submitStatus === 'success' && (
                   <div style={{
                     background: '#d4edda',
                     color: '#155724',
                     padding: '1rem',
                     borderRadius: '10px',
                     marginBottom: '1rem',
                     border: '1px solid #c3e6cb',
                     display: 'flex',
                     alignItems: 'center',
                     fontFamily: 'var(--font-sans)'
                   }}>
                     <i className="fas fa-check-circle" style={{ marginRight: '0.5rem', fontSize: '1.2rem' }}></i>
                     <div>
                       <strong>Email Sent Successfully!</strong><br />
                       Your email client should open now. If it doesn't open automatically, please check your default email application.
                     </div>
                   </div>
                 )}

                 {submitStatus === 'error' && (
                   <div style={{
                     background: '#f8d7da',
                     color: '#721c24',
                     padding: '1rem',
                     borderRadius: '10px',
                     marginBottom: '1rem',
                     border: '1px solid #f5c6cb',
                     display: 'flex',
                     alignItems: 'center',
                     fontFamily: 'var(--font-sans)'
                   }}>
                     <i className="fas fa-exclamation-triangle" style={{ marginRight: '0.5rem', fontSize: '1.2rem' }}></i>
                     <div>
                       <strong>Error Sending Email</strong><br />
                       Unable to open email client. Please try again or contact us directly at contact@flint-sol.com
                     </div>
                   </div>
                 )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="button-press"
                  style={{
                    width: '100%',
                    padding: '1rem 2rem',
                    background: isSubmitting ? '#ccc' : 'linear-gradient(135deg, #ff6b35 0%, #ff8f65 100%)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '10px',
                    fontSize: '1.1rem',
                    fontWeight: 'bold',
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 5px 15px rgba(255, 107, 53, 0.3)',
                    transform: 'translateY(0)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    fontFamily: 'var(--font-sans)'
                  }}
                  onMouseEnter={(e) => {
                    if (!isSubmitting) {
                      e.target.style.transform = 'translateY(-2px)';
                      e.target.style.boxShadow = '0 8px 25px rgba(255, 107, 53, 0.4)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSubmitting) {
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.boxShadow = '0 5px 15px rgba(255, 107, 53, 0.3)';
                    }
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <div style={{
                        width: '20px',
                        height: '20px',
                        border: '2px solid #ffffff',
                        borderTop: '2px solid transparent',
                        borderRadius: '50%',
                        animation: 'spin 1s linear infinite'
                      }}></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-paper-plane"></i>
                      Send Message
                    </>
                                     )}
                 </button>
               </form>
             </div>
          </div>
        </div>

        <style>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          
          .contact-item:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 25px rgba(0,0,0,0.15);
          }
          
          @media (max-width: 768px) {
            .contact-content {
              grid-template-columns: 1fr !important;
            }
            
            .section-title {
              font-size: 2rem !important;
            }
            
            .container {
              padding: 0 1rem !important;
            }
          }
        `}</style>
      </section>
    </>
  )
}

export default Connectus