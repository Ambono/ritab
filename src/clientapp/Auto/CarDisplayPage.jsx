
// import React, { Component } from "react";
// import axios from "axios";
// import { withTranslation } from "react-i18next";
// import DataTable from './MessageDataTable';
// import GetApis from '../../clientapp/pages/GetApis'
// import CONFIG from '../../config.json';
// import Authservice2 from '../Authentication/AuthService2';
// import LoginStatus from '../Authentication/LoginStatus';

// class MessageAdminPage extends Component {

//   constructor(props) {
//     super(props);
//     this.state = { 
//       usersMessages: [],
//       loginstatus:false,
//      };
// }

// componentDidMount() {
 
//     axios.get(this.getApiPath())
//         .then(res => {
//             this.setState({ usersMessages: res.data }); 
//             this.setState({loginstatus: Authservice2().loginStatus});                   
//         })
//         .catch(function (error) {
//             console.log(error);
//         })
// }

// dataTable() {
//     return this.state.usersMessages.map((data, i) => {
//         return <DataTable obj={data} key={i} />;
//     });
// }


//   getApiPath = () => {    
//    // return GetApis().RETRIEVECONTACTUSMESSAGES;
//     return CONFIG.DIRECT_LIVE.RETRIEVEMYMESSAGES;
//   };

//   render() {
//     const { t } = this.props;   
//     return (
//       <div>
//         <LoginStatus/>     
//      {/* {this.loginstatus &&  <div> */}
//      <div>
//       <table className="table table-striped table-info">
//                         <thead className="thead-info">
//                             <tr>
//                                 <td>Id</td>
//                                 <td>DateContacted</td>
//                                 <td>Title</td>
//                                 <td>FirstName</td>
//                                 <td>LastName</td>
//                                 <td>Email</td>
//                                 <td>Phone</td>
//                                 <td>Message</td>
//                                 <td>Response</td>
//                                 <td>Status</td>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {this.dataTable()}
//                         </tbody>
//                     </table>       
//       </div>
//      {/* } */}
//       </div>
//     );
//   }
// }
 
// export default withTranslation()(MessageAdminPage);



import React, { Component } from "react";
import axios from "axios";
import { withTranslation } from "react-i18next";
import { Redirect } from "react-router";
import CONFIG from "../../config.json";
import { useState, useEffect } from "react";
import DataTable from './CarDataTable';
import GetApis from '../../clientapp/pages/GetApis';

class CarDisplayPage extends Component {

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
    return GetApis().RETRIEVECAR;
   // return CONFIG.DIRECT_LIVE.RETRIEVEMYMESSAGES;
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
                                <td><strong>Date created</strong></td>
                                <td><strong>Name</strong></td>
                                <td><strong>Mileage</strong></td>
                                <td><strong>Year</strong></td>
                                <td><strong>Make</strong></td>
                                <td><strong>Model</strong></td>
                                <td><strong>Type</strong></td>
                                <td><strong>Price</strong></td>
                                <td><strong>Description</strong></td>
                                <td><strong>Status</strong></td>
                                <td><strong>Comment</strong></td>
                               
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
 
export default withTranslation()(CarDisplayPage);
