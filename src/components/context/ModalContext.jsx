import React, { createContext, useState } from 'react';

export const ModalContext = createContext();

const ModalProvider = ({ children }) => {
  const [isActiveModal, setIsActiveModal] = useState(false);

  return (
    <ModalContext.Provider value={[isActiveModal, setIsActiveModal]}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;