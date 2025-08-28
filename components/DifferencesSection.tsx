
import React from 'react';
import { TokenIcon, PayPerActionIcon, CrossPlatformIcon, BlockchainIcon } from './icons/FeatureIcons';

interface DifferenceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const DifferenceCard: React.FC<DifferenceCardProps> = ({ icon, title, description }) => (
  <div className="p-6 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 group hover:border-sky-400/50 transition-all duration-300 transform hover:-translate-y-2">
    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-sky-500/10 mb-4 text-sky-400 group-hover:bg-sky-500/20 transition-all duration-300">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

const differences = [
  {
    icon: <TokenIcon />,
    title: 'Viewers Earn Tokens',
    description: 'Instead of skipping ads, viewers are rewarded with MSAI tokens for their engagement, creating a positive feedback loop.',
  },
  {
    icon: <PayPerActionIcon />,
    title: 'Pay-Per-Action Engagement',
    description: 'Advertisers only pay for measurable actions and conversions, ensuring maximum ROI and eliminating wasteful spending.',
  },
  {
    icon: <CrossPlatformIcon />,
    title: 'One-Click Cross-Platform Campaigns',
    description: 'Seamlessly launch campaigns across YouTube, Twitch, TikTok, VR/AR, and digital billboards from a single dashboard.',
  },
  {
    icon: <BlockchainIcon />,
    title: 'Blockchain Verification & Anti-Fraud',
    description: 'All ad interactions are verified on-chain, providing transparent, immutable data and protecting against fraud.',
  },
];

const DifferencesSection: React.FC = () => {
  return (
    <section>
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-purple-500">
          What Makes MetaSurfAI Different?
        </h2>
        <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
          We are revolutionizing the advertising industry by shifting power from corporations to creators and consumers.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {differences.map((item, index) => (
          <DifferenceCard key={index} icon={item.icon} title={item.title} description={item.description} />
        ))}
      </div>
    </section>
  );
};

export default DifferencesSection;
