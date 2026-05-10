import { Navigate, useLocation } from 'react-router-dom';
import { useAuthStore } from '../../store/useAuthStore';

interface ProtectedRouteProps {
  children: JSX.Element;
  allowedRole?: string;
}

export const ProtectedRoute = ({ children, allowedRole }: ProtectedRouteProps) => {
  const { isAuthenticated, user } = useAuthStore();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (allowedRole && user?.role !== allowedRole) {
    // Redirect user back to base if trying to access unauthorized portal
    return <Navigate to="/" replace />;
  }

  return children;
};
