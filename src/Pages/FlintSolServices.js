import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  Bot,
  Smartphone,
  Globe,
  Users,
  Star,
  Shield,
  Coins,
} from "lucide-react";
import CostCalculator from "./Costcalculator";
import ResourceAugmentationCalculator from "./ResourceAugmentationCalculator";
import BlockchainCostCalculator from "./BlockchainCostCalculator";

const heroBackgrounds = {
  blockchain: 'bg-gradient-to-br from-black via-gray-900 to-black',
};

const FlintSolServices = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState("ai");
  // eslint-disable-next-line no-unused-vars
  const [aiConfig] = useState({
    complexity: "basic",
    features: [],
    timeline: "3-6",
  });

  // eslint-disable-next-line no-unused-vars
  const [mobileConfig] = useState({
    platform: "single",
    complexity: "basic",
    features: [],
    timeline: "2-4",
  });
  // eslint-disable-next-line no-unused-vars
  const webConfig = {};
  // eslint-disable-next-line no-unused-vars
  const resourceConfig = {};
  // eslint-disable-next-line no-unused-vars
  const calculateAICost = () => 0;
  // eslint-disable-next-line no-unused-vars
  const calculateMobileCost = () => 0;


  // Update currentPage based on the ?service= query param
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const service = params.get("service");
    if (service) setCurrentPage(service);
  }, [location.search]);

  const AIAutomation = () => (
    <div
      className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden"
      style={{ fontFamily: "inherit" }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-orange-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gray-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '12s', animationDelay: '4s' }}></div>
      </div>

      {/* Header */}
      <div className="container mx-auto px-4 sm:px-6 py-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mt-8 sm:mt-10 w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 bg-gradient-to-br from-orange-500 via-orange-600 to-orange-500 rounded-3xl mb-6 sm:mb-8 shadow-2xl shadow-orange-500/40 animate-bounce-slow">
            <Bot className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 text-white" />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 tracking-tight bg-gradient-to-r from-white via-orange-200 to-white bg-clip-text text-transparent animate-gradient">
            AI & Automation
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Transform your business with cutting-edge artificial intelligence
            solutions that automate processes, enhance decision-making, and
            drive unprecedented growth through intelligent automation.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: "Machine Learning Models",
              desc: "Custom ML algorithms tailored to your business needs",
            },
            {
              title: "Process Automation",
              desc: "Streamline workflows with intelligent automation",
            },
            {
              title: "Predictive Analytics",
              desc: "Forecast trends and make data-driven decisions",
            },
            {
              title: "Natural Language Processing",
              desc: "Extract insights from unstructured text data",
            },
            {
              title: "Computer Vision",
              desc: "Analyze and interpret visual content automatically",
            },
            {
              title: "Chatbots & Virtual Assistants",
              desc: "24/7 customer support with AI-powered interactions",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="group relative bg-gray-800/30 backdrop-blur-2xl rounded-3xl p-8 border border-gray-700/50 hover:border-orange-500/60 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/30 overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Card Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 via-orange-500/0 to-orange-500/0 group-hover:from-orange-500/10 group-hover:via-orange-500/5 group-hover:to-orange-500/0 transition-all duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 via-orange-600 to-orange-500 rounded-2xl flex items-center justify-center mb-6 shadow-xl shadow-orange-500/30 group-hover:shadow-2xl group-hover:shadow-orange-500/50 transition-all duration-500 group-hover:scale-110">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-orange-200 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div
          style={{
            width: "100vw",
            background: "transparent",
            marginLeft: "calc(-50vw + 50%)",
          }}
        >
          <CostCalculator />
        </div>
        {/* <Link to="/Costcalculator" className="cta-button">
  Calculate Cost
</Link> */}
        {/* Cost Calculator */}
        {/* <div className="bg-slate-800/50 rounded-2xl p-8 backdrop-blur-sm border border-slate-700">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
            <Calculator className="w-8 h-8 mr-3 text-orange-500" />
            AI Solution Cost Calculator
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <label className="block text-white font-semibold mb-2">Project Complexity</label>
                <select 
                  className="w-full bg-slate-700 text-white p-3 rounded-lg border border-slate-600"
                  value={aiConfig.complexity}
                  onChange={(e) => setAiConfig({...aiConfig, complexity: e.target.value})}
                >
                  <option value="basic">Basic AI Implementation</option>
                  <option value="advanced">Advanced AI System</option>
                  <option value="enterprise">Enterprise AI Solution</option>
                </select>
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">Additional Features</label>
                <div className="space-y-2">
                  {['Real-time Processing', 'API Integration', 'Custom Dashboard', 'Data Visualization', 'Mobile Access'].map((feature) => (
                    <label key={feature} className="flex items-center text-gray-300">
                      <input
                        type="checkbox"
                        className="mr-2 text-orange-500"
                        onChange={(e) => {
                          if (e.target.checked) {
                            setAiConfig({...aiConfig, features: [...aiConfig.features, feature]});
                          } else {
                            setAiConfig({...aiConfig, features: aiConfig.features.filter(f => f !== feature)});
                          }
                        }}
                      />
                      {feature}
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">Timeline (months)</label>
                <select 
                  className="w-full bg-slate-700 text-white p-3 rounded-lg border border-slate-600"
                  value={aiConfig.timeline}
                  onChange={(e) => setAiConfig({...aiConfig, timeline: e.target.value})}
                >
                  <option value="3-6">3-6 months</option>
                  <option value="6-12">6-12 months</option>
                  <option value="12+">12+ months</option>
                </select>
              </div>
            </div>

            <div className="bg-slate-700/50 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-white mb-4">Estimated Cost</h3>
              <div className="text-4xl font-bold text-orange-500 mb-4">
                ${calculateAICost().toLocaleString()}
              </div>
              <div className="space-y-2 text-gray-300">
                <div className="flex justify-between">
                  <span>Base Cost:</span>
                  <span>${(aiConfig.complexity === 'basic' ? 15000 : aiConfig.complexity === 'advanced' ? 35000 : 75000).toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Features ({aiConfig.features.length}):</span>
                  <span>${(aiConfig.features.length * 5000).toLocaleString()}</span>
                </div>
                <hr className="border-slate-600" />
                <div className="flex justify-between font-semibold text-white">
                  <span>Total:</span>
                  <span>${calculateAICost().toLocaleString()}</span>
                </div>
              </div>
              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg mt-6 transition-colors">
                Get Detailed Quote
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );

  const MobileAppDevelopment = () => (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-orange-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gray-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '12s', animationDelay: '4s' }}></div>
      </div>

      {/* Header */}
      <div className="container mx-auto px-4 sm:px-6 py-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mt-8 sm:mt-10 w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 bg-gradient-to-br from-orange-500 via-orange-600 to-orange-500 rounded-3xl mb-6 sm:mb-8 shadow-2xl shadow-orange-500/40 animate-bounce-slow">
            <Smartphone className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 text-white" />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 tracking-tight bg-gradient-to-r from-white via-orange-200 to-white bg-clip-text text-transparent animate-gradient">
            Mobile App Development
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Create stunning, high-performance mobile applications that engage
            users and drive business growth. From native iOS and Android apps to
            cross-platform solutions, we deliver mobile experiences that matter.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: "Native iOS Development",
              desc: "Swift-based apps optimized for Apple ecosystem",
            },
            {
              title: "Native Android Development",
              desc: "Kotlin/Java apps for Google Play Store",
            },
            {
              title: "Cross-Platform Solutions",
              desc: "React Native and Flutter development",
            },
            {
              title: "UI/UX Design",
              desc: "Intuitive interfaces that users love",
            },
            {
              title: "Backend Integration",
              desc: "Seamless API connections and data sync",
            },
            {
              title: "App Store Optimization",
              desc: "Launch and marketing support",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="group relative bg-gray-800/30 backdrop-blur-2xl rounded-3xl p-8 border border-gray-700/50 hover:border-orange-500/60 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/30 overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Card Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 via-orange-500/0 to-orange-500/0 group-hover:from-orange-500/10 group-hover:via-orange-500/5 group-hover:to-orange-500/0 transition-all duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 via-orange-600 to-orange-500 rounded-2xl flex items-center justify-center mb-6 shadow-xl shadow-orange-500/30 group-hover:shadow-2xl group-hover:shadow-orange-500/50 transition-all duration-500 group-hover:scale-110">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-orange-200 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
        {/* <Link to="/Costcalculator" className="cta-button">
  Calculate Cost
</Link> */}
        <div
          style={{
            width: "100vw",
            background: "transparent",
            marginLeft: "calc(-50vw + 50%)",
          }}
        >
          <CostCalculator />
        </div>
        {/* Cost Calculator */}
        {/* <div className="bg-slate-800/50 rounded-2xl p-8 backdrop-blur-sm border border-slate-700">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
            <Calculator className="w-8 h-8 mr-3 text-orange-500" />
            Mobile App Cost Calculator
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <label className="block text-white font-semibold mb-2">Platform</label>
                <select 
                  className="w-full bg-slate-700 text-white p-3 rounded-lg border border-slate-600"
                  value={mobileConfig.platform}
                  onChange={(e) => setMobileConfig({...mobileConfig, platform: e.target.value})}
                >
                  <option value="single">Single Platform (iOS or Android)</option>
                  <option value="cross">Cross-Platform (iOS + Android)</option>
                </select>
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">App Complexity</label>
                <select 
                  className="w-full bg-slate-700 text-white p-3 rounded-lg border border-slate-600"
                  value={mobileConfig.complexity}
                  onChange={(e) => setMobileConfig({...mobileConfig, complexity: e.target.value})}
                >
                  <option value="basic">Basic (Simple UI, Basic Features)</option>
                  <option value="advanced">Advanced (Custom UI, Complex Features)</option>
                  <option value="enterprise">Enterprise (Advanced Security, Integrations)</option>
                </select>
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">Features</label>
                <div className="space-y-2">
                  {['Push Notifications', 'In-App Purchases', 'Social Media Integration', 'Offline Functionality', 'Location Services'].map((feature) => (
                    <label key={feature} className="flex items-center text-gray-300">
                      <input
                        type="checkbox"
                        className="mr-2 text-orange-500"
                        onChange={(e) => {
                          if (e.target.checked) {
                            setMobileConfig({...mobileConfig, features: [...mobileConfig.features, feature]});
                          } else {
                            setMobileConfig({...mobileConfig, features: mobileConfig.features.filter(f => f !== feature)});
                          }
                        }}
                      />
                      {feature}
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-slate-700/50 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-white mb-4">Estimated Cost</h3>
              <div className="text-4xl font-bold text-orange-500 mb-4">
                ${calculateMobileCost().toLocaleString()}
              </div>
              <div className="space-y-2 text-gray-300">
                <div className="flex justify-between">
                  <span>Platform Cost:</span>
                  <span>${(mobileConfig.platform === 'single' ? 12000 : 20000).toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Complexity:</span>
                  <span>${(mobileConfig.complexity === 'basic' ? 0 : mobileConfig.complexity === 'advanced' ? 8000 : 18000).toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Features ({mobileConfig.features.length}):</span>
                  <span>${(mobileConfig.features.length * 3000).toLocaleString()}</span>
                </div>
                <hr className="border-slate-600" />
                <div className="flex justify-between font-semibold text-white">
                  <span>Total:</span>
                  <span>${calculateMobileCost().toLocaleString()}</span>
                </div>
              </div>
              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg mt-6 transition-colors">
                Get Detailed Quote
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );

  const WebDevelopment = () => (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-orange-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gray-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '12s', animationDelay: '4s' }}></div>
      </div>

      {/* Header */}
      <div className="container mx-auto px-4 sm:px-6 py-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mt-8 sm:mt-10 w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 bg-gradient-to-br from-orange-500 via-orange-600 to-orange-500 rounded-3xl mb-6 sm:mb-8 shadow-2xl shadow-orange-500/40 animate-bounce-slow">
            <Globe className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 text-white" />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 tracking-tight bg-gradient-to-r from-white via-orange-200 to-white bg-clip-text text-transparent animate-gradient">
            Web Development
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Build powerful, scalable web applications that captivate users and
            drive business success. From responsive websites to complex web
            platforms, we create digital experiences that perform.
          </p>
        </div>
        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: "Responsive Design",
              desc: "Perfect experience across all devices",
            },
            {
              title: "E-commerce Solutions",
              desc: "Secure online stores with payment gateways",
            },
            {
              title: "Content Management",
              desc: "Easy-to-use CMS for content updates",
            },
            {
              title: "SEO Optimization",
              desc: "Built for search engine visibility",
            },
            {
              title: "Performance Optimization",
              desc: "Lightning-fast loading speeds",
            },
            {
              title: "Security Implementation",
              desc: "Enterprise-grade security measures",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="group relative bg-gray-800/30 backdrop-blur-2xl rounded-3xl p-8 border border-gray-700/50 hover:border-orange-500/60 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/30 overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Card Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 via-orange-500/0 to-orange-500/0 group-hover:from-orange-500/10 group-hover:via-orange-500/5 group-hover:to-orange-500/0 transition-all duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 via-orange-600 to-orange-500 rounded-2xl flex items-center justify-center mb-6 shadow-xl shadow-orange-500/30 group-hover:shadow-2xl group-hover:shadow-orange-500/50 transition-all duration-500 group-hover:scale-110">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-orange-200 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
        {/* <Link to="/Costcalculator" className="cta-button">
  Calculate Cost
</Link> */}
        <div
          style={{
            width: "100vw",
            background: "transparent",
            marginLeft: "calc(-50vw + 50%)",
          }}
        >
          <CostCalculator />
        </div>{" "}

      </div>
    </div>
  );

  const ResourceAugmentation = () => (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-orange-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gray-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '12s', animationDelay: '4s' }}></div>
      </div>

      {/* Header */}
      <div className="container mx-auto px-4 sm:px-6 py-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mt-8 sm:mt-10 w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 bg-gradient-to-br from-orange-500 via-orange-600 to-orange-500 rounded-3xl mb-6 sm:mb-8 shadow-2xl shadow-orange-500/40 animate-bounce-slow">
            <Users className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 text-white" />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 tracking-tight bg-gradient-to-r from-white via-orange-200 to-white bg-clip-text text-transparent animate-gradient">
            Resource Augmentation
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Scale your team with top-tier professionals who integrate seamlessly
            with your existing workforce. Access specialized skills and
            expertise to accelerate your projects and achieve ambitious goals.
          </p>
        </div>
        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: "Expert Developers",
              desc: "Senior developers with proven track records",
            },
            {
              title: "UI/UX Designers",
              desc: "Creative professionals for exceptional designs",
            },
            {
              title: "Project Managers",
              desc: "Experienced PMs to drive project success",
            },
            {
              title: "QA Engineers",
              desc: "Quality assurance experts for bug-free delivery",
            },
            {
              title: "DevOps Specialists",
              desc: "Infrastructure and deployment experts",
            },
            {
              title: "Flexible Engagement",
              desc: "Part-time, full-time, or project-based",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="group relative bg-gray-800/30 backdrop-blur-2xl rounded-3xl p-8 border border-gray-700/50 hover:border-orange-500/60 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/30 overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Card Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 via-orange-500/0 to-orange-500/0 group-hover:from-orange-500/10 group-hover:via-orange-500/5 group-hover:to-orange-500/0 transition-all duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 via-orange-600 to-orange-500 rounded-2xl flex items-center justify-center mb-6 shadow-xl shadow-orange-500/30 group-hover:shadow-2xl group-hover:shadow-orange-500/50 transition-all duration-500 group-hover:scale-110">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-orange-200 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
       
        <div
          style={{
            width: "100vw",
            background: "transparent",
            marginLeft: "calc(-50vw + 50%)",
          }}
        >
          <ResourceAugmentationCalculator />
        </div>{" "}

      </div>
    </div>
  );
 const BlockchainDevelopment = () => (
    <div className={`min-h-screen ${heroBackgrounds.blockchain} relative overflow-hidden`}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-orange-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gray-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '12s', animationDelay: '4s' }}></div>
      </div>

      {/* Header */}
      <div className="container mx-auto px-4 sm:px-6 py-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mt-8 sm:mt-10 w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 bg-gradient-to-br from-orange-500 via-orange-600 to-orange-500 rounded-3xl mb-6 sm:mb-8 shadow-2xl shadow-orange-500/40 animate-bounce-slow">
            <Shield className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 text-white" />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 tracking-tight bg-gradient-to-r from-white via-orange-200 to-white bg-clip-text text-transparent animate-gradient">
            Blockchain Development
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Build the future with secure, decentralized blockchain solutions. From smart contracts to DeFi platforms, 
            we create innovative blockchain applications that revolutionize industries and enable trustless transactions.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: "Smart Contracts",
              desc: "Self-executing contracts with automated terms",
            },
            {
              title: "DApp Development", 
              desc: "Decentralized applications on various blockchains",
            },
            {
              title: "DeFi Solutions",
              desc: "Decentralized finance protocols and platforms",
            },
            {
              title: "NFT Marketplaces",
              desc: "Create and trade unique digital assets",
            },
            {
              title: "Token Development",
              desc: "Custom cryptocurrency and utility tokens",
            },
            {
              title: "Blockchain Integration",
              desc: "Connect existing systems with blockchain",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="group relative bg-gray-800/30 backdrop-blur-2xl rounded-3xl p-8 border border-gray-700/50 hover:border-orange-500/60 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/30 overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Card Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 via-orange-500/0 to-orange-500/0 group-hover:from-orange-500/10 group-hover:via-orange-500/5 group-hover:to-orange-500/0 transition-all duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 via-orange-600 to-orange-500 rounded-2xl flex items-center justify-center mb-6 shadow-xl shadow-orange-500/30 group-hover:shadow-2xl group-hover:shadow-orange-500/50 transition-all duration-500 group-hover:scale-110">
                  <Coins className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-orange-200 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
<div
          style={{
            width: "100vw",
            background: "transparent",
            marginLeft: "calc(-50vw + 50%)",
          }}
        >
          <BlockchainCostCalculator />
        </div>{" "}
      </div>
    </div>
  );
  const renderCurrentPage = () => {
    switch (currentPage) {
      case "ai":
        return <AIAutomation />;
      case "mobile":
        return <MobileAppDevelopment />;
      case "web":
        return <WebDevelopment />;
      case "resource":
        return <ResourceAugmentation />;
      case "blockchain":
        return <BlockchainDevelopment />;
      default:
        return <AIAutomation />;
    }
  };

  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Page Content */}
      {renderCurrentPage()}
    </div>
  );
};

export default FlintSolServices;
