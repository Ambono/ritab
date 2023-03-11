import { useTranslation } from 'react-i18next';
import { React,useState} from "react";
import axios from "axios";
import GetApis from '../pages/GetApis';
import Select from 'react-select';
import CONFIG from '../../config.json';
import Accordion from 'react-bootstrap/Accordion';
import Card from "react-bootstrap/Card";
import {NavLink, HashRouter } from "react-router-dom";
import { Row, Col } from "react-bootstrap";

const ThankyouAfterRegistration = () => {
 
        const { t } = useTranslation();    
        return (             
        <div className='justify-content'>
    <Row className="margin-maker">    
    <Col md={{ span: 9, offset: 2}}>
    <div>
      Thank you. Your Registration was successful
    </div>
    <NavLink to="/login">
    <input
         className="btn btn-primary"
         type="submit" 
         value="go to login"
            />
     </NavLink>   
    </Col>
    </Row>
    </div>
         )
    }  


export default ThankyouAfterRegistration
