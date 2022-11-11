import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Home from "./Home";
import PrivateRoute from "../Components/PrivateRoute";
import Fish from "./Fish";
import Chicken from "./Chicken";
import Cart from "./Cart";
import Checkout from "./Checkout";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/chicken" element={<PrivateRoute><Chicken /></PrivateRoute>}></Route>
      <Route path="/fish" element={<PrivateRoute><Fish /></PrivateRoute>}></Route>
      <Route path="/checkout" element={<PrivateRoute><Checkout /></PrivateRoute>}></Route>
      <Route path="/cart" element={<PrivateRoute><Cart /></PrivateRoute>}></Route>
      
    </Routes>
  );
}

export default AllRoutes;
