import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './pages/productList';
import ProductDetails from './pages/productDetails';
import Cart from './pages/cart';
import RetailerDashboard from './pages/retailerDashboard';
import './App.css'; // Import the CSS file
import RetailerSignUp from './pages/retailerSignUp';
import Checkout from './components/checkout';
import { AuthProvider } from './components/authcontext/AuthContext';
import Home from './pages/home/Home';
import ClientDashboard from './pages/clientDashboard';
import AdminDashboard from './pages/adminDashboard';

function App() {
  return (
    <AuthProvider>
      <div>
        <div className="w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/" element={<ProductList />} />
            <Route path="/client-dashboard" element={<ClientDashboard />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/dashboard" element={<RetailerDashboard />} />
            <Route path="/signup" element={<RetailerSignUp />} />
            <Route path="/checkout" element={<Checkout />} /> 
            <Route path="/admin-dashboard" element={<AdminDashboard />} /> 
          </Routes>
        </div>
      </div>
    </AuthProvider>
  );
}

export default App;