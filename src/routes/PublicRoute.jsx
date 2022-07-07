import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const useAuth = () => {
  const role = localStorage.getItem("role");
  const token = localStorage.getItem("token");
  if (token && role === "ROLE_ADMIN") {
    return true;
  } else if (token && role === "ROLE_USER") {
    return true;
  } else {
    return false;
  }
};

const PublicRoute = () => {
  const role = localStorage.getItem("role");
  const auth = useAuth();
  return (auth && role === "ROLE_ADMIN" ? (<Navigate to="/dashboard" />) : auth && role === "ROLE_USER" ? (<Navigate to="/home" />) : (<Outlet />));
};

export default PublicRoute;
