// <?php
// include("../session/sessionmanager.php") ; 
// ?> 
// <!DOCTYPE html>
// <HTML>
// <HEAD>
//     <?php include("../head/header.php")?>
// <?php include("../head/header_angulars.php")?>
// <?php include("../head/header_css.php")?>
// <?php include("../head/header_searchenginescript.php")?>
// <?php include("../head/header_standardlibrary.php")?>
// <?php include("../head/header_jqueriesscript.php")?>
// <?php include("../head/header_standardlibrary.php")?>
// <?php include("../head/header_common.php")?>
// <TITLE>Gifter online</TITLE>
// </HEAD>
// <BODY>

    
   
//  <?php include("../navbars/navbar_sell.php")?>     
//   <div class="container col-md-10 col-md-offset-1" style ="border-radius:5px; margin-bottom:10px;">
 
//   <div ng-app="myappInsert">    
 
//  <form action="../insertsinDB/insertproductdetailsinDB.php" method="POST" enctype="multipart/form-data">
    
//  <div class="col-md-6 col-md-offset-3">
//  <table class="table"> 	 

//   <tr class="success">          
//  <div class="form-group">  
//  <td><label for="Gender">Gender:</label></td>   
//  <td>
// <select class="form-control" id="gender" placeholder="Enter Gender:" name="gender" required>

// </select>
//  </td> 
//  </div>
//  </tr> 
     	
// <tr class="success">		  
// <div class="form-group">    
//  <td>
//  <label for="Category">Category:</label></td>   
//  <td><select class="form-control" id="productcategory" name="productcategory">
// </select></td> 
//  </div>
//  </tr> 
//   </table>
          
//  </div><!--end div for form group col 6-->     
          
              
//  <div class="col-md-6 col-md-offset-3">
// 	       <table class="table"> 	     	
//          <tr class="success">		  
// 		 <div class="form-group">
//         <td><label for="countryorigin">Country origin:</label></td> 
  
//          <td><select class="form-control" id="country_origin" name="country_origin">   
//           </select></td> 
//           </div>
//          </tr> 
	
// 	  <tr class="success">		  
// 		 <div class="form-group">
//      <td><label for="countrydestin">Country destination:</label></td> 
  
//       <td><select class="form-control" id="country_destin" name="country_destin"> 
//       </select></td> 
//         </div>
//       </tr> 
	
// 	    <tr class="success">
// 	    <td> <label for="citydestination">City destination: </label> </td> 
// 	       <td> 
//           <div class="form-group">
//              <div class="input-group">
//                 <span class="input-group-addon"><span class="glyphicon glyphicon-plane"></span></span>
//                <input type="text" name="citydestin" class="form-control" placeholder="City destination" required />
//                 </div>
//            </div>
// 			  </td> 
// 	 	      </tr> 
		   
// 	      </table>
	  
// 	        <div class="form-group">
//              <hr />
//             </div>
	  
// 	      <div class="form-group">
//              <div class="input-group">
//                 <span class="input-group-addon"><span class="glyphicon glyphicon-envelope"></span></span>
//              <input type="text" name="sellerEmail" class="form-control" placeholder="Enter Email:(required)" required />
//                 </div>
//             </div>
	  
//             <div class="form-group">
//              <hr />
//             </div>
	  
// 	       <div class="form-group">
//              <div class="input-group">
//                 <span class="input-group-addon"><span class="glyphicon glyphicon-phone"></span></span>
//              <input type="text" name="sellerPhone" class="form-control" placeholder="Enter Telephone + extension:(optional)" />
//                 </div>
//             </div>
	 
// 	       <div class="form-group">
//              <hr />
//             </div>
	 
//              <div class="form-group">
//              <div class="input-group">
//                 <span class="input-group-addon"><span class="glyphicon glyphicon-comment"></span></span>
//              <input type="text" name="item_name" class="form-control" placeholder="Enter item Name:(required)" required />
//                 </div>
//             </div>
	
// 	       <div class="form-group">
//              <div class="input-group">
//                 <span class="input-group-addon"><span class="glyphicon glyphicon-comment"></span></span>
//              <input type="text" name="desc" class="form-control" placeholder="Enter Description:(required)" required />
//                 </div>
//             </div>
	  
	  
//             <div class="form-group">
//              <hr />
//             </div>
			
	  
// 	  	   <div class="form-group">
//              <div class="input-group">
//                 <span class="input-group-addon"><span class="glyphicon glyphicon-resize-vertical"></span></span>
//              <input type="text" name="size" class="form-control" placeholder="Enter Size:(optional)" />
//                 </div>
//             </div>
	  
	  
// 	        <div class="form-group">
//              <hr />
//             </div>
	  
// 	        <div class="form-group">
//              <div class="input-group">
//                 <span class="input-group-addon"><span class="glyphicon glyphicon-tint"></span></span>
//              <input type="text" name="colour" class="form-control" placeholder="Enter Colour:(optional)" />
//                 </div>
//             </div>
	  
