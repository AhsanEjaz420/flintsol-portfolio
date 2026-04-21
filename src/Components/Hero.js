// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Hero = () => {
//   const navigate = useNavigate();
//   const handleNavigate = () => {
//     // Navigation logic would go here
//     navigate("/Costcalculator");
//     console.log("Navigate to cost calculator");
//   };
//   return (
//     <section className="relative min-h-screen overflow-hidden">
//       <video
//         className="absolute top-0 left-0 w-full h-screen object-cover"
//         autoPlay
//         loop
//         muted
//         playsInline
//       >
//         <source
//           src={require("../assets/BG/1753847917474064981_X4mifEAx.mp4")}
//           type="video/mp4"
//         />
//       </video>
//       <div className="absolute inset-0 bg-black/80"></div>

//       {/* Content */}
//       <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
//         <div className="text-center max-w-6xl mx-auto w-full">
//           {/* Logo/Brand */}
//           <div
//             className="mb-6 sm:mb-8 animate-fade-in-up"
//             style={{ animationDelay: "0.2s" }}
//           >
//             {/* MVP Badge */}
//             <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-pulse">
//               <span>⚡</span>
//               MVP for $1000 in 2 Weeks
//             </div>

//             <h1 className="text-xl sm:text-6xl md:text-7xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 tracking-tight">
//               <span className="text-white">INNOVATE . </span>{" "}
//               <span className="text-orange-400">INTEGRATE </span>
//               <span className="text-white">. ELEVATE </span>{" "}
//             </h1>
//           </div>

//           {/* Main Description */}
//           <div
//             className="mb-8 sm:mb-12 animate-fade-in-up"
//             style={{ animationDelay: "0.4s" }}
//           >
//             <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6 text-xs sm:text-sm md:text-base text-slate-300 max-w-2xl mx-auto">
//               <div className="flex items-center justify-center sm:justify-start gap-2">
//                 <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
//                 <span>Startups & Enterprises</span>
//               </div>
//               <div className="flex items-center justify-center sm:justify-start gap-2">
//                 <div
//                   className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"
//                   style={{ animationDelay: "0.5s" }}
//                 ></div>
//                 <span>Full-Cycle Development</span>
//               </div>
//               <div className="flex items-center justify-center sm:justify-start gap-2">
//                 <div
//                   className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"
//                   style={{ animationDelay: "1s" }}
//                 ></div>
//                 <span>Digital Transformation</span>
//               </div>
//             </div>
//           </div>

//           {/* CTA Buttons - Responsive layout */}
//           <div
//             className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up"
//             style={{ animationDelay: "0.6s" }}
//           >
//             <button
//               className="group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-orange-400/50 text-white font-semibold text-xl sm:text-2xl lg:text-3xl rounded-full backdrop-blur-sm bg-orange-400/5 hover:bg-orange-400/10 hover:border-orange-400 transition-all duration-300 hover:scale-105"
//               onClick={handleNavigate}
//             >
//               <span className="flex items-center justify-center gap-4">
//                 <svg
//                   className="w-6 h-6 sm:w-7 sm:h-7 group-hover:scale-110 transition-transform duration-300"
//                   fill="currentColor"
//                   viewBox="0 0 20 20"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//                 <span className="hidden sm:inline">Get a Quote</span>
//               </span>
//             </button>
//           </div>

//           {/* Trust Indicators */}
//           <div
//             className="mt-8 sm:mt-12 animate-fade-in-up"
//             style={{ animationDelay: "0.8s" }}
//           >
//             <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-slate-400">
//               <div className="flex items-center gap-2">
//                 <div className="flex -space-x-1">
//                   <div className="w-6 h-6 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full border-2 border-slate-800"></div>
//                   <div className="w-6 h-6 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full border-2 border-slate-800"></div>
//                   <div className="w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full border-2 border-slate-800"></div>
//                 </div>
//                 <span>50+ Happy Clients</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <div className="flex text-yellow-400">
//                   {[...Array(5)].map((_, i) => (
//                     <svg
//                       key={i}
//                       className="w-4 h-4 fill-current"
//                       viewBox="0 0 20 20"
//                     >
//                       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                     </svg>
//                   ))}
//                 </div>
//                 <span>5.0 Rating</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
//                 <span>Quick Delivery</span>
//               </div>
//             </div>
//           </div>

