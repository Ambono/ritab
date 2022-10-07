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
        <p>{t("footer.poweredby")}</p>      
       <div>
         
<Container>  
  <Row>
  <HashRouter> 
    <Col md={{ span: 2, offset: 1}}> <NavLink to="/contact"><span className="akwaba-tiles-navlinks">{t("footer.ask")}</span></NavLink></Col>
    <Col md={{ span: 2, offset: 0 }}><NavLink to="/register"><span className="akwaba-tiles-navlinks">{t("footer.join")}</span></NavLink></Col>
    {/* <Col md={{ span: 2, offset: 0 }}><div className="akwaba-container-items"><div className="akwaba-tiles-navlinks"><NavLink to="/about"><span>{t("footer.about")}</span></NavLink></div></div></Col> */}
    <Col md={{ span: 2, offset: 0 }}><NavLink to="/followus"><span className="akwaba-tiles-navlinks">{t("footer.follow")}</span></NavLink></Col> 
    <Col md={{ span: 2, offset: 0 }}><NavLink to="/followus"><span className="akwaba-tiles-navlinks">{t("footer.disclaimer")}</span></NavLink></Col>  
    <Col md={{ span: 2, offset: 0 }}><NavLink to="/followus"><span className="akwaba-tiles-navlinks">{t("footer.help")}</span></NavLink></Col>   
  </HashRouter> 
  </Row>  
</Container> 
       </div>
      </div>
    );
  }
}
 
export default withTranslation()(Footer);