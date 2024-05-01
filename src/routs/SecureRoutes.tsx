import React, { FC } from 'react';
import { Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "../layouts/AppLayout/index";
import HomePage from "../pages/home/HomePage";
import LocationPage from "../pages/location/LocationPage";
import BrendsPage from "../pages/brends/BrendsPage";

const SecureRoutes: FC = () => {

  return (
    <Routes>
      <Route path="/" element={<Navigate to={'/home'} />} />

      <Route path={"/"} element={<AppLayout />}>
        <Route path="home" element={<HomePage />} />
        <Route path="brends" element={<BrendsPage />} />
        <Route path="location" element={<LocationPage />} />

      </Route>

      <Route path="*" element={<Navigate to={'/home'} />} />
    </Routes>
  );
};

export default SecureRoutes;
