import React, { Component, useEffect, useState } from "react";
import axios from "axios";
import MessagesDisplay from './MessagesDisplay';
import ConfigData from "../../../config.json";

export default function RetrieveMyMessages() {
 const [myMessages, getMyMessages] = useState('');

  useEffect(() => {
    getContactMessages();
      },[]);

     
   const getApiPath = () => { 
        let dev_env = ConfigData.ENVIRONMENT.DEV;
        let live_env = ConfigData.ENVIRONMENT.LIVE;
         if(dev_env)
         return ConfigData.BASE_URL_LOCAL+ConfigData.PAGES_URL.RetrieveMyMessages;  
         else if (live_env) 
         return ConfigData.BASE_URL_LIVE+ConfigData.PAGES_URL.RetrieveMyMessages;
         else
         return "http://localhost/php/contactmessage/retrievecontactmessages.php"
      };
      

  const getContactMessages = () =>{
 
    
   let  API_PATH = getApiPath(); 

   console.log("API path: ", API_PATH );
   
    axios.get(API_PATH)  
    .then((response)=>{
      const allMessages = response.data;   

      getMyMessages(allMessages);
    })
    .catch(error => console.error(`Error: ${error}`));
  }

  return (
    <MessagesDisplay myMessages = {myMessages}/>
  )

}