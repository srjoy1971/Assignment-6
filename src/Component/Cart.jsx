import React from "react";
import { toast } from "react-toastify";
const Cart = ({ carts, setCarts }) => {

  const totalPrice = carts.reduce((total, item) => total + item.price, 0);

  const handleCheckout = () => {
  toast.success("Checkout successful!");
  setCarts([]);
}

  return (
    <div className="rounded-lg shadow-2xl p-12 max-w-6xl mx-auto mt-12">
      <h2 className="text-3xl font-bold mb-6">Your Cart</h2>

      {carts.length === 0 ? (
        <div className="text-gray-500 text-center py-12">
          <p className="text-gray-500 font-bold">Your cart is empty.</p>
        </div>
      ) : (

        <div className="p-6">
          {carts.map((item, index) => (
            <div className="flex items-center gap-4 mb-4 p-4" key={index}>

              <div className="text-gray-600">
                <img src={item.icon} className="w-8 h-8 inline-block mr-2" />
              </div>

              <div className="flex justify-between items-center w-full">

                <div>
                  <h3 className="text-xl font-bold">{item.name}</h3>
                  <p className="text-gray-400">${item.price}/{item.period}</p>
                </div>

                <div>
                  <button
                    onClick={() => {
                      setCarts(carts.filter((_, i) => i !== index));
                      toast.error("Item removed from cart!");
                    }}
                    className="text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>

              </div>

            </div>
          ))}

          <div className="flex justify-between mt-6">
            <div className="text-lg font-bold">Total</div>
            <div className="text-2xl font-bold">${totalPrice}</div>
          </div>
          <button
            onClick={handleCheckout}
            className="btn w-full text-white p-2 mt-3 rounded-4xl text-1xl bg-gradient-to-r from-[#8b2cf5] to-[#a434ff] text-center cursor-pointer"
          >
            Proceed to Checkout
          </button>

        </div>
      )}



    </div>
  )
}

export default Cart