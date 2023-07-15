"use client";

import Cart from "@/components/cart";
import Menu from "@/components/menu";
import useUtility from "@/hooks/useUtilityContext";
import { useEffect, useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const { cartData } = useUtility();

  useEffect(() => {
    setIsOpen(cartData.length > 0);
  }, [cartData]);

  return (
    <main className="relative flex h-screen">
      <div
        className={` ${
          isOpen ? "w-8/12" : "w-full"
        } overflow-y-auto transition-all duration-700`}
      >
        <Menu />
      </div>

      <div
        className={` overflow-y-auto bg-primary-2 h-full transition-all duration-700 transform ${
          isOpen ? "translate-x-0  w-4/12" : "translate-x-full  w-0"
        }`}
      >
        <Cart />
      </div>
    </main>
  );
}
