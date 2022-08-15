import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './storage';
import { Provider } from "react-redux";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

// store.subscribe(() => {
//   console.log(store.getState())
// })

console.log("%cThis is a Demo PWA","color: blue; font-family:monospace; font-size: 25px");
console.log("%cDeveloped By @SahilKumarSahoo","color: blue; font-family:monospace; font-size: 10px");
console.log("GitHub: https://github.com/SahilKumarGit");

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);


serviceWorkerRegistration.register();
