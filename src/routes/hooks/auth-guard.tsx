import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

// AuthGuard component for React Router DOM v7
// This component checks if the user is authenticated and redirects to sign-in if not
const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  
  // Check if user is authenticated by looking for accessToken in localStorage
  const isAuthenticated = localStorage.getItem('accessToken');

  // If not authenticated, redirect to sign-in page
  // The state property preserves the location the user was trying to access
  if (!isAuthenticated) {
    return <Navigate to="/sign-in" state={{ from: location }} replace />;
  }

  // If authenticated, render the children components
  return <>{children}</>;
};

export default AuthGuard;