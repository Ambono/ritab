import React, { Component } from "react";
import {NavLink, HashRouter } from "react-router-dom";
import { withTranslation  } from "react-i18next";
import { Row, Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
class Footer extends Component {
  render() {
    const { t } = this.props;
    return (
      <div className ="footer-akwaba">
       <p>@MarvelTech.com 2022</p>
       <div>
         
<Container>  
  <Row>
  <HashRouter> 
    <Col md={{ span: 2, offset: 1}}> <div className="akwaba-container-items"><div className="akwaba-tiles-navlinks"> <NavLink to="/contact"><span>{t("footer.ask")}</span></NavLink></div></div></Col>
    <Col md={{ span: 2, offset: 0 }}><div className="akwaba-container-items"><div className="akwaba-tiles-navlinks"><NavLink to="/register"><span>{t("footer.join")}</span></NavLink></div></div></Col>
    {/* <Col md={{ span: 2, offset: 0 }}><div className="akwaba-container-items"><div className="akwaba-tiles-navlinks"><NavLink to="/about"><span>{t("footer.about")}</span></NavLink></div></div></Col> */}
    <Col md={{ span: 2, offset: 0 }}><div className="akwaba-container-items"><div className="akwaba-tiles-navlinks"><NavLink to="/followus"><span>{t("footer.follow")}</span></NavLink></div></div></Col>  
  </HashRouter> 
  </Row>  
</Container> 
       </div>
      </div>
    );
  }
}
 
export default withTranslation()(Footer);