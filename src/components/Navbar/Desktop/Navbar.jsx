import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaChartLine, FaUsers } from 'react-icons/fa'
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLink,
  NavBtn,
  NavBtnLink 
} from './NavbarStyles';

const Navbar = ({ toggle }) => {

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/"> <FaUsers size="50"/> <FaChartLine size="50" /> </NavLogo>

          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
      
          <NavMenu>
            <NavItem>
              <NavLink to="/addTask"> Create Task </NavLink>
            </NavItem>
          </NavMenu>

          <NavBtn>
            <NavLink to="/register"> Sign Up </NavLink>
            <NavBtnLink to="/login">Sign In</NavBtnLink>
          </NavBtn>

        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar