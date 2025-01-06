import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3"; // Import the provider
import "./languageConfig";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GoogleReCaptchaProvider
    reCaptchaKey="6LfqKLAqAAAAALX8SRlJeeLlvKRQDWlfQeqvdtLK" // Replace with your actual site key
    scriptProps={{
      async: true, // Optional: load reCAPTCHA script asynchronously
      defer: true, // Optional: defer script loading
    }}
  >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </GoogleReCaptchaProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
