import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Signin from "./Pages/Signin";
import Login from "./Pages/Login";
import Cart from "./Pages/Cart";
import Order from "./Pages/Order";
import Profile from "./Pages/Profile";
import Dashboard from "./Pages/Dashboard";
import FAQ from "./Pages/FAQ";
import Search from "./Pages/Search";


function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/sigin" element={<Signin/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/order" element={<Order/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/faq" element={<FAQ/>}/>
          <Route path="/search" element={<Search/>}/>
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
