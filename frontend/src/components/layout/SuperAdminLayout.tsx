import React from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../store/useAuthStore';
import { Header } from './Header';
import { 
  LayoutDashboard, 
  Building2, 
  Users, 
  CreditCard, 
  LineChart, 
  FileText, 
  Bell, 
  ShieldAlert, 
  Settings, 
  UserCircle,
  LogOut,
  ChefHat
} from 'lucide-react';

const adminNavItems = [
  { name: 'Dashboard', icon: LayoutDashboard, path: '/superadmin' },
  { name: 'Restaurants', icon: Building2, path: '/superadmin/restaurants' },
  { name: 'Owners', icon: Users, path: '/superadmin/owners' },
  { name: 'Staff', icon: Users, path: '/superadmin/staff' },
  { name: 'Subscriptions', icon: CreditCard, path: '/superadmin/subscriptions' },
  { name: 'Revenue', icon: LineChart, path: '/superadmin/revenue' },
  { name: 'Reports', icon: FileText, path: '/superadmin/reports' },
  { name: 'Notifications', icon: Bell, path: '/superadmin/notifications' },
  { name: 'Audit Logs', icon: ShieldAlert, path: '/superadmin/audit' },
  { name: 'Settings', icon: Settings, path: '/superadmin/settings' },
  { name: 'Profile', icon: UserCircle, path: '/superadmin/profile' },
];

export const SuperAdminLayout: React.FC = () => {
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Dedicated Admin Sidebar */}
      <aside className="h-screen w-64 fixed left-0 top-0 bg-[#1E293B] text-slate-300 shadow-xl flex flex-col z-50 overflow-hidden border-r border-slate-800">
        <div className="p-6 flex items-center gap-3 border-b border-slate-800/60 bg-[#1E293B]">
          <div className="p-2 bg-primary rounded-xl shadow shadow-primary/20">
            <ChefHat className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="font-bold text-xl text-white tracking-tight">HexaPOS</h1>
            <span className="text-[10px] uppercase tracking-wider text-primary font-bold">Super Admin Panel</span>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto no-scrollbar p-4 space-y-1">
          {adminNavItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              end
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium text-sm group ${
                  isActive
                    ? 'bg-primary text-white shadow-lg shadow-primary/20'
                    : 'hover:bg-slate-800 hover:text-white text-slate-400'
                }`
              }
            >
              <item.icon className="w-4.5 h-4.5" />
              <span>{item.name}</span>
            </NavLink>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-800/60 bg-slate-900/50">
          <div className="flex items-center gap-3 px-2 mb-3">
            <div className="w-9 h-9 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold text-sm uppercase shadow-inner">
              {user?.fullName.charAt(0)}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-white truncate">{user?.fullName}</p>
              <p className="text-xs text-slate-400 truncate">Main Administrator</p>
            </div>
          </div>
          <button 
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg bg-slate-800 text-slate-300 hover:bg-red-500 hover:text-white text-sm font-semibold transition-all group"
          >
            <LogOut className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            Log Out
          </button>
        </div>
      </aside>

      {/* Reusing Standard Header but placing inside offset content */}
      <Header />
      
      <main className="ml-64 mt-[44px] p-lg">
        {/* View Injects here */}
        <Outlet />
      </main>
    </div>
  );
};
