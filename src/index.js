import React from "react";
import ReactDOM from "react-dom/client";
import { MainPage } from "./main_page.js";
// import reportWebVitals from './reportWebVitals';
// import "./helpers/scss/main.scss";
import { Navbar } from "./views/commons/navbar.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Navbar />
    <MainPage />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
