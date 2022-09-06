import React, { Component } from "react";
//import akwabagroup1 from "../../img/akwabagroup1.PNG";
import { withTranslation  } from "react-i18next";
class MarveltechGroupTile extends Component {
  render() {
    const { t } = this.props;
    return (
      <div className="akwaba-group-tiles">
        <p>{t("pages.tiles.akwabagroup.text.h1")}<br/> 
        <br/>{t("pages.tiles.akwabagroup.text.content")} 
         </p>
      </div>
    );
  }
}

export default withTranslation() (MarveltechGroupTile);
