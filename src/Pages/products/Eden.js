import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Sparkles, 
  Layers, 
  Shield, 
  Zap, 
  Image as ImageIcon, 
  Video as VideoIcon, 
  ChevronRight, 
  Play, 
  Download,
  Menu,
  X,
  ExternalLink,
  Cpu,
  Monitor,
  Globe,
  Wand2
} from 'lucide-react';

const Eden = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Editorial Theme - Dark Mode with Gold Accents
  const theme = {
    primary: '#C5A059',      // Editorial Gold
    background: '#0A0A0A',   // Deep Black
    surface: '#141414',      // Card Surface
    surfaceAlt: '#1A1A1A',   // Alternate Surface
    text: '#FFFFFF',         // White Text
    muted: '#6B6B6B',        // Muted Gray
    border: 'rgba(197, 160, 89, 0.2)', // Gold Border
    glow: 'rgba(197, 160, 89, 0.15)'    // Gold Glow
  };

  const features = [
    {
      icon: Layers,
      title: 'Multi-Model AI Generation',
      description: 'Access 25+ image and video generation models from multiple AI providers in one unified platform. Experiment, compare outputs, and achieve varied creative results.',
      size: 'col-span-2'
    },
    {
      icon: Sparkles,
      title: 'Unified Creative Interface',
      description: 'Clean, responsive, and user-friendly interface built to streamline your creative workflow.',
      size: 'col-span-1'
    },
    {
      icon: Zap,
      title: 'Scalable Backend System',
      description: 'Powered by Node.js backend designed to handle scalable API integrations efficiently.',
      size: 'col-span-1'
    },
    {
      icon: Shield,
      title: 'Secure Admin Panel',
      description: 'Robust admin panel with role-based access control. Structured management of users, permissions, and platform activities with controlled access levels.',
      size: 'col-span-1'
    },
    {
      icon: ImageIcon,
      title: 'Image Generation',
      description: 'Generate high-quality images using state-of-the-art AI models. Support for various styles, resolutions, and artistic directions.',
      size: 'col-span-1'
    },
    {
      icon: VideoIcon,
      title: 'Video Generation',
      description: 'Create AI-powered videos with multiple model options. From short clips to longer productions with various visual styles.',
      size: 'col-span-1'
    }
  ];

  const models = [
    { name: 'OpenRouter', type: 'Image & Video', icon: Globe },
    { name: 'WaveSpeed', type: 'Video Generation', icon: Zap },
    { name: 'FAL AI', type: 'Image Generation', icon: Cpu },
    { name: 'Stability AI', type: 'Image Generation', icon: ImageIcon },
    { name: 'Runway ML', type: 'Video Generation', icon: VideoIcon }
  ];

  const techStack = [
    {
      category: 'Frontend',
      icon: Monitor,
      items: ['React.js', 'Responsive UI', 'Intuitive Design']
    },
    {
      category: 'Backend',
      icon: Cpu,
      items: ['Node.js', 'API Orchestration', 'Scalable Architecture']
    },
    {
      category: 'Integrations',
      icon: Globe,
      items: ['OpenRouter', 'WaveSpeed', 'FAL AI', 'Stability AI', 'Runway ML']
    }
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white font-sans relative overflow-x-hidden selection:bg-[#C5A059]/30">
      {/* Background Graphic Layer */}
      <div className="fixed top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none z-0">
        <div className="absolute -top-24 -right-24 w-[600px] h-[600px] border border-[#C5A059] rounded-full"></div>
        <div className="absolute top-48 -right-12 w-[400px] h-[400px] border border-white/20 rounded-full"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#0A0A0A]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 group"
          >
            <Link to="/Portfolio" className="flex items-center gap-2 group">
              <ArrowLeft size={18} className="text-[#C5A059] group-hover:-translate-x-1 transition-transform" />
              <span className="text-xs font-semibold tracking-widest uppercase text-gray-500 group-hover:text-white transition-colors">Back to Portfolio</span>
            </Link>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-xl lg:text-2xl font-bold tracking-tighter flex items-center gap-2"
          >
            <span className="text-[#C5A059]">EDEN</span>
            <span className="opacity-40">.AI</span>
          </motion.div>

          <div className="hidden md:flex gap-8 lg:gap-12 text-[10px] uppercase tracking-[0.2em] font-medium">
            <a href="#features" className="opacity-40 hover:opacity-100 hover:text-[#C5A059] transition-all">Features</a>
            <a href="#models" className="opacity-40 hover:opacity-100 hover:text-[#C5A059] transition-all">Models</a>
            <a href="#technology" className="opacity-40 hover:opacity-100 hover:text-[#C5A059] transition-all">Technology</a>
          </div>

          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#0A0A0A] flex flex-col items-center justify-center gap-8 md:hidden pt-20"
          >
            <a href="#features" onClick={() => setIsMenuOpen(false)} className="text-[#C5A059] text-lg font-bold uppercase tracking-widest">Features</a>
            <a href="#models" onClick={() => setIsMenuOpen(false)} className="text-white opacity-40 text-lg font-bold uppercase tracking-widest hover:opacity-100 transition-opacity">Models</a>
            <a href="#technology" onClick={() => setIsMenuOpen(false)} className="text-white opacity-40 text-lg font-bold uppercase tracking-widest hover:opacity-100 transition-opacity">Technology</a>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="relative z-10">
        {/* Hero Section */}
        <section ref={heroRef} className="relative pt-32 lg:pt-48 pb-20 lg:pb-32 px-6 lg:px-12 bg-gradient-to-b from-[#0A0A0A] via-[#0F0F0F] to-[#0A0A0A]">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 flex flex-col justify-center"
            >
              <span className="text-[10px] uppercase tracking-[0.5em] text-[#C5A059] mb-6">EDN Protocol V.2.0</span>
              <h1 className="font-serif text-5xl md:text-7xl lg:text-[90px] font-light leading-[0.9] tracking-tighter italic mb-8 lg:mb-10">
                Creative<br/><span className="not-italic font-bold text-6xl md:text-8xl lg:text-[100px]">Intelligence</span>
              </h1>
              <div className="w-16 h-1 bg-[#C5A059] mb-8 lg:mb-10"></div>
              <p className="text-sm lg:text-base leading-relaxed text-gray-400 max-w-md mb-10 lg:mb-12">
                EDEN brings together multiple advanced AI models into a single unified interface, 
                eliminating the need to switch between different tools. Focus on creativity, 
                not complexity.
              </p>
              
              <div className="flex flex-wrap gap-6 items-center">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  className="bg-[#C5A059] text-black px-6 lg:px-8 py-4 lg:py-5 rounded-full flex items-center gap-3 lg:gap-4 group"
                >
                  <span className="text-xs font-bold uppercase tracking-widest">Initialize Module</span>
                  <div className="w-3 h-3 lg:w-4 lg:h-4 border-2 border-black rounded-full group-hover:bg-black transition-colors"></div>
                </motion.button>
                <button className="text-[10px] uppercase tracking-[0.2em] opacity-40 hover:opacity-100 hover:text-[#C5A059] transition-all font-bold">
                  Explore Docs
                </button>
              </div>
            </motion.div>

            <motion.div 
              style={{ y }}
              className="lg:col-span-7 flex items-center justify-center relative mt-8 lg:mt-0"
            >
              <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center">
                <div className="absolute w-[280px] md:w-[350px] lg:w-[400px] h-[380px] md:h-[470px] lg:h-[540px] bg-[#141414] border border-white/5 rounded-[20px] transform rotate-3"></div>
                <div className="absolute w-[280px] md:w-[350px] lg:w-[400px] h-[380px] md:h-[470px] lg:h-[540px] bg-[#1A1A1A] border border-[#C5A059]/20 rounded-[20px] transform -rotate-6 flex flex-col items-center justify-center overflow-hidden p-6 lg:p-8">
                  {/* Image Placeholder */}
                  <div className="w-full h-full flex flex-col items-center justify-center bg-[#0A0A0A] rounded-[12px] border border-dashed border-white/10">
                    <Layers size={60} className="text-[#C5A059]/40 mb-4" />
                    <p className="text-[10px] uppercase tracking-widest text-gray-500">Platform Preview</p>
                    <p className="text-xs text-gray-600 mt-1">Coming Soon</p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] to-transparent pointer-events-none"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 lg:py-32 px-6 lg:px-12 border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 lg:mb-24">
              <div>
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#C5A059] block mb-4">Core Systems</span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">Capabilities</h2>
              </div>
              <div className="text-4xl md:text-5xl lg:text-[48px] font-serif italic font-light opacity-10 mt-4 md:mt-0">02</div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 overflow-hidden">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ backgroundColor: "rgba(197, 160, 89, 0.05)" }}
                  className={`bg-[#0A0A0A] p-8 lg:p-12 transition-colors duration-500 min-h-[350px] lg:min-h-[400px] flex flex-col justify-between group ${feature.size === 'col-span-2' ? 'md:col-span-2' : ''}`}
                >
                  <div>
                    <feature.icon className="text-[#C5A059] mb-6 lg:mb-8 opacity-40 group-hover:opacity-100 transition-opacity" size={28} />
                    <h3 className="text-xl lg:text-2xl font-bold mb-4 lg:mb-6 text-white leading-tight uppercase tracking-wide">
                      {feature.title}
                    </h3>
                    <p className="text-gray-500 leading-relaxed text-sm lg:text-base max-w-xs">
                      {feature.description}
                    </p>
                  </div>
                  <div className="flex justify-end pt-6 lg:pt-8">
                    <div className="w-2 h-2 rounded-full border border-[#C5A059] group-hover:bg-[#C5A059] transition-colors"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Models Section */}
        <section id="models" className="py-20 lg:py-32 px-6 lg:px-12 bg-[#141414] border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 lg:gap-12 mb-12 lg:mb-24">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter whitespace-nowrap">Integrated Models</h2>
              <div className="flex-1 h-[1px] bg-gradient-to-r from-[#C5A059]/30 to-transparent w-full md:w-auto"></div>
              <span className="text-[10px] uppercase tracking-[0.2em] opacity-40">25+ Provider Synergies</span>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-8">
              {models.map((model, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="p-6 lg:p-8 border border-white/5 bg-[#0A0A0A]/50 text-center relative group"
                >
                  <div className="absolute inset-0 border border-[#C5A059]/0 group-hover:border-[#C5A059]/20 transition-all pointer-events-none"></div>
                  <model.icon className="text-[#C5A059] mx-auto mb-4 lg:mb-6 opacity-30 group-hover:opacity-100 transition-opacity" size={24} />
                  <h4 className="text-white font-bold text-sm mb-2">{model.name}</h4>
                  <p className="text-[9px] uppercase tracking-[0.15em] text-gray-600">{model.type}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack Details */}
        <section id="technology" className="py-20 lg:py-40 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#C5A059] block mb-6">03 / Implementation</span>
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter mb-8 lg:mb-12">Technical<br/><span className="italic font-light font-serif">Architecture</span></h2>
              <p className="text-gray-500 leading-relaxed max-w-sm mb-8 lg:mb-12 text-sm lg:text-base">
                A seamless bridge between high-fidelity AI models and fluid reactive interfaces, built for scale and creative precision.
              </p>
              <div className="w-full h-px bg-gradient-to-r from-[#C5A059]/30 to-transparent mb-8 lg:mb-12"></div>
              <div className="flex gap-12 lg:gap-16">
                <div>
                  <div className="text-[9px] uppercase tracking-[0.15em] text-gray-500 mb-2">Status</div>
                  <div className="text-xs font-mono text-white">OPTIMAL // 0.002ms</div>
                </div>
                <div>
                  <div className="text-[9px] uppercase tracking-[0.15em] text-gray-500 mb-2">Uptime</div>
                  <div className="text-xs font-mono text-white">99.982% SYNCED</div>
                </div>
              </div>
            </div>

            <div className="space-y-10 lg:space-y-12 mt-8 lg:mt-0">
              {techStack.map((stack, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 }}
                  className="relative pl-8 lg:pl-12 border-l border-[#C5A059]/20 py-4 group"
                >
                  <div className="absolute top-0 left-[-1px] w-[1px] h-0 bg-[#C5A059] group-hover:h-full transition-all duration-700"></div>
                  <h3 className="text-lg lg:text-xl font-bold text-white mb-4 lg:mb-6 uppercase tracking-widest flex items-center gap-3 lg:gap-4">
                    <span className="text-[#C5A059] opacity-50">{idx + 1}.</span> 
                    {stack.category}
                  </h3>
                  <ul className="grid grid-cols-2 gap-3 lg:gap-4">
                    {stack.items.map((item, i) => (
                      <li key={i} className="text-[10px] lg:text-[11px] uppercase tracking-widest text-gray-500 flex items-center gap-2 lg:gap-3">
                        <div className="w-1 h-1 bg-[#C5A059] opacity-30"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Image Gallery Placeholder Section */}
        <section className="py-20 lg:py-32 px-6 lg:px-12 bg-[#141414] border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 lg:mb-20 gap-6">
              <div>
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#C5A059] block mb-4">Visual Documentation</span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">Platform Gallery</h2>
              </div>
              <p className="text-sm text-gray-500 max-w-xs">Interface previews and system screenshots. Assets loading.</p>
            </div>
            
            <div className="grid md:grid-cols-12 gap-4 lg:gap-8 h-auto md:h-[600px] lg:h-[800px]">
              {/* Main Large Placeholder */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="md:col-span-8 rounded-[24px] lg:rounded-[40px] overflow-hidden border border-dashed border-white/10 bg-[#0A0A0A] flex items-center justify-center min-h-[300px] md:min-h-0"
              >
                <div className="text-center">
                  <Wand2 size={48} className="text-[#C5A059]/30 mx-auto mb-4" />
                  <p className="text-[10px] uppercase tracking-widest text-gray-600">Hero Interface</p>
                </div>
              </motion.div>

              {/* Side Placeholder */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
                className="md:col-span-4 rounded-[24px] lg:rounded-[40px] overflow-hidden border border-dashed border-white/10 bg-[#0A0A0A] flex items-center justify-center min-h-[300px] md:min-h-0"
              >
                <div className="text-center">
                  <ImageIcon size={48} className="text-[#C5A059]/30 mx-auto mb-4" />
                  <p className="text-[10px] uppercase tracking-widest text-gray-600">Generation Panel</p>
                </div>
              </motion.div>

              {/* Bottom Left Placeholder */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="md:col-span-6 rounded-[24px] lg:rounded-[40px] overflow-hidden border border-dashed border-white/10 bg-[#0A0A0A] flex items-center justify-center min-h-[300px] md:min-h-0"
              >
                <div className="text-center">
                  <VideoIcon size={48} className="text-[#C5A059]/30 mx-auto mb-4" />
                  <p className="text-[10px] uppercase tracking-widest text-gray-600">Video Studio</p>
                </div>
              </motion.div>

              {/* Bottom Right Placeholder */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                className="md:col-span-6 rounded-[24px] lg:rounded-[40px] overflow-hidden border border-dashed border-white/10 bg-[#0A0A0A] flex items-center justify-center min-h-[300px] md:min-h-0"
              >
                <div className="text-center">
                  <Shield size={48} className="text-[#C5A059]/30 mx-auto mb-4" />
                  <p className="text-[10px] uppercase tracking-widest text-gray-600">Admin Dashboard</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* High-Impact CTA */}
        <section className="pb-20 lg:pb-40 px-6 lg:px-12">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-7xl mx-auto border border-white/5 bg-[#141414] relative overflow-hidden p-12 lg:p-24 text-center rounded-[2rem] lg:rounded-[3rem]"
          >
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#C5A059]/30 to-transparent"></div>
            <div className="absolute -top-24 lg:-top-48 -left-24 lg:-left-48 w-48 lg:w-96 h-48 lg:h-96 border border-[#C5A059]/10 rounded-full"></div>
            
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#C5A059] block mb-6 lg:mb-8">Access Token Available</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-8 lg:mb-12">Ready to Initialize?</h2>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6 lg:gap-12 items-center">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                className="bg-[#C5A059] text-black px-8 lg:px-12 py-4 lg:py-6 rounded-full font-bold text-xs uppercase tracking-widest flex items-center gap-3 lg:gap-4"
              >
                Sign In Now
                <ChevronRight size={14} />
              </motion.button>
              <button className="text-[10px] uppercase tracking-[0.2em] opacity-40 hover:opacity-100 hover:text-[#C5A059] transition-all font-bold">
                View Pricing
              </button>
            </div>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="px-6 lg:px-12 pb-12 lg:pb-20 pt-12 border-t border-white/5 relative z-10 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
            <div className="md:col-span-8">
               <div className="flex flex-col sm:flex-row gap-12 lg:gap-24 mb-8 lg:mb-12">
                <div>
                  <div className="text-[9px] uppercase tracking-widest text-gray-500 mb-4 tracking-[0.3em]">Corporate</div>
                  <div className="space-y-2">
                    <a href="#" className="block text-[10px] uppercase tracking-widest opacity-40 hover:opacity-100 hover:text-[#C5A059] transition-all">Philosophy</a>
                    <a href="#" className="block text-[10px] uppercase tracking-widest opacity-40 hover:opacity-100 hover:text-[#C5A059] transition-all">Press Kit</a>
                    <a href="#" className="block text-[10px] uppercase tracking-widest opacity-40 hover:opacity-100 hover:text-[#C5A059] transition-all">Legal</a>
                  </div>
                </div>
                <div>
                  <div className="text-[9px] uppercase tracking-widest text-gray-500 mb-4 tracking-[0.3em]">Social</div>
                  <div className="space-y-2">
                    <a href="#" className="block text-[10px] uppercase tracking-widest opacity-40 hover:opacity-100 hover:text-[#C5A059] transition-all">X.com</a>
                    <a href="#" className="block text-[10px] uppercase tracking-widest opacity-40 hover:opacity-100 hover:text-[#C5A059] transition-all">Discord</a>
                    <a href="#" className="block text-[10px] uppercase tracking-widest opacity-40 hover:opacity-100 hover:text-[#C5A059] transition-all">LinkedIn</a>
                  </div>
                </div>
              </div>
              <div className="text-3xl md:text-4xl lg:text-[48px] font-serif italic font-light opacity-10 leading-none">EDEN.AI</div>
            </div>
            
            <div className="md:col-span-4 flex flex-col items-start md:items-end">
              <div className="flex items-center gap-3 mb-4">
                <Link to="/Portfolio" className="flex items-center gap-2 text-[10px] uppercase tracking-widest opacity-40 hover:opacity-100 hover:text-[#C5A059] transition-all">
                  <ArrowLeft size={14} /> Back to Portfolio
                </Link>
              </div>
              <div className="text-[10px] uppercase tracking-[0.2em] opacity-40 text-right">
                Manifest Authority &copy; 2024 / flint_sol<br/>
                optimized_creative_systems
              </div>
              <div className="flex gap-4 mt-4">
                <div className="w-10 h-[1px] bg-[#C5A059]"></div>
                <div className="w-2 h-[1px] bg-white opacity-20"></div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Eden;
