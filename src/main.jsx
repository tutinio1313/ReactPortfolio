import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./TailwindStyle.css";
import SearchText from './InternalizationHandler.js';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

document.title = SearchText("Title");