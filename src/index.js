import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app.js';
import * as serviceWorker from './serviceWorker';
import './services/i18n';
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
    <App/>,    
    document.getElementById("root")
  );

serviceWorker.register();
