import React, { Component } from "react";
import { withTranslation } from "react-i18next";
import AssetMaster from '../uploadimages/DisplayAssetPage_redundant';
import LoadMoreAssets from '../uploadimages/LoadMoreAssets';

class Home extends Component {
  render() {
    const { t } = this.props;
    return (
      <div className="content-akwaba" >        
         <LoadMoreAssets/> 
        <p></p>
      </div>
    );
  }
}

export default withTranslation() (Home);
