
import React, { Component } from "react";
import axios from "axios";
import { withTranslation } from "react-i18next";
import { Redirect } from "react-router";
import ConfigData from "../../config.json";
import { useState, useEffect } from "react";
import DataTable from './DataTable';


class AdminPage extends Component {

  constructor(props) {
    super(props);
    this.state = { usersMessages: [] };
}

componentDidMount() {
    axios.get(this.getApiPath())
        .then(res => {
            this.setState({ usersMessages: res.data });           
        })
        .catch(function (error) {
            console.log(error);
        })
}

dataTable() {
    return this.state.usersMessages.map((data, i) => {
        return <DataTable obj={data} key={i} />;
    });
}

  getApiPath = () => {
    let environmt = ConfigData.ENVIRONMENT.DEV === "Yes" ? true : false;
    let extension = ConfigData.PAGES_URL.RETRIEVECONTACTUSMESSAGES;
    let path = ConfigData.BASE_URL_LIVE + extension;
    if (environmt) {
      path =
        ConfigData.BASE_URL_LOCAL.XAMPP +
        ConfigData.BASE_URL_LOCAL.PATH_MESSAGES +
        extension;
    }
    return path;
  };

  render() {
    const { t } = this.props;
    return (      
      <div>
      <table className="table table-striped table-dark">
                        <thead className="thead-dark">
                            <tr>
                                <td>Id</td>
                                <td>DateContacted</td>
                                <td>Name</td>
                                <td>Email</td>
                                <td>Phone</td>
                                <td>Reason</td>
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
 
export default withTranslation()(AdminPage);