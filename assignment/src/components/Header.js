import React from "react";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';
import "./Header.css";

function Header({ user, onLogout }) {
  return (
    <div className="main-header">
      <nav className="main-nav">
        <div className="nav-links">
          <Link to="/" className="nav-link-primary">
            HOME
          </Link>
          
          {user && (
            <>
              <Link to="/products/add" className="nav-link-primary">
                ADD PRODUCT
              </Link>
              
              <Link to="/manage-products" className="nav-link-primary">
                MANAGE PRODUCTS
              </Link>
            </>
          )}
        </div>
        
        {user && (
          <div className="user-menu">
            <span className="user-welcome">Hello, {user.username}</span>
            <button onClick={onLogout} className="logout-button">
              LOGOUT
            </button>
          </div>
        )}
      </nav>
    </div>
  );
}

Header.propTypes = {
  user: PropTypes.object,
  onLogout: PropTypes.func.isRequired
};

export default Header;