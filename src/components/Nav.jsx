import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import SearchBar from "./SearchBar";
import Modal from "./Modal";
import "../css/index.css"
import { useSettings } from "./context/SettingsContext";
import ToggleSwitch from "./ToggleSwitch";
import { AuthContext } from "./context/AuthContext";

const SearchModal = () => {
  const {settings, setSettings, isActive, setIsActive} = useSettings();

  const toggleNSFW = () => {
    setSettings({...settings, showAdult: !settings.showAdult})
  }

  const closeSettings = () => {
    setIsActive(false)
  }

  if (!isActive) return null

  return (
    <div style={{backgroundColor: "rgb(0, 0, 0, 0.25)"}} className="z-40 h-screen w-screen fixed top-0 left-0 flex flex-col justify-center items-center bg-white">  
      <div className="relative flex flex-col justify-center bg-white p-4 rounded-2xl gap-2">
        <button className="absolute -top-2 right-0 p-2 cursor-pointer" alt="close" onClick={closeSettings}>x</button>
        <h1 className="text-3xl font-bold mb-2 self-center">Settings</h1>
        <div className="flex flex-row items-center justify-between cursor-pointer gap-2 w-full">
        <p>Show NSFW:</p>
          <ToggleSwitch isChecked={settings.showAdult} toggleChecked={toggleNSFW}/> 
        </div>
        <p>Enable dark mode: tba.</p>
      </div>
    </div>
    );
}

const Nav = ({ showSearchBar=false }) => {
  const {settings, setSettings, isActive, setIsActive} = useSettings();
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();


  const openSettings = () => {
    setIsActive(true)
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <>
      <nav className={`px-6 ${showSearchBar? 'pt-2 pb-2' : 'pt-6 pb-5'}  flex items-center justify-between text-lg fixed top-0 w-full bg-white z-50`}>
        <button className="md:hidden" onClick={toggleMenu}>
          <img src="./assets/icons/three-lines.png" className="pixelated h-4 w-4" />
        </button>
        <div className={`flex flex-row items-center ${showSearchBar ? 'hidden md:flex' : 'flex'}`}>
          <Link to="/" className="flex items-center cursor-pointer">
            <img src="favicon.ico" alt="" className="pixelated h-8 w-8 mr-2" />
            <p className="text-xl text-pixterest-red mr-4 font-bold">Pixterest</p>
          </Link>
          <ul className="hidden md:flex flex-row gap-8 mx-4 items-center">
            <li className="hover:underline"><Link to="/today">Today</Link></li>
            <li className="hover:underline"><Link to="/explore">Explore</Link></li>
          </ul>
        </div>
        {showSearchBar && <SearchBar />}
        <div className="hidden md:flex flex-row gap-4 items-center">
          {!showSearchBar && <button className="hover:underline"><Link to="/about">About</Link></button>}
          {user &&
            <button className="bg-bg-btn-s-d hover:bg-bg-btn-s-hov text-almost-black rounded-3xl p-1 px-3"
              onClick={() => handleLogout()}>Log out</button>
          }
          {!user &&
            <Link to="/login">
              <button className="bg-bg-btn-s-d hover:bg-bg-btn-s-hov text-almost-black rounded-3xl p-1 px-3">Log in</button>
            </Link>
          }

          <Link to="/myideas">
            <button className="bg-pixterest-red hover:bg-bg-btn-p-hov text-white rounded-3xl p-1 px-3">My Ideas</button>
          </Link>
          <button className="bg-bg-btn-s-d hover:bg-bg-btn-s-hov text-almost-black rounded-3xl p-2 min-w-10 min-h-10" onClick={openSettings}>
            <img src="./assets/icons/cog1.png" className="h-6 w-6" />
          </button>
        </div>
      </nav>

      <div className={`fixed flex flex-col top-0 left-0 h-full w-64 bg-white shadow-lg transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-40`}>
        <ul className="flex flex-col gap-8 mx-4 mt-24 items-start">
          <li className="hover:underline"><Link to="/today" onClick={toggleMenu}>Today</Link></li>
          <li className="hover:underline"><Link to="/explore" onClick={toggleMenu}>Explore</Link></li>
          <li className="hover:underline"><Link to="/about" onClick={toggleMenu}>About</Link></li>
          <li className="hover:underline"><Link to="/myideas" onClick={toggleMenu}>My Ideas</Link></li>
          <li className="hover:underline" onClick={openSettings}><button>Settings</button></li>
        </ul>
        {showSearchBar &&
        <Link to="/" className="flex items-center cursor-pointer mt-auto">
            <img src="favicon.ico" alt="" className="pixelated h-8 w-8 m-4" />
            <p className="text-xl text-pixterest-red mr-4 font-bold">Pixterest</p>
        </Link>
      }
      </div>

      <Modal />
      <SearchModal />
    </>
  );
};

export default Nav;