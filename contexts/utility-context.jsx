"use client";

import { createContext, useMemo, useState } from "react";

export const UtilityContext = createContext();

export const UtilityProvider = ({ children }) => {
  const [cartData, setCartData] = useState([]);
  const [isOpenPayment, setIsOpenPayment] = useState(false);

  const contextValue = useMemo(() => {
    return {
      cartData,
      setCartData,
      isOpenPayment,
      setIsOpenPayment,
    };
  }, [cartData, isOpenPayment]);

  return (
    <UtilityContext.Provider value={contextValue}>
      {children}
    </UtilityContext.Provider>
  );
};
