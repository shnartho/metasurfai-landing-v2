
import React from 'react';
import { ChevronRightIcon } from './icons/UtilIcons';

const TokenomicsSection: React.FC = () => {
  return (
    <section id="tokenomics">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-purple-500">
          MSAI Tokenomics
        </h2>
        <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
          The MSAI token is the lifeblood of the MetaSurfAI ecosystem, designed for utility and sustainable growth.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
        {/* Animated Diagram */}
        <div className="relative w-80 h-80 flex items-center justify-center">
          <div className="absolute w-full h-full border-2 border-dashed border-sky-500/30 rounded-full animate-spin" style={{ animationDuration: '30s' }}></div>
          <div className="absolute w-64 h-64 border-2 border-dashed border-purple-500/30 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '25s' }}></div>

          <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-6 text-center">
            <div className="w-24 p-2 bg-sky-900/50 border border-sky-400/50 rounded-lg text-sm">Earn</div>
            <ChevronRightIcon className="w-6 h-6 absolute top-full left-1/2 -translate-x-1/2 mt-1 text-sky-400 rotate-90" />
          </div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 -mr-6 text-center">
            <div className="w-24 p-2 bg-purple-900/50 border border-purple-400/50 rounded-lg text-sm">Spend</div>
            <ChevronRightIcon className="w-6 h-6 absolute right-full top-1/2 -translate-y-1/2 mr-1 text-purple-400" />
          </div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 -mb-6 text-center">
            <div className="w-24 p-2 bg-sky-900/50 border border-sky-400/50 rounded-lg text-sm">Burn</div>
            <ChevronRightIcon className="w-6 h-6 absolute bottom-full left-1/2 -translate-x-1/2 mb-1 text-sky-400 -rotate-90" />
          </div>
          <div className="absolute left-0 top-1/2 -translate-y-1/2 -ml-6 text-center">
            <div className="w-24 p-2 bg-purple-900/50 border border-purple-400/50 rounded-lg text-sm">Value Growth</div>
            <ChevronRightIcon className="w-6 h-6 absolute left-full top-1/2 -translate-y-1/2 ml-1 text-purple-400 rotate-180" />
          </div>

          <div className="text-center bg-white/5 backdrop-blur-xl p-6 rounded-full border border-white/10">
            <div className="text-4xl font-bold text-sky-400">MSAI</div>
            <div className="text-sm">Ecosystem</div>
          </div>
        </div>

        {/* Infographic */}
        <div className="w-full max-w-md p-8 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 space-y-6">
          <div>
            <p className="text-sm text-sky-400 font-semibold">Total Supply</p>
            <p className="text-2xl font-bold text-white">1,000,000,000 MSAI</p>
            <p className="text-xs text-gray-400">Built on Solana Layer 1 for speed and low fees.</p>
          </div>
          <div className="w-full h-[1px] bg-white/10"></div>
          <div>
            <p className="text-sm text-purple-400 font-semibold">Core Use Cases</p>
            <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
              <li>Viewer rewards for ad engagement</li>
              <li>Primary currency for ad spend</li>
              <li>Staking for platform governance & rewards</li>
              <li>Minting & trading NFT Ad Slots</li>
            </ul>
          </div>
          <div className="w-full h-[1px] bg-white/10"></div>
          <div>
            <p className="text-sm text-sky-400 font-semibold">Scarcity Mechanism</p>
            <p className="text-lg font-bold text-white">Deflationary Burn Policy</p>
            <p className="text-xs text-gray-400">A percentage of all ad spend is permanently burned, reducing total supply over time.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenomicsSection;
