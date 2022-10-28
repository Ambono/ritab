
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import DataTable from './MessageDataTable';
import GetApis from '../../clientapp/pages/GetApis'
import CONFIG from '../../config.json';
import Authservice2 from '../Authentication/AuthService2';
import LoginStatus from '../Authentication/LoginStatus';

//class MessageAdminPage extends Component {
  function MessageAdminPage(){

    const [usersMessages, setUsageMessage] = useState([]); 
    const loggedin =  Authservice2().loginStatus === 'in' ? true : false;
    console.log('loged in 1: ', loggedin);
    const { t } = useTranslation();
//   constructor(props) {
//     super(props);
//     this.state = { 
//       usersMessages: [],      
//       loggedin : false
//      };
// }

useEffect(() => {
  //this.setState({loggedin : Authservice2().loginStatus === 'in' ? true : false });  
    axios.get(getApiPath())
        .then(res => {
            setUsageMessage(res.data );                   
        })
        .catch(function (error) {
            console.log(error);
        })
})

const dataTable = ()=> {
    return usersMessages.map((data, i) => {
        return <DataTable obj={data} key={i} />;
    });
}

 const  getApiPath = () => {    
    return GetApis().RETRIEVECONTACTUSMESSAGES;
 // return CONFIG.DIRECT_LIVE.RETRIEVEMYMESSAGES;
  };
 // console.log('loged in 2: ', loggedin)
  // render() {
  //   const { t } = this.props;
    return (     
      <div>
        <LoginStatus/>     
     {loggedin &&  <div>
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
                            {dataTable()}
                        </tbody>
                    </table>       
      </div>
     }
      </div>
    );
  }
//}
 

export default (MessageAdminPage);
//export default withTranslation()(MessageAdminPage);