
import React, { Component } from "react";
import axios from "axios";
import { withTranslation } from "react-i18next";
import { Redirect } from "react-router";
import ConfigData from "../../config.json";
import { useState, useEffect } from "react";
import DataTable from './MessageDataTable';


class MessageAdminPage extends Component {

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
    let devenvironmt = ConfigData.ENVIRONMENT.DEV ;
    let manualenvironmt = ConfigData.ENVIRONMENT.MANUAL; 
    let liveenvironmt = ConfigData.ENVIRONMENT.LIVE ;
    let extension = ConfigData.PAGES_URL.RETRIEVECONTACTUSMESSAGES;
    let path = ConfigData.BASE_URL_LIVE + extension;
    if (manualenvironmt) {
      path = ConfigData.MANUAL_URL.RETRIEVECONTACTUSMESSAGES;
        
    }
    return path;
  };

  render() {
    const { t } = this.props;
    return (      
      <div>
      <table className="table table-striped table-info">
                        <thead className="thead-info">
                            <tr>
                                <td>Id</td>
                                <td>DateContacted</td>
                                <td>Title</td>
                                <td>FirstName</td>
                                <td>LastName</td>
                                <td>Email</td>
                                <td>Phone</td>
                                <td>Message</td>
                                <td>Response</td>
                                <td>Status</td>
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
 
export default withTranslation()(MessageAdminPage);