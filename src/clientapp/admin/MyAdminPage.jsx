import React, { Component } from "react";
import {NavLink, HashRouter } from "react-router-dom";
import { withTranslation  } from "react-i18next";
import { Redirect } from "react-router";
import { Row, Col } from "react-bootstrap";


class MyAdmin extends Component { 
  constructor(props){
    super(props);
    this.state = {      
    }
}

  render() { 
    const { t } = this.props; 
      return (       
      <div>
     <div className="akwaba-content-admin"> 
           <Row>
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
                  <NavLink to="/messageadminpage">
                    <div className="akwaba-tiles-navlinks">
                    {t("admin.messageadmin")}                
                    </div>
                  </NavLink>                 
                </div>
              </Col>
              <Col md={{ span: 2, offset: 0 }}>
                {" "}
                <div className="akwaba-container-items">
                  <NavLink to="/trainings">
                    <div className="akwaba-tiles-navlinks">
                    {t("admin.trainings")}                   
                    </div>
                  </NavLink>                  
                </div>
              </Col>             
              <Col md={{ span: 3, offset: 0 }}>
                <div className="akwaba-container-items">
                  <NavLink to="/usefulllinks">
                    <div className="akwaba-tiles-navlinks">
                    {t("admin.usefulllinks")}                    
                    </div>
                  </NavLink>
                  {/* <MarveltechConsultingTile /> */}
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
    </div>)
  }
}
 
export default withTranslation()(MyAdmin);