import React, { Component } from "react";
import { withTranslation  } from "react-i18next";

class MarveltechSystemsTile extends Component {
  render() {
    const { t } = this.props;
    return (
      <div className="akwaba-tiles">
        <p>{t("pages.tiles.systems.text.content")}</p>       
      </div>
    );
  }
}

export default withTranslation() (MarveltechSystemsTile);
