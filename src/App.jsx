import { Routes, Route} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SearchPage from "./pages/SearchPage";
import PostPage from "./pages/PostPage";
import SavedIdeasPage from "./pages/SavedIdeasPage";
import ExplorePage from "./pages/ExplorePage";
import IdeaPage from "./pages/IdeaPage";
import TodayPage from "./pages/TodayPage";
import AboutPage from "./pages/AboutPage";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";

function App() {

  return (
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/post" element={<PostPage />} />
        <Route path="/myideas" element={<SavedIdeasPage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/idea/:name" element={<IdeaPage />} />
        <Route path="/today" element={<TodayPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<LandingPage />} />
      </Routes>
  )
}

export default App;
