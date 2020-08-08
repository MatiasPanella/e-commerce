import React, { useState } from "react";
import "./NavBar.css";

const NavBar = () => {
//  const [showMenu, setShowMenu] = useState(false);

  const getMenuItems = () => (
    <ul>
      <li>ETC</li>
      <li>Soporte</li>
      <li>¿Quienes somos?</li>
      <li>Login</li>
    </ul>
  );

  return (
    <div className="nav-bar">
      <div className="menu-btn">
        <div className="menu-btn__burguer"></div>
      </div>
      
      <div className="logo">Logo</div>

    </div>
  );
};
export default NavBar;
