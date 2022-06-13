import React from "react";
import { NavBox, Nav, NavLink, NavMenu } 
    from "./NavbarElements.js";
  

function Navbar(){
  
  return (
    <>
      <NavBox>
        <Nav>
          <NavMenu>
            <NavLink to="/">
              Home
            </NavLink>
            <NavLink to="/geography">
              Géographie
            </NavLink>
            <NavLink to="/economy">
              Économie
            </NavLink>
            <NavLink to="/culture">
              Culture
            </NavLink>
            <NavLink to="/language">
              Langue
            </NavLink>
            <NavLink to="/tourism">
              Tourisme
            </NavLink>
            <NavLink to="/why-to-go">
              Pourquoi Occitanie?
            </NavLink>
          </NavMenu>
        </Nav>
      </NavBox>
    </>
  );
};
  
export default Navbar;