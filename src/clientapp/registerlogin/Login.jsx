import React, { useState, useEffect } from "react";
import axios from "axios";
import { useTranslation } from 'react-i18next';
import { Redirect } from "react-router";
import LocalStorageService from '../services/localStorageService';
import GetUrl from "../services/urlService";
import {NavLink, HashRouter } from "react-router-dom";

const validEmailRegex = RegExp(
  /^(([^<>()\\[\]\\.,;:\s@\\"]+(\.[^<>()\\[\]\\.,;:\s@\\"]+)*)|(\\".+\\"))@(([^<>()[\]\\.,;:\s@\\"]+\.)+[^<>()[\]\\.,;:\s@\\"]{2,})$/i
);

const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach(
    // if we have an error string set valid to false
    (val) => val.length > 0 && (valid = false)
  );
  return valid;
}; 

 function Login(){     
      const [password, setPassword] = useState('');
      const [email, setEmail] = useState('');
      const [YZabcdefghijklmPQRSefghi2ZJKLMNOabcdjkl, setPasswordWork] = useState('');
      const [XYZabcdefghijklmnopqrsfghijVWXYcdestuvwxyz0192, setEmailWorkpart1] = useState('');
      const [ QRSTUVWXYZabcdefghijklmnopqrstuvwxyz012, setEmailWorkpart2] = useState('');     
      const [isLoggedInAsAdmin, setIsLoggedInAsAdmin ] = useState(false);
      const [isLoggedInAsTrainee, setIsLoggedInAsTrainee ] = useState(false);
      const [isLoggedInAsCustomer, setIsLoggedInAsCustomer] = useState(false); 
      const [isLoggedInAsPartner,setIsLoggedInAsPartner ] = useState(false);   
      const [isLoggedInAsOther,setIsLoggedInAsOther] = useState(false);
      const [mailSent, setMailSent ] = useState(false);
      const [error, setErrors] = useState();
      const [formErrors, setFormErrors] = useState({ password: "", email: "" });

 function validate () {
    if (!password || !email) {
      return false;
    }  
    return true;
  };

  function handleChange (event)  {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = formErrors;

    switch (name) {
      case "password":
        errors.password =
          value.length < 2 || value === "" ? "Please enter password" : "";
        break;
      case "email":
        errors.email =
          validEmailRegex.test(value) || value === ""
            ? ""
            : "Email is not valid!";
        break;
      default:
        break;
    }
    setFormErrors(formErrors);
  };
 
  function execute (event)  {
    event.preventDefault();
    if (validateForm(formErrors) && validate()) {
      console.info("Valid Form");
    // console.log('email: ', fghijVWXYZaklmnopqrUbcdestuvwxyz0192)
      handleFormSubmit(event);    
    } else {
      console.error("Invalid Form");
      return;
    }
  };

  function getApiPath () {   
      return GetUrl("login");
  };

  const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generateString(length) {
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}


  function handleFormSubmit (e) {
    const API_PATH = getApiPath();
    // setPasswordWork("hello");
    // setEmailWork("email");
    e.preventDefault(); // 👈️ prevent page refresh
    //const body ={email, password}; 
    
   const body ={XYZabcdefghijklmnopqrsfghijVWXYcdestuvwxyz0192,YZabcdefghijklmPQRSefghi2ZJKLMNOabcdjkl, QRSTUVWXYZabcdefghijklmnopqrstuvwxyz012}; 
  
    axios({
      method: "post",
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      url: `${API_PATH}`,
      data: body,
    })
      .then((result) => {
        if (result.status === 200) { 
          LocalStorageService("set", "token", result.data.token)
          LocalStorageService("set", "userEmail", result.data.email)
          console.log('login data: ', {result});          
          if (result.data.usertype==='A') {            
            setIsLoggedInAsAdmin(true);
          } else if (result.data.usertype==='P') {
            setIsLoggedInAsPartner(true);          
          } else if (result.data.usertype==='C') {
            setIsLoggedInAsCustomer(true);
          } 
          else{
            setIsLoggedInAsOther(true);
          }
        
          setEmail('');
          setPassword('');        
        }
        else{
          return {body};
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const { t } = useTranslation();

    if (isLoggedInAsAdmin) {
      return <Redirect to={{ pathname: "/adminpage" }} />;
    }
    else if (isLoggedInAsPartner) {
    return <Redirect to={{ pathname: "/partnerservice" }} />;
    }  
    else if (isLoggedInAsCustomer || isLoggedInAsOther) {
      //return this.props.history.push('/adminpage');
      return <Redirect to={{ pathname: "/servicesubscription" }} />;
    }
    return (
      <div className="content-akwaba">
        <div>
          <form action="#">
            <label>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setEmailWorkpart1(generateString(10).trim().toLowerCase()+e.target.value.toLowerCase().split('@')[0]);
                setEmailWorkpart2(generateString(10).trim().toLowerCase()+e.target.value.toLowerCase().split('@')[1]);
                handleChange(e);
              }}
            />
            {formErrors.email.length > 0 && <div>{formErrors.email}</div>}
            <br />

            <label>Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setPasswordWork(e.target.value+generateString(10).trim());              
                handleChange(e);
              }}
            />
            {formErrors.password.length > 0 && <div>{formErrors.password}</div>}
            <br />
            <input
              type="submit"
              onClick={(e) => execute(e)}
              value={t("pages.contact.text.submit")}
            />      

            <br />
            <div>{t("pages.contact.text.notregisteredyet")}</div>
            <NavLink to="/registersimple">
            <b>{t("pages.contact.text.register")}</b>
             </NavLink>

          </form>
        </div>
      </div>
    );
  }
export default (Login);
