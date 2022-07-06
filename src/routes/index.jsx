import React from "react";
import Login from "../pages/Login";
import Register from "../pages/RegisterUser";
import Home from "../pages/Home";
import DashboardCategory from "../pages/Category";
import Course from "../pages/Course";
import Order from "../pages/Order";
import Profile from "../pages/Profile";
import ProtectedRoutes from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import Section from "../pages/Section";
import DetailCourse from "../pages/DetailCourse";

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
          <Route path="/section" element={<Section />} />
        </Route>
        <Route path="/" element={<Home />} />
        <Route element={<PublicRoute />}>
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/detail-course" element={<DetailCourse />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Index;
