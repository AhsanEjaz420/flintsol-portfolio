import React, { useState } from 'react';
import { CheckCircle, Mic, Users, FileText, Mail, BarChart3, Star } from 'lucide-react';
// eslint-disable-next-line no-unused-vars
import { Zap, ArrowRight } from 'lucide-react';
import CostCalculator from './Costcalculator';


const MVPServicesShowcase = () => {
  const [activeService, setActiveService] = useState(0);

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const services = [
    {
      icon: <Mic className="w-8 h-8" />,
      title: "Voice Transcription",
      description: "Convert speech to text with 95%+ accuracy across multiple languages and accents",
      features: ["Real-time transcription", "Multi-language support", "Audio file processing", "Custom vocabulary"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Speaker Diarization",
      description: "Identify and separate different speakers in audio recordings automatically",
      features: ["Multi-speaker detection", "Speaker labeling", "Timeline generation", "Voice fingerprinting"]
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "AI Summarization",
      description: "Generate concise summaries from long documents, meetings, and conversations",
      features: ["Document summarization", "Meeting highlights", "Key points extraction", "Custom length control"]
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Report Generation",
      description: "Automatically create detailed reports with insights and visualizations",
      features: ["Data visualization", "Automated insights", "Custom templates", "Export options"]
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email Integration",
      description: "Seamlessly integrate with your email workflow for automated processing",
      features: ["Gmail/Outlook sync", "Auto-categorization", "Smart responses", "Bulk processing"]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Product Manager",
      comment: "The voice transcription accuracy is incredible. Saved us hours of manual work.",
      rating: 5
    },
    {
      name: "Mike Chen",
      role: "Research Director",
      comment: "Speaker diarization made our interview analysis 10x faster.",
      rating: 5
    },
    {
      name: "Lisa Rodriguez",
      role: "Operations Lead",
      comment: "The email integration streamlined our entire workflow perfectly.",
      rating: 5
    }
  ];

  return (
<div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">      {/* Hero Section */}
      {/* <div className="relative overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="inline-flex items-center mt-16 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-400/30 mb-8">
              <Zap className="w-4 h-4 text-blue-400 mr-2" />
              <span className="text-blue-300 text-sm font-medium">AI-Powered MVP Solutions</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Complete <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">AI Suite</span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your business with our comprehensive AI services package. Voice transcription, 
              speaker identification, intelligent summarization, and seamless integrations.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
              <div className="text-center">
                <div className="text-6xl font-bold text-white mb-2">$1000</div>
                <div className="text-purple-300 text-lg">Complete MVP Package</div>
                <div className="text-gray-400 text-sm">One-time setup fee</div>
              </div>
              
              <div className="hidden sm:block w-px h-16 bg-gray-600"></div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">95%+</div>
                <div className="text-gray-300">Accuracy Rate</div>
              </div>
              
              <div className="hidden sm:block w-px h-16 bg-gray-600"></div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">24/7</div>
                <div className="text-gray-300">Processing</div>
              </div>
            </div>

            <button className="group bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl">
              Get Started Now
              <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div> */}
      <CostCalculator/>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">MVP Services Included</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Everything you need to build and deploy AI-powered solutions for your business
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Service Navigation */}
          <div className="space-y-4">
            {services.map((service, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                  activeService === index
                    ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/50 shadow-xl'
                    : 'bg-slate-800/50 border border-slate-700 hover:bg-slate-800/70'
                }`}
                onClick={() => setActiveService(index)}
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-xl ${
                    activeService === index 
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white' 
                      : 'bg-slate-700 text-gray-300'
                  }`}>
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                    <p className="text-gray-300 text-sm">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Service Details */}
          <div className="bg-slate-800/50 rounded-3xl p-8 border border-slate-700">
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl text-white">
                {services[activeService].icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">{services[activeService].title}</h3>
                <p className="text-gray-300">{services[activeService].description}</p>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-white mb-4">Key Features:</h4>
              {services[activeService].features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-white rounded-3xl shadow-2xl border border-gray-200">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-6 border border-gray-200 shadow-md">
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">"{testimonial.comment}"</p>
              <div>
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
                <div className="text-sm text-gray-500">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
    </div>
  );
};

export default MVPServicesShowcase;
