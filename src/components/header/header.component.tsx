import React from "react";
import { Link } from "react-router-dom";
import "./header.styles.scss";
import logo from "../../assets/crown.svg";

export const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <img src={logo} alt="logo" className="logo" />
      </Link>
      <div className="options">
        <Link to="/shop" className="option">
          SHOP
        </Link>
        <Link to="/contact" className="option">
          CONTACT
        </Link>
      </div>
    </div>
  );
};
