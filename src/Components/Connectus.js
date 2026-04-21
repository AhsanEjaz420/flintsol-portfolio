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
        padding: '2rem 0',
        background: 'white',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center'
      }}>
        <div className="container" style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem'
        }}>
          <h2 className="section-title animate-on-scroll" style={{
            textAlign: 'center',
            fontSize: '2.5rem',
            fontWeight: 'bold',
            color: '#1a1a2e',
            marginBottom: '2rem',
            marginTop: '6rem'
          }}>Get In Touch</h2>
          
          <div className="contact-content" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem',
            alignItems: 'start'
          }}>
            {/* Contact Info */}
            <div className="contact-info animate-left" style={{
              background: 'rgba(102, 126, 234, 0.05)',
              padding: '2rem',
              borderRadius: '20px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              border: '1px solid rgba(102, 126, 234, 0.1)'
            }}>
              <h3 style={{ 
                color: "#1a1a2e", 
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
                  background: 'linear-gradient(135deg, #ff6b6b, #ff8e8e)',
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
                  <strong style={{ color: '#1a1a2e' }}>Phone</strong><br />
                  <span style={{ color: '#666' }}>+92 331 5411654</span>
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
                  background: 'linear-gradient(135deg, #ff6b6b, #ff8e8e)',
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
                  <strong style={{ color: '#1a1a2e' }}>Website</strong><br />
                  <span style={{ color: '#666' }}>www.flint-sol.com</span>
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
                  background: 'linear-gradient(135deg, #ff6b6b, #ff8e8e)',
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
                  <strong style={{ color: '#1a1a2e' }}>Address</strong><br />
                  <span style={{ color: '#666' }}>H 14, St 49, G-13/2, Islamabad</span>
                </div>
              </div>

              <div className="contact-cta" style={{ 
                marginTop: '2rem',
                padding: '1.5rem',
                background: 'linear-gradient(135deg, #1a1a2e, #2d2d4a)',
                borderRadius: '15px',
                color: 'white'
              }}>
                <h3 style={{
                  color: 'white',
                  marginBottom: '1rem',
                  fontSize: '1.3rem'
                }}>Ready to Innovate, Integrate & Elevate with us?</h3>
                <p style={{ 
                  marginBottom: "0", 
                  opacity: 0.9,
                  color: 'rgba(255,255,255,0.8)',
                  lineHeight: '1.6'
                }}>
                  We don't just build tech - we deliver strategic innovation, seamless execution, and dependable partnerships that drive real business impact.
                </p>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="contact-form animate-right" style={{
              background: 'white',
              padding: '2rem',
              borderRadius: '20px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              border: '1px solid rgba(102, 126, 234, 0.1)'
            }}>
                             <h3 style={{
                 color: '#1a1a2e',
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
                        outline: 'none'
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#667eea'}
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
                        outline: 'none'
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#667eea'}
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
                        outline: 'none'
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#667eea'}
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
                        outline: 'none'
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#667eea'}
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
                      fontFamily: 'inherit'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#667eea'}
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
                     alignItems: 'center'
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
                     alignItems: 'center'
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
                  style={{
                    width: '100%',
                    padding: '1rem 2rem',
                    background: isSubmitting ? '#ccc' : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '10px',
                    fontSize: '1.1rem',
                    fontWeight: 'bold',
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 5px 15px rgba(102, 126, 234, 0.4)',
                    transform: 'translateY(0)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem'
                  }}
                  onMouseEnter={(e) => {
                    if (!isSubmitting) {
                      e.target.style.transform = 'translateY(-2px)';
                      e.target.style.boxShadow = '0 8px 25px rgba(102, 126, 234, 0.6)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSubmitting) {
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.boxShadow = '0 5px 15px rgba(102, 126, 234, 0.4)';
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