import React from 'react';
import MainAppLayout from '@/components/layout/MainAppLayout';
import StatsCardGrid from '@/components/Dashboard/StatsCardGrid';
import BarChartCard from '@/components/Dashboard/BarChartCard';
import AreaChartCard from '@/components/Dashboard/AreaChartCard';
import DonutChartCard from '@/components/Dashboard/DonutChartCard';

/**
 * The main dashboard page component.
 * It assembles the various data visualization and stat components into a responsive layout
 * using the MainAppLayout for the overall page structure (Sidebar and Header).
 */
const IndexPage: React.FC = () => {
  return (
    <MainAppLayout>
      <div className="space-y-6">
        {/* First row: Grid of 4 stat cards */}
        <StatsCardGrid />

        {/* Second and third rows: Charts organized in a responsive grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
          {/* BarChartCard is designed to span the full width of the grid */}
          <BarChartCard />
          
          {/* AreaChartCard and DonutChartCard share the next row on larger screens */}
          <AreaChartCard />
          <DonutChartCard />
        </div>
      </div>
    </MainAppLayout>
  );
};

export default IndexPage;
