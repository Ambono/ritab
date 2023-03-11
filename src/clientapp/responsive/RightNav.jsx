import {React, useState} from 'react';
import styled from 'styled-components';
import {NavLink, HashRouter } from "react-router-dom";
import { useTranslation  } from "react-i18next";
import { Row, Col } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import LocalStorageService from '../services/localStorageService';

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


//function  loginEmail (){return LocalStorageService.Get("email")}; 

function RightNav ({open } )  {
    const { t } = useTranslation();
var loginEmail = localStorage.getItem("email");
//var loginEmail2 = LocalStorageService.Get("email");

console.log("log in emai", {loginEmail}); 

var isLoggedin = loginEmail!= null;
    // const apprenticelink =  Authservice2().loginStatus === 'out' ? '/login':'/apprenticeship';
    // const traininglink =  Authservice2().loginStatus === 'out' ? '/login':'/trainings';
    var account = isLoggedin ? <p id='signedin'>SIGNED IN</p>:<span>Log in</span>;
      return (
    <div>      
      <Row>      
       <Col md={{ span: 12, offset: 0 }}>
       {/* <LoginStatus/> */}
        <Ul open={open} id="menu"> 
        <HashRouter>
          <p></p>
          {/* <p><NavLink to="/adminpagetemp">
                My admin</NavLink></p>              */}
                   <li>
                      <Dropdown>
                          <Dropdown.Toggle variant="success" id="dropdown-basic">
                          {t("navbar.services")}
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                           <Dropdown.Item href="#"><NavLink to="/serviceSubscription">
                            <span className="header-akwaba-rightnavbar-navlinks">
                            My services
                            {/* {t("pages.marveltechgroup.group.text.solutions")}*/}
                            </span></NavLink> 
                            </Dropdown.Item>
                         
                           {/* <Dropdown.Item href="#">
                            <NavLink to="/marveltechconsulting">
                            <span className ="header-akwaba-rightnavbar-navlinks">
                              {t("pages.marveltechgroup.group.text.consulting")}</span></NavLink>
                            </Dropdown.Item>
                          
                           <Dropdown.Item href="#"><NavLink to="/marveltechgaming">
                              <span className ="header-akwaba-rightnavbar-navlinks">
                              {t("pages.marveltechgroup.group.text.media")}</span></NavLink>
                            </Dropdown.Item>
                          
                           <Dropdown.Item href="#"> <NavLink to="/marveltechtrade">
                           <span className ="header-akwaba-rightnavbar-navlinks">
                            {t("pages.marveltechgroup.group.text.ecommerce")}</span></NavLink>
                            </Dropdown.Item>   */}
                          </Dropdown.Menu>                       
                      </Dropdown>
                    </li>               
                   {/* <li>                   
                    <Dropdown>
                          <Dropdown.Toggle variant="success" id="dropdown-basic">
                          {t("navbar.partners")}
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                           <Dropdown.Item href="#"> <NavLink to="/marveltechpartners">
                            <span className ="header-akwaba-rightnavbar-navlinks">
                              {t("navbar.ourpartners")}</span></NavLink> 
                         </Dropdown.Item>
                         <Dropdown.Item href="#"> <NavLink to="/partnerservice">
                            <span className ="header-akwaba-rightnavbar-navlinks">
                              {t("navbar.partnersrvice")}</span></NavLink> 
                         </Dropdown.Item>
                          </Dropdown.Menu>
                      </Dropdown> 
                    </li> */}
                   
                    <li>                           
                          <Dropdown>
                          <Dropdown.Toggle variant="success" id="dropdown-basic">
                          {t("navbar.account")}
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item href="#"> <NavLink to="/registersimple">
                              <span className ="header-akwaba-rightnavbar-navlinks">
                                {t("navbar.register")}</span></NavLink>
                                </Dropdown.Item>
                            <Dropdown.Item href="#"><NavLink to="/login">
                              <span className ="header-akwaba-rightnavbar-navlinks">
                                {/* {t("navbar.login")} */}{account}</span></NavLink>            
                                 </Dropdown.Item>
                            <Dropdown.Item href="#"><NavLink to="/logout">
                              <span className ="header-akwaba-rightnavbar-navlinks">
                                {t("navbar.logout")}</span></NavLink>            
                                </Dropdown.Item>
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
                          {t("navbar.contact")}
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