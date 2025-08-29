
import React from 'react';

// Enhanced 2D Crypto Scene with CSS 3D transforms
export const Crypto3DScene: React.FC<{ className?: string }> = ({ className }) => {
  const cryptoIcons = [
    { icon: BitcoinIcon, color: '#f7931a', name: 'bitcoin', position: { x: '15%', y: '20%' }, scale: 1.2, delay: 0 },
    { icon: EthereumIcon, color: '#627eea', name: 'ethereum', position: { x: '75%', y: '15%' }, scale: 1.1, delay: 0.5 },
    { icon: SolanaIcon, color: '#00d18c', name: 'solana', position: { x: '10%', y: '70%' }, scale: 1.0, delay: 1 },
    { icon: BNBIcon, color: '#f3ba2f', name: 'bnb', position: { x: '80%', y: '65%' }, scale: 0.9, delay: 1.5 },
    { icon: CardanoIcon, color: '#0033ad', name: 'cardano', position: { x: '50%', y: '85%' }, scale: 1.0, delay: 2 },
    { icon: PolygonIcon, color: '#8247e5', name: 'polygon', position: { x: '85%', y: '40%' }, scale: 0.8, delay: 2.5 },
    { icon: BitcoinIcon, color: '#f7931a', name: 'bitcoin-2', position: { x: '25%', y: '50%' }, scale: 0.7, delay: 3 },
    { icon: EthereumIcon, color: '#627eea', name: 'ethereum-2', position: { x: '60%', y: '25%' }, scale: 0.6, delay: 3.5 },
  ];

  return (
    <div className={`${className} absolute inset-0 pointer-events-none overflow-hidden`}>
      <style>
        {`
          @keyframes crypto-float {
            0% { 
              transform: translateY(0px) translateX(0px) rotateY(0deg) rotateZ(0deg) scale(var(--scale));
              opacity: 0.1;
            }
            25% { 
              transform: translateY(-30px) translateX(15px) rotateY(90deg) rotateZ(45deg) scale(calc(var(--scale) * 1.2));
              opacity: 0.4;
            }
            50% { 
              transform: translateY(10px) translateX(-10px) rotateY(180deg) rotateZ(90deg) scale(calc(var(--scale) * 0.8));
              opacity: 0.15;
            }
            75% { 
              transform: translateY(-20px) translateX(8px) rotateY(270deg) rotateZ(135deg) scale(calc(var(--scale) * 1.1));
              opacity: 0.35;
            }
            100% { 
              transform: translateY(0px) translateX(0px) rotateY(360deg) rotateZ(180deg) scale(var(--scale));
              opacity: 0.1;
            }
          }
          
          @keyframes particle-drift {
            0% { 
              transform: translateY(0px) translateX(0px) scale(0);
              opacity: 0;
            }
            25% { 
              transform: translateY(-50px) translateX(30px) scale(1.5);
              opacity: 0.8;
            }
            50% { 
              transform: translateY(25px) translateX(-20px) scale(0.5);
              opacity: 0.3;
            }
            75% { 
              transform: translateY(-40px) translateX(15px) scale(1);
              opacity: 0.6;
            }
            100% { 
              transform: translateY(0px) translateX(0px) scale(0);
              opacity: 0;
            }
          }
          
          .crypto-icon {
            animation: crypto-float var(--duration) ease-in-out infinite;
            animation-delay: var(--delay);
            transform-style: preserve-3d;
            perspective: 1000px;
            filter: drop-shadow(0 0 20px var(--glow-color));
          }
          
          .particle {
            animation: particle-drift var(--duration) ease-in-out infinite;
            animation-delay: var(--delay);
          }
        `}
      </style>
      
      {cryptoIcons.map((crypto, index) => (
        <div
          key={`${crypto.name}-${index}`}
          className="absolute crypto-icon hover:scale-125 transition-transform duration-300"
          style={{
            left: crypto.position.x,
            top: crypto.position.y,
            '--scale': crypto.scale,
            '--duration': `${8 + index * 0.5}s`,
            '--delay': `${crypto.delay}s`,
            '--glow-color': `${crypto.color}40`,
          } as React.CSSProperties}
        >
          <crypto.icon 
            className={`w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 transition-all duration-300`}
            style={{ 
              color: crypto.color,
              filter: `drop-shadow(0 0 15px ${crypto.color}40)`,
            }}
          />
        </div>
      ))}

      {/* Additional floating elements */}
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={`particle-${i}`}
          className="absolute w-2 h-2 bg-cyan-400/30 rounded-full particle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            '--duration': `${Math.random() * 15 + 10}s`,
            '--delay': `${Math.random() * 5}s`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
};

// Legacy 2D Icons with enhanced effects
export const BitcoinIcon: React.FC<{className?: string; style?: React.CSSProperties}> = ({ className, style }) => (
  <svg className={className} style={style} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm2.84 13.38h-1.42v2.36h-2.1v-2.36H9.58v-1.79h1.74v-2.82c0-1.14.5-2.23 1.58-2.58l.84-.28v1.65l-.3.08c-.37.1-.6.38-.6.78v2.17h2.08l-.28 1.79z"/>
  </svg>
);

export const EthereumIcon: React.FC<{className?: string; style?: React.CSSProperties}> = ({ className, style }) => (
  <svg className={className} style={style} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L3 11.5l9 9.5 9-9.5L12 2zm0 2.69L18.31 11.5 12 16.57 5.69 11.5 12 4.69zM12 17.63l-6.31-4.96L12 20.19l6.31-7.52L12 17.63z"/>
  </svg>
);

export const SolanaIcon: React.FC<{className?: string; style?: React.CSSProperties}> = ({ className, style }) => (
  <svg className={className} style={style} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.69 4.69a1.5 1.5 0 00-2.12 0L.19 7.07a1.5 1.5 0 000 2.12l4.5 4.5a1.5 1.5 0 002.12 0L9.19 11.3a1.5 1.5 0 000-2.12l-4.5-4.5zm0 9.62a1.5 1.5 0 00-2.12 0l-2.38 2.38a1.5 1.5 0 000 2.12L2.57 21.2a1.5 1.5 0 002.12 0l2.38-2.38a1.5 1.5 0 000-2.12l-2.38-2.38zm9.62-9.62a1.5 1.5 0 00-2.12 0L9.81 7.07a1.5 1.5 0 000 2.12l4.5 4.5a1.5 1.5 0 002.12 0L18.81 11.3a1.5 1.5 0 000-2.12l-4.5-4.5zm4.81 9.62a1.5 1.5 0 00-2.12 0l-2.38 2.38a1.5 1.5 0 000 2.12L14.38 21.2a1.5 1.5 0 002.12 0l2.38-2.38a1.5 1.5 0 000-2.12l-2.38-2.38z"/>
  </svg>
);

// New additional crypto icons
export const BNBIcon: React.FC<{className?: string; style?: React.CSSProperties}> = ({ className, style }) => (
  <svg className={className} style={style} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L9.09 4.91L12 7.82L14.91 4.91L12 2zM4.91 9.09L2 12L4.91 14.91L7.82 12L4.91 9.09zM16.18 12L19.09 9.09L22 12L19.09 14.91L16.18 12zM12 16.18L9.09 19.09L12 22L14.91 19.09L12 16.18z"/>
  </svg>
);

export const CardanoIcon: React.FC<{className?: string; style?: React.CSSProperties}> = ({ className, style }) => (
  <svg className={className} style={style} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 1.5C5.925 1.5 1 6.425 1 12.5s4.925 11 11 11 11-4.925 11-11-4.925-11-11-11zM7.5 8.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm9 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zM12 20a8 8 0 0 1-7.391-4.961A1.5 1.5 0 0 1 6 13.5h12a1.5 1.5 0 0 1 1.391 1.539A8 8 0 0 1 12 20z"/>
  </svg>
);

export const PolygonIcon: React.FC<{className?: string; style?: React.CSSProperties}> = ({ className, style }) => (
  <svg className={className} style={style} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L2 7L12 12L22 7L12 2zM2 17L12 22L22 17L12 12L2 17z"/>
  </svg>
);
