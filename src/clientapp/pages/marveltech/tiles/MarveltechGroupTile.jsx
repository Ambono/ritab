import React, { Component } from "react";
import { withTranslation  } from "react-i18next";

class MarveltechGroupTile extends Component {
  render() {
    const { t } = this.props;
    return (
      <div className="akwaba-group-tiles">
        <p>{t("pages.tiles.marveltechgroup.text.h1")}<br/> 
        <br/>{t("pages.tiles.marveltechgroup.text.content")} 
         </p>
      </div>
    );
  }
}

export default withTranslation() (MarveltechGroupTile);
