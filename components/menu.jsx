"use client";

import React from "react";
import { drinks, kebab } from "@/data";
import Card from "./card";
import LoginForm from "./login/Login";

const Menu = () => {
  return (
    <div>
      <div className="p-6">
        <h1 className="mb-4 text-4xl text-white">Menu</h1>
        <section>
          <h2 className="mb-2 text-2xl text-white">Kebabs</h2>
          <div className="grid grid-cols-4 gap-7">
            {kebab?.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="mb-2 text-2xl text-white">Drinks</h2>
          <div className="grid grid-cols-4 gap-4">
            {drinks?.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </div>
        </section>
      </div>
      <LoginForm />
    </div>
  );
};

export default Menu;
