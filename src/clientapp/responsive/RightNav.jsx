import React from 'react';
import styled from 'styled-components';
import {NavLink, HashRouter } from "react-router-dom";
import { useTranslation  } from "react-i18next";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;

function RightNav ({ open } )  {
    const { t } = useTranslation()
  return (
    <Ul open={open}> 
       <HashRouter> 
            <li>
              <NavLink to="/home"><span>{t("navbar.home")}</span></NavLink>
            </li>  
            <li>
              <NavLink to="/registersimple"><span>{t("navbar.register")}</span></NavLink>            
            </li>
            <li>
              <NavLink to="/login"><span>{t("navbar.login")}</span></NavLink>            
            </li>
            <li>
              <NavLink to="/logout"><span>{t("navbar.logout")}</span></NavLink>            
            </li> 
          </HashRouter>       
    </Ul>
  )
}
  
//export default RightNav

export default (RightNav);