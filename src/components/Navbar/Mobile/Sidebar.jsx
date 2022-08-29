import React from 'react';
import { 
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SideBtnWrap,
  SidebarLogin,
  SidebarLink,
  SidebarMenu
} from './SidebarStyles';


const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>

      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/addTask">Create task</SidebarLink>
          <SidebarLink to="/register">Sign Up</SidebarLink>
        </SidebarMenu>

        <SideBtnWrap>
          <SidebarLogin to="/login">Sign In</SidebarLogin>
        </SideBtnWrap>
      </SidebarWrapper>

    </SidebarContainer>
  )
}

export default Sidebar