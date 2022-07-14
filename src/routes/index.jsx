import React from "react";
import Login from "../pages/Login";
import Register from "../pages/RegisterUser";
import Home from "../pages/Home";
import DashboardCategory from "../pages/Category";
import Course from "../pages/Course";
import Order from "../pages/Order";
import Profile from "../pages/Profile";
import ProtectedRoutes from "./PrivateRoute";
import ProtectedRoutesUser from "./PrivateRouteUser";
import PublicRoute from "./PublicRoute";
import Section from "../pages/Section";
import AddSection from "../pages/Section/addSection";
import DetailCourse from "../pages/DetailCourse";
import ProfileUser from "../pages/ProfileUser";
import ClassInCategory from "../pages/ClassInCategory";
import HomeUser from "../pages/HomeUser";
import MyClass from "../pages/MyClass";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function Index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRoutes />}>
          <Route path="/dashboard" element={<DashboardCategory />} />
          <Route
            path="/dashboard/:categoryName/:idCategory"
            element={<Course />}
          />
          <Route
            path="/dashboard/course/:courseName/:idCourse"
            element={<AddSection />}
          />
          <Route
            path="/dashboard/content/:title/:idSection"
            element={<Section />}
          />
          <Route path="/order" element={<Order />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route element={<ProtectedRoutesUser />}>
          <Route path="/home" element={<HomeUser />} />
          <Route path="/detail-course/:idCourse" element={<DetailCourse />} />
          <Route path="/user-profile" element={<ProfileUser />} />
          <Route
            path="/class-category/:categoryName/:idCategory"
            element={<ClassInCategory />}
          />
          <Route path="/my-class" element={<MyClass />} />
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
