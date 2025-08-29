
import React from 'react';

interface RoadmapItemProps {
  quarter: string;
  title: string;
  points: string[];
  align: 'left' | 'right';
}

const RoadmapItem: React.FC<RoadmapItemProps> = ({ quarter, title, points, align }) => {
  const alignmentClasses = align === 'left' ? 'lg:text-right lg:pr-12' : 'lg:pl-12';
  const itemAlignment = align === 'left' ? 'lg:mr-auto' : 'lg:ml-auto';

  return (
    <div className={`relative mb-8 w-full lg:w-1/2 ${itemAlignment} animate-fadeInUp`} style={{ animationDelay: `${align === 'left' ? '0.2s' : '0.4s'}` }}>
      <div className={`absolute top-1/2 -mt-3 hidden lg:block w-6 h-6 rounded-full bg-rose-500 pulse-glow-node ${align === 'left' ? '-right-3' : '-left-3'}`}
        style={{
          boxShadow: '0 0 20px rgba(244,63,94,0.6)',
          filter: 'drop-shadow(0 0 10px rgba(244,63,94,0.8))'
        }}
      ></div>
      <div 
        className={`p-8 rounded-2xl border overflow-hidden group cursor-pointer hover:scale-105 transition-all duration-300 ${alignmentClasses}`}
        style={{
          background: `
            linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%),
            radial-gradient(circle at 30% 30%, rgba(244,63,94,0.15) 0%, transparent 70%)
          `,
          borderImage: 'linear-gradient(135deg, rgba(255,255,255,0.2), rgba(244,63,94,0.3)) 1',
          boxShadow: `
            0 10px 30px rgba(0,0,0,0.3),
            inset 0 1px 0 rgba(255,255,255,0.2),
            0 0 20px rgba(244,63,94,0.1)
          `
        }}
      >
        {/* Hover effect overlay */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: 'linear-gradient(45deg, rgba(244,63,94,0.1), rgba(236,72,153,0.1))'
          }}
        />
        
        <div className="relative z-10">
          <p 
            className="text-sm font-semibold text-rose-400 mb-1"
            style={{
              textShadow: '0 0 10px rgba(244,63,94,0.5)'
            }}
          >
            {quarter}
          </p>
          <h3 
            className="text-xl font-bold text-white mb-2"
            style={{
              textShadow: '0 0 15px rgba(255,255,255,0.3), 2px 2px 4px rgba(0,0,0,0.8)'
            }}
          >
            {title}
          </h3>
          <ul className="space-y-2 text-gray-300">
            {points.map((point, index) => (
              <li key={index} className="flex items-start">
                <span className="text-rose-400 mr-3 mt-1 text-lg">&#x2713;</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const RoadmapSection: React.FC = () => {
  return (
    <section id="roadmap" className="relative py-12">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/6 w-80 h-80 bg-gradient-to-r from-red-500/10 to-rose-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/6 w-72 h-72 bg-gradient-to-l from-pink-500/10 to-red-500/10 rounded-full blur-3xl animate-pulse" />
        
        {/* Floating particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-rose-400/40 rounded-full animate-pulse"
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
        <div className="text-center mb-12 animate-fadeInUp">
          <div className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-red-500/20 to-rose-500/20 border border-red-400/30 mb-6">
            <span className="text-red-300 font-semibold text-sm uppercase tracking-wide">Development Timeline</span>
          </div>
          
          <h2 
            className="text-4xl md:text-6xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-br from-white via-red-200 to-rose-400"
            style={{
              textShadow: '0 0 20px rgba(239,68,68,0.4), 4px 4px 12px rgba(0,0,0,0.8)',
              filter: 'drop-shadow(0 0 10px rgba(239,68,68,0.3))',
              transform: 'perspective(1000px) rotateX(10deg)',
              animation: 'float 8s ease-in-out infinite'
            }}
          >
            Our Roadmap
          </h2>
        </div>
        <div className="relative">
          <div className="absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-rose-500/50 via-red-500/50 to-transparent -translate-x-1/2 hidden lg:block"></div>
          <div className="flex flex-col items-center lg:items-stretch">
            <RoadmapItem
              quarter="Q4 2025"
              title="Platform Beta & Token Launch"
              points={["Private beta for early partners", "MSAI token generation event (TGE)", "Initial liquidity pool setup"]}
              align="left"
            />
            <RoadmapItem
              quarter="Q1 2026"
              title="Multi-Platform Integration"
              points={["YouTube and Twitch API integration", "Launch of AI-powered campaign optimizer", "Public platform launch"]}
              align="right"
            />
            <RoadmapItem
              quarter="Q3 2026"
              title="NFT Ad Slots & Billboard Ads"
              points={["Launch of NFT Ad Slot marketplace", "Partnerships for live digital billboards", "Staking and governance portal release"]}
              align="left"
            />
            <RoadmapItem
              quarter="Q2 2027"
              title="Full Ecosystem Expansion"
              points={["VR/AR immersive ad SDK release", "Integration with audio streaming platforms", "Decentralized autonomous organization (DAO) formation"]}
              align="right"
            />
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-20px) scale(1.1); }
        }
        
        @keyframes float-reverse {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(20px) scale(1.15); }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out forwards;
        }
        
        .pulse-glow-node {
          animation: pulseGlow 2s ease-in-out infinite;
        }
        
        @keyframes pulseGlow {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 0 20px rgba(244,63,94,0.6);
          }
          50% {
            transform: scale(1.1);
            box-shadow: 0 0 30px rgba(244,63,94,0.8);
          }
        }
      `}</style>
    </section>
  );
};

export default RoadmapSection;
