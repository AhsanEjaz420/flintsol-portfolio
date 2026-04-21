import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Hero from './Components/Hero';
import About from './Components/About';
// Services component removed - using OurServices page instead
import Portfolio from './Components/Portfolio';
import Industries from './Components/Industries';
import Connectus from './Components/Connectus';
import Footer from './Components/Footer';
import OurServices from './Pages/OurServices';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import MVPServicesShowcase from './Pages/MVPServices';
import FlintSolServices from './Pages/FlintSolServices';
import Costcalculator from './Pages/Costcalculator';
import Coreservices from './Components/Coreservices';
import ResourceAugmentationCalculator from './Pages/ResourceAugmentationCalculator';
import PortfolioSlider from './Pages/PortfolioSlider';
import CustomerSupportChatbot from './Pages/CustomerSupportChatbot';
import IndustriesSlider from './Pages/IndustriesSlider';
import MVPModal from './Components/MVPModal';
import ScrollToTop from './Components/ScrollToTop';
import { ZikrAI, Eden, FaithCoach, NxtGenAI } from './Pages/products';
import { DataProvider } from './contexts/DataContext';


// Wrapper component to handle location-based modal logic
function AppContent() {
  const [showMVPModal, setShowMVPModal] = useState(false);
  const [isModalCheckComplete, setIsModalCheckComplete] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Check if user has already seen the modal on this session
    const modalShown = sessionStorage.getItem('mvpModalShown');
    
    // Mark check as complete immediately to prevent flash
    setIsModalCheckComplete(true);
    
    // Only show modal on homepage (/) and if not shown before
    if (!modalShown && location.pathname === '/') {
      // Show MVP modal only on first visit to homepage
      const timer = setTimeout(() => {
        setShowMVPModal(true);
        // Mark as shown in session storage
        sessionStorage.setItem('mvpModalShown', 'true');
      }, 2000); // Show after 2 seconds

      return () => clearTimeout(timer);
    }
  }, [location.pathname]);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              {/* <About /> */}
              <ResourceAugmentationCalculator />
              <Coreservices />
              <PortfolioSlider />
              <IndustriesSlider />
              <Connectus />
              {/* <Services /> */}
              {/* Show chatbot only on home route */}
              <CustomerSupportChatbot />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<OurServices />} />
        {/* <Route path="/portfolio" element={<Portfolio />} /> */}
        <Route path="/industries" element={<Industries />} />
        <Route path="/contact" element={<Connectus />} />
        <Route path="/our-services" element={<OurServices />} />
        <Route path="/Core-services" element={<FlintSolServices />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Costcalculator" element={<Costcalculator />} />
        <Route path="/mvp-services" element={<MVPServicesShowcase />} />
        {/* Product Detail Pages */}
        <Route path="/product/zikr-ai" element={<ZikrAI />} />
        <Route path="/product/eden" element={<Eden />} />
        <Route path="/product/faith-coach" element={<FaithCoach />} />
        <Route path="/product/nxtgenai" element={<NxtGenAI />} />
      </Routes>
      <ScrollToTop />
      <CustomerSupportChatbot />

      <Footer />
      
      {/* MVP Modal - Shows only on homepage first visit */}
      {isModalCheckComplete && (
        <MVPModal 
          isOpen={showMVPModal} 
          onClose={() => setShowMVPModal(false)} 
        />
      )}
    </div>
  );
}

