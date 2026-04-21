import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, Heart, Users, BookOpen, Trophy, 
  Bell, Sparkles, Video, MessageCircle, ChevronRight, 
  Play, Download, Flame, Target, Zap, Cross 
} from 'lucide-react';

const FaithCoach = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Original FaithCoach theme - Dark Glassmorphism
  const theme = {
    primary: '#4EBFFF',      // Celestial Blue
    background: '#0A0C0E',     // Midnight Obsidian
    card: '#1C1E21',         // Anthracite Gray
    success: '#2ECC71',        // Vibrant Emerald
    muted: '#A0A0A0',          // Muted Silver
    glass: 'rgba(28, 30, 33, 0.8)',
    border: 'rgba(78, 191, 255, 0.1)',
    glow: 'rgba(78, 191, 255, 0.15)'
  };

  const images = {
    hero: '/assets/products/faith-coach/a landscape horizontaly longer image for faaithcoach.webp',
    profile: '/assets/products/faith-coach/faithcoach profile dashboard.webp',
    marketplace: '/assets/products/faith-coach/faithcoach marketplace.webp',
    modules: '/assets/products/faith-coach/faithcoach faith modules.webp'
  };

  const features = [
    {
      icon: Video,
      title: 'AI Mentor Sessions',
      description: 'Video and text-based sessions with faith mentors. Experience the unique "Round Table" multi-participant feature.',
      image: images.modules
    },
    {
      icon: BookOpen,
      title: 'Daily Devotionals',
      description: 'Daily content for reflection, journaling tools, interactive trivia, and streak systems with faith points.',
      image: images.hero
    },
    {
      icon: Bell,
      title: 'Smart Notifications',
      description: 'Powered by Firebase Cloud Messaging. In-app notification center synchronized with device-level push.',
      image: images.profile
    },
    {
      icon: Trophy,
      title: 'Gamified Progress',
      description: 'Streak systems and faith points to motivate regular usage. Track your spiritual journey visually.',
      image: images.marketplace
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Connect with believers, join discussions, and participate in community challenges together.',
      image: images.modules
    },
    {
      icon: Target,
      title: 'Premium Mentors',
      description: 'Advanced mentor access with subscription flows. Jesus mentor unlock with pass systems.',
      image: images.marketplace
    }
  ];

  const stats = [
    { value: '50K+', label: 'Active Users', icon: Users },
    { value: '100+', label: 'Daily Devotionals', icon: BookOpen },
    { value: '30', label: 'Day Streaks', icon: Flame },
    { value: '24/7', label: 'AI Support', icon: Zap }
  ];

  return (
    <div className="min-h-screen text-white selection:bg-cyan-500/30 font-sans" style={{ backgroundColor: theme.background }}>
      {/* Mesh Gradient Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0" style={{ 
          background: `radial-gradient(circle at 80% 20%, rgba(78, 191, 255, 0.15) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(78, 191, 255, 0.08) 0%, transparent 50%)` 
        }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full blur-[120px] opacity-15" style={{ background: theme.primary }}></div>
      </div>

      {/* Navigation */}
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
              <Heart size={18} fill="white" strokeWidth={0} />
            </div>
            <span className="font-extrabold text-2xl tracking-tighter">Faith Coach</span>
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
                style={{ backgroundColor: 'rgba(78, 191, 255, 0.2)', borderColor: 'rgba(78, 191, 255, 0.3)', color: '#e9d5ff' }}
              >
                <span className="text-xs font-bold uppercase tracking-widest">Spiritual Growth App</span>
              </motion.div>
              
              <div className="space-y-6">
                <motion.span 
                  className="text-xs font-bold uppercase tracking-[2px] block"
                  style={{ color: theme.primary }}
                >
                  Your Daily
                </motion.span>
                <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-7xl md:text-8xl font-extrabold leading-[0.9] tracking-tighter"
                  style={{ 
                    background: 'linear-gradient(to bottom right, #fff, rgba(255,255,255,0.7))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                   }}
                >
                  Spiritual
                  <br />
                  Companion
                </motion.h1>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-lg md:text-xl leading-relaxed max-w-md"
                  style={{ color: theme.muted }}
                >
                  Build a consistent and meaningful daily rhythm centered around prayer, 
                  Scripture, and guided spiritual conversations.
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
                  style={{ backgroundColor: theme.primary, boxShadow: `0 10px 20px rgba(78, 191, 255, 0.3)` }}
                >
                  Download App
                </button>
                <button 
                  className="px-8 py-4 rounded-xl font-semibold border backdrop-blur-[10px] transition-all"
                  style={{ backgroundColor: theme.glass, borderColor: theme.border }}
                >
                  Watch Demo
                </button>
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
                <div className="absolute inset-0 bg-[#4EBFFF]/20 blur-[80px] rounded-full opacity-50 group-hover:opacity-80 transition-opacity"></div>
                
                <motion.div 
                  whileHover={{ rotateY: -5, rotateX: 5, scale: 1.02 }}
                  className="relative z-10 rounded-[40px] overflow-hidden border p-4 shadow-2xl backdrop-blur-[20px]"
                  style={{ backgroundColor: theme.glass, borderColor: theme.border }}
                >
                  <img 
                    src={images.hero} 
                    alt="Faith Coach Dashboard" 
                    className="w-full h-auto rounded-[24px] object-contain"
                    loading="lazy"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section (Premium Bento Grid Feel) */}
      <section className="py-20 px-6 z-10 relative">
        <div className="max-w-7xl mx-auto">
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
                  <stat.icon size={80} />
                </div>
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'rgba(78, 191, 255, 0.1)' }}>
                    <stat.icon size={20} style={{ color: theme.primary }} />
                  </div>
                  <h3 className="text-4xl font-extrabold">{stat.value}</h3>
                  <p className="text-[10px] font-bold tracking-widest uppercase" style={{ color: theme.muted }}>{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Showcase Section (Split) */}
      <section className="py-40 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-40">
            {/* Feature 1: AI Mentor Sessions */}
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
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center border" style={{ backgroundColor: 'rgba(78, 191, 255, 0.1)', borderColor: 'rgba(78, 191, 255, 0.2)' }}>
                  <Video size={30} style={{ color: theme.primary }} />
                </div>
                <h2 className="text-5xl font-bold tracking-tight">AI Mentor Sessions</h2>
                <p className="text-xl leading-relaxed font-normal" style={{ color: theme.muted }}>
                   Video and text-based sessions with faith mentors. Experience the unique "Round Table" multi-participant feature.
                </p>
                <div className="space-y-4 pt-4">
                  {['Multi-participant support', 'Dynamic mentor interaction', 'Biblical grounding'].map((item, i) => (
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
                  <img src={images.modules} alt="AI Mentors" className="w-full h-auto object-contain opacity-80" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0C0E] to-transparent"></div>
                </div>
              </motion.div>
            </div>

            {/* Feature 2: Gamified Progress */}
            <div className="grid lg:grid-cols-12 gap-20 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -50, rotateY: 10 }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-6 order-2 lg:order-1"
              >
                <div className="relative rounded-[40px] overflow-hidden border backdrop-blur-[20px] shadow-2xl" style={{ backgroundColor: theme.glass, borderColor: theme.border }}>
                  <img src={images.marketplace} alt="Marketplace" className="w-full h-auto object-contain opacity-80" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0C0E] to-transparent"></div>
                </div>
              </motion.div>
              <div className="lg:col-span-5 order-1 lg:order-2 space-y-8">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center" style={{ backgroundColor: 'rgba(46, 204, 113, 0.1)', borderColor: 'rgba(46, 204, 113, 0.2)' }}>
                  <Trophy size={30} style={{ color: theme.success }} />
                </div>
                <h2 className="text-5xl font-bold tracking-tight">Gamified Progress</h2>
                <p className="text-xl leading-relaxed font-normal" style={{ color: theme.muted }}>
                  Streak systems and faith points to motivate regular usage. Track your spiritual journey visually.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-6">
                  <div className="p-4 rounded-2xl border backdrop-blur-[10px]" style={{ backgroundColor: theme.glass, borderColor: theme.border }}>
                    <p className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: theme.muted }}>Points</p>
                    <p className="text-2xl font-bold">2,900</p>
                  </div>
                  <div className="p-4 rounded-2xl border backdrop-blur-[10px]" style={{ backgroundColor: theme.glass, borderColor: theme.border }}>
                    <p className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: theme.muted }}>Status</p>
                    <p className="text-2xl font-bold">Pro</p>
                  </div>
                </div>
              </div>
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-1 order-3"
              >
                <span className="text-6xl font-black opacity-10" style={{ color: theme.success }}>02</span>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Grid (The Daily Experience) */}
      <section className="py-24 px-6 relative z-10 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24 space-y-4">
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter">Core Features</h2>
            <p className="text-xl font-light opacity-50 max-w-2xl mx-auto">Everything you need to strengthen your faith journey</p>
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
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-transform" style={{ background: 'rgba(78, 191, 255, 0.1)' }}>
                  <feature.icon size={28} style={{ color: theme.primary }} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-lg leading-relaxed font-normal" style={{ color: theme.muted }}>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* App Gallery Grid (Premium Visuals) */}
      <section className="py-40 px-6 relative overflow-hidden bg-black">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="space-y-4">
              <h2 className="text-5xl md:text-6xl font-black tracking-tighter">App Gallery</h2>
              <p className="text-xl font-light opacity-50">Explore the Faith Coach experience through its intuitive design.</p>
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
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all"></div>
              <div className="absolute bottom-10 left-10">
                <p className="text-xs font-black uppercase tracking-widest text-white/50 mb-2">Primary Interface</p>
                <p className="text-3xl font-bold">Main Dashboard</p>
              </div>
            </motion.div>

            {/* Profile Sidebar */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="md:col-span-4 rounded-[40px] overflow-hidden group relative"
            >
              <img src={images.profile} alt="Profile" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all"></div>
            </motion.div>

            {/* Modules Bottom */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="md:col-span-6 rounded-[40px] overflow-hidden group relative"
            >
              <img src={images.modules} alt="Faith Modules" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all"></div>
            </motion.div>

            {/* Marketplace Bottom */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="md:col-span-6 rounded-[40px] overflow-hidden group relative"
            >
              <img src={images.marketplace} alt="Marketplace" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">Your Faith Journey</h2>
          <div className="space-y-8">
            {[
              { step: 1, title: 'Morning Devotion', desc: 'Start your day with Scripture and prayer', icon: BookOpen },
              { step: 2, title: 'Mentor Session', desc: 'Connect with AI mentors for guidance', icon: MessageCircle },
              { step: 3, title: 'Track Progress', desc: 'Monitor your streaks and faith points', icon: Trophy },
              { step: 4, title: 'Community', desc: 'Share and grow with fellow believers', icon: Users }
            ].map((item, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-6 p-6 rounded-2xl border backdrop-blur-sm transition-all hover:border-cyan-500/50" 
                style={{ backgroundColor: theme.glass, borderColor: 'rgba(78, 191, 255, 0.1)' }}
              >
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg" style={{ backgroundColor: theme.primary }}>
                  {item.step}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  <p style={{ color: theme.muted }}>{item.desc}</p>
                </div>
                <item.icon size={32} style={{ color: theme.primary }} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack (Grid with Dividers) */}
      <section className="py-32 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="md:col-span-1 space-y-4">
              <h2 className="text-3xl font-black tracking-tighter uppercase whitespace-nowrap">Technical <br/> Stack</h2>
              <div className="w-12 h-1 bg-[#4EBFFF]"></div>
            </div>
            
            {[
              { title: 'Frontend', items: ['React Native', 'Expo', 'TypeScript'] },
              { title: 'Backend', items: ['Node.js', 'PostgreSQL', 'REST APIs'] },
              { title: 'Real-Time', items: ['LiveKit', 'Video', 'Multi-participant'] },
              { title: 'Services', items: ['Firebase FCM', 'RevenueCat', 'EAS'] }
            ].map((stack, index) => (
              <div key={index} className="space-y-6">
                <h3 className="text-sm font-black uppercase tracking-widest opacity-40">{stack.title}</h3>
                <ul className="space-y-4">
                  {stack.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-lg font-light">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#4EBFFF]"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
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
              background: 'linear-gradient(to bottom right, #fff, rgba(255,255,255,0.7))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>Begin Your <br/> Journey Today</h2>
            <p className="text-2xl font-normal max-w-2xl mx-auto" style={{ color: theme.muted }}>
              Download Faith Coach and start building your daily spiritual rhythm
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
              style={{ backgroundColor: theme.primary, boxShadow: `0 10px 20px rgba(78, 191, 255, 0.3)` }}
            >
              Download Faith Coach
            </button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t" style={{ backgroundColor: theme.background, borderColor: theme.border }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-white flex items-center justify-center text-black shadow-lg">
              <Heart size={14} fill="currentColor" />
            </div>
            <span className="font-extrabold text-lg tracking-tight">Faith Coach</span>
          </div>
          
          <p className="text-[10px] uppercase font-bold tracking-[2px]" style={{ color: theme.muted }}>© 2024 Faith Coach by Flint Sol. All rights reserved.</p>
          
          <Link to="/Portfolio" className="flex items-center gap-2 hover:opacity-70 transition-colors" style={{ color: theme.primary }}>
            <ArrowLeft size={16} /> Back to Portfolio
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default FaithCoach;
