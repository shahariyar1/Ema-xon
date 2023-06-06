import React from "react";
import "./Product.css";
const Product = (props) => {
  const { img, name, seller, quantity, price, ratings } = props.product;
  const handleAddToCart = (product) => {
    console.log(product);
  };
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <p>Price : {price}</p>
        <p>Manufacturing : {seller}</p>
        <p>Rating : {ratings}</p>
      </div>
      <button
        onClick={() => handleAddToCart(props.product)}
        className="btn-cart">
        Add to Cart{" "}
      </button>
    </div>
  );
};

export default Product;
