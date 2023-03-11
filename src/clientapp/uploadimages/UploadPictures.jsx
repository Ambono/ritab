import { useTranslation } from 'react-i18next';
import { React,useState} from "react";
import axios from "axios";
import GetApis from '../pages/GetApis';
import Select from 'react-select';
import CONFIG from '../../config.json';
import Accordion from 'react-bootstrap/Accordion';
import Card from "react-bootstrap/Card";
import UploadVideo from './UploadVideo';
import { useEffect } from 'react';

const UploadPictures = () => {
    const [mainimage, setImage] = useState('');
    const [firstoptionalimage, setOptionalImage1] = useState('');
    const [secondoptionalimage, setOptionalImage2] = useState('');
    const [thirdoptionalimage, setOptionalImage3] = useState('');
    const [contactEmail, setContactEmail] = useState(localStorage.getItem('userEmail'));
    const [emailerrormsg, setEmailerrormsg] = useState('');
    const [picturesSent, setPicturesSent] = useState();
  

    useEffect(() =>{
      // setContactEmailFromLocalStorage(localStorage.getItem('userEmail'));
      // setContactEmail(contactEmailFromLocalStorage);
    },[]);

    const  validate = ()=> {
        let isValid = true; 
    if (!contactEmail) {
        isValid = false;
        setEmailerrormsg(<p>{t("pages.contact.text.emailinvalidmsg")}</p>);
      }
  
      if (typeof contactEmail !== "undefined") {
        var pattern = new RegExp(
          /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
        );
        if (!pattern.test(contactEmail)) {
          isValid = false;
          setEmailerrormsg(<p>{t("pages.contact.text.emailpatterninvalidmsg")}</p>);
        }
    }

    setPicturesSent(true);
}

const getApiPath = () => { 
  // return GetApis().UPLOADASSET;  
   return "http://groupakwabatech.com/uploaderMkDir.php";
 };
  
  const { t } = useTranslation();    
        return (             
        <div className='col-md-9'>
  {/* <form action={getApiPath} method="post" enctype="multipart/form-data"> */}
  
  <form action="http://groupakwabatech.com/uploaderMkDir.php" method="post" enctype="multipart/form-data">
     
    <div className="form-group">
        <label>Re-enter your {t("pages.contact.text.email")}</label>
        <input
          readonly 
          id="contactEmail"
          name="contactEmail"
          type="text"
          value={contactEmail}
          onChange={event => setContactEmail(event.target.value)}
          placeholder={t("pages.contact.text.emailph")}
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
        
        {/* {  validate() && (    */}
        <div> 
         <input type="submit" value="Upload Image" name="submit" />
         {/* onClick={ validate()} */}
        </div>       
</form>
</div>
         )
    }  


export default UploadPictures
