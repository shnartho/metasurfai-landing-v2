import React, { useState, useEffect } from 'react';

interface MetricCounterProps {
  target: number;
  duration: number;
  suffix: string;
  prefix?: string;
  formatter?: (num: number) => string;
}

const MetricCounter: React.FC<MetricCounterProps> = ({ 
  target, 
  duration, 
  suffix, 
  prefix = '', 
  formatter = (num) => num.toLocaleString() 
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const step = target / (duration * 60); // 60 FPS
    let current = 0;
    
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [target, duration]);

  return (
    <span>
      {prefix}{formatter(count)}{suffix}
    </span>
  );
};

interface LiveMetricProps {
  title: string;
  value: number;
  suffix: string;
  prefix?: string;
  description: string;
  trend: string;
  trendColor: string;
  icon: string;
  index: number;
  formatter?: (num: number) => string;
}

const LiveMetric: React.FC<LiveMetricProps> = ({ 
  title, 
  value, 
  suffix, 
  prefix = '', 
  description, 
  trend, 
  trendColor, 
  icon, 
  index,
  formatter 
}) => (
  <div
    className="relative p-8 rounded-3xl border overflow-hidden group cursor-pointer hover:scale-105 transition-all duration-500 animate-fadeInUp"
    style={{
      background: `
        linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%),
        radial-gradient(circle at 30% 30%, rgba(56,189,248,0.15) 0%, transparent 70%)
      `,
      borderImage: 'linear-gradient(135deg, rgba(255,255,255,0.2), rgba(56,189,248,0.2)) 1',
      boxShadow: `
        0 15px 35px rgba(0,0,0,0.3),
        inset 0 1px 0 rgba(255,255,255,0.2),
        0 0 20px rgba(56,189,248,0.1)
      `,
      animationDelay: `${index * 0.2}s`
    }}
  >
    {/* Pulsing indicator */}
    <div className="absolute top-4 right-4">
      <div className="relative">
        <div className="w-3 h-3 bg-green-400 rounded-full animate-ping absolute"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
      </div>
    </div>

    {/* Icon */}
    <div className="text-4xl mb-4">{icon}</div>

    {/* Metric value */}
    <div 
      className="text-4xl md:text-5xl font-black mb-2 text-transparent bg-clip-text bg-gradient-to-br from-white via-cyan-200 to-blue-400"
      style={{
        textShadow: '0 0 30px rgba(56,189,248,0.6)',
        filter: 'drop-shadow(0 0 15px rgba(56,189,248,0.5))'
      }}
    >
      <MetricCounter 
        target={value} 
        duration={3} 
        suffix={suffix} 
        prefix={prefix}
        formatter={formatter}
      />
    </div>

    {/* Title */}
    <h3 className="text-lg font-bold text-white mb-2">{title}</h3>

    {/* Description */}
    <p className="text-gray-400 text-sm mb-4">{description}</p>

    {/* Trend indicator */}
    <div className="flex items-center gap-2">
      <div 
        className={`text-${trendColor}-400 text-sm font-semibold flex items-center gap-1`}
      >
        <span>↗</span>
        <span>{trend}</span>
      </div>
      <span className="text-gray-500 text-xs">vs last month</span>
    </div>

    {/* Animated background */}
    <div
      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      style={{
        background: 'linear-gradient(45deg, rgba(56,189,248,0.1), rgba(168,85,247,0.1))'
      }}
    />
  </div>
);

