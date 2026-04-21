import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, X, Users, Clock, Calendar, DollarSign } from 'lucide-react';

const ResourceAugmentationCalculator = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [formData, setFormData] = useState({
    resourceType: '',
    experienceLevel: '',
    teamSize: 1,
    duration: '',
    engagement: ''
  });
  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const steps = [
    { id: 1, title: 'Resource Type', key: 'resourceType' },
    { id: 2, title: 'Experience', key: 'experienceLevel' },
    { id: 3, title: 'Team Size', key: 'teamSize' },
    { id: 4, title: 'Duration', key: 'duration' },
    { id: 5, title: 'Engagement', key: 'engagement' },
    { id: 6, title: 'Summary', key: 'summary' }
  ];

  const resourceTypes = [
    { id: 'developers', title: 'Expert Developers', icon: '💻', baseRate: 45 },
    { id: 'designers', title: 'UI/UX Designers', icon: '🎨', baseRate: 40 },
    { id: 'managers', title: 'Project Managers', icon: '📋', baseRate: 55 },
    { id: 'qa', title: 'QA Engineers', icon: '🔍', baseRate: 35 },
    { id: 'devops', title: 'DevOps Specialists', icon: '⚙️', baseRate: 50 },
    { id: 'analysts', title: 'Business Analysts', icon: '📊', baseRate: 42 }
  ];

  const experienceLevels = [
    { id: 'junior', title: 'Junior (1-3 years)', multiplier: 1.0 },
    { id: 'mid', title: 'Mid-level (3-5 years)', multiplier: 1.3 },
    { id: 'senior', title: 'Senior (5-8 years)', multiplier: 1.6 },
    { id: 'lead', title: 'Lead (8+ years)', multiplier: 2.0 },
    { id: 'architect', title: 'Architect (10+ years)', multiplier: 2.5 }
  ];

  const durations = [
    { id: '1-3', title: '1-3 months', discount: 0 },
    { id: '3-6', title: '3-6 months', discount: 0.05 },
    { id: '6-12', title: '6-12 months', discount: 0.10 },
    { id: '12+', title: '12+ months', discount: 0.15 }
  ];

  const engagementTypes = [
    { id: 'part-time', title: 'Part-time (20 hrs/week)', hours: 20 },
    { id: 'full-time', title: 'Full-time (40 hrs/week)', hours: 40 },
    { id: 'extended', title: 'Extended (50 hrs/week)', hours: 50 }
  ];

  const calculateCost = () => {
    const resource = resourceTypes.find(r => r.id === formData.resourceType);
    const experience = experienceLevels.find(e => e.id === formData.experienceLevel);
    const duration = durations.find(d => d.id === formData.duration);
    const engagement = engagementTypes.find(e => e.id === formData.engagement);

    if (!resource || !experience || !duration || !engagement) return { hourly: 0, weekly: 0, monthly: 0 };

    const baseRate = Math.max(30, resource.baseRate);
    const hourlyRate = baseRate * experience.multiplier;
    const discountedRate = hourlyRate * (1 - duration.discount);
    const weeklyRate = discountedRate * engagement.hours * formData.teamSize;
    const monthlyRate = weeklyRate * 4.33; // Average weeks per month

    return {
      hourly: Math.round(discountedRate),
      weekly: Math.round(weeklyRate),
      monthly: Math.round(monthlyRate)
    };
  };

  const handleNext = () => {
    if (currentStep < 6) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowContactModal(true);
    }
  };

  const handleContactSubmit = () => {
    const { name, email, phone } = contactData;
    if (name.trim() && email.trim() && phone.trim()) {
      setShowContactModal(false);
      setShowModal(true);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const cost = calculateCost();

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Choose Resource Type</h3>
              <p className="text-gray-600">Select the type of professional you need</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {resourceTypes.map((type) => (
                <div
                  key={type.id}
                  onClick={() => setFormData({...formData, resourceType: type.id})}
                  className={`hover-lift p-6 rounded-xl border-2 cursor-pointer transition-all ${
                    formData.resourceType === type.id
                      ? 'border-orange-500 bg-orange-50 shadow-lg shadow-orange-500/20'
                      : 'border-gray-200 bg-white hover:border-orange-300'
                  }`}
                >
                  <div className="text-center">
                    <div className="text-3xl mb-3">{type.icon}</div>
                    <h4 className="font-semibold" style={{ fontFamily: 'var(--font-sans)', color: '#121D1A' }}>{type.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Experience Level</h3>
              <p className="text-gray-600">Select the experience level required</p>
            </div>
            <div className="space-y-3">
              {experienceLevels.map((level) => (
                <div
                  key={level.id}
                  onClick={() => setFormData({...formData, experienceLevel: level.id})}
                  className={`hover-lift p-4 rounded-xl border-2 cursor-pointer transition-all ${
                    formData.experienceLevel === level.id
                      ? 'border-orange-500 bg-orange-50 shadow-lg shadow-orange-500/20'
                      : 'border-gray-200 bg-white hover:border-orange-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold" style={{ fontFamily: 'var(--font-sans)', color: '#121D1A' }}>{level.title}</h4>
                    <span className="text-sm" style={{ color: '#666666' }}>+{Math.round((level.multiplier - 1) * 100)}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Team Size</h3>
              <p className="text-gray-600">How many resources do you need?</p>
            </div>
            <div className="flex items-center justify-center space-x-6">
              <button
                onClick={() => setFormData({...formData, teamSize: Math.max(1, formData.teamSize - 1)})}
                className="button-press w-12 h-12 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center text-xl font-bold transition-colors"
              >
                -
              </button>
              <div className="text-center">
                <div className="text-6xl font-bold" style={{ fontFamily: 'var(--font-sans)', color: '#ff6b35' }}>{formData.teamSize}</div>
                <div className="text-gray-600 mt-2">
                  {formData.teamSize === 1 ? 'Resource' : 'Resources'}
                </div>
              </div>
              <button
                onClick={() => setFormData({...formData, teamSize: formData.teamSize + 1})}
                className="button-press w-12 h-12 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center text-xl font-bold transition-colors"
              >
                +
              </button>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Project Duration</h3>
              <p className="text-gray-600">How long do you need the resources?</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {durations.map((duration) => (
                <div
                  key={duration.id}
                  onClick={() => setFormData({...formData, duration: duration.id})}
                  className={`hover-lift p-6 rounded-xl border-2 cursor-pointer transition-all ${
                    formData.duration === duration.id
                      ? 'border-orange-500 bg-orange-50 shadow-lg shadow-orange-500/20'
                      : 'border-gray-200 bg-white hover:border-orange-300'
                  }`}
                >
                  <div className="text-center">
                    <Calendar className="w-8 h-8 mx-auto mb-3" style={{ color: '#ff6b35' }} />
                    <h4 className="font-semibold" style={{ fontFamily: 'var(--font-sans)', color: '#121D1A' }}>{duration.title}</h4>
                    {duration.discount > 0 && (
                      <span className="text-sm" style={{ color: '#16a34a' }}>Save {Math.round(duration.discount * 100)}%</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Engagement Type</h3>
              <p className="text-gray-600">Choose the working hours arrangement</p>
            </div>
            <div className="space-y-3">
              {engagementTypes.map((engagement) => (
                <div
                  key={engagement.id}
                  onClick={() => setFormData({...formData, engagement: engagement.id})}
                  className={`hover-lift p-4 rounded-xl border-2 cursor-pointer transition-all ${
                    formData.engagement === engagement.id
                      ? 'border-orange-500 bg-orange-50 shadow-lg shadow-orange-500/20'
                      : 'border-gray-200 bg-white hover:border-orange-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5" style={{ color: '#ff6b35' }} />
                      <h4 className="font-semibold" style={{ fontFamily: 'var(--font-sans)', color: '#121D1A' }}>{engagement.title}</h4>
                    </div>
                    <span className="text-sm" style={{ color: '#666666' }}>{engagement.hours} hrs/week</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 6:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Configuration Summary</h3>
              <p className="text-gray-600">Review your resource augmentation requirements</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-600">Resource Type:</span>
                  <div className="font-semibold" style={{ fontFamily: 'var(--font-sans)', color: '#121D1A' }}>
                    {resourceTypes.find(r => r.id === formData.resourceType)?.title}
                  </div>
                </div>
                <div>
                  <span className="text-gray-600">Experience Level:</span>
                  <div className="font-semibold" style={{ fontFamily: 'var(--font-sans)', color: '#121D1A' }}>
                    {experienceLevels.find(e => e.id === formData.experienceLevel)?.title}
                  </div>
                </div>
                <div>
                  <span className="text-gray-600">Team Size:</span>
                  <div className="font-semibold" style={{ fontFamily: 'var(--font-sans)', color: '#121D1A' }}>{formData.teamSize} resource(s)</div>
                </div>
                <div>
                  <span className="text-gray-600">Duration:</span>
                  <div className="font-semibold" style={{ fontFamily: 'var(--font-sans)', color: '#121D1A' }}>
                    {durations.find(d => d.id === formData.duration)?.title}
                  </div>
                </div>
                <div>
                  <span className="text-gray-600">Engagement:</span>
                  <div className="font-semibold" style={{ fontFamily: 'var(--font-sans)', color: '#121D1A' }}>
                    {engagementTypes.find(e => e.id === formData.engagement)?.title}
                  </div>
                </div>
              </div>

              <div className="border-t pt-4 text-center">
                <div className="bg-orange-50 rounded-xl p-4 border border-orange-200">
                  <div className="font-semibold text-lg mb-2" style={{ fontFamily: 'var(--font-sans)', color: '#ff6b35' }}>
                    Ready to Get Your Custom Quote?
                  </div>
                  <div className="text-sm" style={{ color: '#666666' }}>
                    Get detailed pricing and start your project with our expert team
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const isStepComplete = (step) => {
    switch (step) {
      case 1: return formData.resourceType !== '';
      case 2: return formData.experienceLevel !== '';
      case 3: return formData.teamSize > 0;
      case 4: return formData.duration !== '';
      case 5: return formData.engagement !== '';
      case 6: return formData.resourceType !== '' && formData.experienceLevel !== '' && formData.duration !== '' && formData.engagement !== '';
      default: return false;
    }
  };

  const canProceed = isStepComplete(currentStep);

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 50%, #F9F9F7 100%)' }}>
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-[clamp(2rem,5vw,3rem)] font-bold mb-3" style={{ fontFamily: 'var(--font-sans)', background: 'linear-gradient(135deg, #ff6b35 0%, #ff8f65 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            Resource Augmentation Calculator
          </h1>
          <p className="text-[clamp(1rem,2.5vw,1.125rem)]" style={{ fontFamily: 'var(--font-sans)', color: '#666666', maxWidth: '600px', margin: '0 auto' }}>
            Get instant cost estimates for scaling your team with top-tier talent
          </p>
        </div>

        {/* Progress Steps */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center space-x-4">
            {steps.map((step, index) => (
              <React.Fragment key={step.id}>
                <div className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 ${
                      currentStep === step.id
                        ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/30'
                        : currentStep > step.id
                        ? 'bg-green-500 text-white'
                        : 'bg-gray-300 text-gray-600'
                    }`}
                  >
                    {currentStep > step.id ? '✓' : step.id}
                  </div>
                  <span className="text-xs mt-1" style={{ fontFamily: 'var(--font-sans)', color: '#666666' }}>{step.title}</span>
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-12 h-0.5 transition-all duration-300 ${currentStep > step.id ? 'bg-green-500' : 'bg-gray-300'}`} />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="glass-card-light rounded-2xl p-8 min-h-96">
          {renderStep()}
        </div>

        {/* Navigation */}
        <div className="flex justify-between mt-6">
          <button
            onClick={handlePrevious}
            disabled={currentStep === 1}
            className={`button-press flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              currentStep === 1
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-gray-600 text-white hover:bg-gray-700'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous</span>
          </button>

          <button
            onClick={handleNext}
            disabled={!canProceed}
            className={`button-press flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              canProceed
                ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:shadow-lg hover:shadow-orange-500/30'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            <span>{currentStep === 6 ? 'Get Detailed Quote' : 'Next'}</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Contact Modal */}
      {showContactModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="glass-card-light rounded-2xl shadow-2xl max-w-md w-full">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-gray-800">Contact Information</h3>
                <button
                  onClick={() => setShowContactModal(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="space-y-4">
                <p className="text-gray-600 text-sm mb-4">
                  Please provide your contact details to receive your detailed quote
                </p>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={contactData.name}
                    onChange={(e) => setContactData({...contactData, name: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={contactData.email}
                    onChange={(e) => setContactData({...contactData, email: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your email address"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={contactData.phone}
                    onChange={(e) => setContactData({...contactData, phone: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your phone number"
                  />
                </div>
                
                <button
                  onClick={handleContactSubmit}
                  disabled={!contactData.name.trim() || !contactData.email.trim() || !contactData.phone.trim()}
                  className={`button-press w-full py-3 rounded-full font-semibold transition-all duration-300 ${
                    contactData.name.trim() && contactData.email.trim() && contactData.phone.trim()
                      ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:shadow-lg hover:shadow-orange-500/30'
                      : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  Get My Quote
                </button>
                
                <p className="text-xs text-gray-500 text-center">
                  We respect your privacy and will never share your information
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Cost Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="glass-card-light rounded-2xl shadow-2xl max-w-md w-full">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold" style={{ fontFamily: 'var(--font-sans)', color: '#121D1A' }}>Your Quote is Ready!</h3>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="text-center space-y-4">
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-6 text-white">
                  <div className="text-3xl font-bold mb-2">${cost.monthly.toLocaleString()}</div>
                  <div className="text-orange-100">Monthly Investment</div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-gray-50 rounded-xl p-3">
                    <div className="text-gray-600">Hourly Rate</div>
                    <div className="font-bold text-lg">${cost.hourly}</div>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-3">
                    <div className="text-gray-600">Weekly Cost</div>
                    <div className="font-bold text-lg">${cost.weekly.toLocaleString()}</div>
                  </div>
                </div>

                <div className="bg-orange-50 border border-orange-200 rounded-xl p-4">
                  <div className="text-orange-800 font-semibold mb-1">You Save</div>
                  <div className="text-orange-600 text-sm">
                    Compared to market rates - competitive pricing with top-tier talent
                  </div>
                </div>

                <button
                  onClick={() => setShowModal(false)}
                  className="button-press w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-300"
                >
                  Get Started Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResourceAugmentationCalculator;