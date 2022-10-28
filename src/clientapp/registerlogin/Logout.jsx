import React, { Component } from "react";
import axios from "axios";
import { withTranslation } from "react-i18next";
import { Redirect } from "react-router";
import GetApis from '../pages/GetApis';
import CONFIG from '../../config.json';

class Logout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      canLogout: false,
    };
  }

  execute = (event) => {
   // event.preventDefault();
    this.handleFormSubmit();
  };

  getApiPath = () => {   
   //return  CONFIG.DIRECT_LIVE.LOGOUT;
    return GetApis().LOGOUT;
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
          console.log("REDIRECTION avec status => ", result.status);
          this.setState({ canLogout: true });
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
