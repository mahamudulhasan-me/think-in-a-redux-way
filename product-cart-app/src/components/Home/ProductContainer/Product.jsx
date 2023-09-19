import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/cart/action";
import { decreaseQuantity } from "../../../redux/products/action";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const { id, productName, category, imageUrl, price, quantity } = product;

  const cartProductInfo = {
    id,
    productName,
    category,
    imageUrl,
    price,
    quantity: 1,
    totalAmount: parseFloat(price) * 1,
  };
  const addToCartHandler = (product) => {
    dispatch(addToCart(product));
    dispatch(decreaseQuantity(id));
  };
  return (
    <div className="lws-productCard">
      <img className="lws-productImage" src={imageUrl} alt="product" />
      <div className="p-4 space-y-2">
        <h4 className="lws-productName">{productName}</h4>
        <p className="lws-productCategory">{category}</p>
        <div className="flex items-center justify-between pb-2">
          <p className="productPrice">
            BDT <span className="lws-price">{price}</span>
          </p>
          <p className="productQuantity">
            QTY <span className="lws-quantity">{quantity}</span>
          </p>
        </div>
        <button
          disabled={quantity === 0}
          onClick={() => addToCartHandler(cartProductInfo)}
          className="lws-btnAddToCart"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
