import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MainLayout } from './components/layout/MainLayout';
import { SuperAdminLayout } from './components/layout/SuperAdminLayout';
import { ProtectedRoute } from './components/auth/ProtectedRoute';

// Pages
import { Login } from './pages/auth/Login';
import { Dashboard } from './pages/dashboard/Dashboard';
import { POS } from './pages/pos/POS';

const queryClient = new QueryClient();

// Lightweight Placeholder for missing page renders
const PlaceholderPage: React.FC<{ title: string }> = ({ title }) => (
  <div className="h-[calc(100vh-120px)] flex flex-col items-center justify-center text-center p-10 bg-white rounded-2xl border border-outline-variant">
    <div className="w-24 h-24 bg-primary-container rounded-full flex items-center justify-center mb-4">
      <span className="text-3xl text-primary font-bold font-display-lg">🏗️</span>
    </div>
    <h2 className="text-2xl font-bold text-on-surface mb-2 font-headline-lg">{title}</h2>
    <p className="text-on-surface-variant font-body-md">This dynamic administration feature is staged and under active initialization.</p>
  </div>
);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          {/* Authentication Gate */}
          <Route path="/login" element={<Login />} />

          {/* Root Redirect to dynamic dashboard based on state could happen in a hook, defaulting to / */}
          <Route path="/" element={<Navigate to="/dashboard" replace />} />

          {/* Restaurant / Tenant Scope (Protected) */}
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <MainLayout />
            </ProtectedRoute>
          }>
            <Route index element={<Dashboard />} />
            <Route path="pos" element={<POS />} />
            <Route path="tables" element={<PlaceholderPage title="Floor Management" />} />
            <Route path="orders" element={<PlaceholderPage title="Order History" />} />
            <Route path="inventory" element={<PlaceholderPage title="Inventory Management" />} />
            <Route path="staff" element={<PlaceholderPage title="Staff Directory" />} />
            <Route path="reports" element={<PlaceholderPage title="Analytics & Reports" />} />
            <Route path="settings" element={<PlaceholderPage title="Restaurant Settings" />} />
            <Route path="profile" element={<PlaceholderPage title="User Profile" />} />
          </Route>

          {/* SuperAdmin / SaaS Admin Scope (Protected: SuperAdmin only) */}
          <Route path="/superadmin" element={
            <ProtectedRoute allowedRole="SuperAdmin">
              <SuperAdminLayout />
            </ProtectedRoute>
          }>
            <Route index element={<PlaceholderPage title="Super Admin Analytics Control" />} />
            <Route path="restaurants" element={<PlaceholderPage title="Manage Tenant Restaurants" />} />
            <Route path="subscriptions" element={<PlaceholderPage title="SaaS Subscriptions" />} />
            <Route path="revenue" element={<PlaceholderPage title="Total Platform Revenue" />} />
            {/* ...additional super admin nested views map here */}
          </Route>
          
          {/* 404 Redirect */}
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
