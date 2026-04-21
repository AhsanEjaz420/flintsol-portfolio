import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Minimize2, AlertCircle } from 'lucide-react';

const CustomerSupportChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [showOptions, setShowOptions] = useState(true);
  const [sessionId] = useState(Date.now().toString());
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  
  // User info states
  const [currentUser, setCurrentUser] = useState(null);
  const [showUserForm, setShowUserForm] = useState(false);
  const [userFormData, setUserFormData] = useState({
    fullName: '',
    email: '',
    phone: ''
  });
  const [userError, setUserError] = useState(null);
  const [isUserLoading, setIsUserLoading] = useState(false);
  
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Check for existing user info on component mount
  useEffect(() => {
    const savedUser = localStorage.getItem('chatbot_user');
    if (savedUser) {
      try {
        const userData = JSON.parse(savedUser);
        setCurrentUser(userData);
      } catch (error) {
        console.error('Error parsing saved user data:', error);
        localStorage.removeItem('chatbot_user');
      }
    }
  }, []);

  // Handle user info submission
  const handleUserSubmit = async (e) => {
    e.preventDefault();
    setUserError(null);
    setIsUserLoading(true);

    try {
      const response = await fetch('http://localhost:5000/api/chat/user-info', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          fullName: userFormData.fullName,
          email: userFormData.email,
          phone: userFormData.phone,
          sessionId
        })
      });

      const data = await response.json();

      if (response.ok) {
        // Save user info locally
        const userInfo = {
          fullName: userFormData.fullName,
          email: userFormData.email,
          phone: userFormData.phone
        };
        localStorage.setItem('chatbot_user', JSON.stringify(userInfo));
        setCurrentUser(userInfo);
        setShowUserForm(false);
        setUserFormData({
          fullName: '',
          email: '',
          phone: ''
        });
        
        // Add welcome message
        setMessages(prev => [...prev, {
          id: Date.now(),
          text: `Welcome, ${userInfo.fullName}! How can I help you today?`,
          sender: 'bot',
          timestamp: new Date()
        }]);
      } else {
        setUserError(data.message || 'Failed to save user information');
      }
    } catch (error) {
      console.error('Error saving user info:', error);
      setUserError('Network error. Please try again.');
    } finally {
      setIsUserLoading(false);
    }
  };

  // Get user initials
  const getUserInitials = (fullName) => {
    return fullName
      .split(' ')
      .map(name => name.charAt(0))
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  // Remove user information
  const handleRemoveUser = () => {
    localStorage.removeItem('chatbot_user');
    setCurrentUser(null);
    setMessages([]);
    setShowOptions(true);
    setShowUserForm(false);
  };

  // Handle opening animation
  const handleOpenChat = () => {
    setIsClosing(false);
    setIsAnimating(true);
    setIsOpen(true);
    // Reset animation state after animation completes (faster)
    setTimeout(() => setIsAnimating(false), 350);
  };

  // Handle closing animation
  const handleCloseChat = () => {
    if (isAnimating) return; // Prevent multiple animations
    setIsClosing(true);
    setIsAnimating(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsMinimized(false);
      setIsAnimating(false);
      setIsClosing(false);
    }, 300);
  };

  // System prompt for OpenAI to ensure relevant responses about Flint Sol
  const systemPrompt = `You are Flint Sol's AI customer support assistant. You ONLY provide information about Flint Sol's services and business. 

FLINT SOL COMPANY INFORMATION:
- Company: Flint Sol
- Services: AI & Automation, MVP & Product Development, Mobile & Web App Development, Blockchain Solutions, UI/UX Design
- Specialties: Technology and software solutions for startups and enterprises
- Pricing: Flexible models, MVP packages starting at $1000, free consultation
- Contact: Website form, consultation calls, project quotes

IMPORTANT RULES:
1. ONLY answer questions related to Flint Sol's services, pricing, location, contact info, or business
2. If asked about anything unrelated to Flint Sol, politely redirect to Flint Sol topics
3. Keep responses professional, helpful, and accurate
4. Use emojis sparingly but appropriately
5. Always encourage engagement with Flint Sol's services
6. If unsure about specific details, suggest contacting the Flint Sol team
7. If the user asks about something not covered in your knowledge base, suggest booking a consultation call
8. ALWAYS use the location information from the scraped website data (which will be provided in the enhanced system prompt)

Example responses for off-topic questions:
- "I'm here to help with Flint Sol's services. Could you tell me about your technology needs?"
- "That's outside my expertise, but I can help you with Flint Sol's AI, development, or blockchain services."
- "I'd be happy to discuss how Flint Sol can help with your project instead."

For questions not in knowledge base:
- "I'd be happy to help you with that! To get detailed information about your specific needs, I recommend booking a consultation call with our team. You can schedule a call through our booking system, and our experts will provide you with personalized assistance."

Respond in a friendly, professional tone that represents Flint Sol's brand.`;

  // Function to call backend chat API
  const callOpenAI = async (userMessage) => {
    try {
      const response = await fetch('http://localhost:5000/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          sessionId,
          userMessage,
          systemPrompt,
          userEmail: currentUser?.email || null,
          userName: currentUser?.fullName || null,
          userPhone: currentUser?.phone || null
        })
      });

      if (!response.ok) {
        throw new Error(`Chat API error: ${response.status}`);
      }

      const data = await response.json();
      return data.botResponse;
    } catch (error) {
      console.error('OpenAI API Error:', error);
      throw error;
    }
  };

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);
    setError(null);
    setIsLoading(true);

    try {
      const aiResponse = await callOpenAI(inputText);
      
      const botResponse = {
        id: Date.now() + 1,
        text: aiResponse,
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
    } catch (error) {
      console.error('Error getting AI response:', error);
      setError('Sorry, I\'m having trouble connecting right now. Please try again or contact Flint Sol directly.');
      
      // Fallback response
      const fallbackResponse = {
        id: Date.now() + 1,
        text: "I'm experiencing technical difficulties. Please contact Flint Sol directly through our website or email for immediate assistance.",
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, fallbackResponse]);
    } finally {
      setIsTyping(false);
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Handle touch events for better mobile experience
  const handleTouchStart = (e) => {
    // Prevent zoom on double tap for mobile
    e.preventDefault();
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-3 right-3 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 lg:bottom-12 lg:right-12 xl:bottom-16 xl:right-16 z-[9999]">
        <button
          onClick={handleOpenChat}
          className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white p-3 sm:p-4 rounded-full shadow-2xl hover:shadow-orange-500/25 transform hover:scale-110 transition-all duration-300 group button-float"
        >
          <MessageCircle size={20} className="sm:w-6 sm:h-6 transform group-hover:scale-110 transition-transform duration-200" />
          <span className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 sm:h-6 sm:w-6 flex items-center justify-center animate-pulse shadow-lg">
            1
          </span>
        </button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 lg:bottom-12 lg:right-12 xl:bottom-16 xl:right-16 z-[9999]">
      <div 
        className={`bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl shadow-2xl border border-orange-500/40 backdrop-blur-md transition-all duration-700 ease-out transform flex flex-col overflow-hidden ${
          isMinimized 
            ? 'h-14 sm:h-16 w-80 sm:w-96' 
            : 'h-[380px] w-[300px] xs:h-[400px] xs:w-[320px] sm:h-[450px] sm:w-[360px] md:h-[500px] md:w-[400px] lg:h-[550px] lg:w-[420px] xl:h-[600px] xl:w-[450px]'
        }`}
        style={{
          animation: isAnimating
            ? (isClosing ? 'fastPopupOut 0.3s cubic-bezier(0.4, 0, 1, 1) forwards' : 'fastPopupIn 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards')
            : 'none'
        }}
        onTouchStart={handleTouchStart}
      >
        {/* Custom keyframe animations */}
        <style jsx>{`
          @keyframes fastPopupIn {
            0% {
              opacity: 0;
              transform: translateY(40px) scale(0.8) rotate(-1deg);
              box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3);
            }
            50% {
              opacity: 0.7;
              transform: translateY(10px) scale(0.95) rotate(-0.5deg);
              box-shadow: 0 20px 30px -10px rgba(255, 107, 53, 0.3);
            }
            80% {
              opacity: 0.95;
              transform: translateY(-2px) scale(1.02) rotate(0.2deg);
              box-shadow: 0 35px 45px -15px rgba(255, 107, 53, 0.4);
            }
            100% {
              opacity: 1;
              transform: translateY(0) scale(1) rotate(0deg);
              box-shadow: 0 40px 60px -20px rgba(255, 107, 53, 0.5);
            }
          }

          @keyframes fastPopupOut {
            0% {
              opacity: 1;
              transform: translateY(0) scale(1) rotate(0deg);
              box-shadow: 0 40px 60px -20px rgba(255, 107, 53, 0.5);
            }
            50% {
              opacity: 0.6;
              transform: translateY(15px) scale(0.9) rotate(0.5deg);
              box-shadow: 0 15px 25px -8px rgba(255, 107, 53, 0.2);
            }
            100% {
              opacity: 0;
              transform: translateY(40px) scale(0.75) rotate(1.5deg);
              box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
            }
          }
          
          @keyframes messageSlideIn {
            0% {
              opacity: 0;
              transform: translateY(20px) scale(0.9) translateX(10px);
            }
            40% {
              opacity: 0.6;
              transform: translateY(8px) scale(0.95) translateX(5px);
            }
            70% {
              opacity: 0.9;
              transform: translateY(-3px) scale(1.02) translateX(2px);
            }
            100% {
              opacity: 1;
              transform: translateY(0) scale(1) translateX(0);
            }
          }
          
          @keyframes headerGlow {
            0%, 100% {
              box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 0 0 rgba(255, 107, 53, 0);
            }
            25% {
              box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 0 15px rgba(255, 107, 53, 0.3);
            }
            50% {
              box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 0 25px rgba(255, 107, 53, 0.5);
            }
            75% {
              box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 0 15px rgba(255, 107, 53, 0.3);
            }
          }
          
          @keyframes buttonFloat {
            0%, 100% {
              transform: translateY(0) rotate(0deg);
            }
            25% {
              transform: translateY(-3px) rotate(1deg);
            }
            50% {
              transform: translateY(-5px) rotate(0deg);
            }
            75% {
              transform: translateY(-3px) rotate(-1deg);
            }
          }
          
          @keyframes typingIndicator {
            0%, 100% {
              transform: scale(1);
              opacity: 0.7;
            }
            50% {
              transform: scale(1.2);
              opacity: 1;
            }
          }
          
          @keyframes inputFocus {
            0% {
              box-shadow: 0 0 0 0 rgba(255, 107, 53, 0);
            }
            50% {
              box-shadow: 0 0 0 4px rgba(255, 107, 53, 0.3);
            }
            100% {
              box-shadow: 0 0 0 0 rgba(255, 107, 53, 0);
            }
          }
          
          @keyframes mvpAdFloat {
            0%, 100% {
              transform: translateY(0) scale(1);
            }
            25% {
              transform: translateY(-2px) scale(1.02);
            }
            50% {
              transform: translateY(-4px) scale(1.05);
            }
            75% {
              transform: translateY(-2px) scale(1.02);
            }
          }
          
          @keyframes mvpAdGlow {
            0%, 100% {
              box-shadow: 0 0 20px rgba(16, 185, 129, 0.1);
            }
            50% {
              box-shadow: 0 0 30px rgba(16, 185, 129, 0.3);
            }
          }
          
          .message-enter {
            animation: messageSlideIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }
          
          .header-glow {
            animation: headerGlow 4s ease-in-out infinite;
          }
          
          .button-float {
            animation: buttonFloat 3s ease-in-out infinite;
          }
          
          .typing-dot {
            animation: typingIndicator 1.4s ease-in-out infinite;
          }
          
          .input-focus {
            animation: inputFocus 2s ease-in-out infinite;
          }
          
          .mvp-ad-animation {
            animation: mvpAdFloat 4s ease-in-out infinite, mvpAdGlow 3s ease-in-out infinite;
          }
        `}</style>

        {/* Header */}
        <div className="bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 text-white px-4 py-3 sm:px-5 sm:py-4 rounded-t-3xl flex items-center justify-between header-glow relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 via-red-400/20 to-orange-400/20 animate-pulse"></div>
          <div className="absolute top-0 right-0 w-20 h-20 bg-white/5 rounded-full -translate-y-10 translate-x-10"></div>
          <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/5 rounded-full translate-y-8 -translate-x-8"></div>
          
          <div className="flex items-center space-x-2 sm:space-x-3 relative z-10">
            <div className="bg-white/20 p-2 sm:p-2.5 rounded-full transform transition-all duration-300 hover:scale-110 hover:bg-white/30 shadow-lg">
              <Bot size={18} className="sm:w-6 sm:h-6 transform transition-transform duration-300" />
            </div>
            <div className="transform transition-all duration-300 leading-tight">
              <h3 className="font-bold text-sm sm:text-base">Flint AI</h3>
              <p className="text-xs sm:text-sm opacity-90 flex items-center">
                <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-green-400 rounded-full mr-2 animate-pulse shadow-sm"></span>
                <span className="text-xs sm:text-sm">AI Assistant Online</span>
              </p>
            </div>
          </div>
          
          {/* User Profile Section */}
          {currentUser && (
            <div className="flex items-center space-x-2 sm:space-x-3 group relative">
              <div className="bg-white/20 p-2 sm:p-2.5 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold hover:bg-white/30 transition-all duration-300 cursor-pointer shadow-lg">
                {getUserInitials(currentUser.fullName)}
              </div>
              <div className="hidden sm:block">
                <p className="text-xs sm:text-sm font-semibold">{currentUser.fullName}</p>
                <p className="text-xs opacity-75 truncate max-w-32">{currentUser.email}</p>
              </div>
              {/* Remove User Button */}
              <button
                onClick={handleRemoveUser}
                className="opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-red-500/20 p-1.5 rounded-full hover:scale-110 transform"
                title="Remove user info"
              >
                <X size={14} className="text-red-300 hover:text-red-100" />
              </button>
            </div>
          )}
          
          <div className="flex items-center space-x-1 sm:space-x-2 relative z-10">
            <button
              onClick={() => setIsMinimized(!isMinimized)}
              className="hover:bg-white/20 p-2 sm:p-2.5 rounded-xl transition-all duration-300 hover:scale-110 transform hover:shadow-lg"
              title="Minimize"
            >
              <Minimize2 size={16} className="sm:w-5 sm:h-5" />
            </button>
            <button
              onClick={handleCloseChat}
              className="hover:bg-white/20 p-2 sm:p-2.5 rounded-xl transition-all duration-300 hover:scale-110 transform hover:shadow-lg"
              title="Close"
            >
              <X size={16} className="sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>

        {!isMinimized && (
          <>
            {/* User Info Form */}
            {showUserForm && (
              <div className="p-3 sm:p-4 bg-slate-800/30 border-b border-orange-500/20">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-semibold text-white">
                    Tell us about yourself
                  </h3>
                  <button
                    onClick={() => setShowUserForm(false)}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    <X size={16} />
                  </button>
                </div>
                
                <form onSubmit={handleUserSubmit} className="space-y-3">
                  <div className="relative">
                                         <input
                       type="text"
                       placeholder="Full Name *"
                       value={userFormData.fullName}
                       onChange={(e) => setUserFormData(prev => ({ ...prev, fullName: e.target.value }))}
                       required
                       className="w-full bg-slate-700/30 border border-orange-500/30 rounded-lg px-3 py-2 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500/50"
                     />
                  </div>
                  
                                     <div className="relative">
                     <input
                       type="email"
                       placeholder="Email *"
                       value={userFormData.email}
                       onChange={(e) => setUserFormData(prev => ({ ...prev, email: e.target.value }))}
                       required
                       className="w-full bg-slate-700/30 border border-orange-500/30 rounded-lg px-3 py-2 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500/50"
                     />
                   </div>
                   
                   <div className="relative">
                     <input
                       type="tel"
                       placeholder="Phone Number *"
                       value={userFormData.phone}
                       onChange={(e) => setUserFormData(prev => ({ ...prev, phone: e.target.value }))}
                       required
                       className="w-full bg-slate-700/30 border border-orange-500/30 rounded-lg px-3 py-2 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500/50"
                     />
                   </div>
                  
                  {userError && (
                    <div className="text-red-400 text-xs bg-red-900/30 p-2 rounded border border-red-700/50">
                      {userError}
                    </div>
                  )}
                  
                                     <button
                     type="submit"
                     disabled={isUserLoading}
                     className="w-full bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 hover:from-orange-600 hover:via-red-600 hover:to-orange-700 disabled:opacity-50 disabled:cursor-not-allowed text-white py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105"
                   >
                    {isUserLoading ? (
                      <div className="flex items-center justify-center">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Saving...
                      </div>
                    ) : (
                      'Start Chatting'
                    )}
                  </button>
                </form>
              </div>
            )}

            {/* Messages */}
            <div className="flex-1 min-h-[200px] overflow-y-auto p-4 sm:p-5 space-y-3 sm:space-y-4 bg-gradient-to-b from-slate-800/40 to-slate-900/60 scrollbar-thin scrollbar-thumb-orange-500/50 scrollbar-track-slate-800">
              {!currentUser && !showUserForm && (
                <div className="flex flex-col space-y-2 items-center justify-center mt-4">
                  <div className="text-center mb-4">
                    <h3 className="text-lg font-semibold text-white mb-2">Welcome to Flint Sol</h3>
                    <p className="text-slate-300 text-sm">Please choose how you'd like to proceed:</p>
                  </div>
                  {/* MVP Service Advertisement - Theme Matched */}
                  <div className="w-full max-w-sm mx-auto mt-6 p-5 bg-gradient-to-br from-orange-900/60 via-red-900/40 to-orange-900/60 border border-orange-500/40 rounded-2xl backdrop-blur-lg shadow-2xl shadow-orange-500/20 transform hover:scale-105 transition-all duration-500 hover:shadow-orange-500/30 relative overflow-hidden">
                    {/* Animated background elements */}
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-red-500/10 to-orange-500/10 rounded-2xl animate-pulse"></div>
                    <div className="absolute top-3 right-3 w-3 h-3 bg-orange-400 rounded-full animate-ping"></div>
                    <div className="absolute bottom-3 left-3 w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                    <div className="absolute top-1/2 left-1/2 w-20 h-20 bg-orange-500/5 rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
                    
                    <div className="relative z-10 text-center">
                      {/* Header with icon */}
                      <div className="flex items-center justify-center space-x-3 mb-4">
                        <div className="relative">
                          <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-lg shadow-orange-500/30">
                            <span className="text-2xl">⚡</span>
                          </div>
                          <div className="absolute inset-0 bg-orange-400 rounded-full blur-md animate-ping opacity-30"></div>
                        </div>
                        <div className="text-left">
                          <h3 className="text-orange-300 font-bold text-base bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">MVP Development</h3>
                          <p className="text-orange-200 text-xs">Fast Track Launch</p>
                        </div>
                      </div>
                      
                      {/* Description */}
                      <p className="text-orange-100 text-sm mb-4 font-medium leading-relaxed">Launch your MVP in just 2 weeks with our proven development process!</p>
                      
                      {/* Price section */}
                      <div className="bg-gradient-to-r from-orange-800/50 to-red-800/50 rounded-xl p-3 mb-4 border border-orange-500/30">
                        <div className="flex items-center justify-center space-x-3">
                          <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-lg px-4 py-2 rounded-full font-bold shadow-lg shadow-orange-500/25">$1,000</span>
                          <div className="text-left">
                            <p className="text-orange-300 text-sm font-semibold">Starting Price</p>
                            <p className="text-orange-200 text-xs">Complete MVP Package</p>
                          </div>
                        </div>
                      </div>
                      
                      {/* CTA Button */}
                      <a
                        href="/mvp-services"
                        className="inline-block w-full bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 text-white py-3 px-6 rounded-xl hover:from-orange-600 hover:via-red-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-orange-500/30 text-sm font-bold relative overflow-hidden group"
                      >
                        <span className="relative z-10 flex items-center justify-center space-x-2">
                          <span>Get Started Now</span>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      // Use the correct event type URL based on your Cal.com setup
                      const calUrl = 'https://cal.com/asad-ullah-randhawa/30min';
                      window.open(calUrl, '_blank');
                      setShowOptions(false);
                      setMessages(prev => [...prev, {
                        id: Date.now(),
                        text: "Perfect! I've opened our 30-minute consultation booking page in a new tab. You can select any available time slot that works for you. Feel free to ask me any questions about our services while you're scheduling!",
                        sender: 'bot',
                        timestamp: new Date()
                      }]);
                    }}
                    className="w-full max-w-xs bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 text-white py-3 px-6 rounded-xl hover:from-orange-600 hover:via-red-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-orange-500/30 flex items-center justify-center space-x-2 font-semibold relative overflow-hidden group"
                  >
                    <span className="relative z-10">Book a Call</span>
                    <svg className="w-4 h-4 relative z-10" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19,4H5A2,2,0,0,0,3,6V20a2,2,0,0,0,2,2H19a2,2,0,0,0,2-2V6A2,2,0,0,0,19,4Zm0,16H5V10H19ZM19,8H5V6H19Z"/>
                      <rect x="7" y="12" width="2" height="2"/>
                      <rect x="11" y="12" width="2" height="2"/>
                      <rect x="15" y="12" width="2" height="2"/>
                      <rect x="7" y="16" width="2" height="2"/>
                      <rect x="11" y="16" width="2" height="2"/>
                      <rect x="15" y="16" width="2" height="2"/>
                    </svg>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  </button>
                  <button
                    onClick={() => {
                      setShowUserForm(true);
                    }}
                    className="w-full max-w-xs bg-gradient-to-r from-slate-800/60 to-slate-700/60 border-2 border-orange-500/50 text-orange-300 py-3 px-6 rounded-xl hover:from-slate-700/60 hover:to-slate-600/60 hover:border-orange-400 hover:text-orange-200 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-orange-500/20 backdrop-blur-sm font-semibold relative overflow-hidden group"
                  >
                    <span className="relative z-10">Chat with Support</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  </button>
                </div>
              )}
              
              {currentUser && showOptions && (
                <div className="flex flex-col space-y-2 items-center justify-center mt-4">
                  <button
                    onClick={() => {
                      // Use the correct event type URL based on your Cal.com setup
                      const calUrl = 'https://cal.com/asad-ullah-randhawa/30min';
                      window.open(calUrl, '_blank');
                      setShowOptions(false);
                      setMessages(prev => [...prev, {
                        id: Date.now(),
                        text: "Perfect! I've opened our 30-minute consultation booking page in a new tab. You can select any available time slot that works for you. Feel free to ask me any questions about our services while you're scheduling!",
                        sender: 'bot',
                        timestamp: new Date()
                      }]);
                    }}
                    className="w-full max-w-xs bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 text-white py-3 px-6 rounded-xl hover:from-orange-600 hover:via-red-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-orange-500/30 flex items-center justify-center space-x-2 font-semibold relative overflow-hidden group"
                  >
                    <span className="relative z-10">Book a Call</span>
                    <svg className="w-4 h-4 relative z-10" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19,4H5A2,2,0,0,0,3,6V20a2,2,0,0,0,2,2H19a2,2,0,0,0,2-2V6A2,2,0,0,0,19,4Zm0,16H5V10H19ZM19,8H5V6H19Z"/>
                      <rect x="7" y="12" width="2" height="2"/>
                      <rect x="11" y="12" width="2" height="2"/>
                      <rect x="15" y="12" width="2" height="2"/>
                      <rect x="7" y="16" width="2" height="2"/>
                      <rect x="11" y="16" width="2" height="2"/>
                      <rect x="15" y="16" width="2" height="2"/>
                    </svg>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  </button>
                  <button
                    onClick={() => {
                      setShowOptions(false);
                      setMessages(prev => [...prev, {
                        id: Date.now(),
                        text: "I'm here to help! What would you like to know about our services?",
                        sender: 'bot',
                        timestamp: new Date()
                      }]);
                    }}
                    className="w-full max-w-xs bg-gradient-to-r from-slate-800/60 to-slate-700/60 border-2 border-orange-500/50 text-orange-300 py-3 px-6 rounded-xl hover:from-slate-700/60 hover:to-slate-600/60 hover:border-orange-400 hover:text-orange-200 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-orange-500/20 backdrop-blur-sm font-semibold relative overflow-hidden group"
                  >
                    <span className="relative z-10">Chat with Support</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  </button>
                  
                  {/* MVP Service Advertisement - Redesigned */}
                  <div className="w-full max-w-sm mx-auto mt-6 p-5 bg-gradient-to-br from-emerald-900/60 via-teal-900/40 to-emerald-900/60 border border-emerald-500/40 rounded-2xl backdrop-blur-lg shadow-2xl shadow-emerald-500/20 transform hover:scale-105 transition-all duration-500 hover:shadow-orange-500/30 relative overflow-hidden">
                    {/* Animated background elements */}
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-red-500/10 to-orange-500/10 rounded-2xl animate-pulse"></div>
                    <div className="absolute top-3 right-3 w-3 h-3 bg-orange-400 rounded-full animate-ping"></div>
                    <div className="absolute bottom-3 left-3 w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                    <div className="absolute top-1/2 left-1/2 w-20 h-20 bg-orange-500/5 rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
                    
                    <div className="relative z-10 text-center">
                      {/* Header with icon */}
                      <div className="flex items-center justify-center space-x-3 mb-4">
                        <div className="relative">
                          <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-lg shadow-orange-500/30">
                            <span className="text-2xl">⚡</span>
                          </div>
                          <div className="absolute inset-0 bg-orange-400 rounded-full blur-md animate-ping opacity-30"></div>
                        </div>
                        <div className="text-left">
                          <h3 className="text-orange-300 font-bold text-base bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">MVP Development</h3>
                          <p className="text-orange-200 text-xs">Fast Track Launch</p>
                        </div>
                      </div>
                      
                      {/* Description */}
                      <p className="text-orange-100 text-sm mb-4 font-medium leading-relaxed">Launch your MVP in just 2 weeks with our proven development process!</p>
                      
                      {/* Price section */}
                      <div className="bg-gradient-to-r from-orange-800/50 to-red-800/50 rounded-xl p-3 mb-4 border border-orange-500/30">
                        <div className="flex items-center justify-center space-x-3">
                          <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-lg px-4 py-2 rounded-full font-bold shadow-lg shadow-orange-500/25">$1,000</span>
                          <div className="text-left">
                            <p className="text-orange-300 text-sm font-semibold">Starting Price</p>
                            <p className="text-orange-200 text-xs">Complete MVP Package</p>
                          </div>
                        </div>
                      </div>
                      
                      {/* CTA Button */}
                      <a
                        href="/mvp-services"
                        className="inline-block w-full bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 text-white py-3 px-6 rounded-xl hover:from-orange-600 hover:via-red-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-orange-500/30 text-sm font-bold relative overflow-hidden group"
                      >
                        <span className="relative z-10 flex items-center justify-center space-x-2">
                          <span>Get Started Now</span>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                      </a>
                    </div>
                  </div>
                </div>
              )}
              
              {messages.map((message, index) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} message-enter`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`flex items-start space-x-2 sm:space-x-3 max-w-[90%] sm:max-w-[85%] ${message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    <div className={`flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg ${message.sender === 'user' ? 'bg-gradient-to-r from-orange-500 to-red-600' : 'bg-gradient-to-r from-slate-600 to-slate-700'}`}>
                      {message.sender === 'user' ? <User size={16} className="sm:w-5 sm:h-5 text-white" /> : <Bot size={16} className="sm:w-5 sm:h-5 text-white" />}
                    </div>
                    <div
                      className={`p-3 sm:p-4 rounded-2xl transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 ${
                        message.sender === 'user'
                          ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-br-md shadow-lg shadow-orange-500/25'
                          : 'bg-slate-800/90 text-slate-200 rounded-bl-md shadow-lg border border-slate-700/50 backdrop-blur-sm'
                      }`}
                    >
                      <p className="text-sm sm:text-base whitespace-pre-line leading-relaxed">{message.text}</p>
                      <span className={`text-xs opacity-70 mt-2 block ${message.sender === 'user' ? 'text-orange-100' : 'text-slate-400'}`}>
                        {formatTime(message.timestamp)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start message-enter">
                  <div className="flex items-start space-x-1.5 sm:space-x-2 max-w-[85%] sm:max-w-[80%]">
                    <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center bg-gradient-to-r from-slate-600 to-slate-700">
                      <Bot size={12} className="sm:w-4 sm:h-4 text-white" />
                    </div>
                    <div className="bg-slate-800/80 text-slate-200 p-2 sm:p-3 rounded-2xl rounded-bl-md shadow-sm border border-slate-700/50 backdrop-blur-sm">
                      <div className="flex space-x-1">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-400 rounded-full typing-dot" style={{ animationDelay: '0ms' }}></div>
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-400 rounded-full typing-dot" style={{ animationDelay: '200ms' }}></div>
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-400 rounded-full typing-dot" style={{ animationDelay: '400ms' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Error Message */}
            {error && (
              <div className="mx-3 sm:mx-4 mb-2 p-2 sm:p-3 bg-red-900/50 border border-red-700/50 rounded-lg flex items-center space-x-1.5 sm:space-x-2 backdrop-blur-sm">
                <AlertCircle size={14} className="sm:w-4 sm:h-4 text-red-400 flex-shrink-0" />
                <span className="text-red-300 text-xs sm:text-sm">{error}</span>
              </div>
            )}

            {/* Input - Only show when user info is provided */}
            {currentUser && (
              <div className="p-3 sm:p-4 border-t border-orange-500/20 bg-slate-900/80 rounded-b-2xl backdrop-blur-sm">
                <div className="flex items-center space-x-1.5 sm:space-x-2">
                  <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your message..."
                    disabled={isLoading}
                    className="flex-1 bg-slate-800/50 border border-slate-600/50 rounded-full px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500/50 transition-all duration-300 hover:border-orange-500/30 input-focus disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm"
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={!inputText.trim() || isLoading}
                    className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 disabled:opacity-50 disabled:cursor-not-allowed text-white p-1.5 sm:p-2 rounded-full transition-all duration-200 hover:scale-110 hover:shadow-lg hover:shadow-orange-500/25 transform active:scale-95"
                  >
                    {isLoading ? (
                      <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      <Send size={16} className="sm:w-5 sm:h-5" />
                    )}
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default CustomerSupportChatbot;