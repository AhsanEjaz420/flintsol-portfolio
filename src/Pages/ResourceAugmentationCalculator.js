import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, X, Clock, Calendar, Users, BarChart3, CheckCircle2, Code2, Palette, ClipboardList, Bug, Settings, Sparkles } from 'lucide-react';

const ResourceAugmentationCalculator = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [direction, setDirection] = useState(0); // 1 for forward, -1 for backward
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
    phone: '',
    company: ''
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
    { id: 'developers', title: 'Expert Developers', icon: Code2, baseRate: 45 },
    { id: 'designers', title: 'UI/UX Designers', icon: Palette, baseRate: 40 },
    { id: 'managers', title: 'Project Managers', icon: ClipboardList, baseRate: 55 },
    { id: 'qa', title: 'QA Engineers', icon: Bug, baseRate: 35 },
    { id: 'devops', title: 'DevOps Specialists', icon: Settings, baseRate: 50 },
    { id: 'analysts', title: 'Business Analysts', icon: BarChart3, baseRate: 42 }
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
      setDirection(1);
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
      setDirection(-1);
      setCurrentStep(currentStep - 1);
    }
  };

  const cost = calculateCost();

  const renderStep = () => {
    const variants = {
      enter: (direction) => ({
        x: direction > 0 ? 50 : -50,
        opacity: 0,
        scale: 0.95
      }),
      center: {
        x: 0,
        opacity: 1,
        scale: 1
      },
      exit: (direction) => ({
        x: direction < 0 ? 50 : -50,
        opacity: 0,
        scale: 0.95
      })
    };

    switch (currentStep) {
      case 1:
        return (
          <motion.div
            key={currentStep}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
              scale: { duration: 0.2 }
            }}
            className="space-y-8"
          >
            <div className="text-center pb-4 border-b-2 border-orange-500">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-orange-500 mb-2 tracking-tight">Choose Resource Type</h3>
              <p className="text-gray-500 text-sm sm:text-base">Select the type of professional you need</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {resourceTypes.map((type) => (
                <motion.div
                  key={type.id}
                  whileHover={{ scale: 1.03, y: -4 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setFormData({...formData, resourceType: type.id})}
                  className={`p-5 sm:p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                    formData.resourceType === type.id
                      ? 'border-orange-500 bg-orange-500 text-white shadow-xl shadow-orange-500/30'
                      : 'border-gray-200 bg-white hover:border-orange-300 hover:shadow-lg'
                  }`}
                >
                  <div className="text-center">
                    <type.icon className={`w-8 h-8 mx-auto mb-3 ${formData.resourceType === type.id ? 'text-white' : 'text-gray-600'}`} />
                    <h4 className="font-bold text-sm sm:text-base" style={{ fontFamily: 'var(--font-sans)' }}>{type.title}</h4>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        );

      case 2:
        return (
          <motion.div
            key={currentStep}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
              scale: { duration: 0.2 }
            }}
            className="space-y-6"
          >
            <div className="text-center pb-4 border-b-2 border-orange-500">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-orange-500 mb-2 tracking-tight">Experience Level</h3>
              <p className="text-gray-500 text-sm sm:text-base">Select the experience level required</p>
            </div>
            <div className="space-y-3">
              {experienceLevels.map((level) => (
                <motion.div
                  key={level.id}
                  whileHover={{ scale: 1.01, x: 4 }}
                  whileTap={{ scale: 0.99 }}
                  onClick={() => setFormData({...formData, experienceLevel: level.id})}
                  className={`p-4 sm:p-5 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                    formData.experienceLevel === level.id
                      ? 'border-orange-500 bg-orange-500 text-white shadow-xl shadow-orange-500/30'
                      : 'border-gray-200 bg-white hover:border-orange-300 hover:shadow-lg'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-sm sm:text-base" style={{ fontFamily: 'var(--font-sans)' }}>{level.title}</h4>
                    <span className={`text-sm font-bold ${formData.experienceLevel === level.id ? 'text-white' : 'text-gray-500'}`}>+{Math.round((level.multiplier - 1) * 100)}%</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        );

      case 3:
        return (
          <motion.div
            key={currentStep}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
              scale: { duration: 0.2 }
            }}
            className="space-y-8"
          >
            <div className="text-center pb-4 border-b-2 border-orange-500">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-orange-500 mb-2 tracking-tight">Team Size</h3>
              <p className="text-gray-500 text-sm sm:text-base">How many resources do you need?</p>
            </div>
            <div className="flex items-center justify-center space-x-8 sm:space-x-12">
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setFormData({...formData, teamSize: Math.max(1, formData.teamSize - 1)})}
                className="button-press w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-black text-white hover:bg-gray-800 flex items-center justify-center text-2xl sm:text-3xl font-bold transition-all duration-300 shadow-xl border-2 border-black"
              >
                -
              </motion.button>
              <div className="text-center">
                <div className="text-6xl sm:text-7xl font-extrabold" style={{ fontFamily: 'var(--font-sans)', color: '#FF6B35' }}>{formData.teamSize}</div>
                <div className="text-gray-600 mt-3 flex items-center justify-center gap-2 text-sm sm:text-base">
                  <Users className="w-4 h-4 sm:w-5 sm:h-5" />
                  {formData.teamSize === 1 ? 'Resource' : 'Resources'}
                </div>
              </div>
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setFormData({...formData, teamSize: formData.teamSize + 1})}
                className="button-press w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-black text-white hover:bg-gray-800 flex items-center justify-center text-2xl sm:text-3xl font-bold transition-all duration-300 shadow-xl border-2 border-black"
              >
                +
              </motion.button>
            </div>
          </motion.div>
        );

      case 4:
        return (
          <motion.div
            key={currentStep}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
              scale: { duration: 0.2 }
            }}
            className="space-y-8"
          >
            <div className="text-center pb-4 border-b-2 border-orange-500">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-orange-500 mb-2 tracking-tight">Project Duration</h3>
              <p className="text-gray-500 text-sm sm:text-base">How long do you need the resources?</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {durations.map((duration) => (
                <motion.div
                  key={duration.id}
                  whileHover={{ scale: 1.03, y: -4 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setFormData({...formData, duration: duration.id})}
                  className={`p-5 sm:p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                    formData.duration === duration.id
                      ? 'border-orange-500 bg-orange-500 text-white shadow-xl shadow-orange-500/30'
                      : 'border-gray-200 bg-white hover:border-orange-300 hover:shadow-lg'
                  }`}
                >
                  <div className="text-center">
                    <Calendar className={`w-8 h-8 mx-auto mb-3 ${formData.duration === duration.id ? 'text-white' : 'text-gray-600'}`} />
                    <h4 className="font-bold text-sm sm:text-base" style={{ fontFamily: 'var(--font-sans)' }}>{duration.title}</h4>
                    {duration.discount > 0 && (
                      <span className={`text-sm font-bold ${formData.duration === duration.id ? 'text-white' : 'text-green-600'}`}>Save {Math.round(duration.discount * 100)}%</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        );

      case 5:
        return (
          <motion.div
            key={currentStep}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
              scale: { duration: 0.2 }
            }}
            className="space-y-6"
          >
            <div className="text-center pb-4 border-b-2 border-orange-500">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-orange-500 mb-2 tracking-tight">Engagement Type</h3>
              <p className="text-gray-500 text-sm sm:text-base">Choose the working hours arrangement</p>
            </div>
            <div className="space-y-3">
              {engagementTypes.map((engagement) => (
                <motion.div
                  key={engagement.id}
                  whileHover={{ scale: 1.01, x: 4 }}
                  whileTap={{ scale: 0.99 }}
                  onClick={() => setFormData({...formData, engagement: engagement.id})}
                  className={`p-4 sm:p-5 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                    formData.engagement === engagement.id
                      ? 'border-orange-500 bg-orange-500 text-white shadow-xl shadow-orange-500/30'
                      : 'border-gray-200 bg-white hover:border-orange-300 hover:shadow-lg'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Clock className={`w-5 h-5 ${formData.engagement === engagement.id ? 'text-white' : 'text-gray-600'}`} />
                      <h4 className="font-bold text-sm sm:text-base" style={{ fontFamily: 'var(--font-sans)' }}>{engagement.title}</h4>
                    </div>
                    <span className={`text-sm font-bold ${formData.engagement === engagement.id ? 'text-white' : 'text-gray-500'}`}>{engagement.hours} hrs/week</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        );

      case 6:
        return (
          <motion.div
            key={currentStep}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
              scale: { duration: 0.2 }
            }}
            className="space-y-6"
          >
            <div className="text-center pb-4 border-b-2 border-orange-500">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-orange-500 mb-2 tracking-tight">Configuration Summary</h3>
              <p className="text-gray-500 text-sm sm:text-base">Review your resource augmentation requirements</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 space-y-4 border-2 border-orange-200">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-500 text-xs uppercase tracking-wider font-semibold">Resource Type:</span>
                  <div className="font-bold flex items-center gap-2 mt-1" style={{ fontFamily: 'var(--font-sans)', color: '#000000' }}>
                    {(() => {
                      const resource = resourceTypes.find(r => r.id === formData.resourceType);
                      const IconComponent = resource?.icon;
                      return IconComponent ? <IconComponent className="w-4 h-4" style={{ color: '#FF6B35' }} /> : null;
                    })()}
                    {resourceTypes.find(r => r.id === formData.resourceType)?.title}
                  </div>
                </div>
                <div>
                  <span className="text-gray-500 text-xs uppercase tracking-wider font-semibold">Experience Level:</span>
                  <div className="font-bold mt-1" style={{ fontFamily: 'var(--font-sans)', color: '#000000' }}>
                    {experienceLevels.find(e => e.id === formData.experienceLevel)?.title}
                  </div>
                </div>
                <div>
                  <span className="text-gray-500 text-xs uppercase tracking-wider font-semibold">Team Size:</span>
                  <div className="font-bold flex items-center gap-2 mt-1" style={{ fontFamily: 'var(--font-sans)', color: '#000000' }}>
                    <Users className="w-4 h-4" style={{ color: '#FF6B35' }} />
                    {formData.teamSize} resource(s)
                  </div>
                </div>
                <div>
                  <span className="text-gray-500 text-xs uppercase tracking-wider font-semibold">Duration:</span>
                  <div className="font-bold flex items-center gap-2 mt-1" style={{ fontFamily: 'var(--font-sans)', color: '#000000' }}>
                    <Calendar className="w-4 h-4" style={{ color: '#FF6B35' }} />
                    {durations.find(d => d.id === formData.duration)?.title}
                  </div>
                </div>
                <div>
                  <span className="text-gray-500 text-xs uppercase tracking-wider font-semibold">Engagement:</span>
                  <div className="font-bold flex items-center gap-2 mt-1" style={{ fontFamily: 'var(--font-sans)', color: '#000000' }}>
                    <Clock className="w-4 h-4" style={{ color: '#FF6B35' }} />
                    {engagementTypes.find(e => e.id === formData.engagement)?.title}
                  </div>
                </div>
              </div>

              <div className="border-t-2 border-gray-200 pt-4 text-center">
                <div className="bg-black rounded-xl p-4 border-2 border-orange-500">
                  <div className="font-bold text-lg mb-2 flex items-center justify-center gap-2 text-white" style={{ fontFamily: 'var(--font-sans)' }}>
                    <Sparkles className="w-5 h-5 text-orange-500" />
                    Ready to Get Your Custom Quote?
                  </div>
                  <div className="text-sm text-gray-400">
                    Get detailed pricing and start your project with our expert team
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
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
    <div className="min-h-screen" style={{ background: '#FFFFFF' }}>
      <div className="max-w-3xl mx-auto px-4 py-8 sm:py-12">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="font-extrabold mb-3 tracking-tight" style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: '#000000' }}>
            Resource <span style={{ color: '#FF6B35' }}>Calculator</span>
          </h1>
          <div className="w-16 h-1 bg-orange-500 mx-auto mb-4 rounded-full"></div>
          <p className="text-sm sm:text-base" style={{ fontFamily: 'var(--font-sans)', color: '#666666', maxWidth: '500px', margin: '0 auto' }}>
            Calculate your resource augmentation costs with precision-engineered estimates
          </p>
        </div>

        {/* Progress Steps */}
        <div className="flex justify-center mb-8 sm:mb-10 px-2 sm:px-0">
          <div className="flex items-center w-full max-w-4xl">
            {steps.map((step, index) => (
              <React.Fragment key={step.id}>
                <div className="flex flex-col items-center flex-1">
                  <div
                    className={`w-8 h-8 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-xs sm:text-base font-bold transition-all duration-300 border-2 flex-shrink-0 mx-auto ${
                      currentStep === step.id
                        ? 'bg-black text-white border-black shadow-xl'
                        : currentStep > step.id
                        ? 'bg-orange-500 text-white border-orange-500'
                        : 'bg-white text-gray-400 border-gray-300'
                    }`}
                  >
                    {currentStep > step.id ? <CheckCircle2 className="w-4 h-4 sm:w-6 sm:h-6" /> : step.id}
                  </div>
                  <span className="text-[9px] sm:text-xs mt-1.5 sm:mt-2 font-semibold hidden sm:block whitespace-nowrap text-center" style={{ fontFamily: 'var(--font-sans)', color: currentStep >= step.id ? '#000000' : '#999999' }}>{step.title}</span>
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-4 sm:w-16 h-1 transition-all duration-300 flex-shrink-0 ${currentStep > step.id ? 'bg-orange-500' : 'bg-gray-800'}`} />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 min-h-80 sm:min-h-96 border-2 border-gray-200 shadow-xl">
          <AnimatePresence mode="wait">
            {renderStep()}
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex justify-between mt-6 sm:mt-8">
          <button
            onClick={handlePrevious}
            disabled={currentStep === 1}
            className={`button-press flex items-center space-x-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold transition-all duration-300 text-sm sm:text-base border-2 ${
              currentStep === 1
                ? 'bg-white text-gray-300 border-gray-300 cursor-not-allowed'
                : 'bg-black text-white border-black hover:bg-gray-800'
            }`}
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="hidden sm:inline">Previous</span>
          </button>

          <button
            onClick={handleNext}
            disabled={!canProceed}
            className={`button-press flex items-center space-x-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold transition-all duration-300 text-sm sm:text-base border-2 ${
              canProceed
                ? 'bg-orange-500 text-white border-orange-500 hover:bg-orange-600 hover:border-orange-600 hover:shadow-lg hover:shadow-orange-500/30'
                : 'bg-white text-gray-300 border-gray-300 cursor-not-allowed'
            }`}
          >
            <span>{currentStep === 6 ? 'Get Quote' : 'Next'}</span>
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>

      {/* Contact Modal */}
      {showContactModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="rounded-2xl shadow-2xl w-full max-w-sm" style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)', border: '2px solid #ff6b35', maxHeight: '90vh', overflowY: 'auto' }}>
            <div className="p-5">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold" style={{ fontFamily: 'var(--font-sans)', color: '#ffffff' }}>Contact Information</h3>
                <button
                  onClick={() => setShowContactModal(false)}
                  className="text-gray-400 hover:text-white transition-colors hover:bg-white/10 rounded-full p-1"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="space-y-4">
                <p className="text-xs mb-3" style={{ color: '#a0a0a0', fontFamily: 'var(--font-sans)' }}>
                  Please provide your contact details to receive your detailed quote
                </p>
                
                <div>
                  <label className="block text-xs font-medium mb-1.5" style={{ color: '#ffffff', fontFamily: 'var(--font-sans)' }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={contactData.name}
                    onChange={(e) => setContactData({...contactData, name: e.target.value})}
                    className="w-full px-3 py-2 rounded-lg focus:outline-none transition-all duration-300"
                    style={{ 
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '2px solid rgba(255, 107, 53, 0.3)',
                      color: '#ffffff',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '14px'
                    }}
                    placeholder="Enter your full name"
                    onFocus={(e) => e.target.style.borderColor = '#ff6b35'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(255, 107, 53, 0.3)'}
                  />
                </div>
                
                <div>
                  <label className="block text-xs font-medium mb-1.5" style={{ color: '#ffffff', fontFamily: 'var(--font-sans)' }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={contactData.email}
                    onChange={(e) => setContactData({...contactData, email: e.target.value})}
                    className="w-full px-3 py-2 rounded-lg focus:outline-none transition-all duration-300"
                    style={{ 
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '2px solid rgba(255, 107, 53, 0.3)',
                      color: '#ffffff',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '14px'
                    }}
                    placeholder="Enter your email address"
                    onFocus={(e) => e.target.style.borderColor = '#ff6b35'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(255, 107, 53, 0.3)'}
                  />
                </div>
                
                <div>
                  <label className="block text-xs font-medium mb-1.5" style={{ color: '#ffffff', fontFamily: 'var(--font-sans)' }}>
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={contactData.phone}
                    onChange={(e) => setContactData({...contactData, phone: e.target.value})}
                    className="w-full px-3 py-2 rounded-lg focus:outline-none transition-all duration-300"
                    style={{ 
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '2px solid rgba(255, 107, 53, 0.3)',
                      color: '#ffffff',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '14px'
                    }}
                    placeholder="Enter your phone number"
                    onFocus={(e) => e.target.style.borderColor = '#ff6b35'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(255, 107, 53, 0.3)'}
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium mb-1.5" style={{ color: '#ffffff', fontFamily: 'var(--font-sans)' }}>
                    Company Name
                  </label>
                  <input
                    type="text"
                    value={contactData.company || ''}
                    onChange={(e) => setContactData({...contactData, company: e.target.value})}
                    className="w-full px-3 py-2 rounded-lg focus:outline-none transition-all duration-300"
                    style={{ 
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '2px solid rgba(255, 107, 53, 0.3)',
                      color: '#ffffff',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '14px'
                    }}
                    placeholder="Enter your company name (optional)"
                    onFocus={(e) => e.target.style.borderColor = '#ff6b35'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(255, 107, 53, 0.3)'}
                  />
                </div>
                
                <button
                  onClick={handleContactSubmit}
                  disabled={!contactData.name.trim() || !contactData.email.trim() || !contactData.phone.trim()}
                  className={`button-press w-full py-2.5 rounded-full font-semibold transition-all duration-300 ${
                    contactData.name.trim() && contactData.email.trim() && contactData.phone.trim()
                      ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:shadow-lg hover:shadow-orange-500/30'
                      : 'bg-gray-700 text-gray-400 cursor-not-allowed'
                  }`}
                  style={{ fontFamily: 'var(--font-sans)', fontSize: '14px' }}
                >
                  Get My Quote
                </button>
                
                <p className="text-[10px] text-center" style={{ color: '#666666', fontFamily: 'var(--font-sans)' }}>
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
