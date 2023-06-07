import React from "react";
import "./product.css";
const Product = (props) => {
  const { img, name, price, ratings, seller } = props.New;
  const handleAddToCart = props.handleAddToCart;
  return (
    <div className="product">
      <div className="product-name">
        <img src={img} alt="" />
        <h4>{name}</h4>
        <h5>Price : {price}</h5>
      </div>

      <div className="rating">
        <p>Company : {seller}</p>
        <p>Rating : {ratings}</p>
      </div>
      <button onClick={() =>handleAddToCart(props.New)} className="btn">
        Add To Cart
      </button>
    </div>
  );
};

export default Product;
