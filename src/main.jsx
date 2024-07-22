import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes";
import GalleryProvider from './components/GalleryContext'

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GalleryProvider>
      <RouterProvider router={router} />
    </GalleryProvider>
  </React.StrictMode>
);