import React, { useEffect, useState } from "react";
import "./cart.css";
function Cart() {
  const cartList = JSON.parse(localStorage.getItem("cart"));


  
  return (
    <div className="korzin">
      {cartList.map((product) => (
        <div className="img-k">
          <div>
            <img src={product.img} alt=""  width="150px " height="200px"/>
          </div>
          <div className="title">
            <p>{product.title}</p>
          </div>
          <div className="price">
            <p>{product.price}</p>
          </div>
          <div>
            <button>+</button>
            <div>

            <button>-</button>
            </div>
            <button>remove</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cart;
