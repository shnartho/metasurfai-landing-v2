
import React, { useState, useEffect, useRef } from 'react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          
          // Update scrolled state for background effects
          setScrolled(currentScrollY > 50);
          
          // Handle visibility based on scroll direction
          if (currentScrollY <= 10) {
            // Always show header at top of page
            setIsVisible(true);
          } else {
            const scrollingDown = currentScrollY > lastScrollY.current;
            const scrollingUp = currentScrollY < lastScrollY.current;
            
            if (scrollingDown && currentScrollY > 100) {
              // Scrolling down - hide header
              setIsVisible(false);
            } else if (scrollingUp) {
              // Scrolling up - show header
              setIsVisible(true);
            }
          }
          
          lastScrollY.current = currentScrollY;
          ticking.current = false;
        });
        
        ticking.current = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 transition-transform duration-500 ease-in-out"
      style={{
        transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
      }}
    >
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
            className="text-2xl font-bold tracking-wider cursor-pointer hover:scale-105 transform transition-transform duration-300"
            style={{
              transform: 'perspective(500px) rotateX(5deg)',
            }}
          >
            <span 
              className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500"
              style={{
                textShadow: '0 0 10px rgba(236, 72, 153, 0.5), 0 0 20px rgba(59, 130, 246, 0.3)',
                filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))'
              }}
            >
              MetaSurfAI
            </span>
          </div>



          {/* CTA Button with enhanced 3D effects */}
          <a
            href="https://app.metasurfai.com"
            target="_blank"
            rel="noopener noreferrer"
            className="relative px-4 sm:px-8 py-2 sm:py-3 text-sm sm:text-base text-white font-semibold rounded-full overflow-hidden group transform hover:scale-105 transition-all duration-300 animate-fadeInUp ml-4"
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
        </div>
      </div>
    </header>
  );
};

export default Header;
