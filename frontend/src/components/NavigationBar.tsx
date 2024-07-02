import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import "./NavigationBar.css";

export default function NavigationBar() {
    const [navClass, setNavClass] = useState("topNav");

    const myFunction = () => {
        if (navClass === "topNav") {
            setNavClass("topNav responsive");
        } else {
            setNavClass("topNav");
        }
    };

    return (
        <nav className={navClass}>
            <a href="#" className="icon" onClick={myFunction}>
                &#9776; {/* Unicode for the burger menu icon */}
            </a>
            <NavLink to="/">
                Home
            </NavLink>
            <NavLink to="/open">
                Open
            </NavLink>
            <NavLink to="/inprogress">
                In Progress
            </NavLink>
            <NavLink to="/done">
                Done
            </NavLink>
        </nav>
    );
}
