import React from "react";
import "./SearchBar.css";
import SearchIcon from "@material-ui/icons/Search";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input
        className="input-bar"
        type="text"
        name="input"
        placeholder="Busque productos y mas..."
        //onChange={handleEvent}
      />
      <SearchIcon style={{color:'white'}} role="button" onClick={() => console.log("hola")} />
    </div>
  );
};
export default SearchBar;
