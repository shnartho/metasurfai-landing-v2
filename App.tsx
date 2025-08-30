
import React, { Suspense } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import IndustryStatsSection from './components/IndustryStatsSection';
import TrustedBySection from './components/TrustedBySection';
import LiveMetricsSection from './components/LiveMetricsSection';
import MarketComparisonSection from './components/MarketComparisonSection';

import TokenomicsSection from './components/TokenomicsSection';
import RoadmapSection from './components/RoadmapSection';
import InvestmentCTASection from './components/InvestmentCTASection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-[#01000B] text-gray-200 font-sans overflow-x-hidden relative max-w-[100vw]">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
          
          body {
            font-family: 'Inter', sans-serif;
            overflow-x: hidden;
            max-width: 100vw;
          }
          
          * {
            box-sizing: border-box;
          }
          
          @keyframes rotate-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes rotate-reverse {
            from { transform: rotate(0deg); }
            to { transform: rotate(-360deg); }
          }
          @keyframes glow-pulse {
            0%, 100% { 
              box-shadow: 0 0 20px rgba(56, 189, 248, 0.3), 0 0 40px rgba(168, 85, 247, 0.2);
              transform: scale(1);
            }
            50% { 
              box-shadow: 0 0 30px rgba(168, 85, 247, 0.4), 0 0 50px rgba(56, 189, 248, 0.3);
              transform: scale(1.05);
            }
          }
          @keyframes slideInLeft {
            from {
              opacity: 0;
              transform: translateX(-20px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          .animate-slideInLeft {
            animation: slideInLeft 0.6s ease-out forwards;
          }
          .hover\\:scale-102:hover {
            transform: scale(1.02);
          }
          
          @keyframes float {
            0% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(5deg); }
            100% { transform: translateY(0px) rotate(0deg); }
          }
          @keyframes float-reverse {
            0% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(20px) rotate(-5deg); }
            100% { transform: translateY(0px) rotate(0deg); }
          }
          @keyframes subtle-glow {
            0%, 100% { text-shadow: 0 0 8px rgba(0, 192, 255, 0.7), 0 0 16px rgba(192, 0, 255, 0.7); }
            50% { text-shadow: 0 0 12px rgba(0, 192, 255, 0.9), 0 0 24px rgba(192, 0, 255, 0.9); }
          }
          @keyframes pulse-glow {
            0%, 100% { box-shadow: 0 0 10px #0ea5e9, 0 0 20px #0ea5e9; }
            50% { box-shadow: 0 0 20px #0ea5e9, 0 0 40px #0ea5e9; }
          }
          @keyframes cosmic-drift {
            0% { transform: translateX(0) translateY(0) rotate(0deg); }
            25% { transform: translateX(50px) translateY(-30px) rotate(90deg); }
            50% { transform: translateX(0) translateY(-60px) rotate(180deg); }
            75% { transform: translateX(-50px) translateY(-30px) rotate(270deg); }
            100% { transform: translateX(0) translateY(0) rotate(360deg); }
          }
          @keyframes neural-pulse {
            0%, 100% { 
              opacity: 0.3;
              transform: scale(1);
              filter: hue-rotate(0deg);
            }
            50% { 
              opacity: 0.8;
              transform: scale(1.1);
              filter: hue-rotate(180deg);
            }
          }
          @keyframes fadeInUp {
            0% {
              opacity: 0;
              transform: translateY(30px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          
          .animate-float { animation: float 6s ease-in-out infinite; }
          .animate-float-reverse { animation: float-reverse 8s ease-in-out infinite; }
          .text-glow { animation: subtle-glow 4s ease-in-out infinite; }
          .pulse-glow-node { animation: pulse-glow 3s ease-in-out infinite; }
          .cosmic-drift { animation: cosmic-drift 20s linear infinite; }
          .neural-pulse { animation: neural-pulse 4s ease-in-out infinite; }
          .animate-fadeInUp { animation: fadeInUp 1s ease-out forwards; }
          
          /* Custom scrollbar */
          ::-webkit-scrollbar {
            width: 8px;
          }
          ::-webkit-scrollbar-track {
            background: rgba(0, 0, 0, 0.3);
          }
          ::-webkit-scrollbar-thumb {
            background: linear-gradient(45deg, #0ea5e9, #a855f7);
            border-radius: 4px;
          }
          ::-webkit-scrollbar-thumb:hover {
            background: linear-gradient(45deg, #38bdf8, #c084fc);
          }
          
          /* Enhanced glass morphism */
          .glass-morphism {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            box-shadow: 
              0 20px 40px rgba(0, 0, 0, 0.4),
              inset 0 1px 0 rgba(255, 255, 255, 0.3);
          }
          
          /* 3D Transform utilities */
          .perspective-1000 { perspective: 1000px; }
          .transform-3d { transform-style: preserve-3d; }
          
          /* Custom gradient animations */
          .gradient-shift {
            background: linear-gradient(-45deg, #0ea5e9, #a855f7, #06b6d4, #8b5cf6);
            background-size: 400% 400%;
            animation: gradientShift 15s ease infinite;
          }
        `}
      </style>

      {/* Enhanced background decoration with 3D effects */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        {/* Cosmic background elements */}
        <div 
          className="absolute top-[-20%] left-[-10%] w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: '0s' }}
        />
        <div 
          className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-sky-500/20 rounded-full blur-3xl animate-float-reverse"
          style={{ animationDelay: '5s' }}
        />
        <div 
          className="absolute top-[30%] right-[5%] w-72 h-72 bg-emerald-500/15 rounded-full blur-3xl animate-float"
          style={{ animationDelay: '10s' }}
        />

        {/* Neural network pattern */}
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400/40 rounded-full neural-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}

        {/* Floating geometric shapes */}
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={`shape-${i}`}
            className="absolute w-4 h-4 border border-cyan-400/30 cosmic-drift"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              clipPath: i % 3 === 0 ? 'polygon(50% 0%, 0% 100%, 100% 100%)' : 
                       i % 3 === 1 ? 'polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)' :
                       'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
              animationDelay: `${i * 2}s`,
              animationDuration: `${15 + i * 2}s`
            }}
          />
        ))}

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div 
            style={{
              backgroundImage: `
                linear-gradient(rgba(56,189,248,0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(56,189,248,0.3) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }}
            className="w-full h-full"
          />
        </div>
      </div>

      {/* Main content with enhanced glass morphism */}
      <main className="relative z-10">
        <Header />
        
        <Suspense fallback={
          <div className="min-h-screen flex items-center justify-center">
            <div
              className="w-16 h-16 border-4 border-cyan-400/30 border-t-cyan-400 rounded-full animate-spin"
            />
          </div>
        }>
          <HeroSection />
        </Suspense>
        
        <div className="animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
          <MarketComparisonSection />
        </div>
        
        <div className="animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
          <IndustryStatsSection />
        </div>
        
        <div className="animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
          <LiveMetricsSection />
        </div>
        
        <div className="animate-fadeInUp" style={{ animationDelay: '0.35s' }}>
          <TrustedBySection />
        </div>
        
        <div className="px-4 md:px-8 max-w-7xl mx-auto space-y-16 md:space-y-20 py-16 md:py-20">
          <div className="animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
            <TokenomicsSection />
          </div>
          
          <div className="animate-fadeInUp" style={{ animationDelay: '0.7s' }}>
            <RoadmapSection />
          </div>
          
          <div className="animate-fadeInUp" style={{ animationDelay: '0.75s' }}>
            <InvestmentCTASection />
          </div>
        </div>
        
        <Footer />
      </main>
    </div>
  );
};

export default App;
