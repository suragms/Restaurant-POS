import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Calculator, 
  Table2, 
  ClipboardList, 
  Boxes, 
  Users, 
  BarChart3, 
  Settings 
} from 'lucide-react';

const navItems = [
  { name: 'Dashboard', icon: LayoutDashboard, path: '/' },
  { name: 'POS', icon: Calculator, path: '/pos' },
  { name: 'Tables', icon: Table2, path: '/tables' },
  { name: 'Orders', icon: ClipboardList, path: '/orders' },
  { name: 'Inventory', icon: Boxes, path: '/inventory' },
  { name: 'Staff', icon: Users, path: '/staff' },
  { name: 'Reports', icon: BarChart3, path: '/reports' },
  { name: 'Settings', icon: Settings, path: '/settings' },
  { name: 'Profile', icon: Users, path: '/profile' },
];

export const Sidebar: React.FC = () => {
  return (
    <aside className="h-screen w-64 fixed left-0 top-0 bg-surface border-r border-outline-variant shadow-sm flex flex-col p-4 z-50">
      <div className="mb-xl px-4">
        <h1 className="font-headline-md text-headline-md font-bold text-primary">
          GourmetPOS
        </h1>
        <p className="text-label-sm text-on-surface-variant">Main Dining Hall</p>
      </div>

      <nav className="flex-1 space-y-sm">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 active:scale-95 ${
                isActive
                  ? 'bg-secondary-container text-on-secondary-container font-bold'
                  : 'text-on-surface-variant hover:bg-surface-container-high'
              }`
            }
          >
            <item.icon className="w-5 h-5" />
            <span className="font-body-md">{item.name}</span>
          </NavLink>
        ))}
      </nav>

      <div className="mt-auto pt-lg border-t border-outline-variant">
        <div className="flex items-center gap-3 px-4">
          <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center overflow-hidden border-2 border-white shadow-sm">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5h1Cw2_fPJWOR0fRo5JC6Xjeam_6MHf_JmomQpPbHMfVRvbk9e0-OLdfMvZZ567yfAPA16bZqI8LY01m2Q9_Psp5U0kG9fzDDehvbJ8E06pOXBC7WuAi39AalN1ftQeiqWPv1RrukX9k_Grb5lBPZ6NefaYdk3EToKtxNVl0ODSOPjy8xqLMWEpCi-PtsVFufx4mJ9alS7wJ2ffSxXD0lsrk_ofGDujONKX_IPA4q0WkmZ-ABjWlLoU1pT71ftBVIn6Nf8yK3TDmc" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="font-label-md text-on-surface font-bold">Alex Rivera</p>
            <p className="text-label-sm text-on-surface-variant">General Manager</p>
          </div>
        </div>
      </div>
    </aside>
  );
};
