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
        <div>     
     
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
              <Col md={{ span: 2, offset: 0}}>
                {" "}
                <div className="akwaba-container-items">
                  <NavLink to="/uploadassets">
                    <div className="akwaba-tiles-navlinks">
                    Upload assets               
                    </div>
                  </NavLink>                 
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