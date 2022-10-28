import React, { Component } from "react";

import { withTranslation  } from "react-i18next";

class MarveltechConsultingTile extends Component {
  render() {
    const { t } = this.props;
    return (
      <div className="akwaba-tiles">
        <p>{t("pages.tiles.consulting.text.content")}</p>       
      </div>
    );
  }
}

export default withTranslation() (MarveltechConsultingTile);
