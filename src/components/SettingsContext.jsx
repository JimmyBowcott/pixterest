import React, { useState, useEffect, useContext, createContext } from 'react';

const getSettings = () => {
  const Settings = localStorage.getItem('Settings');
  if (Settings) {
    return JSON.parse(Settings);
  } else {
    return {showAdult: false, darkMode: false}; 
  }
};

export const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
  const [settings, setSettings] = useState(getSettings);
  const [isActive, setIsActive] = useState(false);

      // Save to local storage
    useEffect(() => {
      localStorage.setItem('Settings', JSON.stringify(settings));
    }, [settings]);

  return (
    <SettingsContext.Provider value={{settings, setSettings, isActive, setIsActive}}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => useContext(SettingsContext);