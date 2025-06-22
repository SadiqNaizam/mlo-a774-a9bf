import React from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  onMenuClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  return (
    <header className="flex h-16 shrink-0 items-center justify-between border-b bg-card px-4 shadow-sm sm:px-6">
      <h1 className="text-lg font-semibold text-foreground">Dashboard User</h1>
      
      <Button variant="ghost" size="icon" onClick={onMenuClick} aria-label="Toggle menu">
        <Menu className="h-6 w-6 text-secondary-foreground" />
      </Button>
    </header>
  );
};

export default Header;
