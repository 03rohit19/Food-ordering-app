import React from "react";
import { LOGO_URL } from "../Utils/Constants";
const Header = () => {
  return (
    <div className="Header">
      <div className="Header-container">
        <img className="logo-container" alt="Logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
