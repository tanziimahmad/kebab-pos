import Image from "next/image";
import React from "react";
import { RiDeleteBin7Line } from "react-icons/ri";

const SingleCart = () => {
  return (
    <div className="text-neutral w-2/6 flex item-center justify-between">
      <div className="w-full">
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center">
            <Image src="/test-1.jpeg" alt="image" width={56} height={56} />
            <div className="mx-2">
              <h4> test title</h4>
              <p> 2:00 price</p>
            </div>
          </div>
          <div className="p-4 py-2 bg-primary rounded">21</div>
        </div>
        <input className="p-4 py-2 bg-[#393c49] w-full rounded-lg" />
      </div>
      <div className="flex flex-col items-center">
        <div className="w-max">
          <p>$4,500</p>
        </div>
        <div className="w-max">
          <button
            type="button"
            className="border border-red-500 rounded-lg p-2"
          >
            <RiDeleteBin7Line className="text-lg text-red-500" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleCart;