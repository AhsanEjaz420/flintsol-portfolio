import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X, Zap, Shield, Coins, Layers, Code, Link } from 'lucide-react';
import ReCAPTCHA from 'react-google-recaptcha';
import toast, { Toaster } from 'react-hot-toast';
import { sitekey } from '../constant';

const BlockchainCostCalculator = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [captchaValue, setCaptchaValue] = useState(null);
  const [selections, setSelections] = useState({
    projectType: '',
    complexity: '',
    features: [],
    timeline: '',
    team: ''
  });

  const HOURLY_RATE = 30;

  const steps = [
    {
      title: "Project Type",
      icon: <Layers className="w-8 h-8" />,
      question: "What type of blockchain project do you need?",
      options: [
        { id: 'smart-contract', name: 'Smart Contracts', description: 'Self-executing contracts with automated terms', hours: 120 },
        { id: 'dapp', name: 'DApp Development', description: 'Decentralized applications on various blockchains', hours: 200 },
        { id: 'defi', name: 'DeFi Solutions', description: 'Decentralized finance protocols and platforms', hours: 300 },
        { id: 'nft', name: 'NFT Marketplace', description: 'Create and trade unique digital assets', hours: 180 },
        { id: 'token', name: 'Token Development', description: 'Custom cryptocurrency and utility tokens', hours: 100 },
        { id: 'integration', name: 'Blockchain Integration', description: 'Connect existing systems with blockchain', hours: 150 }
      ]
    },
    {
      title: "Complexity Level",
      icon: <Code className="w-8 h-8" />,
      question: "What's the complexity level of your project?",
      options: [
        { id: 'basic', name: 'Basic', description: 'Simple functionality, standard features', multiplier: 1 },
        { id: 'intermediate', name: 'Intermediate', description: 'Moderate complexity, custom features', multiplier: 1.5 },
        { id: 'advanced', name: 'Advanced', description: 'High complexity, cutting-edge features', multiplier: 2 },
        { id: 'enterprise', name: 'Enterprise', description: 'Mission-critical, scalable solution', multiplier: 2.5 }
      ]
    },
    {
      title: "Additional Features",
      icon: <Zap className="w-8 h-8" />,
      question: "Select additional features you need:",
      multiple: true,
      options: [
        { id: 'admin-panel', name: 'Admin Panel', description: 'Management dashboard', hours: 40 },
        { id: 'mobile-app', name: 'Mobile App', description: 'iOS/Android application', hours: 80 },
        { id: 'api-integration', name: 'API Integration', description: 'Third-party service connections', hours: 30 },
        { id: 'security-audit', name: 'Security Audit', description: 'Comprehensive security review', hours: 50 },
        { id: 'documentation', name: 'Technical Documentation', description: 'Complete project documentation', hours: 25 },
        { id: 'deployment', name: 'Deployment & DevOps', description: 'Production deployment setup', hours: 35 }
      ]
    },
    {
      title: "Timeline",
      icon: <Shield className="w-8 h-8" />,
      question: "What's your preferred timeline?",
      options: [
        { id: 'rush', name: 'Rush (1-2 weeks)', description: 'Expedited delivery', multiplier: 1.5 },
        { id: 'standard', name: 'Standard (1-2 months)', description: 'Regular development pace', multiplier: 1 },
        { id: 'flexible', name: 'Flexible (3+ months)', description: 'Extended timeline, cost-effective', multiplier: 0.9 }
      ]
    },
    {
      title: "Team Size",
      icon: <Coins className="w-8 h-8" />,
      question: "Preferred team composition:",
      options: [
        { id: 'solo', name: 'Solo Developer', description: 'Single blockchain expert', multiplier: 1 },
        { id: 'small', name: 'Small Team (2-3)', description: 'Developer + Designer/PM', multiplier: 1.2 },
        { id: 'medium', name: 'Medium Team (4-6)', description: 'Full-stack team with specialists', multiplier: 1.5 },
        { id: 'large', name: 'Large Team (7+)', description: 'Enterprise team with all roles', multiplier: 2 }
      ]
    }
  ];

  const calculateTotalCost = () => {
    const projectType = steps[0].options.find(opt => opt.id === selections.projectType);
    const complexity = steps[1].options.find(opt => opt.id === selections.complexity);
    const timeline = steps[3].options.find(opt => opt.id === selections.timeline);
    const teamSize = steps[4].options.find(opt => opt.id === selections.team);

    if (!projectType || !complexity || !timeline || !teamSize) return 0;

    let totalHours = projectType.hours;
    
    // Add feature hours
    selections.features.forEach(featureId => {
      const feature = steps[2].options.find(opt => opt.id === featureId);
      if (feature) totalHours += feature.hours;
    });

    // Apply multipliers
    totalHours *= complexity.multiplier;
    totalHours *= timeline.multiplier;
    totalHours *= teamSize.multiplier;

    return Math.round(totalHours * HOURLY_RATE);
  };

  const handleOptionSelect = (stepIndex, optionId) => {
    const step = steps[stepIndex];
    const newSelections = { ...selections };

    if (step.multiple) {
      const currentFeatures = newSelections.features || [];
      if (currentFeatures.includes(optionId)) {
        newSelections.features = currentFeatures.filter(id => id !== optionId);
      } else {
        newSelections.features = [...currentFeatures, optionId];
      }
    } else {
      if (stepIndex === 0) newSelections.projectType = optionId;
      else if (stepIndex === 1) newSelections.complexity = optionId;
      else if (stepIndex === 3) newSelections.timeline = optionId;
      else if (stepIndex === 4) newSelections.team = optionId;
    }

    setSelections(newSelections);
  };

  const canProceed = () => {
    if (currentStep === 0) return selections.projectType;
    if (currentStep === 1) return selections.complexity;
    if (currentStep === 2) return true; // Features are optional
    if (currentStep === 3) return selections.timeline;
    if (currentStep === 4) return selections.team;
    return false;
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowModal(true);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!captchaValue) {
      toast.error('Please complete the reCAPTCHA verification');
      return;
    }

    setIsSubmitting(true);
    const totalCost = calculateTotalCost();

    try {
      // Here you would typically make an API call to your backend
      // For now, we'll simulate an API call with a timeout
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast.success(`Thank you ${formData.name}! We'll contact you soon with your quote.`);
      setShowModal(false);
      
      // Reset form
      setCurrentStep(0);
      setSelections({
        projectType: '',
        complexity: '',
        features: [],
        timeline: '',
        team: ''
      });
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: ''
      });
      setCaptchaValue(null);
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const currentStepData = steps[currentStep];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-500">Step {currentStep + 1} of {steps.length}</span>
              <div className="w-32 bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-orange-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-6">
            {currentStepData.icon}
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{currentStepData.title}</h2>
          <p className="text-xl text-gray-600">{currentStepData.question}</p>
        </div>

        {/* Options Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {currentStepData.options.map((option) => {
            const isSelected = currentStepData.multiple 
              ? selections.features?.includes(option.id)
              : (currentStep === 0 && selections.projectType === option.id) ||
                (currentStep === 1 && selections.complexity === option.id) ||
                (currentStep === 3 && selections.timeline === option.id) ||
                (currentStep === 4 && selections.team === option.id);

            return (
              <div
                key={option.id}
                onClick={() => handleOptionSelect(currentStep, option.id)}
                className={`relative p-6 rounded-xl border-2 cursor-pointer transition-all duration-200 hover:shadow-lg ${
                  isSelected 
                    ? 'border-orange-500 bg-orange-50 shadow-md' 
                    : 'border-gray-200 bg-white hover:border-orange-300'
                }`}
              >
                <div className="flex items-start space-x-3">
                  <div className={`w-6 h-6 rounded-full border-2 flex-shrink-0 mt-1 ${
                    isSelected ? 'border-orange-500 bg-orange-500' : 'border-gray-300'
                  }`}>
                    {isSelected && <div className="w-2 h-2 bg-white rounded-full mx-auto mt-1"></div>}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{option.name}</h3>
                    <p className="text-sm text-gray-600">{option.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <button
            onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
            disabled={currentStep === 0}
            className="flex items-center space-x-2 px-6 py-3 text-gray-600 hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous</span>
          </button>

          <button
            onClick={handleNext}
            disabled={!canProceed()}
            className="flex items-center space-x-2 px-8 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <span>{currentStep === steps.length - 1 ? 'Get Quote' : 'Continue'}</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 mt-[80px] bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-xl w-full p-6 relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                <Zap className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Get Your Quote</h3>
              <p className="text-gray-600">Enter your details to receive your custom blockchain development quote</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="john@company.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Your Company"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              <div className="mb-4">
                <ReCAPTCHA
                  sitekey={sitekey}
                  onChange={value => setCaptchaValue(value)}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting || !captchaValue}
                className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </span>
                ) : (
                  'Get My Quote'
                )}
              </button>
            </form>
          </div>
        </div>
      )}
      <Toaster position="top-right" />
    </div>
  );
};

export default BlockchainCostCalculator;