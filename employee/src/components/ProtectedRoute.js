import React from 'react';
import { Navigate } from 'react-router-dom';
import './ProtectedRoute.css';

const ProtectedRoute = ({ children, role }) => {
  const userRole = role === 'admin' || role.startsWith('employee') ? role : null;

  if (!userRole) {
    return <Navigate to="/" />;
  }

  return <div className="protected-container">{children}</div>;
};

export default ProtectedRoute;
