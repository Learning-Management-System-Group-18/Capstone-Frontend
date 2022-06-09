import React from "react";
import Login from "../pages/LoginAdmin";
import Register from "../pages/RegisterUser";
import Home from "../pages/Home";
import DashboardAdmin from "../pages/DashboardAdmin";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function Index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<DashboardAdmin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Index;
