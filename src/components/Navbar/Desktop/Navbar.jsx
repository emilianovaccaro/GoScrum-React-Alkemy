import React from 'react';
import { FaBars, FaChartLine, FaUsers } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';
import useLoggedIn from '../../../hooks/useLoggedIn';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLink,
  NavBtn,
  NavBtnLink,
  NavLogout
} from './NavbarStyles';

const Navbar = ({ toggle }) => {
  const [isLoggedIn, setIsLoggedIn] = useLoggedIn();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/');
  }


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
            <NavItem>
              <NavLink to="/tasks"> Tasks </NavLink>
            </NavItem>

          </NavMenu>

          <NavBtn>
            {
              !isLoggedIn ? (
                <>
                  <NavLink to="/register"> Sign Up </NavLink>
                  <NavBtnLink to="/login">Sign In</NavBtnLink>
                </>
              ) : (
                <>
                  <NavLogout to="/login" onClick={handleLogout}>Logout</NavLogout>
                </>
              )
            }
          </NavBtn>

        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar