import App from "./App";
import ErrorPage from "./pages/ErrorPage";
import SearchPage from "./pages/SearchPage";
import PostPage from "./pages/PostPage";
import SavedIdeasPage from "./pages/SavedIdeasPage";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "search",
    element: <SearchPage />,
    errorElement: <App />,
  },
  {
    path: "post",
    element: <PostPage />,
    errorElement: <App />,
  },
  {
    path: "myideas",
    element: <SavedIdeasPage />,
    errorElement: <App />,
  }
];

export default routes;