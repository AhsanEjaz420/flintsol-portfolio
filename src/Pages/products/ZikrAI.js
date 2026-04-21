import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, Heart, Users, BookOpen, Trophy, 
  Bell, Sparkles, Video, MessageCircle, ChevronRight, 
  Play, Download, Flame, Target, Zap, Moon, 
  Star, Quote, Shield, PenTool, Clock
} from 'lucide-react';

const ZikrAI = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Original ZikrAI theme - Islamic Green & Gold
  const theme = {
    primary: '#1E3A34',      // Deep Mosque Green
    action: '#EAB308',       // Sand Gold
    background: '#F9F9F7',   // Off-White / Bone
    card: '#EFEFE9',         // Soft Parchment
    text: '#121D1A',         // Charcoal Forest
    muted: '#6B7280',         // Muted text
    glass: 'rgba(255, 255, 255, 0.8)',
    border: 'rgba(30, 58, 52, 0.1)',
    glow: 'rgba(234, 179, 8, 0.15)'
  };

  const images = {
    hero: '/assets/products/zikr-ai/a landscape horizontaly longer image for zikrai.webp',
    catalog: '/assets/products/zikr-ai/zikrai quran verse catalog.webp',
    starter: '/assets/products/zikr-ai/zikr ai starterm page.webp',
    signup: '/assets/products/zikr-ai/zikr ai signup page.webp'
  };

  const features = [
    {
      icon: Sparkles,
      title: 'AI Spiritual Guidance',
      description: 'Ask any question about faith and receive wisdom-based responses rooted in Quran and Sunnah.',
      image: images.hero
    },
    {
      icon: BookOpen,
      title: 'Complete Quran Experience',
      description: 'Browse all 114 Surahs with Arabic text and English translations. Navigate by Surah or Para.',
      image: images.catalog
    },
    {
      icon: Heart,
      title: 'Dua Library & Reminders',
      description: 'Curated collection of authentic Duas from Quran and Hadith. Set smart reminders.',
      image: images.starter
    },
    {
      icon: Clock,
      title: 'Prayer Time Services',
      description: 'Real-time accurate prayer times using Aladhan API. Auto-detect location and countdown timers.',
      image: images.hero
    },
    {
      icon: PenTool,
      title: 'Personal Faith Journal',
      description: 'Write daily reflections with AI-powered insights and emotional pattern recognition.',
      image: images.catalog
    },
    {
      icon: Target,
      title: 'Faith Coach & Goals',
      description: 'AI-generated 30-day spiritual development plans with progress tracking.',
      image: images.starter
    }
  ];

  const stats = [
    { value: '10K+', label: 'Active Seekers', icon: Users },
    { value: '1.2M+', label: 'Daily Duas', icon: BookOpen },
    { value: '45+', label: 'Countries', icon: Heart },
    { value: '15M+', label: 'AI Responses', icon: Zap }
  ];

  const techStack = [
    { name: 'React', category: 'Frontend' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'MongoDB', category: 'Database' },
    { name: 'Framer Motion', category: 'Animations' },
    { name: 'Lucide', category: 'Icons' },
    { name: 'Tailwind CSS', category: 'Styling' },
  ];

  return (
    <div className="min-h-screen text-gray-900 selection:bg-yellow-500/30 font-sans" style={{ backgroundColor: theme.background }}>
      {/* Premium Mesh Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0" style={{ 
          background: `radial-gradient(circle at 80% 20%, rgba(234, 179, 8, 0.15) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(30, 58, 52, 0.08) 0%, transparent 50%)` 
        }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full blur-[120px] opacity-15" style={{ background: theme.action }}></div>
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
              <Moon size={18} fill="white" strokeWidth={0} />
            </div>
            <span className="font-extrabold text-2xl tracking-tighter">Zikr AI</span>
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
                style={{ backgroundColor: 'rgba(234, 179, 8, 0.2)', borderColor: 'rgba(234, 179, 8, 0.3)', color: '#92400e' }}
              >
                <span className="text-xs font-bold uppercase tracking-widest">Next-Gen Faith Technology</span>
              </motion.div>
              
              <div className="space-y-6">
                <motion.span 
                  className="text-xs font-bold uppercase tracking-[2px] block"
                  style={{ color: theme.primary }}
                >
                  Your
                </motion.span>
                <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-7xl md:text-8xl font-extrabold leading-[0.9] tracking-tighter"
                  style={{ 
                    background: 'linear-gradient(to bottom right, #1E3A34, rgba(30, 58, 52, 0.7))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                   }}
                >
                  Spiritual
                  <br />
                  <span style={{ color: theme.action }}>Companion.</span>
                </motion.h1>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-lg md:text-xl leading-relaxed max-w-md"
                  style={{ color: theme.muted }}
                >
                  Zikr AI illuminates your spiritual journey through artificial intelligence 
                  and Islamic wisdom. Combining traditional practices with modern technology.
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
                  style={{ backgroundColor: theme.action, boxShadow: `0 10px 20px rgba(234, 179, 8, 0.3)` }}
                >
                  Get Started Free
                </button>
                <button 
                  className="px-8 py-4 rounded-xl font-semibold border backdrop-blur-[10px] transition-all"
                  style={{ backgroundColor: theme.glass, borderColor: theme.border, color: theme.primary }}
                >
                  Experience Demo
                </button>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex items-center gap-8 pt-6"
              >
                <div className="flex items-center gap-1">
                  {[1,2,3,4,5].map(i => <Star key={i} size={14} fill={theme.action} style={{ color: theme.action }} />)}
                </div>
                <span className="text-xs font-bold mt-1 uppercase tracking-widest" style={{ color: theme.muted }}>4.9 App Store Rating</span>
                <div className="w-px h-10 bg-gray-300" />
                <div className="flex flex-col">
                  <span className="text-xl font-bold" style={{ color: theme.primary }}>10K+</span>
                  <span className="text-xs font-bold uppercase tracking-widest" style={{ color: theme.muted }}>Active Seekers</span>
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
                <div className="absolute inset-0 bg-[#EAB308]/20 blur-[80px] rounded-full opacity-50 group-hover:opacity-80 transition-opacity"></div>
                
                <motion.div 
                  whileHover={{ rotateY: -5, rotateX: 5, scale: 1.02 }}
                  className="relative z-10 rounded-[40px] overflow-hidden border p-4 shadow-2xl backdrop-blur-[20px]"
                  style={{ backgroundColor: theme.glass, borderColor: theme.border }}
                >
                  <img 
                    src={images.hero} 
                    alt="Zikr AI Dashboard" 
                    className="w-full h-auto rounded-[24px] object-contain"
                    loading="lazy"
                  />
                </motion.div>

                {/* Floating Accent */}
                <motion.div 
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-10 -right-10 w-32 h-32 rounded-3xl bg-yellow-500/10 backdrop-blur-3xl border border-white/20 z-20 flex items-center justify-center shadow-xl"
                >
                  <Quote size={32} style={{ color: theme.action }} className="opacity-50" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section (Premium Bento Grid Feel) */}
      <section className="py-20 px-6 z-10 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] mb-12 opacity-30" style={{ color: theme.muted }}>Our Global Reach</p>
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
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'rgba(30, 58, 52, 0.1)' }}>
                    <stat.icon size={20} style={{ color: theme.primary }} />
                  </div>
                  <h3 className="text-4xl font-extrabold" style={{ color: theme.primary }}>{stat.value}</h3>
                  <p className="text-[10px] font-bold tracking-widest uppercase" style={{ color: theme.muted }}>{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Showcase Section (Split) */}
      <section className="py-40 px-6 relative overflow-hidden" style={{ backgroundColor: theme.card }}>
        <div className="max-w-7xl mx-auto">
          <div className="space-y-40">
            {/* Feature 1: AI Spiritual Guidance */}
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
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center border" style={{ backgroundColor: 'rgba(30, 58, 52, 0.1)', borderColor: 'rgba(30, 58, 52, 0.2)' }}>
                  <Sparkles size={30} style={{ color: theme.primary }} />
                </div>
                <h2 className="text-5xl font-bold tracking-tight" style={{ color: theme.primary }}>AI Spiritual Guidance</h2>
                <p className="text-xl leading-relaxed font-normal" style={{ color: theme.muted }}>
                  Ask any question about faith and receive wisdom-based responses rooted in Quran and Sunnah.
                </p>
                <div className="space-y-4 pt-4">
                  {['Authentic Islamic sources', 'Personalized responses', '24/7 availability'].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <ChevronRight size={18} style={{ color: theme.action }} />
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
                  <img src={images.hero} alt="AI Guidance" className="w-full h-auto object-contain" />
                </div>
              </motion.div>
            </div>

            {/* Feature 2: Complete Quran Experience */}
            <div className="grid lg:grid-cols-12 gap-20 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -50, rotateY: 10 }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-6 order-2 lg:order-1"
              >
                <div className="relative rounded-[40px] overflow-hidden border backdrop-blur-[20px] shadow-2xl" style={{ backgroundColor: theme.glass, borderColor: theme.border }}>
                  <img src={images.catalog} alt="Quran Catalog" className="w-full h-auto object-contain" />
                </div>
              </motion.div>
              <div className="lg:col-span-5 order-1 lg:order-2 space-y-8">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center" style={{ backgroundColor: 'rgba(234, 179, 8, 0.1)', borderColor: 'rgba(234, 179, 8, 0.2)' }}>
                  <BookOpen size={30} style={{ color: theme.action }} />
                </div>
                <h2 className="text-5xl font-bold tracking-tight" style={{ color: theme.primary }}>Complete Quran Experience</h2>
                <p className="text-xl leading-relaxed font-normal" style={{ color: theme.muted }}>
                  Browse all 114 Surahs with Arabic text and English translations. Navigate by Surah or Para.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-6">
                  <div className="p-4 rounded-2xl border backdrop-blur-[10px]" style={{ backgroundColor: theme.glass, borderColor: theme.border }}>
                    <p className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: theme.muted }}>Surahs</p>
                    <p className="text-2xl font-bold" style={{ color: theme.primary }}>114</p>
                  </div>
                  <div className="p-4 rounded-2xl border backdrop-blur-[10px]" style={{ backgroundColor: theme.glass, borderColor: theme.border }}>
                    <p className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: theme.muted }}>Languages</p>
                    <p className="text-2xl font-bold" style={{ color: theme.action }}>25+</p>
                  </div>
                </div>
              </div>
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-1 order-3"
              >
                <span className="text-6xl font-black opacity-10" style={{ color: theme.action }}>02</span>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Grid (The Complete Experience) */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24 space-y-4">
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter" style={{ color: theme.primary }}>Everything You Need</h2>
            <p className="text-xl font-light opacity-50 max-w-2xl mx-auto" style={{ color: theme.muted }}>A holistic spiritual toolkit designed to seamlessly integrate into your busy modern life</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="group p-10 rounded-[32px] border backdrop-blur-[10px] transition-all"
                style={{ backgroundColor: theme.glass, borderColor: theme.border }}
              >
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-transform" style={{ background: 'rgba(30, 58, 52, 0.1)' }}>
                  <feature.icon size={28} style={{ color: theme.primary }} />
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: theme.primary }}>{feature.title}</h3>
                <p className="text-lg leading-relaxed font-normal" style={{ color: theme.muted }}>{feature.description}</p>
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
              <h2 className="text-5xl md:text-6xl font-black tracking-tighter" style={{ color: theme.primary }}>App Gallery</h2>
              <p className="text-xl font-light opacity-50" style={{ color: theme.muted }}>Explore the Zikr AI experience through its intuitive design</p>
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
              <img src={images.hero} alt="Main Console" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </motion.div>

            {/* Starter Page Sidebar */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="md:col-span-4 rounded-[40px] overflow-hidden group relative"
            >
              <img src={images.starter} alt="Starter Page" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-all"></div>
            </motion.div>

            {/* Catalog Bottom */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="md:col-span-6 rounded-[40px] overflow-hidden group relative"
            >
              <img src={images.catalog} alt="Quran Catalog" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-all"></div>
            </motion.div>

            {/* Signup Page Bottom */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="md:col-span-6 rounded-[40px] overflow-hidden group relative"
            >
              <img src={images.signup} alt="Signup Page" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
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
              <div className="w-12 h-1" style={{ backgroundColor: theme.action }}></div>
            </div>
            
            {[
              { title: 'Frontend', items: ['React Native', 'Expo', 'TypeScript'] },
              { title: 'Backend', items: ['Node.js', 'PostgreSQL', 'REST APIs'] },
              { title: 'AI/ML', items: ['Gemini AI', 'Natural Language', 'Islamic Knowledge'] },
              { title: 'Services', items: ['Aladhan API', 'Stripe SDK', 'Firebase'] }
            ].map((stack, index) => (
              <div key={index} className="space-y-6">
                <h3 className="text-sm font-black uppercase tracking-widest opacity-40" style={{ color: theme.primary }}>{stack.title}</h3>
                <ul className="space-y-4">
                  {stack.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-lg font-light">
                      <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: theme.action }}></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Interstitial */}
      <section className="py-40 relative overflow-hidden" style={{ backgroundColor: theme.primary }}>
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute inset-0" style={{ background: `${theme.action}20` }}></div>
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <Quote size={64} className="mx-auto mb-12" style={{ color: theme.action, opacity: 0.3 }} />
          <motion.blockquote 
            whileInView={{ opacity: [0, 1], y: [20, 0] }}
            className="text-4xl md:text-6xl font-light leading-tight text-white mb-10 italic"
          >
            "Indeed, with hardship comes ease."
          </motion.blockquote>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-px" style={{ backgroundColor: theme.action, opacity: 0.5 }}></div>
            <p className="font-bold tracking-widest uppercase text-sm" style={{ color: theme.action }}>Al-Quran 94:5</p>
            <div className="w-12 h-px" style={{ backgroundColor: theme.action, opacity: 0.5 }}></div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-60 px-6 relative overflow-hidden" style={{ backgroundColor: theme.background }}>
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
           <div className="w-[800px] h-[800px] rounded-full blur-[120px]" style={{ background: theme.action }}></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-12">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-6xl md:text-8xl font-extrabold tracking-tighter leading-none" style={{ 
              background: 'linear-gradient(to bottom right, #1E3A34, rgba(30, 58, 52, 0.7))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>Begin Your <br/> Spiritual Journey</h2>
            <p className="text-2xl font-normal max-w-2xl mx-auto" style={{ color: theme.muted }}>
              Join thousands of Muslims worldwide strengthening their faith with Zikr AI
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
              style={{ backgroundColor: theme.action, boxShadow: `0 10px 20px rgba(234, 179, 8, 0.3)` }}
            >
              Download Zikr AI
            </button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t" style={{ backgroundColor: theme.background, borderColor: theme.border }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center shadow-lg" style={{ backgroundColor: theme.primary }}>
              <Moon size={14} fill="white" />
            </div>
            <span className="font-extrabold text-lg tracking-tight" style={{ color: theme.primary }}>Zikr AI</span>
          </div>
          
          <p className="text-[10px] uppercase font-bold tracking-[2px]" style={{ color: theme.muted }}> 2024 Zikr AI by Flint Sol. All rights reserved.</p>
          
          <Link to="/Portfolio" className="flex items-center gap-2 hover:opacity-70 transition-colors" style={{ color: theme.primary }}>
            <ArrowLeft size={16} /> Back to Portfolio
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default ZikrAI;
