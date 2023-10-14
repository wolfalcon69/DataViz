import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import CCodeEditor from "./codearea";

import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
      <div className="text">
        <h1 className="Header">Enter Code</h1>
        <CCodeEditor/></div>
      <App className="display"/>
    
  </StrictMode>
);