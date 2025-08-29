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
        textShadow: '0 0 15px rgba(56,189,248,0.3)',
        filter: 'drop-shadow(0 0 8px rgba(56,189,248,0.25))'
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
        <span>{trendColor === 'red' ? '↘' : '↗'}</span>
        <span>{trend}</span>
      </div>
      <span className="text-gray-500 text-xs">vs current market</span>
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
    title: 'Global Ad Spend',
    value: 1200,
    suffix: 'B',
    prefix: '$',
    description: 'Annual worldwide digital advertising market size that MetaSurfAI is targeting',
    trend: '+8.7%',
    trendColor: 'green',
    icon: '🌐',
    formatter: (num: number) => num.toString()
  },
  {
    title: 'Potential User Earnings',
    value: 2400,
    suffix: '/month',
    prefix: '$',
    description: 'Estimated monthly earnings per active user when platform reaches scale',
    trend: '+∞%',
    trendColor: 'green',
    icon: '💎',
    formatter: (num: number) => num.toLocaleString()
  },
  {
    title: 'Target Completion Rate',
    value: 95,
    suffix: '%',
    description: 'Projected ad completion rate with our incentive model vs industry 3-5%',
    trend: '+1800%',
    trendColor: 'green',
    icon: '🎯',
    formatter: (num: number) => num.toString()
  },
  {
    title: 'Wasted Ad Spend',
    value: 420,
    suffix: 'B',
    prefix: '$',
    description: 'Annual global ad spend lost to poor engagement - our opportunity',
    trend: '-35%',
    trendColor: 'red',
    icon: '💸',
    formatter: (num: number) => num.toString()
  },
  {
    title: 'Platform Revenue Potential',
    value: 15,
    suffix: 'B',
    prefix: '$',
    description: 'Projected annual revenue at 10% market capture with our model',
    trend: '+∞%',
    trendColor: 'green',
    icon: '🚀',
    formatter: (num: number) => num.toString()
  },
  {
    title: 'Target Markets',
    value: 195,
    suffix: '',
    description: 'Countries where we plan to establish operations by 2027',
    trend: '+100%',
    trendColor: 'green',
    icon: '🗺️',
    formatter: (num: number) => num.toString()
  }
];

const LiveMetricsSection: React.FC = () => {
  return (
    <section className="relative py-16 overflow-hidden">
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
        <div className="text-center mb-12 animate-fadeInUp">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-green-500/20 to-cyan-500/20 border border-green-400/30 mb-6">
            <div className="relative">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-ping absolute"></div>
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            </div>
            <span className="text-green-300 font-semibold text-sm uppercase tracking-wide">Market Opportunity</span>
          </div>
          
          <h2 
            className="text-4xl md:text-6xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-br from-white via-green-200 to-cyan-400"
            style={{
              textShadow: '0 0 20px rgba(34,197,94,0.4), 4px 4px 12px rgba(0,0,0,0.8)',
              filter: 'drop-shadow(0 0 10px rgba(34,197,94,0.3))',
              transform: 'perspective(1000px) rotateX(10deg)',
              animation: 'float 8s ease-in-out infinite'
            }}
          >
            Real-Time Impact
          </h2>
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
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-15px) rotate(2deg); }
          66% { transform: translateY(-8px) rotate(-1deg); }
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