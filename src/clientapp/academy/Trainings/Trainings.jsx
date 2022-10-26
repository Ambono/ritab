import React, { Component } from "react";
import {NavLink, HashRouter } from "react-router-dom";
import { withTranslation  } from "react-i18next";
import { Redirect } from "react-router";
import Authservice from "../../Authentication/AuthService";
import { Row, Col } from "react-bootstrap";

class Trainings extends Component { 
  constructor(props){
    super(props);
    this.state = {
      loginstatus: this.props.loginstatus
    }
}

  render() {
  const userIsLoggedIn = this.props.loginstatus=='in'? true:false;
    console.log('loggin status: ', userIsLoggedIn)
    const { t } = this.props;
    // return userIsLoggedIn ? (  
      return (       
      <div>  

<div className="akwaba-content-training"> 
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
                  <NavLink to="/businesstrainings">
                    <div className="akwaba-tiles-navlinks">
                    {t("navbar.businesstrainings")}                
                    </div>
                  </NavLink>
                  {/* <MarveltechSolutionTile /> */}
                </div>
              </Col>
              <Col md={{ span: 2, offset: 0 }}>
                {" "}
                <div className="akwaba-container-items">
                  <NavLink to="/softwaredevtrainings">
                    <div className="akwaba-tiles-navlinks">
                    {t("navbar.softwaredevtrainings")}                   
                    </div>
                  </NavLink>
                  {/* <MarveltechSolutionTile /> */}
                </div>
              </Col>             
              <Col md={{ span: 2, offset: 0 }}>
                <div className="akwaba-container-items">
                  <NavLink to="/apprenticeship">
                    <div className="akwaba-tiles-navlinks">
                    {t("navbar.apprenticeship")}                    
                    </div>
                  </NavLink>
                  {/* <MarveltechConsultingTile /> */}
                </div>
              </Col>
              <Col md={{ span: 3, offset: 0 }}>
                <div className="akwaba-container-items">
                  <NavLink to="/onboardingtests">
                    <div className="akwaba-tiles-navlinks">
                    {t("navbar.onboardingtest")}                 
                    </div>
                  </NavLink>
                  {/* <MarveltechGamingTile /> */}
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


       {/* <HashRouter>   
        <div>
        <ul className ="akwaba-container-items-adminpage">      
            <li>
             <button><NavLink to="/businesstrainings"><span>{t("navbar.businesstrainings")}</span></NavLink></button> 
            </li> 
           </ul>
          </div>
          <div>      
          <ul className ="akwaba-container-items-adminpage"> 
           <li>
           <button><NavLink to="/softwaredevtrainings"><span>{t("navbar.softwaredevtrainings")}</span></NavLink></button> 
            </li>            
            </ul>
            </div>            
          </HashRouter>  */}



      {/* </div>): (      
      <Redirect to={{ pathname: "/login" }} />
    ); */}
    </div>
    )
  }
}
 
export default withTranslation()(Trainings);