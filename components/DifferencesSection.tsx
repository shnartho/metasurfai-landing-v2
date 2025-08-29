
import React from 'react';
import { TokenIcon, PayPerActionIcon, CrossPlatformIcon, BlockchainIcon } from './icons/FeatureIcons';

interface DifferenceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const DifferenceCard: React.FC<DifferenceCardProps> = ({ icon, title, description, index }) => (
  <div
    className="relative p-8 rounded-3xl border overflow-hidden group cursor-pointer hover:scale-105 hover:-translate-y-4 transition-all duration-300 animate-fadeInUp"
    style={{
      background: `
        linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%),
        radial-gradient(circle at 30% 30%, rgba(56,189,248,0.15) 0%, transparent 70%)
      `,
      borderImage: 'linear-gradient(135deg, rgba(255,255,255,0.3), rgba(56,189,248,0.3), rgba(168,85,247,0.3)) 1',
      boxShadow: `
        0 15px 35px rgba(0,0,0,0.3),
        inset 0 1px 0 rgba(255,255,255,0.2),
        0 0 20px rgba(56,189,248,0.1)
      `,
      transform: 'perspective(1000px)',
      animationDelay: `${index * 0.1}s`
    }}
  >
    {/* Animated background overlay */}
    <div
      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      style={{
        background: 'linear-gradient(45deg, rgba(56,189,248,0.1), rgba(168,85,247,0.1))',
        animation: 'gradientShift 4s ease-in-out infinite'
      }}
    />

    {/* Floating particles */}
    {Array.from({ length: 4 }).map((_, i) => (
      <div
        key={i}
        className="absolute w-1 h-1 bg-sky-400/60 rounded-full animate-bounce"
        style={{
          left: `${15 + i * 25}%`,
          top: `${15 + i * 20}%`,
          animationDelay: `${i * 0.3}s`,
          animationDuration: `${2 + i * 0.5}s`
        }}
      />
    ))}

    <div className="relative z-10">
      {/* Enhanced icon with 3D effect */}
      <div 
        className="flex items-center justify-center w-16 h-16 rounded-2xl mb-6 text-sky-400 group-hover:text-sky-300 transition-all duration-300 hover:rotate-12 hover:scale-110"
        style={{
          background: `
            linear-gradient(135deg, rgba(56,189,248,0.2) 0%, rgba(168,85,247,0.1) 100%)
          `,
          filter: 'drop-shadow(0 0 15px rgba(56,189,248,0.5))',
          boxShadow: `
            0 10px 20px rgba(56,189,248,0.2),
            inset 0 1px 0 rgba(255,255,255,0.3)
          `
        }}
      >
        {icon}
      </div>

      <h3 
        className="text-xl font-bold text-white mb-3"
        style={{
          textShadow: '0 0 15px rgba(255,255,255,0.3), 2px 2px 4px rgba(0,0,0,0.8)'
        }}
      >
        {title}
      </h3>
      
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </div>

    {/* Corner highlights */}
    <div
      className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-cyan-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
    />
    <div
      className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
    />
  </div>
);

const differences = [
  {
    icon: <TokenIcon />,
    title: 'Users Actually Earn Money',
    description: 'Unlike traditional ads where only platforms profit, MetaSurfAI shares revenue with viewers through MSAI tokens - turning ad engagement into passive income.',
  },
  {
    icon: <PayPerActionIcon />,
    title: 'Guaranteed ROI for Advertisers',
    description: 'Pay only for genuine actions and conversions, not fake views or bot traffic. Our blockchain verification ensures every dollar spent drives real results.',
  },
  {
    icon: <CrossPlatformIcon />,
    title: 'One Platform, All Channels',
    description: 'Reach audiences across YouTube, Twitch, TikTok, VR/AR platforms, and digital billboards from a single dashboard - no more juggling multiple ad platforms.',
  },
  {
    icon: <BlockchainIcon />,
    title: 'Fraud-Proof Transparency',
    description: 'Every ad interaction is recorded on-chain, providing immutable proof of engagement and eliminating the $84 billion lost annually to ad fraud.',
  },
];

const DifferencesSection: React.FC = () => {
  return (
    <section className="relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-1/3 left-1/6 w-80 h-80 bg-gradient-to-r from-sky-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse"
          style={{
            animation: 'float 12s ease-in-out infinite'
          }}
        />
        <div
          className="absolute bottom-1/3 right-1/6 w-72 h-72 bg-gradient-to-l from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse"
          style={{
            animation: 'float-reverse 15s ease-in-out infinite',
            animationDelay: '3s'
          }}
        />
      </div>

      <div className="relative z-10">
        <div 
          className="text-center mb-16 animate-fadeInUp"
        >
          <div className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-400/30 mb-6">
            <span className="text-purple-300 font-semibold text-sm uppercase tracking-wide">Revolutionary Approach</span>
          </div>
          
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
            Breaking the Advertising Status Quo
          </h2>
          <p 
            className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto"
            style={{
              textShadow: '0 0 10px rgba(255,255,255,0.2)'
            }}
          >
            While Google earns <span className="text-yellow-300 font-bold">$307B</span> and Meta earns <span className="text-blue-300 font-bold">$134B</span> from advertising, 
            users get nothing. <br />
            <span className="text-cyan-300 font-semibold">MetaSurfAI changes this forever by sharing value with everyone.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {differences.map((item, index) => (
            <DifferenceCard 
              key={index} 
              icon={item.icon} 
              title={item.title} 
              description={item.description} 
              index={index}
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes gradientShift {
          0% { background: linear-gradient(45deg, rgba(56,189,248,0.1), rgba(168,85,247,0.1)); }
          33% { background: linear-gradient(45deg, rgba(168,85,247,0.1), rgba(16,185,129,0.1)); }
          66% { background: linear-gradient(45deg, rgba(16,185,129,0.1), rgba(56,189,248,0.1)); }
          100% { background: linear-gradient(45deg, rgba(56,189,248,0.1), rgba(168,85,247,0.1)); }
        }
        
        @keyframes gradientFlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
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
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default DifferencesSection;
