import React, { Component } from "react";
import {NavLink, HashRouter } from "react-router-dom";
import { useTranslation  } from "react-i18next";
import { Redirect } from "react-router";
import { Row, Col } from "react-bootstrap";
import Authservice2 from '../Authentication/AuthService';
import LoginStatus from '../Authentication/LoginStatus';
import LocalStorageService from '../services/localStorageService';


function ServiceSubscription(){

  function loginEmail (){
    return localStorage.getItem("email")
  }; 

 const email = loginEmail();

  const isLoggedin = email!=null;

  const { t } = useTranslation(); 
      return (       
        <div className="container">    
     
     <div className="akwaba-content-admin"> 
           <Row>
            <Col md={{ span: 2, offset: 4 }}>
              {" "}             
              <p></p>
            </Col>
          </Row>
          <Row>
            <HashRouter>
              <Col md={{ span: 4 , offset: 3}}>
                {" "}
               {isLoggedin && (<div>
                <span><b>Follow these steps to do your hit back</b></span> 
                <div className="admin-home">                                
                    <ol>
                    <li>Fill your personal info<br/></li>
                    <li>Fill the info about the incident<br/></li>
                    <li>Fill info about the Place where you are<br/></li>
                    <li>Upload mandatory picture and optional picture(maximum 3)<br/></li>
                    <li>Upload a 1mn authentication video of yourself explaining the incident <br/> </li>
                    </ol>
                    </div>  
                    <div></div> 
                  <NavLink to="/uploadassets">
                    <div className="admin-link-to-post">
                    <b>Click here to do your hit back</b> <br/>                            
                    </div>
                  </NavLink> 
                              
                    
                </div>)}
                {!isLoggedin && (<div>
                  <span>Please Login. If not registered yet please register and login</span>
                  </div>)}
                
              </Col>
             
            </HashRouter>
          </Row> 

          <Row>
            <Col md={{ span: 2, offset: 4 }}>
              {" "}             
              <p></p>
            </Col>
          </Row>         
        </div>
   
    </div>
    )
  }
 
export default (ServiceSubscription);