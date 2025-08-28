
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 bg-black/20 backdrop-blur-lg border-b border-white/10 rounded-b-2xl px-6">
          <div className="text-2xl font-bold tracking-wider text-white">
            MetaSurf<span className="text-sky-400">AI</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-300 hover:text-white transition-colors duration-300">Features</a>
            <a href="#tokenomics" className="text-gray-300 hover:text-white transition-colors duration-300">Tokenomics</a>
            <a href="#roadmap" className="text-gray-300 hover:text-white transition-colors duration-300">Roadmap</a>
          </nav>
          <a
            href="https://app.metasurfai.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 text-white font-semibold rounded-full bg-gradient-to-r from-sky-500 to-purple-600 hover:from-sky-400 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 shadow-[0_0_15px_rgba(56,189,248,0.6)] hover:shadow-[0_0_25px_rgba(56,189,248,0.8)]"
          >
            Launch App
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
