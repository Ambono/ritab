import React, { Component } from "react";
import { withTranslation } from "react-i18next";
import { Route, HashRouter } from "react-router-dom";
import Home from "./clientapp/pages/Home";
import Services from "./clientapp/pages/Services";
import Contact from "./clientapp/pages/messages/Contact";
import Menue from "./clientapp/pages/Menue";
import References from "./clientapp/pages/References";
import Booking from "./clientapp/pages/Booking";
import Register from "./clientapp/registerlogin/Register";
import RegisterSimple from "./clientapp/registerlogin/RegisterSimple";
import Loginscreen from "./clientapp/registerlogin/LoginScreen";
import Login from "./clientapp/registerlogin/Login";
import RetrieveMyMessages from "./clientapp/pages/messages/RetrieveMyMessages";
import MessageMyAdmin from "./clientapp/admin/MessageAdminPage";
import MarveltechSolution from "./clientapp/pages/marveltech/MarveltechSolution";
import MarveltechGaming from "./clientapp/pages/marveltech/MarveltechGaming";
import MarveltechTrade from "./clientapp/pages/marveltech/MarveltechTrade";
import MarveltechSystems from "./clientapp/pages/marveltech/MarveltechSystems";
import MarveltechConsulting from "./clientapp/pages/marveltech/MarveltechConsulting";
import MarveltechServices from "./clientapp/pages/marveltech/MarveltechServices";
import MarveltechPartners from "./clientapp/pages/marveltech/MarveltechPartners";
// import MarveltechAcademy from "./clientapp/pages/marveltech/MarveltechAcademy";
import MarveltechSell from "./clientapp/pages/marveltech/tradepages/MarveltechSell";
import MarveltechOrder from "./clientapp/pages/marveltech/tradepages/MarveltechOrder";
import MarveltechGadgets from "./clientapp/pages/marveltech/tradepages/MarveltechGadgets";
import BusinessTrainings from "./clientapp/academy/Trainings/BusinessTrainings";
import SoftwareDevTrainings from "./clientapp/academy/Trainings/SoftwareDevTrainings";
import MyAdmin from "./clientapp/admin/MyAdminPage";
import Trainings from "./clientapp/academy/Trainings/Trainings";
import Apprenticeship from "./clientapp/academy/Apprenticeship/Apprenticeship";
import Logout from "./clientapp/registerlogin/Logout";

class Main extends Component {
  render() {
    return (
      <div>
        <HashRouter>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/menue" component={Menue} />
          <Route path="/reference" component={References} />
          <Route path="/booking" component={Booking} />
          <Route path="/register" component={Register} />
          <Route path="/registersimple" component={RegisterSimple} />
          <Route path="/adminpage" component={MyAdmin} />
          <Route path="/loginscreen" component={Loginscreen} />
          <Route path="/login" component={Login} />
          <Route path="/contact" component={Contact} />
          <Route path="/mymessages" component={RetrieveMyMessages} />
          <Route path="/marveltechsolution" component={MarveltechSolution} />
          <Route path="/marveltechconsulting" component={MarveltechConsulting} />
          <Route path="/marveltechgaming" component={MarveltechGaming} />
          <Route path="/marveltechtrade" component={MarveltechTrade} />
          <Route path="/marveltechsystems" component={MarveltechSystems} />
          {/* <Route path="/Marveltechacademy" component={MarveltechAcademy} /> */}
          <Route path="/marveltechservices" component={MarveltechServices} />
          <Route path="/marveltechpartners" component={MarveltechPartners} />
          <Route path="/marveltechsell" component={MarveltechSell} />
          <Route path="/marveltechorder" component={MarveltechOrder} />
          <Route path="/marveltechgadgets" component={MarveltechGadgets} />
          <Route path="/businesstrainings" component={BusinessTrainings} />
          <Route path="/softwaredevtrainings" component={SoftwareDevTrainings}/>
          <Route path="/messageadmin" component={MessageMyAdmin} />
          <Route path="/trainings" component={Trainings} /> 
          <Route path="/apprenticeship" component={Apprenticeship} />            
          <Route path="/logout" component={Logout} />          
        </HashRouter>
      </div>
    );
  }
}

export default withTranslation()(Main);
