import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
// import RefDom from "./components/01-useRef/RefDom";
// import CasoUseRef from "./components/01-useRef/CasoUseRef";
// import Memorize from "./components/02-memo/Memorize";
import MemoHook from "./components/02-memo/MemoHook";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <RefDom /> */}
    {/* <CasoUseRef /> */}
    {/* <Memorize /> */}
    <MemoHook />
  </React.StrictMode>
);
