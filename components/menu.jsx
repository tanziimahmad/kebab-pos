"use client";

import React from "react";
import { drinks, kebab } from "@/data";
import useUtility from "@/hooks/useUtilityContext";
import Card from "./card";

const Menu = () => {
  const { cartData, setCartData } = useUtility();

  const addToCart = (item) => {
    const foundItem = cartData.find((data) => data.id === item.id);

    if (foundItem) {
      const updatedCartData = cartData.map((data) => {
        if (data.id === item.id) {
          const updatedQuantity = data.quantity + 1;
          const updatedTotalPrice = updatedQuantity * data.price;
          return {
            ...data,
            quantity: updatedQuantity,
            totalPrice: updatedTotalPrice,
          };
        }
        return data;
      });
      setCartData(updatedCartData);
    } else {
      const totalPrice = item.price;
      const updatedCartData = [
        ...cartData,
        { ...item, quantity: 1, totalPrice },
      ];
      setCartData(updatedCartData);
    }
  };
  return (
    <div>
      <div className="p-6">
        <h1 className="mb-10 text-4xl text-white">Menu</h1>
        <section>
          <h2 className="mb-6 text-xl text-white">Kebabs</h2>
          <div className="grid grid-cols-3 gap-7">
            {kebab?.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => addToCart(item)}
              >
                <Card item={item} />
              </button>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="mb-2 text-2xl text-white">Drinks</h2>
          <div className="grid grid-cols-3 gap-7">
            {drinks?.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => addToCart(item)}
              >
                <Card item={item} />
              </button>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Menu;
