import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./components/header";
import Home from "./components/home";
import MainLayout from "./hoc/mainLayout";

const AppRoutes = () => (
  <BrowserRouter>
    <Header />
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </MainLayout>
  </BrowserRouter>
);

export default AppRoutes;
