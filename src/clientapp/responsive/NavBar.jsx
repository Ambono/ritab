import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import logo from '../logo/logo.png';
import {NavLink, HashRouter } from "react-router-dom";
import { useTranslation  } from "react-i18next";
import { Row, Col } from 'react-bootstrap';

const Nav = styled.nav`
  width: auto;
  height: auto;     
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  .logo {
    padding: 15px 0;
    width: auto;   
  }  
`

const Navbar = () => {
  const { t } = useTranslation()
  return (
    <Nav>      
       <HashRouter>    
      <div className="logo">  
     <Row>     
       <Col md={{ span: 3, offset: 0}}>           
         <NavLink to="/home"><img src={logo} height="84px" width="110px" /></NavLink>           
        </Col>
        <Col md={{ span: 7, offset: 2}}>
          <ul id="menu">
            <li>
              <NavLink to="/home"><span className ="header-akwaba-tiles-navlinks">{t("navbar.home")}</span></NavLink>            
            </li>                
            </ul>
          </Col>   
       </Row>
      </div>
      </HashRouter>      
      <Burger />
    </Nav>
  )
}
 export default Navbar
