
import React from 'react';
import { DiscordIcon, TelegramIcon, XIcon } from './icons/SocialIcons';

const CommunitySection: React.FC = () => {
  return (
    <section className="text-center py-16">
      <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
        Be Part of the Ad Revolution
      </h2>
      <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10">
        Join our growing community to stay updated, participate in governance, and shape the future of advertising.
      </p>
      <div className="flex items-center justify-center gap-4 sm:gap-6">
        <a href="#" className="flex items-center gap-3 px-6 py-3 bg-white/10 border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
          <DiscordIcon />
          <span className="font-semibold">Join Discord</span>
        </a>
        <a href="#" className="flex items-center gap-3 px-6 py-3 bg-white/10 border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
          <TelegramIcon />
          <span className="font-semibold">Join Telegram</span>
        </a>
        <a href="#" className="flex items-center gap-3 px-6 py-3 bg-white/10 border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
          <XIcon />
          <span className="font-semibold">Follow on X</span>
        </a>
      </div>
    </section>
  );
};

export default CommunitySection;
