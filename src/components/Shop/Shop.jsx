// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import "./Shop.css";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json"
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };
  return (
    <div className="main-container">
      <div className="big-side">
        {products.map((product) => (
          <Product
            handleAddToCart={handleAddToCart}
            New={product}
            key={product.id}></Product>
        ))}
      </div>
      <div className="small-side">
    <Cart cart ={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
