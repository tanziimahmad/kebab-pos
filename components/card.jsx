import Image from "next/image";
import React from "react";

const Card = ({ item }) => {
  return (
    <div
      key={item.id}
      className="bg-primary-2  rounded-3xl bg-navy-700 text-white min-h-[250px] hover:shadow-primary hover:shadow-lg"
    >
      <div className="text-center">
        <div className="relative w-full h-40 overflow-hidden rounded-t-3xl">
          <Image
            src="/test-1.jpeg"
            alt="food-image"
            className="object-cover"
            fill
          />
        </div>
        <div className="w-3/4 p-6 m-auto">
          <h3 className="text-sm font-semibold">{item.name}</h3>
          <p className="mt-4">${item.price.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
