import React from "react";

const Cart = ({ carts }) => {
  const totalPrice = carts.reduce((sum, item) => sum + item.price, 0);
  return (
    <div className="p-10">
      <div>
        {carts.map((item) => (
          <div
            className="flex items-center justify-between space-y-5"
            key={item.id}
          >
            <div className="flex items-center gap-4">
              <div>
                <img
                  className="h-20 w-20 object-contain"
                  src={item.image}
                  alt=""
                />
              </div>
              <div>
                <h2 className="text-xl font-bold">{item.title}</h2>
              </div>
            </div>
            <div className="text-3xl font-bold">${item.price}/Month</div>
          </div>
        ))}
      </div>
      <div className="flex justify-between bg-black text-white p-5  rounded-lg text-2xl font-bold">
        <div>Total</div>
        <div>{totalPrice}</div>
      </div>
    </div>
  );
};

export default Cart;
