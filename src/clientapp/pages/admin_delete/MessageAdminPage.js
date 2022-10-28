
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
  if(ConfigData.ENVIRONMENT.DEV)
         return ConfigData.BASE_URL_LOCAL+ConfigData.PAGES_URL.RETRIEVEMYMESSAGES;  
  else if(ConfigData.ENVIRONMENT.LIVE)
        return ConfigData.BASE_URL_LIVE+ConfigData.PAGES_URL.RETRIEVEMYMESSAGES;
  else if(ConfigData.ENVIRONMENT.MANUAL)
       return ConfigData.MANUAL_URL.RETRIEVEMYMESSAGES;
   else return "no environment was specified";
};  
  
  render() {
    const { t } = this.props;
    console.log("table data: ", this.dataTable())
    return (      
      <div>
      <table className="table table-striped ">
                        <thead className="adminpageheader">
                            <tr>
                                <td><strong>Id</strong></td>
                                <td><strong>Date created</strong></td>
                                <td><strong>Gender</strong></td>
                                <td><strong>First Name</strong></td>
                                <td><strong>Last Name</strong></td>
                                <td><strong>Email</strong></td>
                                <td><strong>Phone Number</strong></td>
                                <td><strong>The Message</strong></td>
                                <td><strong>Response</strong></td>
                                <td><strong>Read status</strong></td>
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