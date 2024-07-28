import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter as Router } from "react-router-dom";
import { GalleryProvider } from './components/GalleryContext'
import ModalProvider from './components/ModalContext'
import LastSearchProvider from './components/LastSearchContext'
import { SettingsProvider } from './components/SettingsContext'
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SettingsProvider>
      <GalleryProvider>
        <ModalProvider>
          <LastSearchProvider>
            <Router>
              <App />
            </Router>
          </LastSearchProvider>
        </ModalProvider>
      </GalleryProvider>
    </SettingsProvider>
  </React.StrictMode>
);