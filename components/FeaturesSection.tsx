
import React from 'react';
import { NotificationIcon, AudioIcon, VRIcon, BillboardIcon, GeoTargetIcon, NFTIcon } from './icons/FeatureIcons';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="relative p-6 bg-black/20 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden transition-all duration-300 group hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/20 transform hover:-translate-y-1">
     <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-purple-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-spin" style={{ animationDuration: '6s' }}></div>
    <div className="relative z-10">
      <div className="mb-4 text-purple-400 group-hover:text-purple-300 transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
      <p className="text-sm text-gray-400">{description}</p>
    </div>
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
    <section id="features">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-purple-500">
          Platform Features
        </h2>
        <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
          A suite of powerful tools designed for the new era of digital advertising.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <FeatureCard key={index} icon={feature.icon} title={feature.title} description={feature.description} />
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
