import React, { Component } from "react";
import axios from "axios";
import { withTranslation } from "react-i18next";
import { Redirect } from "react-router";
import CONFIG from "../../config.json";

import DataTable from './DisplayDataTable_redundant';
import GetApis from "../pages/GetApis";
import AssetOptionalPage from "./AssetOptionalPage";


class DisplayAssetPage extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      assetItems: []      
   };
  }

  componentDidMount() {
    axios.get(this.getApiPath())
      .then(res => {
        this.setState({ assetItems: res.data });
        console.log("response in displayAssetPage: ", res.data)       
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  dataTable() {
    return this.state.assetItems.map((data, i) => {
      console.log("data in displayAssetPage: ", data)
      return <DataTable obj={data} key={i} />;
    });
  }

 

  getApiPath = () => {
    //  return"http://localhost/dev/koneautoci/src/server/messages/retrievecontactmessages.php";   
    return GetApis().RETRIEVEASSET;
    //return CONFIG.DIRECT_LIVE.RETRIEVEMYMESSAGES;
  };

  render() {
    const { t } = this.props;
    return (
      <div>
        {this.dataTable()} 
      </div>
    );
  }
}

export default withTranslation()(DisplayAssetPage);