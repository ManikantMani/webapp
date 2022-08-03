import React from 'react';
import { NavLink } from "react-router-dom";
import "../pages/style.css"
import logo from "../images/logo1.png";

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{width:"100%", height: "auto"}}>
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <span><img className="logo" src={logo} alt="" />
            <span className="name_tag">anikant</span> <span className="name_tag2">Mani</span>
            </span>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span><i class="fas fa-bars"></i></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link " aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " aria-current="page" to="/project">
                  Projects
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " aria-current="page" to="/internship_project">
                  Internship/Project
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " aria-current="page" to="/assignment_project">
                  Assignment/Projects
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " aria-current="page" to="/desktop_project">
                  Desktop/Only
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " aria-current="page" to="/about">
                  About Me
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
        </>
    )
}

export default Navbar
