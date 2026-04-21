import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShoppingBag, Wand2, Mail, Users, BarChart3, MessageSquare, Sparkles, FileText, Target, ChevronRight, Play, Download, Zap, Shield, Cpu, Globe, Rocket, Bot, Video, Trophy, Moon } from 'lucide-react';

const NxtGenAI = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const videoRef = useRef(null);

  // Professional High-Tech Enterprise - White Background Theme
  const theme = {
    primary: '#00A3C4',      // Cyber Teal
    secondary: '#2B6CB0',    // Electric Azure
    background: '#FFFFFF',     // White
    card: '#F8FAFC',           // Light Gray
    dark: '#060B10',           // Deep Space Blue
    muted: '#64748B',          // Slate
    gold: '#D97706',           // Amber Gold for premium
    glass: 'rgba(255, 255, 255, 0.8)',
    border: 'rgba(0, 163, 196, 0.1)',
    glow: 'rgba(0, 163, 196, 0.15)'
  };

  const categories = [
    {
      icon: FileText,
      title: 'Content Creation',
      tools: ['Social Media Generator', 'Hashtag Generator', 'Blog SEO Keywords', '30-Day Calendar', 'YouTube Scripts'],
      color: '#00A3C4'
    },
    {
      icon: Mail,
      title: 'Business Tools',
      tools: ['Email Assistant', 'Product Descriptions', 'Real Estate Listings', 'Market Research', 'CV Strategy'],
      color: '#2B6CB0'
    },
    {
      icon: Bot,
      title: 'AI Agents',
      tools: ['Image Generator', 'Virtual Assistant', 'SEO Specialist', 'Growth Coach', 'Sales Strategist'],
      color: '#00A3C4'
    },
    {
      icon: MessageSquare,
      title: 'Live AI Chat',
      tools: ['Gmail Integration', 'Email Management', 'Scheduling', 'Task Management', 'Real-time Messaging'],
      color: '#2B6CB0'
    }
  ];

  const agents = [
    { name: 'Ecommerce', icon: ShoppingBag },
    { name: 'Copywriter', icon: FileText },
    { name: 'Social Media', icon: MessageSquare },
    { name: 'Support', icon: Users },
    { name: 'Data Analyst', icon: BarChart3 },
    { name: 'Recruiter', icon: Target },
    { name: 'Strategist', icon: Rocket },
    { name: 'Image AI', icon: Wand2 }
  ];

  const stats = [
    { value: '5,000+', label: 'Users', icon: Users },
    { value: '23+', label: 'AI Tools', icon: Cpu },
    { value: '50+', label: 'Agents', icon: Bot },
    { value: '99.9%', label: 'Uptime', icon: Globe }
  ];

  return (
    <div className="min-h-screen selection:bg-cyan-500/30 font-sans" style={{ backgroundColor: theme.background }}>
      {/* Premium Mesh Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0" style={{ 
          background: `radial-gradient(circle at 80% 20%, rgba(0, 163, 196, 0.15) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(43, 108, 176, 0.08) 0%, transparent 50%)` 
        }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full blur-[120px] opacity-15" style={{ background: theme.primary }}></div>
      </div>
      {/* Premium Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-[10px] border-b" style={{ backgroundColor: theme.glass, borderColor: theme.border }}>
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-1.5 cursor-pointer group"
          >
            <Link to="/Portfolio" className="flex items-center gap-1.5 group">
              <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" style={{ color: theme.primary }} />
              <span className="text-sm font-semibold tracking-wide uppercase" style={{ color: theme.muted }}>Back to Portfolio</span>
            </Link>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-3"
          >
            <div className="w-9 h-9 rounded-xl flex items-center justify-center shadow-lg" style={{ background: theme.primary }}>
              <Cpu size={18} fill="white" strokeWidth={0} />
            </div>
            <span className="font-extrabold text-2xl tracking-tighter" style={{ color: theme.dark }}>NxtGenAI</span>
          </motion.div>

          <div className="hidden md:block">
            <button className="px-6 py-2.5 rounded-xl text-sm font-bold transition-all border backdrop-blur-[10px]" style={{ backgroundColor: theme.glass, borderColor: theme.border }}>
              Launch App
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-44 pb-32 overflow-hidden z-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-10">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-block px-4 py-1.5 rounded-full border mb-6" 
                style={{ backgroundColor: 'rgba(0, 163, 196, 0.1)', borderColor: 'rgba(0, 163, 196, 0.2)', color: '#0891b2' }}
              >
                <span className="text-xs font-bold uppercase tracking-widest">AI Tools Marketplace</span>
              </motion.div>
              
              <div className="space-y-6">
                <motion.span 
                  className="text-xs font-bold uppercase tracking-[2px] block"
                  style={{ color: theme.dark }}
                >
                  Central Hub
                </motion.span>
                <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-7xl md:text-8xl font-extrabold leading-[0.9] tracking-tighter"
                  style={{ 
                    background: 'linear-gradient(to bottom right, #060B10, rgba(6, 11, 16, 0.7))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                   }}
                >
                  for Practical
                  <br />
                  <span style={{ color: theme.primary }}>AI</span>
                </motion.h1>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-lg md:text-xl leading-relaxed max-w-md"
                  style={{ color: theme.muted }}
                >
                  Access 23+ AI tools and agents in one organized ecosystem. Automate content creation, 
                  improve marketing execution, and streamline operations.
                </motion.p>
              </div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-4 pt-4"
              >
                <button 
                  className="px-8 py-4 rounded-xl font-semibold text-white transition-all shadow-xl hover:scale-105"
                  style={{ backgroundColor: theme.primary, boxShadow: `0 10px 20px rgba(0, 163, 196, 0.3)` }}
                >
                  Try NxtGenAI
                </button>
                <button 
                  className="px-8 py-4 rounded-xl font-semibold border backdrop-blur-[10px] transition-all"
                  style={{ backgroundColor: theme.glass, borderColor: theme.border, color: theme.primary }}
                >
                  Download App
                </button>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex items-center gap-8 pt-6"
              >
                <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-white" style={{ backgroundColor: theme.primary }}>
                      U{i}
                    </div>
                  ))}
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold" style={{ color: theme.dark }}>5,000+</span>
                  <span className="text-xs font-bold uppercase tracking-widest" style={{ color: theme.muted }}>Trusted Users</span>
                </div>
              </motion.div>
            </div>

            {/* Right - Hero Image (3D Floating) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotateY: 20 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 relative perspective-1000"
            >
              <div className="relative z-10 group">
                {/* Glow behind image */}
                <div className="absolute inset-0 bg-[#00A3C4]/20 blur-[80px] rounded-full opacity-50 group-hover:opacity-80 transition-opacity"></div>
                
                <motion.div 
                  whileHover={{ rotateY: -5, rotateX: 5, scale: 1.02 }}
                  className="relative z-10 rounded-[40px] overflow-hidden border p-4 shadow-2xl backdrop-blur-[20px]"
                  style={{ backgroundColor: theme.glass, borderColor: theme.border }}
                >
                  <img 
                    src="/assets/products/nxtgenai/nextgenAi home page ss.webp" 
                    alt="NxtGenAI Dashboard" 
                    className="w-full h-auto rounded-[24px] object-contain"
                    loading="lazy"
                  />
                </motion.div>

                {/* Floating Accent */}
                <motion.div 
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-10 -right-10 w-32 h-32 rounded-3xl bg-cyan-500/10 backdrop-blur-3xl border border-white/20 z-20 flex items-center justify-center shadow-xl"
                >
                  <Sparkles size={32} style={{ color: theme.primary }} className="opacity-50" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Video Showcase Section - Cinematic Experience */}
      <section className="py-24 relative overflow-hidden" style={{ backgroundColor: theme.dark }}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0,163,196,0.3) 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ backgroundColor: 'rgba(0, 163, 196, 0.2)', border: '1px solid rgba(0, 163, 196, 0.3)' }}>
              <Play size={16} style={{ color: theme.primary }} />
              <span className="text-sm font-medium text-white">Watch Demo</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">See NxtGenAI in Action</h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: theme.muted }}>
              Experience how our AI tools transform your workflow in this 60-second showcase
            </p>
          </div>

          {/* Cinematic Video Container */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4" style={{ borderColor: 'rgba(0, 163, 196, 0.3)' }}>
            {/* Video Header Bar */}
            <div className="flex items-center gap-3 px-4 py-3 border-b" style={{ backgroundColor: 'rgba(0, 163, 196, 0.1)', borderColor: 'rgba(0, 163, 196, 0.2)' }}>
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#ff5f57' }}></div>
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#febc2e' }}></div>
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#28c840' }}></div>
              </div>
              <span className="text-sm text-white/60 ml-4">nxtgenai-demo.mp4</span>
            </div>
            
            {/* Video Player */}
            <div className="relative bg-black">
              <video 
                ref={videoRef}
                src="/assets/products/nxtgenai/video of nextgen AI.mp4"
                controls
                className="w-full h-auto max-h-[60vh]"
                poster="/assets/products/nxtgenai/nextgen AI services page.webp"
              />
            </div>
            
            {/* Video Info Bar */}
            <div className="flex items-center justify-between px-6 py-4 border-t" style={{ backgroundColor: theme.card, borderColor: 'rgba(0, 163, 196, 0.2)' }}>
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium" style={{ color: theme.dark }}>Duration: 0:26</span>
                <span className="text-sm" style={{ color: theme.muted }}>•</span>
                <span className="text-sm" style={{ color: theme.muted }}>Full HD</span>
              </div>
              <button 
                onClick={() => {
                  if (videoRef.current) {
                    if (videoRef.current.paused) {
                      videoRef.current.play();
                    } else {
                      videoRef.current.pause();
                    }
                  }
                }}
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-white text-sm font-medium transition-all hover:opacity-90"
                style={{ backgroundColor: theme.primary }}
              >
                <Play size={16} fill="white" />
                Play/Pause
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section (Premium Bento Grid Feel) */}
      <section className="py-20 px-6 z-10 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] mb-12 opacity-30" style={{ color: theme.muted }}>Our Impact</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative p-8 rounded-3xl border backdrop-blur-[10px] transition-all overflow-hidden"
                style={{ backgroundColor: theme.glass, borderColor: theme.border }}
              >
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <stat.icon size={80} style={{ color: theme.primary }} />
                </div>
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'rgba(0, 163, 196, 0.1)' }}>
                    <stat.icon size={20} style={{ color: theme.primary }} />
                  </div>
                  <h3 className="text-4xl font-extrabold" style={{ color: theme.dark }}>{stat.value}</h3>
                  <p className="text-[10px] font-bold tracking-widest uppercase" style={{ color: theme.muted }}>{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Showcase Section (Split) - Tool Categories */}
      <section className="py-40 px-6 relative overflow-hidden" style={{ backgroundColor: theme.card }}>
        <div className="max-w-7xl mx-auto">
          <div className="space-y-40">
            {/* Feature 1: Content Creation */}
            <div className="grid lg:grid-cols-12 gap-20 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="lg:col-span-1"
              >
                <span className="text-6xl font-black opacity-10" style={{ color: theme.primary }}>01</span>
              </motion.div>
              <div className="lg:col-span-5 space-y-8">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center border" style={{ backgroundColor: 'rgba(0, 163, 196, 0.1)', borderColor: 'rgba(0, 163, 196, 0.2)' }}>
                  <FileText size={30} style={{ color: theme.primary }} />
                </div>
                <h2 className="text-5xl font-bold tracking-tight" style={{ color: theme.dark }}>Content Creation</h2>
                <p className="text-xl leading-relaxed font-normal" style={{ color: theme.muted }}>
                  Social Media Generator, Hashtag Generator, Blog SEO Keywords, 30-Day Calendar, YouTube Scripts.
                </p>
                <div className="space-y-4 pt-4">
                  {['AI-powered content', 'SEO optimization', 'Multi-platform support'].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <ChevronRight size={18} style={{ color: theme.primary }} />
                      <span className="font-medium opacity-80">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <motion.div 
                initial={{ opacity: 0, x: 50, rotateY: -10 }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-6"
              >
                <div className="relative rounded-[40px] overflow-hidden border backdrop-blur-[20px] shadow-2xl" style={{ backgroundColor: theme.glass, borderColor: theme.border }}>
                  <img src="/assets/products/nxtgenai/nextgenAi home page ss.webp" alt="Content Creation" className="w-full h-auto object-contain opacity-80" />
                </div>
              </motion.div>
            </div>

            {/* Feature 2: AI Agents */}
            <div className="grid lg:grid-cols-12 gap-20 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -50, rotateY: 10 }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-6 order-2 lg:order-1"
              >
                <div className="relative rounded-[40px] overflow-hidden border backdrop-blur-[20px] shadow-2xl" style={{ backgroundColor: theme.glass, borderColor: theme.border }}>
                  <img src="/assets/products/nxtgenai/nextgen AI services page.webp" alt="AI Agents" className="w-full h-auto object-contain opacity-80" />
                </div>
              </motion.div>
              <div className="lg:col-span-5 order-1 lg:order-2 space-y-8">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center" style={{ backgroundColor: 'rgba(43, 108, 176, 0.1)', borderColor: 'rgba(43, 108, 176, 0.2)' }}>
                  <Bot size={30} style={{ color: theme.secondary }} />
                </div>
                <h2 className="text-5xl font-bold tracking-tight" style={{ color: theme.dark }}>Specialized AI Agents</h2>
                <p className="text-xl leading-relaxed font-normal" style={{ color: theme.muted }}>
                  Ecommerce, Copywriter, Social Media, Support, Data Analyst, Recruiter, Strategist, Image AI.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-6">
                  <div className="p-4 rounded-2xl border backdrop-blur-[10px]" style={{ backgroundColor: theme.glass, borderColor: theme.border }}>
                    <p className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: theme.muted }}>Agents</p>
                    <p className="text-2xl font-bold" style={{ color: theme.primary }}>50+</p>
                  </div>
                  <div className="p-4 rounded-2xl border backdrop-blur-[10px]" style={{ backgroundColor: theme.glass, borderColor: theme.border }}>
                    <p className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: theme.muted }}>Categories</p>
                    <p className="text-2xl font-bold" style={{ color: theme.secondary }}>4</p>
                  </div>
                </div>
              </div>
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-1 order-3"
              >
                <span className="text-6xl font-black opacity-10" style={{ color: theme.secondary }}>02</span>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Grid (The Complete Experience) */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24 space-y-4">
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter" style={{ color: theme.dark }}>All AI Tools</h2>
            <p className="text-xl font-light opacity-50 max-w-2xl mx-auto" style={{ color: theme.muted }}>23+ production-ready AI tools organized by use case</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="group p-10 rounded-[32px] border backdrop-blur-[10px] transition-all"
                style={{ backgroundColor: theme.glass, borderColor: theme.border }}
              >
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-transform" style={{ background: 'rgba(0, 163, 196, 0.1)' }}>
                  <category.icon size={28} style={{ color: category.color }} />
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: theme.dark }}>{category.title}</h3>
                <ul className="space-y-3">
                  {category.tools.map((tool, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-light" style={{ color: theme.muted }}>
                      <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: category.color }}></div>
                      {tool}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* App Gallery Grid (Premium Visuals) */}
      <section className="py-40 px-6 relative overflow-hidden" style={{ backgroundColor: theme.background }}>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="space-y-4">
              <h2 className="text-5xl md:text-6xl font-black tracking-tighter" style={{ color: theme.dark }}>Platform Preview</h2>
              <p className="text-xl font-light opacity-50" style={{ color: theme.muted }}>Explore the NxtGenAI experience through its intuitive design</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-12 gap-8 h-[1200px] md:h-[800px]">
            {/* Top Wide Image */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-8 rounded-[40px] overflow-hidden group relative"
            >
              <img src="/assets/products/nxtgenai/nextgenAi home page ss.webp" alt="Main Console" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-all"></div>
              <div className="absolute bottom-10 left-10">
                <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <p className="text-xs font-black uppercase tracking-widest text-gray-600 mb-1">Primary Interface</p>
                  <p className="text-2xl font-bold" style={{ color: theme.primary }}>Home Dashboard</p>
                </div>
              </div>
            </motion.div>

            {/* Services Page Sidebar */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="md:col-span-4 rounded-[40px] overflow-hidden group relative"
            >
              <img src="/assets/products/nxtgenai/nextgen AI services page.webp" alt="Services Page" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-all"></div>
              <div className="absolute bottom-10 left-10">
                <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <p className="text-xs font-black uppercase tracking-widest text-gray-600 mb-1">Catalog</p>
                  <p className="text-2xl font-bold" style={{ color: theme.primary }}>Services</p>
                </div>
              </div>
            </motion.div>

            {/* Empty Bottom - Placeholder for future content */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="md:col-span-6 rounded-[40px] border-2 border-dashed flex items-center justify-center"
              style={{ borderColor: theme.border, backgroundColor: theme.card }}
            >
              <div className="text-center">
                <Sparkles size={48} className="mb-4" style={{ color: theme.primary }} />
                <p className="text-lg font-bold" style={{ color: theme.muted }}>More Features Coming Soon</p>
              </div>
            </motion.div>

            {/* Empty Bottom Right - Placeholder for future content */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="md:col-span-6 rounded-[40px] border-2 border-dashed flex items-center justify-center"
              style={{ borderColor: theme.border, backgroundColor: theme.card }}
            >
              <div className="text-center">
                <Rocket size={48} className="mb-4" style={{ color: theme.secondary }} />
                <p className="text-lg font-bold" style={{ color: theme.muted }}>Enterprise Features</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Tech Stack (Grid with Dividers) */}
      <section className="py-32 px-6 border-t" style={{ borderColor: theme.border }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="md:col-span-1 space-y-4">
              <h2 className="text-3xl font-black tracking-tighter uppercase whitespace-nowrap">Technical <br/> Stack</h2>
              <div className="w-12 h-1" style={{ backgroundColor: theme.primary }}></div>
            </div>
            
            {[
              { title: 'Frontend', items: ['React', 'TypeScript', 'Tailwind CSS'] },
              { title: 'Backend', items: ['Node.js', 'Python', 'FastAPI'] },
              { title: 'AI/ML', items: ['OpenAI', 'TensorFlow', 'Custom Models'] },
              { title: 'Services', items: ['Stripe', 'PostgreSQL', 'Redis'] }
            ].map((stack, index) => (
              <div key={index} className="space-y-6">
                <h3 className="text-sm font-black uppercase tracking-widest opacity-40" style={{ color: theme.dark }}>{stack.title}</h3>
                <ul className="space-y-4">
                  {stack.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-lg font-light">
                      <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: theme.primary }}></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24" style={{ backgroundColor: theme.background }}>
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16" style={{ color: theme.dark }}>Subscription Plans</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="p-8 rounded-2xl border" style={{ backgroundColor: theme.card, borderColor: 'rgba(0, 163, 196, 0.1)' }}>
              <h3 className="text-xl font-bold mb-4" style={{ color: theme.dark }}>Starter</h3>
              <div className="text-4xl font-bold mb-6" style={{ color: theme.primary }}>Free</div>
              <ul className="space-y-3 mb-8" style={{ color: theme.muted }}>
                <li className="flex items-center gap-2"><ChevronRight size={16} style={{ color: theme.primary }} /> Core AI tools</li>
                <li className="flex items-center gap-2"><ChevronRight size={16} style={{ color: theme.primary }} /> Limited credits</li>
                <li className="flex items-center gap-2"><ChevronRight size={16} style={{ color: theme.primary }} /> Basic support</li>
              </ul>
              <button className="w-full py-3 rounded-full font-bold border-2 transition-all hover:opacity-70" style={{ borderColor: theme.primary, color: theme.primary }}>
                Get Started
              </button>
            </div>
            
            <div className="p-8 rounded-2xl border shadow-2xl transform md:scale-105" style={{ backgroundColor: theme.dark, borderColor: theme.primary }}>
              <div className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4" style={{ backgroundColor: theme.gold, color: 'white' }}>POPULAR</div>
              <h3 className="text-xl font-bold mb-4 text-white">Business</h3>
              <div className="text-4xl font-bold mb-6" style={{ color: theme.primary }}>$49/mo</div>
              <ul className="space-y-3 mb-8 text-white/80">
                <li className="flex items-center gap-2"><ChevronRight size={16} style={{ color: theme.primary }} /> All AI tools & agents</li>
                <li className="flex items-center gap-2"><ChevronRight size={16} style={{ color: theme.primary }} /> Priority support</li>
                <li className="flex items-center gap-2"><ChevronRight size={16} style={{ color: theme.primary }} /> Advanced analytics</li>
              </ul>
              <button className="w-full py-3 rounded-full font-bold text-white transition-all hover:opacity-90" style={{ backgroundColor: theme.primary }}>
                Subscribe Now
              </button>
            </div>
            
            <div className="p-8 rounded-2xl border" style={{ backgroundColor: theme.card, borderColor: 'rgba(0, 163, 196, 0.1)' }}>
              <h3 className="text-xl font-bold mb-4" style={{ color: theme.dark }}>Enterprise</h3>
              <div className="text-4xl font-bold mb-6" style={{ color: theme.primary }}>Custom</div>
              <ul className="space-y-3 mb-8" style={{ color: theme.muted }}>
                <li className="flex items-center gap-2"><ChevronRight size={16} style={{ color: theme.primary }} /> Custom automation</li>
                <li className="flex items-center gap-2"><ChevronRight size={16} style={{ color: theme.primary }} /> Dedicated support</li>
                <li className="flex items-center gap-2"><ChevronRight size={16} style={{ color: theme.primary }} /> API access</li>
              </ul>
              <button className="w-full py-3 rounded-full font-bold border-2 transition-all hover:opacity-70" style={{ borderColor: theme.primary, color: theme.primary }}>
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-60 px-6 relative overflow-hidden" style={{ backgroundColor: theme.background }}>
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
           <div className="w-[800px] h-[800px] rounded-full blur-[120px]" style={{ background: theme.primary }}></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-12">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-6xl md:text-8xl font-extrabold tracking-tighter leading-none" style={{ 
              background: 'linear-gradient(to bottom right, #060B10, rgba(6, 11, 16, 0.7))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>Transform AI<br/> Into Outcomes</h2>
            <p className="text-2xl font-normal max-w-2xl mx-auto" style={{ color: theme.muted }}>
              Join 5,000+ users already using NxtGenAI for practical AI adoption
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <button 
              className="px-16 py-6 rounded-xl font-bold text-2xl text-white transition-all shadow-xl hover:scale-105"
              style={{ backgroundColor: theme.primary, boxShadow: `0 10px 20px rgba(0, 163, 196, 0.3)` }}
            >
              Get Started Free
            </button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t" style={{ backgroundColor: theme.background, borderColor: theme.border }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center shadow-lg" style={{ backgroundColor: theme.primary }}>
              <Cpu size={14} fill="white" />
            </div>
            <span className="font-extrabold text-lg tracking-tight" style={{ color: theme.dark }}>NxtGenAI</span>
          </div>
          
          <p className="text-[10px] uppercase font-bold tracking-[2px]" style={{ color: theme.muted }}>© 2024 NxtGenAI by Flint Sol. All rights reserved.</p>
          
          <Link to="/Portfolio" className="flex items-center gap-2 hover:opacity-70 transition-colors" style={{ color: theme.primary }}>
            <ArrowLeft size={16} /> Back to Portfolio
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default NxtGenAI;
