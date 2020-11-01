import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { MuiThemeProvider } from '@material-ui/core';
import { theme } from "./resources";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux"
import { appStore, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react"
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

export default function Qhair() {
  return (
    <Provider store={appStore}>
      <MuiThemeProvider theme={theme}>
        <Router>
          <PersistGate persistor={persistor}>
            <App />
          </PersistGate>
        </Router>
      </MuiThemeProvider>
    </Provider>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Qhair />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