//           {/* Scroll Indicator - Hidden on mobile */}
//           <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
//             <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
//               <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes fade-in-up {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes float {
//           0%,
//           100% {
//             transform: translate(-50%, -50%) translateY(0px);
//           }
//           50% {
//             transform: translate(-50%, -50%) translateY(-20px);
//           }
//         }

//         @keyframes float-delayed {
//           0%,
//           100% {
//             transform: translate(50%, 50%) translateY(0px);
//           }
//           50% {
//             transform: translate(50%, 50%) translateY(15px);
//           }
//         }

//         @keyframes drift {
//           0% {
//             transform: translate(0, 0);
//           }
//           25% {
//             transform: translate(10px, -5px);
//           }
//           50% {
//             transform: translate(-5px, -10px);
//           }
//           75% {
//             transform: translate(-10px, 5px);
//           }
//           100% {
//             transform: translate(0, 0);
//           }
//         }

//         .animate-fade-in-up {
//           animation: fade-in-up 1s ease-out forwards;
//           opacity: 0;
//         }

//         .animate-float {
//           animation: float 6s ease-in-out infinite;
//         }

//         .animate-float-delayed {
//           animation: float-delayed 8s ease-in-out infinite;
//           animation-delay: 2s;
//         }

//         .animate-drift {
//           animation: drift 20s linear infinite;
//         }

//         /* Custom scrollbar for the page */
//         ::-webkit-scrollbar {
//           width: 4px;
//         }

//         ::-webkit-scrollbar-track {
//           background: rgba(0, 0, 0, 0.1);
//         }

//         ::-webkit-scrollbar-thumb {
//           background: linear-gradient(to bottom, #f97316, #fb923c);
//           border-radius: 2px;
//         }

//         ::-webkit-scrollbar-thumb:hover {
//           background: linear-gradient(to bottom, #fb923c, #fbbf24);
//         }

