import React from 'react';
import { Menu, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';

interface HeaderProps {
  onMenuClick?: () => void;
  theme: 'light' | 'dark';
  onThemeToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick, theme, onThemeToggle }) => {
  return (
    <header className="flex h-16 shrink-0 items-center justify-between border-b bg-card px-4 shadow-sm sm:px-6">
      <h1 className="text-lg font-semibold text-foreground">Dashboard User</h1>
      
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
            <Sun className="h-5 w-5 text-orange-400" />
            <Switch
                id="theme-switch"
                checked={theme === 'dark'}
                onCheckedChange={onThemeToggle}
                aria-label="Toggle dark mode"
            />
            <Moon className="h-5 w-5 text-slate-400" />
        </div>

        <Button variant="ghost" size="icon" onClick={onMenuClick} aria-label="Toggle menu" className="lg:hidden">
            <Menu className="h-6 w-6 text-secondary-foreground" />
        </Button>
      </div>
    </header>
  );
};

export default Header;