import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App/App";

if (module.hot) {
  module.hot.accept();
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
