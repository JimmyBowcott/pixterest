import App from "./App";
import ErrorPage from "./pages/ErrorPage";
import SearchPage from "./pages/SearchPage";


const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
];

export default routes;