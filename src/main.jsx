import React from "react";
import ReactDOM from "react-dom/client";
import { useNavigate, createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes";
import { GalleryProvider } from './components/GalleryContext'
import ModalProvider from './components/ModalContext'
import LastSearchProvider from './components/LastSearchContext'
import { SettingsProvider } from './components/SettingsContext'

const router = createBrowserRouter(routes);

const App = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    const path = window.location.search.substring(1);
    if (path) {
      navigate(path, { replace: true });
    }
  }, [navigate]);

  return (
    <RouterProvider router={router} />
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SettingsProvider>
      <GalleryProvider>
        <ModalProvider>
          <LastSearchProvider>
            <App />
          </LastSearchProvider>
        </ModalProvider>
      </GalleryProvider>
    </SettingsProvider>
  </React.StrictMode>
);