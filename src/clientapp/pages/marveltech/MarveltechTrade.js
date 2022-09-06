import React, { Component } from "react";
//import akwabagroup1 from "../../img/akwabagroup1.PNG";
import { NavLink, HashRouter } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import { withTranslation } from "react-i18next";

class MarveltechTrade extends Component {
  render() {
    const { t } = this.props;
    return (
      <div className="">
        <div className="content-justscript-akwaba">
          <HashRouter>
            <ul className="no-bullets-nav">
              <li className="">
                <NavLink to="/marveltechsell">
                  <span>Sell</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/marveltechorder">
                  <span>Order</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact">
                  <span>Ask</span>
                </NavLink>
              </li>
            </ul>
          </HashRouter>

          <Accordion defaultActiveKey="0">
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                Buy online yes you can! — check it out!
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body className="content-accordion">
                  Broker for buying online.
                  <br /> We help you buy online from everywhere in the world,
                  handling deliveries and online payments. You buy safely from
                  countries such as
                  <ul>
                    <li>Usa</li>
                    <li>China</li>
                    <li>England</li>
                    <li>France</li>
                  </ul>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="1">
                Sell online, yes you can too! — check it out!
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body className="content-accordion">
                  {" "}
                  Broker for selling online.
                  <br />
                  We help you sell online. We help you access global e-commerce
                  portals such as:
                  <ul>
                    <li>Amazon</li>
                    <li>Ebay</li>
                    <li>Alibaba</li>
                  </ul>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
      </div>
    );
  }
}
export default withTranslation ()(MarveltechTrade);
