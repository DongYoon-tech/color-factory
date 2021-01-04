import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css"


const NavBar = () => {

    return (
        <div className="NavBar">
            <h1>Welcome to the color factory.</h1>
            <Link to="/colors/new">Add Color</Link>
        </div >
    )

}


export default NavBar;