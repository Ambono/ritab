import React from 'react';
import styled from 'styled-components';
import {NavLink, HashRouter } from "react-router-dom";
import { useTranslation  } from "react-i18next";
import { Row, Col } from 'react-bootstrap';
import { DropdownMenu, MenuItem } from 'react-bootstrap-dropdown-menu';
import Dropdown from 'react-bootstrap/Dropdown';

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

// https://react-bootstrap.github.io/components/dropdowns/

function RightNav ({ open } )  {
    const { t } = useTranslation()
  return (
    <div >
      <Row>      
       <Col md={{ span: 12, offset: 0 }}>
        {/* <Ul open={open} id="menu">  */}
        <Ul open={open} > 
        <HashRouter>
                   <li>                   
                    <Dropdown>
                          <Dropdown.Toggle variant="success" id="dropdown-basic">
                          {t("navbar.partners")}
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                           <Dropdown.Item href="#"> <NavLink to="/Marveltechpartners"><span className ="header-akwaba-rightnavbar-navlinks">{t("navbar.partners")}</span></NavLink> 
                         </Dropdown.Item>
                          </Dropdown.Menu>
                      </Dropdown> 
                    </li>
                    <li>
                     <Dropdown>
                          <Dropdown.Toggle variant="success" id="dropdown-basic">
                          {t("navbar.academy")}
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                           <Dropdown.Item href="#"><NavLink to="/Marveltechacademy"><span className ="header-akwaba-rightnavbar-navlinks">{t("navbar.academy")}</span></NavLink>         
                         </Dropdown.Item>
                          </Dropdown.Menu>
                      </Dropdown>
                    </li>
                    <li>
                      <Dropdown>
                          <Dropdown.Toggle variant="success" id="dropdown-basic">
                          {t("navbar.services")}
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                           <Dropdown.Item href="#">   <NavLink to="/Marveltechservices"><span className ="header-akwaba-rightnavbar-navlinks">{t("navbar.services")}</span></NavLink> 
                            </Dropdown.Item>
                          </Dropdown.Menu>
                      </Dropdown>
                    </li> 
                      <li>                           
                          <Dropdown>
                          <Dropdown.Toggle variant="success" id="dropdown-basic">
                          {t("navbar.account")}
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item href="#"> <NavLink to="/registersimple"><span className ="header-akwaba-rightnavbar-navlinks">{t("navbar.register")}</span></NavLink>
                                </Dropdown.Item>
                            <Dropdown.Item href="#"> <NavLink to="/login"><span className ="header-akwaba-rightnavbar-navlinks">{t("navbar.login")}</span></NavLink>            
                                 </Dropdown.Item>
                            <Dropdown.Item href="#"> <NavLink to="/logout"><span className ="header-akwaba-rightnavbar-navlinks">{t("navbar.logout")}</span></NavLink>            
                                </Dropdown.Item>
                                <Dropdown.Item href="#"> <NavLink to="/logout"><span className ="header-akwaba-rightnavbar-navlinks">{t("navbar.youraccount")}</span></NavLink>            
                                </Dropdown.Item>
                          </Dropdown.Menu>
                          </Dropdown>
                    </li>                                               
        </HashRouter>       
        </Ul>
      </Col>
              
      </Row>  
  </div>
  )
}
  
export default (RightNav);