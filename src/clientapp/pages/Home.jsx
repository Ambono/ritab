import React, { Component } from "react";
import KoneautoMaster from "./marveltech/Koneautomaster";
import { withTranslation } from "react-i18next";
import LoadMoreCars from '../Auto/LoadMoreCars';
import CarDisplayPage from '../Auto/CarDisplayPage';

class Home extends Component {
  render() {
    const { t } = this.props;
    return (
      <div className="content-akwaba" >
         <KoneautoMaster /> 
         {/* <LoadMoreCars/>
        <CarDisplayPage/>      */}
        <p></p>
      </div>
    );
  }
}

export default withTranslation() (Home);
