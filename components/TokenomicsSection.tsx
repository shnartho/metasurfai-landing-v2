
import React from 'react';
import { ChevronRightIcon } from './icons/UtilIcons';

const TokenomicsSection: React.FC = () => {
  return (
    <section id="tokenomics" className="relative py-12">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-1/3 left-1/6 w-80 h-80 bg-gradient-to-r from-pink-500/10 to-rose-500/10 rounded-full blur-3xl animate-pulse"
          style={{
            animation: 'float 12s ease-in-out infinite'
          }}
        />
        <div
          className="absolute bottom-1/3 right-1/6 w-72 h-72 bg-gradient-to-l from-red-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse"
          style={{
            animation: 'float-reverse 15s ease-in-out infinite',
            animationDelay: '3s'
          }}
        />
        
        {/* Floating particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-pink-400/40 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 8 + 4}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className="text-center mb-8 sm:mb-12 animate-fadeInUp"
        >
          <div className="inline-block px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-gradient-to-r from-rose-500/20 to-pink-500/20 border border-rose-400/30 mb-4 sm:mb-6">
            <span className="text-rose-300 font-semibold text-xs sm:text-sm uppercase tracking-wide">Token Economy</span>
          </div>
          
          <h2 
            className="text-3xl sm:text-4xl md:text-6xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-br from-white via-rose-200 to-pink-400"
            style={{
              textShadow: '0 0 20px rgba(244,63,94,0.4), 4px 4px 12px rgba(0,0,0,0.8)',
              filter: 'drop-shadow(0 0 10px rgba(244,63,94,0.3))',
              transform: 'perspective(1000px) rotateX(10deg)',
              animation: 'float 8s ease-in-out infinite'
            }}
          >
            MSAI Tokenomics
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 sm:gap-12 overflow-hidden">
          {/* Animated 3D Diagram */}
          <div 
            className="relative w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 flex items-center justify-center animate-fadeInUp"
            style={{ animationDelay: '0.1s' }}
          >
            {/* Outer rotating ring */}
            <div 
              className="absolute w-full h-full border-4 border-dashed border-rose-500/40 rounded-full"
              style={{
                filter: 'drop-shadow(0 0 20px rgba(244, 63, 94, 0.5))',
                animation: 'rotate-slow 30s linear infinite'
              }}
            />
            
            {/* Inner rotating ring */}
            <div 
              className="absolute w-64 h-64 border-4 border-dashed border-pink-500/40 rounded-full"
              style={{
                filter: 'drop-shadow(0 0 15px rgba(236, 72, 153, 0.5))',
                animation: 'rotate-reverse 25s linear infinite'
              }}
            />

            {/* Action nodes */}
            <div 
              className="absolute top-0 left-1/2 -translate-x-1/2 -mt-8 text-center hover:scale-110 transition-transform duration-300"
              style={{
                filter: 'drop-shadow(0 0 10px rgba(244, 63, 94, 0.7))',
              }}
            >
              <div 
                className="w-28 p-3 bg-rose-900/70 border-2 border-rose-400/70 rounded-xl text-sm font-semibold backdrop-blur-lg hover:border-rose-400 hover:bg-rose-800/90 transition-all duration-300"
                style={{
                  boxShadow: '0 0 25px rgba(244, 63, 94, 0.4)'
                }}
              >
                Earn
              </div>
              <ChevronRightIcon className="w-6 h-6 absolute top-full left-1/2 -translate-x-1/2 mt-2 text-rose-400 rotate-90" />
            </div>

            <div 
              className="absolute right-0 top-1/2 -translate-y-1/2 -mr-8 text-center hover:scale-110 transition-transform duration-300"
              style={{
                filter: 'drop-shadow(0 0 10px rgba(236, 72, 153, 0.7))',
              }}
            >
              <div 
                className="w-28 p-3 bg-pink-900/70 border-2 border-pink-400/70 rounded-xl text-sm font-semibold backdrop-blur-lg hover:border-pink-400 hover:bg-pink-800/90 transition-all duration-300"
                style={{
                  boxShadow: '0 0 25px rgba(236, 72, 153, 0.4)'
                }}
              >
                Spend
              </div>
              <ChevronRightIcon className="w-6 h-6 absolute right-full top-1/2 -translate-y-1/2 mr-2 text-pink-400" />
            </div>

            <div 
              className="absolute bottom-0 left-1/2 -translate-x-1/2 -mb-8 text-center hover:scale-110 transition-transform duration-300"
              style={{
                filter: 'drop-shadow(0 0 10px rgba(244, 63, 94, 0.7))',
              }}
            >
              <div 
                className="w-28 p-3 bg-rose-900/70 border-2 border-rose-400/70 rounded-xl text-sm font-semibold backdrop-blur-lg hover:border-rose-400 hover:bg-rose-800/90 transition-all duration-300"
                style={{
                  boxShadow: '0 0 25px rgba(244, 63, 94, 0.4)'
                }}
              >
                Burn
              </div>
              <ChevronRightIcon className="w-6 h-6 absolute bottom-full left-1/2 -translate-x-1/2 mb-2 text-rose-400 -rotate-90" />
            </div>

            <div 
              className="absolute left-0 top-1/2 -translate-y-1/2 -ml-8 text-center hover:scale-110 transition-transform duration-300"
              style={{
                filter: 'drop-shadow(0 0 10px rgba(236, 72, 153, 0.7))',
              }}
            >
              <div 
                className="w-28 p-3 bg-pink-900/70 border-2 border-pink-400/70 rounded-xl text-sm font-semibold backdrop-blur-lg hover:border-pink-400 hover:bg-pink-800/90 transition-all duration-300"
                style={{
                  boxShadow: '0 0 25px rgba(236, 72, 153, 0.4)'
                }}
              >
                Value Growth
              </div>
              <ChevronRightIcon className="w-6 h-6 absolute left-full top-1/2 -translate-y-1/2 ml-2 text-pink-400 rotate-180" />
            </div>

            {/* Central hub */}
            <div 
              className="text-center bg-white/10 backdrop-blur-xl p-8 rounded-full border-2 border-white/20 relative z-10 hover:scale-105 transition-transform duration-300"
              style={{
                background: `
                  radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%),
                  linear-gradient(45deg, rgba(244,63,94,0.1), rgba(236,72,153,0.1))
                `,
                animation: 'glow-pulse 3s ease-in-out infinite'
              }}
            >
              <div 
                className="text-5xl font-bold text-rose-400 mb-2"
                style={{
                  textShadow: '0 0 20px rgba(244, 63, 94, 0.8)'
                }}
              >
                MSAI
              </div>
              <div className="text-lg font-semibold text-white">Ecosystem</div>
            </div>
          </div>

          {/* Enhanced Infographic */}
          <div 
            className="w-full max-w-md p-8 bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 space-y-8 hover:scale-102 transition-transform duration-300 animate-fadeInUp"
            style={{
              background: `
                linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%),
                radial-gradient(circle at 30% 30%, rgba(244,63,94,0.1) 0%, transparent 50%),
                radial-gradient(circle at 70% 70%, rgba(236,72,153,0.1) 0%, transparent 50%)
              `,
              boxShadow: `
                0 20px 40px rgba(0,0,0,0.3),
                inset 0 1px 0 rgba(255,255,255,0.3),
                0 0 20px rgba(244,63,94,0.1)
              `,
              animationDelay: '0.3s'
            }}
          >
            <div
              className="animate-fadeInUp"
              style={{ animationDelay: '0.5s' }}
            >
              <p className="text-sm text-rose-400 font-semibold">Total Supply</p>
              <p 
                className="text-3xl font-bold text-white"
                style={{
                  textShadow: '0 0 15px rgba(255,255,255,0.5)'
                }}
              >
                1,000,000,000 MSAI
              </p>
              <p className="text-xs text-gray-400">Built on Solana Layer 1 for speed and low fees.</p>
            </div>

            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-rose-400/30 to-transparent"></div>

            <div
              className="animate-fadeInUp"
              style={{ animationDelay: '0.7s' }}
            >
              <p className="text-sm text-pink-400 font-semibold mb-3">Core Use Cases</p>
              <ul className="space-y-2 text-gray-300">
                {[
                  "Viewer rewards for ad engagement",
                  "Primary currency for ad spend", 
                  "Staking for platform governance & rewards",
                  "Minting & trading NFT Ad Slots"
                ].map((item, index) => (
                  <li 
                    key={index}
                    className="flex items-start animate-slideInLeft"
                    style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                  >
                    <span className="text-rose-400 mr-3 mt-1 text-lg">&#x2713;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-rose-400/30 to-transparent"></div>

            <div
              className="animate-fadeInUp"
              style={{ animationDelay: '1.2s' }}
            >
              <p className="text-sm text-rose-400 font-semibold">Scarcity Mechanism</p>
              <p 
                className="text-xl font-bold text-white my-2"
                style={{
                  textShadow: '0 0 15px rgba(255,255,255,0.5)'
                }}
              >
                Deflationary Burn Policy
              </p>
              <p className="text-xs text-gray-400">A percentage of all ad spend is permanently burned, reducing total supply over time.</p>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes gradientFlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes titleFloat {
          0%, 100% { 
            transform: perspective(1500px) rotateX(20deg) rotateY(-5deg) translateZ(80px) translateY(0px);
          }
          25% { 
            transform: perspective(1500px) rotateX(25deg) rotateY(-3deg) translateZ(90px) translateY(-8px);
          }
          50% { 
            transform: perspective(1500px) rotateX(15deg) rotateY(-7deg) translateZ(100px) translateY(-12px);
          }
          75% { 
            transform: perspective(1500px) rotateX(22deg) rotateY(-2deg) translateZ(85px) translateY(-5px);
          }
        }
        
        @keyframes titleGlow {
          0%, 100% {
            text-shadow: 
              2px 2px 0px #1e293b,
              4px 4px 8px rgba(0, 0, 0, 0.8),
              0 0 10px rgba(56, 189, 248, 0.25);
          }
          50% {
            text-shadow: 
              2px 2px 0px #1e293b,
              4px 4px 8px rgba(0, 0, 0, 0.8),
              0 0 10px rgba(168, 85, 247, 0.35);
          }
        }
        
        .animate-titleGlow {
          animation: titleGlow 3s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-15px) rotate(2deg); }
          66% { transform: translateY(-8px) rotate(-1deg); }
        }
        
        @keyframes float-reverse {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(20px) scale(1.15); }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default TokenomicsSection;
