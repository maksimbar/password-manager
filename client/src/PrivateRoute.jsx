import React from "react";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const isAuthenticated = JSON.parse(localStorage.getItem("profile"));

  if (isAuthenticated) {
    return children;
  }

  return <Navigate to="/auth" />;
};
