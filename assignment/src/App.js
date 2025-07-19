import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { logout } from './store/slices/authSlice';
import Home from "./pages/Home";
import ProductDetail from "./components/ProductDetail";
import ProductEdit from "./pages/ProductEdit";
import ProductAdd from "./pages/ProductAdd";
import ManageProduct from "./pages/ManageProduct";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

// Wrapper component to conditionally render header
const AppContent = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";
  const { user } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      {!isLoginPage && <Header user={user} onLogout={handleLogout} />}
      <div className="container">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
          <Route path="/products/add" element={user ? <ProductAdd /> : <Navigate to="/login" />} />
          <Route path="/products/:id" element={user ? <ProductDetail /> : <Navigate to="/login" />} />
          <Route path="/products/:id/edit" element={user ? <ProductEdit /> : <Navigate to="/login" />} />
          <Route path="/manage-products" element={user ? <ManageProduct /> : <Navigate to="/login" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
};

function App() {
  return (
    <div className="App">
      <Router>
        <AppContent />
      </Router>
    </div>
  );
}

export default App;
