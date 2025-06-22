import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

export interface StatCardProps {
  title: string;
  value: string;
  icon: React.ElementType;
  isPrimary?: boolean;
  className?: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon: Icon, isPrimary = false, className }) => {
  const cardClasses = cn(
    'rounded-lg shadow',
    isPrimary
      ? 'bg-primary text-primary-foreground'
      : 'bg-card text-card-foreground',
    className
  );

  const iconClasses = cn(
    'h-6 w-6',
    isPrimary ? 'text-primary-foreground/90' : 'text-accent-secondary'
  );

  return (
    <Card className={cardClasses}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">
          {title}
        </CardTitle>
        <Icon className={iconClasses} />
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold">{value}</div>
      </CardContent>
    </Card>
  );
};

export default StatCard;
