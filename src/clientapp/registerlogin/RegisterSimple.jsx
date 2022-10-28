
//https://www.itsolutionstuff.com/post/password-and-confirm-password-validation-in-reactexample.html

import { useTranslation } from 'react-i18next';
import { React,useState} from "react";
import axios from "axios";
import GetApis from '../pages/GetApis';
import Select from 'react-select';
import CONFIG from '../../config.json';

const RegisterSimple = () => {
  const [fname, setFirstName] = useState('');
  const [lname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phonenumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const [usertype, setUserType] = useState('');  
  const [messageSent, setMessageSent] = useState('');
  const [clickedButtonButNotPosted, setClickedButtonButNotPosted] = useState('');
  const [clickedNotPostedMessage, setClickedNotPostedMessage] = useState('');
  const [fnameerrormsg, setFirstNameerrormsg] = useState('');
  const [lnameerrormsg, setLastNameerrormsg] = useState('');
  const [usertypeerrormsg, setUserTypeerrormsg] = useState('');    
  const [emailerrormsg, setEmailerrormsg] = useState('');
  const [phonenumbererrormsg, setPhoneNumbererrormsg] = useState('');
  const [passworderrormsg, setPassworderrormsg] = useState('');
  const [confirmpassworderrormsg, setConfirmPassworderrormsg] = useState('');
  const [pswandconfpswdiff, setConfPswandpswdiff] = useState('');
   
  const { t } = useTranslation();

  const handleSubmit = event => {
    console.log('handleSubmit ran');
   // event.preventDefault(); // 👈️ prevent page refresh
   const body ={fname, lname, email, phonenumber, usertype,  password, confirmpassword}; 

   setClickedButtonButNotPosted(<p>{t("pages.contact.text.msginvalidform")} </p>);
     if (validate()) {
      const API_PATH = CONFIG.DIRECT_LIVE.REGISTERSIMPLE;//"https://globalmarveltech.com/RegistrationMakerSimple.php"; 
     // const API_PATH = GetApis().REGISTERSIMPLE; 
      console.log('pi path: ', API_PATH )
      axios({
        method: "post",
        url: `${API_PATH}`,
        data: body,
      })
        .then((result) => {
          if (result.status === 200) {         
            setFirstName('');
            setLastName('');            
            setEmail('');
            setPhoneNumber('');
            setPassword('');
            setConfirmPassword('');
            setUserType('');            
            setUserTypeerrormsg('');                
            setPassworderrormsg('');
            setConfirmPassworderrormsg('');                
            setEmailerrormsg('');
            setFirstNameerrormsg('');
            setLastNameerrormsg('');           
            setEmailerrormsg('');
            setPhoneNumbererrormsg('');           
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

    if (!usertype) {
      isValid = false;
      setUserTypeerrormsg(<p>{t("pages.contact.text.usertypeinvalidmsg")}</p>);
    }

    if (!password) {
      isValid = false;
      setPassworderrormsg(<p>{t("pages.contact.text.passwordlinvalidmsg")}</p>);
    }

    if (!confirmpassword) {
      isValid = false;
      setConfirmPassworderrormsg(<p>{t("pages.contact.text.confirmpasswordlinvalidmsg")}</p>);
    }


    if (password!==confirmpassword) {
      isValid = false;
      setConfPswandpswdiff(<p>{t("pages.contact.text.pswandconfpswdiff")}</p>);
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
     
    return isValid;
  };
  
  return (
    <div  className="content-akwaba">
      <form action="#">
        <div><p>{t("pages.contact.text.header2")}</p></div>
        <div className="form-group"> 
             <label>{t("pages.contact.text.usertype")}</label> 
             <select name= "user_type" id="user_type" value={usertype}  onChange={event => setUserType(event.target.value)} >
                <option value="">{t("pages.categories.default")}</option>
                <option value="T">{t("pages.categories.trainee")}</option>
                <option value="A">{t("pages.categories.employee")}</option>
                <option value="P">{t("pages.categories.partner")}</option>
                <option value="C">{t("pages.categories.customer")}</option>
                <option value="O">{t("pages.categories.other")}</option>
              </select>
          <div className="text-danger">{usertypeerrormsg}</div>
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
          id="phone_number"
          name="phone_number"
          type="text"
          onChange={event => setPhoneNumber(event.target.value)}
          placeholder={t("pages.contact.text.phoneph")}
          value={phonenumber}
        />
          <div className="text-danger">{phonenumbererrormsg}</div>
     </div>   

            <div className="form-group">
              <label>{t("pages.contact.text.password")}</label>
               <input
                 type="password"
                 name="password"
                 value={password}
                 onChange={event => setPassword(event.target.value)}
                 placeholder={t("pages.contact.text.passwordph")}
                 id="password"
              />
               <div className="text-danger">{passworderrormsg}</div>
             </div>

             <div className="form-group">
               <label>{t("pages.contact.text.confirmpassword")}</label>
               <input
                type="password"
                 name="confirmpassword"
                 value={confirmpassword}
                 onChange={event => setConfirmPassword(event.target.value)}
                 placeholder={t("pages.contact.text.confirmpasswordph")}
                 id="confirmpassword"
               />
               <div className="text-danger">{confirmpassworderrormsg}</div>              
               <div className="text-danger">{pswandconfpswdiff}</div>               
             </div> 
      
       <input
              className="btn btn-primary"
              type="submit"
              onClick={(e) =>  {handleSubmit(e)}}
              defaultValue={t("pages.contact.text.submit")}
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

export default RegisterSimple;

