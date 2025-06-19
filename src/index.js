import React from "react";
import ReactDOM from "react-dom/client"; // ← الجديد هنا
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// 🆕 استخدم createRoot بدل render
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
