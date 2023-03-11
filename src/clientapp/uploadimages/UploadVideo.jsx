import React, { useState, useEffect } from "react";
import axios from "axios";

import { Row, Col } from "react-bootstrap";
import { useTranslation  } from "react-i18next";
import { createBrowserHistory } from 'history';

//https://codesandbox.io/s/c53q2?file=/src/App.js:58-172

   const UploadVideo = (props) => { 
 
  const [videoFile, setVideoFile] = useState();
  const [contactEmail, setContactEmail] = useState(localStorage.getItem('userEmail'));
  const [emailerrormsg, setEmailerrormsg] = useState('');

  const getApiPath = () => { 
    // return GetApis().UPLOADASSET;  
     return "http://groupakwabatech.com/uploaderMkDirVideo.php";
   };

  const { t } = useTranslation();

  const handleSubmit = event => {
  if (typeof contactEmail !== "undefined") {
    let isValid = true; 
    var pattern = new RegExp(
      /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
    );
    if (!pattern.test(contactEmail)) {
      isValid = false;
      setEmailerrormsg(<p>{t("pages.contact.text.emailpatterninvalidmsg")}</p>);
    }
  }
  }

  return ( 
    <div  className="content-akwaba" >
    <Row>    
    <Col md={{ span: 9, offset: 2}}> 
    <div>
  {/* <form action="http://groupakwabatech.com/uploaderMkDirVideo.php" method="post" enctype="multipart/form-data">
  */}
  <form action="http://localhost/htdocdev/ritab/src/server/uploaderMkDirVideo.php" method="post" enctype="multipart/form-data">
     
       <div className="form-group">
        <label>Re-enter Email</label>
        <input
          id="contactEmail"
          name="contactEmail"
          type="text"
          value={contactEmail}
          onChange={event => setContactEmail(event.target.value)}
          placeholder="re-enter email"
        />         
          </div>
          <div>
          <input
          type="file" 
          name="videoFile"
          id="videoFile"
          value={videoFile}
          onChange={event => setVideoFile(event.target.value)}
          placeholder="Upload video"
          /><br/><br/>
            </div>
          <div>
          <input type="submit" value="Upload video" onClick={(e) =>  {handleSubmit(e)}}/>
          </div>      
   </form>
   </div>
    </Col>
    </Row>
    </div>    
  );
};


export default (UploadVideo);