//         /* Responsive improvements */
//         @media (max-width: 640px) {
//           .animate-fade-in-up {
//             animation-duration: 0.8s;
//           }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default Hero;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    // Navigation logic would go here
    navigate("/Costcalculator");
  };
  
  return (
    <section className="relative min-h-screen overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-screen object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          src={require("../assets/BG/1753847917474064981_X4mifEAx.mp4")}
          type="video/mp4"
        />
      </video>
      <div className="absolute inset-0 bg-black/80"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-3 sm:px-6 lg:px-8">
        <div className="text-center max-w-6xl mx-auto w-full">
          {/* Logo/Brand */}
          <div
            className="mb-4 sm:mb-6 md:mb-8 animate-fade-in-up pt-16 sm:pt-20"
            style={{ animationDelay: "0.2s" }}
          >
            {/* MVP Badge - Smaller on mobile */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-gradient-to-r from-orange-500 to-red-600 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 animate-pulse">
              <span className="text-xs sm:text-sm">⚡</span>
              <span className="text-xs sm:text-sm">MVP for $1000 in 2 Weeks</span>
            </div>

            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 sm:mb-3 md:mb-4 tracking-tight leading-tight">
              <span className="text-white">INNOVATE</span>{" "}
              <span className="text-orange-400">.</span>{" "}
              <span className="text-orange-400">INTEGRATE</span>{" "}
              <span className="text-white">.</span>{" "}
              <span className="text-white">ELEVATE</span>
            </h1>
          </div>

          {/* Main Description - Responsive grid */}
          <div
            className="mb-6 sm:mb-8 md:mb-12 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 md:gap-6 text-xs sm:text-sm md:text-base text-slate-300 max-w-3xl mx-auto">
              <div className="flex items-center justify-center gap-2">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-400 rounded-full animate-pulse"></div>
                <span className="text-xs sm:text-sm">Startups & Enterprises</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <div
                  className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-amber-400 rounded-full animate-pulse"
                  style={{ animationDelay: "0.5s" }}
                ></div>
                <span className="text-xs sm:text-sm">Full-Cycle Development</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <div
                  className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow-400 rounded-full animate-pulse"
                  style={{ animationDelay: "1s" }}
                ></div>
                <span className="text-xs sm:text-sm">Digital Transformation</span>
              </div>
            </div>
          </div>

          {/* CTA Buttons - Enhanced mobile responsiveness */}
          <div
            className="flex flex-col items-center animate-fade-in-up mb-6 sm:mb-8"
            style={{ animationDelay: "0.6s" }}
          >
            <button
              className="group relative w-full max-w-xs sm:max-w-sm px-6 sm:px-8 py-3 sm:py-4 border-2 border-orange-400/50 text-white font-semibold text-base sm:text-xl md:text-2xl lg:text-3xl rounded-full backdrop-blur-sm bg-orange-400/5 hover:bg-orange-400/10 hover:border-orange-400 transition-all duration-300 hover:scale-105"
              onClick={handleNavigate}
            >
              <span className="flex items-center justify-center gap-2 sm:gap-4">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 group-hover:scale-110 transition-transform duration-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Get a Quote</span>
              </span>
            </button>
          </div>

          {/* Trust Indicators - Better mobile layout */}
          <div
            className="animate-fade-in-up"
            style={{ animationDelay: "0.8s" }}
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-6 md:gap-8 items-center justify-center text-xs sm:text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-1">
                  <div className="w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full border-2 border-slate-800"></div>
                  <div className="w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full border-2 border-slate-800"></div>
                  <div className="w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full border-2 border-slate-800"></div>
                </div>
                <span className="text-xs sm:text-sm">50+ Happy Clients</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-3 h-3 sm:w-4 sm:h-4 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-xs sm:text-sm">5.0 Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-xs sm:text-sm">Quick Delivery</span>
              </div>
            </div>
          </div>

          {/* Scroll Indicator - Hidden on mobile */}
          <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translate(-50%, -50%) translateY(0px);
          }
          50% {
            transform: translate(-50%, -50%) translateY(-20px);
          }
        }

        @keyframes float-delayed {
          0%,
          100% {
            transform: translate(50%, 50%) translateY(0px);
          }
          50% {
            transform: translate(50%, 50%) translateY(15px);
          }
        }

        @keyframes drift {
          0% {
            transform: translate(0, 0);
          }
          25% {
            transform: translate(10px, -5px);
          }
          50% {
            transform: translate(-5px, -10px);
          }
          75% {
            transform: translate(-10px, 5px);
          }
          100% {
            transform: translate(0, 0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
          opacity: 0;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
          animation-delay: 2s;
        }

        .animate-drift {
          animation: drift 20s linear infinite;
        }

        /* Custom scrollbar for the page */
        ::-webkit-scrollbar {
          width: 4px;
        }

        ::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.1);
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #f97316, #fb923c);
          border-radius: 2px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #fb923c, #fbbf24);
        }

        /* Mobile-first responsive design */
        @media (max-width: 640px) {
          .animate-fade-in-up {
            animation-duration: 0.8s;
          }
          
          /* Ensure text is readable on very small screens */
          h1 {
            line-height: 1.1;
            word-spacing: 0.1em;
          }
          
          /* Adjust button sizing for mobile */
          button {
            min-height: 48px; /* Touch target size */
          }
        }

        /* Extra small devices */
        @media (max-width: 380px) {
          h1 {
            font-size: 1.75rem !important;
          }
          
          .trust-indicators {
            font-size: 0.75rem;
          }
        }

        /* Ensure proper spacing on all devices */
        @media (min-width: 640px) and (max-width: 768px) {
          h1 {
            font-size: 3rem;
          }
        }
        
        /* Large desktop adjustments */
        @media (min-width: 1024px) {
          h1 {
            font-size: 4.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;