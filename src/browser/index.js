import React from "react";
import { render, ReactDOM, hydrate } from "react-dom";
import App from "../shared/App";
import { BrowserRouter } from "react-router-dom";

hydrate(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

// ReactDOM.hydrate(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
//   document.getElementById('root')
