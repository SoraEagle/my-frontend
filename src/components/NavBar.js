import React from "react";
import {NavLink} from "react-router-dom";

const linkStyles = {
    display: "inline-block",
    width: "50px",
    margin: "0 6px 6px",
    background: "blue",
    textDecoration: "underline",
    border: "2px solid black",
    color: "white"
  };

function NavBar(){
    return(
        <div id="nav">
            <NavLink style={linkStyles} to="/trips">
                My Trips
            </NavLink>
            <NavLink style={linkStyles} to="/items">
                My Items
            </NavLink>
        </div>
    );
}

export default NavBar;