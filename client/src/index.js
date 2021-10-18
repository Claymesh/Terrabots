import React from "react";
import "./styles.css";
import ReactDOM from "react-dom";
import App from "./App"
import StateProvider from "../providers/StateProvider";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
    <BrowserRouter>
    <StateProvider>
      <App />
    </StateProvider>
  </BrowserRouter>,
    document.getElementById('root')
)
