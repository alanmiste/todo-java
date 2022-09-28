import {NavLink} from "react-router-dom";
import React from "react";
import "./NavigationBar.css"

export default function NavigationBar() {

    return (
        <nav>
            <NavLink  to={"/"}>Home</NavLink>
            <NavLink to={"/open"}>Open</NavLink>
            <NavLink to={"/inprogress"}>In Progress</NavLink>
            <NavLink to={"/done"}>Done</NavLink>
        </nav>
    )
}

// className={({isActive}) => isActive ? "active" : "inActive"}