// src/components/ProtectedRoute.jsx
import { useAuth } from './AuthContext';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  const { user, loading } = useAuth();

  if (loading) return <div>Loading...</div>;
  
  return user ? <Outlet /> : <Navigate to="/api/login" replace />;
};

export default ProtectedRoute;