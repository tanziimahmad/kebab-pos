"use client";

import { createContext, useMemo, useState } from "react";

export const UtilityContext = createContext();

export const UtilityProvider = ({ children }) => {
  const [cartData, setCartData] = useState([]);

  const contextValue = useMemo(() => {
    return {
      cartData,
      setCartData,
    };
  }, [cartData]);

  return (
    <UtilityContext.Provider value={contextValue}>
      {children}
    </UtilityContext.Provider>
  );
};
