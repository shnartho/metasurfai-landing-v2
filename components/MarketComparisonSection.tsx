import React from 'react';
import { NotificationIcon, AudioIcon, VRIcon, BillboardIcon, GeoTargetIcon, NFTIcon } from './icons/FeatureIcons';

// Additional icons for ad types
const MobileIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a1 1 0 001-1V4a1 1 0 00-1-1H8a1 1 0 00-1 1v16a1 1 0 001 1z" />
  </svg>
);

const VideoIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
  </svg>
);

const GameIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M16 14h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const StreamIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m0 0v2a1 1 0 01-1 1H8a1 1 0 01-1-1V4m0 0H5a2 2 0 00-2 2v10a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2h-2" />
  </svg>
);

const WebIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
  </svg>
);

const ShoppingIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
  </svg>
);

const AnalyticsIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

interface ComparisonRowProps {
  feature: string;
  traditional: string | React.ReactNode;
  metasurf: string | React.ReactNode;
  index: number;
}

const ComparisonRow: React.FC<ComparisonRowProps> = ({ feature, traditional, metasurf, index }) => (
  <div
    className="grid grid-cols-[1fr_2fr_2fr] gap-2 sm:gap-4 py-3 sm:py-6 border-b border-white/10 animate-fadeInUp hover:bg-white/5 transition-colors duration-300 text-xs sm:text-sm md:text-base"
    style={{ animationDelay: `${index * 0.1}s` }}
  >
    <div className="text-white font-semibold">{feature}</div>
    <div className="text-red-300 flex items-start sm:items-center gap-1 sm:gap-2">
      <span className="text-red-400 mt-1 sm:mt-0">❌</span>
      <div>{traditional}</div>
    </div>
    <div className="text-green-300 flex items-start sm:items-center gap-1 sm:gap-2">
      <span className="text-green-400 mt-1 sm:mt-0">✅</span>
      <div>{metasurf}</div>
    </div>
  </div>
);

const comparisons = [
  {
    feature: 'Platform Purpose',
    traditional: 'Facebook, Instagram are just social media platforms, they were never built for advertising, and they will never be able to give you real advertising features',
    metasurf: 'MetaSurfAI is a dedicated advertising platform where you can advertise anything anywhere - games, digital billboards, XR/VR/AR, metaverse, live streams, and any website'
  },
  {
    feature: 'Ad Engagement',
    traditional: 'Only 2-5% engagement rate, users skip ads, ignore them completely, no incentive to watch',
    metasurf: '100% guaranteed engagement! Users earn MSAI tokens by watching ads, playing games, listening to songs, browsing websites, exploring metaverse - they get paid to engage'
  },
  {
    feature: 'Advertisement Options',
    traditional: 'Limited to basic social feed ads, stories, and posts - stuck in their boring formats',
    metasurf: 'Create playable game ads, advertise in 3rd party games, send mobile notifications, advertise in digital billboards, live streams, songs, and even AI agent telemarketing'
  },
  {
    feature: 'Ad Formats',
    traditional: (
      <div className="flex gap-2">
        <MobileIcon />
        <VideoIcon />
      </div>
    ),
    metasurf: (
      <div className="flex flex-wrap gap-2">
        <GameIcon />
        <MobileIcon />
        <VideoIcon />
        <StreamIcon />
        <AudioIcon />
        <BillboardIcon />
        <WebIcon />
        <NotificationIcon />
        <GeoTargetIcon />
        <ShoppingIcon />
        <VRIcon />
        <NFTIcon />
        <AnalyticsIcon />
      </div>
    )
  },
  {
    feature: 'User Experience',
    traditional: 'Users get annoyed by ads, no rewards, just interruptions in their social media browsing',
    metasurf: 'Users love ads because they earn rewards, can withdraw earnings anytime, convert to USD, do shopping with rewards, join liquidity pools, and trade MSAI tokens'
  },
  {
    feature: 'Campaign Management',
    traditional: 'Multiple dashboards, limited analytics, no AI help, manual work for everything',
    metasurf: 'Single place to manage all ads across all platforms, AI agents handle campaigns automatically, real-time analytics for everything, advertise crypto/NFTs/events easily'
  },
  {
    feature: 'Earning Opportunities',
    traditional: 'Only advertisers spend money, users get nothing, platform keeps everything',
    metasurf: 'Users earn by watching ads, playing games, listening to songs, browsing websites, exploring metaverse - plus they can become advertisers and use MSAI tokens to create their own ads'
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
        <div className="text-center mb-6 sm:mb-12 animate-fadeInUp">
          <div className="inline-block px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-gradient-to-r from-red-500/20 to-green-500/20 border border-orange-400/30 mb-4 sm:mb-6">
            <span className="text-orange-300 font-semibold text-xs sm:text-sm uppercase tracking-wide">Market Disruption</span>
          </div>
          
          <h2 
            className="text-3xl sm:text-4xl md:text-6xl font-black mb-2 sm:mb-4 text-transparent bg-clip-text bg-gradient-to-br from-white via-orange-200 to-green-400"
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
            className="text-sm sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            style={{
              textShadow: '0 0 10px rgba(255,255,255,0.15)'
            }}
          >
          </p>
        </div>

        {/* Comparison table */}
        <div className="bg-gradient-to-r from-white/5 to-white/10 rounded-3xl p-3 sm:p-8 border border-white/20 backdrop-blur-md">
          {/* Table header */}
          <div className="grid grid-cols-[1fr_2fr_2fr] gap-2 sm:gap-4 pb-3 sm:pb-6 border-b-2 border-white/20 mb-3 sm:mb-6 text-xs sm:text-sm md:text-base">
            <div className="text-lg sm:text-xl md:text-2xl font-bold text-white">Feature</div>
            <div className="text-lg sm:text-xl md:text-2xl font-bold text-red-300 flex items-center gap-1 sm:gap-2">
              <span>🏢</span>
              <span className="hidden sm:inline">Traditional Ad Platform (e.g Facebook)</span>
            </div>
            <div className="text-lg sm:text-xl md:text-2xl font-bold text-green-300 flex items-center gap-1 sm:gap-2">
              <span>🚀</span>
              <span className="hidden sm:inline">MetaSurfAI</span>
              <span className="sm:hidden">MSAI</span>
              <span className="hidden lg:inline">Ad Platform</span>
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