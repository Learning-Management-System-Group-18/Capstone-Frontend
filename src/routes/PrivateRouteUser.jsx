import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const useAuth = () => {
    const role = localStorage.getItem("role");
    const token = localStorage.getItem("token");
    if (token && role === "ROLE_USER") {
        return true;
    } else {
        return false;
    }
};

const ProtectedRoutesUser = () => {
    const auth = useAuth();
    return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutesUser;
