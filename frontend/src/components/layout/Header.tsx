import React from 'react';
import { Search, Bell, Wifi, HelpCircle } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="fixed top-0 right-0 w-[calc(100%-16rem)] z-40 bg-surface/80 backdrop-blur-md border-b border-outline-variant flex justify-between items-center px-lg h-touch_target">
      <div className="flex items-center gap-md flex-1">
        <div className="relative w-full max-w-md group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface-variant group-focus-within:text-primary transition-colors" />
          <input 
            type="text" 
            placeholder="Search analytics, orders, or items..." 
            className="w-full bg-surface-container-low border border-outline-variant rounded-full py-2 pl-10 pr-4 text-label-md focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-lg">
        <div className="flex items-center gap-sm bg-tertiary-container/20 px-3 py-1 rounded-full border border-tertiary-container/30 text-tertiary">
          <span className="w-2 h-2 rounded-full bg-current animate-pulse"></span>
          <span className="text-label-sm font-bold">Restaurant Open</span>
        </div>
        
        <div className="flex items-center gap-md">
          <button className="p-2 hover:bg-surface-container-highest rounded-full transition-all active:scale-90">
            <Bell className="w-5 h-5 text-on-surface-variant" />
          </button>
          <button className="p-2 hover:bg-surface-container-highest rounded-full transition-all active:scale-90">
            <Wifi className="w-5 h-5 text-on-surface-variant" />
          </button>
          <button className="p-2 hover:bg-surface-container-highest rounded-full transition-all active:scale-90">
            <HelpCircle className="w-5 h-5 text-on-surface-variant" />
          </button>
        </div>
      </div>
    </header>
  );
};
