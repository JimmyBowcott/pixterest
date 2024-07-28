import App from "./App";
import LandingPage from "./pages/LandingPage";
import SearchPage from "./pages/SearchPage";
import PostPage from "./pages/PostPage";
import SavedIdeasPage from "./pages/SavedIdeasPage";
import ExplorePage from "./pages/ExplorePage";
import IdeaPage from "./pages/IdeaPage";
import TodayPage from "./pages/TodayPage";
import AboutPage from "./pages/AboutPage";
import { Navigate } from "react-router-dom";

const routes = [
  {
    path: "/pixterest/",
    element: <App />,
    errorElement: <LandingPage />,
  },
  {
    path: "/pixterest/search",
    element: <SearchPage />,
    errorElement: <Navigate to="/pixterest/" />,
  },
  {
    path: "/pixterest/post",
    element: <PostPage />,
    errorElement: <Navigate to="/pixterest/" />,
  },
  {
    path: "/pixterest/myideas",
    element: <SavedIdeasPage />,
    errorElement: <Navigate to="/pixterest/" />,
  },
  { path: "/pixterest/explore",
    element: <ExplorePage />,
    errorElement: <Navigate to="/pixterest/" />,
  },
  {
    path: "/pixterest/idea/:name",
    element: <IdeaPage />,
    errorElement: <Navigate to="/pixterest/" />,
  },
  {
    path: "/pixterest/today",
    element: <TodayPage />,
    errorElement: <Navigate to="/pixterest/" />,
  },
  {
    path: "/pixterest/about",
    element: <AboutPage />,
    errorElement: <Navigate to="/pixterest/" />,
  },
  {
    path: "*",
    element: <Navigate to="/pixterest/" />,
  },
];

export default routes;