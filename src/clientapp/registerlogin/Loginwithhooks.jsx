
//https://www.itsolutionstuff.com/post/password-and-confirm-password-validation-in-reactexample.html

import { useTranslation } from 'react-i18next';
import { React,useState} from "react";
import axios from "axios";
import GetApis from '../pages/GetApis';
import ConfigData from "../../config.json";
import { Redirect } from "react-router";

const Login = () => {
  const [isLoggedInAsAdmin, setLoggedInAsAdmin] = useState('');
  const [isLoggedInAsTrainee, setLoggedInAsTrainee] = useState('');
  const [email, setEmail] = useState('');
  const [isLoggedInAsCustomer, setLoggedInAsCustomer] = useState('');
  const [password, setPassword] = useState(''); 
  const [messageSent, setMessageSent] = useState('');
  const [passworderrormsg, setPassworderrormsg] = useState('');
  const [emailerrormsg, setEmailerrormsg] = useState('');
  const [clickedButtonButNotPosted, setClickedButtonButNotPosted] = useState('');
  const [clickedNotPostedMessage, setClickedNotPostedMessage] = useState('');
  
   
  const { t } = useTranslation();  

  const handleSubmit = event => {
    console.log('handleSubmit ran');
    event.preventDefault(); // 👈️ prevent page refresh
   const body ={ email, password}; 
    
   setClickedButtonButNotPosted(<p>{t("pages.contact.text.msginvalidform")} </p>);
     if (validate()) {
      const API_PATH = GetApis().LOGIN; 
      console.log('pi path: ', API_PATH )
            axios({
              method: "post",
              url: `${API_PATH}`,
              data: body,
            })        
            .then((result) => {
              if (result.status === 200 && result.data===1) {
                console.log('result: ', result)
                setEmail('');
                setPassword('');                     
                setMessageSent(true);
                setClickedButtonButNotPosted(false);
                setClickedNotPostedMessage(''); 
                let resultemail = this.state.email;               
                if (resultemail === ConfigData.CREDENTIALS.ADMIN_EMAIL) {
                  setLoggedInAsAdmin(true);
                } else if (resultemail === ConfigData.CREDENTIALS.TRAINEE_EMAIL) {
                  setLoggedInAsTrainee(true);
                } 
                else{
                  setLoggedInAsCustomer(true);
                }
              }
              else{
                return;
              }
            })
            .catch(function (error) {
              console.log(error);
            });
                    
          }
        }
      
 const  validate = ()=> {
    let isValid = true; 

    if (!email) {
      isValid = false;
      setEmailerrormsg(<p>{t("pages.contact.text.emailinvalidmsg")}</p>);
    }

    if (!password) {
      isValid = false;
      setPassworderrormsg(<p>{t("pages.contact.text.passwordlinvalidmsg")}</p>);
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
  

  if (isLoggedInAsAdmin) {
    return <Redirect to={{ pathname: "/adminpage" }} />;
  }else if (isLoggedInAsTrainee) {
    return <Redirect to={{ pathname: "/trainings" }} />;
  } 
  else if (isLoggedInAsCustomer) {
    return <Redirect to={{ pathname: "/home" }} />;
  };

  
 
    return(
    <div  className="content-akwaba">
      <form action="#">
        <div><p>{t("pages.contact.text.header3")}</p></div>            
        
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
              <label>{t("pages.contact.text.password")}:</label>
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
  
   ) };

export default Login;

