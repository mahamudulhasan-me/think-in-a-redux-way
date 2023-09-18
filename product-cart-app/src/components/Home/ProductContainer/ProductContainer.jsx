import React from "react";
import { useSelector } from "react-redux";
import Product from "./Product";

const ProductContainer = () => {
  const products = useSelector((state) => state.products);
  console.log(products);
  return (
    <>
      {products.length === 0 ? (
        <p className="text-center font-bold text-gray-700">No Product Found</p>
      ) : (
        <div className="productContainer" id="lws-productContainer">
          {products.map((product) => (
            <Product key={product?.id} product={product} />
          ))}
        </div>
      )}
    </>
  );
};

export default ProductContainer;
