
import GetApis from '../pages/GetApis';
import axios from "axios";
import { useEffect, React,useState} from "react";
import Trainings from '../academy/Trainings/Trainings';

const Authservice = () => {
    // const GetLogin = ()=>{
       const [isLoggedIn, setLoggedIn] = useState('');

        const API_PATH = GetApis().LOGINMANAGER;

              axios.get(`${API_PATH}`,{                          
              })        
              .then((result) => {
                console.log('result data: ', result.data)
                if (result.status === 200 && result.data==='in') {
                  setLoggedIn(true);
                  console.log('result data : ', result.data)
                 return true
                  } 
                  else{
                    setLoggedIn(false);
                   return false
                  }
                })              
              .catch(function (error) {
                console.log(error);
              }); 
          //  }//end getlogin
        
          return(
            <div>
              <Trainings isLoggedIn = {isLoggedIn}/>
            </div>  
          ) };

 export default Authservice;
  