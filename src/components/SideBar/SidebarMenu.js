import React, { useState } from "react";
import { Link, NavLink, Route } from "react-router-dom";
import { motion } from "framer-motion";
import setting from "../../icons/graph.png";
import plus from "../../icons/plus-sm.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const SidebarMenu = ({ showAnimation, route, isOpen, isActive, setIsActive, icon }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        setIsActive(true);
    };
    
    return (
      <div className="menu">
          <NavLink to={route.path} className="d-flex align-items-center justify-content-between px-3 menuLink link" onClick={toggleMenu}>
              <div className=" d-flex align-items-center">
                  <img src={icon} alt="icon" />
                  <div className="menu-item">
                      {isOpen && (
                        <motion.div variants={showAnimation} initial="hidden" animate="show" exit="hidden">
                            <div className="text-decoration-none link-text mx-3">
                                {route.name}
                                <FontAwesomeIcon  icon={faPlus} />
                            </div>
                        </motion.div>
                      )}
                  </div>
                  
                  {/*{isOpen && (*/}
                  {/*  <Link onClick={toggleMenu}>*/}
                  {/*    <img src={plus} alt="logo"/>*/}
                  {/*  </Link>*/}
                  {/*)}*/}
              </div>
          </NavLink>
          {isMenuOpen && (
            <div className="menuContainer">
                {route.subRoutes.map((subRoute, i) => (
                  <NavLink to={subRoute.path} key={i} className="link">
                      {/*<div className="icon">*/}
                      {/*              <img className="mb-1" src={subRoute.icon} alt="icon" />*/}
                      {/*          </div>*/}
                      {isOpen && (
                        <motion.div variants={showAnimation} initial="hidden" animate="show" exit="hidden" className="link-text">
                            <h6>{subRoute.name}</h6>
                        </motion.div>
                      )}
                  </NavLink>
                ))}
            </div>
          )}
      </div>
    );
};

export default SidebarMenu;