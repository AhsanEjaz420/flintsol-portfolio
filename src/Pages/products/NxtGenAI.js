import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShoppingBag, Wand2, Mail, Users, BarChart3, MessageSquare, Sparkles, FileText, Target, ChevronRight, Play, Download, Zap, Shield, Cpu, Globe, Rocket, Bot, Video, Trophy, ChevronLeft, Plus, Calendar, Home } from 'lucide-react';

const NxtGenAI = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const videoRef = useRef(null);
  const sliderRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const scrollSlider = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = 400;
      sliderRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // AI Agents and Services data from product page - Comprehensive list
  const aiAgents = [
    // Content Creation Tools
    {
      id: 'social-caption',
      name: 'Social Media Caption Generator',
      role: 'Content Creation',
      description: 'Creates high-engagement captions tailored for Instagram, LinkedIn, and X.',
      icon: MessageSquare,
      color: '#00A3C4',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80'
    },
    {
      id: 'hashtag-gen',
      name: 'Hashtag Generator',
      role: 'Content Creation',
      description: 'Discovers trending and niche hashtags to boost post visibility and reach.',
      icon: Target,
      color: '#00A3C4',
      image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&q=80'
    },
    {
      id: 'content-ideas',
      name: 'Content Ideas Generator',
      role: 'Content Creation',
      description: 'Brainstorms viral content themes and creative angles for your brand.',
      icon: Sparkles,
      color: '#00A3C4',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80'
    },
    {
      id: 'blog-seo',
      name: 'Blog Topic & SEO Keywords',
      role: 'Content Creation',
      description: 'Generates ranking-focused blog headlines and primary keywords.',
      icon: FileText,
      color: '#00A3C4',
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66645?w=800&q=80'
    },
    {
      id: 'content-calendar',
      name: '30-Day Content Calendar',
      role: 'Content Creation',
      description: 'Builds a full month of scheduled posts to maintain consistent online presence.',
      icon: Calendar,
      color: '#00A3C4',
      image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800&q=80'
    },
    {
      id: 'video-script',
      name: 'YouTube & TikTok Script Generator',
      role: 'Content Creation',
      description: 'Drafts high-retention video scripts with hooks and calls to action.',
      icon: Video,
      color: '#00A3C4',
      image: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&q=80'
    },
    // Business Operations & Sales
    {
      id: 'email-reply',
      name: 'Email Reply Assistant',
      role: 'Business Operations',
      description: 'Drafts professional, context-aware responses to save time in the inbox.',
      icon: Mail,
      color: '#2B6CB0',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80'
    },
    {
      id: 'product-desc',
      name: 'Product Description Generator',
      role: 'Business Operations',
      description: 'Writes persuasive, conversion-optimized copy for e-commerce listings.',
      icon: ShoppingBag,
      color: '#2B6CB0',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80'
    },
    {
      id: 'real-estate',
      name: 'Real Estate Listing Generator',
      role: 'Business Operations',
      description: 'Transforms property specs into compelling, high-end real estate ads.',
      icon: Home,
      color: '#2B6CB0',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80'
    },
    {
      id: 'market-research',
      name: 'Market Research Generator',
      role: 'Business Operations',
      description: 'Provides quick summaries of industry trends, competitors, and target audiences.',
      icon: BarChart3,
      color: '#2B6CB0',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80'
    },
    {
      id: 'cv-strategy',
      name: 'AI CV Strategy Agent',
      role: 'Business Operations',
      description: 'Optimizes resumes and professional profiles for ATS and recruiter impact.',
      icon: FileText,
      color: '#2B6CB0',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&q=80'
    },
    {
      id: 'sales-strategist',
      name: 'Sales Strategist',
      role: 'Business Operations',
      description: 'Analyzes leads and suggests tactics to close deals and increase revenue.',
      icon: Target,
      color: '#2B6CB0',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80'
    },
    {
      id: 'ecommerce',
      name: 'Ecommerce Specialist',
      role: 'Business Operations',
      description: 'Optimizes store layouts, pricing strategies, and product positioning.',
      icon: ShoppingBag,
      color: '#2B6CB0',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80'
    },
    // Specialized AI Agents
    {
      id: 'image-video',
      name: 'AI Image & Video Generator',
      role: 'AI Agent',
      description: 'Transforms text prompts into high-fidelity visuals and cinematic video clips.',
      icon: Video,
      color: '#00A3C4',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80'
    },
    {
      id: 'virtual-assistant',
      name: 'Virtual Assistant',
      role: 'AI Agent',
      description: 'Manages scheduling, task reminders, and administrative coordination.',
      icon: Bot,
      color: '#00A3C4',
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&q=80'
    },
    {
      id: 'seo-specialist',
      name: 'SEO Specialist',
      role: 'AI Agent',
      description: 'Audits websites and provides actionable technical and on-page optimization steps.',
      icon: Globe,
      color: '#00A3C4',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80'
    },
    {
      id: 'growth-coach',
      name: 'Personal Growth Coach',
      role: 'AI Agent',
      description: 'Offers structured advice on productivity, mindset, and goal achievement.',
      icon: Trophy,
      color: '#00A3C4',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80'
    },
    {
      id: 'email-marketer',
      name: 'Email Marketer',
      role: 'AI Agent',
      description: 'Designs automated sequences and newsletters to nurture customer leads.',
      icon: Mail,
      color: '#00A3C4',
      image: 'https://images.unsplash.com/photo-1572947749144-646938995a6e?w=800&q=80'
    },
    {
      id: 'copywriter',
      name: 'Copywriter',
      role: 'AI Agent',
      description: 'Produces high-level landing page copy and long-form marketing materials.',
      icon: FileText,
      color: '#00A3C4',
      image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&q=80'
    },
    {
      id: 'social-media-mgr',
      name: 'Social Media Manager',
      role: 'AI Agent',
      description: 'Oversees platform-specific growth strategies and audience engagement.',
      icon: MessageSquare,
      color: '#00A3C4',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80'
    },
    {
      id: 'customer-support',
      name: 'Customer Support Assistant',
      role: 'AI Agent',
      description: 'Provides 24/7 automated responses to common user inquiries.',
      icon: Users,
      color: '#00A3C4',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80'
    },
    {
      id: 'data-analyst',
      name: 'Data Analyst',
      role: 'AI Agent',
      description: 'Processes raw data into clear insights and visual reports for decision-making.',
      icon: BarChart3,
      color: '#00A3C4',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80'
    },
    {
      id: 'recruiter',
      name: 'Recruiter',
      role: 'AI Agent',
      description: 'Screens candidates and suggests top talent based on job descriptions.',
      icon: Users,
      color: '#00A3C4',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80'
    },
    {
      id: 'business-strategist',
      name: 'Business Strategist',
      role: 'AI Agent',
      description: 'Develops long-term roadmaps and operational frameworks for startups.',
      icon: Rocket,
      color: '#00A3C4',
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80'
    },
    // Platform & Workflow Services
    {
      id: 'live-chat',
      name: 'Live AI Chat',
      role: 'Platform Service',
      description: 'A real-time conversational assistant for everyday messaging and tasks.',
      icon: MessageSquare,
      color: '#2B6CB0',
      image: 'https://images.unsplash.com/photo-1611606063065-ee7946d07c9e?w=800&q=80'
    },
    {
      id: 'gmail-connector',
      name: 'Gmail Connector',
      role: 'Platform Service',
      description: 'Integrates AI directly into your email workflow to read and organize threads.',
      icon: Mail,
      color: '#2B6CB0',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80'
    },
    {
      id: 'credit-manager',
      name: 'Smart Credit Manager',
      role: 'Platform Service',
      description: 'Tracks and optimizes AI usage across the marketplace tools.',
      icon: Zap,
      color: '#2B6CB0',
      image: 'https://images.unsplash.com/photo-1550439062-609e1531270e?w=800&q=80'
    },
    {
      id: 'dashboard',
      name: 'Business Dashboard',
      role: 'Platform Service',
      description: 'A centralized command center for monitoring sessions and time saved.',
      icon: BarChart3,
      color: '#2B6CB0',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80'
    },
    {
      id: 'profile-system',
      name: 'Business Profile System',
      role: 'Platform Service',
      description: 'Stores your brand voice to ensure personalized outputs across all tools.',
      icon: Users,
      color: '#2B6CB0',
      image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=800&q=80'
    },
    {
      id: 'report-exporter',
      name: 'Report Exporter',
      role: 'Platform Service',
      description: 'Converts AI-generated data into professional CSV, JSON, or PDF formats.',
      icon: Download,
      color: '#2B6CB0',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80'
    },
    {
      id: 'workflow-automation',
      name: 'Recurring Workflow Automation',
      role: 'Platform Service',
      description: 'Sets up "set-and-forget" AI tasks for repetitive business cycles.',
      icon: Zap,
      color: '#2B6CB0',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80'
    },
    {
      id: 'priority-support',
      name: 'Priority Support',
      role: 'Platform Service',
      description: 'Dedicated technical assistance for high-tier business users.',
      icon: Shield,
      color: '#2B6CB0',
      image: 'https://images.unsplash.com/photo-1573497019940-100cda0ef9a8?w=800&q=80'
    },
    {
      id: 'advanced-analytics',
      name: 'Advanced Analytics',
      role: 'Platform Service',
      description: 'Provides deep-dive metrics on team productivity and tool ROI.',
      icon: BarChart3,
      color: '#2B6CB0',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80'
    },
    {
      id: 'security-portal',
      name: 'Security & Payment Portal',
      role: 'Platform Service',
      description: 'Secure Stripe-based handling for subscription and credit management.',
      icon: Shield,
      color: '#2B6CB0',
      image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&q=80'
    },
    {
      id: 'discovery-engine',
      name: 'Discovery Engine',
      role: 'Platform Service',
      description: 'Smart search and filter system to find the perfect AI agent for any task.',
      icon: Globe,
      color: '#2B6CB0',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80'
    },
    {
      id: 'growth-planner',
      name: 'Growth Planner',
      role: 'Platform Service',
      description: 'Uses AI to suggest which platform tools will help you scale next.',
      icon: Rocket,
      color: '#2B6CB0',
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80'
    },
    {
      id: 'execution-layer',
      name: 'Standardized Execution Layer',
      role: 'Platform Service',
      description: 'Ensures all AI tools output data in a consistent, usable format.',
      icon: Cpu,
      color: '#2B6CB0',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80'
    },
    {
      id: 'strategic-advisor',
      name: 'Strategic Advisor',
      role: 'Platform Service',
      description: 'A high-level agent that audits your AI usage to improve business outcomes.',
      icon: Trophy,
      color: '#2B6CB0',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80'
    }
  ];

  // Professional High-Tech Enterprise - White Background Theme
  const theme = {
    primary: '#00A3C4',      // Cyber Teal
    secondary: '#2B6CB0',    // Electric Azure
    background: '#FFFFFF',     // White
    card: '#F8FAFC',           // Light Gray
    dark: '#060B10',           // Deep Space Blue
    muted: '#475569',          // Darker slate for better readability
    gold: '#D97706',           // Amber Gold for premium
    glass: 'rgba(255, 255, 255, 0.9)', // Increased opacity for better readability
    border: 'rgba(0, 163, 196, 0.15)', // Slightly stronger border
    glow: 'rgba(0, 163, 196, 0.15)'
  };


  const stats = [
    { value: '5,000+', label: 'Users', icon: Users },
    { value: '23+', label: 'AI Tools', icon: Cpu },
    { value: '50+', label: 'Agents', icon: Bot },
    { value: '99.9%', label: 'Uptime', icon: Globe }
  ];

  return (
    <div className="min-h-screen selection:bg-cyan-500/30 font-sans" style={{ backgroundColor: theme.background }}>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 z-[60] origin-left"
        style={{ scaleX, backgroundColor: theme.primary }}
      />
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
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden z-10 px-6">
        <div className="max-w-[90vw] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="space-y-6 flex flex-col items-center"
          >
            <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 rounded-full border backdrop-blur-xl text-[9px] sm:text-[10px] font-black uppercase tracking-[0.15em] sm:tracking-[0.2em] text-center flex-wrap justify-center" style={{ backgroundColor: 'rgba(0, 163, 196, 0.1)', borderColor: 'rgba(0, 163, 196, 0.3)', color: '#00A3C4' }}>
              <Sparkles size={14} style={{ color: theme.primary }} />
              <span className="whitespace-nowrap">THE OPERATING LAYER</span>
              <span className="whitespace-nowrap">FOR PRACTICAL AI</span>
            </div>

            <div className="py-4 w-full px-2 sm:px-0">
              <h1 className="text-[8vw] sm:text-[9vw] md:text-[10vw] lg:text-[120px] xl:text-[140px] font-black tracking-tighter leading-[0.9] sm:leading-[0.85] md:leading-[0.82] uppercase flex flex-col items-center" style={{ color: theme.dark }}>
                <span className="text-center break-words w-full">NxtGenAI: The Central</span>
                <span className="flex flex-col sm:flex-row items-center gap-1 sm:gap-4">
                  <span style={{ color: theme.primary, fontStyle: 'italic' }}>Marketplace</span>
                  <span>for</span>
                </span>
                <span>Practical AI</span>
              </h1>
            </div>

            <p className="text-lg md:text-xl max-w-3xl leading-relaxed mx-auto pt-6" style={{ color: theme.muted }}>
              Access 37+ AI tools and agents in one organized ecosystem.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-8 px-4 sm:px-0">
              <button className="px-6 sm:px-10 py-4 sm:py-5 rounded-full text-lg sm:text-xl font-bold transition-all shadow-2xl flex items-center justify-center gap-2 group w-full sm:w-auto" style={{ backgroundColor: theme.primary, color: 'white', boxShadow: `0 10px 20px rgba(0, 163, 196, 0.3)` }}>
                <span className="whitespace-nowrap">Get Started Free</span>
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform flex-shrink-0" />
              </button>
            </div>
          </motion.div>
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

      {/* Employee Slider - AI Agents */}
      <section className="py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-16">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight" style={{ color: theme.dark }}>AI Tools & Agents Marketplace</h2>
              <p className="max-w-md" style={{ color: theme.muted }}>37+ specialized AI tools and agents organized for your business needs.</p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => scrollSlider('left')}
                className="w-12 h-12 rounded-full flex items-center justify-center border backdrop-blur-md transition-all hover:scale-110"
                style={{ backgroundColor: theme.glass, borderColor: theme.border, color: theme.dark }}
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={() => scrollSlider('right')}
                className="w-12 h-12 rounded-full flex items-center justify-center border backdrop-blur-md transition-all hover:scale-110"
                style={{ backgroundColor: theme.glass, borderColor: theme.border, color: theme.dark }}
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          <div
            ref={sliderRef}
            className="flex gap-6 overflow-x-auto pb-12 snap-x snap-mandatory no-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {aiAgents.map((agent, index) => (
              <motion.div
                key={agent.id}
                className="min-w-[85vw] sm:min-w-[calc(50%-24px)] md:min-w-[calc(33.333%-24px)] lg:min-w-[calc(33.333%-24px)] snap-start flex-shrink-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: false }}
                whileHover={{ y: -8 }}
              >
                <div className="relative h-[480px] rounded-[32px] overflow-hidden group border backdrop-blur-[20px] shadow-xl" style={{ backgroundColor: theme.glass, borderColor: theme.border }}>
                  <img 
                    src={agent.image} 
                    alt={agent.name}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/80 z-10"></div>
                  <div className="absolute top-6 left-6 z-20">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center backdrop-blur-md" style={{ backgroundColor: `${agent.color}40`, color: 'white' }}>
                      <agent.icon size={28} />
                    </div>
                  </div>
                  <div className="absolute inset-0 p-6 flex flex-col justify-end z-20">
                    <div className="bg-black/60 backdrop-blur-md rounded-2xl p-5">
                      <div
                        className="inline-block w-fit px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border mb-3"
                        style={{ color: 'white', borderColor: agent.color, backgroundColor: `${agent.color}40` }}
                      >
                        {agent.role}
                      </div>
                      <h3 className="text-xl font-bold mb-3 leading-tight text-white">{agent.name}</h3>
                      <p className="text-sm mb-4 font-medium leading-relaxed text-white/90 line-clamp-3">
                        {agent.description}
                      </p>
                      <button className="w-full py-3 rounded-2xl font-bold transition-all hover:opacity-90" style={{ backgroundColor: theme.primary, color: 'white' }}>
                        Start Session
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WorkspaceSync - Hexagonal Honeycomb Pattern */}
      <section className="py-40 px-6 relative overflow-hidden" style={{ backgroundColor: theme.card }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24 max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: theme.dark }}>Integrated Intelligence Matrix</h2>
            <p className="max-w-md" style={{ color: theme.muted }}>Every tool, agent, and service seamlessly connected in a powerful unified ecosystem.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
            {[
              { icon: Globe, label: 'AI Marketplace', detail: '37+ Tools', color: theme.primary, delay: 0 },
              { icon: BarChart3, label: 'Analytics Hub', detail: 'Real-time', color: theme.secondary, delay: 1 },
              { icon: MessageSquare, label: 'Live AI Chat', detail: 'Gmail', color: theme.primary, delay: 2 },
              { icon: Zap, label: 'Credit Sync', detail: 'Smart usage', color: theme.secondary, delay: 3 },
              { icon: FileText, label: 'Command Center', detail: 'Dashboard', color: theme.primary, delay: 4 },
              { icon: Rocket, label: 'Growth Coach', detail: 'Strategy', color: theme.secondary, delay: 5 },
              { icon: Bot, label: 'Specialized Agents', detail: 'Task-specific', color: theme.primary, delay: 6 },
              { icon: Shield, label: 'Enterprise Security', detail: 'Encrypted', color: theme.secondary, delay: 7 },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: item.delay * 0.1, type: 'spring', stiffness: 200 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div
                  className="aspect-[4/5] rounded-3xl border backdrop-blur-xl p-6 flex flex-col items-center justify-center gap-4 hover:scale-105 transition-all cursor-pointer shadow-lg"
                  style={{ backgroundColor: theme.glass, borderColor: theme.border }}
                >
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 4, delay: item.delay * 0.2 }}
                    className="w-16 h-16 rounded-2xl flex items-center justify-center"
                    style={{ backgroundColor: `${item.color}15`, color: item.color }}
                  >
                    <item.icon size={32} />
                  </motion.div>
                  <div className="text-center">
                    <div className="font-bold text-sm mb-1" style={{ color: theme.dark }}>{item.label}</div>
                    <div className="text-xs" style={{ color: theme.muted }}>{item.detail}</div>
                  </div>
                </div>
                {/* Connection dots */}
                <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full" style={{ backgroundColor: item.color }} />
                <div className="absolute -bottom-2 -left-2 w-3 h-3 rounded-full opacity-50" style={{ backgroundColor: item.color }} />
              </motion.div>
            ))}
          </div>

          {/* Animated connecting lines */}
          <div className="mt-16 relative">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="h-1 w-full rounded-full"
              style={{ background: `linear-gradient(to right, ${theme.primary}, ${theme.secondary})` }}
            />
            <div className="flex justify-between mt-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full animate-pulse" style={{ backgroundColor: theme.primary }} />
                <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: theme.primary, animationDelay: '0.2s' }} />
                <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: theme.primary, animationDelay: '0.4s' }} />
              </div>
              <div className="flex gap-2">
                <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: theme.secondary, animationDelay: '0.6s' }} />
                <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: theme.secondary, animationDelay: '0.8s' }} />
                <div className="w-3 h-3 rounded-full animate-pulse" style={{ backgroundColor: theme.secondary, animationDelay: '1s' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Bento Grid */}
      <section className="py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center" style={{ color: theme.dark }}>Marketplace Ecosystem</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 p-12 rounded-[40px] border relative overflow-hidden group backdrop-blur-[20px]" style={{ backgroundColor: theme.card, borderColor: theme.border }}>
              <div className="relative z-10 space-y-6">
                <Zap className="mb-6" size={40} style={{ color: theme.primary }} />
                <h3 className="text-3xl font-bold" style={{ color: theme.dark }}>Unified AI Marketplace</h3>
                <p className="text-lg max-w-md" style={{ color: theme.muted }}>Discover, access, and deploy 23+ AI tools, agents, and workflows from a single destination. No more jumping between disconnected platforms.</p>
                <div className="flex gap-4 pt-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'rgba(0, 163, 196, 0.1)' }}><BarChart3 size={20} style={{ color: theme.primary }}/></div>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'rgba(0, 163, 196, 0.1)' }}><MessageSquare size={20} style={{ color: theme.primary }}/></div>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'rgba(0, 163, 196, 0.1)' }}><FileText size={20} style={{ color: theme.primary }}/></div>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'rgba(0, 163, 196, 0.1)' }}><Plus size={20} style={{ color: theme.primary }}/></div>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l transition-opacity" style={{ from: `${theme.primary}10`, to: 'transparent', opacity: 0.5, groupHover: { opacity: 1 } }} />
            </div>

            <div className="p-12 rounded-[40px] border space-y-6 flex flex-col justify-between backdrop-blur-[20px]" style={{ backgroundColor: theme.card, borderColor: theme.border }}>
              <BarChart3 size={40} style={{ color: theme.secondary }} />
              <div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: theme.dark }}>Command Center</h3>
                <p style={{ color: theme.muted }}>Track usage, manage credits, and monitor AI sessions in real-time from a centralized dashboard.</p>
              </div>
            </div>

            <div className="p-12 rounded-[40px] border space-y-6 backdrop-blur-[20px]" style={{ backgroundColor: theme.card, borderColor: theme.border }}>
              <Mail size={40} style={{ color: theme.primary }} />
              <h3 className="text-2xl font-bold" style={{ color: theme.dark }}>Live AI Chat</h3>
              <p style={{ color: theme.muted }}>Connect Gmail to read, write, and manage emails with real-time assistant support.</p>
            </div>

            <div className="md:col-span-2 p-12 rounded-[40px] border relative overflow-hidden flex items-center justify-between group backdrop-blur-[20px]" style={{ backgroundColor: theme.card, borderColor: theme.border }}>
              <div className="relative z-10 space-y-6">
                <Rocket size={40} style={{ color: theme.secondary }} />
                <h3 className="text-3xl font-bold" style={{ color: theme.dark }}>Credit-Based Scaling</h3>
                <p className="text-lg max-w-md" style={{ color: theme.muted }}>Smart credit management ensures structured usage and helps you scale your automation horizontally as you grow.</p>
              </div>
              <div className="hidden lg:block">
               <motion.div
                 animate={{ rotate: 360 }}
                 transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                 className="w-48 h-48 rounded-full border border-dashed flex items-center justify-center"
                 style={{ borderColor: `${theme.primary}20` }}
               >
                 <div className="w-32 h-32 rounded-full border border-dashed flex items-center justify-center" style={{ borderColor: `${theme.primary}40` }}>
                    <div className="w-16 h-16 rounded-full blur-xl" style={{ backgroundColor: `${theme.secondary}20` }} />
                 </div>
               </motion.div>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24" style={{ backgroundColor: theme.background }}>
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16" style={{ color: theme.dark }}>Simple Pricing</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="p-8 rounded-2xl border backdrop-blur-[10px]" style={{ backgroundColor: theme.card, borderColor: theme.border }}>
              <h3 className="text-xl font-bold mb-4" style={{ color: theme.dark }}>Starter</h3>
              <p className="text-sm mb-4" style={{ color: theme.muted }}>Perfect for getting started</p>
              <div className="text-4xl font-bold mb-6" style={{ color: theme.primary }}>$29<span className="text-lg font-normal" style={{ color: theme.muted }}>/mo</span></div>
              <p className="text-xs mb-6" style={{ color: theme.muted }}>100 credits/month</p>
              <ul className="space-y-3 mb-8" style={{ color: theme.muted }}>
                <li className="flex items-center gap-2"><ChevronRight size={16} style={{ color: theme.primary }} /> Email support</li>
                <li className="flex items-center gap-2"><ChevronRight size={16} style={{ color: theme.primary }} /> Basic analytics</li>
                <li className="flex items-center gap-2"><ChevronRight size={16} style={{ color: theme.primary }} /> Access to all AI tools</li>
              </ul>
              <button className="w-full py-3 rounded-full font-bold border-2 transition-all hover:opacity-70" style={{ borderColor: theme.primary, color: theme.primary }}>
                Get Started
              </button>
            </div>

            <div className="p-8 rounded-2xl border shadow-2xl transform md:scale-105 backdrop-blur-[10px]" style={{ backgroundColor: theme.dark, borderColor: theme.primary }}>
              <div className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4" style={{ backgroundColor: theme.gold, color: 'white' }}>⭐ Most Popular</div>
              <h3 className="text-xl font-bold mb-4 text-white">Business</h3>
              <p className="text-sm mb-4 text-white/70">For growing businesses</p>
              <div className="text-4xl font-bold mb-6" style={{ color: theme.primary }}>$99<span className="text-lg font-normal text-white/70">/mo</span></div>
              <p className="text-xs mb-6 text-white/70">500 credits/month</p>
              <ul className="space-y-3 mb-8 text-white/80">
                <li className="flex items-center gap-2"><ChevronRight size={16} style={{ color: theme.primary }} /> Priority support</li>
                <li className="flex items-center gap-2"><ChevronRight size={16} style={{ color: theme.primary }} /> Advanced analytics</li>
                <li className="flex items-center gap-2"><ChevronRight size={16} style={{ color: theme.primary }} /> Secured Payment System</li>
                <li className="flex items-center gap-2"><ChevronRight size={16} style={{ color: theme.primary }} /> Access to all AI agents</li>
              </ul>
              <button className="w-full py-3 rounded-full font-bold text-white transition-all hover:opacity-90" style={{ backgroundColor: theme.primary }}>
                Start Business Plan
              </button>
            </div>

            <div className="p-8 rounded-2xl border backdrop-blur-[10px]" style={{ backgroundColor: theme.card, borderColor: theme.border }}>
              <h3 className="text-xl font-bold mb-4" style={{ color: theme.dark }}>Custom</h3>
              <p className="text-sm mb-4" style={{ color: theme.muted }}>Tailored AI systems</p>
              <div className="text-4xl font-bold mb-6" style={{ color: theme.primary }}>Custom</div>
              <p className="text-xs mb-6" style={{ color: theme.muted }}>Tailored proposal after review</p>
              <ul className="space-y-3 mb-8" style={{ color: theme.muted }}>
                <li className="flex items-center gap-2"><ChevronRight size={16} style={{ color: theme.primary }} /> Business onboarding</li>
                <li className="flex items-center gap-2"><ChevronRight size={16} style={{ color: theme.primary }} /> Custom AI system design</li>
                <li className="flex items-center gap-2"><ChevronRight size={16} style={{ color: theme.primary }} /> Dedicated support</li>
                <li className="flex items-center gap-2"><ChevronRight size={16} style={{ color: theme.primary }} /> Custom integrations</li>
              </ul>
              <button className="w-full py-3 rounded-full font-bold border-2 transition-all hover:opacity-70" style={{ borderColor: theme.primary, color: theme.primary }}>
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-40 px-6" style={{ background: `linear-gradient(to bottom, ${theme.background}, ${theme.primary}20)` }}>
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none" style={{ color: theme.dark }}>Ready to scale without the headcount?</h2>
            <p className="text-xl max-w-2xl mx-auto" style={{ color: theme.muted }}>Start with your first AI employee for free. Join the future of work today.</p>
          </motion.div>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-10 py-5 rounded-full text-xl font-bold transition-all shadow-2xl" style={{ backgroundColor: theme.primary, color: 'white', boxShadow: `0 10px 20px rgba(0, 163, 196, 0.4)` }}>
              Get Started Now
            </button>
            <button className="px-10 py-5 rounded-full text-xl font-bold backdrop-blur-md border transition-all" style={{ backgroundColor: 'rgba(0, 163, 196, 0.1)', borderColor: theme.border, color: theme.dark }}>
              Talk to Sales
            </button>
          </div>
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
          
          <p className="text-[10px] uppercase font-bold tracking-[2px]" style={{ color: theme.muted }}>© 2026 NxtGenAI by Flint Sol. All rights reserved.</p>
          
          <Link to="/Portfolio" className="flex items-center gap-2 hover:opacity-70 transition-colors" style={{ color: theme.primary }}>
            <ArrowLeft size={16} /> Back to Portfolio
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default NxtGenAI;
