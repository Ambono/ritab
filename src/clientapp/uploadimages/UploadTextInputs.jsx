
//https://www.itsolutionstuff.com/post/password-and-confirm-password-validation-in-reactexample.html

import { useTranslation } from 'react-i18next';
import { React,useState} from "react";
import axios from "axios";
import GetApis from '../pages/GetApis';
import Select from 'react-select';
import CONFIG from '../../config.json';
import Accordion from 'react-bootstrap/Accordion';
import Card from "react-bootstrap/Card";
import DateTimePicker from 'react-datetime-picker';
import Uploader from './UploadPictures';

const UploadAssets = () => {
  const [fname, setFirstName] = useState('');
  const [lname, setLastName] = useState('');
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [itemName, setItemName] = useState('');
  const [description, setDescription] = useState('');
  const [size, setSize] = useState('');
  const [state, setState] = useState('');
  const [colour, setColour] = useState('');
  const [image, setImage] = useState('');
  const [firstoptionalimage, setOptionalImage1] = useState('');
  const [secondoptionalimage, setOptionalImage2] = useState('');
  const [datepickeravailfrom, setAvailfrom] = useState();
  const [datepickeravailto, setavailto] = useState();
  const [note, setNote] = useState('');
  const [messageSent, setMessageSent] = useState('');
  const [seesubmitbutton, setSeesubmitbutton] = useState(true);  
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
    return GetApis().UPLOADASSET;  
    //return "http://groupakwabatech.com/insertasset.php";
  };


  const handleSubmit = event => {
    console.log('handleSubmit ran');
    event.preventDefault(); // 👈️ prevent page refresh
   const body ={fname, lname, title,
    note,category,country,city, contactEmail,contactPhone,
    itemName,description,size,state, colour, image, 
    firstoptionalimage,  secondoptionalimage,  datepickeravailfrom, 
     datepickeravailto }; 
    
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
            setCategory('');
            setCountry('');
            setCity('');
            setContactEmail('');
            setContactPhone('');
            setItemName('');
            setDescription('');
            setSize('');
            setColour('');
            setImage('');
            setOptionalImage1('');
            setOptionalImage2('');
            setAvailfrom('');
            setavailto('');
            setState('');
            setNote('');         
            setFirstNameerrormsg('');
            setLastNameerrormsg('');
            setTitleerrormsg('');
            setEmailerrormsg('');
            setPhoneNumbererrormsg('');
            setReasonerrormsg('');
            setMessageSent(true);
            setSeesubmitbutton(false);
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

    if (!contactPhone) {
      isValid = false;
      setPhoneNumbererrormsg(<p>{t("pages.contact.text.phoneinvalidmsg")}</p>);
     }
    if (!contactEmail) {
      isValid = false;
      setEmailerrormsg(<p>{t("pages.contact.text.emailinvalidmsg")}</p>);
    }

    if (typeof contactEmail !== "undefined") {
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(contactEmail)) {
        isValid = false;
        setEmailerrormsg(<p>{t("pages.contact.text.emailpatterninvalidmsg")}</p>);
      }
    }

    
    if (typeof note !== "undefined") {
      var obscene = ["porn","fuck","nude","naked","pussy","dick","cum","ass","pornography", 
    "nue", "vagina"]
      var arrReason = note.toLowerCase().split(" ");
    // Iterate through each element in the
    // first array and if some of them 
    // include the elements in the second
    // array then return true
      var containsObscene = arrReason.some(item => obscene.includes(item))
    if ((!note) || containsObscene){
      isValid = false;
      setReasonerrormsg(<p>{t("pages.contact.text.subjectinvalidmsg")}</p>);
    }    
    return isValid;
  }
  };
  
  return (
    <div  className="content-akwaba">
      <form action="#">
        <div><p>{t("pages.contact.text.header1")}</p></div>
     


        <Accordion defaultActiveKey="0">  
    <Card>
    <Accordion.Toggle as={Card.Header} eventKey="0">
    Your personal info   
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="0">
      <Card.Body className="content-accordion" >
      <div className="form-group">
        <label>{t("pages.contact.text.title")} </label>
             <select name= "title" id="tile" value={title}  onChange={event => setTitle(event.target.value)} >
                <option value="">{t("pages.contact.default")}</option>
                <option value={t("pages.contact.sir")}>{t("pages.contact.sir")}</option>
                <option value={t("pages.contact.madam")}>{t("pages.contact.madam")}</option>
                <option value={t("pages.contact.unspecified")}>{t("pages.contact.unspecified")}</option>  
                <option value={t("pages.contact.other")}>{t("pages.contact.other")}</option>                
              </select>
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
          id="contactEmail"
          name="contactEmail"
          type="text"
          value={contactEmail}
          onChange={event => setContactEmail(event.target.value)}
          placeholder={t("pages.contact.text.emailph")}
        />
          <div className="text-danger">{emailerrormsg}</div>
      </div>

      <div className="form-group">
              <label>{t("pages.contact.text.phone")}</label>
         <input
          id="contactPhone"
          name="contactPhone"
          type="text"
          onChange={event => setContactPhone(event.target.value)}
          placeholder={t("pages.contact.text.phoneph")}
          value={contactPhone}
        />
          <div className="text-danger">{phonenumbererrormsg}</div>
        </div>
        
        </Card.Body>
    </Accordion.Collapse>
  </Card>


  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="1">
        Item info      
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="1">
      <Card.Body className="content-accordion">
        
      <div className="form-group">
        <label>{t("category pages.contact.text.firstname")} </label>
        <input
          id="category"
          name="category"
          type="text"
          value={category}
          onChange={event => setCategory(event.target.value)}          
          placeholder={t("category pages.contact.text.firstnameph")}
        />
          <div className="text-danger">{fnameerrormsg}</div>
        </div>


        <div className="form-group">
        <label>{t("itemName, pages.contact.text.firstname")} </label>
        <input
          id="itemName"
          name="itemName"
          type="text"
          value={itemName}
          onChange={event => setItemName(event.target.value)}          
          placeholder={t("itemName, pages.contact.text.firstnameph")}
        />
          <div className="text-danger">{fnameerrormsg}</div>
        </div>


        <div className="form-group">
        <label>{t(" description, pages.contact.text.firstname")} </label>
        <input
          id="description"
          name="description"
          type="text"
          value={description}
          onChange={event =>setDescription(event.target.value)}          
          placeholder={t(" description, pages.contact.text.firstnameph")}
        />
          <div className="text-danger">{fnameerrormsg}</div>
        </div>


        <div className="form-group">
        <label>{t("size, pages.contact.text.firstname")} </label>
        <input
          id="size"
          name="size"
          type="text"
          value={size}
          onChange={event => setSize(event.target.value)}          
          placeholder={t("size, pages.contact.text.firstnameph")}
        />
          <div className="text-danger">{fnameerrormsg}</div>
        </div>

        <div className="form-group">
        <label>{t("State, pages.contact.text.title")} </label>
             <select name= "State" id="state" value={state}  onChange={event => setState(event.target.value)} >
                <option value="">Choose state</option>
                <option value="new">New</option>
                <option value="secondHand">Second hand</option>
                <option value="classic">Classic</option>     
                <option value="vintage">Vintage</option>                                
              </select>
          <div className="text-danger">{fnameerrormsg}</div>
        </div>


        <div className="form-group">
        <label>{t("colour, pages.contact.text.firstname")} </label>
        <input
          id="colour"
          name="colour"
          type="text"
          value={colour}
          onChange={event =>  setColour(event.target.value)}          
          placeholder={t("colour, pages.contact.text.firstnameph")}
        />
          <div className="text-danger">{fnameerrormsg}</div>
        </div>        
        </Card.Body>
    </Accordion.Collapse>
  </Card>

  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="2">
       Delivery info    
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="2">
      <Card.Body className="content-accordion">
        
        <div className="form-group">
        <label>{t("country, pages.contact.text.firstname")} </label>
        <input
          id="country"
          name="country"
          type="text"
          value={country}
          onChange={event => setCountry(event.target.value)}          
          placeholder={t("country,  pages.contact.text.firstnameph")}
        />
          <div className="text-danger">{fnameerrormsg}</div>
        </div>

        <div className="form-group">
        <label>{t("city, pages.contact.text.firstname")} </label>
        <input
          id="city"
          name="city"
          type="text"
          value={city}
          onChange={event => setCity(event.target.value)}          
          placeholder={t("city, pages.contact.text.firstnameph")}
        />
          <div className="text-danger">{fnameerrormsg}</div>
        </div>
         
        </Card.Body>
    </Accordion.Collapse>
  </Card>

  {/* <Card>
    <Accordion.Toggle as={Card.Header} eventKey="3">
    Upload info     
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="3">
      <Card.Body className="content-accordion">        
      
      <div className="form-group">
        <label>{t("image choose image to upload, pages.contact.text.firstname")} </label>
        <input
          id="image"
          name="image"
          type="file"
          value={image}
          onChange={event => setImage(event.target.value)}          
          placeholder={t("image, pages.contact.text.firstnameph")}
        />
          <div className="text-danger">{fnameerrormsg}</div>
        </div>

        <div className="form-group">
        <label>{t("firstoptionalimage, pages.contact.text.firstname")} </label>
        <input
          id="firstoptionalimage"
          name="firstoptionalimage"
          type="file"
          value={firstoptionalimage}
          onChange={event => setOptionalImage1(event.target.value)}          
          placeholder={t("firstoptionalimage, pages.contact.text.firstnameph")}
        />
          <div className="text-danger">{fnameerrormsg}</div>
        </div>

        <div className="form-group">
        <label>{t("secondoptionalimage, pages.contact.text.firstname")} </label>
        <input
          id="secondoptionalimage"
          name="secondoptionalimage"
          type="file"
          value={secondoptionalimage}
          onChange={event => setOptionalImage2(event.target.value)}          
          placeholder={t("secondoptionalimage, pages.contact.text.firstnameph")}
        />
          <div className="text-danger">{fnameerrormsg}</div>
        </div>
        
        </Card.Body>
    </Accordion.Collapse>
  </Card>  */}

  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="3">
   Additional info    
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="3">
      <Card.Body className="content-accordion">
        
      <div className="form-group">
        <label>{t("pages.contact.text.subject")}</label>
        <textarea
          id="note"
          name="note"
          type="text"
          rows={15}
          value={note}          
          onChange={event => setNote(event.target.value)}
          placeholder={t("pages.contact.text.subjectph")}
        />
          <div className="text-danger">{reasonerrormsg}</div>      
       </div>
        
        </Card.Body>
    </Accordion.Collapse>
  </Card> 
{/*  
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="5">
 Uploader 
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="5">
      <Card.Body className="content-accordion">
  <Uploader/>
  </Card.Body>
    </Accordion.Collapse>
  </Card>  */}
</Accordion>

          {seesubmitbutton && (  <input
              className="btn btn-primary"
              type="submit"
              onClick={(e) =>  {handleSubmit(e)}}
              defaultValue={t("pages.contact.text.submit")}
              value="Save and continue"
            />
          )}
        <div>

        {clickedButtonButNotPosted && (
                <div>
                  {clickedNotPostedMessage} <br />                  
                </div>
                 )}

               {messageSent && (
                <div>
                <div>
                  Please now upload images for your asset
                  {/* {t("pages.contact.text.thankyou1")} <br />
                  {t("pages.contact.text.thankyou2")} <br />                 
                  {t("pages.contact.text.thankyou3")}{" "} */}
           
                </div>
                <div>
                <Uploader/>
                </div>
        
                </div>
              )}              
            
         </div>

      </form>
    </div>
  );
};

export default UploadAssets;



