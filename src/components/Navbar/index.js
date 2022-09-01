import React, { useState } from 'react';
import Navbar from './Desktop/Navbar';
import Sidebar from './Mobile/Sidebar';

const NavRender = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  
  return (
    <>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
    </>
  )
};

export default NavRender;