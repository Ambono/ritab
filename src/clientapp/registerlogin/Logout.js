import React, { Component } from "react";
import axios from "axios";
import { withTranslation } from "react-i18next";
import { NavLink, HashRouter } from "react-router-dom";
import { Button } from "reactstrap";
import { Row, Col } from "react-bootstrap";
import { Redirect } from "react-router";
import ConfigData from "../../config.json";

class Logout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      canLogout: false,
    };
  }

  execute = () => {
    //event.preventDefault();
    this.handleFormSubmit();
  };

  getApiPath = () => {
    let environmt = ConfigData.ENVIRONMENT.DEV === "Yes" ? true : false;
    let extension = ConfigData.PAGES_URL.LOGOUT;
    let path = ConfigData.BASE_URL_LIVE + extension;
    if (environmt) {
      path =
        ConfigData.BASE_URL_LOCAL.XAMPP +
        ConfigData.BASE_URL_LOCAL.PATH_REGISTERLOGIN +
        extension;
    }
    return path;
  };

  handleFormSubmit = () => {
    const API_PATH = this.getApiPath();
    // const API_PATH = "http://groupakwabatech.com/Logout.php";
    //   const BASE_URL = "http://bfd3a758dd4a.ngrok.io/";
    //   const RELATIVE_URL =
    //     "akwabagroup/serverakwabagroup/RegisterLogin/LoginMaker.php";
    //   const API_PATH = BASE_URL + RELATIVE_URL;
    //  // e.preventDefault();
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
      return <Redirect to={{ pathname: "/home" }} />;
    }
    return <div></div>;
  }
}
export default withTranslation()(Logout);
