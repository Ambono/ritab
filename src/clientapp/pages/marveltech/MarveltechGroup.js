import React, { Component } from "react";
import { withTranslation } from "react-i18next";
import { Row, Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { HashRouter, NavLink } from "react-router-dom";
import MarveltechSolutionTile from "./tiles/MarveltechSolutionTile";
import MarveltechGamingTile from "./tiles/MarveltechGamingTile";
import MarveltechTradeTile from "./tiles/MarveltechTradeTile";
import MarveltechSystemsTile from "./tiles/MarveltechSystemsTile";
import MarveltechConsultingTile from "./tiles/MarveltechConsultingTile";
import MarveltechGroupTile from "./tiles/MarveltechGroupTile";
import CarouselMarveltech from "./animations/Carousel";
import { UncontrolledCollapse, Button, CardBody, Card } from "reactstrap";

class MarveltechGroup extends Component {
  render() {
    const { t } = this.props;
    return (
      <div>
        <div  className="slideshow_deploy" >
          <Row>
            <Col md={{ span: 12, offset: 0 }}>
              <CarouselMarveltech />
            </Col>
          </Row>
        </div>
        <div className="akwaba-content">             
          <Row>
            <Col md={{ span: 2, offset: 4 }}>
              {" "}
              <div className="akwaba-services-title">
                {t("pages.marveltechgroup.group.text.offers")}
              </div>
            </Col>
          </Row>
          <Row>
            <HashRouter>
            <Col md={{ span: 2, offset: 0 }}>
                {" "}
                <div className="akwaba-container-items">
                  <NavLink to="/about">
                    <div className="akwaba-tiles-navlinks">
                      MarvelTech about us
                    </div>
                  </NavLink>
                  <MarveltechSolutionTile />
                </div>
              </Col>
              <Col md={{ span: 2, offset: 0 }}>
                {" "}
                <div className="akwaba-container-items">
                  <NavLink to="/marveltechsolution">
                    <div className="akwaba-tiles-navlinks">
                      MarvelTech Solutions
                    </div>
                  </NavLink>
                  <MarveltechSolutionTile />
                </div>
              </Col>             
              <Col md={{ span: 2, offset: 0 }}>
                <div className="akwaba-container-items">
                  <NavLink to="/marveltechconsulting">
                    <div className="akwaba-tiles-navlinks">
                      MarvelTech Consulting
                    </div>
                  </NavLink>
                  <MarveltechConsultingTile />
                </div>
              </Col>
              <Col md={{ span: 2, offset: 0 }}>
                <div className="akwaba-container-items">
                  <NavLink to="/marveltechgaming">
                    <div className="akwaba-tiles-navlinks">
                      MarvelTech Media
                    </div>
                  </NavLink>
                  <MarveltechGamingTile />
                </div>
              </Col>
              <Col md={{ span: 2, offset: 0 }}>
                <div className="akwaba-container-items">
                  <NavLink to="/marveltechtrade">
                    <div className="akwaba-tiles-navlinks">
                      MarvelTech E-commerce
                    </div>
                  </NavLink>
                  <MarveltechTradeTile />
                </div>
              </Col>
              <Col md={{ span: 2, offset: 0 }}>
                <div className="akwaba-container-items">
                  <NavLink to="/marveltechsystems">
                    <div className="akwaba-tiles-navlinks">
                      MarvelTech Systems
                    </div>
                  </NavLink>
                  <MarveltechSystemsTile />
                </div>
              </Col>
            </HashRouter>
          </Row>
          {/* <div>
          <div>
          <Row>
              <Col md={{ span: 2, offset: 1 }}>
                  <Button
                    color="info"
                    id="toggler"
                    style={{ marginBottom: "1rem", fontSize:"20px", fontWeight:"bold" }}
                  >
                    {t("pages.marveltechgroup.group.text.buttonAboutUs")}
                  </Button>
                </Col>
            </Row>
            </div>
            <UncontrolledCollapse toggler="#toggler">
              <Card>
                <CardBody>
                  <Row>
                    <Col md={{ span: 10, offset: 1 }}>
                      <div className="akwaba-container-items">
                        <MarveltechGroupTile />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </UncontrolledCollapse>
          </div>
         */}
        </div>        
      </div>
    );
  }
}

export default withTranslation()(MarveltechGroup);
