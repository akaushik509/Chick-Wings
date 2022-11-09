import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";

import Home from "./Home";
import PrivateRoute from "../Components/PrivateRoute";
import Fish from "./Fish";
import Chicken from "./Chicken";
import SubCategory from "./SubCategory";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/chicken" element={<><Chicken /></>}></Route>
      <Route path="/fish" element={<PrivateRoute><Fish /></PrivateRoute>}></Route>
      <Route path="/subcategory" element={<PrivateRoute><SubCategory /></PrivateRoute>}></Route>
    </Routes>
  );
}

export default AllRoutes;
