import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProductsPage } from './app/pages/ProductsPage';
import { SelectedProduct } from './app/pages/SelectedProduct';
import { Pricing } from './app/pages/Pricing';
import {Login } from './app/src/auth/pages/Login';
import { SignUp } from './app/src/auth/pages/SignUp';
import { Home } from './app/src/vms/pages/Home';
import { AddVms } from './app/src/vms/pages/AddVms';
import { EditVms } from './app/src/vms/pages/EditVms';
import { TCOComparisonCalculator } from './app/src/vms/pages/TCOComparisonCalculator';
function App() {
  return (
    <BrowserRouter>
    <br />
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/demotypescript" element={<Login />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/home" element={<Home />} />
      <Route path="/addVms" element={<AddVms />} />
      <Route path="/editVms/:id" element={<EditVms />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/tco" element={<TCOComparisonCalculator />} />
      <Route path="/product/:productId" element={<SelectedProduct />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route> 404 Not Found </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
