import React, { Component } from "react";
import axios from "axios";
import { withTranslation } from "react-i18next";
import { Redirect } from "react-router";
import GetApis from '../pages/GetApis';


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
      isLoggedInAsPartner: false,
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
    return GetApis().LOGIN;
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
          // console.log('login data: ', result.data)
          if (result.data===1) {
            this.setState({ isLoggedInAsAdmin: true });
          } else if (result.data===2){
            this.setState({ isLoggedInAsTrainee: true });
          } else if (result.data===3) {
            this.setState({ isLoggedInAsPartner: true });
          } 
          else{
            this.setState({ isLoggedInAsCustomer: true });
          }
          this.setState({ email:'' });
          this.setState({ password:'' });        
        }
        else{
          return;
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
   else if (this.state.isLoggedInAsPartner) {
    return <Redirect to={{ pathname: "/partnerservice" }} />;
  }  
    else if (this.state.isLoggedInAsCustomer) {
      return <Redirect to={{ pathname: "/home" }} />;
    }
    return (
      <div className="content-akwaba">
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
