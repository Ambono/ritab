import React, { Suspense } from "react";
import i18n from "./services/i18n";
import { withTranslation } from "react-i18next";
import Main from "./mainbody";
import Footer from "./clientapp/footer/Footer";
import "./mainApp.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Stylesheets/css/StyleSheet.css";
import NavBar from "./clientapp/responsive/NavBar";

function App({ t }) {
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      
      <div className="akwaba-lang">
        <button onClick={() => changeLanguage("fr")} className="btn-sm">
          Fr
        </button>
        <button onClick={() => changeLanguage("en")} className="btn-sm">
          En
        </button>
      </div> 
      <div className = "header-akwaba">
      <NavBar /> 
      </div>
      <Suspense fallback={<div>Loading</div>}>
      <Main />
      </Suspense>
      <Footer />
    </div>
  );
}

export default withTranslation()(App);
