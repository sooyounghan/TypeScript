import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import _ from "lodash"

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
); // HTMLElement | null 타입 추론 : 하지만 null이 될 수 없으므로 타입 단언
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
