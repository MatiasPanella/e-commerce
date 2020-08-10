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
      <div className="menu-btn">
        <button
          className="menu-btn__burguer"
          onClick={() => setShowMenu(!showMenu)}
        ></button>
        {showMenu ? (
          <div
            className="menu-btn__burger"
            onClick={() => setShowMenu(false)}
          >
            {getMenuItems()}
          </div>
        ) : null}
      </div>
    </div>
  );
};
export default NavBar;
