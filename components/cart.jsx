import useUtility from "@/hooks/useUtilityContext";
import { BsArrowLeft } from "react-icons/bs";
import SingleCart from "./single-cart";

export default function Cart() {
  const { cartData, setCartData, setIsOpenPayment, isOpenPayment } =
    useUtility();

  const handleDeleteToCard = (id) => {
    const updatedCartData = cartData.map((item) => {
      if (item.id === id) {
        if (item.quantity === 1) {
          // Remove the item from the cart
          return null;
        }
        const updatedQuantity = item.quantity - 1;
        const updatedTotalPrice = updatedQuantity * item.price;
        return {
          ...item,
          quantity: updatedQuantity,
          totalPrice: updatedTotalPrice,
        };
      }
      return item;
    });

    const filteredCartData = updatedCartData.filter((item) => item !== null);
    setCartData(filteredCartData);
  };
  return (
    <div className="h-full p-6 text-neutral">
      <div>
        {isOpenPayment && (
          <button
            type="button"
            onClick={() => setIsOpenPayment(false)}
            className="text-2xl"
          >
            <BsArrowLeft />
          </button>
        )}
      </div>
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
        {cartData.map((data) => {
          const { id, name, price, totalPrice, quantity } = data;
          return (
            <SingleCart
              key={id}
              id={id}
              title={name}
              price={price}
              quantity={quantity}
              totalPrice={totalPrice}
              handleDeleteToCard={handleDeleteToCard}
            />
          );
        })}
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
          {!isOpenPayment && (
            <button
              onClick={() => setIsOpenPayment(true)}
              type="button"
              className="bg-[#EA7C69] w-full p-4 rounded-md hover:shadow"
            >
              Continue to Payment
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