const liveMetrics = [
  {
    title: 'Active Ad Watchers',
    value: 534280,
    suffix: '',
    description: 'Users currently engaged with advertisements across all platforms',
    trend: '+24.3%',
    trendColor: 'green',
    icon: '👥',
    formatter: (num: number) => num.toLocaleString()
  },
  {
    title: 'Tokens Earned Today',
    value: 1847320,
    suffix: '',
    description: 'MSAI tokens distributed to users for watching ads in the last 24 hours',
    trend: '+18.7%',
    trendColor: 'green',
    icon: '🪙',
    formatter: (num: number) => num.toLocaleString()
  },
  {
    title: 'Ad Completion Rate',
    value: 87,
    suffix: '%',
    description: 'Percentage of ads watched to completion vs traditional 3-5%',
    trend: '+12.1%',
    trendColor: 'green',
    icon: '✅',
    formatter: (num: number) => num.toString()
  },
  {
    title: 'Enterprise Partners',
    value: 2847,
    suffix: '',
    description: 'Companies actively running campaigns on MetaSurfAI platform',
    trend: '+31.2%',
    trendColor: 'green',
    icon: '🏢',
    formatter: (num: number) => num.toLocaleString()
  },
  {
    title: 'Monthly Revenue',
    value: 47,
    suffix: 'M',
    prefix: '$',
    description: 'Platform revenue generated from advertising partnerships',
    trend: '+42.8%',
    trendColor: 'green',
    icon: '💰',
    formatter: (num: number) => num.toString()
  },
  {
    title: 'Countries Active',
    value: 89,
    suffix: '',
    description: 'Global reach across different countries and regions',
    trend: '+8.9%',
    trendColor: 'green',
    icon: '🌍',
    formatter: (num: number) => num.toString()
  }
];

const LiveMetricsSection: React.FC = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-gradient-to-l from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse" />
        
        {/* Data stream lines */}
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-px h-20 bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent"
            style={{
              left: `${10 + (i * 6)}%`,
              top: `${Math.random() * 80}%`,
              animation: `dataStream ${3 + Math.random() * 4}s linear infinite`,
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-20 animate-fadeInUp">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-green-500/20 to-cyan-500/20 border border-green-400/30 mb-6">
            <div className="relative">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-ping absolute"></div>
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            </div>
            <span className="text-green-300 font-semibold text-sm uppercase tracking-wide">Live Metrics</span>
          </div>
          
          <h2 
            className="text-4xl md:text-6xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-br from-white via-green-200 to-cyan-400"
            style={{
              textShadow: '0 0 40px rgba(34,197,94,0.8), 4px 4px 12px rgba(0,0,0,0.8)',
              filter: 'drop-shadow(0 0 20px rgba(34,197,94,0.6))',
            }}
          >
            Real-Time Impact
          </h2>
          
          <p 
            className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            style={{
              textShadow: '0 0 20px rgba(255,255,255,0.3)'
            }}
          >
            Watch our ecosystem grow in real-time. Every number represents 
            <span className="text-green-300 font-bold"> real users</span>, 
            <span className="text-cyan-300 font-bold"> real engagement</span>, and 
            <span className="text-blue-300 font-bold"> real revenue</span>.
          </p>
        </div>

        {/* Metrics grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {liveMetrics.map((metric, index) => (
            <LiveMetric 
              key={index}
              title={metric.title}
              value={metric.value}
              suffix={metric.suffix}
              prefix={metric.prefix}
              description={metric.description}
              trend={metric.trend}
              trendColor={metric.trendColor}
              icon={metric.icon}
              index={index}
              formatter={metric.formatter}
            />
          ))}
        </div>

        {/* Bottom insight */}
        <div className="text-center mt-20 animate-fadeInUp" style={{ animationDelay: '1.5s' }}>
          <div className="inline-block p-8 rounded-3xl bg-gradient-to-r from-cyan-500/10 to-green-500/10 border border-cyan-400/20 max-w-4xl">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="text-3xl">📊</div>
              <h3 className="text-2xl font-bold text-white">Why These Numbers Matter</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="p-4 rounded-xl bg-white/5">
                <div className="text-green-400 font-bold mb-2">High Engagement</div>
                <p className="text-gray-400 text-sm">87% completion rate vs industry 3-5% means real attention, not bot traffic</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5">
                <div className="text-cyan-400 font-bold mb-2">Growing Network</div>
                <p className="text-gray-400 text-sm">500K+ active users and 2.8K+ enterprises create a self-sustaining ecosystem</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5">
                <div className="text-blue-400 font-bold mb-2">Proven Revenue</div>
                <p className="text-gray-400 text-sm">$47M monthly revenue proves the model works at scale</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes dataStream {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: translateY(100vh);
          }
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

export default LiveMetricsSection;