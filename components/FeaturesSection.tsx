
import React from 'react';
import { NotificationIcon, AudioIcon, VRIcon, BillboardIcon, GeoTargetIcon, NFTIcon } from './icons/FeatureIcons';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, index }) => (
  <div
    className="relative p-8 bg-black/30 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden group cursor-pointer transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 animate-fadeInUp"
    style={{
      background: `
        linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%),
        radial-gradient(circle at 50% 50%, rgba(56,189,248,0.1) 0%, transparent 70%)
      `,
      boxShadow: `
        0 10px 40px rgba(0,0,0,0.3),
        inset 0 1px 0 rgba(255,255,255,0.2),
        0 0 20px rgba(56,189,248,0.1)
      `,
      transform: 'perspective(1000px)',
      animationDelay: `${index * 0.1}s`
    }}
  >
    {/* Animated background gradient */}
    <div
      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      style={{
        background: 'linear-gradient(45deg, rgba(168,85,247,0.2), rgba(59,130,246,0.2), rgba(16,185,129,0.2))',
        animation: 'gradientShift 3s ease-in-out infinite'
      }}
    />

    {/* Floating particles */}
    {Array.from({ length: 3 }).map((_, i) => (
      <div
        key={i}
        className="absolute w-1 h-1 bg-cyan-400/60 rounded-full animate-bounce"
        style={{
          left: `${20 + i * 30}%`,
          top: `${20 + i * 20}%`,
          animationDelay: `${i * 0.5}s`,
          animationDuration: `${2 + i}s`
        }}
      />
    ))}

    <div className="relative z-10">
      <div 
        className="mb-6 text-purple-400 group-hover:text-purple-300 transition-colors duration-300 hover:scale-110 transform"
        style={{
          filter: 'drop-shadow(0 0 10px rgba(168,85,247,0.5))',
        }}
      >
        {icon}
      </div>
      
      <h3 
        className="text-xl font-bold text-white mb-3"
        style={{
          textShadow: '0 0 5px rgba(255,255,255,0.15), 2px 2px 4px rgba(0,0,0,0.8)'
        }}
      >
        {title}
      </h3>
      
      <p className="text-sm text-gray-400 leading-relaxed">{description}</p>
    </div>

    {/* Corner highlight */}
    <div
      className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-cyan-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
    />
  </div>
);

const features = [
  { icon: <NotificationIcon />, title: "Notification Ads", description: "Reach users directly via WhatsApp & Telegram with opt-in, rewarded notifications." },
  { icon: <AudioIcon />, title: "Radio/Audio Rewards", description: "Integrate with streaming services to reward listeners for hearing audio ads." },
  { icon: <VRIcon />, title: "VR/AR/XR Immersive Ads", description: "Place interactive, engaging ad experiences directly into metaverse and AR environments." },
  { icon: <BillboardIcon />, title: "Live Billboard Integration", description: "Swap ad creative on digital billboards in real-time based on AI-driven analytics." },
  { icon: <GeoTargetIcon />, title: "Geo-Targeted Ads", description: "Empower small, local sellers to run hyper-targeted campaigns in their vicinity." },
  { icon: <NFTIcon />, title: "Tokenized Ad Slots", description: "Buy, sell, and trade premium ad space as NFTs in our decentralized marketplace." },
];

const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="relative py-24">
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

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className="text-center mb-16 animate-fadeInUp"
        >
          <h2 
            className="text-4xl md:text-5xl font-extrabold mb-4 animate-titleGlow text-sky-400"
            style={{
              color: '#38bdf8',
              animation: 'titleFloat 6s ease-in-out infinite, titleGlow 3s ease-in-out infinite, float 8s ease-in-out infinite',
              textShadow: `
                2px 2px 0px #1e293b,
                4px 4px 8px rgba(0, 0, 0, 0.8),
                0 0 20px rgba(56, 189, 248, 0.5),
                0 0 40px rgba(56,189,248,0.8)
              `,
              filter: 'drop-shadow(0 0 15px rgba(56, 189, 248, 0.6))',
              transform: 'perspective(1500px) rotateX(20deg) rotateY(-5deg) translateZ(80px)',
              letterSpacing: '1px',
              fontWeight: '900',
            }}
          >
            Platform Features
          </h2>
          <p 
            className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto"
            style={{
              textShadow: '0 0 10px rgba(255,255,255,0.2)'
            }}
          >
            A suite of powerful tools designed for the new era of digital advertising.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index} 
              icon={feature.icon} 
              title={feature.title} 
              description={feature.description} 
              index={index}
            />
          ))}
        </div>
      </div>

      <style>{`
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
              0 0 10px rgba(56, 189, 248, 0.25);
          }
          50% {
            text-shadow: 
              2px 2px 0px #1e293b,
              4px 4px 8px rgba(0, 0, 0, 0.8),
              0 0 10px rgba(168, 85, 247, 0.35);
          }
        }
        
        .animate-titleGlow {
          animation: titleGlow 3s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) scale(1) rotate(0deg); }
          50% { transform: translateY(-20px) scale(1.1) rotate(5deg); }
        }
        
        @keyframes float-reverse {
          0%, 100% { transform: translateY(0px) scale(1) rotate(0deg); }
          50% { transform: translateY(20px) scale(1.15) rotate(-5deg); }
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
        
        @keyframes gradientShift {
          0% { background: linear-gradient(45deg, rgba(168,85,247,0.2), rgba(59,130,246,0.2), rgba(16,185,129,0.2)); }
          33% { background: linear-gradient(45deg, rgba(59,130,246,0.2), rgba(16,185,129,0.2), rgba(168,85,247,0.2)); }
          66% { background: linear-gradient(45deg, rgba(16,185,129,0.2), rgba(168,85,247,0.2), rgba(59,130,246,0.2)); }
          100% { background: linear-gradient(45deg, rgba(168,85,247,0.2), rgba(59,130,246,0.2), rgba(16,185,129,0.2)); }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default FeaturesSection;
