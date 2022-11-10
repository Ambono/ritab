import React from "react";
import {NavLink, HashRouter } from "react-router-dom";
import { useTranslation  } from "react-i18next";
import { Row, Col } from "react-bootstrap";
import Authservice2 from '../../Authentication/AuthService';
import LoginStatus from '../../Authentication/LoginStatus';
 
  function Trainings(){
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
            {" "}
            <div className="akwaba-container-items">
              <NavLink to="/businesstrainings">
                <div className="akwaba-tiles-navlinks">
                {t("navbar.businesstrainings")}                
                </div>
              </NavLink>
            </div>
          </Col>
          <Col md={{ span: 2, offset: 0 }}>
            {" "}
            <div className="akwaba-container-items">
              <NavLink to="/softwaredevtrainings">
                <div className="akwaba-tiles-navlinks">
                {t("navbar.softwaredevtrainings")}                   
                </div>
              </NavLink>             
            </div>
          </Col>             
          <Col md={{ span: 2, offset: 0 }}>
            <div className="akwaba-container-items">
              <NavLink to="/apprenticeship">
                <div className="akwaba-tiles-navlinks">
                {t("navbar.apprenticeship")}                    
                </div>
              </NavLink>       
            </div>
          </Col>
          <Col md={{ span: 3, offset: 0 }}>
            <div className="akwaba-container-items">
              <NavLink to="/onboardingtests">
                <div className="akwaba-tiles-navlinks">
                {t("navbar.onboardingtest")}                 
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
  }
   </div>
  ); 
  }
export default (Trainings);