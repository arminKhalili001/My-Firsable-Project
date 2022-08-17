import React from "react";
import Product from "./Product/Product";


import "./Products.css";

const Products = (props) => {
    return(
      <div className="Products">
          <img src='/products/878_generated.jpg'/>
            <Product />
      </div>
    )
  }
  export default Products;