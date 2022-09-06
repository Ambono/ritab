import React, { Component } from "react";
import { NavLink, HashRouter } from "react-router-dom";
import { withTranslation } from "react-i18next";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

class BusinessTrainings extends Component {
  render() {
    const { t } = this.props;
    return (
      <div className="content-akwaba">
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
      </div>
    );
  }
}

export default withTranslation()(BusinessTrainings);
