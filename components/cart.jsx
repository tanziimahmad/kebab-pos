import SingleCart from "./single-cart";

export default function Cart() {
  return (
    <div className="h-full p-6 text-neutral">
      <div className="grid grid-cols-6 gap-4 my-6 ">
        <div className="flex items-center justify-between w-full col-span-5">
          <p>Item</p>
          <p>QTY</p>
        </div>
        <div className="text-center">
          <p>Price</p>
        </div>
      </div>
      <div className="py-6 overflow-y-auto border-y border-primary h-4/6">
        <SingleCart />
        <SingleCart />
        <SingleCart />
        <SingleCart />
        <SingleCart />
      </div>
      <div className="py-6">
        <div className="flex items-center justify-between">
          <p>Discount</p>
          <p className="text-right">$0</p>
        </div>
        <div className="flex items-center justify-between mt-4">
          <p>Sub total</p>
          <p className="text-right"> $ 21,03</p>
        </div>
        <div className="mt-10">
          <button
            type="button"
            className="bg-[#EA7C69] w-full p-4 rounded-md hover:shadow"
          >
            Continue to Payment
          </button>
        </div>
      </div>
    </div>
  );
}
