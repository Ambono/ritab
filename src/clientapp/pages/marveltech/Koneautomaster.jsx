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
import car1 from "../../Auto/carpics/car1/car1.webp";
import car2 from "../../Auto/carpics/car2/car2.webp";
import car3 from "../../Auto/carpics/car3/car3.webp";
import car4 from "../../Auto/carpics/car4/car4.jpeg";
class MarveltechGroup extends Component {
  render() {
    const { t } = this.props;
    const width = "300px";
    const height = "250px";
    return (
      <div>
        <div  className="slideshow_deploy" >
          {/* <Row>
            <Col md={{ span: 12, offset: 0 }}>
              <CarouselMarveltech />
            </Col>
          </Row> */}
        </div>
        <div className="slideshow_deploy_web"></div>           
        <div className="akwaba-content_deploy">             
          <Row>
            <Col md={{ span: 3, offset: 4 }}>
              {" "}             
              <p></p>
            </Col>
          </Row>
          <Row>
            <HashRouter>
            <Col md={{ span: 3, offset: 0 }}>
                {" "}
                <div className="akwaba-container-items">
                  <NavLink to="/car1">
                    <div className="akwaba-tiles-navlinks">
                    <p>BMW CFA1000000</p>                
                    </div>
                  </NavLink>
                  <img src={car1} widht={width} height ={height}/>
                </div>
              </Col>
              <Col md={{ span: 3, offset: 0 }}>
                {" "}
                <div className="akwaba-container-items">
                  <NavLink to="/car2">
                    <div className="akwaba-tiles-navlinks">
                    <p>FORD CFA1000000</p>                    
                    </div>
                  </NavLink>
                  <img src={car2} widht={width} height ={height}/>
                </div>
              </Col>             
              <Col md={{ span: 3, offset: 0 }}>
                <div className="akwaba-container-items">
                  <NavLink to="/car3">
                    <div className="akwaba-tiles-navlinks">
                    <p>BMW CFA1000000</p>                       
                    </div>
                  </NavLink>
                  <img src={car3}widht="100px" height ="200px"/>
                </div>
              </Col>
              <Col md={{ span: 3, offset: 0 }}>
                <div className="akwaba-container-items">
                  <NavLink to="/car4">
                    <div className="akwaba-tiles-navlinks">
                    <p>BMW CFA1000000</p>                                    
                    </div>
                  </NavLink>
                  <img src={car4}  widht={width} height ={height} />
                </div>
              </Col>
              {/* <Col md={{ span: 2, offset: 0 }}>
                <div className="akwaba-container-items">
                  <NavLink to="/car5">
                    <div className="akwaba-tiles-navlinks">
                    {t("pages.marveltechgroup.group.text.ecommerce")}                    
                    </div>
                  </NavLink>
                  <MarveltechTradeTile />
                </div>
              </Col>
              <Col md={{ span: 2, offset: 0 }}>
                <div className="akwaba-container-items">
                  <NavLink to="/marveltechsystems">
                    <div className="akwaba-tiles-navlinks">
                    {t("pages.marveltechgroup.group.text.systems")}                     
                    </div>
                  </NavLink>
                  <MarveltechSystemsTile />
                </div>
              </Col> */}
            </HashRouter>
          </Row>          
        </div>        
      </div>
    );
  }
}

export default withTranslation()(MarveltechGroup);