// 	        <div class="form-group">
//              <hr />
//             </div>
	  
// 	         <div class="form-group">
//              <div class="input-group">
//                 <span class="input-group-addon"><span class="glyphicon glyphicon-check"></span></span>
//              <input type="text" name="prodcond" class="form-control" placeholder="Enter prod condition:(required)" required />
//                 </div>
//             </div>
	  
	  
// 	        <div class="form-group">
//              <hr />
//             </div>
   
	 
// 	        <div class="form-group">
//              <div class="input-group">
//                 <span class="input-group-addon"><span class="glyphicon glyphicon-picture">Primary image:</span></span>
//              <input type="file" name="myimage" class="form-control" placeholder="Primary image:" required />
//                 </div>
//             </div>
	 
// 	        <div class="form-group">
//              <hr />
//             </div>

	  
// 	        <div class="form-group">
//              <div class="input-group">
//                 <span class="input-group-addon"><span class="glyphicon glyphicon-picture">First Optional Image:</span></span>
//              <input type="file" name="firstoptionalimage" class="form-control" placeholder="First Optional Image:" />
//                 </div>
//             </div>
      
//             <div class="form-group">
//              <hr />
//             </div>
			
	  
// 	        <div class="form-group">
//              <div class="input-group">
//                 <span class="input-group-addon"><span class="glyphicon glyphicon-picture">Second Optional Image:</span></span>
//              <input type="file" name="secondoptionalimage" class="form-control" placeholder="Second Optional Image:"  />
//                 </div>
//             </div>

// 	       <div class="form-group">
//              <hr />
//             </div>
	
	  
// 	    <div class="form-group">
//              <hr />
//             </div>
	
     
     
//  <?php include("../common/calendar.php")?>
     
   	
// 	    <div class="form-group">
//              <div class="input-group">
//                 <span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span></span>
//              <input type="text"  id="datepickeravailfrom" name="datepickeravailfrom" class="form-control" placeholder="Available from: (yyyy-mm-dd)" required />
//                 </div>
//             </div>
	  
//         <div class="form-group">
//              <hr />
//             </div>
			
	  
// 	   <div class="form-group">
//              <div class="input-group">
//                 <span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span></span>
//              <input type="text" name="datepickeravailto" id="datepickeravailto" class="form-control" placeholder="Available until: (yyyy-mm-dd)" required />
//                 </div>
//             </div>
	  
// 		  <div class="form-group">
//                   <hr/>
//                  </div>

           
//      <script type="text/javascript">

// function transactionIntention() {
//     if (document.getElementById('sellCheck').checked) {
//      //   document.getElementById('sell_div').style.display = 'block';
//       //  document.getElementById('gift_div').style.display = 'none';
//         document.getElementById('swap_div').style.display = 'none';
//     }
//     else if (document.getElementById('swapCheck').checked) {
//       //  document.getElementById('gift_div').style.display = 'none';
//         document.getElementById('swap_div').style.display = 'block';
//         // document.getElementById('sell_div').style.display = 'none';
//     }
    
//    // else if (document.getElementById('giftCheck').checked) {
//        // document.getElementById('gift_div').style.display = 'block';
//         //document.getElementById('swap_div').style.display = 'none';
//        //  document.getElementById('sell_div').style.display = 'none';
//    // }
// }

// </script>


//  <div class="form-group">
//              <div class="radio"> 
               
//               <label> <input type="radio" onclick="javascript:transactionIntention();" name="itemaction" id="sellCheck" value="sell" checked="checked"  > Giveaway</label><br>
              
            
             
//             </div>
//     </div>
     
//             <div class="form-group">
//              <hr />
//             </div>
			
// 	  <div class="form-group">
//              <div class="input-group">
//                <label for="deliveryPlace">Collection place:</label>
//              <textarea cols="40" row="100" name="deliveryPlace" id="deliveryPlace" class="form-control" placeholder="Your collection place:(optional)"/></textarea>
//                 </div>
//             </div>
// 	       <div class="form-group">
//              <div class="input-group">
//                <label for="comment">Your note:</label>
//              <textarea cols="40" row="100" name="sellerNote" id="sellerNote" class="form-control" placeholder="Your note:(optional)"  /></textarea>
//                 </div>
//             </div>
// 	     <div class="form-group">
//              <hr />
//             </div>
//            <div class="form-group">
//              <button type="submit" class="btn btn-success" name="btnInsert">Submit</button>
//             </div>
// 	    <div class="form-group">
//              <hr />
//             </div>
//          </div>
//           </form>
//          </div> 
//   </div>

//        </BODY>
//   <?php include("../footerPages/footer_page.php")?>
//     </HTML>


