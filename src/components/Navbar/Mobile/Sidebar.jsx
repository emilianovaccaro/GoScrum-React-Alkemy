import React from 'react';
import { useNavigate } from 'react-router-dom';
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
} from '../Mobile/SidebarStyles';


const Sidebar = ({ isOpen, toggle }) => {
  const navigate = useNavigate();
  const username = localStorage.getItem('userName');

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
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
          !username ? (
              <>
                <div style={{display: "flex", flexDirection:"column", marginTop: "-50px"}}>
                  <SidebarLink to="/register" style={{marginBottom:"10px"}}>Sign Up</SidebarLink>
                  <SidebarLogin to="/login">Sign In</SidebarLogin>
                </div>
              </>
            ) : (
              <>
                <div style={{display: "flex", flexDirection:"column", marginTop: "-50px"}}>
                  <div style={{marginBottom:"10px", textAlign:"center"}}>{username}</div>
                  <SidebarLogout onClick={handleLogout}>Logout</SidebarLogout>
                </div>
              </>
            )
        }
        </SideBtnWrap>
      </SidebarWrapper>

    </SidebarContainer>
  )
}

export default Sidebar