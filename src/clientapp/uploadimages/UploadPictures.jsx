import { useTranslation } from 'react-i18next';
import { React,useState} from "react";
import { useEffect } from 'react';
import GetUrl from "../services/urlService";
import LocalStorageService from '../services/localStorageService';
import { Row, Col } from "react-bootstrap";

 const UploadPictures = () => {
    const [mainimage, setImage] = useState('');
    const [firstoptionalimage, setOptionalImage1] = useState('');
    const [secondoptionalimage, setOptionalImage2] = useState('');
    const [thirdoptionalimage, setOptionalImage3] = useState('');
    const [contactEmail, setContactEmail] = useState('');
    const [emailerrormsg, setEmailerrormsg] = useState('');
    const [canSendPicture, setCanSendPictures] = useState();
  

   

const email = LocalStorageService("get", "userEmail");

const handleSubmit = event => {validate()}

    const  validate = ()=> { 
    if(LocalStorageService("get", "userEmail")){
    setCanSendPictures(true);
    LocalStorageService("remove", "email")
    }
}

function getApiPath (){ 
  return GetUrl("uploadPics") 
 };
  
   const { t } = useTranslation();    
         return (
          
          <div>
        
           <Row>    
    <Col md={{ span: 9, offset: 2}}> 
    <div>
  <form action={getApiPath()} method="post" enctype="multipart/form-data">
  
    <div className="form-group">
        <span><label>Your email</label></span>
        <input
          readonly 
          id="contactEmail"
          name="contactEmail"
          type="text"
          value={email}         
          placeholder={email}
          className= "blured-input"
        />
          <div className="text-danger">{emailerrormsg}</div>
      </div>

      <div className="form-group">
        <label>{t("Choose image to upload, pages.contact.text.firstname")} </label>
        <input
          id="mainimage"
          name="mainimage"
          type="file"
          value={mainimage}
          onChange={event => setImage(event.target.value)}  
        />    
        </div>

        <div className="form-group">
        <label>{t("firstoptionalimage, pages.contact.text.firstname")} </label>
        <input
          id="firstoptionalimage"
          name="firstoptionalimage"
          type="file"
          value={firstoptionalimage}
          onChange={event => setOptionalImage1(event.target.value)}        
        />       
        </div>

        <div className="form-group">
        <label>{t("secondoptionalimage, pages.contact.text.firstname")} </label>
        <input
          id="secondoptionalimage"
          name="secondoptionalimage"
          type="file"
          value={secondoptionalimage}
          onChange={event => setOptionalImage2(event.target.value)}  
        />       
        </div>

        <div className="form-group">
        <label>{t("thirdoptionalimage, pages.contact.text.firstname")} </label>
        <input
          id="thirdoptionalimage"
          name="thirdoptionalimage"
          type="file"
          value={thirdoptionalimage}
          onChange={event => setOptionalImage3(event.target.value)}  
        />       
        </div>
       
        <div> 
        <div>        

<input type="submit" value="Upload Image" name="submit" />

          </div>         
        </div>       
</form>
</div> 
  </Col > 
</Row>    
 
    </div>
         )
     }  


 export default UploadPictures
