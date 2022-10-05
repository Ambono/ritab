import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import logo from '../logo/logo.png';
import {NavLink, HashRouter } from "react-router-dom";

const Nav = styled.nav`
  width: 100%;
  height: auto;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  .logo {
    padding: 15px 0;
  }
`

const Navbar = () => {
  return (
    <Nav>
       <HashRouter>    
      <div className="logo">
      <NavLink to="/home"><img src={logo} height="84px" width="86px" /></NavLink>
      </div>
      </HashRouter>  
      <Burger />
    </Nav>
  )
}


 export default Navbar
