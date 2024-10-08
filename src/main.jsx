import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import ModalProvider from './components/context/ModalContext'
import LastSearchProvider from './components/context/LastSearchContext'
import { SettingsProvider } from './components/context/SettingsContext'
import { AuthProvider } from './components/context/AuthContext';
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <SettingsProvider>
        <ModalProvider>
          <LastSearchProvider>
            <Router>
              <App />
            </Router>
          </LastSearchProvider>
        </ModalProvider>
      </SettingsProvider>
    </AuthProvider>
  </React.StrictMode>
);