import React from "react";
import "./Cart.css";
const Cart = ({cart}) => {
    // const cart = props.cart;
    // const {cart} = props;
    let total = 0;
    let totalShipping = 0;
for(const product of cart){
  total = total + product.price;
  totalShipping = totalShipping + product.shipping;
}
const tax = (total * 7 /100);
const grandTotal = total + totalShipping + tax;
  return (
    <div className="cart">
      <h4>Order sumary</h4>
      <p>Selected Items : {cart.length}</p>
      <p>Total Price :{total}</p>
      <p>Total Shipping :{totalShipping}</p>
      <p>Tax :{tax} </p>
      <h5>Grand Total :{grandTotal}</h5>
    </div>
  );
};

export default Cart;
