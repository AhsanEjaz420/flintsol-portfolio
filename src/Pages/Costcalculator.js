// import React, { useState, useMemo, useEffect } from "react";
// import {
//   ChevronLeft,
//   ChevronRight,
//   X,
//   Phone,
//   Mail,
//   MessageSquare,
//   DollarSign,
//   Clock,
//   Calendar,
//   Zap,
//   Shield,
//   Users,
//   Sparkles,
//   CheckCircle,
//   ArrowRight,
// } from "lucide-react";

// const CostCalculator = () => {
//   const [currentStep, setCurrentStep] = useState(1);
//   const [showModal, setShowModal] = useState(false);
//   const [isTransitioning, setIsTransitioning] = useState(false);
//   const [selectedItems, setSelectedItems] = useState({});
//   const [selections, setSelections] = useState({
//     platform: "",
//     business: "",
//     audience: [],
//     features: [],
//     integration: [],
//     revenue: [],
//     security: "",
//   });

//   const [formData, setFormData] = useState({
//     fullName: "",
//     telephone: "",
//     email: "",
//     message: "",
//   });

//   const steps = [
//     { id: 1, name: "Platform", key: "platform", icon: "📱" },
//     { id: 2, name: "Business", key: "business", icon: "🏢" },
//     { id: 3, name: "Audience", key: "audience", icon: "👥" },
//     { id: 4, name: "Features", key: "features", icon: "⚡" },
//     { id: 5, name: "Integration", key: "integration", icon: "🔗" },
//     { id: 6, name: "Revenue", key: "revenue", icon: "💰" },
//     { id: 7, name: "Security", key: "security", icon: "🔒" },
//   ];

//   const platforms = [
//     {
//       id: "mvp",
//       name: "MVP (Minimum Viable Product)",
//       icon: "🚀",
//       multiplier: 1,
//       gradient: "from-green-500 to-emerald-600",
//       fixedCost: 1000,
//     },
//     {
//       id: "ios",
//       name: "iOS App",
//       icon: "🍎",
//       multiplier: 1.2,
//       gradient: "from-blue-500 to-indigo-600",
//     },
//     {
//       id: "android",
//       name: "Android App",
//       icon: "🤖",
//       multiplier: 1.2,
//       gradient: "from-green-500 to-emerald-600",
//     },
//     {
//       id: "web",
//       name: "Web App",
//       icon: "💻",
//       multiplier: 0.5,
//       gradient: "from-purple-500 to-violet-600",
//     },
//      {
//       id: "crossplatform",
//       name: "IOS & Android",
//       icon: "🍎",
//       multiplier: 1.2,
//       gradient: "from-blue-500 to-indigo-600",
//     },
//   ];

//   const businessTypes = [
//     {
//       id: "shopping",
//       name: "Shopping",
//       icon: "🛍️",
//       hours: 30,
//       gradient: "from-pink-400 to-rose-500",
//     },
//     {
//       id: "finance",
//       name: "Finance",
//       icon: "💰",
//       hours: 60,
//       gradient: "from-green-400 to-emerald-500",
//     },
//     {
//       id: "health",
//       name: "Health",
//       icon: "🏥",
//       hours: 60,
//       gradient: "from-blue-400 to-cyan-500",
//     },
//     {
//       id: "events",
//       name: "Events",
//       icon: "🎪",
//       hours: 30,
//       gradient: "from-purple-400 to-violet-500",
//     },
//     {
//       id: "social",
//       name: "Social Media",
//       icon: "📱",
//       hours: 60,
//       gradient: "from-indigo-400 to-blue-500",
//     },
//     {
//       id: "realestate",
//       name: "Real Estate",
//       icon: "🏠",
//       hours: 30,
//       gradient: "from-orange-400 to-red-500",
//     },
//     {
//       id: "ondemand",
//       name: "On Demand Services",
//       icon: "🔧",
//       hours: 30,
//       gradient: "from-teal-400 to-cyan-500",
//     },
//     {
//       id: "food",
//       name: "Food Delivery",
//       icon: "🍕",
//       hours: 30,
//       gradient: "from-yellow-400 to-orange-500",
//     },
//     {
//       id: "game",
//       name: "Game",
//       icon: "🎮",
//       hours: 60,
//       gradient: "from-purple-500 to-pink-500",
//     },
//     {
//       id: "other",
//       name: "Other",
//       icon: "✈️",
//       hours: 30,
//       gradient: "from-gray-400 to-slate-500",
//     },
//   ];

//   const audienceTypes = [
//     {
//       id: "visitors",
//       name: "Visitors",
//       icon: "👥",
//       hours: 10,
//       gradient: "from-blue-400 to-blue-500",
//     },
//     {
//       id: "moderators",
//       name: "Moderators",
//       icon: "👨‍💼",
//       hours: 10,
//       gradient: "from-green-400 to-green-500",
//     },
//     {
//       id: "registered",
//       name: "Registered Users",
//       icon: "📝",
//       hours: 10,
//       gradient: "from-purple-400 to-purple-500",
//     },
//     {
//       id: "administrators",
//       name: "Administrators",
//       icon: "👨‍💻",
//       hours: 10,
//       gradient: "from-red-400 to-red-500",
//     },
//     {
//       id: "other",
//       name: "Other",
//       icon: "✈️",
//       hours: 10,
//       gradient: "from-gray-400 to-gray-500",
//     },
//   ];

//   const featureTypes = [
//     {
//       id: "budgeting",
//       name: "Budgeting",
//       icon: "📊",
//       hours: 10,
//       gradient: "from-blue-400 to-blue-500",
//     },
//     {
//       id: "billpay",
//       name: "Bill Pay",
//       icon: "💳",
//       hours: 10,
//       gradient: "from-green-400 to-green-500",
//     },
//     {
//       id: "secure",
//       name: "Secure Login",
//       icon: "🔒",
//       hours: 10,
//       gradient: "from-red-400 to-red-500",
//     },
//     {
//       id: "investing",
//       name: "Investing Tools",
//       icon: "📈",
//       hours: 10,
//       gradient: "from-purple-400 to-purple-500",
//     },
//     {
//       id: "cheque",
//       name: "Cheque Deposit",
//       icon: "🏦",
//       hours: 10,
//       gradient: "from-teal-400 to-teal-500",
//     },
//     {
//       id: "transfer",
//       name: "Money Transfer",
//       icon: "💸",
//       hours: 10,
//       gradient: "from-orange-400 to-orange-500",
//     },
//     {
//       id: "transactions",
//       name: "Transactions",
//       icon: "📱",
//       hours: 10,
//       gradient: "from-indigo-400 to-indigo-500",
//     },
//     {
//       id: "credit",
//       name: "Credit Score",
//       icon: "⭐",
//       hours: 10,
//       gradient: "from-yellow-400 to-yellow-500",
//     },
//     {
//       id: "creditscore",
//       name: "Credit Score",
//       icon: "💯",
//       hours: 10,
//       gradient: "from-pink-400 to-pink-500",
//     },
//     {
//       id: "ocr",
//       name: "OCR",
//       icon: "📄",
//       hours: 10,
//       gradient: "from-cyan-400 to-cyan-500",
//     },
//     {
//       id: "approval",
//       name: "Approval",
//       icon: "✅",
//       hours: 10,
//       gradient: "from-emerald-400 to-emerald-500",
//     },
//     {
//       id: "expense",
//       name: "Expense",
//       icon: "📋",
//       hours: 10,
//       gradient: "from-violet-400 to-violet-500",
//     },
//   ];

//   // --- Summary Cards Section (smaller size and text) ---
//   const SummaryCards = () => (
//     <div className="flex flex-col gap-3 md:gap-4 w-full max-w-xs mx-auto mt-4">
//       <div
//         className="rounded-xl p-3 md:p-4 bg-orange-50 border border-orange-200 flex flex-col items-start shadow-sm text-xs md:text-sm"
//         style={{ minWidth: 0 }}
//       >
//         <span className="font-semibold text-[0.85rem] md:text-sm mb-1 text-orange-700 flex items-center gap-1">
//           You Save <span className="text-orange-400">⚡</span>
//         </span>
//         <span className="font-bold text-orange-600 text-xl md:text-2xl">
//           ${calculatedValues.savedMoney.toLocaleString()}
//         </span>
//         <span className="text-[0.7rem] md:text-xs text-orange-500">
//           Compared to market rates
//         </span>
//       </div>
//       <div
//         className="rounded-xl p-3 md:p-4 bg-white border border-green-200 flex flex-col items-start shadow-sm text-xs md:text-sm"
//         style={{ minWidth: 0 }}
//       >
//         <span className="font-semibold text-[0.85rem] md:text-sm mb-1 text-green-700 flex items-center gap-1">
//           Estimated Cost <span className="text-green-400">$</span>
//         </span>
//         <span className="font-bold text-green-600 text-xl md:text-2xl">
//           ${calculatedValues.totalCost.toLocaleString()}
//         </span>
//         <span className="text-[0.7rem] md:text-xs text-green-500">
//           Based on $30/hour
//         </span>
//       </div>
//       <div
//         className="rounded-xl p-3 md:p-4 bg-white border border-blue-200 flex flex-col items-start shadow-sm text-xs md:text-sm"
//         style={{ minWidth: 0 }}
//       >
//         <span className="font-semibold text-[0.85rem] md:text-sm mb-1 text-blue-700 flex items-center gap-1">
//           Development Time <span className="text-blue-400">🕒</span>
//         </span>
//         <span className="font-bold text-blue-600 text-xl md:text-2xl">
//           {calculatedValues.totalHours} hrs
//         </span>
//         <span className="text-[0.7rem] md:text-xs text-blue-500">
//           Total development hours
//         </span>
//       </div>
//       <div
//         className="rounded-xl p-3 md:p-4 bg-white border border-purple-200 flex flex-col items-start shadow-sm text-xs md:text-sm"
//         style={{ minWidth: 0 }}
//       >
//         <span className="font-semibold text-[0.85rem] md:text-sm mb-1 text-purple-700 flex items-center gap-1">
//           Project Timeline <span className="text-purple-400">📅</span>
//         </span>
//         <span className="font-bold text-purple-600 text-xl md:text-2xl">
//           {calculatedValues.timelineWeeks} Weeks
//         </span>
//         <span className="text-[0.7rem] md:text-xs text-purple-500">
//           Estimated completion
//         </span>
//       </div>
//     </div>
//   );
//   const integrationTypes = [
//     {
//       id: "quickbooks",
//       name: "QuickBooks",
//       icon: "QB",
//       hours: 12,
//       gradient: "from-blue-500 to-indigo-600",
//     },
//     {
//       id: "CRM",
//       name: "CRM",
//       icon: "🏦",
//       hours: 12,
//       gradient: "from-green-500 to-emerald-600",
//     },
//     {
//       id: "sap",
//       name: "SAP",
//       icon: "SAP",
//       hours: 20,
//       gradient: "from-purple-500 to-violet-600",
//     },
//      {
//       id: "LLM",
//       name: "LLM",
//       icon: "LLM",
//       hours: 12,
//       gradient: "from-purple-500 to-violet-600",
//     },
//      {
//       id: "Email",
//       name: "Email",
//       icon: "Email",
//       hours: 12,
//       gradient: "from-purple-500 to-violet-600",
//     },
//      {
//       id: "Others",
//       name: "Others",
//       icon: "OT",
//       hours: 12,
//       gradient: "from-blue-500 to-indigo-600",
//     },
//   ];

//   const revenueTypes = [
//     {
//       id: "recurring",
//       name: "Recurring Payments",
//       icon: "🔄",
//       hours: 10,
//       gradient: "from-blue-500 to-indigo-600",
//     },
//     {
//       id: "upfront",
//       name: "Upfront & Custom Fees",
//       icon: "💰",
//       hours: 10,
//       gradient: "from-green-500 to-emerald-600",
//     },
//     {
//       id: "shopping",
//       name: "Shopping Cart System",
//       icon: "🛒",
//       hours: 10,
//       gradient: "from-orange-500 to-red-600",
//     },
//     {
//       id: "other",
//       name: "Other",
//       icon: "✈️",
//       hours: 10,
//       gradient: "from-gray-500 to-slate-600",
//     },
//   ];

//   const securityTypes = [
//     {
//       id: "notimportant",
//       name: "Basic Security",
//       icon: "🛡️",
//       hours: 10,
//       gradient: "from-gray-400 to-gray-500",
//     },
//     {
//       id: "basic",
//       name: "Standard Security",
//       icon: "🔒",
//       hours: 20,
//       gradient: "from-yellow-400 to-orange-500",
//     },
//     {
//       id: "encrypted",
//       name: "Encrypted Communication",
//       icon: "💬",
//       hours: 30,
//       gradient: "from-blue-500 to-indigo-600",
//     },
//     {
//       id: "complete",
//       name: "Complete Protection",
//       icon: "🔐",
//       hours: 40,
//       gradient: "from-red-500 to-pink-600",
//     },
//   ];

//   // Calculate dynamic values with animation
//   const calculatedValues = useMemo(() => {
//     let totalHours = 0;
//     const hourlyRate = 30;

//     // Check if MVP is selected - fixed cost of $1000
//     const platform = platforms.find((p) => p.id === selections.platform);
//     if (platform && platform.id === 'mvp') {
//       return {
//         totalHours: Math.round(1000 / hourlyRate),
//         totalCost: 1000,
//         timelineWeeks: Math.ceil((1000 / hourlyRate) / 40),
//         savedMoney: Math.round(1000 * 0.3),
//       };
//     }

//     const business = businessTypes.find((b) => b.id === selections.business);
//     if (business) totalHours += business.hours;

//     if (platform) totalHours *= platform.multiplier;

//     selections.audience.forEach((audienceId) => {
//       const audience = audienceTypes.find((a) => a.id === audienceId);
//       if (audience) totalHours += audience.hours;
//     });

//     selections.features.forEach((featureId) => {
//       const feature = featureTypes.find((f) => f.id === featureId);
//       if (feature) totalHours += feature.hours;
//     });

//     selections.integration.forEach((integrationId) => {
//       const integration = integrationTypes.find((i) => i.id === integrationId);
//       if (integration) totalHours += integration.hours;
//     });

//     selections.revenue.forEach((revenueId) => {
//       const revenue = revenueTypes.find((r) => r.id === revenueId);
//       if (revenue) totalHours += revenue.hours;
//     });

//     const security = securityTypes.find((s) => s.id === selections.security);
//     if (security) totalHours += security.hours;

//     const totalCost = Math.round(totalHours * hourlyRate);
//     const timelineWeeks = Math.ceil(totalHours / 40);
//     const savedMoney = Math.round(totalCost * 0.3);

//     return {
//       totalHours: Math.round(totalHours),
//       totalCost,
//       timelineWeeks,
//       savedMoney,
//     };
//   }, [selections]);

//   const handleSelection = (key, value, isMultiple = false) => {
//     // Add selection animation
//     setSelectedItems((prev) => ({ ...prev, [`${key}-${value}`]: true }));
//     setTimeout(() => {
//       setSelectedItems((prev) => ({ ...prev, [`${key}-${value}`]: false }));
//     }, 300);

//     if (isMultiple) {
//       setSelections((prev) => ({
//         ...prev,
//         [key]: prev[key].includes(value)
//           ? prev[key].filter((item) => item !== value)
//           : [...prev[key], value],
//       }));
//     } else {
//       setSelections((prev) => ({ ...prev, [key]: value }));
//     }
//   };

//   const nextStep = () => {
//     // If MVP is selected, skip to modal
//     if (selections.platform === 'mvp') {
//       setShowModal(true);
//       return;
//     }

//     if (currentStep < steps.length) {
//       setIsTransitioning(true);
//       setTimeout(() => {
//         setCurrentStep(currentStep + 1);
//         setIsTransitioning(false);
//       }, 300);
//     } else {
//       setShowModal(true);
//     }
//   };

//   const prevStep = () => {
//     if (currentStep > 1) {
//       setIsTransitioning(true);
//       setTimeout(() => {
//         setCurrentStep(currentStep - 1);
//         setIsTransitioning(false);
//       }, 300);
//     }
//   };

//   const handleSubmit = () => {
//     if (!formData.fullName || !formData.telephone || !formData.email) {
//       alert("Please fill in all required fields.");
//       return;
//     }
//     setShowModal(false);
//     alert(
//       "Thank you! We will contact you soon with a detailed cost breakdown."
//     );
//   };

//    const renderStepContent = () => {
//     const step = steps[currentStep - 1];

