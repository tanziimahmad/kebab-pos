"use client";

import React from "react";
import { drinks, kebab } from "@/data";
import Card from "./card";

const Menu = () => {
  return (
    <div>
      <div className="p-6">
        <h1 className="mb-10 text-4xl text-white">Menu</h1>
        <section>
          <h2 className="mb-6 text-xl text-white">Kebabs</h2>
          <div className="grid grid-cols-3 gap-7">
            {kebab?.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="mb-2 text-2xl text-white">Drinks</h2>
          <div className="grid grid-cols-3 gap-7">
            {drinks?.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Menu;
