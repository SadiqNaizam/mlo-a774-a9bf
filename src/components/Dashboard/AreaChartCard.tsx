import React from 'react';
import { Area, AreaChart, ResponsiveContainer, Tooltip } from 'recharts';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const areaChartData = [
    { name: 'Jan', series1: 20, series2: 30 },
    { name: 'Feb', series1: 45, series2: 35 },
    { name: 'Mar', series1: 30, series2: 50 },
    { name: 'Apr', series1: 50, series2: 60 },
    { name: 'May', series1: 70, series2: 40 },
    { name: 'Jun', series1: 95, series2: 55 },
    { name: 'Jul', series1: 60, series2: 80 },
    { name: 'Aug', series1: 75, series2: 65 },
    { name: 'Sep', series1: 55, series2: 90 },
];

const Calendar: React.FC = () => {
    const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'] as const;
    const dates = Array.from({ length: 30 }, (_, i) => i + 1);
    const today = 20 as const;
    const selected = 24 as const;

    return (
        <div className="p-2 bg-background rounded-md w-[200px]">
            <div className="grid grid-cols-7 text-center text-xs text-muted-foreground mb-2">
                {days.map((day, i) => <div key={i}>{day}</div>)}
            </div>
            <div className="grid grid-cols-7 text-center text-xs gap-y-1">
                {dates.map(date => (
                    <div
                        key={date}
                        className={cn(
                            "w-6 h-6 flex items-center justify-center rounded-full mx-auto",
                            date === today && "bg-primary text-primary-foreground",
                            date === selected && "bg-accent text-accent-foreground"
                        )}
                    >
                        {date}
                    </div>
                ))}
            </div>
        </div>
    );
}

const AreaChartCard: React.FC = () => {
  return (
    <Card className="col-span-4 md:col-span-2 lg:col-span-3">
      <CardHeader className="flex-col sm:flex-row items-start justify-between gap-4">
        <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-accent" />
                <span className="text-sm text-muted-foreground">Lorem Ipsum</span>
            </div>
            <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-primary" />
                <span className="text-sm text-muted-foreground">Dolor Amet</span>
            </div>
        </div>
        <Calendar />
      </CardHeader>
      <CardContent className="pl-2 -mt-4">
        <ResponsiveContainer width="100%" height={200}>
          <AreaChart data={areaChartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorSeries1" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(var(--accent))" stopOpacity={0.4}/>
                <stop offset="95%" stopColor="hsl(var(--accent))" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorSeries2" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.4}/>
                <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <Tooltip
              contentStyle={{
                backgroundColor: 'hsl(var(--card))',
                borderColor: 'hsl(var(--border))',
                borderRadius: 'var(--radius)',
              }}
              cursor={{ stroke: 'hsl(var(--accent))', strokeWidth: 1, strokeDasharray: '3 3' }}
            />
            <Area type="monotone" dataKey="series2" stroke="hsl(var(--primary))" fillOpacity={1} fill="url(#colorSeries2)" strokeWidth={2} />
            <Area type="monotone" dataKey="series1" stroke="hsl(var(--accent))" fillOpacity={1} fill="url(#colorSeries1)" strokeWidth={2} />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default AreaChartCard;
