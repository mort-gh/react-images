import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./components/styles/styles.css";
import css from "./components/styles/App.module.css";

ReactDOM.render(<App className={css.App} />, document.getElementById("root"));
