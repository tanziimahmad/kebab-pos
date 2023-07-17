"use client";

import Cart from "@/components/cart";
import Menu from "@/components/menu";
import Payment from "@/components/payment";
import useUtility from "@/hooks/useUtilityContext";
import { useEffect, useState } from "react";

export default function Home() {
  const [isPayment, setIsPayment] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { cartData, isOpenPayment } = useUtility();

  useEffect(() => {
    setIsOpen(cartData.length > 0);
    setIsPayment(isOpenPayment);
  }, [cartData, isOpenPayment]);

  return (
    <main
      className={`relative flex h-screen ${
        isOpen && isOpenPayment && "overflow-hidden"
      }`}
    >
      <div
        className={`
          ${
            isOpen && isOpenPayment
              ? " block absolute left-0 right-0 top-0 bottom-0  bg-black bg-opacity-70 z-10  opacity-100"
              : "hidden bg-opacity-0 opacity-0"
          } transition-opacity duration-700 ease-in-out`}
      />
      <div
        className={` ${
          isOpen ? "w-8/12" : "w-full"
        } overflow-y-auto transition-all duration-700 ${
          isPayment && "absolute z-0 "
        }`}
      >
        <Menu />
      </div>
      <div
        className={` h-full transition-all duration-700 transform flex bg-primary-2 ${
          isOpen ? "translate-x-0  w-4/12" : "translate-x-full  w-0"
        } ${
          isPayment && isOpen ? "absolute z-20 w-8/12 right-0 bottom-0" : "w-0"
        }`}
      >
        <div
          className={` overflow-y-auto bg-primary-2 h-full transition-all duration-700 transform ${
            isOpen ? "translate-x-0  w-full" : "translate-x-full  w-0"
          }`}
        >
          <Cart />
        </div>
        <div
          className={` overflow-y-auto bg-primary-2 h-full transition-all duration-700 transform ${
            isOpen && isPayment
              ? "translate-x-0  w-full"
              : "translate-x-full  w-0"
          }`}
        >
          <Payment />
        </div>
      </div>
    </main>
  );
}
