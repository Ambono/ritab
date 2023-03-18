import React, { useEffect, useState } from "react";
import axios from "axios";
import { useTranslation } from 'react-i18next';
import { Redirect } from "react-router";
import LocalStorageService from '../services/localStorageService';
import GetUrl from "../services/urlService";

function Logout (){  
const[canLogout, setCanLogout] = useState(false);
const[email, setEmail] = useState('');

  function getLoginEmail (){
     var savedEmail = LocalStorageService("get", "email");
   // var savedEmail =  localStorage.getItem("email");
    setEmail(savedEmail);
    return email;
  }; 
   
 function  execute (event){
    getLoginEmail()
    handleFormSubmit();
  };

 function  getApiPath(){   
   //return  CONFIG.DIRECT_LIVE.LOGOUT;
  //  return GetApis().LOGOUT;
  //return "http://localhost/htdocdev/ritab/src/server/registerlogin/Logout.php"    
 return GetUrl("logout");
};

 function handleFormSubmit () {
    const API_PATH = getApiPath(); 
    const  body ={email}   
    axios({
      method: "post",
      url: `${API_PATH}`,
      data: body,
    })
      .then((result) => {
        if (result.status === 200) {
          setCanLogout(true);
         // localStorage.removeItem("email");
          LocalStorageService("remove","email" );
        }
      })
      .catch(function (error) {
        //this.setState({ error: error.message })
        console.log(error);
      });
    // .catch(error => this.setState({ error: error.message }));
  };
  useEffect (()=>{
     execute()
    },[])
   
  const { t } = useTranslation();   
    if (canLogout) {
      return <Redirect to={{ pathname: "/home" }} />;
    }
    return <div></div>;
  }
export default (Logout);
