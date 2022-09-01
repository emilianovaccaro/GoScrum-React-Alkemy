import React from 'react';
import { useNavigate } from 'react-router-dom';
import useLoggedIn from '../../../hooks/useLoggedIn';
import { 
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SideBtnWrap,
  SidebarLogin,
  SidebarLink,
  SidebarMenu,
  SidebarLogout
} from './SidebarStyles';


const Sidebar = ({ isOpen, toggle }) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useLoggedIn();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate('/');
  }


  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>

      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/addTask">Create task</SidebarLink>
          <SidebarLink to="/tasks">Tasks</SidebarLink>

        </SidebarMenu>

        <SideBtnWrap>
        {
          !isLoggedIn ? (
              <>
                <SidebarLink to="/register">Sign Up</SidebarLink>
                <SidebarLogin to="/login">Sign In</SidebarLogin>
              </>
            ) : (
              <SidebarLogout onClick={handleLogout}>Logout</SidebarLogout>
            )
        }
        </SideBtnWrap>
      </SidebarWrapper>

    </SidebarContainer>
  )
}

export default Sidebar