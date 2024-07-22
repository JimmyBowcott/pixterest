import React, { createContext, useState, useEffect } from 'react';

export const GalleryContext = createContext();


 const getGallery = () => {
    const Gallery = localStorage.getItem('Gallery');
    if (Gallery) {
      return JSON.parse(Gallery);
    } else {
      return [];
    }
  };

const GalleryProvider = ({ children }) => {
  const [Gallery, setGallery] = useState(getGallery);

    // Save to local storage
    useEffect(() => {
      localStorage.setItem('Gallery', JSON.stringify(Gallery));
    }, [Gallery]);

  return (
    <GalleryContext.Provider value={[Gallery, setGallery]}>
      {children}
    </GalleryContext.Provider>
  );
};

export default GalleryProvider;