import React, { Component, useEffect, useState } from "react";
import axios from "axios";
import MessagesDisplay from './MessagesDisplay_Delete';
import GetApis from '../GetApis';
import CONFIG from '../../../config.json';

export default function RetrieveMyMessages() {
 const [myMessages, getMyMessages] = useState('');

  useEffect(() => {
    getContactMessages();
      },[]);

     
   const getApiPath = () => { 
       //return GetApis().RETRIEVEMYMESSAGES;
       return CONFIG.DIRECT_LIVE.RETRIEVEMYMESSAGES;
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