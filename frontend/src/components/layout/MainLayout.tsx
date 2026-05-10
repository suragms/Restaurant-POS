import React from 'react';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { Outlet } from 'react-router-dom';

export const MainLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-surface-container-lowest">
      <Sidebar />
      <Header />
      <main className="ml-64 mt-[44px] p-lg">
        <Outlet />
      </main>
    </div>
  );
};
