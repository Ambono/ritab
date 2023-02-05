import React, { Component } from "react";
import {NavLink, HashRouter } from "react-router-dom";
import { useTranslation  } from "react-i18next";
import { Redirect } from "react-router";
import { Row, Col } from "react-bootstrap";
import Authservice2 from '../Authentication/AuthService';
import LoginStatus from '../Authentication/LoginStatus';


function MyAdminTemp(){

 
  const { t } = useTranslation(); 
      return (       
        <div className="container">    
     
     <div className="akwaba-content-admin"> 
           <Row>
           <LoginStatus/>
            <Col md={{ span: 2, offset: 4 }}>
              {" "}             
              <p></p>
            </Col>
          </Row>
          <Row>
            <HashRouter>
              <Col md={{ span: 4 , offset: 3}}>
                {" "}
                <div>
                  <NavLink to="/uploadassets">
                    <div className="admin-link-to-post">
                    Click to post your hit back <br/>                            
                    </div>
                  </NavLink> 
                  <div className="admin-home">
                    1-Fill your personal info<br/>
                    2-Fill the info about the incident<br/>
                    3-Fill info about the Place where you are<br/>
                    4-Upload mandatory picture and optional picture(maximum 3)<br/>
                    5-Upload a 1mn authentication video of yourself explaining the incident <br/> </div>                
                </div>
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
 
export default (MyAdminTemp);