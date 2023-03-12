import {React, useState, useEffect} from 'react';
import styled from 'styled-components';
import {NavLink, HashRouter } from "react-router-dom";
import { useTranslation  } from "react-i18next";
import { Row, Col } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import LocalStorageService from '../services/localStorageService';
import Button from 'react-bootstrap/Button';

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
    z-index:1;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;

// https://react-bootstrap.github.io/components/dropdowns/


//function  loginEmail (){return LocalStorageService.Get("email")}; 

function RightNav ({open } )  {
    const { t } = useTranslation();

    const[longStatus, setLoginStatus] = useState('');

    var loginEmail = localStorage.getItem("email");

    useEffect(()=>{
      updateLoginStatus();
    },[])

function updateLoginStatus () {
  setLoginStatus(localStorage.getItem("email"));
}

      return (
    <div>      
      <Row>      
       <Col md={{ span: 12, offset: 0 }}>      
        <Ul open={open} id="menu"> 
        <HashRouter>
          <p></p>         
                   <li>
                      <Dropdown>
                          <Dropdown.Toggle variant="success" id="dropdown-basic">
                         <Button variant = "primary">{t("navbar.services")}</Button> 
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                           <Dropdown.Item href="#"><NavLink to="/serviceSubscription">
                            <span className="header-akwaba-rightnavbar-navlinks">
                            My services
                            {/* {t("pages.marveltechgroup.group.text.solutions")}*/}
                            </span></NavLink> 
                            </Dropdown.Item>
                         
                          </Dropdown.Menu>                       
                      </Dropdown>
                    </li>               
                                     
                    <li>                           
                          <Dropdown>
                          <Dropdown.Toggle variant="success" id="dropdown-basic">                          
                          <Button variant = "primary" onClick ={updateLoginStatus}>{t("navbar.account")}</Button>
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item href="#"> <NavLink to="/registersimple">
                              <span className ="header-akwaba-rightnavbar-navlinks">
                                {t("navbar.register")}</span></NavLink>
                                </Dropdown.Item>
                                { !loginEmail && (<Dropdown.Item href="#"><NavLink to="/login">
                             <span className ="header-akwaba-rightnavbar-navlinks">
                                {/* {t("navbar.login")} */}Log in</span></NavLink>            
                                 </Dropdown.Item>)}
                                 {loginEmail && (<Dropdown.Item href="#"><NavLink to="/logout">
                            <span className ="header-akwaba-rightnavbar-navlinks">
                              Log out</span></NavLink>            
                                </Dropdown.Item>)}
                                <Dropdown.Divider />
                                <Dropdown.Item href="#"> <NavLink to="/myplace">
                                  <span className ="header-akwaba-rightnavbar-navlinks">
                                    {t("navbar.youraccount")}</span></NavLink>            
                                </Dropdown.Item>
                          </Dropdown.Menu>
                          </Dropdown>                         
                    </li>                    
                    <li>                   
                    <Dropdown>
                          <Dropdown.Toggle variant="success" id="dropdown-basic">
                          <Button variant = "primary"> {t("navbar.contact")}</Button>
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                           <Dropdown.Item href="#"> <NavLink to="/contact">
                            <span className ="header-akwaba-rightnavbar-navlinks">
                              {t("navbar.contactus")}</span></NavLink> 
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