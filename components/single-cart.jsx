import Image from "next/image";
import React from "react";
import { RiDeleteBin7Line } from "react-icons/ri";

const ItemDetails = ({ title, price, quantity }) => {
  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center">
        <Image
          src="/test-1.jpeg"
          alt="image"
          width={56}
          height={56}
          className="rounded"
        />
        <div className="mx-2">
          <h4> {title}</h4>
          <p>${price}</p>
        </div>
      </div>
      <div className="p-4 py-2 rounded bg-primary">{quantity}</div>
    </div>
  );
};

const SingleCart = ({
  title,
  price,
  quantity,
  totalPrice = 0,
  handleDeleteToCard,
  id,
}) => {
  return (
    <div className="grid grid-cols-6 gap-2 mb-6 ">
      <div className="col-span-5">
        <ItemDetails title={title} price={price} quantity={quantity} />
      </div>
      <div className="w-max place-self-center">
        <p>${totalPrice}</p>
      </div>
      <div className="col-span-5">
        <input className="p-4 py-2 bg-[#393c49] w-full rounded-lg" />
      </div>
      <div className="w-max place-self-center">
        <button
          onClick={() => handleDeleteToCard(id)}
          type="button"
          className="p-2 border border-red-500 rounded-lg"
        >
          <RiDeleteBin7Line className="text-lg text-red-500" />
        </button>
      </div>
    </div>
  );
};

export default SingleCart;
