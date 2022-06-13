import React from "react";
import Login from "../pages/LoginAdmin";
import Register from "../pages/RegisterUser";
import Home from "../pages/Home";
import DashboardAdmin from "../pages/DashboardAdmin";
import ProtectedRoutes from "./PrivateRoute";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function Index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRoutes />}>
          <Route path="/dashboard" element={<DashboardAdmin />} />
        </Route>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Index;