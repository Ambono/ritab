import React, { Component } from "react";
import { withTranslation  } from "react-i18next";

class LoginStatus extends Component { 
    constructor(props){
      super(props);
      this.state = {
        loginstatus: this.props.loginstatus
      }
  }
  
    render() {
    const userIsLoggedIn = this.props.loginstatus==='in'? true:false;
      console.log('loggin status loginstatus : ', userIsLoggedIn)
      const { t } = this.props;

        return (
            <div> 
               { this.props.loginstatus}
             </div>
          )}
        }
   
  export default withTranslation()(LoginStatus);