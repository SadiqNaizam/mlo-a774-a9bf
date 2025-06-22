import React from 'react';
import StatCard, { StatCardProps } from './StatCard';
import { DollarSign, Share2, ThumbsUp, Star } from 'lucide-react';

const statsData: Omit<StatCardProps, 'className'>[] = [
  {
    title: 'Earning',
    value: '$ 628',
    icon: DollarSign,
    isPrimary: true,
  },
  {
    title: 'Share',
    value: '2434',
    icon: Share2,
  },
  {
    title: 'Likes',
    value: '1259',
    icon: ThumbsUp,
  },
  {
    title: 'Rating',
    value: '8,5',
    icon: Star,
  },
];

const StatsCardGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {statsData.map((stat) => (
        <StatCard
          key={stat.title}
          title={stat.title}
          value={stat.value}
          icon={stat.icon}
          isPrimary={stat.isPrimary}
        />
      ))}
    </div>
  );
};

export default StatsCardGrid;
