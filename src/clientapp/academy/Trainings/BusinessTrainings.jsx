
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import React from "react";
import {NavLink, HashRouter } from "react-router-dom";
import { useTranslation  } from "react-i18next";
import { Row, Col } from "react-bootstrap";
import Authservice2 from '../../Authentication/AuthService2';
import LoginStatus from '../../Authentication/LoginStatus';
 
  function BusinessTrainings(){
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
        <Accordion defaultActiveKey="0">
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              Training preliminaries 1 — check it out!
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body className="content-accordion">
                <ol>
                  <li>Expliquer comment faire une campagne marketing Niche</li>
                  <li>Expliquer Unique selling point</li>
                  <li>
                    Expliquer positioning en s'appuyant competitive advantage
                  </li>
                </ol>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="1">
              Training preliminaries 2 — check it out!
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body className="content-accordion">
                <ol>
                  <li>
                    Preparer un dossier de deux pages pour repondre a un appel a
                    candidature
                    <br /> pour developer un software lance par le ministere de
                    la sante
                  </li>
                </ol>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
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
export default (BusinessTrainings);
