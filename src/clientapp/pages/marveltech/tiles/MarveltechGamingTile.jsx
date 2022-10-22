import React, { Component } from "react";
//import akwabagroup1 from "../../img/akwabagroup1.PNG";
import { withTranslation  } from "react-i18next";
class MarveltechGamingTile extends Component {
  render() {
    const { t } = this.props;
    return (
      <div className="akwaba-tiles">
        <p>{t("pages.tiles.gaming.text.content")}</p>        
      </div>
    );
  }
}

export default withTranslation() (MarveltechGamingTile);