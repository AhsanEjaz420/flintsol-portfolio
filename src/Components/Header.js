import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/Untitled_design__22_-removebg-preview.png"

function useScrollDirection() {
  const [show, setShow] = React.useState(true);
  const lastScrollY = useRef(window.scrollY);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 50) {
        setShow(true);
        lastScrollY.current = window.scrollY;
        return;
      }
      if (window.scrollY > lastScrollY.current) {
        setShow(false); // scrolling down
      } else {
        setShow(true); // scrolling up
      }
      lastScrollY.current = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return show;
}

function useNavbarBackground() {
  const [isOverWhiteSection, setIsOverWhiteSection] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Get navbar height (approximately 80px)
      const navbarHeight = 80;
      const scrollPosition = window.scrollY + navbarHeight;
      
      // Check if we're in the header section (first ~100vh)
      const headerSectionHeight = window.innerHeight;
      
      // Check if we're on the homepage
      const currentPath = window.location.pathname;
      const isOnHomepage = currentPath === '/';
      
      if (scrollPosition <= headerSectionHeight && isOnHomepage) {
        setIsOverWhiteSection(false); // Transparent for header on homepage only
      } else {
        setIsOverWhiteSection(true); // Colored background for all other pages and when scrolled
      }
    };

    // Initial check
    handleScroll();
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return isOverWhiteSection;
}

