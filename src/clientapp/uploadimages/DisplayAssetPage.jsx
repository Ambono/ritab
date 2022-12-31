import React, { Component } from "react";
import axios from "axios";
import { withTranslation } from "react-i18next";
import { Redirect } from "react-router";
import CONFIG from "../../config.json";
import { useState, useEffect } from "react";
import DataTable from './DisplayDataTable';
import GetApis from "../pages/GetApis";

class DisplayAssetPage extends Component {

  constructor(props) {
    super(props);
    this.state = { usersMessages: [] };
  }

  componentDidMount() {
    axios.get(this.getApiPath())
      .then(res => {
        this.setState({ usersMessages: res.data });
        console.log("response: ", res.data)
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  dataTable() {
    return this.state.usersMessages.map((data, i) => {
      console.log("data: ", data)
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
   // console.log("table data: ", this.dataTable())
    return (
      <div>
        <table className="table table-striped table-info">

          <thead className="thead-info">
            <tr>
              <td><strong>Image</strong></td>
              <td><strong>Name</strong></td>
              <td><strong>Note</strong></td>
            </tr>
          </thead>
          <tbody>
            {this.dataTable()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default withTranslation()(DisplayAssetPage);