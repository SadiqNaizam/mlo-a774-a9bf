import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Home, FileText, Mail, Bell, MapPin, BarChart2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavItem {
  href: string;
  icon: React.ElementType;
  label: string;
}

const navItems: NavItem[] = [
  { href: '#', icon: Home, label: 'home' },
  { href: '#', icon: FileText, label: 'file' },
  { href: '#', icon: Mail, label: 'messages' },
  { href: '#', icon: Bell, label: 'notification' },
  { href: '#', icon: MapPin, label: 'location' },
  { href: '#', icon: BarChart2, label: 'graph' },
];

const SidebarNav: React.FC = () => {
  const activeItem = 'home' as const;

  return (
    <aside className="flex flex-col bg-sidebar text-sidebar-foreground h-full w-64 p-4 space-y-8">
      <div className="flex flex-col items-center text-center space-y-4 pt-4">
        <Avatar className="h-24 w-24 border-4 border-white/10 shadow-lg">
          {/* Using a generic placeholder as specific image is not available */}
          <AvatarImage src="/placeholder-user.jpg" alt="@johndon" />
          <AvatarFallback className="bg-primary text-primary-foreground text-3xl">JD</AvatarFallback>
        </Avatar>
        <div>
          <h2 className="text-xl font-bold text-white">JOHN DON</h2>
          <p className="text-sm text-sidebar-foreground/70">johndon@company.com</p>
        </div>
      </div>
      <nav className="flex-1">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className={cn(
                  'flex items-center space-x-3 p-3 rounded-lg capitalize transition-colors',
                  activeItem === item.label
                    ? 'bg-white/10 text-white font-semibold'
                    : 'hover:bg-white/5 text-sidebar-foreground/80 hover:text-white'
                )}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default SidebarNav;
