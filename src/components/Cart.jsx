import React from "react";

const Cart = ({ carts, setCarts }) => {
  const totalPrice = carts.reduce((sum, item) => sum + item.price, 0);
  const handlePayment = () => {
    setCarts([]);
  };
  const handleDelete = (item) => {
    const filteredArray = carts.filter((c) => c.id !== item.id);
    setCarts(filteredArray);
  };

  return (
    <div className="p-10">
      {carts.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <>
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
                <button
                  onClick={() => handleDelete(item)}
                  className="btn rounded-full "
                >
                  X
                </button>
              </div>
            ))}
          </div>
          <div className="flex justify-between bg-black text-white p-5  rounded-lg text-2xl font-bold">
            <div>Total</div>
            <div>{totalPrice}</div>
          </div>
          <button
            className="cursor-pointer w-full bg-red-500 mt-5 p-5 text-3xl font-bold text-white rounded-lg"
            onClick={handlePayment}
          >
            Proceed To checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
