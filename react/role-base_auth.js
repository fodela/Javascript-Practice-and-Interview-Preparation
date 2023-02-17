// React Protected Routes | Role-Based Authorization
import React from "react";

/*
Using custom hooks -- best practice
*/
// import or create AuthContext
// import AuthContext from "../context/AuthProvider"
const AuthContext = React.createContext();

const useAuth = () => {
  return React.useContext(AuthContext);
};

export default useAuth;

// Where we want to use the useAuth custom hooks
// import useAuth from '../hooks/useAuth'
const { setAuth1 } = useAuth();

/*
Without custom hooks
*/
import { useContext } from "react";
// import AuthContext from '../context/AuthContext'
const { setAuth } = useContext(AuthContext);

// Create requireAuth component
import { useLocation, Navigate, Outlet } from "react-router-dom";

const RequireAuth = () => {
  const { auth } = useAuth();
  const location = useLocation();

  return auth?.user ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};
