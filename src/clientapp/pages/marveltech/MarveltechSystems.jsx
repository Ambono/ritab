import React, { Component } from "react";
//import akwabagroup1 from "../../img/akwabagroup1.PNG";
import { NavLink, HashRouter } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import { withTranslation } from "react-i18next";

class MarveltechSystems extends Component {
  render() {
    const { t } = this.props;
    return (
      <div className="">
        <div className="content-justscript-akwaba">
          <p>We provide IOts such as home surveillance systems</p>
          <HashRouter>
            <ul className="no-bullets-nav">
              <li>
                <NavLink to="/marveltechgadgets">
                  <span>Find gadget</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/marveltechorder">
                  <span>Book</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact">
                  <span>Register</span>
                </NavLink>
              </li>
            </ul>
          </HashRouter>

          <Accordion defaultActiveKey="0">
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                Security and surveillance systems — check it out!
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body className="content-accordion">
                  Devices to allow you to conduct remote surveillance of your
                  properties, valuable and premises
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="1">
                Water level surveillance — check it out!
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body className="content-accordion">
                  IoT network to conduct urban used water level surveillance
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
      </div>
    );
  }
}

export default withTranslation()(MarveltechSystems);
