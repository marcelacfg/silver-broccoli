import React from "react";
import App from "./App";
//ReactDOM.render(<App />, document.getElementById("app")); React 17
//import ReactDOM from "react-dom";

//React 18
import { createRoot } from "react-dom/client";

const container = document.getElementById("app");
const root = createRoot(container); // createRoot(container!) if you use TypeScript

root.render(<App tab="home" />);
