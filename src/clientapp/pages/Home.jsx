import React, { Component } from "react";
import KoneautoMaster from "./marveltech/Koneautomaster";
import { withTranslation } from "react-i18next";
import LoadMoreCars from '../Auto/LoadMoreCars';
import CarDisplayPage from '../Auto/CarDisplayPage';
import AssetMaster from '../uploadimages/DisplayAssetPage_redundant';
import LoadMoreAssets from '../uploadimages/LoadMoreAssets';

class Home extends Component {
  render() {
    const { t } = this.props;
    return (
      <div className="content-akwaba" >
         {/* <AssetMaster/>  */}
         <LoadMoreAssets/>  
          {/* <LoadMoreCars/>          */}
        <p></p>
      </div>
    );
  }
}

export default withTranslation() (Home);