//     const renderSelectionGrid = (
//       items,
//       key,
//       isMultiple = false,
//       columns = "grid-cols-2 md:grid-cols-5"
//     ) => (
//       <div className={`grid ${columns} gap-4 mt-8`}>
//         {items.map((item, index) => {
//           const isSelected = isMultiple
//             ? selections[key].includes(item.id)
//             : selections[key] === item.id;
//           const isAnimating = selectedItems[`${key}-${item.id}`];

//           return (
//             <button
//               key={item.id}
//               onClick={() => handleSelection(key, item.id, isMultiple)}
//               className={`group relative p-6 rounded-2xl border-2 transition-all duration-500 hover:scale-105 transform shadow-lg overflow-hidden ${
//                 isSelected
//                   ? `bg-gradient-to-br ${
//                       item.gradient || "from-blue-500 to-indigo-600"
//                     } border-transparent text-white shadow-2xl scale-105`
//                   : "bg-white/80 backdrop-blur-sm border-gray-200 text-gray-700 hover:border-blue-300 hover:shadow-xl hover:bg-white"
//               } ${isAnimating ? "animate-pulse scale-110" : ""}`}
//               style={{
//                 animationDelay: `${index * 100}ms`,
//                 animation: `slideInUp 0.6s ease-out ${index * 100}ms both`,
//               }}
//             >
//               {/* Gradient overlay on hover */}
//               <div
//                 className={`absolute inset-0 bg-gradient-to-br ${
//                   item.gradient || "from-blue-500 to-indigo-600"
//                 } opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`}
//               ></div>

//               {/* Selection indicator */}
//               {isSelected && (
//                 <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg animate-bounce">
//                   <CheckCircle className="w-5 h-5 text-green-500" />
//                 </div>
//               )}

//               <div className="relative z-10">
//                 <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
//                   {typeof item.icon === "string" && item.icon.length <= 3 ? (
//                     <span className="font-bold text-[35px]">{item.icon}</span>
//                   ) : (
//                     item.icon
//                   )}
//                 </div>
//                 <div className="text-[16px] font-semibold group-hover:translate-y-1 transition-transform duration-300">
//                   {item.name}
//                 </div>
//               </div>

//               {/* Ripple effect */}
//               <div className="absolute inset-0 rounded-2xl opacity-0 group-active:opacity-30 bg-white transition-opacity duration-150"></div>
//             </button>
//           );
//         })}
//       </div>
//     );

//     switch (step.key) {
//       case "business":
//         return (
//           <div
//             className={`space-y-8 mt-8 transition-all duration-500 ${
//               isTransitioning
//                 ? "opacity-0 translate-x-10"
//                 : "opacity-100 translate-x-0"
//             }`}
//           >
//             <div className="text-center">
//               <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl mb-4 animate-bounce">
//                 <span className="text-2xl">🏢</span>
//               </div>
//               <h2 className="text-3xl font-bold text-gray-800 mb-3">
//                 Choose Your{" "}
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
//                   Business Type
//                 </span>
//               </h2>
//               <p className="text-gray-600">
//                 Select the category that best describes your project
//               </p>
//             </div>
//             {renderSelectionGrid(businessTypes, "business")}
//           </div>
//         );

//       case "platform":
//         return (
//           <div
//             className={`space-y-8 mt-8 transition-all duration-500 ${
//               isTransitioning
//                 ? "opacity-0 translate-x-10"
//                 : "opacity-100 translate-x-0"
//             }`}
//           >
//             <div className="text-center">
//               <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl mb-4 animate-pulse">
//                 <span className="text-2xl">📱</span>
//               </div>
//               <h2 className="text-3xl font-bold text-gray-800 mb-3">
//                 Select Your{" "}
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
//                   Platform
//                 </span>
//               </h2>
//               <p className="text-gray-600">
//                 Which platform do you want to target?
//               </p>
//             </div>
//             {renderSelectionGrid(
//               platforms,
//               "platform",
//               false,
//               "grid-cols-1 md:grid-cols-3"
//             )}
//           </div>
//         );

//       case "audience":
//         return (
//           <div
//             className={`space-y-8 mt-8 transition-all duration-500 ${
//               isTransitioning
//                 ? "opacity-0 translate-x-10"
//                 : "opacity-100 translate-x-0"
//             }`}
//           >
//             <div className="text-center">
//               <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl mb-4 animate-bounce">
//                 <span className="text-2xl">👥</span>
//               </div>
//               <h2 className="text-3xl font-bold text-gray-800 mb-3">
//                 Target{" "}
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
//                   Audience
//                 </span>
//               </h2>
//               <p className="text-gray-600">
//                 Who will be using your application? (Select multiple)
//               </p>
//             </div>
//             {renderSelectionGrid(
//               audienceTypes,
//               "audience",
//               true,
//               "grid-cols-2 md:grid-cols-3"
//             )}
//           </div>
//         );

//       case "features":
//         return (
//           <div
//             className={`space-y-8 mt-8 transition-all duration-500 ${
//               isTransitioning
//                 ? "opacity-0 translate-x-10"
//                 : "opacity-100 translate-x-0"
//             }`}
//           >
//             <div className="text-center">
//               <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl mb-4 animate-pulse">
//                 <span className="text-2xl">⚡</span>
//               </div>
//               <h2 className="text-3xl font-bold text-gray-800 mb-3">
//                 Essential{" "}
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-orange-600">
//                   Features
//                 </span>
//               </h2>
//               <p className="text-gray-600">
//                 Select the features you want to include (Select multiple)
//               </p>
//             </div>
//             {renderSelectionGrid(
//               featureTypes,
//               "features",
//               true,
//               "grid-cols-2 md:grid-cols-4"
//             )}
//           </div>
//         );

//       case "integration":
//         return (
//           <div
//             className={`space-y-8 mt-8 transition-all duration-500 ${
//               isTransitioning
//                 ? "opacity-0 translate-x-10"
//                 : "opacity-100 translate-x-0"
//             }`}
//           >
//             <div className="text-center">
//               <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl mb-4 animate-bounce">
//                 <span className="text-2xl">🔗</span>
//               </div>
//               <h2 className="text-3xl font-bold text-gray-800 mb-3">
//                 Third-party{" "}
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
//                   Integrations
//                 </span>
//               </h2>
//               <p className="text-gray-600">
//                 Connect with external services (Select multiple)
//               </p>
//             </div>
//             {renderSelectionGrid(
//               integrationTypes,
//               "integration",
//               true,
//               "grid-cols-1 md:grid-cols-3"
//             )}
//           </div>
//         );

//       case "revenue":
//         return (
//           <div
//             className={`space-y-8 mt-8 transition-all duration-500 ${
//               isTransitioning
//                 ? "opacity-0 translate-x-10"
//                 : "opacity-100 translate-x-0"
//             }`}
//           >
//             <div className="text-center">
//               <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl mb-4 animate-pulse">
//                 <span className="text-2xl">💰</span>
//               </div>
//               <h2 className="text-3xl font-bold text-gray-800 mb-3">
//                 Revenue{" "}
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
//                   Model
//                 </span>
//               </h2>
//               <p className="text-gray-600">
//                 How will you monetize your app? (Select multiple)
//               </p>
//             </div>
//             {renderSelectionGrid(
//               revenueTypes,
//               "revenue",
//               true,
//               "grid-cols-2 md:grid-cols-2"
//             )}
//           </div>
//         );

//       case "security":
//         return (
//           <div
//             className={`space-y-8 mt-8 transition-all duration-500 ${
//               isTransitioning
//                 ? "opacity-0 translate-x-10"
//                 : "opacity-100 translate-x-0"
//             }`}
//           >
//             <div className="text-center">
//               <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl mb-4 animate-bounce">
//                 <span className="text-2xl">🔒</span>
//               </div>
//               <h2 className="text-3xl font-bold text-gray-800 mb-3">
//                 Security{" "}
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-pink-600">
//                   Level
//                 </span>
//               </h2>
//               <p className="text-gray-600">Choose your security requirements</p>
//             </div>
//             {renderSelectionGrid(
//               securityTypes,
//               "security",
//               false,
//               "grid-cols-2 md:grid-cols-2"
//             )}
//           </div>
//         );

//       default:
//         return null;
//     }
//   };

//   // Add CSS keyframes for animations
//   useEffect(() => {
//     const style = document.createElement("style");
//     style.textContent = `
//       @keyframes slideInUp {
//         from {
//           opacity: 0;
//           transform: translateY(30px);
//         }
//         to {
//           opacity: 1;
//           transform: translateY(0);
//         }
//       }

//       @keyframes countUp {
//         from { opacity: 0; transform: scale(0.5); }
//         to { opacity: 1; transform: scale(1); }
//       }

//       @keyframes fadeInScale {
//         from { opacity: 0; transform: scale(0.9); }
//         to { opacity: 1; transform: scale(1); }
//       }
//     `;
//     document.head.appendChild(style);
//     return () => document.head.removeChild(style);
//   }, []);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
//       {/* Animated background elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
//         <div
//           className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-pink-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse"
//           style={{ animationDelay: "2s" }}
//         ></div>
//       </div>

//       {/* Section Heading */}
//       <div className="max-w-3xl mx-auto pt-16 mt-16 pb-2 text-center relative z-10">
//         {/* <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl mb-6 animate-bounce shadow-2xl">
//           <Sparkles className="w-10 h-10 text-white" />
//         </div> */}
//         <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 mb-4 tracking-tight animate-pulse">
//           Plan Smarter. Estimate Faster.
//         </h1>
//         <p className="text-xl text-gray-600 mb-2">
//           Get your project estimate in minutes with our AI-powered calculator
//         </p>
//       </div>

//       {/* Progress Bar */}
//       <div className="max-w-7xl mx-auto px-6 py-8 relative z-10">
//         <div className="flex items-center justify-between mb-10 bg-white/70 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/30">
//           {steps.map((step, index) => (
//             <React.Fragment key={step.id}>
//               <div className="flex flex-col items-center group">
//                 <div
//                   className={`w-14 h-14 rounded-2xl flex items-center justify-center border-2 transition-all duration-700 text-sm font-bold shadow-lg relative overflow-hidden ${
//                     step.id <= currentStep
//                       ? "bg-gradient-to-br from-blue-500 to-indigo-600 border-blue-400 text-white shadow-blue-200 scale-110"
//                       : "bg-white border-gray-300 text-gray-500 group-hover:scale-105"
//                   }`}
//                 >
//                   {step.id <= currentStep ? (
//                     <CheckCircle className="w-6 h-6 animate-bounce" />
//                   ) : (
//                     <span className="text-lg">{step.icon}</span>
//                   )}
//                   {step.id <= currentStep && (
//                     <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 animate-pulse"></div>
//                   )}
//                 </div>
//                 <span
//                   className={`text-sm mt-3 font-semibold transition-all duration-500 ${
//                     step.id <= currentStep
//                       ? "text-blue-600 scale-105"
//                       : "text-gray-400"
//                   }`}
//                 >
//                   {step.name}
//                 </span>
//               </div>
//               {index < steps.length - 1 && (
//                 <div
//                   className={`flex-1 h-3 mx-4 rounded-full transition-all duration-700 relative overflow-hidden ${
//                     step.id < currentStep
//                       ? "bg-gradient-to-r from-blue-500 to-indigo-600"
//                       : "bg-gray-200"
//                   }`}
//                 >
//                   {step.id < currentStep && (
//                     <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-pulse"></div>
//                   )}
//                 </div>
//               )}
//             </React.Fragment>
//           ))}
//         </div>

//         {/* Main Content */}
//         <div className="flex gap-8">
//           <div className="flex-1">
//             {renderStepContent()}

//             {/* Navigation Buttons */}
//             <div className="flex justify-between mt-12">
//               <button
//                 onClick={prevStep}
//                 disabled={currentStep === 1}
//                 className={`px-8 py-4 rounded-2xl border-2 transition-all duration-300 flex items-center space-x-3 text-sm font-semibold shadow-lg ${
//                   currentStep === 1
//                     ? "bg-gray-100 border-gray-200 text-gray-400 cursor-not-allowed"
//                     : "bg-white border-blue-500 text-blue-600 hover:bg-blue-50 hover:scale-105 transform"
//                 }`}
//               >
//                 <ChevronLeft className="w-5 h-5" />
//                 <span>Previous</span>
//               </button>

//               <button
//                 onClick={nextStep}
//                 className="px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white transition-all duration-300 flex items-center space-x-3 text-sm font-semibold shadow-xl shadow-blue-200 hover:scale-105 transform"
//               >
//                 <span>
//                   {currentStep === steps.length ? "Get Estimate" : "Next"}
//                 </span>
//                 <ChevronRight className="w-5 h-5" />
//               </button>
//             </div>
//           </div>

//           {/* Dynamic Sidebar */}
//           <div className="w-80 space-y-6 mt-[200px]">
//             <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-4 border border-orange-200 shadow-xl hover:scale-105 transition-transform duration-300">
//               <div className="flex items-center justify-between mb-2">
//                 <h3 className="font-semibold text-orange-800">You Save</h3>
//                 <Zap className="w-5 h-5 text-orange-500" />
//               </div>
//               <div className="text-3xl font-bold text-orange-600">
//                 ${calculatedValues.savedMoney.toLocaleString()}
//               </div>
//               <p className="text-sm text-orange-600 mt-1">
//                 Compared to market rates
//               </p>
//             </div>
//             <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-4 border border-white/20 shadow-xl hover:scale-105 transition-transform duration-300">
//               <div className="flex items-center justify-between mb-2">
//                 <h3 className="font-semibold text-gray-700">Estimated Cost</h3>
//                 <DollarSign className="w-5 h-5 text-green-500" />
//               </div>
//               <div className="text-3xl font-bold text-green-600">
//                 ${calculatedValues.totalCost.toLocaleString()}
//               </div>
//               {/* <p className="text-sm text-gray-500 mt-1">Based on $30/hour</p> */}
//             </div>

//             {/* <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-4 border border-white/20 shadow-xl hover:scale-105 transition-transform duration-300">
//               <div className="flex items-center justify-between mb-2">
//                 <h3 className="font-semibold text-gray-700">
//                   Development Time
//                 </h3>
//                 <Clock className="w-5 h-5 text-blue-500" />
//               </div>
//               <div className="text-3xl font-bold text-blue-600">
//                 {calculatedValues.totalHours} hrs
//               </div>
//               <p className="text-sm text-gray-500 mt-1">
//                 Total development hours
//               </p>
//             </div> */}

//             <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-4 border border-white/20 shadow-xl hover:scale-105 transition-transform duration-300">
//               <div className="flex items-center justify-between mb-2">
//                 <h3 className="font-semibold text-gray-700">
//                   Project Timeline
//                 </h3>
//                 <Calendar className="w-5 h-5 text-purple-500" />
//               </div>
//               <div className="text-3xl font-bold text-purple-600">
//                 {calculatedValues.timelineWeeks} Weeks
//               </div>
//               <p className="text-sm text-gray-500 mt-1">Estimated completion</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Modal */}
//       {showModal && (
// <div className="fixed inset-0 bg-gradient-to-br from-black/60 via-black/50 to-purple-900/30 backdrop-blur-xl mt-16 flex items-center justify-center p-4 z-50 animate-in fade-in duration-300">
//     <div className="bg-white/95 backdrop-blur-md rounded-3xl p-6 max-w-5xl w-full max-h-[85vh] overflow-y-auto shadow-2xl border border-white/20 animate-in zoom-in-95 duration-500 slide-in-from-bottom-4">

//       {/* Header with enhanced styling */}
//       <div className="relative flex justify-between items-center mb-6">
//               <div className="space-y-2">
//                 <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 bg-clip-text text-transparent">
//                   Get Your Detailed Quote
//                 </h2>
//                 <p className="text-gray-600 text-sm">
//                   Transform your vision into reality
//                 </p>
//               </div>

//               <button
//                 onClick={() => setShowModal(false)}
//                 className="group relative p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100/50 transition-all duration-300 hover:scale-110 hover:rotate-90"
//               >
//                 <X className="w-6 h-6" />
//                 <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-500/0 to-red-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//               </button>
//             </div>

//             {/* Enhanced Cost Summary with glassmorphism */}
//             <div className="relative bg-gradient-to-br from-blue-50/80 to-indigo-50/80 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-blue-200/50 shadow-lg overflow-hidden">
//               {/* Decorative background elements */}
//               <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-2xl"></div>
//               <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-orange-400/10 to-pink-400/10 rounded-full blur-xl"></div>

