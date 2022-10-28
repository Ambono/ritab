import React, { Component } from "react";
import { withTranslation  } from "react-i18next";

class MarveltechTradeTile extends Component {
  render() {
    const { t } = this.props;
    return (
      <div className="akwaba-tiles">
        <p>{t("pages.tiles.trade.text.content")}</p>
      </div>
    );
  }
}

export default withTranslation() (MarveltechTradeTile);