const Header = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState("mvp");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [dropdownTimeout, setDropdownTimeout] = useState(null);


  const showHeader = useScrollDirection();
  const isOverWhiteSection = useNavbarBackground();

  // Navigation handler for service items
  const handleServiceNavigation = (service) => {
    const serviceRoutes = {
      mvp: '/mvp-services',
      ai: '/Core-services?service=ai',
      blockchain: '/Core-services?service=blockchain',
      web: '/Core-services?service=web',
      mobile: '/Core-services?service=mobile',
      resource: '/Core-services?service=resource'
    };
    navigate(serviceRoutes[service]);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Only close if menu is open and click is outside both nav-links and menu-toggle
      if (menuOpen && 
          !event.target.closest('.nav-links') && 
          !event.target.closest('.menu-toggle') &&
          !event.target.closest('.nav-overlay')) {
        setMenuOpen(false);
        setMobileServicesOpen(false); // Reset mobile services dropdown when menu closes
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [menuOpen]);

  // Reset mobile services dropdown when menu closes
  useEffect(() => {
    if (!menuOpen) {
      setMobileServicesOpen(false);
    }
  }, [menuOpen]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (dropdownTimeout) {
        clearTimeout(dropdownTimeout);
      }
    };
  }, [dropdownTimeout]);

  // Mock Link component for demo
  const Link = ({ to, children, onClick, className = "" }) => (
    <a href={to} onClick={onClick} className={`nav-link ${className}`}>
      {children}
    </a>
  );

  // Dynamic background styles
  const getHeaderStyles = () => {
    const baseStyles = {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      zIndex: 1000,
      transition: "all 0.3s ease",
      borderBottom: `1px solid ${isOverWhiteSection ? 'rgba(59, 130, 246, 0.3)' : 'rgba(255, 107, 53, 0.12)'}`,
    };

    if (isOverWhiteSection) {
      return {
        ...baseStyles,
        background: "rgba(15, 23, 42, 0.95)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4)",
      };
    } else {
      return {
        ...baseStyles,
        background: "rgba(15, 23, 42, 0.3)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
      };
    }
  };

  return (
    <>
      <header
        className={`header${showHeader ? "" : " header--hidden"}`}
        style={getHeaderStyles()}
      >
        <nav className="nav-container">
          <div className="logo">
            <Link to="/" onClick={() => setMenuOpen(false)}>
             <img alt="logo" src={logo}/>
            </Link>
          </div>

                     <button
             className="menu-toggle"
                         onClick={(e) => {
              e.stopPropagation(); // Prevent event bubbling
              setMenuOpen((prev) => !prev);
              if (menuOpen) {
                setMobileServicesOpen(false); // Reset mobile services dropdown when closing menu
              }
            }}
             aria-label="Toggle navigation"
           >
            {!menuOpen ? (
              <div className="hamburger-lines">
                <span className="hamburger"></span>
                <span className="hamburger"></span>
                <span className="hamburger"></span>
              </div>
            ) : (
              <span className="close-icon">&times;</span>
            )}
          </button>
          
          {menuOpen && (
            <div
              className="nav-overlay"
              onClick={() => {
                setMenuOpen(false);
                setMobileServicesOpen(false); // Reset mobile services dropdown when closing via overlay
              }}
            ></div>
          )}
          
          <ul className={`nav-links${menuOpen ? " open" : ""}`}>
            
            <li>
              <Link to="/about" onClick={() => {
                setMenuOpen(false);
                setMobileServicesOpen(false);
              }}>
                About
              </Link>
            </li>
                         <li className="services-dropdown"
                             onMouseEnter={() => {
                               if (window.innerWidth > 768) {
                                 if (dropdownTimeout) {
                                   clearTimeout(dropdownTimeout);
                                   setDropdownTimeout(null);
                                 }
                                 setDropdownOpen(true);
                               }
                             }}
                             onMouseLeave={() => {
                               if (window.innerWidth > 768) {
                                 const timeout = setTimeout(() => {
                                   setDropdownOpen(false);
                                 }, 150);
                                 setDropdownTimeout(timeout);
                               }
                             }}>
                               <div className="services-link-wrapper">
                                 <Link
                   to="/our-services"
                   className="services-link"
                                       onClick={(e) => {
                      if (window.innerWidth <= 768) {
                        e.preventDefault();
                        e.stopPropagation();
                        setMobileServicesOpen(!mobileServicesOpen);
                      } else {
                        setMenuOpen(false);
                      }
                    }}
                  onMouseEnter={() => {
                    if (window.innerWidth > 768) {
                      setDropdownOpen(true);
                    }
                  }}
                  onMouseLeave={() => {
                    if (window.innerWidth > 768) {
                      setDropdownOpen(false);
                    }
                  }}
                >
                  Our services
                  <span className={`dropdown-arrow ${mobileServicesOpen ? 'open' : ''}`}>▼</span>
                </Link>
                
                {/* Desktop Mega Dropdown */}
                <div
                  className="mega-dropdown"
                  onMouseEnter={() => {
                    if (window.innerWidth > 768) {
                      if (dropdownTimeout) {
                        clearTimeout(dropdownTimeout);
                        setDropdownTimeout(null);
                      }
                      setDropdownOpen(true);
                    }
                  }}
                  onMouseLeave={() => {
                    if (window.innerWidth > 768) {
                      const timeout = setTimeout(() => {
                        setDropdownOpen(false);
                      }, 150);
                      setDropdownTimeout(timeout);
                    }
                  }}
                  style={{
                    opacity: dropdownOpen ? 1 : 0,
                    visibility: dropdownOpen ? "visible" : "hidden",
                    transform: dropdownOpen
                      ? "translateX(-50%) translateY(0)"
                      : "translateX(-50%) translateY(-10px)",
                    pointerEvents: dropdownOpen ? "auto" : "none",
                  }}
                >
                  <div className="mega-dropdown-content">
                    <div className="services-list">
                      <div
                        className={`service-item ${
                          activeService === "mvp" ? "active" : ""
                        }`}
                        onMouseEnter={() => setActiveService("mvp")}
                        onClick={() => {
                          handleServiceNavigation("mvp");
                          setDropdownOpen(false);
                        }}
                      >
                        <div className="service-icon">⚡</div>
                        <span>MVP Development</span>
                      </div>
                      <div
                        className={`service-item ${
                          activeService === "ai" ? "active" : ""
                        }`}
                        onMouseEnter={() => setActiveService("ai")}
                        onClick={() => {
                          handleServiceNavigation("ai");
                          setDropdownOpen(false);
                        }}
                      >
                        <div className="service-icon">🤖</div>
                        <span>AI & Automation</span>
                      </div>
                      <div
                        className={`service-item ${
                          activeService === "blockchain" ? "active" : ""
                        }`}
                        onMouseEnter={() => setActiveService("blockchain")}
                        onClick={() => {
                          handleServiceNavigation("blockchain");
                          setDropdownOpen(false);
                        }}
                      >
                        <div className="service-icon">⛓️</div>
                        <span>Blockchain Development</span>
                      </div>
                      <div
                        className={`service-item ${
                          activeService === "web" ? "active" : ""
                        }`}
                        onMouseEnter={() => setActiveService("web")}
                        onClick={() => {
                          handleServiceNavigation("web");
                          setDropdownOpen(false);
                        }}
                      >
                        <div className="service-icon">💻</div>
                        <span>Web Development</span>
                      </div>
                      <div
                        className={`service-item ${
                          activeService === "mobile" ? "active" : ""
                        }`}
                        onMouseEnter={() => setActiveService("mobile")}
                        onClick={() => {
                          handleServiceNavigation("mobile");
                          setDropdownOpen(false);
                        }}
                      >
                        <div className="service-icon">📱</div>
                        <span>Mobile App Development</span>
                      </div>
                      <div
                        className={`service-item ${
                          activeService === "resource" ? "active" : ""
                        }`}
                        onMouseEnter={() => setActiveService("resource")}
                        onClick={() => {
                          handleServiceNavigation("resource");
                          setDropdownOpen(false);
                        }}
                      >
                        <div className="service-icon">👥</div>
                        <span>Resource Augmentation</span>
                      </div>
                    </div>
                    <div className="service-details">
                      <div
                        className={`service-detail ${
                          activeService === "mvp" ? "active" : ""
                        }`}
                      >
                        <h3>MVP Development</h3>
                        <div
                          className="mvp-highlight"
                          style={{
                            display: "flex",
                            gap: "15px",
                            marginBottom: "15px",
                            alignItems: "center",
                          }}
                        >
                          <span
                            className="delivery-badge"
                            style={{
                              background:
                                "linear-gradient(135deg, #ff6b35, #ff8c42)",
                              color: "#ffffff",
                              padding: "8px 16px",
                              borderRadius: "25px",
                              fontSize: "14px",
                              fontWeight: "bold",
                              textShadow: "0 1px 2px rgba(0,0,0,0.3)",
                            }}
                          >
                            ⚡ 2-Week Delivery
                          </span>
                          <span
                            className="price-badge"
                            style={{
                              background:
                                "linear-gradient(135deg, #28a745, #20c997)",
                              color: "#ffffff",
                              padding: "8px 16px",
                              borderRadius: "25px",
                              fontSize: "14px",
                              fontWeight: "bold",
                              textShadow: "0 1px 2px rgba(0,0,0,0.3)",
                            }}
                          >
                            Starting at $1,000
                          </span>
                        </div>
                        <p>
                          Get your MVP launched in just 2 weeks! Rapidly
                          validate your ideas with our instant MVP development
                          service
                        </p>
                        <ul>
                          <li>
                             Rapid Prototyping & Validation (2-Week
                            Turnaround)
                          </li>
                          <li> Market-Ready Minimum Viable Products</li>
                          <li> User-Centric Design & Development</li>
                          <li> Agile Development Methodology</li>
                          <li> Budget-Friendly Starting at $1,000</li>
                        </ul>
                        <div className="mvp-guarantee">
                          <p>
                            <strong> Our 2-Week MVP Promise:</strong>
                          </p>
                          <p>
                            Launch-ready product • Core features implemented •
                            User testing ready
                          </p>
                        </div>
                        {/* <button className="service-cta">
                          Build Your MVP - 2 Weeks, $1,000
                        </button> */}
                      </div>
                      <div
                        className={`service-detail ${
                          activeService === "ai" ? "active" : ""
                        }`}
                      >
                        <h3>AI & Automation</h3>
                        <p>
                          Transform your business with our AI-driven solutions,
                          from intelligent chatbots to automated workflows that
                          streamline operations.
                        </p>
                        <ul>
                          <li>Intelligent Chatbots & Virtual Assistants</li>
                          <li>Voice Recognition & Natural Language Processing</li>
                          <li>Predictive Analytics & Machine Learning</li>
                          <li>Process Automation & Workflow Optimization</li>
                          <li>AI-Powered Content Generation & Management</li>
                        </ul>
                        {/* <button className="service-cta">
                          Explore AI Solutions
                        </button> */}
                      </div>
                      <div
                        className={`service-detail ${
                          activeService === "blockchain" ? "active" : ""
                        }`}
                      >
                        <h3>Blockchain Development</h3>
                        <p>
                          Build secure, decentralized applications with our
                          comprehensive blockchain development services and
                          smart contract expertise.
                        </p>
                        <ul>
                          <li>Smart Contract Development & Auditing</li>
                          <li>DeFi Protocol & DApp Development</li>
                          <li>NFT Marketplace & Token Creation</li>
                          <li>Cryptocurrency Exchange Solutions</li>
                          <li>Blockchain Integration & Consulting</li>
                        </ul>
                        {/* <button className="service-cta">
                          Start Blockchain Project
                        </button> */}
                      </div>
                      <div
                        className={`service-detail ${
                          activeService === "web" ? "active" : ""
                        }`}
                      >
                        <h3>Web Development</h3>
                        <p>
                          Full-stack web development solutions using
                          cutting-edge technologies to create scalable,
                          responsive applications.
                        </p>
                        <ul>
                          <li>E-commerce & Online Marketplaces</li>
                          <li>Enterprise SaaS & Business Applications</li>
                          <li>Real Estate & Property Management Platforms</li>
                          <li>Custom Web Applications & APIs</li>
                          <li>Progressive Web Apps & Responsive Design</li>
                        </ul>
                        {/* <button className="service-cta">
                          Start Web Project
                        </button> */}
                      </div>
                      <div
                        className={`service-detail ${
                          activeService === "mobile" ? "active" : ""
                        }`}
                      >
                        <h3>Mobile App Development</h3>
                        <p>
                          Native and cross-platform mobile applications that
                          deliver exceptional user experiences across all
                          devices.
                        </p>
                        <ul>
                          <li>Freight & Logistics Management Apps</li>
                          <li>Insurance & Claims Processing Tools</li>
                          <li>Digital Payment & Wallet Solutions</li>
                          <li>Lifestyle & Productivity Applications</li>
                          <li>Cross-platform iOS & Android Development</li>
                        </ul>
                        {/* <button className="service-cta">
                          Launch Mobile App
                        </button> */}
                      </div>
                      <div
                        className={`service-detail ${
                          activeService === "resource" ? "active" : ""
                        }`}
                      >
                        <h3>Resource Augmentation</h3>
                        <p>
                          Scale your team instantly with our skilled tech
                          professionals to accelerate project delivery and boost
                          productivity.
                        </p>
                        <ul>
                          <li>Frontend & Backend Developers</li>
                          <li>UI/UX Designers & Product Managers</li>
                          <li>QA Engineers & Test Automation</li>
                          <li>DevOps & Cloud Infrastructure Specialists</li>
                          <li>Flexible Engagement Models</li>
                        </ul>
                        {/* <button className="service-cta">
                          Augment Your Team
                        </button> */}
                      </div>
                    </div>
                  </div>
                </div>
                
                                 {/* Mobile Services Submenu */}
                 <div className={`mobile-services-menu ${mobileServicesOpen ? 'open' : ''}`}>
                  <div className="mobile-service-item" onClick={() => {
                    handleServiceNavigation("mvp");
                    setMenuOpen(false);
                    setMobileServicesOpen(false);
                  }}>
                    <div className="mobile-service-icon">⚡</div>
                    <div className="mobile-service-content">
                      <span className="mobile-service-title">MVP Development</span>
                      <span className="mobile-service-desc">2-Week Delivery • $1,000+</span>
                    </div>
                  </div>
                  <div className="mobile-service-item" onClick={() => {
                    handleServiceNavigation("ai");
                    setMenuOpen(false);
                    setMobileServicesOpen(false);
                  }}>
                    <div className="mobile-service-icon">🤖</div>
                    <div className="mobile-service-content">
                      <span className="mobile-service-title">AI & Automation</span>
                      <span className="mobile-service-desc">Intelligent Solutions</span>
                    </div>
                  </div>
                  <div className="mobile-service-item" onClick={() => {
                    handleServiceNavigation("blockchain");
                    setMenuOpen(false);
                    setMobileServicesOpen(false);
                  }}>
                    <div className="mobile-service-icon">⛓️</div>
                    <div className="mobile-service-content">
                      <span className="mobile-service-title">Blockchain Development</span>
                      <span className="mobile-service-desc">Smart Contracts & DApps</span>
                    </div>
                  </div>
                  <div className="mobile-service-item" onClick={() => {
                    handleServiceNavigation("web");
                    setMenuOpen(false);
                    setMobileServicesOpen(false);
                  }}>
                    <div className="mobile-service-icon">💻</div>
                    <div className="mobile-service-content">
                      <span className="mobile-service-title">Web Development</span>
                      <span className="mobile-service-desc">Full-Stack Solutions</span>
                    </div>
                  </div>
                  <div className="mobile-service-item" onClick={() => {
                    handleServiceNavigation("mobile");
                    setMenuOpen(false);
                    setMobileServicesOpen(false);
                  }}>
                    <div className="mobile-service-icon">📱</div>
                    <div className="mobile-service-content">
                      <span className="mobile-service-title">Mobile App Development</span>
                      <span className="mobile-service-desc">iOS & Android</span>
                    </div>
                  </div>
                  <div className="mobile-service-item" onClick={() => {
                    handleServiceNavigation("resource");
                    setMenuOpen(false);
                    setMobileServicesOpen(false);
                  }}>
                    <div className="mobile-service-icon">👥</div>
                    <div className="mobile-service-content">
                      <span className="mobile-service-title">Resource Augmentation</span>
                      <span className="mobile-service-desc">Scale Your Team</span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <Link to="/portfolio" onClick={() => {
                setMenuOpen(false);
                setMobileServicesOpen(false);
              }}>
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="/industries" onClick={() => {
                setMenuOpen(false);
                setMobileServicesOpen(false);
              }}>
                Industries
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => {
                setMenuOpen(false);
                setMobileServicesOpen(false);
              }}>
                Contact
              </Link>
            </li>
            <li className="mobile-cta">
              <Link
                className="mobile-quote-btn"
                to="/Costcalculator"
                onClick={() => {
                  setMenuOpen(false);
                  setMobileServicesOpen(false);
                }}
              >
                Get your Quote
              </Link>
            </li>
          </ul>
          <div className="stats">
            <Link
              className="statsli cursor-pointer px-5 py-2 rounded-full bg-white border-2 border-white text-orange-500 font-semibold shadow-lg hover:scale-105 transition-all duration-300 text-2xl"
              to="/Costcalculator"
            >
              Get your Quote
            </Link>
          </div>
        </nav>
      </header>

      <style>{`
        .header--hidden {
          transform: translateY(-110%);
          opacity: 0;
          pointer-events: none;
        }

        .header {
          transform: translateY(0);
          opacity: 1;
        }

        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 2rem;
          max-width: 1400px;
          margin: 0 auto;
        }

        .logo {
          flex-shrink: 0;
        }

        .nav-link {
          text-decoration: none;
          color: inherit;
        }

        .menu-toggle {
          display: none;
          flex-direction: column;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          cursor: pointer;
          padding: 0.75rem;
          position: relative;
          z-index: 1003;
          border-radius: 12px;
          transition: all 0.3s var(--ease-in-out, cubic-bezier(0.4, 0, 0.2, 1));
          backdrop-filter: blur(10px);
        }

        .menu-toggle:hover {
          background: rgba(255, 107, 53, 0.15);
          border-color: rgba(255, 107, 53, 0.3);
          transform: scale(1.05);
          box-shadow: 0 4px 20px rgba(255, 107, 53, 0.2);
        }

        .hamburger-lines {
          display: flex;
          flex-direction: column;
          gap: 5px;
          width: 25px;
          margin-left: -10px;
        }

        .hamburger {
          display: block;
          width: 30px;
          height: 3px;
          background-color: #ffffff;
          border-radius: 2px;
          transition: all 0.3s var(--ease-in-out, cubic-bezier(0.4, 0, 0.2, 1));
        }

        .menu-toggle:hover .hamburger {
          background-color: #ff6b35;
          width: 26px;
        }

        .close-icon {
          color: #ffffff;
          font-size: 2rem;
          font-weight: bold;
          transition: all 0.3s var(--ease-in-out, cubic-bezier(0.4, 0, 0.2, 1));
          line-height: 1;
        }

        .menu-toggle:hover .close-icon {
          color: #ff6b35;
          transform: rotate(90deg);
        }

        .nav-overlay {
          display: none;
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0, 0, 0, 0.5);
          z-index: 1001;
          backdrop-filter: blur(4px);
        }

        .nav-links {
          display: flex;
          list-style: none;
          margin: 0;
          padding: 0;
          gap: 2rem;
          align-items: center;
        }

        .nav-links li {
          position: relative;
        }

        .nav-links a {
          color: #e2e8f0;
          text-decoration: none;
          font-weight: 500;
          transition: all 0.3s var(--ease-in-out, cubic-bezier(0.4, 0, 0.2, 1));
          padding: 0.5rem 1rem;
          border-radius: 0.5rem;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .nav-links a:hover {
          color: #f97316;
          background: rgba(255, 107, 53, 0.12);
          transform: translateY(-2px);
        }

        .nav-links a::before {
          content: "";
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #f97316, #fb923c);
          transition: all 0.3s var(--ease-in-out, cubic-bezier(0.4, 0, 0.2, 1));
          transform: translateX(-50%);
        }

        .nav-links a:hover::before {
          width: 80%;
        }

        .dropdown-arrow {
          font-size: 0.75rem;
          transition: transform 0.3s ease;
          color: #94a3b8;
        }

        .services-dropdown:hover .dropdown-arrow {
          transform: rotate(180deg);
          color: #f97316;
        }

        .services-dropdown {
          position: relative;
        }

        .services-dropdown:hover .mega-dropdown {
          opacity: 1;
          visibility: visible;
          transform: translateX(-50%) translateY(0);
          pointer-events: auto;
        }

        .services-link-wrapper {
          position: relative;
        }

        .mobile-services-menu {
          display: none;
        }

        .mega-dropdown {
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%) translateY(-10px) scale(0.95);
          width: 900px;
          background: linear-gradient(
            135deg,
            rgba(15, 23, 42, 0.98) 0%,
            rgba(30, 41, 59, 0.98) 50%,
            rgba(51, 65, 85, 0.98) 100%
          );
          border-radius: var(--radius-lg, 1.5rem);
          padding: 0;
          margin-top: 0.5rem;
          opacity: 0;
          visibility: hidden;
          transition: all 0.4s var(--ease-out-expo, cubic-bezier(0.16, 1, 0.3, 1));
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.6),
            0 0 0 1px rgba(255, 107, 53, 0.15),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(30px) saturate(180%);
          -webkit-backdrop-filter: blur(30px) saturate(180%);
          z-index: 1000;
          border: 1px solid rgba(255, 107, 53, 0.1);
        }

        .mega-dropdown-content {
          display: flex;
          min-height: 400px;
          border-radius: 16px;
          overflow: hidden;
        }

        .services-list {
          flex: 1;
          background: rgba(15, 23, 42, 0.6);
          padding: var(--space-lg, 2rem) 0;
          border-right: 1px solid rgba(255, 107, 53, 0.15);
        }

        .service-item {
          display: flex;
          align-items: center;
          gap: var(--space-md, 1rem);
          padding: var(--space-md, 1rem) 1.5rem;
          cursor: pointer;
          transition: all 0.3s var(--ease-in-out, cubic-bezier(0.4, 0, 0.2, 1));
          border-left: 3px solid transparent;
          position: relative;
          overflow: hidden;
        }

        .service-item::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          width: 0;
          height: 100%;
          background: linear-gradient(
            90deg,
            rgba(255, 107, 53, 0.12) 0%,
            transparent 100%
          );
          transition: width 0.3s var(--ease-out-expo, cubic-bezier(0.16, 1, 0.3, 1));
          z-index: 0;
        }

        .service-item:hover::before,
        .service-item.active::before {
          width: 100%;
        }

        .service-item:hover,
        .service-item.active {
          background: rgba(255, 107, 53, 0.08);
          border-left-color: var(--color-primary, #ff6b35);
          transform: translateX(8px);
        }

        .service-item:hover .service-icon,
        .service-item.active .service-icon {
          transform: scale(1.2);
          filter: brightness(1.2);
        }

        .service-item:hover span,
        .service-item.active span {
          color: #f97316;
          font-weight: 600;
        }

        .service-icon {
          font-size: 1.5rem;
          transition: all 0.3s var(--ease-in-out, cubic-bezier(0.4, 0, 0.2, 1));
          z-index: 1;
          position: relative;
        }

        .service-item span {
          color: #e2e8f0;
          font-weight: 500;
          font-size: 0.95rem;
          transition: all 0.3s var(--ease-in-out, cubic-bezier(0.4, 0, 0.2, 1));
          z-index: 1;
          position: relative;
        }

        .service-details {
          flex: 1.5;
          padding: 2rem;
          background: rgba(30, 41, 59, 0.4);
          position: relative;
        }

        .service-detail {
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s var(--ease-in-out, cubic-bezier(0.4, 0, 0.2, 1));
          position: absolute;
          top: 2rem;
          left: 2rem;
          right: 2rem;
          bottom: 2rem;
        }

        .service-detail.active {
          opacity: 1;
          visibility: visible;
        }

        .service-detail h3 {
          color: #f1f5f9;
          font-size: 1.5rem;
          font-weight: 700;
          margin: 0 0 1rem 0;
          background: linear-gradient(135deg, #f97316 0%, #fb923c 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .service-detail p {
          color: #cbd5e1;
          font-size: 0.95rem;
          line-height: 1.6;
          margin: 0 0 1.5rem 0;
        }

        .service-detail ul {
          list-style: none;
          padding: 0;
          margin: 0 0 2rem 0;
        }

        .service-detail li {
          color: #94a3b8;
          font-size: 0.875rem;
          margin-bottom: 0.75rem;
          padding-left: 1.5rem;
          position: relative;
          transition: all 0.3s var(--ease-in-out, cubic-bezier(0.4, 0, 0.2, 1));
        }

        .service-detail li::before {
          content: "→";
          position: absolute;
          left: 0;
          color: #f97316;
          font-weight: bold;
          transition: all 0.3s var(--ease-in-out, cubic-bezier(0.4, 0, 0.2, 1));
        }

        .service-detail li:hover {
          color: #e2e8f0;
          transform: translateX(8px);
        }

        .service-detail li:hover::before {
          transform: translateX(3px);
        }

        .service-cta {
          background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
          color: white;
          border: none;
          padding: 0.75rem 1.5rem;
          border-radius: var(--radius-md, 8px);
          font-weight: 600;
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.3s var(--ease-in-out, cubic-bezier(0.4, 0, 0.2, 1));
          box-shadow: 0 4px 15px rgba(249, 115, 22, 0.3);
          position: relative;
          overflow: hidden;
        }

        .service-cta::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
          );
          transition: left 0.6s ease;
        }

        .service-cta:hover::before {
          left: 100%;
        }

        .service-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(249, 115, 22, 0.4);
        }

        .stats {
          display: flex;
          gap: 1.5rem;
          align-items: center;
          flex-shrink: 0;
        }

        .statsli {
          color: #94a3b8;
          font-size: 0.875rem;
          font-weight: 500;
          padding: 0.25rem 0.75rem;
          border-radius: 1rem;
          background: rgba(255, 107, 53, 0.12);
          border: 1px solid rgba(249, 115, 22, 0.2);
          transition: all 0.3s var(--ease-in-out, cubic-bezier(0.4, 0, 0.2, 1));
          white-space: nowrap;
        }

        .statsli:hover {
          color: #f97316;
          background: rgba(249, 115, 22, 0.2);
          transform: translateY(-1px);
        }

        .mobile-cta {
          display: none;
        }

                   .mobile-quote-btn {
             background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
             color: #ffffff !important;
             padding: var(--space-md, 1rem) 1.5rem;
             border-radius: var(--radius-lg, 1rem);
             font-weight: 600;
             text-align: center;
             box-shadow: 0 4px 15px rgba(249, 115, 22, 0.3);
             border: none;
             margin-top: 0.5rem;
             transition: all 0.3s var(--ease-in-out, cubic-bezier(0.4, 0, 0.2, 1));
             position: relative;
             overflow: hidden;
           }

        .mobile-quote-btn::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.6s ease;
        }

        .mobile-quote-btn:hover::before {
          left: 100%;
        }

        .mobile-quote-btn:hover {
          background: linear-gradient(135deg, #ea580c 0%, #dc2626 100%);
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(249, 115, 22, 0.4);
        }

        /* Tablet Styles */
        @media (max-width: 1024px) {
          .nav-container {
            padding: var(--space-md, 1rem) 1.5rem;
          }

          .mega-dropdown {
            width: 750px;
          }

          .stats {
            gap: var(--space-md, 1rem);
          }

          .statsli {
            font-size: 0.8rem;
            padding: 0.2rem 0.5rem;
          }
        }

        /* Mobile Styles */
        @media (min-width: 769px) {
          .menu-toggle {
            display: none;
          }
        }
        
        @media (max-width: 768px) {
          .menu-toggle {
            display: flex;
            z-index: 1003;
          }

          .nav-overlay {
            display: block;
            z-index: 1001;
          }

                     .mobile-services-menu {
             display: block;
             background: linear-gradient(135deg, rgba(15, 23, 42, 0.98) 0%, rgba(30, 41, 59, 0.98) 100%);
             border-radius: var(--radius-lg, 1rem);
             margin: 0.25rem 0;
             padding: 0;
             max-height: 0;
             overflow: hidden;
             transition: all 0.5s var(--ease-out-expo, cubic-bezier(0.16, 1, 0.3, 1));
             border: 1px solid rgba(255, 107, 53, 0.2);
             backdrop-filter: blur(20px) saturate(180%);
             box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1);
             z-index: 1004;
             position: relative;
           }

           .mobile-services-menu.open {
             max-height: 600px;
             padding: var(--space-md, 0.75rem) 0;
             border-color: rgba(249, 115, 22, 0.4);
             box-shadow: 0 12px 40px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 107, 53, 0.15);
           }

                     .mobile-service-item {
             display: flex;
             align-items: center;
             gap: var(--space-md, 0.75rem);
             padding: var(--space-sm, 0.75rem) 1rem;
             cursor: pointer;
             transition: all 0.3s var(--ease-in-out, cubic-bezier(0.4, 0, 0.2, 1));
             border-radius: var(--radius-md, 8px);
             margin: var(--space-xs, 0.15rem) var(--space-sm, 0.5rem);
             border: 1px solid transparent;
             position: relative;
             overflow: hidden;
             opacity: 0;
             transform: translateX(-20px);
             animation: slideInStagger 0.4s ease-out forwards;
           }

          .mobile-service-item:nth-child(1) { animation-delay: 0.05s; }
          .mobile-service-item:nth-child(2) { animation-delay: 0.1s; }
          .mobile-service-item:nth-child(3) { animation-delay: 0.15s; }
          .mobile-service-item:nth-child(4) { animation-delay: 0.2s; }
          .mobile-service-item:nth-child(5) { animation-delay: 0.25s; }
          .mobile-service-item:nth-child(6) { animation-delay: 0.3s; }

          @keyframes slideInStagger {
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          .mobile-service-item::before {
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            width: 0;
            height: 100%;
            background: linear-gradient(90deg, rgba(255, 107, 53, 0.15) 0%, rgba(255, 107, 53, 0.05) 100%);
            transition: width 0.3s var(--ease-out-expo, cubic-bezier(0.16, 1, 0.3, 1));
            z-index: 0;
          }

          .mobile-service-item::after {
            content: "";
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            width: 3px;
            height: 0;
            background: linear-gradient(180deg, #ff6b35, #ff8f65);
            transition: height 0.3s ease;
            z-index: 1;
          }

          .mobile-service-item:hover::before {
            width: 100%;
          }

          .mobile-service-item:hover::after {
            height: 70%;
          }

          .mobile-service-item:hover {
            background: rgba(255, 107, 53, 0.1);
            transform: translateX(12px);
            border-color: rgba(249, 115, 22, 0.4);
            box-shadow: 0 6px 20px rgba(255, 107, 53, 0.2);
          }

          .mobile-service-icon {
            font-size: 1.25rem;
            flex-shrink: 0;
            transition: all 0.3s var(--ease-in-out, cubic-bezier(0.4, 0, 0.2, 1));
            z-index: 2;
            position: relative;
          }

          .mobile-service-item:hover .mobile-service-icon {
            transform: scale(1.15) rotate(5deg);
            filter: brightness(1.3) drop-shadow(0 0 8px rgba(255, 107, 53, 0.4));
          }

          .mobile-service-content {
            display: flex;
            flex-direction: column;
            gap: 0.25rem;
            z-index: 2;
            position: relative;
          }

          .mobile-service-title {
            color: #e2e8f0;
            font-weight: 500;
            font-size: 0.95rem;
            transition: all 0.3s var(--ease-in-out, cubic-bezier(0.4, 0, 0.2, 1));
          }

          .mobile-service-desc {
            color: #94a3b8;
            font-size: 0.8rem;
            transition: all 0.3s var(--ease-in-out, cubic-bezier(0.4, 0, 0.2, 1));
          }

          .mobile-service-item:hover .mobile-service-title {
            color: #ff6b35;
            transform: translateX(4px);
          }

          .mobile-service-item:hover .mobile-service-desc {
            color: #cbd5e1;
            transform: translateX(4px);
          }

          .services-dropdown:hover .mega-dropdown {
            display: none !important;
          }

          /* Ensure dropdown works on desktop */
          @media (min-width: 769px) {
            .services-dropdown:hover .mega-dropdown {
              display: block !important;
              opacity: 1 !important;
              visibility: visible !important;
              transform: translateX(-50%) translateY(0) !important;
              pointer-events: auto !important;
            }
          }

          .dropdown-arrow {
            transition: transform 0.3s ease, color 0.3s ease !important;
          }

          .services-dropdown .dropdown-arrow.open {
            transform: rotate(180deg) !important;
            color: #f97316 !important;
          }

                     .nav-links {
             position: fixed;
             top: 0;
             right: -100%;
             width: 300px;
             height: 100vh;
             background: linear-gradient(180deg, #0f172a 0%, #1e293b 100%);
             flex-direction: column;
             justify-content: flex-start;
             align-items: stretch;
             padding: 5rem 0 2rem;
             transition: right 0.3s cubic-bezier(0.4, 0, 0.2, 1);
             box-shadow: -5px 0 20px rgba(0, 0, 0, 0.3);
             border-left: 1px solid rgba(249, 115, 22, 0.2);
             overflow-y: auto;
             z-index: 1002;
             display: flex !important;
             backdrop-filter: blur(20px);
           }

           .nav-links.open {
             right: 0;
           }

                     .nav-links li {
             width: 100%;
             margin-bottom: 0.25rem;
           }

                     .nav-links a {
             display: block;
             width: 100%;
             padding: 1rem 1.25rem;
             color: #e2e8f0;
             border-radius: 0.75rem;
             background: rgba(255, 255, 255, 0.05);
             margin-bottom: 0.25rem;
             transition: all 0.3s var(--ease-in-out, cubic-bezier(0.4, 0, 0.2, 1));
             border: 1px solid transparent;
             position: relative;
             overflow: hidden;
             font-weight: 500;
           }

          .nav-links a::before {
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            width: 0;
            height: 100%;
            background: linear-gradient(90deg, rgba(255, 107, 53, 0.12) 0%, transparent 100%);
            transition: width 0.3s var(--ease-out-expo, cubic-bezier(0.16, 1, 0.3, 1));
            z-index: 0;
          }

          .nav-links a:hover::before {
            width: 100%;
          }

          .nav-links a:hover {
            background: rgba(255, 107, 53, 0.08);
            transform: translateX(8px);
            border-color: rgba(249, 115, 22, 0.3);
            color: #f97316;
            box-shadow: 0 4px 15px rgba(255, 107, 53, 0.12);
          }

                     .mobile-cta {
             display: block !important;
             margin-top: 0.5rem;
           }

          .stats {
            display: none;
          }

          .nav-container {
            padding: 1rem;
          }

          .logo {
            font-size: 1.5rem;
          }
        }

        /* Small Mobile Styles */
        @media (max-width: 480px) {
          .nav-links {
            width: 100%;
            right: -100%;
            padding: 5rem 1rem 2rem;
          }

          .nav-container {
            padding: 0.75rem;
          }

          .logo {
            font-size: 1.25rem;
          }

          .hamburger {
            width: 30px;
            height: 3px;
          }
        }

        /* Large Desktop Styles */
        @media (min-width: 1200px) {
          .mega-dropdown {
            width: 950px;
          }

          .nav-container {
            max-width: 1600px;
            padding: 1rem 3rem;
          }
        }

        @media (min-width: 1400px) {
          .mega-dropdown {
            width: 1000px;
          }
        }
      `}</style>
    </>
  );
};

export default Header;
