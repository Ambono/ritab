import React, { Component } from "react";
import {NavLink, HashRouter } from "react-router-dom";
import { useTranslation  } from "react-i18next";
import { Redirect } from "react-router";
import { Row, Col } from "react-bootstrap";
import Authservice2 from '../Authentication/AuthService2';
import LoginStatus from '../Authentication/LoginStatus';

// class MyAdmin extends Component { 
//   constructor(props){
//     super(props);
//     this.state = { 
//       loggedin : false     
//     }
// }

function MyAdmin(){

  const loggedin =  Authservice2().loginStatus === 'in' ? true : false;
  // const usersMessages: [], 
  const { t } = useTranslation();
  //console.log('loged in 1: ', loggedin)
  // render() { 
  //   const { t } = this.props;
  //   this.setState({loggedin : Authservice2().loginStatus === 'in' ? true : false });   
      return (       
        <div>     
        {loggedin &&  
     <div className="akwaba-content-admin"> 
           <Row>
           <LoginStatus/>
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
                  <NavLink to="/messageadmin">
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
   }
    </div>
    )
  }
 
export default (MyAdmin);