//               <div className="relative z-10">
//                 <div className="flex items-center gap-3 mb-6">
//                   <div className="p-2 bg-blue-500/10 rounded-lg">
//                     <svg
//                       className="w-5 h-5 text-blue-600"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
//                       />
//                     </svg>
//                   </div>
//                   <h3 className="text-xl font-bold text-gray-800">
//                     Project Overview
//                   </h3>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                   <div className="group text-center p-4 bg-white/50 rounded-xl border border-white/30 hover:shadow-lg transition-all duration-300 hover:scale-105">
//                     <div className="text-3xl font-black bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
//                       ${calculatedValues.totalCost.toLocaleString()}
//                     </div>
//                     <div className="text-sm font-medium text-blue-700">
//                       Total Investment
//                     </div>
//                     <div className="w-8 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mx-auto mt-2"></div>
//                   </div>

//                   <div className="group text-center p-4 bg-white/50 rounded-xl border border-white/30 hover:shadow-lg transition-all duration-300 hover:scale-105">
//                     <div className="text-3xl font-black bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
//                       {calculatedValues.totalHours}h
//                     </div>
//                     <div className="text-sm font-medium text-purple-700">
//                       Development Time
//                     </div>
//                     <div className="w-8 h-1 bg-gradient-to-r from-purple-500 to-pink-400 rounded-full mx-auto mt-2"></div>
//                   </div>

//                   <div className="group text-center p-4 bg-white/50 rounded-xl border border-white/30 hover:shadow-lg transition-all duration-300 hover:scale-105">
//                     <div className="text-3xl font-black bg-gradient-to-r from-orange-600 to-red-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
//                       {calculatedValues.timelineWeeks}w
//                     </div>
//                     <div className="text-sm font-medium text-orange-700">
//                       Project Timeline
//                     </div>
//                     <div className="w-8 h-1 bg-gradient-to-r from-orange-500 to-red-400 rounded-full mx-auto mt-2"></div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Enhanced Form */}
//             <div className="space-y-8">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 {/* Full Name Field */}
//                 <div className="group">
//                   <label className="block text-sm font-bold text-gray-700 mb-3 transition-colors duration-300 group-focus-within:text-blue-600">
//                     <span className="flex items-center gap-2">
//                       <svg
//                         className="w-4 h-4"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
//                         />
//                       </svg>
//                       Full Name*
//                     </span>
//                   </label>
//                   <div className="relative">
//                     <input
//                       type="text"
//                       value={formData.fullName}
//                       onChange={(e) =>
//                         setFormData((prev) => ({
//                           ...prev,
//                           fullName: e.target.value,
//                         }))
//                       }
//                       placeholder="Enter your full name"
//                       required
//                       className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 bg-gray-50/50 hover:bg-white hover:shadow-md"
//                     />
//                     <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 to-purple-500/0 opacity-0 group-focus-within:opacity-10 transition-opacity duration-300 pointer-events-none"></div>
//                   </div>
//                 </div>

//                 {/* Enhanced Phone Field */}
//                 <div className="group">
//                   <label className="block text-sm font-bold text-gray-700 mb-3 transition-colors duration-300 group-focus-within:text-orange-600">
//                     <span className="flex items-center gap-2">
//                       <svg
//                         className="w-4 h-4"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
//                         />
//                       </svg>
//                       Phone Number*
//                     </span>
//                   </label>
//                   <div className="flex relative">
//                     <select className="px-4 py-4 border-2 border-gray-200 border-r-0 rounded-l-2xl text-gray-900 focus:outline-none focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 transition-all duration-300 bg-gray-50/50 hover:bg-white">
//                       <option>🇵🇰 +92</option>
//                       <option>🇺🇸 +1</option>
//                       <option>🇬🇧 +44</option>
//                       <option>🇦🇪 +971</option>
//                       <option>🇸🇦 +966</option>
//                     </select>
//                     <input
//                       type="tel"
//                       value={formData.telephone}
//                       onChange={(e) =>
//                         setFormData((prev) => ({
//                           ...prev,
//                           telephone: e.target.value,
//                         }))
//                       }
//                       placeholder="Your phone number"
//                       required
//                       className="flex-1 px-4 py-4 border-2 border-l-0 border-gray-200 rounded-r-2xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 transition-all duration-300 bg-gray-50/50 hover:bg-white"
//                     />
//                     <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500/0 to-red-500/0 opacity-0 group-focus-within:opacity-10 transition-opacity duration-300 pointer-events-none"></div>
//                   </div>
//                 </div>
//               </div>

//               {/* Enhanced Email Field */}
//               <div className="group">
//                 <label className="block text-lg font-bold text-gray-700 mb-4 transition-colors duration-300 group-focus-within:text-purple-600">
//                   <span className="flex items-center gap-2">
//                     <svg
//                       className="w-5 h-5"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
//                       />
//                     </svg>
//                     Email Address*
//                   </span>
//                 </label>
//                 <div className="relative">
//                   <input
//                     type="email"
//                     value={formData.email}
//                     onChange={(e) =>
//                       setFormData((prev) => ({
//                         ...prev,
//                         email: e.target.value,
//                       }))
//                     }
//                     placeholder="your.email@example.com"
//                     required
//                     className="w-full px-6 py-5 border-2 border-gray-200 rounded-2xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500 transition-all duration-300 text-lg bg-gray-50/50 hover:bg-white hover:shadow-md"
//                   />
//                   <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/0 to-pink-500/0 opacity-0 group-focus-within:opacity-10 transition-opacity duration-300 pointer-events-none"></div>
//                 </div>
//               </div>

//               {/* Enhanced Message Field */}
//               <div className="group">
//                 <label className="block text-lg font-bold text-gray-700 mb-4 transition-colors duration-300 group-focus-within:text-indigo-600">
//                   <span className="flex items-center gap-2">
//                     <svg
//                       className="w-5 h-5"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
//                       />
//                     </svg>
//                     Project Details
//                   </span>
//                 </label>
//                 <div className="relative">
//                   <textarea
//                     value={formData.message}
//                     onChange={(e) =>
//                       setFormData((prev) => ({
//                         ...prev,
//                         message: e.target.value,
//                       }))
//                     }
//                     placeholder="Tell us about your project vision, requirements, goals, and any specific features you have in mind..."
//                     rows={6}
//                     className="w-full px-6 py-5 border-2 border-gray-200 rounded-2xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 resize-none transition-all duration-300 text-lg bg-gray-50/50 hover:bg-white hover:shadow-md"
//                   />
//                   <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/0 to-blue-500/0 opacity-0 group-focus-within:opacity-10 transition-opacity duration-300 pointer-events-none"></div>
//                 </div>
//               </div>

//               {/* Enhanced Action Buttons */}
//               <div className="flex flex-col sm:flex-row justify-end gap-4 pt-6">
//                 <button
//                   type="button"
//                   onClick={() => setShowModal(false)}
//                   className="group relative px-8 py-4 border-2 border-gray-300 rounded-2xl text-gray-700 hover:bg-gray-50 transition-all duration-300 text-lg font-semibold hover:scale-105 transform hover:border-gray-400 overflow-hidden"
//                 >
//                   <span className="relative z-10">Cancel</span>
//                   <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                 </button>

//                 <button
//                   onClick={handleSubmit}
//                   className="group relative px-12 py-4 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white rounded-2xl hover:from-orange-600 hover:via-red-600 hover:to-pink-600 transition-all duration-300 text-lg font-bold shadow-2xl shadow-orange-500/30 hover:scale-105 transform hover:shadow-3xl hover:shadow-orange-500/40 overflow-hidden"
//                 >
//                   <span className="relative z-10 flex items-center gap-2">
//                     <svg
//                       className="w-5 h-5"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
//                       />
//                     </svg>
//                     Submit & Get Quote
//                   </span>
//                   <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
//                 </button>
//               </div>
//             </div>

//             {/* Trust Indicators */}
//             <div className="mt-8 pt-6 border-t border-gray-200/50">
//               <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
//                 <div className="flex items-center gap-2">
//                   <svg
//                     className="w-4 h-4 text-green-500"
//                     fill="currentColor"
//                     viewBox="0 0 20 20"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                   <span>Secure & Confidential</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <svg
//                     className="w-4 h-4 text-blue-500"
//                     fill="currentColor"
//                     viewBox="0 0 20 20"
//                   >
//                     <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
//                     <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
//                   </svg>
//                   <span>24h Response Time</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <svg
//                     className="w-4 h-4 text-purple-500"
//                     fill="currentColor"
//                     viewBox="0 0 20 20"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0-01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                   <span>No Obligation Quote</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CostCalculator;

// import React, { useState, useMemo, useEffect } from "react";
// import {
//   ChevronLeft,
//   ChevronRight,
//   X,
//   Phone,
//   Mail,
//   MessageSquare,
//   DollarSign,
//   Clock,
//   Calendar,
//   Zap,
//   Shield,
//   Users,
//   Sparkles,
//   CheckCircle,
//   ArrowRight,
// } from "lucide-react";

// const CostCalculator = () => {
//   const [currentStep, setCurrentStep] = useState(1);
//   const [showModal, setShowModal] = useState(false);
//   const [isTransitioning, setIsTransitioning] = useState(false);
//   const [selectedItems, setSelectedItems] = useState({});
//   const [selections, setSelections] = useState({
//     business: "",
//     platform: "",
//     audience: [],
//     features: [],
//     integration: [],
//     revenue: [],
//     security: "",
//   });

//   const [formData, setFormData] = useState({
//     fullName: "",
//     telephone: "",
//     email: "",
//     message: "",
//   });

//   const steps = [
//     { id: 1, name: "Business", key: "business", icon: "🏢" },
//     { id: 2, name: "Platform", key: "platform", icon: "📱" },
//     { id: 3, name: "Audience", key: "audience", icon: "👥" },
//     { id: 4, name: "Features", key: "features", icon: "⚡" },
//     { id: 5, name: "Integration", key: "integration", icon: "🔗" },
//     { id: 6, name: "Revenue", key: "revenue", icon: "💰" },
//     { id: 7, name: "Security", key: "security", icon: "🔒" },
//   ];

//   const businessTypes = [
//     {
//       id: "shopping",
//       name: "Shopping",
//       icon: "🛍️",
//       hours: 30,
//       gradient: "from-pink-400 to-rose-500",
//     },
//     {
//       id: "finance",
//       name: "Finance",
//       icon: "💰",
//       hours: 60,
//       gradient: "from-green-400 to-emerald-500",
//     },
//     {
//       id: "health",
//       name: "Health",
//       icon: "🏥",
//       hours: 60,
//       gradient: "from-blue-400 to-cyan-500",
//     },
//     {
//       id: "events",
//       name: "Events",
//       icon: "🎪",
//       hours: 30,
//       gradient: "from-purple-400 to-violet-500",
//     },
//     {
//       id: "social",
//       name: "Social Media",
//       icon: "📱",
//       hours: 60,
//       gradient: "from-indigo-400 to-blue-500",
//     },
//     {
//       id: "realestate",
//       name: "Real Estate",
//       icon: "🏠",
//       hours: 30,
//       gradient: "from-orange-400 to-red-500",
//     },
//     {
//       id: "ondemand",
//       name: "On Demand Services",
//       icon: "🔧",
//       hours: 30,
//       gradient: "from-teal-400 to-cyan-500",
//     },
//     {
//       id: "food",
//       name: "Food Delivery",
//       icon: "🍕",
//       hours: 30,
//       gradient: "from-yellow-400 to-orange-500",
//     },
//     {
//       id: "game",
//       name: "Game",
//       icon: "🎮",
//       hours: 60,
//       gradient: "from-purple-500 to-pink-500",
//     },
//     {
//       id: "other",
//       name: "Other",
//       icon: "✈️",
//       hours: 30,
//       gradient: "from-gray-400 to-slate-500",
//     },
//   ];

//   const platforms = [
//     {
//       id: "ios",
//       name: "iOS App",
//       icon: "🍎",
//       multiplier: 1.2,
//       gradient: "from-blue-500 to-indigo-600",
//     },
//     {
//       id: "android",
//       name: "Android App",
//       icon: "🤖",
//       multiplier: 1.2,
//       gradient: "from-green-500 to-emerald-600",
//     },
//     {
//       id: "web",
//       name: "Web App",
//       icon: "💻",
//       multiplier: 0.5,
//       gradient: "from-purple-500 to-violet-600",
//     },
//      {
//       id: "crossplatform",
//       name: "IOS & Android",
//       icon: "🍎",
//       multiplier: 1.2,
//       gradient: "from-blue-500 to-indigo-600",
//     },
//   ];

//   const audienceTypes = [
//     {
//       id: "visitors",
//       name: "Visitors",
//       icon: "👥",
//       hours: 10,
//       gradient: "from-blue-400 to-blue-500",
//     },
//     {
//       id: "moderators",
//       name: "Moderators",
//       icon: "👨‍💼",
//       hours: 10,
//       gradient: "from-green-400 to-green-500",
//     },
//     {
//       id: "registered",
//       name: "Registered Users",
//       icon: "📝",
//       hours: 10,
//       gradient: "from-purple-400 to-purple-500",
//     },
//     {
//       id: "administrators",
//       name: "Administrators",
//       icon: "👨‍💻",
//       hours: 10,
//       gradient: "from-red-400 to-red-500",
//     },
//     {
//       id: "other",
//       name: "Other",
//       icon: "✈️",
//       hours: 10,
//       gradient: "from-gray-400 to-gray-500",
//     },
//   ];

//   const featureTypes = [
//     {
//       id: "budgeting",
//       name: "Budgeting",
//       icon: "📊",
//       hours: 10,
//       gradient: "from-blue-400 to-blue-500",
//     },
//     {
//       id: "billpay",
//       name: "Bill Pay",
//       icon: "💳",
//       hours: 10,
//       gradient: "from-green-400 to-green-500",
//     },
//     {
//       id: "secure",
//       name: "Secure Login",
//       icon: "🔒",
//       hours: 10,
//       gradient: "from-red-400 to-red-500",
//     },
//     {
//       id: "investing",
//       name: "Investing Tools",
//       icon: "📈",
//       hours: 10,
//       gradient: "from-purple-400 to-purple-500",
//     },
//     {
//       id: "cheque",
//       name: "Cheque Deposit",
//       icon: "🏦",
//       hours: 10,
//       gradient: "from-teal-400 to-teal-500",
//     },
//     {
//       id: "transfer",
//       name: "Money Transfer",
//       icon: "💸",
//       hours: 10,
//       gradient: "from-orange-400 to-orange-500",
//     },
//     {
//       id: "transactions",
//       name: "Transactions",
//       icon: "📱",
//       hours: 10,
//       gradient: "from-indigo-400 to-indigo-500",
//     },
//     {
//       id: "credit",
//       name: "Credit Score",
//       icon: "⭐",
//       hours: 10,
//       gradient: "from-yellow-400 to-yellow-500",
//     },
//     {
//       id: "creditscore",
//       name: "Credit Score",
//       icon: "💯",
//       hours: 10,
//       gradient: "from-pink-400 to-pink-500",
//     },
//     {
//       id: "ocr",
//       name: "OCR",
//       icon: "📄",
//       hours: 10,
//       gradient: "from-cyan-400 to-cyan-500",
//     },
//     {
//       id: "approval",
//       name: "Approval",
//       icon: "✅",
//       hours: 10,
//       gradient: "from-emerald-400 to-emerald-500",
//     },
//     {
//       id: "expense",
//       name: "Expense",
//       icon: "📋",
//       hours: 10,
//       gradient: "from-violet-400 to-violet-500",
//     },
//   ];

