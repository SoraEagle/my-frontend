import React from "react";
import {NavLink} from "react-router-dom";

const linkStyles = {
    display: "inline-block",
    // height: "50px",
    width: "50px",
    // padding: "12px",
    margin: "0 6px 6px",
    background: "blue",
    textDecoration: "underline",
    borderLeft: "2px solid black",
    borderBottom: "2px solid black",
    borderRight: "2px solid black",
    borderTop: "2px solid black",
    color: "white"
  };

// Routes: Trips, Trip, Items, Item, ...
function NavBar(){
    return(
        <div
        style={{
            backgroundColor: "firebrick",
            borderBottom: "2px solid black",
            marginBottom: "12px",
            width: "100%",
            height: "10vh" //Keeps height of navbar to 10% of browser window's height.
        }}>
            {/* <NavLink style={linkStyles} to="/">
                Home Page
            </NavLink> */}
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