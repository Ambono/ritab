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
import BusinessTrainings from "./clientapp/pages/academy/Trainings/BusinessTrainings";
import SoftwareDevTrainings from "./clientapp/pages/academy/Trainings/SoftwareDevTrainings";
// import AdminPage from "./clientapp/admin/AdminPage";
import Trainings from "./clientapp/pages/academy/Trainings/Trainings";
import Apprenticeship from "./clientapp/pages/academy/Apprenticeship/Apprenticeship";
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
          {/* <Route path="/myadmin" component={MyAdmin} /> */}
          <Route path="/loginscreen" component={Loginscreen} />
          <Route path="/login" component={Login} />
          <Route path="/contact" component={Contact} />
          <Route path="/mymessages" component={RetrieveMyMessages} />
          <Route path="/Marveltechsolution" component={MarveltechSolution} />
          <Route path="/Marveltechconsulting" component={MarveltechConsulting} />
          <Route path="/Marveltechgaming" component={MarveltechGaming} />
          <Route path="/Marveltechtrade" component={MarveltechTrade} />
          <Route path="/Marveltechsystems" component={MarveltechSystems} />
          {/* <Route path="/Marveltechacademy" component={MarveltechAcademy} /> */}
          <Route path="/Marveltechservices" component={MarveltechServices} />
          <Route path="/Marveltechpartners" component={MarveltechPartners} />
          <Route path="/Marveltechsell" component={MarveltechSell} />
          <Route path="/Marveltechorder" component={MarveltechOrder} />
          <Route path="/Marveltechgadgets" component={MarveltechGadgets} />
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
