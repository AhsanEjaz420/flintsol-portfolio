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
  blockchain: 'bg-gradient-to-br from-slate-900 via-yellow-900 to-slate-800',
};

const FlintSolServices = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState("ai");
  const [aiConfig] = useState({
    complexity: "basic",
    features: [],
    timeline: "3-6",
  });

  const [mobileConfig] = useState({
    platform: "single",
    complexity: "basic",
    features: [],
    timeline: "2-4",
  });

  const [webConfig] = useState({
    type: "landing",
    features: [],
    complexity: "basic",
    timeline: "2-3",
  });

  const [resourceConfig] = useState({
    role: "developer",
    experience: "mid",
    duration: "3",
    count: 1,
  });


  // Update currentPage based on the ?service= query param
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const service = params.get("service");
    if (service) setCurrentPage(service);
  }, [location.search]);

  const calculateAICost = () => {
    let baseCost =
      aiConfig.complexity === "basic"
        ? 15000
        : aiConfig.complexity === "advanced"
        ? 35000
        : 75000;
    baseCost += aiConfig.features.length * 5000;
    return baseCost;
  };

  const calculateMobileCost = () => {
    let baseCost = mobileConfig.platform === "single" ? 12000 : 20000;
    baseCost +=
      mobileConfig.complexity === "basic"
        ? 0
        : mobileConfig.complexity === "advanced"
        ? 8000
        : 18000;
    baseCost += mobileConfig.features.length * 3000;
    return baseCost;
  };

  const AIAutomation = () => (
    <div
      className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800"
      style={{ fontFamily: "inherit" }}
    >
      {/* Header */}
      <div className="container mx-auto px-6 py-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mt-10 w-20 h-20 bg-orange-500 rounded-2xl mb-6">
            <Bot className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-white mb-4">
            AI & Automation
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
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
              className="bg-slate-800/50 rounded-xl p-6 backdrop-blur-sm border border-slate-700"
            >
              <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                <Star className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400">{feature.desc}</p>
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800">
      <div className="container mx-auto px-6 py-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mt-10 w-20 h-20 bg-orange-500 rounded-2xl mb-6">
            <Smartphone className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-white mb-4">
            Mobile App Development
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
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
              className="bg-slate-800/50 rounded-xl p-6 backdrop-blur-sm border border-slate-700"
            >
              <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                <Star className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400">{feature.desc}</p>
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-800">
      <div className="container mx-auto px-6 py-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mt-10 w-20 h-20 bg-orange-500 rounded-2xl mb-6">
            <Globe className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-white mb-4">
            Web Development
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
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
              className="bg-slate-800/50 rounded-xl p-6 backdrop-blur-sm border border-slate-700"
            >
              <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                <Star className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400">{feature.desc}</p>
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-800">
      <div className="container mx-auto px-6 py-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mt-10 w-20 h-20 bg-orange-500 rounded-2xl mb-6">
            <Users className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-white mb-4">
            Resource Augmentation
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
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
              className="bg-slate-800/50 rounded-xl p-6 backdrop-blur-sm border border-slate-700"
            >
              <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                <Star className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400">{feature.desc}</p>
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
    <div className={`min-h-screen ${heroBackgrounds.blockchain}`}>
      <div className="container mx-auto px-6 py-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mt-10 w-20 h-20 bg-orange-500 rounded-2xl mb-6 shadow-lg shadow-orange-500/25">
            <Shield className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-white mb-4 bg-gradient-to-r from-white to-yellow-200 bg-clip-text text-transparent">
            Blockchain Development
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
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
              className="bg-slate-800/50 rounded-xl p-6 backdrop-blur-sm border border-slate-700 hover:border-amber-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg flex items-center justify-center mb-4">
                <Coins className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400">{feature.desc}</p>
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
    <div className="min-h-screen bg-slate-900 pt-20">
      {/* Page Content */}
      {renderCurrentPage()}
    </div>
  );
};

export default FlintSolServices;
