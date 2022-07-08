import React from "react";
import { NavLink } from "react-router-dom";
import "./NavigationBar.css";
import ProfileImg from "../../icons/profile-img.png";
import ArrowDown from "../../icons/arrow-down.svg";

const NavigationBar = ({ menuOpen, setMenuOpen }) => {
    return (
        <nav className="navigation-bar">
            <div className="right">
                <div className={"hamburger "} onClick={() => setMenuOpen(!menuOpen)}>
                    <svg width="26" height="18" viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 2H24M2 9H17.2308M2 16H24" stroke="#8D8F98" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
            </div>
            <ul>
                <li>
                    <NavLink to="#" className="profile d-flex align-items-center">
                        <img src={ProfileImg} alt="img" />
                        <span className="mb-0">Leslie Alexander</span>
                        <img className="ms-2 rounded-circle" src={ArrowDown} alt="icon" />
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default NavigationBar;
