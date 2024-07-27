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
    path: "/",
    element: <App />,
    errorElement: <LandingPage />,
  },
  {
    path: "search",
    element: <SearchPage />,
    errorElement: <Navigate to="/" />,
  },
  {
    path: "post",
    element: <PostPage />,
    errorElement: <Navigate to="/" />,
  },
  {
    path: "myideas",
    element: <SavedIdeasPage />,
    errorElement: <Navigate to="/" />,
  },
  { path: "explore",
    element: <ExplorePage />,
    errorElement: <Navigate to="/" />,
  },
  {
    path: "idea/:name",
    element: <IdeaPage />,
    errorElement: <Navigate to="/" />,
  },
  {
    path: "today",
    element: <TodayPage />,
    errorElement: <Navigate to="/" />,
  },
  {
    path: "about",
    element: <AboutPage />,
    errorElement: <Navigate to="/" />,
  },
  {
    path: "*",
    element: <Navigate to="/" />,
  },
];

export default routes;