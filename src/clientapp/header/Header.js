import React, { Component } from "react";
import {NavLink, HashRouter } from "react-router-dom";
import { withTranslation  } from "react-i18next";

class Header extends Component {
  render() {
    const { t } = this.props;
    return (      
      <div>  
       <HashRouter>          
          <ul  className ="no-bullets-nav-palin">      
            <li>
              <NavLink to="/home"><span>{t("navbar.home")}</span></NavLink>
            </li>  
            <li>
              <NavLink to="/registersimple"><span>{t("navbar.register")}</span></NavLink>            
            </li>
            <li>
              <NavLink to="/login"><span>{t("navbar.login")}</span></NavLink>            
            </li>
            <li>
              <NavLink to="/logout"><span>{t("navbar.logout")}</span></NavLink>            
            </li>
            
            </ul>           
          </HashRouter> 
      </div>
    );
  }
}
 
export default withTranslation()(Header);