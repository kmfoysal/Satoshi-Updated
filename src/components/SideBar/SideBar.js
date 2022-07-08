// import { motion } from "framer-motion";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import RightArrow from "../../icons/arrow-right.png";
import Logo from "../../images/logo.svg";
import Graph from "../../icons/graph.png";
import Humbarger from "../../icons/humbargar-icon.png";
import setting from "../../icons/profile-2user.svg";
import Settings from "../../icons/setting-2.png";
import "./SideBar.css";
import SidebarMenu from "./SidebarMenu";

const routes = [
    {
        path: "/",
        name: "Dashboard",
        icon: Graph,

        subRoutes: [
            {
                path: "/dashboard",
                name: "Home",
            },
            {
                path: "/browse",
                name: "Browse",
            },
            {
                path: "/playlist",
                name: "Playlists",
            },
            {
                path: "/snapshots",
                name: "Snapshots",
            },
            {
                path: "/libraryPanel",
                name: "Library Panel",
            },
            {
                path: "/admincontrol",
                name: "Admin Control",
            },
        ],
    },

    {
        path: "/configaration",
        name: "Configuration",
        icon: setting,
        subRoutes: [
            {
                path: "/login",
                name: "User",
            },

            {
                path: "/setting",
                name: "Preferences",
            },

            {
                path: "/multi_step_form",
                name: "API Keys",
            },
        ],
    },
    {
        path: "/alerting",
        name: "Alerting",
        icon: setting,
        subRoutes: [
            {
                path: "/alertrule",
                name: "Alert  rules",
            },

            {
                path: "/silence",
                name: "Silence",
            },

            {
                path: "/alertgroup",
                name: "Alert Group",
            },
        ],
    },
];

const SideBar = ({ children, menuOpen, setMenuOpen }) => {
    const [isOpen, setIsOpen] = useState(true);

    // const toggle = () => setIsOpen(!isOpen);

    const [isActive, setIsActive] = useState(true);

    return (
        <div className={"side-bar " + (menuOpen && "active")}>
            <div>
                <NavLink to="#" className="humbarger-panel">
                    {isOpen && (
                        <NavLink to="/" initial="hidden" animate="show" exit="hidden">
                            <img src={Logo} alt="logo" />
                        </NavLink>
                    )}
                    <div onClick={() => setMenuOpen(!menuOpen)} className="p-2">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.3335 3.33398L12.6668 12.6673" stroke="#8D8F98" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M3.33318 12.6673L12.6665 3.33398" stroke="#8D8F98" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                </NavLink>
                <hr />
                <div className="side-bar-link">
                    <div className="top-link">
                        {routes.map((route) => {
                            return <SidebarMenu icon={route.icon} isActive={isActive} setIsActive={setIsActive} isOpen={isOpen} route={route} key={route.name} />;
                        })}
                    </div>
                </div>
            </div>
            <div className="bottom-link">
                <NavLink to="/settings" className="settings">
                    <div className="settings-left">
                        <img src={Settings} alt="icon" />
                        {isOpen && <h6>Help</h6>}
                    </div>
                    {/* {isOpen && <img src={RightArrow} alt="icon" />} */}
                </NavLink>

                {isOpen && <p>&copy; Satoshi's Index</p>}
            </div>
        </div>
    );
};

export default SideBar;
