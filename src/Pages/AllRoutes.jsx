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

function AllRoutes({cart,handleAddintoCart,handleRemoveProduct,total}) {
  return (
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/chicken" element={<PrivateRoute><Chicken handleAddintoCart={handleAddintoCart}/></PrivateRoute>}></Route>
      <Route path="/fish" element={<PrivateRoute><Fish /></PrivateRoute>}></Route>
      <Route path="/checkout" element={<PrivateRoute><Checkout cart={cart}/></PrivateRoute>}></Route>
      <Route path="/cart" element={<PrivateRoute><Cart cart={cart} handleAddintoCart={handleAddintoCart} handleRemoveProduct={handleRemoveProduct}/></PrivateRoute>}></Route> 
    </Routes>
  );
}

export default AllRoutes;
