import React, { Component } from "react";
//import akwabagroup1 from "../../img/akwabagroup1.PNG";
import { withTranslation  } from "react-i18next";

class MarveltechSolutionTile extends Component {
  render() {
    const { t } = this.props;
    return (
      <div className="akwaba-tiles">
        <p>{t("pages.tiles.solutions.text.content")}</p>
       
      </div>
    );
  }
}

export default withTranslation() (MarveltechSolutionTile);
