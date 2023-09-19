import React from "react";

import { useSelector } from "react-redux";
import BillDetails from "./BillDetails";
import CartItem from "./CartItem";

const Cart = () => {
  const cart = useSelector((state) => state.carts);
  const billingAmount = cart.reduce(
    (total, item) => total + item.totalAmount,
    0
  );
  return (
    <main className="py-16">
      <div className="container 2xl:px-8 px-2 mx-auto">
        <h2 className="mb-8 text-xl font-bold">Shopping Cart</h2>
        {cart?.length === 0 && <p>No Product on cart</p>}
        <div className="cartListContainer">
          <div className="space-y-6">
            {/* <!-- Cart Item --> */}
            {cart?.map((item) => (
              <CartItem product={item} key={item.id} />
            ))}

            {/* <!-- Cart Items Ends --> */}
          </div>

          {/* <!-- Bill Details --> */}
          <BillDetails billingAmount={billingAmount} />
        </div>
      </div>
    </main>
  );
};

export default Cart;
