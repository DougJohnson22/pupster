import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavTabs() {
    const location = useLocation();

    return (
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <Link
                    to="/about"
                    className={location.pathname === "/about" ? "nav-link active" : "nav-link"}
                >
                    About
        </Link>
            </li>
            <li className="nav-item">
                <Link
                    to="/Discover"
                    className={location.pathname === "/Discover" ? "nav-link active" : "nav-link"}
                >
                    Discover
        </Link>
            </li>
            <li className="nav-item">
                <Link
                    to="/Search"
                    className={location.pathname === "/Search" ? "nav-link active" : "nav-link"}
                >
                    Search
        </Link>
            </li>

        </ul>
    );
}

export default NavTabs;