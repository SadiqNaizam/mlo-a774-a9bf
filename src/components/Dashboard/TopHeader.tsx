import React from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface TopHeaderProps {
  onMenuClick?: () => void;
}

const TopHeader: React.FC<TopHeaderProps> = ({ onMenuClick }) => {
  return (
    <header className="flex items-center justify-between bg-card h-16 px-6 border-b">
      <div>
        <h1 className="text-lg font-semibold text-foreground">Dashboard User</h1>
      </div>
      <div>
        <Button variant="ghost" size="icon" onClick={onMenuClick} aria-label="Toggle menu">
          <Menu className="h-6 w-6 text-secondary-foreground" />
        </Button>
      </div>
    </header>
  );
};

export default TopHeader;
