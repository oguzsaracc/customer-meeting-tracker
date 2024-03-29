import React from "react";
import ReactDOM from "react-dom/client";
import Routes from "./Routes";

// We used Routes because all the routing process will be happening at Routes.js
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>
);
