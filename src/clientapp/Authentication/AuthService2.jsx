
import GetApis from '../pages/GetApis';
import axios from "axios";
import React, {useState} from 'react';

function  Authservice2 ()  {  
       // const API_PATH = "https://globalmarveltech.com/LoginManager.php"
        const API_PATH = GetApis().LOGINMANAGER;
         const [loginStatus, setLoginStatus] = useState(''); 
        
              axios.get(`${API_PATH}`,{                          
              })        
              .then((result) => {              
                 if (result.status === 200 ) {
                  setLoginStatus(result.data);                               
                  }                                    
                })              
              .catch(function (error) {
                console.log(error);
              });              
           
          return {loginStatus};
           
          }        
        
 export default Authservice2;
