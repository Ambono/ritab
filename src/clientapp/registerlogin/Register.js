import React, { Component } from "react";
import axios from "axios";
//import '../../StyleSheet.css';
import { withTranslation } from "react-i18next";
import { Redirect } from "react-router";
import ConfigData from "../../config.json";

//https://www.itsolutionstuff.com/post/password-and-confirm-password-validation-in-reactexample.html

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: {},
      errors: {},
      isRegistered : false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let input = this.state.input;
    input[event.target.name] = event.target.value;

    this.setState({
      input,     
    });
  }

  execute = (event) => {
    event.preventDefault();
    this.handleSubmit(event);
  };

  getApiPath = () => {
    let environmt = ConfigData.ENVIRONMENT.DEV === "Yes" ? true : false;
    let extension = ConfigData.PAGES_URL.REGISTER;
    let path = ConfigData.BASE_URL_LIVE + extension;
    if (environmt) {
      path =
        ConfigData.BASE_URL_LOCAL.XAMPP +
        ConfigData.BASE_URL_LOCAL.PATH_REGISTERLOGIN +
        extension;
    }

    return path;
  };

  handleSubmit(event) {
    event.preventDefault();
    if (this.validate()) {
      console.log(this.state);

      const API_PATH = this.getApiPath();
      axios({
        method: "post",
        url: `${API_PATH}`,

        data: this.state.input,
      })
        .then((result) => {
          if (result.status === 200) {            
            let input = {};
            input["fname"] = "";
            input["usname"] = "";
            input["usurname"] = "";
            input["email"] = "";
            input["teleph"] = "";
            input["city"] = "";
            input["country"] = "";
            input["occupation"] = "";
            input["passwhint"] = "";
            input["passwhintansw"] = "";
            input["password"] = "";
            input["confirm_password"] = "";
            this.setState({ input: input });
            alert("You have registered");
            this.setState({ isRegistered: true });
          }
        })
        .catch(function (error) {
          //this.setState({ error: error.message })
          console.log(error);
        });
      // .catch(error => this.setState({ error: error.message }));
    } else {
      alert("Invalid Form");
      console.error("Invalid Form");
      return;
    }
  }

  validate() {
    let input = this.state.input;
    let errors = {};
    let isValid = true;

    if (!input["fname"]) {
      isValid = false;
      errors["fname"] = "Please enter your name.";
    }

    if (!input["usname"]) {
      isValid = false;
      errors["usname"] = "Please enter your user name.";
    }

    if (!input["usurname"]) {
      isValid = false;
      errors["usurname"] = "Please enter your user surname.";
    }

    if (!input["teleph"]) {
      isValid = false;
      errors["teleph"] = "Please enter your telephone.";
    }

    if (!input["city"]) {
      isValid = false;
      errors["city"] = "Please enter your city.";
    }

    if (!input["country"]) {
      isValid = false;
      errors["country"] = "Please enter your country.";
    }

    if (!input["occupation"]) {
      isValid = false;
      errors["occupation"] = "Please enter your occupation.";
    }

    if (!input["passwhint"]) {
      isValid = false;
      errors["passwhint"] = "Please enter your password hint.";
    }

    if (!input["passwhintansw"]) {
      isValid = false;
      errors["passwhintansw"] = "Please enter your password hint answer.";
    }

    if (!input["email"]) {
      isValid = false;
      errors["email"] = "Please enter your email Address.";
    }

    if (typeof input["email"] !== "undefined") {
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(input["email"])) {
        isValid = false;
        errors["email"] = "Please enter valid email address.";
      }
    }

    if (!input["password"]) {
      isValid = false;
      errors["password"] = "Please enter your password.";
    }

    if (!input["confirm_password"]) {
      isValid = false;
      errors["confirm_password"] = "Please enter your confirm password.";
    }

    if (
      typeof input["password"] !== "undefined" &&
      typeof input["confirm_password"] !== "undefined"
    ) {
      if (input["password"] !== input["confirm_password"]) {
        isValid = false;
        errors["password"] = "Passwords don't match.";
      }
    }
    this.setState({
      errors: errors,
    });
    return isValid;
  }

  render() {
    const { t } = this.props;
    if (this.state.isRegistered) {
      return <Redirect to={{ pathname: "/login" }} />;
    }
    return (
      <div className="content-akwaba">
        <div>
          <form action="#">
            <div class="form-group">
              <label>First Name:</label>
              <input
                type="text"
                name="fname"
                value={this.state.input.fname}
                onChange={this.handleChange}
                placeholder="Enter name"
                id="fname"
              />
              <div className="text-danger">{this.state.errors.fname}</div>
            </div>

            <div class="form-group">
              <label>Surname:</label>
              <input
                type="text"
                name="usurname"
                value={this.state.input.usurname}
                onChange={this.handleChange}
                placeholder="Enter surname"
                id="usurname"
              />
              <div className="text-danger">{this.state.errors.usurname}</div>
            </div>

            <div class="form-group">
              <label>User Name:</label>
              <input
                type="text"
                name="usname"
                value={this.state.input.usname}
                onChange={this.handleChange}
                placeholder="Enter user name"
                id="usname"
              />
              <div className="text-danger">{this.state.errors.usname}</div>
            </div>

            <div class="form-group">
              <label>Email Address:</label>
              <input
                type="text"
                name="email"
                value={this.state.input.email}
                onChange={this.handleChange}
                placeholder="Enter email"
                id="email"
              />
              <div className="text-danger">{this.state.errors.email}</div>
            </div>

            <div class="form-group">
              <label>Telephone:</label>
              <input
                type="text"
                name="teleph"
                value={this.state.input.teleph}
                onChange={this.handleChange}
                placeholder="Enter telephone"
                id="teleph"
              />
              <div className="text-danger">{this.state.errors.teleph}</div>
            </div>

            <div class="form-group">
              <label>City:</label>
              <input
                type="text"
                name="city"
                value={this.state.input.city}
                onChange={this.handleChange}
                placeholder="Enter city"
                id="city"
              />
              <div className="text-danger">{this.state.errors.city}</div>
            </div>

            <div class="form-group">
              <label>Country:</label>
              <input
                type="text"
                name="country"
                value={this.state.input.country}
                onChange={this.handleChange}
                placeholder="Enter country"
                id="country"
              />
              <div className="text-danger">{this.state.errors.country}</div>
            </div>

            <div class="form-group">
              <label>Occupation:</label>
              <input
                type="text"
                name="occupation"
                value={this.state.input.occupation}
                onChange={this.handleChange}
                placeholder="Enter occupation"
                id="occupation"
              />
              <div className="text-danger">{this.state.errors.occupation}</div>
            </div>

            <div class="form-group">
              <label>Password Hint:</label>
              <input
                type="text"
                name="passwhint"
                value={this.state.input.passwhint}
                onChange={this.handleChange}
                placeholder="Enter password hint"
                id="passwhint"
              />
              <div className="text-danger">{this.state.errors.passwhint}</div>
            </div>

            <div class="form-group">
              <label>Password hint answer:</label>
              <input
                type="text"
                name="passwhintansw"
                value={this.state.input.passwhintansw}
                onChange={this.handleChange}
                placeholder="Enter password hint answer"
                id="passwhintansw"
              />
              <div className="text-danger">{this.state.errors.passwhintansw}</div>
            </div>

            <div class="form-group">
              <label>Password:</label>
              <input
                type="password"
                name="password"
                value={this.state.input.password}
                onChange={this.handleChange}
                placeholder="Enter password"
                id="password"
              />
              <div className="text-danger">{this.state.errors.password}</div>
            </div>

            <div class="form-group">
              <label>Confirm Password:</label>
              <input
                type="password"
                name="confirm_password"
                value={this.state.input.confirm_password}
                onChange={this.handleChange}
                placeholder="Enter confirm password"
                id="confirm_password"
              />
              <div className="text-danger">
                {this.state.errors.confirm_password}
              </div>
            </div>

            <input
              className="btn btn-primary"
              type="submit"
              onClick={(e) => this.execute(e)}
              value={t("pages.contact.text.submit")}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default withTranslation()(Register);
