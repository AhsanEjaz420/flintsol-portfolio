import React, { useState, useEffect } from 'react';
import { X, Zap, Clock, DollarSign, CheckCircle, ArrowRight, Star } from 'lucide-react';

const MVPModal = ({ isOpen, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // Small delay for smooth animation
      setTimeout(() => setIsVisible(true), 100);
    } else {
      setIsVisible(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed mt-16 inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className={`absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
      />
      
      {/* Modal */}
      <div 
        className={`relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl shadow-2xl border border-orange-500/20 backdrop-blur-sm w-[80%] h-[80vh] overflow-y-auto transform transition-all duration-500 mt-8 ${
          isVisible ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-10'
        }`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-8 right-4 p-2 text-slate-400 hover:text-white hover:bg-slate-700/50 rounded-full transition-all duration-300 z-10"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Content */}
        <div className="p-4 sm:p-6 h-full flex flex-col">
          {/* Header */}
          <div className="text-center mb-4">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-600 text-white px-3 py-1.5 rounded-full text-xs font-semibold mb-3">
              <Zap className="w-3 h-3" />
              LIMITED TIME OFFER
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              MVP in <span className="text-orange-400">2 Weeks</span>
            </h2>
            <p className="text-lg text-slate-300">
              Transform your idea into a working prototype
            </p>
          </div>

          {/* Price Highlight */}
          <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl p-3 text-white text-center mb-4 shadow-lg shadow-orange-500/25">
            <div className="text-4xl md:text-5xl font-bold mb-1">$1,000</div>
            <div className="text-lg opacity-90">Complete MVP Package</div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4 flex-1">
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <Clock className="w-4 h-4 text-orange-400" />
                What's Included
              </h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span className="text-slate-300 text-sm">Core Features Development</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span className="text-slate-300 text-sm">Responsive UI/UX Design</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span className="text-slate-300 text-sm">Database Integration</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span className="text-slate-300 text-sm">Basic Authentication</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span className="text-slate-300 text-sm">Deployment Setup</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-green-400" />
                Why Choose Us
              </h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                  <span className="text-slate-300 text-sm">Expert Development Team</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                  <span className="text-slate-300 text-sm">24/7 Support Included</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                  <span className="text-slate-300 text-sm">Money-back Guarantee</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                  <span className="text-slate-300 text-sm">Scalable Architecture</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                  <span className="text-slate-300 text-sm">Post-Launch Support</span>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline */}
          {/* <div className="bg-slate-800/50 rounded-2xl p-4 mb-6 border border-slate-700/50">
            <h3 className="text-xl font-semibold text-white mb-4 text-center">2-Week Timeline</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold mx-auto mb-2">1</div>
                <div className="text-sm font-semibold text-white">Planning & Design</div>
                <div className="text-xs text-slate-400">Days 1-3</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold mx-auto mb-2">2</div>
                <div className="text-sm font-semibold text-white">Development</div>
                <div className="text-xs text-slate-400">Days 4-10</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold mx-auto mb-2">3</div>
                <div className="text-sm font-semibold text-white">Testing</div>
                <div className="text-xs text-slate-400">Days 11-13</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center font-bold mx-auto mb-2">4</div>
                <div className="text-sm font-semibold text-white">Launch</div>
                <div className="text-xs text-slate-400">Day 14</div>
              </div>
            </div>
          </div> */}

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mt-auto">
            <button
              onClick={onClose}
              className="flex-1 px-4 py-3 border-2 border-slate-600 text-slate-300 rounded-xl font-semibold hover:bg-slate-700/50 hover:border-slate-500 transition-all duration-300"
            >
              Maybe Later
            </button>
            <button
              onClick={() => {
                onClose();
                // Navigate to cost calculator
                window.location.href = '/Costcalculator';
              }}
              className="flex-1 px-4 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-xl font-semibold hover:from-orange-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg shadow-orange-500/25"
            >
              Get Started Now
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-3 text-center">
            <div className="flex items-center justify-center gap-6 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>50+ Happy Clients</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span>5.0 Rating</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MVPModal; 