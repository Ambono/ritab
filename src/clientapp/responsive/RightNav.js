import React from 'react';
import styled from 'styled-components';
import {NavLink, HashRouter } from "react-router-dom";
import { useTranslation  } from "react-i18next";
import { Row, Col } from 'react-bootstrap';

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
    height: auto;
    width: auto;
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
    <div >
      <Row>      
       <Col md={{ span: 12, offset: 0 }}>
        <Ul open={open} id="menu"> 
        <HashRouter>
                   <li>
                    <NavLink to="/Marveltechpartners"><span className ="header-akwaba-rightnavbar-navlinks">{t("navbar.partners")}</span></NavLink> 
                    </li>
                    <li>
                      <NavLink to="/Marveltechacademy"><span className ="header-akwaba-rightnavbar-navlinks">{t("navbar.academy")}</span></NavLink>            
                    </li>
                    <li>
                      <NavLink to="/Marveltechservices"><span className ="header-akwaba-rightnavbar-navlinks">{t("navbar.services")}</span></NavLink>            
                      </li> 
                      <li>
                    <NavLink to="/registersimple"><span className ="header-akwaba-rightnavbar-navlinks">{t("navbar.register")}</span></NavLink> 
                    </li>
                    <li>
                      <NavLink to="/login"><span className ="header-akwaba-rightnavbar-navlinks">{t("navbar.login")}</span></NavLink>            
                    </li>
                    <li>
                      <NavLink to="/logout"><span className ="header-akwaba-rightnavbar-navlinks">{t("navbar.logout")}</span></NavLink>            
                      </li> 
        </HashRouter>       
                </Ul>
          </Col>
              
      </Row>   

 

                        {/* 
                            <Ul open={open} id="menu"> 
                                <HashRouter> 
                          <li>
                            <NavLink to="/logout"><span>Home</span></NavLink>
                          </li>
                          <li>
                            <NavLink to="/logout"><span>Work</span></NavLink> 
                              <ul>
                                  <li>
                                    <NavLink to="/logout"><span>CSS Development</span></NavLink> 
                                  </li>
                                  <li>
                                    <NavLink to="/logout"><span>Graphic Design</span></NavLink> 
                                    </li>
                                  <li>
                                    <NavLink to="/logout"><span>Development Tools</span></NavLink> 
                                  </li>
                                  <li>
                                    <NavLink to="/logout"><span>Web Design</span></NavLink>
                                  </li>
                              </ul>
                          </li>
                          <li>
                            <NavLink to="/logout"><span>About</span></NavLink> 
                          </li>
                          <li>
                            <NavLink to="/logout"><span>Contact Us</span></NavLink> 
                          </li>
                          <li style="float: right;">
                            <NavLink to="/logout"><span>Feedback</span></NavLink> 
                          </li>
                          </HashRouter>       
                        </Ul> */}
  </div>
  )
}
  
export default (RightNav);