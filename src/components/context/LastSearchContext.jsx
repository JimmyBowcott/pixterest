import React, { createContext, useState, useEffect } from 'react';

export const LastSearchContext = createContext();

const getLastSearch = () => {
  const search = localStorage.getItem('lastSearch');
  if (search) {
    return JSON.parse(search);
  } else {
    return [];
  }
};

const LastSearchProvider = ({ children }) => {
  const [lastItems, setLastItems] = useState(getLastSearch());

    // Save to local storage
    useEffect(() => {
      localStorage.setItem('lastSearch', JSON.stringify(lastItems));
    }, [lastItems]);

  return (
    <LastSearchContext.Provider value={[lastItems, setLastItems]}>
      {children}
    </LastSearchContext.Provider>
  );
};

export default LastSearchProvider;