import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Hero from './Components/Hero';
import About from './Components/About';
import Services from './Components/Services';
import Portfolio from './Components/Portfolio';
import Industries from './Components/Industries';
import Connectus from './Components/Connectus';
import Footer from './Components/Footer';
import OurServices from './Pages/OurServices';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import MVPServicesShowcase from './Pages/MVPServices';
import FlintSolServices from './Pages/FlintSolServices';
import Costcalculator from './Pages/Costcalculator';
import Coreservices from './Components/Coreservices';
import PortfolioSlider from './Pages/PortfolioSlider';
import CustomerSupportChatbot from './Pages/CustomerSupportChatbot';
import CostCalculator from './Pages/Costcalculator';
import IndustriesSlider from './Pages/IndustriesSlider';
import MVPModal from './Components/MVPModal';

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
              <CostCalculator/>
              <Coreservices />
              <PortfolioSlider />
              <IndustriesSlider />
              <Connectus />
              <CustomerSupportChatbot />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/contact" element={<Connectus />} />
        <Route path="/our-services" element={<OurServices />} />
        <Route path="/Core-services" element={<FlintSolServices />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Costcalculator" element={<Costcalculator />} />
        <Route path="/mvp-services" element={<MVPServicesShowcase />} />
      </Routes>
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
    // All your existing useEffect code here...
    // (keeping the same as original App.js)
  }, []);

  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
