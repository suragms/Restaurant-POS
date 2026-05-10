import React from 'react';
import { 
  TrendingUp, 
  ShoppingBasket, 
  Utensils, 
  Star, 
  Calendar, 
  Download,
  Zap,
  ArrowRight
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';

const chartData = [
  { name: 'Mon', current: 1200, previous: 1000 },
  { name: 'Tue', current: 3200, previous: 1800 },
  { name: 'Wed', current: 2800, previous: 2100 },
  { name: 'Thu', current: 4800, previous: 3200 },
  { name: 'Fri', current: 3800, previous: 3900 },
  { name: 'Sat', current: 3200, previous: 2800 },
  { name: 'Sun', current: 3500, previous: 2500 },
];

export const Dashboard: React.FC = () => {
  return (
    <div className="animate-fade-in">
      {/* Page Title */}
      <div className="mb-xl flex flex-col md:flex-row md:justify-between md:items-end gap-md">
        <div>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">Analytics Dashboard</h2>
          <p className="text-body-md text-on-surface-variant">Real-time performance overview for GourmetPOS</p>
        </div>
        <div className="flex gap-md">
          <button className="flex items-center gap-sm bg-surface border border-outline-variant px-4 py-2 rounded-lg font-label-md text-on-surface-variant hover:bg-surface-container-low transition-colors">
            <Calendar className="w-4 h-4" />
            Today: Oct 24, 2023
          </button>
          <button className="flex items-center gap-sm bg-primary text-on-primary px-4 py-2 rounded-lg font-label-md hover:opacity-90 transition-opacity shadow-md shadow-primary/20">
            <Download className="w-4 h-4" />
            Export Report
          </button>
        </div>
      </div>

      {/* KPI Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-lg mb-xl">
        {/* Total Revenue */}
        <div className="glass-card p-md rounded-xl border-t-4 border-primary hover:shadow-lg transition-shadow">
          <div className="flex justify-between items-start mb-sm">
            <div className="p-2 bg-primary-container/10 rounded-lg text-primary">
              <TrendingUp className="w-6 h-6" />
            </div>
            <span className="text-label-sm px-2 py-0.5 bg-green-100 text-green-700 rounded-full font-bold">+12%</span>
          </div>
          <p className="text-label-md text-on-surface-variant mb-xs">Total Revenue</p>
          <h3 className="text-price-display font-price-display text-on-surface">$12,450.00</h3>
        </div>

        {/* Orders Today */}
        <div className="glass-card p-md rounded-xl hover:shadow-lg transition-shadow">
          <div className="flex justify-between items-start mb-sm">
            <div className="p-2 bg-secondary-container/20 rounded-lg text-secondary">
              <ShoppingBasket className="w-6 h-6" />
            </div>
          </div>
          <p className="text-label-md text-on-surface-variant mb-xs">Orders Today</p>
          <h3 className="text-price-display font-price-display text-on-surface">142</h3>
        </div>

        {/* Active Tables */}
        <div className="glass-card p-md rounded-xl border-t-4 border-tertiary hover:shadow-lg transition-shadow">
          <div className="flex justify-between items-start mb-sm">
            <div className="p-2 bg-tertiary-container/10 rounded-lg text-tertiary">
              <Utensils className="w-6 h-6" />
            </div>
            <span className="text-label-sm text-on-surface-variant font-medium">75% Capacity</span>
          </div>
          <p className="text-label-md text-on-surface-variant mb-xs">Active Tables</p>
          <h3 className="text-price-display font-price-display text-on-surface">18/24</h3>
        </div>

        {/* Best-selling */}
        <div className="glass-card p-md rounded-xl hover:shadow-lg transition-shadow">
          <div className="flex justify-between items-start mb-sm">
            <div className="p-2 bg-surface-container-highest rounded-lg text-on-surface-variant">
              <Star className="w-6 h-6" />
            </div>
          </div>
          <p className="text-label-md text-on-surface-variant mb-xs">Best-selling Dish</p>
          <h3 className="text-headline-md font-headline-md text-on-surface truncate">Truffle Pasta</h3>
        </div>
      </div>

      {/* Revenue Chart Section */}
      <div className="glass-card p-lg rounded-xl mb-xl">
        <div className="flex flex-col md:flex-row justify-between md:items-center mb-lg gap-sm">
          <h4 className="font-headline-md text-on-surface">Weekly Revenue Growth</h4>
          <div className="flex items-center gap-md">
            <div className="flex items-center gap-xs">
              <span className="w-3 h-3 rounded-full bg-primary"></span>
              <span className="text-label-sm text-on-surface-variant">This Week</span>
            </div>
            <div className="flex items-center gap-xs">
              <span className="w-3 h-3 rounded-full bg-outline-variant"></span>
              <span className="text-label-sm text-on-surface-variant">Last Week</span>
            </div>
          </div>
        </div>
        
        <div className="h-72 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData}>
              <defs>
                <linearGradient id="colorCurrent" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#FF6B35" stopOpacity={0.2}/>
                  <stop offset="95%" stopColor="#FF6B35" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
              <XAxis 
                dataKey="name" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#64748B', fontSize: 12 }}
              />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#64748B', fontSize: 12 }}
                tickFormatter={(value) => `$${value / 1000}k`}
              />
              <Tooltip 
                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                formatter={(value: number) => [`$${value}`, 'Revenue']}
              />
              <Area 
                type="monotone" 
                dataKey="current" 
                stroke="#FF6B35" 
                strokeWidth={3}
                fillOpacity={1} 
                fill="url(#colorCurrent)" 
              />
              <Area 
                type="monotone" 
                dataKey="previous" 
                stroke="#CBD5E1" 
                strokeWidth={2}
                strokeDasharray="5 5"
                fillOpacity={0}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Lower Section Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-lg">
        {/* Recent Transactions */}
        <div className="lg:col-span-2 glass-card rounded-xl flex flex-col overflow-hidden">
          <div className="p-lg border-b border-outline-variant flex justify-between items-center">
            <h4 className="font-headline-md text-on-surface">Recent Transactions</h4>
            <button className="text-primary font-label-md hover:underline flex items-center gap-1">
              View All <ArrowRight className="w-3 h-3" />
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-surface-container-low text-label-sm text-on-surface-variant uppercase tracking-wider">
                  <th className="px-lg py-md font-bold">Transaction ID</th>
                  <th className="px-lg py-md font-bold">Order Details</th>
                  <th className="px-lg py-md font-bold">Status</th>
                  <th className="px-lg py-md font-bold text-right">Amount</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant">
                {[
                  { id: '#GP-8842', details: 'Table 04 — Dine-in', sub: '4 items • 12:45 PM', status: 'Successful', amount: 154.20 },
                  { id: '#GP-8841', details: 'Takeaway — App Order', sub: '2 items • 12:38 PM', status: 'Successful', amount: 42.00 },
                  { id: '#GP-8840', details: 'Table 12 — Dine-in', sub: '6 items • 12:15 PM', status: 'Pending', amount: 312.45 },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-surface-container-low transition-colors group">
                    <td className="px-lg py-md font-label-md group-hover:text-primary transition-colors">{row.id}</td>
                    <td className="px-lg py-md">
                      <div className="flex flex-col">
                        <span className="text-body-md font-medium">{row.details}</span>
                        <span className="text-label-sm text-on-surface-variant">{row.sub}</span>
                      </div>
                    </td>
                    <td className="px-lg py-md">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-label-sm font-bold ${
                        row.status === 'Successful' ? 'bg-green-100 text-green-700' : 'bg-tertiary-container/30 text-tertiary'
                      }`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${row.status === 'Successful' ? 'bg-green-600' : 'bg-tertiary'}`}></span> 
                        {row.status}
                      </span>
                    </td>
                    <td className="px-lg py-md text-right font-bold font-price-display text-lg">${row.amount.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Live Restaurant Activity */}
        <div className="glass-card rounded-xl flex flex-col h-full">
          <div className="p-lg border-b border-outline-variant flex items-center gap-sm">
            <Zap className="w-5 h-5 text-primary fill-primary/20" />
            <h4 className="font-headline-md text-on-surface">Live Activity</h4>
          </div>
          <div className="p-lg space-y-lg overflow-y-auto max-h-[400px] flex-1 no-scrollbar">
            {[
              { title: 'Order #8842 Ready', text: 'Truffle Pasta & Sea Bass are ready to serve for Table 04.', time: '2 mins ago', color: 'bg-primary' },
              { title: 'New Reservation', text: 'Dr. Miller — Table for 4 at 7:30 PM tonight.', time: '15 mins ago', color: 'bg-secondary' },
              { title: 'Low Stock Alert', text: 'Fresh Salmon inventory is below 15% threshold.', time: '45 mins ago', color: 'bg-error' },
              { title: 'Shift Started', text: 'Head Chef Maria and 4 kitchen staff clocked in.', time: '1 hour ago', color: 'bg-primary' },
            ].map((act, j) => (
              <div key={j} className="flex gap-md relative">
                <div className={`w-2 h-2 mt-2 rounded-full flex-shrink-0 animate-pulse ${act.color}`}></div>
                <div>
                  <p className="text-body-md font-medium text-on-surface">{act.title}</p>
                  <p className="text-label-md text-on-surface-variant">{act.text}</p>
                  <p className={`text-label-sm font-bold mt-1 ${act.color.includes('primary') ? 'text-primary' : act.color.includes('error') ? 'text-error' : 'text-on-surface-variant'}`}>{act.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
