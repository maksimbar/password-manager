import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export const ProtectedRoute = ({ user, children }) => {
  const isAuthenticated = JSON.parse(localStorage.getItem('profile'));

  if (!isAuthenticated && !user) {
    return <Navigate to="/auth" replace />;
  } else if (isAuthenticated && user) {
    return <Navigate to="/vault" replace />;
  }

  return children ? children : <Outlet />;
};
