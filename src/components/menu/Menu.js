"use client";
import React, { useState } from "react";
import { kebab, drinks } from "../../data.js";
import Cart from "../cart/Cart.js";
import Login from "../login/Login.js";
import Image from "next/image.js";
import Card from "../card/Card.js";

export const Menu = () => {
  return (
    <div>
      <div className="p-6">
        <h1 className="text-4xl mb-4 text-white">Menu</h1>
        <section>
          <h2 className="text-2xl mb-2 text-white">Kebabs</h2>
          <div className="grid grid-cols-4 gap-7">
            {kebab?.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl mb-2 text-white">Drinks</h2>
          <div className="grid grid-cols-4 gap-4">
            {drinks?.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </div>
        </section>
      </div>
      <Login />
    </div>
  );
};

export default Menu;

//   const kebabs = Array.from({ length: 4 }, (_, i) => ({
//     id: i,
//     name: `Kebab ${i + 1}`,
//     price: (i + 1) * 2,
//   }));

//   const drinks = Array.from({ length: 4 }, (_, i) => ({
//     id: i,
//     name: `Drink ${i + 1}`,
//     price: (i + 1) * 1.5,
//   }));
