
import React from 'react';
import { BitcoinIcon, EthereumIcon, SolanaIcon } from './icons/CryptoIcons';

const CryptoLogo: React.FC<{
  icon: React.ReactNode;
  className: string;
  animationDuration: string;
}> = ({ icon, className, animationDuration }) => (
  <div className={`absolute text-white/10 ${className}`} style={{ animation: `float ${animationDuration} ease-in-out infinite` }}>
    {icon}
  </div>
);

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <CryptoLogo icon={<BitcoinIcon className="w-24 h-24" />} className="top-[15%] left-[10%]" animationDuration="10s" />
        <CryptoLogo icon={<EthereumIcon className="w-32 h-32" />} className="top-[20%] right-[15%]" animationDuration="12s" />
        <CryptoLogo icon={<SolanaIcon className="w-20 h-20" />} className="bottom-[20%] left-[20%]" animationDuration="9s" />
        <CryptoLogo icon={<BitcoinIcon className="w-16 h-16" />} className="bottom-[15%] right-[25%]" animationDuration="14s" />
        <CryptoLogo icon={<EthereumIcon className="w-12 h-12" />} className="top-[50%] left-[30%]" animationDuration="8s" />
      </div>
      
      <div className="relative z-10 text-center px-4">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400 text-glow"
            style={{ textShadow: '0 0 20px rgba(255, 255, 255, 0.3)' }}>
          MetaSurfAI
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto">
          The Future of Decentralized, AI-Powered Advertising. <br />
          Engage, Earn, and Grow in the Web3 Ecosystem.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#"
            className="w-full sm:w-auto px-8 py-4 text-white font-bold rounded-full bg-gradient-to-r from-sky-500 to-purple-600 hover:from-sky-400 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(56,189,248,0.7)] hover:shadow-[0_0_30px_rgba(56,189,248,0.9)]"
          >
            Launch App
          </a>
          <a
            href="#"
            className="w-full sm:w-auto px-8 py-4 text-white font-semibold rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
          >
            View Whitepaper
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
