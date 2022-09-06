import React, { Component } from "react";
//import akwabagroup1 from "../../img/akwabagroup1.PNG";
import {NavLink, HashRouter } from "react-router-dom";
import Accordion from 'react-bootstrap/Accordion';
import Card from "react-bootstrap/Card";
import { withTranslation  } from "react-i18next";

class AkwabaGaming extends Component {
  render() {
    const { t } = this.props;
    return (
      <div className="">    
      <div className="content-justscript-akwaba">
      <p>We provide computer game spectacles. Real fun!</p>
       <HashRouter>          
        <ul  className ="no-bullets-nav">      
          <li className ="">
            <NavLink to="/akwabasell"><span>Find event</span></NavLink>
          </li>           
          <li>
            <NavLink to="/akwabaorder"><span>Book</span></NavLink>
          </li>
          <li>
            <NavLink to="/contact"><span>Contact us</span></NavLink>            
          </li>            
          </ul>           
        </HashRouter>        
<Accordion defaultActiveKey="0">  
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="0">
    Video game spectable organising — check it out!     
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="0">
      <Card.Body className="content-accordion" >Amazing computer game spectacles</Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="1">
    Events and spectacles ticketing — check it out!       
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="1">
      <Card.Body className="content-accordion">Ticket design and sale for events and spectacles</Card.Body>
    </Accordion.Collapse>
  </Card> 
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="2">
    Printing  — check it out!       
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="2">
      <Card.Body className="content-accordion">B2C marketing correspondence and bills printings</Card.Body>
    </Accordion.Collapse>
  </Card> 
</Accordion>
</div>  

    </div>
    );
  }
}

export default withTranslation ()(AkwabaGaming);
