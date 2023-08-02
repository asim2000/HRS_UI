import React from 'react';
import { Navigate, Outlet, Route } from 'react-router-dom';
import { isAuthenticated } from '../../utilities/jwt/isAuthenticate';

const ProtectedRoute = ({ component, path }) => {
  return isAuthenticated() ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;