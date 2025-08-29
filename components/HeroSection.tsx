
import React, { Suspense } from 'react';
import { Crypto3DScene } from './icons/CryptoIcons';

const Text3DEffect: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <div
    className={`${className} animate-fadeInUp metasurf-glow`}
    style={{
      textShadow: `
        0 0 10px rgba(56, 189, 248, 0.8),
        0 0 20px rgba(56, 189, 248, 0.6),
        0 0 30px rgba(56, 189, 248, 0.4),
        0 0 40px rgba(56, 189, 248, 0.2),
        2px 2px 0px rgba(0, 0, 0, 0.8),
        4px 4px 0px rgba(0, 0, 0, 0.6),
        6px 6px 0px rgba(0, 0, 0, 0.4)
      `,
      transform: 'perspective(500px) rotateX(15deg)',
      animation: 'float 6s ease-in-out infinite, metasurfGlow 4s ease-in-out infinite',
    }}
  >
    {children}
  </div>
);

const HeroSection: React.FC = () => {
  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* 3D Background Scene */}
        <div className="absolute inset-0 z-0">
          <Suspense fallback={null}>
            <Crypto3DScene className="w-full h-full" />
          </Suspense>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0">
          {/* Animated gradient orbs */}
          <div
            className="absolute top-[10%] left-[5%] w-32 h-32 bg-gradient-to-r from-cyan-400/30 to-blue-600/30 rounded-full blur-2xl animate-float"
            style={{ animationDelay: '0s' }}
          />
          <div
            className="absolute top-[20%] right-[10%] w-40 h-40 bg-gradient-to-r from-purple-500/30 to-pink-600/30 rounded-full blur-2xl animate-float-reverse"
            style={{ animationDelay: '1s' }}
          />
          <div
            className="absolute bottom-[15%] left-[15%] w-36 h-36 bg-gradient-to-r from-emerald-400/30 to-teal-600/30 rounded-full blur-2xl animate-float"
            style={{ animationDelay: '2s' }}
          />

          {/* Floating particles */}
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400/60 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 10 + 5}s`,
              }}
            />
          ))}
        </div>
        
        <div className="relative z-10 text-center px-4">
          <Text3DEffect className="text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-cyan-200 to-blue-400">
            MetaSurfAI
          </Text3DEffect>
          
          <div 
            className="mt-8 text-lg md:text-2xl text-gray-300 max-w-4xl mx-auto animate-fadeInUp"
            style={{
              textShadow: '0 0 15px rgba(255, 255, 255, 0.3), 2px 2px 4px rgba(0, 0, 0, 0.8)',
              animationDelay: '0.5s'
            }}
          >
            Revolutionizing the <span className="text-yellow-300 font-bold">$1.2 Trillion</span> Advertising Industry. <br />
            <span className="text-cyan-300 font-semibold">Where Users Earn, Advertisers Win, and Everyone Profits.</span>
            <br />
            <span className="text-purple-300 font-medium text-lg">
              Join the Web3 advertising revolution that rewards engagement.
            </span>
          </div>
          
          <div 
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 animate-fadeInUp"
            style={{ animationDelay: '1s' }}
          >
            <a
              href="https://app.metasurfai.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-full sm:w-auto px-10 py-5 text-white font-bold rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 overflow-hidden transform hover:scale-105 transition-all duration-300"
              style={{
                boxShadow: "0 0 25px rgba(56, 189, 248, 0.6), inset 0 0 20px rgba(255, 255, 255, 0.1)"
              }}
            >
              <div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-pulse"
              />
              <span className="relative z-10">Launch App</span>
            </a>
            
            <a
              href="https://whitepaper.metasurfai.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full sm:w-auto px-10 py-5 text-white font-semibold rounded-full bg-white/10 backdrop-blur-md border border-white/30 relative overflow-hidden transform hover:scale-105 transition-all duration-300"
              style={{
                boxShadow: "0 0 20px rgba(255, 255, 255, 0.1), inset 0 0 20px rgba(255, 255, 255, 0.05)"
              }}
            >
              <div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent group-hover:animate-pulse"
              />
              <span className="relative z-10">View Whitepaper</span>
            </a>
          </div>

          {/* Scroll indicator */}
          <div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-fadeInUp"
            style={{ animationDelay: '1.5s' }}
          >
            <div
              className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center animate-pulse"
            >
              <div
                className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"
              />
            </div>
          </div>
        </div>
      </section>
      
      <style>{`
        @keyframes metasurfGlow {
          0% {
            text-shadow: 
              0 0 8px rgba(56, 189, 248, 0.4),
              0 0 16px rgba(56, 189, 248, 0.3),
              0 0 24px rgba(56, 189, 248, 0.2),
              0 0 32px rgba(56, 189, 248, 0.1),
              2px 2px 0px rgba(0, 0, 0, 0.8),
              4px 4px 0px rgba(0, 0, 0, 0.6),
              6px 6px 0px rgba(0, 0, 0, 0.4);
            filter: brightness(1) saturate(1);
          }
          25% {
            text-shadow: 
              0 0 12px rgba(56, 189, 248, 0.6),
              0 0 24px rgba(56, 189, 248, 0.4),
              0 0 36px rgba(56, 189, 248, 0.3),
              0 0 48px rgba(56, 189, 248, 0.2),
              0 0 60px rgba(168, 85, 247, 0.25),
              2px 2px 0px rgba(0, 0, 0, 0.8),
              4px 4px 0px rgba(0, 0, 0, 0.6),
              6px 6px 0px rgba(0, 0, 0, 0.4);
            filter: brightness(1.05) saturate(1.05);
          }
          50% {
            text-shadow: 
              0 0 16px rgba(56, 189, 248, 0.7),
              0 0 32px rgba(56, 189, 248, 0.5),
              0 0 48px rgba(56, 189, 248, 0.4),
              0 0 64px rgba(56, 189, 248, 0.3),
              0 0 80px rgba(168, 85, 247, 0.3),
              0 0 96px rgba(16, 185, 129, 0.2),
              2px 2px 0px rgba(0, 0, 0, 0.8),
              4px 4px 0px rgba(0, 0, 0, 0.6),
              6px 6px 0px rgba(0, 0, 0, 0.4);
            filter: brightness(1.1) saturate(1.1);
          }
          75% {
            text-shadow: 
              0 0 12px rgba(56, 189, 248, 0.6),
              0 0 24px rgba(56, 189, 248, 0.4),
              0 0 36px rgba(56, 189, 248, 0.3),
              0 0 48px rgba(56, 189, 248, 0.2),
              0 0 60px rgba(168, 85, 247, 0.25),
              2px 2px 0px rgba(0, 0, 0, 0.8),
              4px 4px 0px rgba(0, 0, 0, 0.6),
              6px 6px 0px rgba(0, 0, 0, 0.4);
            filter: brightness(1.05) saturate(1.05);
          }
          100% {
            text-shadow: 
              0 0 8px rgba(56, 189, 248, 0.4),
              0 0 16px rgba(56, 189, 248, 0.3),
              0 0 24px rgba(56, 189, 248, 0.2),
              0 0 32px rgba(56, 189, 248, 0.1),
              2px 2px 0px rgba(0, 0, 0, 0.8),
              4px 4px 0px rgba(0, 0, 0, 0.6),
              6px 6px 0px rgba(0, 0, 0, 0.4);
            filter: brightness(1) saturate(1);
          }
        }
        
        .metasurf-glow {
          animation: float 6s ease-in-out infinite, metasurfGlow 4s ease-in-out infinite;
        }
      `}</style>
    </>
  );
};

export default HeroSection;
