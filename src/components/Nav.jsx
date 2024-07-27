import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import SearchBar from "./SearchBar";
import Modal from "./Modal";
import "../css/index.css"
import { useSettings } from "./SettingsContext";
import ToggleSwitch from "./ToggleSwitch";

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

const Nav = ({showSearchBar=false}) => {
  const {settings, setSettings, isActive, setIsActive} = useSettings();

  const openSettings = () => {
    setIsActive(true)
  }

    return (
      <>
        <nav className="px-6 pt-6 pb-5 flex flex-row items-center justify-between text-lg fixed top-0 w-full bg-white z-50 navbar">
          <div className="flex flex-row items-center">
            <Link to="/" className="flex items-center cursor-pointer">
              <img src="favicon.ico" alt="" className="pixelated h-8 w-8 mr-2"/>
              <p className="text-xl text-pixterest-red mr-4 font-bold">Pixterest</p>
            </Link>
            <ul className="flex flex-row gap-8 mx-4 items-center">
            <li className="hover:underline"><Link to="/today">Today</Link></li>
            <li className="hover:underline"><Link to="/explore">Explore</Link></li>
          </ul>
          </div>
          {showSearchBar && <SearchBar />}
          <div className="flex flex-row gap-4 items-center">
            {!showSearchBar && 
              <button className="hover:underline"><Link to="/about">About</Link></button>
}
            <Link to="/myideas">
              <button className="bg-pixterest-red hover:bg-bg-btn-p-hov text-white rounded-3xl p-1 px-3">My Ideas</button>
            </Link>
            <button className="bg-bg-btn-s-d hover:bg-bg-btn-s-hov text-almost-black rounded-3xl p-2"
              onClick={openSettings}>
              <img src="./src/assets/icons/cog1.png" className="h-6 w-6" />
            </button>
          </div>
      </nav>
      <Modal />
      <SearchModal />
      </>  
    )
}

export default Nav;