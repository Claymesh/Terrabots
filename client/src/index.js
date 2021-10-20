import React from "react";
import ReactDOM from "react-dom";
import App from "./App"
import StateProvider from "../providers/StateProvider";
import { BrowserRouter } from "react-router-dom";
import { MetamaskStateProvider } from "use-metamask";
import "regenerator-runtime/runtime.js";

ReactDOM.render(
  <MetamaskStateProvider>
    <BrowserRouter>
    <StateProvider>
      <App />
    </StateProvider>
  </BrowserRouter>
  </MetamaskStateProvider>,
    document.getElementById('root')
)
