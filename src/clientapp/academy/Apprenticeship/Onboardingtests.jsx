import React from "react";
import {NavLink, HashRouter } from "react-router-dom";
import { useTranslation  } from "react-i18next";
import { Row, Col } from "react-bootstrap";
import Authservice2 from '../../Authentication/AuthService';
import LoginStatus from '../../Authentication/LoginStatus';
 
  function Onboardingtests(){
  const loggedin =  Authservice2().loginStatus === 'in' ? true : false;
 
  const { t } = useTranslation();
   return ( 
    <div> 
     {loggedin && 
    <div className="akwaba-content-training"> 
       <Row>
        <LoginStatus/>
        <Col md={{ span: 2, offset: 4 }}>
          {" "}             
          <p></p>
        </Col>
      </Row>
      <Row>
        <HashRouter>
        <Col md={{ span: 3, offset: 1 }}>
         <p>This on boarding test</p>
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
  }
   </div>
  ); 
  }
export default (Onboardingtests);