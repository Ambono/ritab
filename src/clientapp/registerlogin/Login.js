import React, { Component } from "react";
import axios from "axios";
import { withTranslation } from "react-i18next";
import { NavLink, HashRouter } from "react-router-dom";
import { Button } from "reactstrap";
import { Row, Col } from "react-bootstrap";
import { Redirect } from "react-router";
import ConfigData from "../../config.json";

const validEmailRegex = RegExp(
  /^(([^<>()\\[\]\\.,;:\s@\\"]+(\.[^<>()\\[\]\\.,;:\s@\\"]+)*)|(\\".+\\"))@(([^<>()[\]\\.,;:\s@\\"]+\.)+[^<>()[\]\\.,;:\s@\\"]{2,})$/i
);

const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach(
    // if we have an error string set valid to false
    (val) => val.length > 0 && (valid = false)
  );
  return valid;
};

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      email: "",
      isLoggedInAsAdmin: false,
      isLoggedInAsTrainee: false,
      isLoggedInAsCustomer: false,
      mailSent: false,
      error: null,
      errors: { password: "", email: "" },
    };
  }

  validate = () => {
    if (!this.state.password || !this.state.email) {
      return false;
    }
    return true;
  };

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case "password":
        errors.password =
          value.length < 2 || value === "" ? "Please enter password" : "";
        break;
      case "email":
        errors.email =
          validEmailRegex.test(value) || value === ""
            ? ""
            : "Email is not valid!";
        break;
      default:
        break;
    }
    this.setState({ errors, [name]: value });
  };

  execute = (event) => {
    event.preventDefault();
    if (validateForm(this.state.errors) && this.validate()) {
      console.info("Valid Form");

      this.handleFormSubmit(event);
      // this.props.history.push('/adminpage');
    } else {
      console.error("Invalid Form");
      return;
    }
  };

  getApiPath = () => {
    let environmt = ConfigData.ENVIRONMENT.DEV === "Yes" ? true : false;
    let extension = ConfigData.PAGES_URL.LOGIN;
    let path = ConfigData.BASE_URL_LIVE + extension;
    if (environmt) {
      path =
        ConfigData.BASE_URL_LOCAL.XAMPP +
        ConfigData.BASE_URL_LOCAL.PATH_REGISTERLOGIN +
        extension;
    }
    return path;
  };

  handleFormSubmit = (e) => {
    const API_PATH = this.getApiPath();
    e.preventDefault();
    axios({
      method: "post",
      url: `${API_PATH}`,
      data: this.state,
    })
      .then((result) => {
        if (result.status === 200) {
          let resultemail = this.state.email;
          if (resultemail === ConfigData.CREDENTIALS.ADMIN_EMAIL) {
            this.setState({ isLoggedInAsAdmin: true });
          } else if (resultemail === ConfigData.CREDENTIALS.TRAINEE_EMAIL) {
            this.setState({ isLoggedInAsTrainee: true });
          } 
          else {
            this.setState({ isLoggedInAsCustomer: true });
          }
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  render() {
    const { t } = this.props;
    const { errors } = this.state;
    if (this.state.isLoggedInAsAdmin) {
      return <Redirect to={{ pathname: "/adminpage" }} />;
    }else if (this.state.isLoggedInAsTrainee) {
      return <Redirect to={{ pathname: "/trainings" }} />;
    } 
    else if (this.state.isLoggedInAsCustomer) {
      return <Redirect to={{ pathname: "/home" }} />;
    }
    return (
      <div className="content-akwaba">
        <div>
          <HashRouter>
            <Row>
              <Col md={{ span: 2, offset: 4 }}>
                <Button
                  color="secondary"
                  id="formations"
                  style={{ marginBottom: "3rem" }}
                >
                  <NavLink to="/trainings">Training</NavLink>
                </Button>
              </Col>
            </Row>
          </HashRouter>
        </div>
        
        <div>
          <form action="#">
            <label>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your email"
              value={this.state.email}
              onChange={(e) => {
                this.setState({ email: e.target.value });
                this.handleChange(e);
              }}
            />
            {errors.email.length > 0 && <div>{errors.email}</div>}
            <br />

            <label>Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={(e) => {
                this.setState({ password: e.target.value });
                this.handleChange(e);
              }}
            />
            {errors.password.length > 0 && <div>{errors.password}</div>}
            <br />
            <input
              type="submit"
              onClick={(e) => this.execute(e)}
              value={t("pages.contact.text.submit")}
            />
            <div>{/* <div>Thank you, submitted</div>               */}</div>
          </form>
        </div>
      </div>
    );
  }
}

export default withTranslation()(Login);
