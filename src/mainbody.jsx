import React, { Component } from "react";
import { withTranslation } from "react-i18next";
import { Route, HashRouter } from "react-router-dom";
import Home from "./clientapp/pages/Home";
import Services from "./clientapp/pages/Services";
import Contact from "./clientapp/pages/messages/SendContactMessage";
import Menue from "./clientapp/pages/Menue";
import References from "./clientapp/pages/References";
import Booking from "./clientapp/pages/Booking";
import Register from "./clientapp/registerlogin/Register";
import RegisterSimple from "./clientapp/registerlogin/RegisterSimple";
import Loginscreen from "./clientapp/registerlogin/LoginScreen";
import Login from "./clientapp/registerlogin/Login";
import RetrieveMyMessages from "./clientapp/pages/messages/RetrieveMyMessages_Delete";
import MessageMyAdmin from "./clientapp/admin/MessageAdminPage";
import MyAdmin from "./clientapp/admin/MyAdminPage";
import MyAdminTemp from "./clientapp/admin/MyAdminPageTemp";
import Logout from "./clientapp/registerlogin/Logout";
import Authservice2 from "./clientapp/Authentication/AuthService";
import Partnerservice from "./clientapp/partners/Partnerservice";
import UsefullLinks from "./clientapp/admin/UsefullLinks";
import ThankUploaded from "./clientapp/uploadimages/ThankyouAfterUploaded";
import AssetMaster from "./clientapp/uploadimages/DisplayAssetPage_redundant";
import UploadAssets from "./clientapp/uploadimages/UploadTextInputs";
import AssetOptionals from "./clientapp/uploadimages/AssetOptionalPage";
import UploadVideo from "./clientapp/uploadimages/UploadVideo";

class Main extends Component {
  render() {
    return (
      <div>
        <HashRouter>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />         
          <Route path="/assetmaster" component={AssetMaster} />        
          <Route path="/thanksuploaded" component={ThankUploaded} />
          <Route path="/assetoptionals" component={AssetOptionals} />          
          <Route path="/services" component={Services} />
          <Route path="/menue" component={Menue} />
          <Route path="/reference" component={References} />
          <Route path="/booking" component={Booking} />
          <Route path="/register" component={Register} />
          <Route path="/registersimple" component={RegisterSimple} />
          <Route path="/adminpage" component={MyAdmin} />
          <Route path="/adminpagetemp" component={MyAdminTemp} />
          <Route path="/loginscreen" component={Loginscreen} />
          <Route path="/login" component={Login} />
          <Route path="/contact" component={Contact} />
          <Route path="/mymessages" component={RetrieveMyMessages} /> 
          <Route path="/messageadmin" component={MessageMyAdmin} />
          <Route path="/usefulllinks" component={UsefullLinks} />
          <Route path="/partnerservice" component={Partnerservice} />
          <Route path="/logout" component={Logout} />         
          <Route path="/authservice2" component={Authservice2} />         
          <Route path="/uploadassets" component={UploadAssets} />
          <Route path="/uploadvideos" component={UploadVideo} />
          
          <Route />
        </HashRouter>
      </div>
    );
  }
}

export default withTranslation()(Main);
