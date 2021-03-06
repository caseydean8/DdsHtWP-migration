// import React from 'react';
// import "./assets/fonts/Frontage-Condensed-Bold.ttf"
import { render } from "react-dom";
import { HashRouter } from "react-router-dom";
// import ReactDOM from 'react-dom';
// import './index.css';
import App from "./App";

render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
