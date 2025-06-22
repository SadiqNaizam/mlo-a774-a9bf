import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const barChartData = [
  { month: 'JAN', '2019': 18, '2020': 38 },
  { month: 'FEB', '2019': 28, '2020': 43 },
  { month: 'MAR', '2019': 12, '2020': 23 },
  { month: 'APR', '2019': 22, '2020': 7 },
  { month: 'MAY', '2019': 34, '2020': 21 },
  { month: 'JUN', '2019': 25, '2020': 46 },
  { month: 'JUL', '2019': 32, '2020': 13 },
  { month: 'AUG', '2019': 22, '2020': 26 },
  { month: 'SEP', '2019': 38, '2020': 22 },
];

const BarChartCard: React.FC = () => {
  return (
    <Card className="col-span-4">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Result</CardTitle>
          <CardDescription>Monthly result statistics</CardDescription>
        </div>
        <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">Check Now</Button>
      </CardHeader>
      <CardContent className="pl-2">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={barChartData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis 
              dataKey="month" 
              stroke="hsl(var(--muted-foreground))" 
              fontSize={12} 
              tickLine={false} 
              axisLine={false} 
            />
            <YAxis 
              stroke="hsl(var(--muted-foreground))" 
              fontSize={12} 
              tickLine={false} 
              axisLine={false} 
              tickFormatter={(value: number) => `${value}`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: 'hsl(var(--card))',
                borderColor: 'hsl(var(--border))',
                borderRadius: 'var(--radius)',
              }}
              cursor={{ fill: 'hsl(var(--muted))' }}
            />
            <Legend iconType="circle" iconSize={10} verticalAlign="top" align="right" wrapperStyle={{ top: -10, right: 0 }} />
            <Bar dataKey="2019" fill="hsl(var(--accent))" radius={[4, 4, 0, 0]} />
            <Bar dataKey="2020" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default BarChartCard;
