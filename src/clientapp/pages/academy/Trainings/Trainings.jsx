import React, { Component } from "react";
import {NavLink, HashRouter } from "react-router-dom";
import { withTranslation  } from "react-i18next";

class Trainings extends Component {
  render() {
    const { t } = this.props;
    return (      
      <div>  
       <HashRouter>          
          <ul className ="akwaba-container-items-adminpage">      
            <li>
             <button><NavLink to="/businesstrainings"><span>{t("navbar.businesstrainings")}</span></NavLink></button> 
            </li> 
           <li>
           <button><NavLink to="/softwaredevtrainings"><span>{t("navbar.softwaredevtrainings")}</span></NavLink></button> 
            </li> 
           
            </ul>           
          </HashRouter> 
      </div>
    );
  }
}
 
export default withTranslation()(Trainings);