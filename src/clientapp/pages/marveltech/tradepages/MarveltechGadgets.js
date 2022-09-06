import React, { Component } from "react";
// import '../../StyleSheet.css';
import { withTranslation } from "react-i18next";
import axios from "axios";
//import ImageUploading from "react-images-uploading";

class MarveltechGadgets extends Component {
  constructor(props) {
    super(props);   
    this.state = {
      fname: "",
      lname: "",
      email: "",
      number: "",
      article:"",
      response1:"",
      response2:"",      
      // Initially, no file is selected 
      selectedFile: null,     
      mailSent: false,
      error: null
    };
  }

  onFileChange = event => { 
     
    // Update the state 
    this.setState({ selectedFile: event.target.files[0] });    
  }; 
   
  onFileUpload = () => { 
     
    // Create an object of formData 
    const formData = new FormData(); 
   
    // Update the formData object 
    formData.append( 
      "myFile", 
      this.state.selectedFile, 
      this.state.selectedFile.name 
    ); 
   
    // Details of the uploaded file 
    console.log(this.state.selectedFile);    
  }; 


  handleFormSubmit = e => {
    const API_PATH =
      "http://localhost:50/RetaliateServerSide/api/pages/Retaliate.php";
    e.preventDefault();
    axios({     
      method: "post",
      url: `${API_PATH}`,
      headers: {
       "Content-Type": "application/json" ,
       "Access-Control-Allow-Origin":"*",},
       WithCredentials: true,
      data: this.state
    })
      .then(result => {
        this.setState({
          mailSent: result.data.sent
        });
        console.log(result);
        //console.log(this.state);
      })
      .catch(function(error) {
       //this.setState({ error: error.message })
        console.log(error);
      });
     // .catch(error => this.setState({ error: error.message }));
  };
   
  render() {   
    return (
      <div className="content-akwaba">
       <div>  
        <form action="#" >
        <div className="form-group">
            <label>First Name</label>
            <input
              type="text"
              id="fname"
              name="fname"
              placeholder="Your name.."
              value={this.state.fname}
              onChange={e => this.setState({ fname: e.target.value })}
            />
            </div>
         
            <div className="form-group">
            <label>Last Name</label>
            <input
              type="text"
              id="lname"
              name="lname"
              placeholder="Your last name.."
              value={this.state.lname}
              onChange={e => this.setState({ lname: e.target.value })}
            />
           </div>
          
           <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your email"
              value={this.state.email}
              onChange={e => this.setState({ email: e.target.value })}
            />
           </div>

           <div className="form-group">
           <label>Mobile phone</label>
            <input
              type="text"
              id="number"
              name="number"
              placeholder="Your phone"
              onChange={e => this.setState({ number: e.target.value })}
              value={this.state.number}
            />
           </div>
          
           <div className="form-group">
           <label>Offending article title</label>
            <input
              type="text"
              id="article"
              name="article"
              placeholder="title of article"
              onChange={e => this.setState({ article: e.target.value })}
              value={this.state.article}
            />
           </div>

           <div className="form-group">
            <label>Upload image</label>
            <input
              type="text"
              id="articleimage"
              name="articleimage"
              placeholder="article image"
              onChange={e => this.setState({ articleimage: e.target.value })}
              value={this.state.articleimage}
            />
           </div>

           <div className="form-group">
            <label>Upload image</label>
                <input type="file" onChange={this.onFileChange} /> 
                <button onClick={this.onFileUpload}> 
                  Upload! 
                </button> 
            </div>

            <div className="form-group">
            <label>Response</label>
            <input
              type="text"
              id="response1"
              name="response1"
              placeholder="Your response"
              onChange={e => this.setState({ response1: e.target.value })}
              value={this.state.response1}
            />
           </div>

           <div className="form-group">
            <label>More Response </label>
            <input
              type="text"
              id="response2"
              name="response2"
              placeholder="More response"
              onChange={e => this.setState({ response2: e.target.value })}
              value={this.state.response2}
            />
        </div>

        <div className="form-group">
            <input className="btn btn-primary"
              type="submit"
              onClick={e => this.handleFormSubmit(e)}
              value="Submit"
            />
            </div>

            <div>
              {this.state.mailSent && <div>Thank you for contacting us. orig</div>}
            </div>
          </form>
        </div>
      </div>    
    );
  }
}

export default withTranslation()(MarveltechGadgets);
