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

const ThankyouAfterUploaded = () => {
 
        const { t } = useTranslation();    
        return (             
        <div className='justify-content'>
    <Row className="margin-maker">    
    <Col md={{ span: 9, offset: 2}}>
    <div>
      Thank you. Your images are uploaded
    </div>
    <NavLink to="/home">
    <input
         className="btn btn-primary"
         type="submit" 
         value="return to home page"
            />
     </NavLink>   
    </Col>
    </Row>
    </div>
         )
    }  


export default ThankyouAfterUploaded
