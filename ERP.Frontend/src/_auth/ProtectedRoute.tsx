// src/auth/ProtectedRoute.tsx
import { Navigate } from 'react-router-dom';
import type { JSX } from 'react';
import { useAuth } from './AuthProvider';

export const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};
