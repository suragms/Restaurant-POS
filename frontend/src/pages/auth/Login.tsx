import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuthStore } from '../../store/useAuthStore';
import { 
  ChefHat, 
  Lock, 
  Mail, 
  Eye, 
  EyeOff, 
  Loader2, 
  CheckCircle2
} from 'lucide-react';

export const Login: React.FC = () => {
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simulation of authentication request
    setTimeout(() => {
      // Hardcode matching SuperAdmin credential simulation just for preview fidelity
      if (email === 'admin@hexapos.com' && password === 'Admin123!hXa') {
        login({
          email: 'admin@hexapos.com',
          fullName: 'Platform Super Admin',
          role: 'SuperAdmin',
          token: 'mock-super-admin-token'
        });
        navigate('/superadmin');
      } else {
        // Simulating general successful login for development experience
        login({
          email: email,
          fullName: 'Alex Rivera',
          role: 'Manager',
          token: 'mock-general-token'
        });
        navigate('/');
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen w-full flex bg-slate-50 selection:bg-primary/30 overflow-hidden font-sans">
      
      {/* Brand Hero Section (Hidden on Mobile) */}
      <div className="hidden lg:flex w-1/2 bg-dark relative overflow-hidden items-center justify-center p-12">
        {/* Elegant Ambient Gradient Shapes */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary opacity-20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-1/4 -left-24 w-80 h-80 bg-primary opacity-10 blur-[100px] rounded-full"></div>
        
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1200" 
            className="w-full h-full object-cover mix-blend-overlay opacity-40 grayscale" 
            alt="Restaurant ambiance" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark/50 to-dark"></div>
        </div>

        <div className="relative z-10 text-white max-w-md">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="bg-primary p-3 rounded-xl shadow-lg shadow-primary/30">
              <ChefHat className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold font-headline-lg tracking-tight">GourmetPOS</h1>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl font-bold leading-[1.1] tracking-tight mb-6"
          >
            The Future of <br/>
            <span className="text-primary">Hospitality</span> Tech.
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-300 text-lg leading-relaxed mb-10 font-body-md"
          >
            Smart Restaurant Billing, Real-time POS and comprehensive Kitchen Management all inside one robust SaaS ecosystem.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            {['Real-time Analytics', 'Cloud Native Platform', 'Multi-branch Sync'].map((feature, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span className="text-slate-200 font-medium">{feature}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Form Section */}
      <div className="flex-1 flex items-center justify-center p-6 md:p-12 bg-surface-container-lowest relative">
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-[440px]"
        >
          {/* Mobile Brand Trigger */}
          <div className="lg:hidden flex items-center gap-2 mb-8">
            <ChefHat className="w-8 h-8 text-primary" />
            <span className="text-2xl font-bold text-on-surface">GourmetPOS</span>
          </div>

          <div className="mb-8">
            <h3 className="text-3xl font-bold text-on-surface mb-2">Welcome back</h3>
            <p className="text-on-surface-variant">Enter your credentials to access dashboard.</p>
          </div>

          {/* Glassmorphism Card wrapper */}
          <div className="bg-white border border-outline-variant p-8 md:p-10 rounded-3xl shadow-2xl shadow-slate-200/50 relative overflow-hidden">
            
            {error && (
              <div className="bg-red-50 border border-red-100 text-red-600 p-3 rounded-xl text-sm mb-6">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Input */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-on-surface">Work Email</label>
                <div className="relative group">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <input 
                    type="email" 
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-outline-variant rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-body-md"
                  />
                </div>
              </div>

              {/* Password Input */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-semibold text-on-surface">Password</label>
                  <button type="button" className="text-xs font-bold text-primary hover:underline">Forgot?</button>
                </div>
                <div className="relative group">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary transition-colors">
                    <Lock className="w-5 h-5" />
                  </div>
                  <input 
                    type={showPassword ? "text" : "password"} 
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-12 pr-12 py-3.5 bg-slate-50 border border-outline-variant rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-body-md"
                  />
                  <button 
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-on-surface transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Remember Me checkbox */}
              <div className="flex items-center gap-2">
                <input type="checkbox" id="remember" className="rounded border-outline-variant text-primary focus:ring-primary h-4 w-4 cursor-pointer" />
                <label htmlFor="remember" className="text-sm text-on-surface-variant cursor-pointer select-none font-medium">Keep me signed in</label>
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                disabled={isLoading}
                className="w-full py-4 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/30 hover:opacity-95 active:scale-[0.98] transition-all disabled:opacity-70 flex items-center justify-center gap-2 text-lg mt-2"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Signing In...
                  </>
                ) : (
                  "Sign in to Dashboard"
                )}
              </button>
            </form>
          </div>

          {/* Footer Meta */}
          <p className="text-center text-on-surface-variant text-xs mt-8">
            &copy; 2026 GourmetPOS Solutions. All rights reserved.<br />
            Dedicated to efficient hospitality management.
          </p>
        </motion.div>
      </div>
    </div>
  );
};
