import React, { Component } from "react";
import { NavLink, HashRouter } from "react-router-dom";
import { withTranslation } from "react-i18next";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

class SoftwareDevTrainings extends Component {
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
                  <li>
                    Ecrire un programe pour imprimer les 5 premiers nombre pairs
                  </li>
                  <li>
                    Ecrire un programe pour imprimer les 5 premiers nombres
                    premiers
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
                    Ecrire un programe pour imprimer les voyelles dans
                    <br />
                    <b>the quick running fox jumps over the lazy dogs</b>
                  </li>
                </ol>
              </Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="2">
              Training preliminaries 3 — check it out!
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="2">
              <Card.Body className="content-accordion">
                <p>Atendre instructions!</p>
                https://www.linqpad.net/LINQPad6.aspx
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="3">
              Training preliminaries 4 — check it out!
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="3">
              <Card.Body className="content-accordion">
                <p>Atendre instructions!</p>
                https://docs.microsoft.com/en-us/dotnet/csharp/tutorials/intro-to-csharp/
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    );
  }
}

export default withTranslation()(SoftwareDevTrainings);
