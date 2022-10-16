
//https://www.itsolutionstuff.com/post/password-and-confirm-password-validation-in-reactexample.html

import { useTranslation } from 'react-i18next';
import { React,useState} from "react";
import axios from "axios";
import ConfigData from "../../../config.json";

const Contact = () => {
  const [fname, setFirstName] = useState('');
  const [lname, setLastName] = useState('');
  const [title, setTitle] = useState('');
  const [email, setEmail] = useState('');
  const [phonenumber, setPhoneNumber] = useState('');
  const [reason, setReason] = useState('');
  const [messageSent, setMessageSent] = useState('');
  const [clickedButtonButNotPosted, setClickedButtonButNotPosted] = useState('');
  const [clickedNotPostedMessage, setClickedNotPostedMessage] = useState('');
  const [fnameerrormsg, setFirstNameerrormsg] = useState('');
  const [lnameerrormsg, setLastNameerrormsg] = useState('');
  const [titleerrormsg, setTitleerrormsg] = useState('');
  const [emailerrormsg, setEmailerrormsg] = useState('');
  const [phonenumbererrormsg, setPhoneNumbererrormsg] = useState('');
  const [reasonerrormsg, setReasonerrormsg] = useState('');
  
   
  const { t } = useTranslation();

  const getApiPath = () => { 
    if(ConfigData.ENVIRONMENT.DEV)
           return ConfigData.BASE_URL_LOCAL+ConfigData.PAGES_URL.CONTACTUS;  
    else if(ConfigData.ENVIRONMENT.LIVE)
          return ConfigData.BASE_URL_LIVE+ConfigData.PAGES_URL.CONTACTUS;
    else if(ConfigData.ENVIRONMENT.MANUAL)
         return ConfigData.MANUAL_URL.CONTACTUS;
     else return "no environment was specified";
  };

  const handleSubmit = event => {
    console.log('handleSubmit ran');
    event.preventDefault(); // 👈️ prevent page refresh
   const body ={fname, lname, title,email,phonenumber,reason}; 
    
   setClickedButtonButNotPosted(<p>{t("pages.contact.text.msginvalidform")} </p>);
     if (validate()) {            
      const API_PATH = getApiPath();
      axios({
        method: "post",
        url: `${API_PATH}`,
        data: body,
      })
        .then((result) => {
          if (result.status === 200) {         
            setFirstName('');
            setLastName('');
            setTitle('');
            setEmail('');
            setPhoneNumber('');
            setReason('');
            setEmailerrormsg('');
            setFirstNameerrormsg('');
            setLastNameerrormsg('');
            setTitleerrormsg('');
            setEmailerrormsg('');
            setPhoneNumbererrormsg('');
            setReasonerrormsg('');
            setMessageSent(true);
            setClickedButtonButNotPosted(false);
            setClickedNotPostedMessage('');            
          }
        })
        .catch(function (error) {    
          console.log(error);
        });     
    } else { 
      setClickedButtonButNotPosted(true);
      setClickedNotPostedMessage(<p>{t("pages.contact.text.msginvalidform")} </p>);  
      console.log("Data was not sent");
      return;
    }
  }

 const  validate = ()=> {
    let isValid = true; 
    if (!title) {
      isValid = false;
      setTitleerrormsg(<p>{t("pages.contact.text.titleinvalidmsg")}</p>);
    }
    
    if (!fname) {
      isValid = false;
      setFirstNameerrormsg(<p>{t("pages.contact.text.firstnameinvalidmsg")}</p>);
    }

    if (!lname) {
      isValid = false;
      setLastNameerrormsg(<p>{t("pages.contact.text.lastnameinvalidmsg")}</p>);
    }

    if (!phonenumber) {
      isValid = false;
      setPhoneNumbererrormsg(<p>{t("pages.contact.text.phoneinvalidmsg")}</p>);
     }
    if (!email) {
      isValid = false;
      setEmailerrormsg(<p>{t("pages.contact.text.emailinvalidmsg")}</p>);
    }

    if (typeof email !== "undefined") {
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(email)) {
        isValid = false;
        setEmailerrormsg(<p>{t("pages.contact.text.emailpatterninvalidmsg")}</p>);
      }
    }
    
    if (!reason) {
      isValid = false;
      setReasonerrormsg(<p>{t("pages.contact.text.subjectinvalidmsg")}</p>);
    }    
    return isValid;
  };
  
  return (
    <div  className="content-akwaba">
      <form action="#">
        <div><p>{t("pages.contact.text.header1")}</p></div>
      <div className="form-group">
        <label>{t("pages.contact.text.title")} </label>
         <input
          id="title"
          name="title"
          type="text"
          value={title}
          onChange={event => setTitle(event.target.value)}
          placeholder={t("pages.contact.text.titleph")}
        />
          <div className="text-danger">{titleerrormsg}</div>
        </div>

        <div className="form-group">
        <label>{t("pages.contact.text.firstname")} </label>
        <input
          id="first_name"
          name="first_name"
          type="text"
          value={fname}
          onChange={event => setFirstName(event.target.value)}          
          placeholder={t("pages.contact.text.firstnameph")}
        />
          <div className="text-danger">{fnameerrormsg}</div>
        </div>

        <div className="form-group">
         <label>{t("pages.contact.text.lastname")}</label>
        <input
          id="last_name"
          name="last_name"
          type="text"
          value={lname}
          onChange={event => setLastName(event.target.value)}
          placeholder={t("pages.contact.text.lastnameph")}
        />
          <div className="text-danger">{lnameerrormsg}</div>
        </div>

        <div className="form-group">
        <label>{t("pages.contact.text.email")}</label>
        <input
          id="email"
          name="email"
          type="text"
          value={email}
          onChange={event => setEmail(event.target.value)}
          placeholder={t("pages.contact.text.emailph")}
        />
          <div className="text-danger">{emailerrormsg}</div>
      </div>

      <div className="form-group">
              <label>{t("pages.contact.text.phone")}</label>
         <input
          id="phone number"
          name="phone number"
          type="text"
          onChange={event => setPhoneNumber(event.target.value)}
          placeholder={t("pages.contact.text.phoneph")}
          value={phonenumber}
        />
          <div className="text-danger">{phonenumbererrormsg}</div>
        </div>

        <div className="form-group">
        <label>{t("pages.contact.text.subject")}</label>
        <textarea
          id="reason"
          name="reason"
          type="text"
          value={reason}          
          onChange={event => setReason(event.target.value)}
          placeholder={t("pages.contact.text.subjectph")}
        />
          <div className="text-danger">{reasonerrormsg}</div>      
       </div>
       <input
              className="btn btn-primary"
              type="submit"
              onClick={(e) =>  {handleSubmit(e)}}
              defaultvalue={t("pages.contact.text.submit")}
            />
       
        <div>
               {messageSent && (
                <div>
                  {t("pages.contact.text.thankyou1")} <br />
                  {t("pages.contact.text.thankyou2")} <br />                 
                  {t("pages.contact.text.thankyou3")}{" "}
                </div>
              )}
              
              {clickedButtonButNotPosted && (
                <div>
                  {clickedNotPostedMessage} <br />                  
                </div>
                 )}
         </div>

      </form>
    </div>
  );
};

export default Contact;