function App() {

  useEffect(() => {
    // --- Place your script logic here, adapted for React ---
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });

    // Scroll animations
    function animateOnScroll() {
      const elements = document.querySelectorAll('.animate-on-scroll, .animate-left, .animate-right');
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('animated');
        }
      });
    }

    // Stagger animations for grids
    function staggerAnimation(selector, delay = 100) {
      const elements = document.querySelectorAll(selector);
      elements.forEach((element, index) => {
        setTimeout(() => {
          element.classList.add('animated');
        }, index * delay);
      });
    }

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();

    setTimeout(() => {
      staggerAnimation('.portfolio-card', 150);
      staggerAnimation('.service-card', 200);
      staggerAnimation('.industry-card', 100);
    }, 500);

    // Parallax effect for floating elements
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const parallax = document.querySelectorAll('.floating-element');
      const speed = 0.5;
      parallax.forEach(element => {
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px)`;
      });
    });

    // Hover effect for cards
    document.querySelectorAll('.about-card, .service-card, .portfolio-card').forEach(card => {
      card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
      });
      card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
      });
    });

    // setTimeout(() => {
    //   const heroSubtitle = document.querySelector('.hero-subtitle');
    //   if (heroSubtitle) typeWriter(heroSubtitle, 'Digital Innovation', 150);
    // }, 1000);

    // Particle effect for hero section
    function createParticles() {
      const hero = document.querySelector('.hero');
      if (!hero) return;
      const particleCount = 50;
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
          position: absolute;
          width: 2px;
          height: 2px;
          background: rgba(255, 107, 53, 0.5);
          border-radius: 50%;
          pointer-events: none;
          animation: particleFloat ${5 + Math.random() * 10}s linear infinite;
        `;
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 10 + 's';
        hero.appendChild(particle);
      }
    }
    // Add particle float animation
    const style = document.createElement('style');
    style.textContent = `
      @keyframes particleFloat {
        0% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
        10% { opacity: 1; }
        90% { opacity: 1; }
        100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
      }
    `;
    document.head.appendChild(style);
    createParticles();

    // Interactive cursor effect
    let cursor = document.createElement('div');
    cursor.classList.add('cursor');
    document.body.appendChild(cursor);
    const cursorStyle = document.createElement('style');
    cursorStyle.textContent = `
      .cursor {
        width: 20px;
        height: 20px;
        background: rgba(255, 107, 53, 0.8);
        border-radius: 50%;
        position: fixed;
        pointer-events: none;
        z-index: 9999;
        mix-blend-mode: difference;
        transition: transform 0.1s ease;
      }
      .cursor.clicked { transform: scale(0.5); }
    `;
    document.head.appendChild(cursorStyle);
    document.addEventListener('mousemove', (e) => {
      cursor.style.left = e.clientX - 10 + 'px';
      cursor.style.top = e.clientY - 10 + 'px';
    });
    document.addEventListener('mousedown', () => {
      cursor.classList.add('clicked');
    });
    document.addEventListener('mouseup', () => {
      cursor.classList.remove('clicked');
    });

    // Intersection observer for animations
    const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 };
    const observer = new window.IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    document.querySelectorAll('.animate-on-scroll, .animate-left, .animate-right').forEach(el => {
      observer.observe(el);
    });

    // Loading screen
    const taglines = [
      "Sparking ideas into digital reality",
      "Igniting innovation...",
      "Transforming businesses...",
      "Building the future...",
      "Empowering digital transformation..."
    ];
    const tagline = taglines[Math.floor(Math.random() * taglines.length)];

    const loadingScreen = document.createElement('div');
    loadingScreen.innerHTML = `
      <div style="
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 50%, #F9F9F7 100%);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10000;
        transition: opacity 0.3s ease;
      ">
        <div style="text-align: center; font-family: var(--font-sans); display: flex; flex-direction: column; align-items: center; justify-content: center;">
          <div style="
            width: 60px;
            height: 60px;
            margin: 0 auto 24px;
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
          ">
            <div style="
              position: absolute;
              width: 40px;
              height: 40px;
              background: linear-gradient(135deg, #ff6b35, #ff8f65);
              border-radius: 50%;
              animation: pulse 1.5s ease-in-out infinite;
            "></div>
            <div style="
              position: absolute;
              width: 25px;
              height: 25px;
              background: #FFFFFF;
              border-radius: 50%;
              animation: pulse-inner 1.5s ease-in-out infinite 0.3s;
            "></div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style="position: relative; z-index: 2;">
              <path d="M12 2L15 9L22 9L17 13L19 20L12 16L5 20L7 13L2 9L9 9L12 2Z" fill="#ff6b35" />
            </svg>
          </div>
          <h2 style="color: #121D1A; margin: 0 0 8px; font-weight: bold; font-size: 1.8rem;">Flint Sol</h2>
          <p style="margin: 0; color: #666666; font-size: 1rem; min-height: 24px;">${tagline}</p>
          <div style="
            position: fixed;
            bottom: 40px;
            left: 50%;
            transform: translateX(-50%);
            width: 200px;
            height: 3px;
            background: rgba(255, 107, 53, 0.2);
            border-radius: 2px;
            overflow: hidden;
          ">
            <div style="
              width: 0%;
              height: 100%;
              background: linear-gradient(90deg, #ff6b35, #ff8f65);
              border-radius: 2px;
              animation: progress 1.2s ease-out forwards;
            "></div>
          </div>
        </div>
      </div>
    `;
    const loadingStyles = document.createElement('style');
    loadingStyles.textContent = `
      @keyframes pulse {
        0%, 100% { transform: scale(1); opacity: 0.5; }
        50% { transform: scale(1.3); opacity: 0.2; }
      }
      @keyframes pulse-inner {
        0%, 100% { transform: scale(1); opacity: 0.8; }
        50% { transform: scale(1.1); opacity: 0.4; }
      }
      @keyframes progress {
        0% { width: 0%; }
        100% { width: 100%; }
      }
    `;
    document.head.appendChild(loadingStyles);
    document.body.appendChild(loadingScreen);

    // Show the React root content after a short delay to ensure loading screen is visible
    const root = document.getElementById('root');
    if (root) {
      // Small delay to ensure loading screen renders first
      requestAnimationFrame(() => {
        root.classList.add('content-visible');
      });
    }

    setTimeout(() => {
      loadingScreen.style.opacity = '0';
      setTimeout(() => {
        loadingScreen.remove();
      }, 300);
    }, 1200);

    // Scroll progress indicator
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 0%;
      height: 3px;
      background: linear-gradient(45deg, #ff6b35, #ff8c42);
      z-index: 9999;
      transition: width 0.3s ease;
    `;
    document.body.appendChild(progressBar);
    window.addEventListener('scroll', () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      progressBar.style.width = scrolled + '%';
    });
  }, []);

  return (
    <DataProvider>
      <Router>
        <AppContent />
      </Router>
    </DataProvider>
  );
}

export default App;
