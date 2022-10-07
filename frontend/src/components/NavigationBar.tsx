import {NavLink} from "react-router-dom";
import React, {useState} from "react";
import "./NavigationBar.css"

export default function NavigationBar() {

    const [navClass , setNavClass] = useState<string>("topNav");
    const myFunction = () => {

        if (navClass === "topNav") {
            setNavClass("topNav responsive");
        } else {
            setNavClass("topNav");
        }
    }
    return (
        <nav className={navClass}>
            <a href="#" className="icon" onClick={myFunction}>
                <i>=</i>
            </a>
            <a><NavLink to={"/"} >Home</NavLink></a>
            <a><NavLink to={"/open"}>Open</NavLink></a>
            <a><NavLink to={"/inprogress"}>In Progress</NavLink></a>
            <a><NavLink to={"/done"}>Done</NavLink></a>
        </nav>
    )
}
