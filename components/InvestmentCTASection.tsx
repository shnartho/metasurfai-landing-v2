import React from 'react';

const InvestmentCTASection: React.FC = () => {
  return (
    <section className="relative py-16 overflow-hidden">
      {/* Dramatic background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-900/20 via-cyan-900/20 to-emerald-900/20" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-yellow-500/15 to-orange-500/15 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-l from-cyan-500/15 to-purple-500/15 rounded-full blur-3xl animate-pulse" />
        
        {/* Money rain effect */}
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-yellow-400/30 text-2xl animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 8 + 4}s`
            }}
          >
            💰
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        {/* Main heading */}
        <div className="animate-fadeInUp mb-8">
          <h2 
            className="text-5xl md:text-7xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-br from-yellow-300 via-orange-300 to-red-400"
            style={{
              textShadow: '0 0 25px rgba(251,191,36,0.5), 6px 6px 15px rgba(0,0,0,0.9)',
              filter: 'drop-shadow(0 0 12px rgba(251,191,36,0.4))',
              transform: 'perspective(1000px) rotateX(10deg)',
              animation: 'float 6s ease-in-out infinite, glow 3s ease-in-out infinite'
            }}
          >
            Don't Miss the Next Google
          </h2>
        </div>

        {/* Investment stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
          <div className="p-8 rounded-3xl bg-gradient-to-br from-purple-500/20 to-indigo-500/20 border border-purple-400/30">
            <div className="text-5xl mb-4">🪙</div>
            <div className="text-3xl font-bold text-purple-300 mb-2">Pre-ICO</div>
            <div className="text-gray-300">Initial Coin Offering launch</div>
          </div>
          
          <div className="p-8 rounded-3xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-400/30">
            <div className="text-5xl mb-4">🤝</div>
            <div className="text-3xl font-bold text-blue-300 mb-2">Exceptional</div>
            <div className="text-gray-300">Strategic partnerships secured</div>
          </div>
          
          <div className="p-8 rounded-3xl bg-gradient-to-br from-emerald-500/20 to-green-500/20 border border-emerald-400/30">
            <div className="text-5xl mb-4">⚡</div>
            <div className="text-3xl font-bold text-emerald-300 mb-2">Innovation</div>
            <div className="text-gray-300">Cutting-edge Web3 technology</div>
          </div>
        </div>

        {/* Urgency message */}
        <div className="mb-8 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
          <div className="inline-block p-6 rounded-2xl bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-400/30">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="text-4xl animate-bounce">⏰</div>
              <h3 className="text-2xl font-bold text-white">Limited Time Opportunity</h3>
            </div>
            <p className="text-lg text-gray-300">
              Google was $85 in 2004. Meta was $38 in 2012. Amazon was $94 in 2009. <br />
              <span className="text-yellow-300 font-bold">Smart money moves early. Will you?</span>
            </p>
          </div>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col items-center justify-center gap-6 sm:gap-8 mb-8 sm:mb-12 animate-fadeInUp" style={{ animationDelay: '0.9s' }}>
          {/* Main action buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <a
              href="https://app.metasurfai.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-full sm:w-auto px-6 sm:px-12 py-3 sm:py-6 text-base sm:text-xl font-bold rounded-full bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 text-white overflow-hidden transform hover:scale-110 transition-all duration-300"
              style={{
                boxShadow: "0 0 40px rgba(251,191,36,0.8), inset 0 0 30px rgba(255,255,255,0.2)"
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:animate-pulse" />
              <span className="relative z-10">🚀 JOIN THE REVOLUTION</span>
            </a>
            
            <a
              href="https://whitepaper.metasurfai.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full sm:w-auto px-6 sm:px-12 py-3 sm:py-6 text-base sm:text-xl font-semibold rounded-full bg-white/10 backdrop-blur-md border-2 border-white/40 text-white relative overflow-hidden transform hover:scale-110 transition-all duration-300"
              style={{
                boxShadow: "0 0 30px rgba(255,255,255,0.2)"
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent group-hover:animate-pulse" />
              <span className="relative z-10">📋 READ WHITEPAPER</span>
            </a>
          </div>

          {/* Social media buttons */}
          <div className="flex flex-col items-center gap-4">
            <h3 className="text-lg font-semibold text-gray-300">Join Our Community</h3>
            <div className="flex items-center justify-center gap-4">
              <a
                href="https://discord.gg/D2pwuVC3zf"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-400/30 text-white hover:scale-110 transition-all duration-300"
                style={{
                  boxShadow: "0 0 20px rgba(99,102,241,0.3)"
                }}
                title="Join our Discord"
              >
                <div className="w-6 h-6 flex items-center justify-center">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.211.375-.445.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                  </svg>
                </div>
              </a>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-400/30 text-white hover:scale-110 transition-all duration-300 opacity-50 cursor-not-allowed"
                style={{
                  boxShadow: "0 0 20px rgba(59,130,246,0.3)"
                }}
                title="Telegram (Coming Soon)"
              >
                <div className="w-6 h-6 flex items-center justify-center">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="m9.417 15.181-.397 5.584c.568 0 .814-.244 1.109-.537l2.663-2.545 5.518 4.041c1.012.564 1.725.267 1.998-.931L23.93 3.821l.001-.001c.321-1.496-.541-2.081-1.527-1.714l-21.29 8.151c-1.453.564-1.431 1.374-.247 1.741l5.443 1.693L18.953 5.78c.595-.394 1.136-.176.691.218z"/>
                  </svg>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/company/metasurfai"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 rounded-full bg-gradient-to-r from-blue-600/20 to-blue-700/20 border border-blue-500/30 text-white hover:scale-110 transition-all duration-300"
                style={{
                  boxShadow: "0 0 20px rgba(37,99,235,0.3)"
                }}
                title="Follow us on LinkedIn"
              >
                <div className="w-6 h-6 flex items-center justify-center">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
              </a>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 rounded-full bg-gradient-to-r from-gray-700/20 to-black/20 border border-gray-600/30 text-white hover:scale-110 transition-all duration-300 opacity-50 cursor-not-allowed"
                style={{
                  boxShadow: "0 0 20px rgba(107,114,128,0.3)"
                }}
                title="X (Twitter) - Coming Soon"
              >
                <div className="w-6 h-6 flex items-center justify-center">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>


      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-20px) scale(1.05); }
        }
        
        @keyframes glow {
          0%, 100% {
            text-shadow: 0 0 25px rgba(251,191,36,0.5), 6px 6px 15px rgba(0,0,0,0.9);
          }
          50% {
            text-shadow: 0 0 35px rgba(251,191,36,0.6), 6px 6px 15px rgba(0,0,0,0.9);
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default InvestmentCTASection;