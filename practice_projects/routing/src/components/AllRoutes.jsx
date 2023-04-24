import React from "react";
import { Route, Routes } from "react-router-dom";

import { About } from "../page/About";
import { Home } from "../page/Home";
import { Users } from "../page/Users";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/users" element={<Users />} />
      <Route path="/About" element={<About />} />
    </Routes>
  );
};
export { AllRoutes };
