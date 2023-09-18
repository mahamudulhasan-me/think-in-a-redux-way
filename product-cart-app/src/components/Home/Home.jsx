import React from "react";
import AddProduct from "./AddProduct/AddProduct";
import ProductContainer from "./ProductContainer/ProductContainer";

const Home = () => {
  return (
    <main class="py-16">
      <div class="productWrapper">
        {/* <!-- products container --> */}
        <ProductContainer />
        {/* <!-- products container ends --> */}
        <div>
          {/* <!-- Product Input Form --> */}
          <AddProduct />
          {/* <!-- Product Input Form Ends --> */}
        </div>
      </div>
    </main>
  );
};

export default Home;
