import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

// Style Section
const NavbarContainer = styled.div`
box-shadow: 15px 5px 55px 0px rgb(0,0,0) ;
`;

const TabBar = styled(motion.Link)`

`;
// End Style Section
// Animate Section
const BarVariants = {
  hidden: {
    opacity: 0,
    scale: 0
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 1,
      duration: 1,
      type: 'spring'
    }
  }
}

const DropDownBar = {
  hidden: {
    opacity: 0,
    scale: 0
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 1,
      duration: 1,
      type: 'spring'
    }
  }
}

// End Animate Section
const NavBar = () => {
  return (
    <>
      <NavbarContainer className="container-fluid p-0 sticky-top">
        <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-lg-5">
          <NavLink to="/" className="navbar-brand ml-lg-3">
            <h1 className="m-0 display-5 text-uppercase text-primary">
              <img alt="Logo RMS" src="assets/img/logo-rms.gif" />
            </h1>
          </NavLink>
          <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse justify-content-between px-lg-3" id="navbarCollapse">
            <div className="navbar-nav m-auto py-0">
              <NavLink
                to="/"
                className={({ isActive }) => isActive ? "nav-item nav-link active" : "nav-item nav-link"}
                variants={BarVariants}
                initial="hidden"
                animate="visible"
              >Home</NavLink>

              <NavLink to="/tracking" className={({ isActive }) => isActive ? "nav-item nav-link active" : "nav-item nav-link"}
                variants={BarVariants}
                initial="hidden"
                animate="visible"
              >Tracking</NavLink>

              <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-item nav-link active" : "nav-item nav-link"}
                variants={BarVariants}
                initial="hidden"
                animate="visible"
              >Contact Us</NavLink>
            </div>
          </div>
        </nav>
      </NavbarContainer>
    </>
  )
}

export default NavBar