//   // --- Summary Cards Section (smaller size and text) ---
//   const SummaryCards = () => (
//     <div className="flex flex-col gap-3 md:gap-4 w-full max-w-xs mx-auto mt-4">
//       <div
//         className="rounded-xl p-3 md:p-4 bg-orange-50 border border-orange-200 flex flex-col items-start shadow-sm text-xs md:text-sm"
//         style={{ minWidth: 0 }}
//       >
//         <span className="font-semibold text-[0.85rem] md:text-sm mb-1 text-orange-700 flex items-center gap-1">
//           You Save <span className="text-orange-400">⚡</span>
//         </span>
//         <span className="font-bold text-orange-600 text-xl md:text-2xl">
//           ${calculatedValues.savedMoney.toLocaleString()}
//         </span>
//         <span className="text-[0.7rem] md:text-xs text-orange-500">
//           Compared to market rates
//         </span>
//       </div>
//       <div
//         className="rounded-xl p-3 md:p-4 bg-white border border-green-200 flex flex-col items-start shadow-sm text-xs md:text-sm"
//         style={{ minWidth: 0 }}
//       >
//         <span className="font-semibold text-[0.85rem] md:text-sm mb-1 text-green-700 flex items-center gap-1">
//           Estimated Cost <span className="text-green-400">$</span>
//         </span>
//         <span className="font-bold text-green-600 text-xl md:text-2xl">
//           ${calculatedValues.totalCost.toLocaleString()}
//         </span>
//         <span className="text-[0.7rem] md:text-xs text-green-500">
//           Based on $30/hour
//         </span>
//       </div>
//       <div
//         className="rounded-xl p-3 md:p-4 bg-white border border-blue-200 flex flex-col items-start shadow-sm text-xs md:text-sm"
//         style={{ minWidth: 0 }}
//       >
//         <span className="font-semibold text-[0.85rem] md:text-sm mb-1 text-blue-700 flex items-center gap-1">
//           Development Time <span className="text-blue-400">🕒</span>
//         </span>
//         <span className="font-bold text-blue-600 text-xl md:text-2xl">
//           {calculatedValues.totalHours} hrs
//         </span>
//         <span className="text-[0.7rem] md:text-xs text-blue-500">
//           Total development hours
//         </span>
//       </div>
//       <div
//         className="rounded-xl p-3 md:p-4 bg-white border border-purple-200 flex flex-col items-start shadow-sm text-xs md:text-sm"
//         style={{ minWidth: 0 }}
//       >
//         <span className="font-semibold text-[0.85rem] md:text-sm mb-1 text-purple-700 flex items-center gap-1">
//           Project Timeline <span className="text-purple-400">📅</span>
//         </span>
//         <span className="font-bold text-purple-600 text-xl md:text-2xl">
//           {calculatedValues.timelineWeeks} Weeks
//         </span>
//         <span className="text-[0.7rem] md:text-xs text-purple-500">
//           Estimated completion
//         </span>
//       </div>
//     </div>
//   );
//   const integrationTypes = [
//     {
//       id: "quickbooks",
//       name: "QuickBooks",
//       icon: "QB",
//       hours: 12,
//       gradient: "from-blue-500 to-indigo-600",
//     },
//     {
//       id: "CRM",
//       name: "CRM",
//       icon: "🏦",
//       hours: 12,
//       gradient: "from-green-500 to-emerald-600",
//     },
//     {
//       id: "sap",
//       name: "SAP",
//       icon: "SAP",
//       hours: 20,
//       gradient: "from-purple-500 to-violet-600",
//     },
//      {
//       id: "LLM",
//       name: "LLM",
//       icon: "LLM",
//       hours: 12,
//       gradient: "from-purple-500 to-violet-600",
//     },
//      {
//       id: "Email",
//       name: "Email",
//       icon: "Email",
//       hours: 12,
//       gradient: "from-purple-500 to-violet-600",
//     },
//      {
//       id: "Others",
//       name: "Others",
//       icon: "OT",
//       hours: 12,
//       gradient: "from-blue-500 to-indigo-600",
//     },
//   ];

//   const revenueTypes = [
//     {
//       id: "recurring",
//       name: "Recurring Payments",
//       icon: "🔄",
//       hours: 10,
//       gradient: "from-blue-500 to-indigo-600",
//     },
//     {
//       id: "upfront",
//       name: "Upfront & Custom Fees",
//       icon: "💰",
//       hours: 10,
//       gradient: "from-green-500 to-emerald-600",
//     },
//     {
//       id: "shopping",
//       name: "Shopping Cart System",
//       icon: "🛒",
//       hours: 10,
//       gradient: "from-orange-500 to-red-600",
//     },
//     {
//       id: "other",
//       name: "Other",
//       icon: "✈️",
//       hours: 10,
//       gradient: "from-gray-500 to-slate-600",
//     },
//   ];

//   const securityTypes = [
//     {
//       id: "notimportant",
//       name: "Basic Security",
//       icon: "🛡️",
//       hours: 10,
//       gradient: "from-gray-400 to-gray-500",
//     },
//     {
//       id: "basic",
//       name: "Standard Security",
//       icon: "🔒",
//       hours: 20,
//       gradient: "from-yellow-400 to-orange-500",
//     },
//     {
//       id: "encrypted",
//       name: "Encrypted Communication",
//       icon: "💬",
//       hours: 30,
//       gradient: "from-blue-500 to-indigo-600",
//     },
//     {
//       id: "complete",
//       name: "Complete Protection",
//       icon: "🔐",
//       hours: 40,
//       gradient: "from-red-500 to-pink-600",
//     },
//   ];

//   // Calculate dynamic values with animation
//   const calculatedValues = useMemo(() => {
//     let totalHours = 0;
//     const hourlyRate = 30;

//     const business = businessTypes.find((b) => b.id === selections.business);
//     if (business) totalHours += business.hours;

//     const platform = platforms.find((p) => p.id === selections.platform);
//     if (platform) totalHours *= platform.multiplier;

//     selections.audience.forEach((audienceId) => {
//       const audience = audienceTypes.find((a) => a.id === audienceId);
//       if (audience) totalHours += audience.hours;
//     });

//     selections.features.forEach((featureId) => {
//       const feature = featureTypes.find((f) => f.id === featureId);
//       if (feature) totalHours += feature.hours;
//     });

//     selections.integration.forEach((integrationId) => {
//       const integration = integrationTypes.find((i) => i.id === integrationId);
//       if (integration) totalHours += integration.hours;
//     });

//     selections.revenue.forEach((revenueId) => {
//       const revenue = revenueTypes.find((r) => r.id === revenueId);
//       if (revenue) totalHours += revenue.hours;
//     });

//     const security = securityTypes.find((s) => s.id === selections.security);
//     if (security) totalHours += security.hours;

//     const totalCost = Math.round(totalHours * hourlyRate);
//     const timelineWeeks = Math.ceil(totalHours / 40);
//     const savedMoney = Math.round(totalCost * 0.3);

//     return {
//       totalHours: Math.round(totalHours),
//       totalCost,
//       timelineWeeks,
//       savedMoney,
//     };
//   }, [selections]);

//   const handleSelection = (key, value, isMultiple = false) => {
//     // Add selection animation
//     setSelectedItems((prev) => ({ ...prev, [`${key}-${value}`]: true }));
//     setTimeout(() => {
//       setSelectedItems((prev) => ({ ...prev, [`${key}-${value}`]: false }));
//     }, 300);

//     if (isMultiple) {
//       setSelections((prev) => ({
//         ...prev,
//         [key]: prev[key].includes(value)
//           ? prev[key].filter((item) => item !== value)
//           : [...prev[key], value],
//       }));
//     } else {
//       setSelections((prev) => ({ ...prev, [key]: value }));
//     }
//   };

//   const nextStep = () => {
//     if (currentStep < steps.length) {
//       setIsTransitioning(true);
//       setTimeout(() => {
//         setCurrentStep(currentStep + 1);
//         setIsTransitioning(false);
//       }, 300);
//     } else {
//       setShowModal(true);
//     }
//   };

//   const prevStep = () => {
//     if (currentStep > 1) {
//       setIsTransitioning(true);
//       setTimeout(() => {
//         setCurrentStep(currentStep - 1);
//         setIsTransitioning(false);
//       }, 300);
//     }
//   };

//   const handleSubmit = () => {
//     if (!formData.fullName || !formData.telephone || !formData.email) {
//       alert("Please fill in all required fields.");
//       return;
//     }
//     setShowModal(false);
//     alert(
//       "Thank you! We will contact you soon with a detailed cost breakdown."
//     );
//   };

//   const renderStepContent = () => {
//     const step = steps[currentStep - 1];

//     const renderSelectionGrid = (
//       items,
//       key,
//       isMultiple = false,
//       columns = "grid-cols-2 md:grid-cols-5"
//     ) => (
//       <div className={`grid ${columns} gap-4 mt-8`}>
//         {items.map((item, index) => {
//           const isSelected = isMultiple
//             ? selections[key].includes(item.id)
//             : selections[key] === item.id;
//           const isAnimating = selectedItems[`${key}-${item.id}`];

//           return (
//             <button
//               key={item.id}
//               onClick={() => handleSelection(key, item.id, isMultiple)}
//               className={`group relative p-6 rounded-2xl border-2 transition-all duration-500 hover:scale-105 transform shadow-lg overflow-hidden ${
//                 isSelected
//                   ? `bg-gradient-to-br ${
//                       item.gradient || "from-blue-500 to-indigo-600"
//                     } border-transparent text-white shadow-2xl scale-105`
//                   : "bg-white/80 backdrop-blur-sm border-gray-200 text-gray-700 hover:border-blue-300 hover:shadow-xl hover:bg-white"
//               } ${isAnimating ? "animate-pulse scale-110" : ""}`}
//               style={{
//                 animationDelay: `${index * 100}ms`,
//                 animation: `slideInUp 0.6s ease-out ${index * 100}ms both`,
//               }}
//             >
//               {/* Gradient overlay on hover */}
//               <div
//                 className={`absolute inset-0 bg-gradient-to-br ${
//                   item.gradient || "from-blue-500 to-indigo-600"
//                 } opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`}
//               ></div>

//               {/* Selection indicator */}
//               {isSelected && (
//                 <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg animate-bounce">
//                   <CheckCircle className="w-5 h-5 text-green-500" />
//                 </div>
//               )}

//               <div className="relative z-10">
//                 <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
//                   {typeof item.icon === "string" && item.icon.length <= 3 ? (
//                     <span className="font-bold text-[35px]">{item.icon}</span>
//                   ) : (
//                     item.icon
//                   )}
//                 </div>
//                 <div className="text-[16px] font-semibold group-hover:translate-y-1 transition-transform duration-300">
//                   {item.name}
//                 </div>
//               </div>

//               {/* Ripple effect */}
//               <div className="absolute inset-0 rounded-2xl opacity-0 group-active:opacity-30 bg-white transition-opacity duration-150"></div>
//             </button>
//           );
//         })}
//       </div>
//     );

//     switch (step.key) {
//       case "business":
//         return (
//           <div
//             className={`space-y-8 mt-8 transition-all duration-500 ${
//               isTransitioning
//                 ? "opacity-0 translate-x-10"
//                 : "opacity-100 translate-x-0"
//             }`}
//           >
//             <div className="text-center">
//               <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl mb-4 animate-bounce">
//                 <span className="text-2xl">🏢</span>
//               </div>
//               <h2 className="text-3xl font-bold text-gray-800 mb-3">
//                 Choose Your{" "}
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
//                   Business Type
//                 </span>
//               </h2>
//               <p className="text-gray-600">
//                 Select the category that best describes your project
//               </p>
//             </div>
//             {renderSelectionGrid(businessTypes, "business")}
//           </div>
//         );

//       case "platform":
//         return (
//           <div
//             className={`space-y-8 mt-8 transition-all duration-500 ${
//               isTransitioning
//                 ? "opacity-0 translate-x-10"
//                 : "opacity-100 translate-x-0"
//             }`}
//           >
//             <div className="text-center">
//               <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl mb-4 animate-pulse">
//                 <span className="text-2xl">📱</span>
//               </div>
//               <h2 className="text-3xl font-bold text-gray-800 mb-3">
//                 Select Your{" "}
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
//                   Platform
//                 </span>
//               </h2>
//               <p className="text-gray-600">
//                 Which platform do you want to target?
//               </p>
//             </div>
//             {renderSelectionGrid(
//               platforms,
//               "platform",
//               false,
//               "grid-cols-1 md:grid-cols-3"
//             )}
//           </div>
//         );

//       case "audience":
//         return (
//           <div
//             className={`space-y-8 mt-8 transition-all duration-500 ${
//               isTransitioning
//                 ? "opacity-0 translate-x-10"
//                 : "opacity-100 translate-x-0"
//             }`}
//           >
//             <div className="text-center">
//               <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl mb-4 animate-bounce">
//                 <span className="text-2xl">👥</span>
//               </div>
//               <h2 className="text-3xl font-bold text-gray-800 mb-3">
//                 Target{" "}
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
//                   Audience
//                 </span>
//               </h2>
//               <p className="text-gray-600">
//                 Who will be using your application? (Select multiple)
//               </p>
//             </div>
//             {renderSelectionGrid(
//               audienceTypes,
//               "audience",
//               true,
//               "grid-cols-2 md:grid-cols-3"
//             )}
//           </div>
//         );

//       case "features":
//         return (
//           <div
//             className={`space-y-8 mt-8 transition-all duration-500 ${
//               isTransitioning
//                 ? "opacity-0 translate-x-10"
//                 : "opacity-100 translate-x-0"
//             }`}
//           >
//             <div className="text-center">
//               <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl mb-4 animate-pulse">
//                 <span className="text-2xl">⚡</span>
//               </div>
//               <h2 className="text-3xl font-bold text-gray-800 mb-3">
//                 Essential{" "}
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-orange-600">
//                   Features
//                 </span>
//               </h2>
//               <p className="text-gray-600">
//                 Select the features you want to include (Select multiple)
//               </p>
//             </div>
//             {renderSelectionGrid(
//               featureTypes,
//               "features",
//               true,
//               "grid-cols-2 md:grid-cols-4"
//             )}
//           </div>
//         );

//       case "integration":
//         return (
//           <div
//             className={`space-y-8 mt-8 transition-all duration-500 ${
//               isTransitioning
//                 ? "opacity-0 translate-x-10"
//                 : "opacity-100 translate-x-0"
//             }`}
//           >
//             <div className="text-center">
//               <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl mb-4 animate-bounce">
//                 <span className="text-2xl">🔗</span>
//               </div>
//               <h2 className="text-3xl font-bold text-gray-800 mb-3">
//                 Third-party{" "}
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
//                   Integrations
//                 </span>
//               </h2>
//               <p className="text-gray-600">
//                 Connect with external services (Select multiple)
//               </p>
//             </div>
//             {renderSelectionGrid(
//               integrationTypes,
//               "integration",
//               true,
//               "grid-cols-1 md:grid-cols-3"
//             )}
//           </div>
//         );

//       case "revenue":
//         return (
//           <div
//             className={`space-y-8 mt-8 transition-all duration-500 ${
//               isTransitioning
//                 ? "opacity-0 translate-x-10"
//                 : "opacity-100 translate-x-0"
//             }`}
//           >
//             <div className="text-center">
//               <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl mb-4 animate-pulse">
//                 <span className="text-2xl">💰</span>
//               </div>
//               <h2 className="text-3xl font-bold text-gray-800 mb-3">
//                 Revenue{" "}
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
//                   Model
//                 </span>
//               </h2>
//               <p className="text-gray-600">
//                 How will you monetize your app? (Select multiple)
//               </p>
//             </div>
//             {renderSelectionGrid(
//               revenueTypes,
//               "revenue",
//               true,
//               "grid-cols-2 md:grid-cols-2"
//             )}
//           </div>
//         );

//       case "security":
//         return (
//           <div
//             className={`space-y-8 mt-8 transition-all duration-500 ${
//               isTransitioning
//                 ? "opacity-0 translate-x-10"
//                 : "opacity-100 translate-x-0"
//             }`}
//           >
//             <div className="text-center">
//               <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl mb-4 animate-bounce">
//                 <span className="text-2xl">🔒</span>
//               </div>
//               <h2 className="text-3xl font-bold text-gray-800 mb-3">
//                 Security{" "}
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-pink-600">
//                   Level
//                 </span>
//               </h2>
//               <p className="text-gray-600">Choose your security requirements</p>
//             </div>
//             {renderSelectionGrid(
//               securityTypes,
//               "security",
//               false,
//               "grid-cols-2 md:grid-cols-2"
//             )}
//           </div>
//         );

//       default:
//         return null;
//     }
//   };

//   // Add CSS keyframes for animations
//   useEffect(() => {
//     const style = document.createElement("style");
//     style.textContent = `
//       @keyframes slideInUp {
//         from {
//           opacity: 0;
//           transform: translateY(30px);
//         }
//         to {
//           opacity: 1;
//           transform: translateY(0);
//         }
//       }

//       @keyframes countUp {
//         from { opacity: 0; transform: scale(0.5); }
//         to { opacity: 1; transform: scale(1); }
//       }

//       @keyframes fadeInScale {
//         from { opacity: 0; transform: scale(0.9); }
//         to { opacity: 1; transform: scale(1); }
//       }
//     `;
//     document.head.appendChild(style);
//     return () => document.head.removeChild(style);
//   }, []);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
//       {/* Animated background elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
//         <div
//           className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-pink-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse"
//           style={{ animationDelay: "2s" }}
//         ></div>
//       </div>

//       {/* Section Heading */}
//       <div className="max-w-3xl mx-auto pt-16 mt-16 pb-2 text-center relative z-10">
//         {/* <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl mb-6 animate-bounce shadow-2xl">
//           <Sparkles className="w-10 h-10 text-white" />
//         </div> */}
//         <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 mb-4 tracking-tight animate-pulse">
//           Plan Smarter. Estimate Faster.
//         </h1>
//         <p className="text-xl text-gray-600 mb-2">
//           Get your project estimate in minutes with our AI-powered calculator
//         </p>
//       </div>

