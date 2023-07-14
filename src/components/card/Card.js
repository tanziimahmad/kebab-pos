import Image from "next/image";
import React from "react";

const Card = ({ item }) => {
  return (
    <div
      key={item.id}
      className="bg-primary  rounded-3xl bg-navy-700 text-white min-h-[250px]"
    >
      <div className="text-center">
        <div className="relative h-40 w-full overflow-hidden rounded-t-3xl">
          <Image
            src="/test-1.jpeg"
            alt="food-image"
            className="object-cover"
            fill
          />
        </div>
        <div className="p-6 w-3/4 m-auto">
          <h3 className="text-sm font-semibold">{item.name}</h3>
          <p className="mt-4">${item.price.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
