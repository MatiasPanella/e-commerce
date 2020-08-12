import React, { useState } from "react";
import "./NavBar.css";
import SearchBar from "../SearchBar/SearchBar";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState("close");

  return (
    <div className="nav-bar">
      <div
        className="menu-btn"
        role="button"
        onClick={() => setShowMenu(showMenu === "open" ? "close" : "open")}
      >
        <i className={showMenu}></i>
        <i className={showMenu}></i>
        <i className={showMenu}></i>
      </div>
      <h2 style={{ color: "white" }}> Techno Store</h2>
      <SearchBar />
      <div className='cart-icon'>
        <ShoppingCartIcon style={{ color: "white" }} fontSize='large'/>
        <p  style={{ color: "white" }}>(0)</p>
      </div>
    </div>
  );
};
export default NavBar;
