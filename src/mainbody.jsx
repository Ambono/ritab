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
import MarveltechSolution from "./clientapp/pages/marveltech/MarveltechSolution";
import MarveltechGaming from "./clientapp/pages/marveltech/MarveltechGaming";
import MarveltechTrade from "./clientapp/pages/marveltech/MarveltechTrade";
import MarveltechSystems from "./clientapp/pages/marveltech/MarveltechSystems";
import MarveltechConsulting from "./clientapp/pages/marveltech/MarveltechConsulting";
import MarveltechServices from "./clientapp/pages/marveltech/MarveltechServices";
import MarveltechPartners from "./clientapp/pages/marveltech/MarveltechPartners";
import MarveltechSell from "./clientapp/pages/marveltech/tradepages/MarveltechSell";
import MarveltechOrder from "./clientapp/pages/marveltech/tradepages/MarveltechOrder";
import MarveltechGadgets from "./clientapp/pages/marveltech/tradepages/MarveltechGadgets";
import BusinessTrainings from "./clientapp/academy/Trainings/BusinessTrainings";
import SoftwareDevTrainings from "./clientapp/academy/Trainings/SoftwareDevTrainings";
import MyAdmin from "./clientapp/admin/MyAdminPage";
import MyAdminTemp from "./clientapp/admin/MyAdminPageTemp";
import Trainings from "./clientapp/academy/Trainings/Trainings";
import Apprenticeship from "./clientapp/academy/Apprenticeship/Apprenticeship";
import Logout from "./clientapp/registerlogin/Logout";
import Authservice from "./clientapp/Authentication/AuthService_Delete";
import Authservice2 from "./clientapp/Authentication/AuthService";
import Onboardingtests from "./clientapp/academy/Apprenticeship/Onboardingtests";
import Partnerservice from "./clientapp/partners/Partnerservice";
import UsefullLinks from "./clientapp/admin/UsefullLinks";
import LoadMoreCars from "./clientapp/Auto/LoadMoreCars";
import InsertCar from "./clientapp/Auto/InsertCar";
import Car1 from "./clientapp/Auto/carpages/Car1";
import Car2 from "./clientapp/Auto/carpages/Car2";
import Car3 from "./clientapp/Auto/carpages/Car3";
import Car4 from "./clientapp/Auto/carpages/Car4";
import Car5 from "./clientapp/Auto/carpages/Car5";
import ThankUploadeded from "./clientapp/uploadimages/ThankyouAfterUploaded";
// import Car6 from "./clientapp/Auto/carpages/Car6";

import UploadAssets from "./clientapp/uploadimages/UploadAssets";

class Main extends Component {
  render() {
    return (
      <div>
        <HashRouter>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/insertcar" component={InsertCar} />

          <Route path="/car1" component={Car1} />
          <Route path="/car2" component={Car2} />
          <Route path="/car3" component={Car3} />
          <Route path="/car4" component={Car4} />
          <Route path="/car5" component={Car5} />
          <Route path="/thankuploadeded" component={ThankUploadeded} />

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
          <Route path="/marveltechsolution" component={MarveltechSolution} />
          <Route path="/marveltechconsulting" component={MarveltechConsulting} />
          <Route path="/marveltechgaming" component={MarveltechGaming} />
          <Route path="/marveltechtrade" component={MarveltechTrade} />
          <Route path="/marveltechsystems" component={MarveltechSystems} />
          <Route path="/marveltechservices" component={MarveltechServices} />
          <Route path="/marveltechpartners" component={MarveltechPartners} />
          <Route path="/marveltechsell" component={MarveltechSell} />
          <Route path="/marveltechorder" component={MarveltechOrder} />
          <Route path="/marveltechgadgets" component={MarveltechGadgets} />
          <Route path="/businesstrainings" component={BusinessTrainings} />
          <Route path="/softwaredevtrainings" component={SoftwareDevTrainings} />
          <Route path="/messageadmin" component={MessageMyAdmin} />
          <Route path="/trainings" component={Trainings} />
          <Route path="/apprenticeship" component={Apprenticeship} />
          <Route path="/onboardingtests" component={Onboardingtests} />
          <Route path="/usefulllinks" component={UsefullLinks} />
          <Route path="/partnerservice" component={Partnerservice} />
          <Route path="/logout" component={Logout} />
          <Route path="/authservice" component={Authservice} />
          <Route path="/authservice2" component={Authservice2} />
          <Route path="/loadmorecars" component={LoadMoreCars} />
          <Route path="/uploadassets" component={UploadAssets} />

          <Route />
        </HashRouter>
      </div>
    );
  }
}

export default withTranslation()(Main);
