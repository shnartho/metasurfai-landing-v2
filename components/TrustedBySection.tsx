import React from 'react';

interface CompanyLogoProps {
  name: string;
  description: string;
  index: number;
}

const CompanyLogo: React.FC<CompanyLogoProps> = ({ name, description, index }) => (
  <div
    className="relative group cursor-pointer transform hover:scale-110 transition-all duration-500 animate-fadeInUp"
    style={{ animationDelay: `${index * 0.15}s` }}
  >
    <div
      className="relative p-8 rounded-2xl border overflow-hidden"
      style={{
        background: `
          linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%),
          radial-gradient(circle at 30% 30%, rgba(56,189,248,0.15) 0%, transparent 70%)
        `,
        borderImage: 'linear-gradient(135deg, rgba(255,255,255,0.2), rgba(56,189,248,0.2)) 1',
        boxShadow: `
          0 10px 30px rgba(0,0,0,0.3),
          inset 0 1px 0 rgba(255,255,255,0.2),
          0 0 20px rgba(56,189,248,0.1)
        `
      }}
    >
      {/* Company logo/name */}
      <div className="text-center mb-4">
        <div 
          className="text-2xl font-black text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300"
          style={{
            textShadow: '0 0 15px rgba(255,255,255,0.3)',
            fontFamily: 'Arial, sans-serif',
            letterSpacing: '0.5px'
          }}
        >
          {name}
        </div>
        <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full" />
      </div>
      
      <p className="text-gray-400 text-sm text-center leading-relaxed">{description}</p>
      
      {/* Hover effect overlay */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: 'linear-gradient(45deg, rgba(56,189,248,0.1), rgba(168,85,247,0.1))'
        }}
      />
    </div>
  </div>
);

const companies = [
  {
    name: 'GOOGLE',
    description: '$307B revenue, 80% from advertising. Proof that ads drive the digital economy.'
  },
  {
    name: 'META',
    description: '$134B revenue, 97% from advertising. Social media advertising dominance.'
  },
  {
    name: 'AMAZON',
    description: '$47B advertising revenue. E-commerce and cloud advertising giant.'
  },
  {
    name: 'MICROSOFT',
    description: '$18B advertising revenue. Search, LinkedIn, and gaming advertising.'
  },
  {
    name: 'APPLE',
    description: '$7B advertising revenue. App Store and premium advertising ecosystem.'
  },
  {
    name: 'NETFLIX',
    description: '$3B from ads. Streaming advertising is the next frontier.'
  },
  {
    name: 'SPOTIFY',
    description: '$1.7B from ads. Audio advertising and podcast monetization.'
  },
  {
    name: 'TWITTER/X',
    description: '$2.5B advertising revenue. Real-time social advertising platform.'
  }
];

const TrustedBySection: React.FC = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/6 w-80 h-80 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/6 w-72 h-72 bg-gradient-to-l from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse" />
        
        {/* Floating particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/40 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 8 + 4}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-20 animate-fadeInUp">
          <div className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-400/30 mb-6">
            <span className="text-emerald-300 font-semibold text-sm uppercase tracking-wide">Industry Leaders</span>
          </div>
          
          <h2 
            className="text-4xl md:text-6xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-br from-white via-emerald-200 to-cyan-400"
            style={{
              textShadow: '0 0 40px rgba(16,185,129,0.8), 4px 4px 12px rgba(0,0,0,0.8)',
              filter: 'drop-shadow(0 0 20px rgba(16,185,129,0.6))',
            }}
          >
            Built on Giants' Foundations
          </h2>
          
          <p 
            className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8"
            style={{
              textShadow: '0 0 20px rgba(255,255,255,0.3)'
            }}
          >
            The world's most valuable companies prove advertising works. <br />
            <span className="text-cyan-300 font-bold">MetaSurfAI</span> brings that same potential to <span className="text-emerald-300 font-bold">Web3</span>, 
            but with <span className="text-purple-300 font-bold">user rewards</span> and <span className="text-yellow-300 font-bold">true transparency</span>.
          </p>

          {/* Key insight box */}
          <div className="inline-block p-6 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-400/20 max-w-3xl">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center text-white font-bold">!</div>
              <span className="text-yellow-300 font-bold text-lg">Key Insight</span>
            </div>
            <p className="text-gray-300 text-lg">
              These companies generated <span className="text-cyan-300 font-bold">$500+ billion</span> from advertising in 2024. 
              <br />But users got <span className="text-red-300 font-bold">$0</span>. MetaSurfAI changes that forever.
            </p>
          </div>
        </div>

        {/* Companies grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {companies.map((company, index) => (
            <CompanyLogo 
              key={index}
              name={company.name}
              description={company.description}
              index={index}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center animate-fadeInUp" style={{ animationDelay: '1.5s' }}>
          <div className="inline-flex flex-col items-center gap-6 p-8 rounded-3xl bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-400/20">
            <div className="flex items-center gap-4">
              <div className="text-4xl">🚀</div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Join the Advertising Evolution</h3>
                <p className="text-gray-400">While others extract value, MetaSurfAI shares it</p>
              </div>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                <span>Users Earn Tokens</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-blue-400"></div>
                <span>Transparent Metrics</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-purple-400"></div>
                <span>Fraud Prevention</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <span>Higher ROI</span>
              </div>
            </div>
          </div>
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
        
        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default TrustedBySection;