//       {/* Progress Bar */}
//       <div className="max-w-7xl mx-auto px-6 py-8 relative z-10">
//         <div className="flex items-center justify-between mb-10 bg-white/70 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/30">
//           {steps.map((step, index) => (
//             <React.Fragment key={step.id}>
//               <div className="flex flex-col items-center group">
//                 <div
//                   className={`w-14 h-14 rounded-2xl flex items-center justify-center border-2 transition-all duration-700 text-sm font-bold shadow-lg relative overflow-hidden ${
//                     step.id <= currentStep
//                       ? "bg-gradient-to-br from-blue-500 to-indigo-600 border-blue-400 text-white shadow-blue-200 scale-110"
//                       : "bg-white border-gray-300 text-gray-500 group-hover:scale-105"
//                   }`}
//                 >
//                   {step.id <= currentStep ? (
//                     <CheckCircle className="w-6 h-6 animate-bounce" />
//                   ) : (
//                     <span className="text-lg">{step.icon}</span>
//                   )}
//                   {step.id <= currentStep && (
//                     <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 animate-pulse"></div>
//                   )}
//                 </div>
//                 <span
//                   className={`text-sm mt-3 font-semibold transition-all duration-500 ${
//                     step.id <= currentStep
//                       ? "text-blue-600 scale-105"
//                       : "text-gray-400"
//                   }`}
//                 >
//                   {step.name}
//                 </span>
//               </div>
//               {index < steps.length - 1 && (
//                 <div
//                   className={`flex-1 h-3 mx-4 rounded-full transition-all duration-700 relative overflow-hidden ${
//                     step.id < currentStep
//                       ? "bg-gradient-to-r from-blue-500 to-indigo-600"
//                       : "bg-gray-200"
//                   }`}
//                 >
//                   {step.id < currentStep && (
//                     <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-pulse"></div>
//                   )}
//                 </div>
//               )}
//             </React.Fragment>
//           ))}
//         </div>

//         {/* Main Content */}
//         <div className="flex gap-8">
//           <div className="flex-1">
//             {renderStepContent()}

//             {/* Navigation Buttons */}
//             <div className="flex justify-between mt-12">
//               <button
//                 onClick={prevStep}
//                 disabled={currentStep === 1}
//                 className={`px-8 py-4 rounded-2xl border-2 transition-all duration-300 flex items-center space-x-3 text-sm font-semibold shadow-lg ${
//                   currentStep === 1
//                     ? "bg-gray-100 border-gray-200 text-gray-400 cursor-not-allowed"
//                     : "bg-white border-blue-500 text-blue-600 hover:bg-blue-50 hover:scale-105 transform"
//                 }`}
//               >
//                 <ChevronLeft className="w-5 h-5" />
//                 <span>Previous</span>
//               </button>

//               <button
//                 onClick={nextStep}
//                 className="px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white transition-all duration-300 flex items-center space-x-3 text-sm font-semibold shadow-xl shadow-blue-200 hover:scale-105 transform"
//               >
//                 <span>
//                   {currentStep === steps.length ? "Get Estimate" : "Next"}
//                 </span>
//                 <ChevronRight className="w-5 h-5" />
//               </button>
//             </div>
//           </div>

//           {/* Dynamic Sidebar */}
//           <div className="w-80 space-y-6 mt-[200px]">
//             <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-4 border border-orange-200 shadow-xl hover:scale-105 transition-transform duration-300">
//               <div className="flex items-center justify-between mb-2">
//                 <h3 className="font-semibold text-orange-800">You Save</h3>
//                 <Zap className="w-5 h-5 text-orange-500" />
//               </div>
//               <div className="text-3xl font-bold text-orange-600">
//                 ${calculatedValues.savedMoney.toLocaleString()}
//               </div>
//               <p className="text-sm text-orange-600 mt-1">
//                 Compared to market rates
//               </p>
//             </div>
//             <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-4 border border-white/20 shadow-xl hover:scale-105 transition-transform duration-300">
//               <div className="flex items-center justify-between mb-2">
//                 <h3 className="font-semibold text-gray-700">Estimated Cost</h3>
//                 <DollarSign className="w-5 h-5 text-green-500" />
//               </div>
//               <div className="text-3xl font-bold text-green-600">
//                 ${calculatedValues.totalCost.toLocaleString()}
//               </div>
//               {/* <p className="text-sm text-gray-500 mt-1">Based on $30/hour</p> */}
//             </div>

//             {/* <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-4 border border-white/20 shadow-xl hover:scale-105 transition-transform duration-300">
//               <div className="flex items-center justify-between mb-2">
//                 <h3 className="font-semibold text-gray-700">
//                   Development Time
//                 </h3>
//                 <Clock className="w-5 h-5 text-blue-500" />
//               </div>
//               <div className="text-3xl font-bold text-blue-600">
//                 {calculatedValues.totalHours} hrs
//               </div>
//               <p className="text-sm text-gray-500 mt-1">
//                 Total development hours
//               </p>
//             </div> */}

//             <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-4 border border-white/20 shadow-xl hover:scale-105 transition-transform duration-300">
//               <div className="flex items-center justify-between mb-2">
//                 <h3 className="font-semibold text-gray-700">
//                   Project Timeline
//                 </h3>
//                 <Calendar className="w-5 h-5 text-purple-500" />
//               </div>
//               <div className="text-3xl font-bold text-purple-600">
//                 {calculatedValues.timelineWeeks} Weeks
//               </div>
//               <p className="text-sm text-gray-500 mt-1">Estimated completion</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Modal */}
//       {showModal && (
// <div className="fixed inset-0 bg-gradient-to-br from-black/60 via-black/50 to-purple-900/30 backdrop-blur-xl mt-16 flex items-center justify-center p-4 z-50 animate-in fade-in duration-300">
//     <div className="bg-white/95 backdrop-blur-md rounded-3xl p-6 max-w-5xl w-full max-h-[85vh] overflow-y-auto shadow-2xl border border-white/20 animate-in zoom-in-95 duration-500 slide-in-from-bottom-4">

//       {/* Header with enhanced styling */}
//       <div className="relative flex justify-between items-center mb-6">
//               <div className="space-y-2">
//                 <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 bg-clip-text text-transparent">
//                   Get Your Detailed Quote
//                 </h2>
//                 <p className="text-gray-600 text-sm">
//                   Transform your vision into reality
//                 </p>
//               </div>

//               <button
//                 onClick={() => setShowModal(false)}
//                 className="group relative p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100/50 transition-all duration-300 hover:scale-110 hover:rotate-90"
//               >
//                 <X className="w-6 h-6" />
//                 <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-500/0 to-red-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//               </button>
//             </div>

//             {/* Enhanced Cost Summary with glassmorphism */}
//             <div className="relative bg-gradient-to-br from-blue-50/80 to-indigo-50/80 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-blue-200/50 shadow-lg overflow-hidden">
//               {/* Decorative background elements */}
//               <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-2xl"></div>
//               <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-orange-400/10 to-pink-400/10 rounded-full blur-xl"></div>

//               <div className="relative z-10">
//                 <div className="flex items-center gap-3 mb-6">
//                   <div className="p-2 bg-blue-500/10 rounded-lg">
//                     <svg
//                       className="w-5 h-5 text-blue-600"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
//                       />
//                     </svg>
//                   </div>
//                   <h3 className="text-xl font-bold text-gray-800">
//                     Project Overview
//                   </h3>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                   <div className="group text-center p-4 bg-white/50 rounded-xl border border-white/30 hover:shadow-lg transition-all duration-300 hover:scale-105">
//                     <div className="text-3xl font-black bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
//                       ${calculatedValues.totalCost.toLocaleString()}
//                     </div>
//                     <div className="text-sm font-medium text-blue-700">
//                       Total Investment
//                     </div>
//                     <div className="w-8 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mx-auto mt-2"></div>
//                   </div>

//                   <div className="group text-center p-4 bg-white/50 rounded-xl border border-white/30 hover:shadow-lg transition-all duration-300 hover:scale-105">
//                     <div className="text-3xl font-black bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
//                       {calculatedValues.totalHours}h
//                     </div>
//                     <div className="text-sm font-medium text-purple-700">
//                       Development Time
//                     </div>
//                     <div className="w-8 h-1 bg-gradient-to-r from-purple-500 to-pink-400 rounded-full mx-auto mt-2"></div>
//                   </div>

//                   <div className="group text-center p-4 bg-white/50 rounded-xl border border-white/30 hover:shadow-lg transition-all duration-300 hover:scale-105">
//                     <div className="text-3xl font-black bg-gradient-to-r from-orange-600 to-red-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
//                       {calculatedValues.timelineWeeks}w
//                     </div>
//                     <div className="text-sm font-medium text-orange-700">
//                       Project Timeline
//                     </div>
//                     <div className="w-8 h-1 bg-gradient-to-r from-orange-500 to-red-400 rounded-full mx-auto mt-2"></div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Enhanced Form */}
//             <div className="space-y-8">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 {/* Full Name Field */}
//                 <div className="group">
//                   <label className="block text-sm font-bold text-gray-700 mb-3 transition-colors duration-300 group-focus-within:text-blue-600">
//                     <span className="flex items-center gap-2">
//                       <svg
//                         className="w-4 h-4"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
//                         />
//                       </svg>
//                       Full Name*
//                     </span>
//                   </label>
//                   <div className="relative">
//                     <input
//                       type="text"
//                       value={formData.fullName}
//                       onChange={(e) =>
//                         setFormData((prev) => ({
//                           ...prev,
//                           fullName: e.target.value,
//                         }))
//                       }
//                       placeholder="Enter your full name"
//                       required
//                       className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 bg-gray-50/50 hover:bg-white hover:shadow-md"
//                     />
//                     <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 to-purple-500/0 opacity-0 group-focus-within:opacity-10 transition-opacity duration-300 pointer-events-none"></div>
//                   </div>
//                 </div>

//                 {/* Enhanced Phone Field */}
//                 <div className="group">
//                   <label className="block text-sm font-bold text-gray-700 mb-3 transition-colors duration-300 group-focus-within:text-orange-600">
//                     <span className="flex items-center gap-2">
//                       <svg
//                         className="w-4 h-4"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
//                         />
//                       </svg>
//                       Phone Number*
//                     </span>
//                   </label>
//                   <div className="flex relative">
//                     <select className="px-4 py-4 border-2 border-gray-200 border-r-0 rounded-l-2xl text-gray-900 focus:outline-none focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 transition-all duration-300 bg-gray-50/50 hover:bg-white">
//                       <option>🇵🇰 +92</option>
//                       <option>🇺🇸 +1</option>
//                       <option>🇬🇧 +44</option>
//                       <option>🇦🇪 +971</option>
//                       <option>🇸🇦 +966</option>
//                     </select>
//                     <input
//                       type="tel"
//                       value={formData.telephone}
//                       onChange={(e) =>
//                         setFormData((prev) => ({
//                           ...prev,
//                           telephone: e.target.value,
//                         }))
//                       }
//                       placeholder="Your phone number"
//                       required
//                       className="flex-1 px-4 py-4 border-2 border-l-0 border-gray-200 rounded-r-2xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 transition-all duration-300 bg-gray-50/50 hover:bg-white"
//                     />
//                     <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500/0 to-red-500/0 opacity-0 group-focus-within:opacity-10 transition-opacity duration-300 pointer-events-none"></div>
//                   </div>
//                 </div>
//               </div>

//               {/* Enhanced Email Field */}
//               <div className="group">
//                 <label className="block text-lg font-bold text-gray-700 mb-4 transition-colors duration-300 group-focus-within:text-purple-600">
//                   <span className="flex items-center gap-2">
//                     <svg
//                       className="w-5 h-5"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
//                       />
//                     </svg>
//                     Email Address*
//                   </span>
//                 </label>
//                 <div className="relative">
//                   <input
//                     type="email"
//                     value={formData.email}
//                     onChange={(e) =>
//                       setFormData((prev) => ({
//                         ...prev,
//                         email: e.target.value,
//                       }))
//                     }
//                     placeholder="your.email@example.com"
//                     required
//                     className="w-full px-6 py-5 border-2 border-gray-200 rounded-2xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500 transition-all duration-300 text-lg bg-gray-50/50 hover:bg-white hover:shadow-md"
//                   />
//                   <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/0 to-pink-500/0 opacity-0 group-focus-within:opacity-10 transition-opacity duration-300 pointer-events-none"></div>
//                 </div>
//               </div>

//               {/* Enhanced Message Field */}
//               <div className="group">
//                 <label className="block text-lg font-bold text-gray-700 mb-4 transition-colors duration-300 group-focus-within:text-indigo-600">
//                   <span className="flex items-center gap-2">
//                     <svg
//                       className="w-5 h-5"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
//                       />
//                     </svg>
//                     Project Details
//                   </span>
//                 </label>
//                 <div className="relative">
//                   <textarea
//                     value={formData.message}
//                     onChange={(e) =>
//                       setFormData((prev) => ({
//                         ...prev,
//                         message: e.target.value,
//                       }))
//                     }
//                     placeholder="Tell us about your project vision, requirements, goals, and any specific features you have in mind..."
//                     rows={6}
//                     className="w-full px-6 py-5 border-2 border-gray-200 rounded-2xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 resize-none transition-all duration-300 text-lg bg-gray-50/50 hover:bg-white hover:shadow-md"
//                   />
//                   <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/0 to-blue-500/0 opacity-0 group-focus-within:opacity-10 transition-opacity duration-300 pointer-events-none"></div>
//                 </div>
//               </div>

//               {/* Enhanced Action Buttons */}
//               <div className="flex flex-col sm:flex-row justify-end gap-4 pt-6">
//                 <button
//                   type="button"
//                   onClick={() => setShowModal(false)}
//                   className="group relative px-8 py-4 border-2 border-gray-300 rounded-2xl text-gray-700 hover:bg-gray-50 transition-all duration-300 text-lg font-semibold hover:scale-105 transform hover:border-gray-400 overflow-hidden"
//                 >
//                   <span className="relative z-10">Cancel</span>
//                   <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                 </button>

//                 <button
//                   onClick={handleSubmit}
//                   className="group relative px-12 py-4 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white rounded-2xl hover:from-orange-600 hover:via-red-600 hover:to-pink-600 transition-all duration-300 text-lg font-bold shadow-2xl shadow-orange-500/30 hover:scale-105 transform hover:shadow-3xl hover:shadow-orange-500/40 overflow-hidden"
//                 >
//                   <span className="relative z-10 flex items-center gap-2">
//                     <svg
//                       className="w-5 h-5"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
//                       />
//                     </svg>
//                     Submit & Get Quote
//                   </span>
//                   <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
//                 </button>
//               </div>
//             </div>

//             {/* Trust Indicators */}
//             <div className="mt-8 pt-6 border-t border-gray-200/50">
//               <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
//                 <div className="flex items-center gap-2">
//                   <svg
//                     className="w-4 h-4 text-green-500"
//                     fill="currentColor"
//                     viewBox="0 0 20 20"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                   <span>Secure & Confidential</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <svg
//                     className="w-4 h-4 text-blue-500"
//                     fill="currentColor"
//                     viewBox="0 0 20 20"
//                   >
//                     <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
//                     <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
//                   </svg>
//                   <span>24h Response Time</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <svg
//                     className="w-4 h-4 text-purple-500"
//                     fill="currentColor"
//                     viewBox="0 0 20 20"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0-01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                   <span>No Obligation Quote</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CostCalculator;

import React, { useState, useMemo, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  X,
  MessageSquare,
  DollarSign,
  Clock,
  Calendar,
  Zap,
  Shield,
  Users,
  Sparkles,
  CheckCircle,
  ArrowRight,
  Brain,
  Database,
  BarChart3,
  Lock,
  Workflow,
  TrendingUp,
  Layers,
  Globe,
  Settings,
  Target,
  Cpu,
  Palette,
  Monitor,
  XCircle,
  FileText,
} from "lucide-react";
import { Toaster } from "react-hot-toast";
import { sitekey } from "../constant";
import ReCAPTCHA from "react-google-recaptcha";

