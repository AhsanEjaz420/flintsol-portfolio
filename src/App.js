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
import CostCalculator from './Pages/Costcalculator';
import IndustriesSlider from './Pages/IndustriesSlider';
import MVPModal from './Components/MVPModal';
import ScrollToTop from './Components/ScrollToTop';
import { ZikrAI, Eden, FaithCoach, NxtGenAI } from './Pages/products';


// Wrapper component to handle location-based modal logic
function AppContent() {
  const [showMVPModal, setShowMVPModal] = useState(false);
  const [hasShownModal, setHasShownModal] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Check if user has already seen the modal on this session
    const modalShown = sessionStorage.getItem('mvpModalShown');
    
    // Only show modal on homepage (/) and if not shown before
    if (!modalShown && location.pathname === '/') {
      // Show MVP modal only on first visit to homepage
      const timer = setTimeout(() => {
        setShowMVPModal(true);
        setHasShownModal(true);
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
      <MVPModal 
        isOpen={showMVPModal} 
        onClose={() => setShowMVPModal(false)} 
      />
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

    // Dynamic typing effect for hero subtitle
    function typeWriter(element, text, speed = 100) {
      let i = 0;
      element.innerHTML = '';
      function type() {
        if (i < text.length) {
          element.innerHTML += text.charAt(i);
          i++;
          setTimeout(type, speed);
        }
      }
      type();
    }
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
    const loadingScreen = document.createElement('div');
    loadingScreen.innerHTML = `
      <div style="
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10000;
        transition: opacity 0.5s ease;
      ">
        <div style="text-align: center; color: white;">
          <div style="
            width: 50px;
            height: 50px;
            border: 3px solid rgba(255, 107, 53, 0.3);
            border-top: 3px solid #ff6b35;
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin: 0 auto 20px;
          "></div>
          <h2 style="color: #ff6b35; margin: 0;">Flint Sol</h2>
          <p style="margin: 10px 0 0; opacity: 0.8;">Loading Innovation...</p>
        </div>
      </div>
    `;
    const spinAnimation = document.createElement('style');
    spinAnimation.textContent = `
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `;
    document.head.appendChild(spinAnimation);
    document.body.appendChild(loadingScreen);
    setTimeout(() => {
      loadingScreen.style.opacity = '0';
      setTimeout(() => {
        loadingScreen.remove();
      }, 500);
    }, 1500);

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
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
