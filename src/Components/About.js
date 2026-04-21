import React from 'react';

const About = () => {
  return (
    <>
      <section className="about bg-white relative overflow-hidden py-20" id="about">
        {/* Subtle background decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full opacity-50 blur-3xl"></div>
          <div className="absolute bottom-32 right-10 w-40 h-40 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full opacity-50 blur-3xl"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full opacity-30 blur-2xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 max-w-6xl">
          {/* Section Title */}
          <div className="text-center mb-16 mt-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 relative inline-block">
              About Flint Sol
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"></div>
            </h2>
            <p className="text-xl text-gray-600 mt-8 max-w-3xl mx-auto leading-relaxed">
              We transform businesses through cutting-edge technology solutions, combining AI innovation 
              with full-stack development expertise to deliver exceptional results.
            </p>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {/* Card 1 - AI-First Approach */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">AI-First Approach</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Cutting-edge AI integration powering next-generation solutions for modern businesses
                </p>
              </div>
            </div>

            {/* Card 2 - Rapid Delivery */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">Rapid Delivery</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Fast MVP to scale delivery cycles that get you to market quickly and efficiently
                </p>
              </div>
            </div>

            {/* Card 3 - Full-stack Development */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">Full-stack Development</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Complete solutions under one roof with fast MVP to scale delivery cycles
                </p>
              </div>
            </div>

            {/* Card 4 - Global Reach */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">Global Reach</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Serving clients worldwide with 24/7 support and unwavering commitment
                </p>
              </div>
            </div>
          </div>
 <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Foundation</h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Three core principles that drive our success and define our approach to every project
              </p>
            </div>
            
          {/* Pillars Section - Grid Layout */}
          <div className="pillars bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {/* INNOVATE */}
              <div className="pillar group">
                <div className="bg-white rounded-2xl p-4 md:p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-orange-400 h-full flex flex-col">
                  <div className="flex flex-col items-center text-center flex-1">
                    <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors flex-shrink-0">
                      <svg className="w-8 h-8 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-orange-600 mb-3">INNOVATE</h3>
                    <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                      AI-driven transformation & creative problem solving that pushes boundaries
                    </p>
                  </div>
                </div>
              </div>
              {/* INTEGRATE */}
              <div className="pillar group">
                <div className="bg-white rounded-2xl p-4 md:p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-blue-400 h-full flex flex-col">
                  <div className="flex flex-col items-center text-center flex-1">
                    <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors flex-shrink-0">
                      <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-blue-600 mb-3">INTEGRATE</h3>
                    <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                      Seamless system & process connectivity that unifies your ecosystem
                    </p>
                  </div>
                </div>
              </div>
              {/* ELEVATE */}
              <div className="pillar group">
                <div className="bg-white rounded-2xl p-4 md:p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-purple-400 h-full flex flex-col">
                  <div className="flex flex-col items-center text-center flex-1">
                    <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors flex-shrink-0">
                      <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-purple-600 mb-3">ELEVATE</h3>
                    <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                      Business growth through smart tech adoption and strategic implementation
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;