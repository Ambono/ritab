
//https://www.itsolutionstuff.com/post/password-and-confirm-password-validation-in-reactexample.html

import { useTranslation } from 'react-i18next';
import { React,useState} from "react";
import axios from "axios";
import GetApis from '../../clientapp/pages/GetApis';
import Select from 'react-select';
import CONFIG from '../../config.json';



const InsertCar = () => {
  const [name, setName] = useState('');
  const [mileage, setMileage] = useState('');
  const [year, setYear] = useState('');
  const [type, setType] = useState('');
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');
  const [price, setPrice] = useState('');
  const [folderid, setFolderId] = useState('');
  const [comment, setComment] = useState('');
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
    return GetApis().CREATECAR;
    //return CONFIG.DIRECT_LIVE.CONTACTUS;
  };

  const handleSubmit = event => {
    console.log('handleSubmit ran');
    event.preventDefault(); // 👈️ prevent page refresh
   const body ={name, mileage, year, type, make, model, price, description, status, comment, folderid}; 
    
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
            setName('');
            setMileage('');
            setYear('');
            setType('');
            setMake('');
            setModel('');
            setPrice('');
            setFolderId('');
            setDescription('');
            setStatus('');
            setComment('');          
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
    if (!name) {
      isValid = false;
      setTitleerrormsg(<p>{t("pages.contact.text.titleinvalidmsg")}</p>);
    }
    
    if (!model) {
      isValid = false;
      setFirstNameerrormsg(<p>{t("pages.contact.text.firstnameinvalidmsg")}</p>);
    }

    if (!make) {
      isValid = false;
      setLastNameerrormsg(<p>{t("pages.contact.text.lastnameinvalidmsg")}</p>);
    }

    if (!type) {
      isValid = false;
      setPhoneNumbererrormsg(<p>{t("pages.contact.text.phoneinvalidmsg")}</p>);
     }
    // if (!email) {
    //   isValid = false;
    //   setEmailerrormsg(<p>{t("pages.contact.text.emailinvalidmsg")}</p>);
    // }

    // if (typeof email !== "undefined") {
    //   var pattern = new RegExp(
    //     /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
    //   );
    //   if (!pattern.test(email)) {
    //     isValid = false;
    //     setEmailerrormsg(<p>{t("pages.contact.text.emailpatterninvalidmsg")}</p>);
    //   }
    // }
    
    if (!year) {
      isValid = false;
      setReasonerrormsg(<p>{t("pages.contact.text.subjectinvalidmsg")}</p>);
    }   
    if (!price) {
        isValid = false;
        setReasonerrormsg(<p>{t("pages.contact.text.subjectinvalidmsg")}</p>);
      }    
      
    if (!description) {
        isValid = false;
        setReasonerrormsg(<p>{t("pages.contact.text.subjectinvalidmsg")}</p>);
      }
         
    if (!status) {
        isValid = false;
        setReasonerrormsg(<p>{t("pages.contact.text.subjectinvalidmsg")}</p>);
      }    
    

         
    if (!comment) {
        isValid = false;
        setReasonerrormsg(<p>{t("pages.contact.text.subjectinvalidmsg")}</p>);
      }    
     
    if (!folderid) {
        isValid = false;
        setReasonerrormsg(<p>{t("pages.contact.text.subjectinvalidmsg")}</p>);
      } 

      if (!mileage) {
        isValid = false;
        setReasonerrormsg(<p>{t("pages.contact.text.subjectinvalidmsg")}</p>);
      } 
  };
  
  return (
    <div  className="content-akwaba">
      <form action="#">
        <div><p>{t("pages.contact.text.header1")}</p></div>
      {/* <div className="form-group">
        <label>{t("pages.contact.text.title")} </label>
             <select name= "title" id="tile" value={title}  onChange={event => setTitle(event.target.value)} >
                <option value="">{t("pages.contact.default")}</option>
                <option value={t("pages.contact.sir")}>{t("pages.contact.sir")}</option>
                <option value={t("pages.contact.madam")}>{t("pages.contact.madam")}</option>
                <option value={t("pages.contact.unspecified")}>{t("pages.contact.unspecified")}</option>  
                <option value={t("pages.contact.other")}>{t("pages.contact.other")}</option>                
              </select>
          <div className="text-danger">{titleerrormsg}</div>
        </div> */}

        <div className="form-group">
        <label>{t("pages.contact.text.firstname")} </label>
        <input
          id="car_name"
          name="car_name"
          type="text"
          value={name}
          onChange={event => setName(event.target.value)}          
          placeholder={t("pages.contact.text.firstnameph")}
        />
          <div className="text-danger">{fnameerrormsg}</div>
        </div>

        <div className="form-group">
         <label>{t("pages.contact.text.lastname")}</label>
        <input
          id="milage"
          name="milage"
          type="text"
          value={mileage}
          onChange={event => setMileage(event.target.value)}
          placeholder={t("pages.contact.text.lastnameph")}
        />
          <div className="text-danger">{lnameerrormsg}</div>
        </div>

        <div className="form-group">
        <label>{t("pages.contact.text.email")}</label>
        <input
          id="year"
          name="year"
          type="text"
          value={year}
          onChange={event => setYear(event.target.value)}
          placeholder={t("pages.contact.text.emailph")}
        />
          <div className="text-danger">{emailerrormsg}</div>
      </div>

      <div className="form-group">
              <label>{t("pages.contact.text.phone")}</label>
         <input
          id="type"
          name="type"
          type="text"
          onChange={event => setType(event.target.value)}
          placeholder={t("pages.contact.text.phoneph")}
          value={type}
        />
          <div className="text-danger">{phonenumbererrormsg}</div>
        </div>

        <div className="form-group">
        <label>{t("pages.contact.text.subject")}</label>
        <input
          id="make"
          name="make"
          type="text"
          value={make}          
          onChange={event => setMake(event.target.value)}
          placeholder={t("pages.contact.text.subjectph")}
        />
          <div className="text-danger">{reasonerrormsg}</div>      
       </div>

       <div className="form-group">
        <label>{t("pages.contact.text.subject")}</label>
        <input
          id="status"
          name="status"
          type="text"
          value={status}          
          onChange={event => setStatus(event.target.value)}
          placeholder={t("pages.contact.text.subjectph")}
        />
          <div className="text-danger">{reasonerrormsg}</div>      
       </div>
       <div className="form-group">
        <label>{t("pages.contact.text.subject")}</label>
        <input
          id="model"
          name="model"
          type="text"
          value={model}          
          onChange={event => setModel(event.target.value)}
          placeholder={t("pages.contact.text.subjectph")}
        />
          <div className="text-danger">{reasonerrormsg}</div>      
       </div>
       {/* <div className="form-group">
        <label>{t("pages.contact.text.subject")}</label>
        <textarea
          id="model"
          name="model"
          type="text"
          value={model}          
          onChange={event => setReason(event.target.value)}
          placeholder={t("pages.contact.text.subjectph")}
        /> 
          <div className="text-danger">{reasonerrormsg}</div>      
       </div>*/}
       <div className="form-group">
        <label>{t("pages.contact.text.subject")}</label>
        <input
          id="price"
          name="price"
          type="text"
          value={price}          
          onChange={event => setPrice(event.target.value)}
          placeholder={t("pages.contact.text.subjectph")}
        />
          <div className="text-danger">{reasonerrormsg}</div>      
       </div>
       <div className="form-group">
        <label>{t("pages.contact.text.subject")}</label>
        <input
          id="folderid"
          name="folderid"
          type="text"
          value={folderid}          
          onChange={event => setFolderId(event.target.value)}
          placeholder={t("pages.contact.text.subjectph")}
        />
          <div className="text-danger">{reasonerrormsg}</div>      
       </div>
       <div className="form-group">
        <label>{t("pages.contact.text.subject")}</label>
        <textarea
          id="comment"
          name="comment"
          type="text"
          rows={10}
          value={comment}          
          onChange={event => setComment(event.target.value)}
          placeholder={t("pages.contact.text.subjectph")}
        />
          <div className="text-danger">{reasonerrormsg}</div>      
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

export default InsertCar;

