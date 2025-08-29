import React from 'react';

interface StatCardProps {
  number: string;
  label: string;
  description: string;
  index: number;
  gradient: string;
}

const StatCard: React.FC<StatCardProps> = ({ number, label, description, index, gradient }) => (
  <div
    className="relative p-8 rounded-3xl border overflow-hidden group cursor-pointer hover:scale-105 hover:-translate-y-4 transition-all duration-500 animate-fadeInUp"
    style={{
      background: `
        linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%),
        ${gradient}
      `,
      borderImage: 'linear-gradient(135deg, rgba(255,255,255,0.3), rgba(56,189,248,0.3), rgba(168,85,247,0.3)) 1',
      boxShadow: `
        0 20px 40px rgba(0,0,0,0.4),
        inset 0 1px 0 rgba(255,255,255,0.2),
        0 0 30px rgba(56,189,248,0.15)
      `,
      animationDelay: `${index * 0.2}s`
    }}
  >
    {/* Animated background pulse */}
    <div
      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
      style={{
        background: `radial-gradient(circle at center, ${gradient.split(',')[0]}, transparent 70%)`,
        animation: 'pulse 2s ease-in-out infinite'
      }}
    />

    {/* Floating effect particles */}
    {Array.from({ length: 6 }).map((_, i) => (
      <div
        key={i}
        className="absolute w-1 h-1 bg-cyan-400/60 rounded-full animate-pulse"
        style={{
          left: `${10 + i * 15}%`,
          top: `${10 + i * 12}%`,
          animationDelay: `${i * 0.4}s`,
          animationDuration: `${3 + i * 0.5}s`
        }}
      />
    ))}

    <div className="relative z-10 text-center">
      <div 
        className="text-5xl md:text-6xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-br from-white via-cyan-200 to-blue-400 group-hover:scale-110 transition-transform duration-300"
        style={{
          textShadow: '0 0 15px rgba(56,189,248,0.3), 2px 2px 8px rgba(0,0,0,0.8)',
          filter: 'drop-shadow(0 0 8px rgba(56,189,248,0.25))'
        }}
      >
        {number}
      </div>
      
      <h3 
        className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300"
        style={{
          textShadow: '0 0 8px rgba(255,255,255,0.15)'
        }}
      >
        {label}
      </h3>
      
      <p className="text-gray-400 leading-relaxed text-sm">{description}</p>
    </div>

    {/* Enhanced corner highlights */}
    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-cyan-400/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-purple-400/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
  </div>
);

const IndustryStatsSection: React.FC = () => {
  return (
    <section className="relative py-16 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-l from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-float-reverse" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-radial from-emerald-500/5 to-transparent rounded-full animate-pulse" />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div 
            style={{
              backgroundImage: `
                linear-gradient(rgba(56,189,248,0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(56,189,248,0.3) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px'
            }}
            className="w-full h-full"
          />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Content removed */}
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-15px) rotate(2deg); }
          66% { transform: translateY(-8px) rotate(-1deg); }
        }
        
        @keyframes float-reverse {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(12px) rotate(-2deg); }
          66% { transform: translateY(6px) rotate(1deg); }
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
      `}</style>
    </section>
  );
};

export default IndustryStatsSection;