import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes";
import { GalleryProvider } from './components/GalleryContext'
import ModalProvider from './components/ModalContext'
import LastSearchProvider from './components/LastSearchContext'

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GalleryProvider>
      <ModalProvider>
        <LastSearchProvider>
          <RouterProvider router={router} />
        </LastSearchProvider>
      </ModalProvider>
    </GalleryProvider>
  </React.StrictMode>
);