const CostCalculator = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [selectedItems, setSelectedItems] = useState({});
  const [selections, setSelections] = useState({
    projectType: "mvp", // Set MVP as default
    industry: "",
    aiFeatures: [],
    uiEnhancements: [],
    integrations: [],
    analytics: [],
    security: "",
    automation: [],
    growth: [],
    // ADD THESE NEW MVP FIELDS:
    mvpIndustry: "",
    mvpFeatures: [],
    mvpUsers: "",
    mvpDeployment: "",
    mvpSupport: "",
  });

  const [formData, setFormData] = useState({
    fullName: "",
    telephone: "",
    email: "",
    message: "",
  });
  const [captchaValue, setCaptchaValue] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    // Reset all states
    const resetForm = () => {
      setFormData({
        fullName: "",
        telephone: "",
        email: "",
        message: "",
      });
      setSelections({
        projectType: "mvp",
        industry: "",
        aiFeatures: [],
        uiEnhancements: [],
        integrations: [],
        analytics: [],
        security: "",
        automation: [],
        growth: [],
        mvpIndustry: "",
        mvpFeatures: [],
        mvpUsers: "",
        mvpDeployment: "",
        mvpSupport: "",
      });
      setCurrentStep(1);
      setShowModal(false);
      setSelectedItems({});
      setCaptchaValue(null);
      setIsLoading(false);
    };
    // eslint-disable-next-line no-unused-vars
    const isSubmitting = isLoading;
    // eslint-disable-next-line no-unused-vars
    const showToast = (msg) => {};
    // eslint-disable-next-line no-unused-vars
    const mvpBreakdown = {};
  };

  // const steps = [
  //   { id: 1, name: "Project Type", key: "projectType", icon: Target },
  //   { id: 2, name: "Industry", key: "industry", icon: Globe },
  //   { id: 3, name: "AI Features", key: "aiFeatures", icon: Brain },
  //   { id: 4, name: "UI/UX", key: "uiEnhancements", icon: Palette },
  //   { id: 5, name: "Integrations", key: "integrations", icon: Layers },
  //   { id: 6, name: "Analytics", key: "analytics", icon: BarChart3 },
  //   { id: 7, name: "Security", key: "security", icon: Shield },
  //   { id: 8, name: "Automation", key: "automation", icon: Workflow },
  //   { id: 9, name: "Growth", key: "growth", icon: TrendingUp }
  // ];
  // REPLACE the existing steps array with this function:
  const getStepsForProjectType = (projectType) => {
    const baseSteps = [
      { id: 1, name: "Project Type", key: "projectType", icon: Target },
    ];

    if (projectType === "mvp") {
      return [
        ...baseSteps,
        { id: 2, name: "Industry", key: "mvpIndustry", icon: Globe },
        { id: 3, name: "Features", key: "mvpFeatures", icon: Brain },
        { id: 4, name: "Users", key: "mvpUsers", icon: Users },
        { id: 5, name: "Deployment", key: "mvpDeployment", icon: Monitor },
        { id: 6, name: "Support", key: "mvpSupport", icon: Shield },
      ];
    } else if (projectType === "custom") {
      return [
        ...baseSteps,
        { id: 2, name: "Industry", key: "industry", icon: Globe },
        { id: 3, name: "AI Features", key: "aiFeatures", icon: Brain },
        { id: 4, name: "UI/UX", key: "uiEnhancements", icon: Palette },
        { id: 5, name: "Integrations", key: "integrations", icon: Layers },
        { id: 6, name: "Analytics", key: "analytics", icon: BarChart3 },
        { id: 7, name: "Security", key: "security", icon: Shield },
        { id: 8, name: "Automation", key: "automation", icon: Workflow },
        { id: 9, name: "Growth", key: "growth", icon: TrendingUp },
      ];
    } else {
      // Default to just the project type step when no selection is made
      return baseSteps;
    }
  };

  const steps = getStepsForProjectType(selections.projectType);
  // Base MVP Package - Flat Rate
  const mvpPackage = {
    id: "mvp",
    name: "Base MVP Package",
    description:
      "Perfect starting point - Get your AI solution live in 2 weeks",
    features: [
      "AI Logic Core (GPT-powered)",
      "Basic UI Interface",
      "User Authentication",
      "Database Connection",
      "Deployment & Hosting",
      "Mobile Responsiveness",
      "Basic Admin Alerts",
    ],
    price: 1000,
    timeline: 2, // weeks
    gradient: "from-blue-500 to-indigo-600",
  };

  const projectTypes = [
    {
      id: "mvp",
      name: "MVP Package",
      description: "Complete starter solution ready in 2 weeks",
      icon: Zap,
      isFlat: true,
      price: 1000,
      timeline: 2,
      gradient: "from-emerald-500 to-teal-600",
      features: mvpPackage.features,
    },
    {
      id: "custom",
      name: "Custom Solution",
      description: "Tailored AI solution with advanced features",
      icon: Settings,
      isFlat: false,
      baseHours: 0,
      gradient: "from-purple-500 to-indigo-600",
    },
  ];
  const mvpIndustries = [
    {
      id: "general",
      name: "General Business",
      icon: Globe,
      modifier: 0,
      gradient: "from-blue-500 to-cyan-600",
      description: "Standard business applications and tools",
      benefits: ["Universal compatibility", "Scalable architecture", "Easy customization"],
    },
    {
      id: "restaurant",
      name: "Restaurant",
      icon: MessageSquare,
      modifier: 200,
      gradient: "from-orange-500 to-red-600",
      description: "Food service management and customer engagement",
      benefits: ["Menu management system", "Order tracking", "Table reservations", "Inventory control"],
    },
    {
      id: "real-estate",
      name: "Real Estate",
      icon: Target,
      modifier: 250,
      gradient: "from-green-500 to-emerald-600",
      description: "Property management and client relationship tools",
      benefits: ["Property listings", "Virtual tours", "Lead management", "Document handling"],
    },
    {
      id: "healthcare",
      name: "Healthcare",
      icon: Shield,
      modifier: 300,
      gradient: "from-red-500 to-pink-600",
      description: "Medical practice management and patient care",
      benefits: ["HIPAA compliance", "Patient management", "Appointment scheduling", "Medical records"],
    },
    {
      id: "ecommerce",
      name: "E-commerce",
      icon: TrendingUp,
      modifier: 150,
      gradient: "from-orange-500 to-red-600",
      description: "Online retail and marketplace solutions",
      benefits: ["Product catalog", "Payment processing", "Order management", "Analytics dashboard"],
    },
    {
      id: "education",
      name: "Education",
      icon: Users,
      modifier: 100,
      gradient: "from-purple-500 to-violet-600",
      description: "Learning management and educational tools",
      benefits: ["Course management", "Student tracking", "Assessment tools", "Progress monitoring"],
    },
  ];

  const mvpFeatures = [
    {
      id: "advanced-ai",
      name: "Advanced AI Responses",
      icon: Brain,
      cost: 200,
      gradient: "from-purple-500 to-indigo-600",
      description: "Intelligent chatbot with context-aware responses",
    },
    {
      id: "file-upload",
      name: "File Upload & Processing",
      icon: Database,
      cost: 150,
      gradient: "from-blue-500 to-cyan-600",
      description: "Secure file handling and document processing",
    },
    {
      id: "email-notifications",
      name: "Email Notifications",
      icon: MessageSquare,
      cost: 100,
      gradient: "from-green-500 to-teal-600",
      description: "Automated email alerts and notifications",
    },
    {
      id: "admin-dashboard",
      name: "Enhanced Admin Panel",
      icon: BarChart3,
      cost: 250,
      gradient: "from-orange-500 to-red-600",
      description: "Comprehensive admin interface with analytics",
    },
    {
      id: "api-access",
      name: "API Access",
      icon: Settings,
      cost: 150,
      gradient: "from-pink-500 to-rose-600",
      description: "RESTful API for third-party integrations",
    },
    // Restaurant-specific features
    {
      id: "menu-management",
      name: "Menu Management System",
      icon: Database,
      cost: 180,
      gradient: "from-orange-500 to-red-600",
      industry: "restaurant",
      description: "Digital menu creation, pricing updates, and category management",
    },
    {
      id: "order-tracking",
      name: "Order Tracking & Notifications",
      icon: MessageSquare,
      cost: 120,
      gradient: "from-green-500 to-emerald-600",
      industry: "restaurant",
      description: "Real-time order status updates and customer notifications",
    },
    {
      id: "table-reservations",
      name: "Table Reservation System",
      icon: Calendar,
      cost: 150,
      gradient: "from-blue-500 to-cyan-600",
      industry: "restaurant",
      description: "Online booking system with table availability management",
    },
    {
      id: "inventory-management",
      name: "Inventory Management",
      icon: BarChart3,
      cost: 200,
      gradient: "from-purple-500 to-violet-600",
      industry: "restaurant",
      description: "Stock tracking, supplier management, and automated reordering",
    },
    // Real Estate-specific features
    {
      id: "property-listings",
      name: "Property Listings Management",
      icon: Database,
      cost: 200,
      gradient: "from-green-500 to-emerald-600",
      industry: "real-estate",
      description: "Comprehensive property database with search and filter capabilities",
    },
    {
      id: "virtual-tours",
      name: "Virtual Property Tours",
      icon: Monitor,
      cost: 300,
      gradient: "from-blue-500 to-indigo-600",
      industry: "real-estate",
      description: "360° virtual tours and interactive property viewing experience",
    },
    {
      id: "lead-management",
      name: "Lead Management System",
      icon: Users,
      cost: 180,
      gradient: "from-orange-500 to-red-600",
      industry: "real-estate",
      description: "Customer relationship management and lead tracking",
    },
    {
      id: "document-management",
      name: "Document Management",
      icon: FileText,
      cost: 150,
      gradient: "from-purple-500 to-violet-600",
      industry: "real-estate",
      description: "Secure document storage and contract management system",
    },
  ];

  const mvpUsers = [
    {
      id: "basic",
      name: "Up to 100 users",
      icon: Users,
      modifier: 0,
      gradient: "from-blue-500 to-indigo-600",
    },
    {
      id: "standard",
      name: "Up to 500 users",
      icon: Users,
      modifier: 200,
      gradient: "from-green-500 to-emerald-600",
    },
    {
      id: "premium",
      name: "Up to 1000+ users",
      icon: Users,
      modifier: 400,
      gradient: "from-purple-500 to-violet-600",
    },
  ];

  const mvpDeployment = [
    {
      id: "basic",
      name: "Basic Cloud Hosting",
      icon: Monitor,
      modifier: 0,
      gradient: "from-gray-500 to-gray-600",
    },
    {
      id: "premium",
      name: "Premium Cloud + CDN",
      icon: Monitor,
      modifier: 150,
      gradient: "from-blue-500 to-indigo-600",
    },
    {
      id: "enterprise",
      name: "Enterprise Infrastructure",
      icon: Monitor,
      modifier: 300,
      gradient: "from-purple-500 to-violet-600",
    },
  ];

  const mvpSupport = [
    {
      id: "basic",
      name: "Email Support (48h)",
      icon: MessageSquare,
      modifier: 0,
      gradient: "from-gray-500 to-gray-600",
    },
    {
      id: "priority",
      name: "Priority Support (24h)",
      icon: MessageSquare,
      modifier: 100,
      gradient: "from-blue-500 to-indigo-600",
    },
    {
      id: "dedicated",
      name: "Dedicated Support (2h)",
      icon: MessageSquare,
      modifier: 250,
      gradient: "from-green-500 to-emerald-600",
    },
  ];
  const industries = [
    {
      id: "fintech",
      name: "FinTech & Banking",
      icon: DollarSign,
      hours: 20,
      gradient: "from-green-500 to-emerald-600",
    },
    {
      id: "healthcare",
      name: "Healthcare & Medical",
      icon: Shield,
      hours: 25,
      gradient: "from-red-500 to-pink-600",
    },
    {
      id: "ecommerce",
      name: "E-commerce & Retail",
      icon: TrendingUp,
      hours: 15,
      gradient: "from-orange-500 to-red-600",
    },
    {
      id: "education",
      name: "Education & Training",
      icon: Users,
      hours: 20,
      gradient: "from-blue-500 to-cyan-600",
    },
    {
      id: "realestate",
      name: "Real Estate",
      icon: Globe,
      hours: 18,
      gradient: "from-indigo-500 to-purple-600",
    },
    {
      id: "logistics",
      name: "Logistics & Supply Chain",
      icon: Layers,
      hours: 22,
      gradient: "from-teal-500 to-blue-600",
    },
    {
      id: "media",
      name: "Media & Entertainment",
      icon: Sparkles,
      hours: 20,
      gradient: "from-pink-500 to-rose-600",
    },
    {
      id: "saas",
      name: "SaaS & Tech",
      icon: Cpu,
      hours: 25,
      gradient: "from-violet-500 to-purple-600",
    },
  ];

  const aiFeatures = [
    {
      id: "custom-training",
      name: "Fine-tuning GPT on Custom Data",
      icon: Brain,
      hours: 20,
      gradient: "from-purple-500 to-indigo-600",
    },
    {
      id: "vector-search",
      name: "Embedding Search / Vector DB",
      icon: Database,
      hours: 20,
      gradient: "from-blue-500 to-cyan-600",
    },
    {
      id: "vision-ai",
      name: "Image Recognition / Vision AI",
      icon: Target,
      hours: 15,
      gradient: "from-green-500 to-teal-600",
    },
    {
      id: "voice-io",
      name: "Voice Input/Output",
      icon: MessageSquare,
      hours: 30,
      gradient: "from-orange-500 to-red-600",
    },
    {
      id: "realtime-chat",
      name: "Real-time AI Chat Assistant",
      icon: Users,
      hours: 20,
      gradient: "from-pink-500 to-rose-600",
    },
  ];

  const uiEnhancements = [
    {
      id: "dashboard",
      name: "Dashboard (Admin + User)",
      icon: BarChart3,
      hours: 20,
      gradient: "from-blue-500 to-indigo-600",
    },
    {
      id: "multi-role",
      name: "Multi-role Access Control",
      icon: Users,
      hours: 20,
      gradient: "from-purple-500 to-violet-600",
    },
    {
      id: "custom-theme",
      name: "Custom Theming & Branding",
      icon: Palette,
      hours: 10,
      gradient: "from-pink-500 to-rose-600",
    },
    {
      id: "multi-lang",
      name: "Multi-language Support",
      icon: Globe,
      hours: 20,
      gradient: "from-green-500 to-emerald-600",
    },
    {
      id: "pdf-export",
      name: "PDF Export / Print View",
      icon: Database,
      hours: 10,
      gradient: "from-orange-500 to-amber-600",
    },
  ];

  const integrations = [
    {
      id: "stripe",
      name: "Stripe / PayPal Integration",
      icon: DollarSign,
      hours: 15,
      gradient: "from-green-500 to-emerald-600",
    },
    {
      id: "calendly",
      name: "Calendly Integration",
      icon: Calendar,
      hours: 10,
      gradient: "from-blue-500 to-cyan-600",
    },
    {
      id: "twilio",
      name: "Twilio / SendGrid",
      icon: MessageSquare,
      hours: 10,
      gradient: "from-purple-500 to-violet-600",
    },
    {
      id: "cloud-storage",
      name: "Google Drive / Dropbox",
      icon: Database,
      hours: 10,
      gradient: "from-orange-500 to-red-600",
    },
    {
      id: "team-chat",
      name: "Slack / Discord",
      icon: Users,
      hours: 10,
      gradient: "from-indigo-500 to-blue-600",
    },
    {
      id: "crm",
      name: "HubSpot / CRM",
      icon: Target,
      hours: 20,
      gradient: "from-pink-500 to-rose-600",
    },
    {
      id: "zapier",
      name: "Zapier / Make",
      icon: Layers,
      hours: 10,
      gradient: "from-teal-500 to-cyan-600",
    },
  ];

  const analytics = [
    {
      id: "admin-analytics",
      name: "Admin Analytics Dashboard",
      icon: BarChart3,
      hours: 15,
      gradient: "from-blue-500 to-indigo-600",
    },
    {
      id: "user-analytics",
      name: "User Analytics & Insights",
      icon: TrendingUp,
      hours: 10,
      gradient: "from-green-500 to-emerald-600",
    },
    {
      id: "event-logging",
      name: "Event Logging & Tracking",
      icon: Clock,
      hours: 10,
      gradient: "from-purple-500 to-violet-600",
    },
    {
      id: "behavior-tracking",
      name: "Google Analytics / Hotjar",
      icon: Target,
      hours: 10,
      gradient: "from-orange-500 to-red-600",
    },
  ];

  const securityLevels = [
    {
      id: "basic",
      name: "Basic Security",
      description: "Standard authentication & encryption",
      icon: Shield,
      hours: 10,
      gradient: "from-gray-400 to-gray-500",
    },
    {
      id: "rbac",
      name: "Role-Based Access Control",
      description: "Advanced permission management",
      icon: Users,
      hours: 20,
      gradient: "from-blue-500 to-indigo-600",
    },
    {
      id: "audit",
      name: "Audit Logging",
      description: "Complete activity tracking",
      icon: Clock,
      hours: 20,
      gradient: "from-purple-500 to-violet-600",
    },
    {
      id: "compliance",
      name: "GDPR/CCPA Compliance",
      description: "Full regulatory compliance",
      icon: Lock,
      hours: 40,
      gradient: "from-red-500 to-pink-600",
    },
  ];

  const automation = [
    {
      id: "scheduled-jobs",
      name: "Scheduled Jobs & Cron",
      icon: Clock,
      hours: 10,
      gradient: "from-blue-500 to-indigo-600",
    },
    {
      id: "notifications",
      name: "Smart Notifications System",
      icon: MessageSquare,
      hours: 10,
      gradient: "from-green-500 to-emerald-600",
    },
    {
      id: "approval-system",
      name: "Approval Workflow System",
      icon: CheckCircle,
      hours: 15,
      gradient: "from-purple-500 to-violet-600",
    },
    {
      id: "auto-scaling",
      name: "Auto-scaling Infrastructure",
      icon: TrendingUp,
      hours: 20,
      gradient: "from-orange-500 to-red-600",
    },
  ];

  const growth = [
    {
      id: "referral",
      name: "Affiliate/Referral System",
      icon: Users,
      hours: 15,
      gradient: "from-pink-500 to-rose-600",
    },
    {
      id: "subscription",
      name: "Subscription Tier Logic",
      icon: DollarSign,
      hours: 15,
      gradient: "from-green-500 to-emerald-600",
    },
    {
      id: "feedback",
      name: "Feedback Collection System",
      icon: MessageSquare,
      hours: 10,
      gradient: "from-blue-500 to-cyan-600",
    },
    {
      id: "ab-testing",
      name: "A/B Testing Framework",
      icon: Target,
      hours: 20,
      gradient: "from-purple-500 to-indigo-600",
    },
  ];

  // Calculate dynamic values with fallback
  const calculatedValues = useMemo(() => {
    try {
      const hourlyRate = 50;

      // Default values
      let totalCost = 0;
      let totalHours = 0;
      let breakdown = [];
      let timelineWeeks = 0;
      let savedMoney = 0;

      if (selections.projectType === "mvp") {
        totalCost = 1000; // Base MVP cost
        breakdown = []; // Start with empty breakdown

        // Add industry modifier
        const industry = mvpIndustries?.find(
          (i) => i.id === selections.mvpIndustry
        );
        if (industry && industry.modifier > 0) {
          totalCost += industry.modifier;
          breakdown.push({
            category: `${industry.name} Specialization`,
            cost: industry.modifier,
          });
        }

        // Add selected features
        if (selections.mvpFeatures && Array.isArray(selections.mvpFeatures)) {
          selections.mvpFeatures.forEach((featureId) => {
            const feature = mvpFeatures?.find((f) => f.id === featureId);
            if (feature) {
              totalCost += feature.cost || 0;
              breakdown.push({
                category: feature.name,
                cost: feature.cost || 0,
              });
            }
          });
        }

        // Add user capacity modifier
        const users = mvpUsers?.find((u) => u.id === selections.mvpUsers);
        if (users && users.modifier > 0) {
          totalCost += users.modifier;
          breakdown.push({
            category: users.name,
            cost: users.modifier,
          });
        }

        // Add deployment modifier
        const deployment = mvpDeployment?.find(
          (d) => d.id === selections.mvpDeployment
        );
        if (deployment && deployment.modifier > 0) {
          totalCost += deployment.modifier;
          breakdown.push({
            category: deployment.name,
            cost: deployment.modifier,
          });
        }

        // Add support modifier
        const support = mvpSupport?.find((s) => s.id === selections.mvpSupport);
        if (support && support.modifier > 0) {
          totalCost += support.modifier;
          breakdown.push({
            category: support.name,
            cost: support.modifier,
          });
        }
      } else {
        // Custom project calculation logic
        const industry = industries?.find((i) => i.id === selections.industry);
        if (industry) {
          totalCost += (industry.hours || 0) * hourlyRate;
          breakdown.push({
            category: industry.name,
            cost: (industry.hours || 0) * hourlyRate,
          });
        }

        // Add AI features costs
        if (selections.features && Array.isArray(selections.features)) {
          selections.features.forEach((featureId) => {
            const feature = aiFeatures?.find((f) => f.id === featureId);
            if (feature) {
              totalCost += feature.hours * hourlyRate;
              breakdown.push({
                category: feature.name,
                cost: feature.hours * hourlyRate,
              });
            }
          });
        }

        // Add UI enhancements costs
        if (
          selections.uiEnhancements &&
          Array.isArray(selections.uiEnhancements)
        ) {
          selections.uiEnhancements.forEach((enhancementId) => {
            const enhancement = uiEnhancements?.find(
              (u) => u.id === enhancementId
            );
            if (enhancement) {
              totalCost += enhancement.hours * hourlyRate;
              breakdown.push({
                category: enhancement.name,
                cost: enhancement.hours * hourlyRate,
              });
            }
          });
        }

        // Add integration costs
        if (selections.integration && Array.isArray(selections.integration)) {
          selections.integration.forEach((integrationId) => {
            const integration = integrations?.find(
              (i) => i.id === integrationId
            );
            if (integration) {
              totalCost += integration.hours * hourlyRate;
              breakdown.push({
                category: integration.name,
                cost: integration.hours * hourlyRate,
              });
            }
          });
        }

        // Add analytics costs
        if (selections.analytics && Array.isArray(selections.analytics)) {
          selections.analytics.forEach((analyticsId) => {
            const analyticsItem = analytics?.find((a) => a.id === analyticsId);
            if (analyticsItem) {
              totalCost += analyticsItem.hours * hourlyRate;
              breakdown.push({
                category: analyticsItem.name,
                cost: analyticsItem.hours * hourlyRate,
              });
            }
          });
        }

        // Add security costs
        const security = securityLevels?.find(
          (s) => s.id === selections.security
        );
        if (security) {
          totalCost += security.hours * hourlyRate;
          breakdown.push({
            category: security.name,
            cost: security.hours * hourlyRate,
          });
        }

        // Add automation costs
        if (selections.automation && Array.isArray(selections.automation)) {
          selections.automation.forEach((automationId) => {
            const automationItem = automation?.find(
              (a) => a.id === automationId
            );
            if (automationItem) {
              totalCost += automationItem.hours * hourlyRate;
              breakdown.push({
                category: automationItem.name,
                cost: automationItem.hours * hourlyRate,
              });
            }
          });
        }

        // Add growth features costs
        if (selections.growth && Array.isArray(selections.growth)) {
          selections.growth.forEach((growthId) => {
            const growthItem = growth?.find((g) => g.id === growthId);
            if (growthItem) {
              totalCost += growthItem.hours * hourlyRate;
              breakdown.push({
                category: growthItem.name,
                cost: growthItem.hours * hourlyRate,
              });
            }
          });
        }
      }

      // Calculate final values
      totalHours = Math.round(totalCost / hourlyRate);
      timelineWeeks = Math.ceil(totalHours / 20);
      savedMoney = Math.round(totalCost * 0.25);

      // Ensure we always return valid values
      return {
        totalHours: totalHours || 0,
        totalCost: totalCost || 0,
        timelineWeeks: timelineWeeks || 1,
        savedMoney: savedMoney || 0,
        breakdown: breakdown || [],
      };
    } catch (error) {
      console.error("Error calculating values:", error);
      // Return default values if calculation fails
      return {
        totalHours: 0,
        totalCost: 0,
        timelineWeeks: 0,
        savedMoney: 0,
        breakdown: [],
      };
    }
  }, [selections, aiFeatures, analytics, automation, growth, industries, integrations, mvpDeployment, mvpFeatures, mvpIndustries, mvpSupport, mvpUsers, securityLevels, uiEnhancements]);

  const handleSelection = (key, value, isMultiple = false) => {
    // Add selection animation
    setSelectedItems((prev) => ({ ...prev, [`${key}-${value}`]: true }));
    setTimeout(() => {
      setSelectedItems((prev) => ({ ...prev, [`${key}-${value}`]: false }));
    }, 300);

    if (isMultiple) {
      setSelections((prev) => ({
        ...prev,
        [key]: prev[key].includes(value)
          ? prev[key].filter((item) => item !== value)
          : [...prev[key], value],
      }));
    } else {
      setSelections((prev) => ({ ...prev, [key]: value }));
    }
  };

  const nextStep = () => {
    const maxStep = steps.length;

    if (currentStep < maxStep) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentStep(currentStep + 1);
        setIsTransitioning(false);
      }, 300);
    } else {
      setShowModal(true);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentStep(currentStep - 1);
        setIsTransitioning(false);
      }, 300);
    }
  };

  const handleSubmit = async () => {
    if (!formData.fullName || !formData.telephone || !formData.email) {
      alert("Please fill in all required fields.");
      return;
    }

    setIsLoading(true);
    setIsSubmitting(true);

    try {
      const response = await fetch("http://localhost:5000/api/cost-estimate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          telephone: formData.telephone,
          email: formData.email,
          selections,
          calculatedValues,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setShowModal(false);
        setToast({
          show: true,
          type: "success",
          message: "Thank you! We've sent you a detailed PDF proposal via email. Please check your inbox."
        });
        setTimeout(() => {
          setToast({ show: false, type: "", message: "" });
        }, 5000);
        
        // Reset all states after successful submission
        resetForm();
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      console.error("Error sending cost estimation:", error);
      setToast({
        show: true,
        type: "error",
        message: "There was an error sending your request. Please try again or contact us directly."
      });
      setTimeout(() => {
        setToast({ show: false, type: "", message: "" });
      }, 5000);
    } finally {
      setIsLoading(false);
      setIsSubmitting(false);
    }
  };

  const renderSelectionGrid = (
    items,
    key,
    isMultiple = false,
    columns = "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
  ) => (
    <div className={`grid ${columns} gap-6 mt-8`}>
      {items.map((item, index) => {
        const isSelected = isMultiple
          ? selections[key].includes(item.id)
          : selections[key] === item.id;
        const isAnimating = selectedItems[`${key}-${item.id}`];
        const IconComponent = item.icon || (() => null);

        return (
          <button
            key={item.id}
            onClick={() => handleSelection(key, item.id, isMultiple)}
            className={`group relative p-6 rounded-2xl border-2 transition-all duration-500 hover:scale-105 transform shadow-lg overflow-hidden text-left ${
              isSelected
                ? `bg-gradient-to-br ${item.gradient} border-transparent text-white shadow-2xl scale-105`
                : "bg-white/90 backdrop-blur-sm border-gray-200 text-gray-700 hover:border-blue-300 hover:shadow-xl hover:bg-white"
            } ${isAnimating ? "animate-pulse scale-110" : ""}`}
            style={{
              animationDelay: `${index * 100}ms`,
              animation: `slideInUp 0.6s ease-out ${index * 100}ms both`,
            }}
          >
            {/* Selection indicator */}
            {isSelected && (
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <CheckCircle className="w-5 h-5 text-green-500" />
              </div>
            )}

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-3">
                {IconComponent && (
                  <div
                    className={`p-2 rounded-lg ${
                      isSelected ? "bg-white/20" : "bg-gray-100"
                    }`}
                  >
                    <IconComponent
                      className={`w-6 h-6 ${
                        isSelected ? "text-white" : "text-gray-600"
                      }`}
                    />
                  </div>
                )}
                {item.hours && (
                  <span
                    className={`text-sm font-medium px-2 py-1 rounded-full ${
                      isSelected
                        ? "bg-white/20 text-white"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {item.hours}h
                  </span>
                )}
                {/* {item.modifier > 0 && (
                  <span
                    className={`text-xs font-medium px-2 py-1 rounded-full ${
                      isSelected
                        ? "bg-white/20 text-white"
                        : "bg-orange-100 text-orange-600"
                    }`}
                  >
                    +${item.modifier}
                  </span>
                )} */}
              </div>

              <h3 className="font-bold text-lg mb-2 group-hover:translate-y-1 transition-transform duration-300">
                {item.name}
              </h3>

              {item.description && (
                <p
                  className={`text-sm ${
                    isSelected ? "text-white/80" : "text-gray-500"
                  } mb-3`}
                >
                  {item.description}
                </p>
              )}

              {item.benefits && isSelected && (
                <div className="mb-3">
                  <p className={`text-xs font-medium mb-2 ${
                    isSelected ? "text-white/90" : "text-gray-600"
                  }`}>
                    Key Benefits:
                  </p>
                  <ul className={`text-xs space-y-1 ${
                    isSelected ? "text-white/80" : "text-gray-500"
                  }`}>
                    {item.benefits.slice(0, 3).map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div
                          className={`w-1 h-1 rounded-full ${
                            isSelected ? "bg-white" : "bg-green-500"
                          }`}
                        ></div>
                        {benefit}
                      </li>
                    ))}
                    {item.benefits.length > 3 && (
                      <li className={`${
                        isSelected ? "text-white/60" : "text-gray-400"
                      } font-medium`}>
                        +{item.benefits.length - 3} more benefits
                      </li>
                    )}
                  </ul>
                </div>
              )}

              {item.features && (
                <ul
                  className={`text-sm space-y-1 ${
                    isSelected ? "text-white/90" : "text-gray-600"
                  }`}
                >
                  {item.features.slice(0, 3).map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div
                        className={`w-1.5 h-1.5 rounded-full ${
                          isSelected ? "bg-white" : "bg-orange-500"
                        }`}
                      ></div>
                      {feature}
                    </li>
                  ))}
                  {item.features.length > 3 && (
                    <li
                      className={`${
                        isSelected ? "text-white/70" : "text-gray-400"
                      } font-medium`}
                    >
                      +{item.features.length - 3} more features
                    </li>
                  )}
                </ul>
              )}

              {item.price && (
                <div className="mt-4 pt-3 border-t border-white/20">
                  <span className="text-2xl font-bold">
                    ${item.price.toLocaleString()}
                  </span>
                  <span className="text-sm ml-2 opacity-80">
                    • {item.timeline} weeks
                  </span>
                </div>
              )}
            </div>
          </button>
        );
      })}
    </div>
  );

  const renderStepContent = () => {
    const step = steps[currentStep - 1];

    if (!step) {
      return (
        <div className="text-center py-12">
          <p className="text-gray-600">Loading...</p>
        </div>
      );
    }

    switch (step.key) {
      case "projectType":
        return (
          <div
            className={`space-y-8 mt-8 transition-all duration-500 ${
              isTransitioning
                ? "opacity-0 translate-x-10"
                : "opacity-100 translate-x-0"
            }`}
          >
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl mb-6 animate-pulse">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Choose Your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
                  Project Approach
                </span>
              </h2>
              <p className="text-xl text-gray-600">
                Start with our proven MVP or build a custom solution from
                scratch
              </p>
            </div>
            {renderSelectionGrid(
              projectTypes,
              "projectType",
              false,
              "grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto"
            )}
          </div>
        );

      case "industry":
        return (
          <div
            className={`space-y-8 mt-8 transition-all duration-500 ${
              isTransitioning
                ? "opacity-0 translate-x-10"
                : "opacity-100 translate-x-0"
            }`}
          >
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl mb-6 animate-bounce">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Select Your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  Industry
                </span>
              </h2>
              <p className="text-xl text-gray-600">
                Each industry has unique requirements and compliance needs
              </p>
            </div>
            {renderSelectionGrid(industries, "industry")}
          </div>
        );

      case "aiFeatures":
        return (
          <div
            className={`space-y-8 mt-8 transition-all duration-500 ${
              isTransitioning
                ? "opacity-0 translate-x-10"
                : "opacity-100 translate-x-0"
            }`}
          >
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl mb-6 animate-pulse">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                AI{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
                  Enhancements
                </span>
              </h2>
              <p className="text-xl text-gray-600">
                Advanced AI capabilities to power your solution (Select
                multiple)
              </p>
            </div>
            {renderSelectionGrid(aiFeatures, "aiFeatures", true)}
          </div>
        );

      case "uiEnhancements":
        return (
          <div
            className={`space-y-8 mt-8 transition-all duration-500 ${
              isTransitioning
                ? "opacity-0 translate-x-10"
                : "opacity-100 translate-x-0"
            }`}
          >
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl mb-6 animate-bounce">
                <Palette className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                UI/UX{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-rose-600">
                  Enhancements
                </span>
              </h2>
              <p className="text-xl text-gray-600">
                Professional interface upgrades and user experience features
              </p>
            </div>
            {renderSelectionGrid(uiEnhancements, "uiEnhancements", true)}
          </div>
        );

      case "integrations":
        return (
          <div
            className={`space-y-8 mt-8 transition-all duration-500 ${
              isTransitioning
                ? "opacity-0 translate-x-10"
                : "opacity-100 translate-x-0"
            }`}
          >
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl mb-6 animate-pulse">
                <Layers className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Third-party{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
                  Integrations
                </span>
              </h2>
              <p className="text-xl text-gray-600">
                Connect with essential business tools and services
              </p>
            </div>
            {renderSelectionGrid(integrations, "integrations", true)}
          </div>
        );

      case "analytics":
        return (
          <div
            className={`space-y-8 mt-8 transition-all duration-500 ${
              isTransitioning
                ? "opacity-0 translate-x-10"
                : "opacity-100 translate-x-0"
            }`}
          >
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl mb-6 animate-bounce">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Analytics &{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                  Reporting
                </span>
              </h2>
              <p className="text-xl text-gray-600">
                Track performance and gain insights into user behavior
              </p>
            </div>
            {renderSelectionGrid(analytics, "analytics", true)}
          </div>
        );

      case "security":
        return (
          <div
            className={`space-y-8 mt-8 transition-all duration-500 ${
              isTransitioning
                ? "opacity-0 translate-x-10"
                : "opacity-100 translate-x-0"
            }`}
          >
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl mb-6 animate-pulse">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Security{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-pink-600">
                  Level
                </span>
              </h2>
              <p className="text-xl text-gray-600">
                Choose the appropriate security measures for your industry
              </p>
            </div>
            {renderSelectionGrid(
              securityLevels,
              "security",
              false,
              "grid-cols-1 md:grid-cols-2"
            )}
          </div>
        );

      case "automation":
        return (
          <div
            className={`space-y-8 mt-8 transition-all duration-500 ${
              isTransitioning
                ? "opacity-0 translate-x-10"
                : "opacity-100 translate-x-0"
            }`}
          >
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl mb-6 animate-bounce">
                <Workflow className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Automation &{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                  Workflow
                </span>
              </h2>
              <p className="text-xl text-gray-600">
                Streamline operations with intelligent automation
              </p>
            </div>
            {renderSelectionGrid(automation, "automation", true)}
          </div>
        );

      case "growth":
        return (
          <div
            className={`space-y-8 mt-8 transition-all duration-500 ${
              isTransitioning
                ? "opacity-0 translate-x-10"
                : "opacity-100 translate-x-0"
            }`}
          >
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl mb-6 animate-pulse">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Growth{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                  Features
                </span>
              </h2>
              <p className="text-xl text-gray-600">
                Scale your platform with advanced growth and monetization tools
              </p>
            </div>
            {renderSelectionGrid(growth, "growth", true)}
          </div>
        );
      case "mvpIndustry":
        return (
          <div
            className={`space-y-8 mt-8 transition-all duration-500 ${
              isTransitioning
                ? "opacity-0 translate-x-10"
                : "opacity-100 translate-x-0"
            }`}
          >
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl mb-6 animate-bounce">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">
                Select Your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  Industry Focus
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-600">
                Choose your industry for specialized features and compliance
              </p>
            </div>
            {renderSelectionGrid(
              mvpIndustries,
              "mvpIndustry",
              false,
              "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            )}
          </div>
        );

      case "mvpFeatures":
        // Filter features based on selected industry
        const filteredFeatures = selections.mvpIndustry 
          ? mvpFeatures.filter(feature => 
              !feature.industry || feature.industry === selections.mvpIndustry
            )
          : mvpFeatures.filter(feature => !feature.industry); // Show only general features if no industry selected

        return (
          <div
            className={`space-y-8 mt-8 transition-all duration-500 ${
              isTransitioning
                ? "opacity-0 translate-x-10"
                : "opacity-100 translate-x-0"
            }`}
          >
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl mb-6 animate-pulse">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">
                Enhanced{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
                  MVP Features
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-600">
                {selections.mvpIndustry 
                  ? `Add premium features for your ${selections.mvpIndustry} MVP (Select multiple)`
                  : "Add premium features to your MVP (Select multiple)"
                }
              </p>
            </div>
            {renderSelectionGrid(
              filteredFeatures,
              "mvpFeatures",
              true,
              "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            )}
          </div>
        );

      case "mvpUsers":
        return (
          <div
            className={`space-y-8 mt-8 transition-all duration-500 ${
              isTransitioning
                ? "opacity-0 translate-x-10"
                : "opacity-100 translate-x-0"
            }`}
          >
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl mb-6 animate-bounce">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">
                Expected{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                  User Scale
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-600">
                How many users do you expect in the first 6 months?
              </p>
            </div>
            {renderSelectionGrid(
              mvpUsers,
              "mvpUsers",
              false,
              "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            )}
          </div>
        );

      case "mvpDeployment":
        return (
          <div
            className={`space-y-8 mt-8 transition-all duration-500 ${
              isTransitioning
                ? "opacity-0 translate-x-10"
                : "opacity-100 translate-x-0"
            }`}
          >
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl mb-6 animate-pulse">
                <Monitor className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">
                Hosting &{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
                  Infrastructure
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-600">
                Choose your preferred hosting and infrastructure setup
              </p>
            </div>
            {renderSelectionGrid(
              mvpDeployment,
              "mvpDeployment",
              false,
              "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            )}
          </div>
        );

      case "mvpSupport":
        return (
          <div
            className={`space-y-8 mt-8 transition-all duration-500 ${
              isTransitioning
                ? "opacity-0 translate-x-10"
                : "opacity-100 translate-x-0"
            }`}
          >
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl mb-6 animate-bounce">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">
                Support{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                  Package
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-600">
                Select your preferred support level and response time
              </p>
            </div>
            {renderSelectionGrid(
              mvpSupport,
              "mvpSupport",
              false,
              "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            )}
          </div>
        );

      default:
        return null;
    }
  };

  // Add CSS keyframes for animations
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @keyframes slideInUp {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      @keyframes countUp {
        from { opacity: 0; transform: scale(0.5); }
        to { opacity: 1; transform: scale(1); }
      }
      
      @keyframes fadeInScale {
        from { opacity: 0; transform: scale(0.9); }
        to { opacity: 1; transform: scale(1); }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <div className="min-h-screen mt-16 bg-white relative overflow-hidden">
      {/* Subtle background pattern matching hero section */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-orange-400/10 to-red-400/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-indigo-400/10 rounded-full blur-3xl"></div>
      </div>

      {/* Header Section */}
      <div className="max-w-4xl mx-auto pt-20 pb-12 text-center relative z-10 px-6">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-3xl mb-6 shadow-2xl">
          <Sparkles className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
          <span className="text-gray-800">AI Project </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
            Cost Calculator
          </span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-4">
          Get an accurate estimate for your AI solution with our intelligent
          pricing tool. From MVP to enterprise-scale deployment.
        </p>

        {/* Trust indicators */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 text-xs sm:text-sm text-gray-600 mb-6 sm:mb-8 px-4">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full"></div>
            <span>50+ Happy Clients</span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-500 rounded-full"></div>
            <span>5.0 Rating</span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full"></div>
            <span>24h Response</span>
          </div>
        </div>
      </div>

      {/* Progress Bar - Hidden on mobile */}
      <div className="max-w-7xl mx-auto px-6 py-8 relative z-10 hidden md:block">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 bg-white/80 backdrop-blur-lg rounded-3xl p-4 md:p-6 shadow-xl border border-gray-100">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <React.Fragment key={step.id}>
                <div className="flex flex-col items-center group">
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center border-2 transition-all duration-700 shadow-lg relative overflow-hidden ${
                      step.id <= currentStep
                        ? "bg-gradient-to-br from-orange-500 to-red-600 border-orange-400 text-white shadow-orange-200 scale-110"
                        : "bg-white border-gray-300 text-gray-500 group-hover:scale-105"
                    }`}
                  >
                    {step.id <= currentStep ? (
                      <CheckCircle className="w-5 h-5 animate-bounce" />
                    ) : (
                      <IconComponent className="w-5 h-5" />
                    )}
                  </div>
                  <span
                    className={`text-xs mt-2 font-semibold transition-all duration-500 text-center ${
                      step.id <= currentStep
                        ? "text-orange-600 scale-105"
                        : "text-gray-400"
                    }`}
                  >
                    {step.name}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`flex-1 h-2 mx-2 rounded-full transition-all duration-700 relative overflow-hidden ${
                      step.id < currentStep
                        ? "bg-gradient-to-r from-orange-500 to-red-600"
                        : "bg-gray-200"
                    }`}
                  ></div>
                )}
              </React.Fragment>
            );
          })}
        </div>
        </div>

      {/* Main Content - Always visible */}
      <div className="max-w-7xl mx-auto px-6 py-8 relative z-10">
        <div className="flex flex-col xl:flex-row gap-8">
          <div className="flex-1">
            {renderStepContent()}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-12">
              <button
                onClick={prevStep}
                disabled={currentStep === 1}
                className={`px-8 py-4 rounded-2xl border-2 transition-all duration-300 flex items-center space-x-3 font-semibold shadow-lg ${
                  currentStep === 1
                    ? "bg-gray-100 border-gray-200 text-gray-400 cursor-not-allowed"
                    : "bg-white border-orange-500 text-orange-600 hover:bg-orange-50 hover:scale-105 transform"
                }`}
              >
                <ChevronLeft className="w-5 h-5" />
                <span>Previous</span>
              </button>

              <button
                onClick={nextStep}
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white transition-all duration-300 flex items-center space-x-3 font-semibold shadow-xl shadow-orange-200 hover:scale-105 transform"
              >
                <span>
                  {currentStep === steps.length ? "Get Estimate" : "Continue"}
                </span>
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Enhanced Sidebar - Hidden on mobile */}
          <div className="w-full xl:w-80 space-y-6 mt-8 hidden md:block">
            {/* Cost Summary */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl p-6 border border-orange-200 shadow-xl sticky top-8">
              <div className="text-center mb-6">
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  Project Estimate
                </h3>
                <div className="relative mb-2">
                  <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600 filter blur-[8px] select-none">
                    ${(calculatedValues?.totalCost || 0).toLocaleString()}
                  </div>
                  {/* <div className="absolute inset-0 flex items-center justify-center">
                    <Lock className="w-6 h-6 text-orange-500" />
                  </div> */}
                </div>
                <p className="text-sm text-gray-600 filter blur-[4px] select-none">
                  {calculatedValues?.timelineWeeks || 0} weeks •{" "}
                  {calculatedValues?.totalHours || 0} hours
                </p>
                {/* <p className="text-xs text-orange-600 mt-1">Submit form to view pricing</p> */}
              </div>

              {/* Savings Badge */}
              <div className="bg-green-100 border border-green-200 rounded-2xl p-4 mb-6 text-center relative overflow-hidden">
                <div className="filter blur-[6px] select-none">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <Zap className="w-4 h-4 text-green-600" />
                    <span className="font-semibold text-green-800">
                      You Save
                    </span>
                  </div>
                  <div className="text-2xl font-bold text-green-600">
                    ${(calculatedValues?.savedMoney || 0).toLocaleString()}
                  </div>
                  <p className="text-xs text-green-600">vs market rates</p>
                </div>
                {/* <div className="absolute inset-0 flex items-center justify-center bg-green-100/50">
                  <Lock className="w-5 h-5 text-green-600" />
                </div> */}
              </div>

              {/* Breakdown */}
              {calculatedValues.breakdown.length > 0 && (
                <div className="space-y-3 relative">
                  <h4 className="font-semibold text-gray-700 text-sm">
                    Cost Breakdown:
                  </h4>
                  <div className="filter blur-[6px] select-none">
                    {calculatedValues.breakdown.map((item, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center text-sm mb-2"
                      >
                        <span className="text-gray-600">{item.category}</span>
                        <span className="font-semibold text-gray-800">
                          ${item.cost.toLocaleString()}
                        </span>
                      </div>
                    ))}
                  </div>
                  {/* <div className="absolute inset-0 flex items-center justify-center mt-6">
                    <div className="flex items-center gap-2 text-blue-600">
                      <Lock className="w-5 h-5" />
                      <span className="text-sm font-medium">Submit form to unlock</span>
                    </div>
                  </div> */}
                </div>
              )}

              {/* CTA Button */}
              <button
                onClick={() => setShowModal(true)}
                className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-2xl font-semibold hover:from-orange-600 hover:to-red-700 transition-all duration-300 shadow-lg hover:scale-105 transform"
              >
                Get Detailed Quote
              </button>
            </div>

            {/* Key Benefits */}
            <div className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100">
              <h4 className="font-bold text-gray-700 mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-blue-500" />
                Why Choose Us?
              </h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-gray-600">Expert AI developers</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-gray-600">24/7 support included</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-gray-600">Money-back guarantee</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-gray-600">Scalable architecture</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Modal */}
      {showModal && (
        <div className="fixed inset-0 mt-[50px] bg-black/60 backdrop-blur-xl flex items-center justify-center p-4 z-50 animate-in fade-in duration-300">
          <div className="bg-white rounded-3xl p-8 max-w-4xl w-full max-h-[80vh] overflow-y-auto shadow-2xl animate-in zoom-in-95 duration-500 slide-in-from-bottom-4">
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  Get Your Detailed PDF Proposal
                </h2>
                <p className="text-gray-600">
                  Submit your details to receive a comprehensive PDF proposal with cost breakdown
                </p>
              </div>

              <button
                onClick={() => setShowModal(false)}
                className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-110"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Project Summary */}
            {/* <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 mb-8 border border-orange-200">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-orange-600" />
                Project Summary
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="text-center p-4 bg-white/70 rounded-xl">
                  <div className="text-3xl font-black text-orange-600 mb-1">
                    ${calculatedValues.totalCost.toLocaleString()}
                  </div>
                  <div className="text-sm font-medium text-gray-700">
                    Total Investment
                  </div>
                </div>

                <div className="text-center p-4 bg-white/70 rounded-xl">
                  <div className="text-3xl font-black text-blue-600 mb-1">
                    {calculatedValues.totalHours}h
                  </div>
                  <div className="text-sm font-medium text-gray-700">
                    Development Time
                  </div>
                </div>

                <div className="text-center p-4 bg-white/70 rounded-xl">
                  <div className="text-3xl font-black text-purple-600 mb-1">
                    {calculatedValues.timelineWeeks}w
                  </div>
                  <div className="text-sm font-medium text-gray-700">
                    Project Timeline
                  </div>
                </div>
              </div>

              {calculatedValues.breakdown.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {calculatedValues.breakdown.map((item, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-white/50 rounded-lg">
                      <span className="font-medium text-gray-700">{item.category}</span>
                      <span className="font-bold text-gray-800">
                        ${item.cost.toLocaleString()}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div> */}

            {/* Contact Form */}
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Full Name*
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        fullName: e.target.value,
                      }))
                    }
                    placeholder="Enter your full name"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Phone Number*
                  </label>
                  <input
                    type="tel"
                    value={formData.telephone}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        telephone: e.target.value,
                      }))
                    }
                    placeholder="Your phone number"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 transition-all duration-300"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Email Address*
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      email: e.target.value,
                    }))
                  }
                  placeholder="your.email@example.com"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 transition-all duration-300"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Project Details
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      message: e.target.value,
                    }))
                  }
                  placeholder="Tell us about your project vision and specific requirements..."
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 resize-none transition-all duration-300"
                />
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row justify-end gap-4 pt-6">
              <div className="mb-6">
                  <ReCAPTCHA
                    sitekey={sitekey}
                    onChange={value => setCaptchaValue(value)}
                    className="transform scale-90 -ml-[20px]"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-8 py-3 border-2 border-gray-300 rounded-xl text-gray-700 hover:bg-gray-50 transition-all duration-300 font-semibold"
                >
                  Cancel
                </button>

                
                
                <button
                  onClick={handleSubmit}
                  disabled={isLoading || !captchaValue}
                  className={`px-8 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-xl hover:from-orange-600 hover:to-red-700 transition-all duration-300 font-bold shadow-lg hover:scale-105 transform flex items-center gap-2 ${
                    (isLoading || !captchaValue) ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Submitting...
                    </>
                  ) : (
                    <>
                      <ArrowRight className="w-5 h-5" />
                      Submit & Get PDF Proposal
                    </>
                  )}
                </button>
                <Toaster position="top-right" />

                {/* Toast Message */}
                {toast.show && (
                  <div
                    className={`fixed bottom-5 right-5 p-4 rounded-xl shadow-lg transform transition-all duration-500 ${
                      toast.type === "success" ? "bg-green-500" : "bg-red-500"
                    } text-white flex items-center gap-2 animate-in slide-in-from-right-5`}
                  >
                    {toast.type === "success" ? (
                      <CheckCircle className="w-5 h-5" />
                    ) : (
                      <XCircle className="w-5 h-5" />
                    )}
                    <p>{toast.message}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-green-500" />
                  <span>Secure & Confidential</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-500" />
                  <span>24h Response Time</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-500" />
                  <span>No Obligation Quote</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CostCalculator;
