import React, { Component } from "react";
import MarvelTechGroup from "./marveltech/MarveltechGroup";
import { withTranslation } from "react-i18next";

class Home extends Component {
  render() {
    const { t } = this.props;
    return (
      <div className="content-akwaba" >

         <MarvelTechGroup />
       {/* <h2>
          {t("pages.home.text.header1")}
          <br />
        </h2>

        <p>{t("pages.home.text.paragraph1")}</p>

        <p>{t("pages.home.text.paragraph2")}</p>

        <p>{t("pages.home.text.paragraph3")}</p>

        <p>{t("pages.home.text.paragraph4")}</p> 
        <p>{t("pages.home.text.footer")}</p>*/}
      </div>
    );
  }
}

export default withTranslation() (Home);
