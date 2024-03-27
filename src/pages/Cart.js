import React, { useEffect, useState } from "react";
import "./cart.css";

function Cart() {
  const initialCartList = JSON.parse(localStorage.getItem("cart")) || [];
  const [cartList, setCartList] = useState(initialCartList);

  const removeItem = (index) => {
    const updatedCart = cartList.filter((item, i) => i !== index);
    setCartList(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const calculateTotalPrice = () => {
    return cartList.reduce((total, product) => {
      return total + product.price;
    }, 0);
  };

  return (
    <div className="korzin">
      <h1>Корзина</h1>
      <p className="tot">Total: ${calculateTotalPrice()}</p>
      {cartList.map((product, index) => (
        <div className="img-k" key={index}>
          <div>
            <img src={product.img} alt="" width="150px" height="200px" />
          </div>
          <div className="title">
            <p>{product.title}</p>
          </div>
          <div className="price">
            <p>{product.price}</p>
          </div>
          <div>
            <button onClick={() => console.log("Increment")}>+</button>
            <button>-</button>
            <button onClick={() => removeItem(index)}>Remove</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cart;
