import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import logo from '../logo/logo.png'

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
      <div className="logo">
      <img src={logo} height="84px" width="86px" />
      </div>
      <Burger />
    </Nav>
  )
}


 export default Navbar
