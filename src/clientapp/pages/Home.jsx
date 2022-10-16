import React, { Component } from "react";
import MarvelTechGroup from "./marveltech/MarveltechGroup";
import { withTranslation } from "react-i18next";

class Home extends Component {
  render() {
    const { t } = this.props;
    return (
      <div className="content-akwaba" >

         <MarvelTechGroup />      
      </div>
    );
  }
}

export default withTranslation() (Home);
