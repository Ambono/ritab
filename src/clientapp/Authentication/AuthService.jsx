
import GetApis from '../pages/GetApis';
import axios from "axios";
import { React, Component, useEffect} from "react";
import Trainings from '../academy/Trainings/Trainings';

class Authservice extends Component { 
  constructor(props){
    super(props);
    this.state = {
      isLoggedIn: false,
      logginstatus:''
    }
}
 
    // const {isLoggedIn} = this.state.isLoggedIn;
      // const [isLoggedIn, setLoggedIn] = useState('');

      // componentDidMount(){
      //   GetUrlForApis() ;
      // }
  //useEffect =()=>{this.GetUrlForApis() };

 // GetUrlForApis = () => {  
  componentDidMount(){
        const API_PATH = GetApis().LOGINMANAGER;
        const loginstatus = this.state.isLoggedIn;
              axios.get(`${API_PATH}`,{                          
              })        
              .then((result) => {
                console.log('result data: ', result.data)
                if (result.status === 200 && result.data==='in') {
                   this.setState({ isLoggedIn: true }, () => {
                    console.log('isLoggedIn  after result data: ', this.state.isLoggedIn)});
                  
                  } 
                  else{
                    this.setState({ isLoggedIn: false });
                  }
                  
                })              
              .catch(function (error) {
                console.log(error);
              }); 
              console.log('isLoggedIn componentdid mount: ', this.state.isLoggedIn);
              console.log('loginstatus componentdid mount: ', loginstatus); 
       }

     render() {
      const logginstat = this.state.isLoggedIn == true? 'in': 'out';
      console.log('loginstat render: ', logginstat);
          return(
            <div>
              <Trainings logginstatus = {logginstat}></Trainings>
            </div>  
          ) 
          }
        }
        
 export default Authservice;



// import GetApis from '../pages/GetApis';
// import axios from "axios";
// import { useEffect, React, useState} from "react";
// import Trainings from '../academy/Trainings/Trainings';

// const Authservice = () => {
//     // const GetLogin = ()=>{
//        const [isLoggedIn, setLoggedIn] = useState('');

//         const API_PATH = GetApis().LOGINMANAGER;

//               axios.get(`${API_PATH}`,{                          
//               })        
//               .then((result) => {
//                 console.log('result data: ', result.data)
//                 if (result.status === 200 && result.data==='in') {
//                   setLoggedIn('in');
//                   console.log('isloggedin: ', isLoggedIn)
//                  return true
//                   } 
//                   else{
//                     setLoggedIn('out');
//                    return 'out';
//                   }
//                 })              
//               .catch(function (error) {
//                 console.log(error);
//               }); 
//           //  }//end getlogin
        
//           return(
//             <div>
//               <Trainings isLoggedIn = {isLoggedIn}/>
//             </div>  
//           ) };

//  export default Authservice;
  


