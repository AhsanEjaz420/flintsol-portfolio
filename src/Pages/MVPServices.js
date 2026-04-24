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
<div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-orange-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gray-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '12s', animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10">
      <CostCalculator/>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 tracking-tight bg-gradient-to-r from-white via-orange-200 to-white bg-clip-text text-transparent animate-gradient">
            MVP Services Included
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Everything you need to build and deploy AI-powered solutions for your business
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Service Navigation */}
          <div className="space-y-6">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group relative p-8 rounded-3xl cursor-pointer transition-all duration-500 overflow-hidden ${
                  activeService === index
                    ? 'bg-gray-800/40 backdrop-blur-2xl border border-orange-500/60 shadow-2xl shadow-orange-500/30'
                    : 'bg-gray-800/30 backdrop-blur-2xl border border-gray-700/50 hover:border-orange-500/60 hover:shadow-2xl hover:shadow-orange-500/20'
                }`}
                onClick={() => setActiveService(index)}
              >
                {/* Card Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 via-orange-500/0 to-orange-500/0 group-hover:from-orange-500/10 group-hover:via-orange-500/5 group-hover:to-orange-500/0 transition-all duration-500"></div>
                
                <div className="relative z-10 flex items-start space-x-4">
                  <div className={`p-4 rounded-2xl transition-all duration-500 group-hover:scale-110 ${
                    activeService === index 
                      ? 'bg-gradient-to-br from-orange-500 via-orange-600 to-orange-500 text-white shadow-xl shadow-orange-500/30' 
                      : 'bg-gray-700/50 text-gray-300 group-hover:bg-gray-700'
                  }`}>
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-2xl font-semibold mb-3 transition-colors duration-300 ${
                      activeService === index ? 'text-white' : 'text-white group-hover:text-orange-200'
                    }`}>{service.title}</h3>
                    <p className={`text-sm leading-relaxed transition-colors duration-300 ${
                      activeService === index ? 'text-gray-300' : 'text-gray-400 group-hover:text-gray-300'
                    }`}>{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Service Details */}
          <div className="bg-gray-800/30 backdrop-blur-2xl rounded-3xl p-8 border border-gray-700/50 hover:border-orange-500/60 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/30">
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-4 bg-gradient-to-br from-orange-500 via-orange-600 to-orange-500 rounded-2xl text-white shadow-xl shadow-orange-500/30">
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
                  <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-20">
          <h2 className="text-7xl font-bold mb-6 tracking-tight bg-gradient-to-r from-white via-orange-200 to-white bg-clip-text text-transparent animate-gradient">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group relative bg-gray-800/30 backdrop-blur-2xl rounded-3xl p-8 border border-gray-700/50 hover:border-orange-500/60 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/30 overflow-hidden">
              {/* Card Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 via-orange-500/0 to-orange-500/0 group-hover:from-orange-500/10 group-hover:via-orange-500/5 group-hover:to-orange-500/0 transition-all duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-orange-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">"{testimonial.comment}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      </div>
    </div>
  );
};

export default MVPServicesShowcase;
