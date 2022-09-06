import React, { Component } from "react";
//import akwabagroup1 from "../../img/akwabagroup1.PNG";
import { NavLink, HashRouter } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import { bounce } from "react-animations";
import styled, { keyframes } from "styled-components";
import { withTranslation } from "react-i18next";

const Bounce = styled.div`
  animation: 2s ${keyframes`${bounce}`} infinite;
`;

class AkwabaConsulting extends Component {
  render() {
    const { t } = this.props;
    return (
      <div className="">
        <div className="content-justscript-akwaba">
          <div className="comingsoon">
            <Bounce>
              Comming soon: trainings in programming and web development
            </Bounce>
          </div>
          <HashRouter>
            <ul className="no-bullets-nav">
              <li className="">
                <NavLink to="/akwabasell">
                  <span>Find event</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/akwabaorder">
                  <span>Sign up for event</span>
                </NavLink>
              </li>
            </ul>
          </HashRouter>
          <Accordion defaultActiveKey="0">
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                Advice on IT system aquisition — check it out!
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body className="content-accordion">
                  We give you advise on how to set up your IT department
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="1">
                Training for IT staff — check it out!
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body className="content-accordion">
                  We will help you with training sessions to bring your staff up
                  to speed
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="2">
                Staffing for your IT system — check it out!
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="2">
                <Card.Body className="content-accordion">
                  We will help you find and source for human capacity for your
                  organisation
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="3">
                Audit of It systems — check it out!
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="3">
                <Card.Body className="content-accordion">
                  With our audit programm we conduct cyber test and security
                  audit to find security loophole in your applications.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
      </div>
    );
  }
}

export default withTranslation()(AkwabaConsulting);
