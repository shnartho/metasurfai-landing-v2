
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import DifferencesSection from './components/DifferencesSection';
import FeaturesSection from './components/FeaturesSection';
import TokenomicsSection from './components/TokenomicsSection';
import RoadmapSection from './components/RoadmapSection';
import CommunitySection from './components/CommunitySection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-[#01000B] text-gray-200 font-sans overflow-x-hidden">
      <style>
        {`
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
          .animate-float { animation: float 6s ease-in-out infinite; }
          .animate-float-reverse { animation: float-reverse 8s ease-in-out infinite; }
          .text-glow { animation: subtle-glow 4s ease-in-out infinite; }
          .pulse-glow-node { animation: pulse-glow 3s ease-in-out infinite; }
        `}
      </style>

      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-20%] left-[-10%] w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-sky-500/20 rounded-full blur-3xl animate-float-reverse"></div>
        <div className="absolute top-[30%] right-[5%] w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <main className="relative z-10">
        <Header />
        <HeroSection />
        <div className="px-4 md:px-8 max-w-7xl mx-auto space-y-24 md:space-y-32 py-24 md:py-32">
          <DifferencesSection />
          <FeaturesSection />
          <TokenomicsSection />
          <RoadmapSection />
          <CommunitySection />
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default App;
