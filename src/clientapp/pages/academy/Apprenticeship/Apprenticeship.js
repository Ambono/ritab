import React, { Component } from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import { withTranslation } from "react-i18next";

class Apprenticeship extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  render() {
    const { t } = this.props;
    return (
      <div className="content-justscript-akwaba">
        <p>We provide software solutions for your organisation.</p>
        <Accordion defaultActiveKey="0">
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              Plain old web sites — check it out!
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body className="content-accordion">
                Bespoke dynamic plain old web sites.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="1">
              Online database — check it out!
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body className="content-accordion">
                Bespoke online database for your information global
                accessibility
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="2">
              Portal web solution — check it out!
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="2">
              <Card.Body className="content-accordion">
                Bespoke dynamic web platform to coordinate across all your
                departments
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="3">
              Software solutions — check it out!
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="3">
              <Card.Body className="content-accordion">
                Bespoke software programs to suite your specific need with
                post-development support
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="4">
              Legacy systems maintenance — check it out!
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="4">
              <Card.Body className="content-accordion">
                Third line support to legacy systems
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="5">
              Printing solutions — check it out!
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="5">
              <Card.Body className="content-accordion">
                Design and mass printing of your marketing and billing templates
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    );
  }
}

export default withTranslation()(Apprenticeship);
