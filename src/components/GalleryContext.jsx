import React, { useState, useEffect, useContext, createContext } from 'react';

export const GalleryContext = createContext();

 const getGallery = () => {
    const Gallery = localStorage.getItem('Gallery');
    if (Gallery) {
      return JSON.parse(Gallery);
    } else {
      return [];
    }
  };

export const GalleryProvider = ({ children }) => {
  const [Gallery, setGallery] = useState(getGallery);

    // Save to local storage
    useEffect(() => {
      localStorage.setItem('Gallery', JSON.stringify(Gallery));
    }, [Gallery]);

    const handleAdd = (item) => {
      setGallery([...Gallery, item]);
    };

    const handleDelete = (item) => {
      setGallery(Gallery.filter((i) => i.link !== item.link));
    };
 
  return (
    <GalleryContext.Provider value={{ Gallery, handleAdd, handleDelete }}>
      {children}
    </GalleryContext.Provider>
  );
};

export const useGallery = () => useContext(GalleryContext);