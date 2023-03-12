import React, { Component } from "react";
import axios from "axios";
import { withTranslation } from "react-i18next";
import { Redirect } from "react-router";
import GetApis from '../pages/GetApis';
import CONFIG from '../../config.json';
import LocalStorageService from '../services/localStorageService';


class Logout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      canLogout: false,
      email: ""
    };
  }

  loginEmail = () =>{
     var savedEmail = LocalStorageService.Get("email");
    this.setState(this.email, savedEmail);
    return savedEmail;
  }; 
   
  isLoggin = this.loginEmail!="";

  execute = (event) => {
   // event.preventDefault();
    this.handleFormSubmit();
  };

  getApiPath = () => {   
   //return  CONFIG.DIRECT_LIVE.LOGOUT;
  //  return GetApis().LOGOUT;
  return "http://localhost/htdocdev/ritab/src/server/registerlogin/Logout.php"    
  };

  handleFormSubmit = () => {
    const API_PATH = this.getApiPath();    
    axios({
      method: "post",
      url: `${API_PATH}`,
      data: this.state,
    })
      .then((result) => {
        if (result.status === 200) {
          this.setState({ canLogout: true });
          localStorage.removeItem("email");
        //  LocalStorageService.Remove("email");
        }
      })
      .catch(function (error) {
        //this.setState({ error: error.message })
        console.log(error);
      });
    // .catch(error => this.setState({ error: error.message }));
  };

  componentDidMount() {
    this.execute();
  }

  render() {
    const { t } = this.props;
    const { errors } = this.state;
    if (this.state.canLogout) {
      console.log('this state: ', this.state.canLogout)
      return <Redirect to={{ pathname: "/home" }} />;
    }
    return <div></div>;
  }
}
export default withTranslation()(Logout);
