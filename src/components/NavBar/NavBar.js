import React, { useState } from "react";
import "./NavBar.css";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

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
      
      <div className="navbar_menu">
        <button
          className="navbar__menu__mobile__icon"
          onClick={() => setShowMenu(!showMenu)}
        ></button>
        {showMenu ? (
          <div
            className="navbar__menu__mobile__items"
            onClick={() => setShowMenu(false)}
          >
            {getMenuItems()}
          </div>
        ) : null}
      </div>
      <div className="logo">Logo</div>
      {getMenuItems()}

    </div>
  );
};
export default NavBar;
