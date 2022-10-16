// import React, { Component } from "react";
// import axios from "axios";
// //import '../../StyleSheet.css';
// import { withTranslation } from "react-i18next";
// import { Redirect } from "react-router";
// import ConfigData from "../../config.json";

// //https://www.itsolutionstuff.com/post/password-and-confirm-password-validation-in-reactexample.html

// class Contact extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       // isAkwabatech:false,
//       mailSentAkwabaTech: false,
//       input: {},
//       errors: {},
//     };

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     let input = this.state.input;
//     input[event.target.name] = event.target.value;
//     this.setState({
//       input,
//     });
//   }

//   execute = (event) => {
//     event.preventDefault();
//     this.handleSubmit(event);
//     this.sendEmail(event);
//   };

//   getEmailSenderApiPath = () => {
//     //this.input["audience"] = "akwabatech";
//     let environmt = ConfigData.ENVIRONMENT.DEV === "Yes" ? true : false;

//     let extension = ConfigData.SENDEMAIL.SENDEMAILPAGE;

//     let path = ConfigData.SENDEMAIL.NGROK + extension;

//     if (environmt) {
//       path = ConfigData.BASE_URL_LOCAL.XAMPP + extension;
//     }
//     return path;
//   };

//   getApiPath = () => {
//     let environmt = ConfigData.ENVIRONMENT.DEV === "Yes" ? true : false;
//     let extension = ConfigData.PAGES_URL.CONTACTUS;
//     let path = ConfigData.BASE_URL_LIVE + extension;
//     if (environmt) {
//       path =
//         ConfigData.BASE_URL_LOCAL.XAMPP +
//         ConfigData.BASE_URL_LOCAL.PATH_MESSAGES +
//         extension;
//     }
//     return path;
//   };

//   handleSubmit(event) {
//     event.preventDefault();
//     if (this.validate()) {
//       console.log(this.state);

//       const API_PATH = this.getApiPath();

//       axios({
//         method: "post",
//         url: `${API_PATH}`,
//         data: this.state.input,
//       })
//         .then((result) => {
//           if (result.status === 200) {
//             console.log("REDIRECTION avec status => ", result.status);
//             let input = {};
//             input["fname"] = "";
//             input["lname"] = "";
//             input["email"] = "";
//             input["teleph"] = "";
//             input["reason"] = "";
//             input["mailSentAkwabaTech"] = "true";
//             this.setState({ input: input });
//             this.setState({ mailSentAkwabaTech: true });
//             alert(
//               "Your message was sent. Akwabatech will get back to you soon."
//             );
//           }
//         })
//         .catch(function (error) {
//           //this.setState({ error: error.message })
//           console.log(error);
//         });
//       // .catch(error => this.setState({ error: error.message }));
//     } else {
//       alert("Invalid Form");
//       console.error("Invalid Form");
//       return;
//     }
//   }

//   validate() {
//     let input = this.state.input;
//     let errors = {};
//     let isValid = true;

//     input["mailSentAkwabaTech"] = true;
//     if (!input["fname"]) {
//       isValid = false;
//       errors["fname"] = "Please enter your firstname.";
//     }

//     if (!input["lname"]) {
//       isValid = false;
//       errors["lname"] = "Please enter your surname.";
//     }

//     if (!input["teleph"]) {
//       isValid = false;
//       errors["teleph"] = "Please enter your mobile number.";
//     }

//     if (!input["email"]) {
//       isValid = false;
//       errors["email"] = "Please enter your email Address.";
//     }

//     if (typeof input["email"] !== "undefined") {
//       var pattern = new RegExp(
//         /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
//       );
//       if (!pattern.test(input["email"])) {
//         isValid = false;
//         errors["email"] = "Please enter valid email address.";
//       }
//     }

//     if (!input["reason"]) {
//       isValid = false;
//       errors["reason"] = "Please enter your reason.";
//     }

//     this.setState({
//       errors: errors,
//     });
//     return isValid;
//   }

//   sendEmail = (e) => {
//     const API_PATH = this.getEmailSenderApiPath();
//     //let input = this.state.input;
//     e.preventDefault();
//     axios({
//       method: "post",
//       url: `${API_PATH}`,
//       data: this.state.input,
//       mailSentAkwabaTech: true,
//     })
//       .then((result) => {
//         this.setState({
//           mailSentAkwabaTech: true,
//           //input["mailSentAkwabaTech"] = "true";
//         });
//         console.log(result);
//         console.log(this.state);
//       })
//       .catch(function (error) {
//         //this.setState({ error: error.message })
//         console.log(error);
//       });
//     // .catch(error => this.setState({ error: error.message }));
//   };

//   render() {
//     const { t } = this.props;
//     if (this.state.isRegistered) {
//       return <Redirect to={{ pathname: "/login" }} />;
//     }
//     return (
//       <div className="content-akwaba">
//         <div>
//           <form action="#">
//             <div className="form-group">
//               <label>First Name:</label>
//               <input
//                 type="text"
//                 name="fname"
//                 value={this.state.input.fname}
//                 onChange={this.handleChange}
//                 placeholder="Enter name"
//                 id="fname"
//               />
//               <div className="text-danger">{this.state.errors.fname}</div>
//             </div>

//             <div className="form-group">
//               <label>Last Name:</label>
//               <input
//                 type="text"
//                 name="lname"
//                 value={this.state.input.lname}
//                 onChange={this.handleChange}
//                 placeholder="Enter surname"
//                 id="lname"
//               />
//               <div className="text-danger">{this.state.errors.lname}</div>
//             </div>

//             <div className="form-group">
//               <label>Email Address:</label>
//               <input
//                 type="text"
//                 name="email"
//                 value={this.state.input.email}
//                 onChange={this.handleChange}
//                 placeholder="Enter email"
//                 id="email"
//               />
//               <div className="text-danger">{this.state.errors.email}</div>
//             </div>

//             <div className="form-group">
//               <label>Mobile teleph:</label>
//               <input
//                 type="text"
//                 name="teleph"
//                 value={this.state.input.teleph}
//                 onChange={this.handleChange}
//                 placeholder="Enter mobile number"
//                 id="teleph"
//               />
//               <div className="text-danger">{this.state.errors.teleph}</div>
//             </div>

//             <div className="form-group">
//               <label>Message:</label>
//               <input
//                 type="textarea"
//                 name="reason"
//                 value={this.state.input.reason}
//                 onChange={this.handleChange}
//                 placeholder="Enter message"
//                 id="reason"
//               />
//               <div className="text-danger">{this.state.errors.reason}</div>
//             </div>

//             <input
//               className="btn btn-primary"
//               type="submit"
//               onClick={(e) => this.execute(e)}
//               value={t("pages.contact.text.submit")}
//             />
//             <div>
//               {this.state.mailSentAkwabaTech && (
//                 <div>
//                   {t("pages.contact.text.thankyou1")} <br />
//                   {t("pages.contact.text.thankyou2")}
//                   <br />
//                   {t("pages.contact.text.thankyou3")}{" "}
//                 </div>
//               )}
//             </div>
//           </form>
//         </div>
//       </div>
//     );
//   }
// }

// export default withTranslation()(Contact);





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

