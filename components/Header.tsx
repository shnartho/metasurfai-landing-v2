
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 animate-fadeInUp">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className={`flex items-center justify-between h-20 px-6 rounded-b-3xl border-b transition-all duration-500 ${
            scrolled 
              ? 'bg-black/40 backdrop-blur-2xl border-white/20 shadow-2xl shadow-cyan-500/10' 
              : 'bg-black/20 backdrop-blur-lg border-white/10'
          }`}
          style={{
            background: scrolled 
              ? `
                linear-gradient(135deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 100%),
                radial-gradient(circle at 50% 0%, rgba(56,189,248,0.1) 0%, transparent 70%)
              `
              : `
                linear-gradient(135deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 100%),
                radial-gradient(circle at 50% 0%, rgba(56,189,248,0.05) 0%, transparent 70%)
              `,
            boxShadow: scrolled 
              ? '0 20px 40px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.2), 0 0 20px rgba(56,189,248,0.1)'
              : '0 10px 30px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1)'
          }}
        >
          {/* Logo with 3D effect */}
          <div 
            className="text-2xl font-bold tracking-wider text-white cursor-pointer hover:scale-105 transform transition-transform duration-300"
            style={{
              textShadow: `
                0 0 20px rgba(56, 189, 248, 0.8),
                0 0 40px rgba(168, 85, 247, 0.4),
                2px 2px 0px rgba(0, 0, 0, 0.8),
                4px 4px 8px rgba(0, 0, 0, 0.6)
              `,
              transform: 'perspective(500px) rotateX(5deg)',
            }}
          >
            MetaSurf<span className="text-sky-400">AI</span>
          </div>

          {/* Navigation with enhanced effects */}
          <nav className="hidden md:flex items-center space-x-8">
            {['Features', 'Tokenomics', 'Roadmap'].map((item, index) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative text-gray-300 font-medium transition-all duration-300 group hover:scale-105 hover:text-white animate-fadeInUp"
                style={{
                  animationDelay: `${0.1 * index}s`
                }}
              >
                <span className="relative z-10">
                  {item}
                </span>
                
                {/* Animated underline */}
                <div
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-100 transform scale-x-0 group-hover:scale-x-100 transition-all duration-300"
                  style={{
                    transformOrigin: 'left center'
                  }}
                />
                
                {/* Glow effect */}
                <div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                  style={{
                    filter: 'blur(8px)',
                    transform: 'scale(1.2)'
                  }}
                />
              </a>
            ))}
          </nav>

          {/* CTA Button with enhanced 3D effects */}
          <a
            href="https://app.metasurfai.com"
            target="_blank"
            rel="noopener noreferrer"
            className="relative px-8 py-3 text-white font-semibold rounded-full overflow-hidden group transform hover:scale-105 transition-all duration-300 animate-fadeInUp"
            style={{
              background: 'linear-gradient(135deg, #0ea5e9 0%, #a855f7 100%)',
              boxShadow: `
                0 0 25px rgba(56, 189, 248, 0.6),
                inset 0 1px 0 rgba(255, 255, 255, 0.3),
                0 10px 20px rgba(0, 0, 0, 0.3)
              `,
              animationDelay: '0.3s'
            }}
          >
            {/* Animated background gradient */}
            <div
              className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
            
            {/* Shine effect */}
            <div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-600"
            />
            
            <span className="relative z-10">Launch App</span>
          </a>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-white hover:scale-110 transform transition-transform duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
