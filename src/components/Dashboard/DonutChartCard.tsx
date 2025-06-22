import React from 'react';
import { Pie, PieChart, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const donutChartData = [
  { name: 'Completed', value: 45 },
  { name: 'Remaining', value: 55 },
];

const COLORS = ['hsl(var(--accent))', 'hsl(var(--primary))'];

const DonutChartCard: React.FC = () => {
  return (
    <Card className="col-span-4 md:col-span-2 lg:col-span-1 flex flex-col">
      <CardContent className="p-6 flex-1 flex flex-col items-center justify-between">
        <div className="relative w-full h-48 mb-4">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={donutChartData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={0}
                dataKey="value"
                stroke="none"
              >
                {donutChartData.map((_entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: 'hsl(var(--card))',
                  borderColor: 'hsl(var(--border))',
                  borderRadius: 'var(--radius)',
                }}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="text-3xl font-bold text-primary">45%</span>
          </div>
        </div>
        
        <div className="w-full text-center space-y-2 text-sm text-muted-foreground mb-4">
            <p>Lorem ipsum</p>
            <Separator className="my-1 bg-border/50"/>
            <p>Lorem ipsum</p>
            <Separator className="my-1 bg-border/50"/>
            <p>Lorem ipsum</p>
            <Separator className="my-1 bg-border/50"/>
            <p>Lorem ipsum</p>
        </div>

        <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground mt-auto">Check Now</Button>
      </CardContent>
    </Card>
  );
};

export default DonutChartCard;
