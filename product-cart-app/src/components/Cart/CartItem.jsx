import React from "react";
import { FaMinus, FaPlus, FaTrashAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "../../redux/cart/action";
import {
  addDeletedQuantity,
  decreaseQuantity,
  increaseQuantity,
} from "../../redux/products/action";
const CartItem = ({ product }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  const { id, productName, category, imageUrl, price, quantity, totalAmount } =
    product;

  const stoke = products.some((item) => item.id === id && item.quantity);
  console.log(stoke);

  const removeHandler = (id, quantity) => {
    dispatch(removeFromCart(id));
    dispatch(addDeletedQuantity(id, quantity));
  };

  const handleQuantityIncrement = (id) => {
    dispatch(incrementQuantity(id));
    dispatch(decreaseQuantity(id));
  };

  const handleQuantityDecrement = (id) => {
    dispatch(decrementQuantity(id));
    dispatch(increaseQuantity(id));
  };
  return (
    <div className="cartCard">
      <div className="flex items-center col-span-6 space-x-6">
        {/* <!-- cart image --> */}
        <img className="lws-cartImage" src={imageUrl} alt="product" />
        {/* <!-- cart item info --> */}
        <div className="space-y-2">
          <h4 className="lws-cartName">{productName}</h4>
          <p className="lws-cartCategory">{category}</p>
          <p>
            BDT <span className="lws-cartPrice">{price}</span>
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
        {/* <!-- amount buttons --> */}
        <div className="flex items-center space-x-4">
          <button
            disabled={!stoke}
            onClick={() => handleQuantityIncrement(id)}
            className="lws-incrementQuantity"
          >
            <FaPlus className="text-lg" />
          </button>
          <span className="lws-cartQuantity">{quantity}</span>
          <button
            disabled={quantity === 1}
            onClick={() => handleQuantityDecrement(id)}
            className="lws-decrementQuantity"
          >
            <FaMinus className="text-lg" />
          </button>
        </div>
        {/* <!-- price --> */}
        <p className="text-lg font-bold">
          BDT <span className="lws-calculatedPrice">{totalAmount}</span>
        </p>
      </div>
      {/* <!-- delete button --> */}
      <div className="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
        <button
          onClick={() => removeHandler(id, quantity)}
          className="lws-removeFromCart"
        >
          <FaTrashAlt className="text-lg text-red-400" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
