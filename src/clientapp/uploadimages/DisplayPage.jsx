import React, { Component } from "react";
import axios from "axios";
import { withTranslation } from "react-i18next";
import { Redirect } from "react-router";
import CONFIG from "../../config.json";
import { useState, useEffect } from "react";
import DataTable from './DisplayDataTable';
import GetApis from "../pages/GetApis";

class DisplayPage extends Component {

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
    return GetApis().DISPLAYASSET;
    //return CONFIG.DIRECT_LIVE.RETRIEVEMYMESSAGES;
  };  
  
  render() {
    const { t } = this.props;
    console.log("table data: ", this.dataTable())
    return (      
      <div>
     <table className="table table-striped table-info">
            
                        <thead className="thead-info">
                             <tr>
                                <td><strong>Id</strong></td>
                                <td><strong>Description</strong></td>
                                <td><strong>Name</strong></td>
                                <td><strong>SellerEmail</strong></td>
                                <td><strong>SellerPhone</strong></td>
                                <td><strong>Name</strong></td>
                                <td><strong>Size</strong></td>
                                <td><strong>Colour</strong></td>
                                <td><strong>Gender</strong></td>
                                <td><strong>ProdCondition</strong></td>
                                <td><strong>ProdImage</strong></td>
                                <td><strong>CountryOrig</strong></td>
                                <td><strong>CountryDestin</strong></td>
                                <td><strong>CityDestin</strong></td>
                                <td><strong>ProdImagePath</strong></td>
                                <td><strong>Availfrom</strong></td>
                                <td><strong>Availuntil</strong></td>
                                <td><strong>productcategory</strong></td>
                                <td><strong>Price</strong></td>
                                <td><strong>FirstOptionalImage</strong></td>
                                <td><strong>SecondOptionalImage</strong></td>
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
 
export default withTranslation()(MessageAdminPage);