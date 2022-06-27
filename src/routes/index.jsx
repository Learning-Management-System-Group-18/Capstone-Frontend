import React from "react";
import Login from "../pages/Login";
import Register from "../pages/RegisterUser";
import Home from "../pages/Home";
import DashboardCategory from "../pages/DashboardAdmin/Category";
import Course from "../pages/Course";
import Order from "../pages/Order";
import Profile from "../pages/Profile";
import ProtectedRoutes from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function Index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRoutes />}>
          <Route path="/dashboard" element={<DashboardCategory />} />
          <Route path="/dashboard/:categoryName" element={<Course />} />
          <Route path="/order" element={<Order />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="/" element={<Home />} />
        <Route element={<PublicRoute />}>
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Index;