///////////////////////////////////////////////////////////////////////////////////////////


            // gender countrydestin
            // size
            // colour
            // prodcond
            // <input type="file" name="myimage" class="form-control" placeholder="Primary image:" required />

            // <input type="file" name="firstoptionalimage" class="form-control" placeholder="First Optional Image:" />

            // <input type="file" name="secondoptionalimage" class="form-control" placeholder="Second Optional Image:"  />
            // <input type="text"  id="datepickeravailfrom" name="datepickeravailfrom" class="form-control" placeholder="Available from: (yyyy-mm-dd)" required />
            // <input type="text" name="datepickeravailto" id="datepickeravailto" class="form-control" placeholder="Available until: (yyyy-mm-dd)" required />
            // deliveryPlace" id="deliveryPlace" class="form-control" placeholder="Your collection place:(optional)"/></textarea>
            // <textarea cols="40" row="100" name="sellerNote" id="sellerNote" class="form-control" placeholder="Your note:(optional)"  /></textarea>








//https://www.itsolutionstuff.com/post/password-and-confirm-password-validation-in-reactexample.html

import { useTranslation } from 'react-i18next';
import { React,useState} from "react";
import axios from "axios";
import GetApis from '../pages/GetApis';
import Select from 'react-select';
import CONFIG from '../../config.json';
import Accordion from 'react-bootstrap/Accordion';
import Card from "react-bootstrap/Card";

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
  const [myimage, setImage] = useState('');
  const [firstoptionalimage, setOptionalImage1] = useState('');
  const [secondoptionalimage, setOptionalImage2] = useState('');
  const [datepickeravailfrom, setAvailfrom] = useState('');
  const [datepickeravailto, setavailto] = useState('');
  const [note, setNote] = useState('');
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
    //return GetApis().CONTACTUS;
    return CONFIG.DIRECT_LIVE.CONTACTUS;
  };


  const handleSubmit = event => {
    console.log('handleSubmit ran');
    event.preventDefault(); // 👈️ prevent page refresh
   const body ={fname, lname, title,
    note,category,country,city, contactEmail,contactPhone,
    itemName,description,size,state, colour, myimage, 
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

    if (!contactPhone) {
      isValid = false;
      setPhoneNumbererrormsg(<p>{t("pages.contact.text.phoneinvalidmsg")}</p>);
     }
    if (!contactEmail) {
      isValid = false;
      setEmailerrormsg(<p>{t("pages.contact.text.emailinvalidmsg")}</p>);
    }

    if (typeof email !== "undefined") {
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

        <div className="form-group">
        <label>{t("itemName, pages.contact.text.firstname")} </label>
        <input
          id="itemName"
          name="itemName"
          type="text"
          value={fname}
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
          value={fname}
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
        <label>{t("state, pages.contact.text.firstname")} </label>
        <input
          id="state"
          name="state"
          type="text"
          value={state}
          onChange={event => setState(event.target.value)}          
          placeholder={t("state, pages.contact.text.firstnameph")}
        />
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
    Upload info     
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="2">
      <Card.Body className="content-accordion">        
      
      <div className="form-group">
        <label>{t("myimage, pages.contact.text.firstname")} </label>
        <input
          id="myimage"
          name="myimage"
          type="file"
          value={myimage}
          onChange={event => setImage(event.target.value)}          
          placeholder={t("myimage, pages.contact.text.firstnameph")}
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
  </Card> 

  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="3">
   Availabilty    
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="3">
      <Card.Body className="content-accordion">  

      <div className="form-group">
        <label>{t("datepickeravailfrom, pages.contact.text.firstname")} </label>
        <input
          id="datepickeravailfrom"
          name="datepickeravailfrom"
          type="text"
          value={fname}
          onChange={event =>  setAvailfrom(event.target.value)}          
          placeholder={t("datepickeravailfrom, pages.contact.text.firstnameph")}
        />
          <div className="text-danger">{fnameerrormsg}</div>
        </div>

        <div className="form-group">
        <label>{t("datepickeravailto,  pages.contact.text.firstname")} </label>
        <input
          id="datepickeravailto"
          name="datepickeravailto"
          type="text"
          value={fname}
          onChange={event => setavailto(event.target.value)}          
          placeholder={t("datepickeravailto, pages.contact.text.firstnameph")}
        />
          <div className="text-danger">{fnameerrormsg}</div>
        </div>
       
        
        
        </Card.Body>
    </Accordion.Collapse>
  </Card> 


  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="4">
   Additional info    
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="4">
      <Card.Body className="content-accordion">
        
      <div className="form-group">
        <label>{t("pages.contact.text.subject")}</label>
        <textarea
          id="note"
          name="note"
          type="text"
          rows={10}
          value={note}          
          onChange={event => setNote(event.target.value)}
          placeholder={t("pages.contact.text.subjectph")}
        />
          <div className="text-danger">{reasonerrormsg}</div>      
       </div>
        
        </Card.Body>
    </Accordion.Collapse>
  </Card> 
</Accordion>

      
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

export default UploadAssets;



