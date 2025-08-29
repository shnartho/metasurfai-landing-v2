
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
    <div className={`relative mb-12 w-full lg:w-1/2 ${itemAlignment}`}>
      <div className={`absolute top-1/2 -mt-3 hidden lg:block w-6 h-6 rounded-full bg-sky-500 pulse-glow-node ${align === 'left' ? '-right-3' : '-left-3'}`}></div>
      <div className={`p-6 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 ${alignmentClasses}`}>
        <p className="text-sm font-semibold text-sky-400 mb-1">{quarter}</p>
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <ul className="space-y-1 text-gray-400">
          {points.map((point, index) => (
            <li key={index} className="flex items-start">
              <span className="text-sky-400 mr-2 mt-1">&#x2713;</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const RoadmapSection: React.FC = () => {
  return (
    <section id="roadmap">
      <div className="text-center mb-16">
        <h2 
          className="text-4xl md:text-5xl font-extrabold mb-4 animate-titleGlow text-sky-400"
          style={{
            color: '#38bdf8',
            animation: 'titleFloat 6s ease-in-out infinite, titleGlow 3s ease-in-out infinite',
            textShadow: `
              2px 2px 0px #1e293b,
              4px 4px 8px rgba(0, 0, 0, 0.8),
              0 0 20px rgba(56, 189, 248, 0.5)
            `,
            filter: 'drop-shadow(0 0 15px rgba(56, 189, 248, 0.6))',
            transform: 'perspective(1500px) rotateX(20deg) rotateY(-5deg) translateZ(80px)',
            letterSpacing: '1px',
            fontWeight: '900',
          }}
        >
          Our Roadmap
        </h2>
        <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
          Charting the course for a decentralized advertising future.
        </p>
      </div>
      <div className="relative">
        <div className="absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-sky-500/50 via-purple-500/50 to-transparent -translate-x-1/2 hidden lg:block"></div>
        <div className="flex flex-col items-center lg:items-stretch">
          <RoadmapItem
            quarter="Q1 2024"
            title="Platform Beta & Token Launch"
            points={["Private beta for early partners", "MSAI token generation event (TGE)", "Initial liquidity pool setup"]}
            align="left"
          />
          <RoadmapItem
            quarter="Q2 2024"
            title="Multi-Platform Integration"
            points={["YouTube and Twitch API integration", "Launch of AI-powered campaign optimizer", "Public platform launch"]}
            align="right"
          />
          <RoadmapItem
            quarter="Q3 2024"
            title="NFT Ad Slots & Billboard Ads"
            points={["Launch of NFT Ad Slot marketplace", "Partnerships for live digital billboards", "Staking and governance portal release"]}
            align="left"
          />
          <RoadmapItem
            quarter="Q4 2024"
            title="Full Ecosystem Expansion"
            points={["VR/AR immersive ad SDK release", "Integration with audio streaming platforms", "Decentralized autonomous organization (DAO) formation"]}
            align="right"
          />
        </div>
      </div>
      
      <style jsx>{`
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
              0 0 20px rgba(56, 189, 248, 0.5);
          }
          50% {
            text-shadow: 
              2px 2px 0px #1e293b,
              4px 4px 8px rgba(0, 0, 0, 0.8),
              0 0 20px rgba(168, 85, 247, 0.7);
          }
        }
        
        .animate-titleGlow {
          animation: titleGlow 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default RoadmapSection;
