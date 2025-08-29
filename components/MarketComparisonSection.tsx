import React from 'react';

interface ComparisonRowProps {
  feature: string;
  traditional: string;
  metasurf: string;
  index: number;
}

const ComparisonRow: React.FC<ComparisonRowProps> = ({ feature, traditional, metasurf, index }) => (
  <div
    className="grid grid-cols-3 gap-4 py-6 border-b border-white/10 animate-fadeInUp hover:bg-white/5 transition-colors duration-300"
    style={{ animationDelay: `${index * 0.1}s` }}
  >
    <div className="text-white font-semibold">{feature}</div>
    <div className="text-red-300 flex items-center gap-2">
      <span className="text-red-400">❌</span>
      {traditional}
    </div>
    <div className="text-green-300 flex items-center gap-2">
      <span className="text-green-400">✅</span>
      {metasurf}
    </div>
  </div>
);

const comparisons = [
  {
    feature: 'User Rewards',
    traditional: 'Users get nothing while watching ads',
    metasurf: 'Users earn MSAI tokens for engagement'
  },
  {
    feature: 'Ad Engagement',
    traditional: 'Only 2-5% completion rate (users skip/ignore)',
    metasurf: '87% completion rate (incentivized viewing)'
  },
  {
    feature: 'Fraud Prevention',
    traditional: '$84B lost to bot traffic & fake clicks',
    metasurf: 'Blockchain verification prevents fraud'
  },
  {
    feature: 'Revenue Sharing',
    traditional: 'Platforms hoard 100% of ad revenue',
    metasurf: 'Revenue shared with user community'
  },
  {
    feature: 'Transparency',
    traditional: 'Black box algorithms, hidden metrics',
    metasurf: 'Full on-chain transparency & verification'
  },
  {
    feature: 'Cross-Platform',
    traditional: 'Fragmented across multiple dashboards',
    metasurf: 'Single unified Web3 platform'
  }
];

const MarketComparisonSection: React.FC = () => {
  return (
    <section className="relative py-16 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/5 w-80 h-80 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/5 w-72 h-72 bg-gradient-to-l from-green-500/10 to-emerald-500/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-12 animate-fadeInUp">
          <div className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-red-500/20 to-green-500/20 border border-orange-400/30 mb-6">
            <span className="text-orange-300 font-semibold text-sm uppercase tracking-wide">Market Disruption</span>
          </div>
          
          <h2 
            className="text-4xl md:text-6xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-br from-white via-orange-200 to-green-400"
            style={{
              textShadow: '0 0 20px rgba(251,146,60,0.4), 4px 4px 12px rgba(0,0,0,0.8)',
              filter: 'drop-shadow(0 0 10px rgba(251,146,60,0.3))',
              transform: 'perspective(1000px) rotateX(10deg)',
              animation: 'float 8s ease-in-out infinite'
            }}
          >
            Old vs New Advertising
          </h2>
          
          <p 
            className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            style={{
              textShadow: '0 0 10px rgba(255,255,255,0.15)'
            }}
          >
          </p>
        </div>

        {/* Comparison table */}
        <div className="bg-gradient-to-r from-white/5 to-white/10 rounded-3xl p-8 border border-white/20 backdrop-blur-md">
          {/* Table header */}
          <div className="grid grid-cols-3 gap-4 pb-6 border-b-2 border-white/20 mb-6">
            <div className="text-2xl font-bold text-white">Feature</div>
            <div className="text-2xl font-bold text-red-300 flex items-center gap-2">
              <span>🏢</span>
              Traditional Advertising
            </div>
            <div className="text-2xl font-bold text-green-300 flex items-center gap-2">
              <span>🚀</span>
              MetaSurfAI
            </div>
          </div>

          {/* Comparison rows */}
          {comparisons.map((comparison, index) => (
            <ComparisonRow
              key={index}
              feature={comparison.feature}
              traditional={comparison.traditional}
              metasurf={comparison.metasurf}
              index={index}
            />
          ))}
        </div>
      </div>

      <style>{`
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
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-15px) rotate(2deg); }
          66% { transform: translateY(-8px) rotate(-1deg); }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default MarketComparisonSection;