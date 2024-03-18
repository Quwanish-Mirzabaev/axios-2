import React from "react";
import { PRODUCTS } from "./product";
import { useState } from "react";

function Main() {
  const [cartItems, setCartItems] = useState({ 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 });

  const addToCart = (id) => {
    setCartItems((cartItems) => ({ ...cartItems, [id]: cartItems[id] + 1 }));
    console.log(cartItems);
  };

  const subformCArt = (id) => {
    setCartItems((cartItems) => ({ ...cartItems, [id]: cartItems[id] - 1 }));
  };
  const removeFromCart = (id) => {
    setCartItems((cartItems) => ({ ...cartItems, [id]: (cartItems[id] = 0) }));
  };

  const totalAmount =()=>{
let amount=0;

for(const key in cartItems){
  if(cartItems[key]>0){
let productInfo=PRODUCTS.find(product=>product.id===Number(key))
amount+=Math.floor(cartItems[key]*productInfo.price)

  }
}
return amount;
  }

  return (
    <div className="cont">
      {PRODUCTS.map((product) => (
        <div className="con" key={product.id}>
          <img className="img" src={product.productImage} alt="" />
          <p>{product.productName}</p>
          <p>${product.price}</p>
          <button onClick={() => addToCart(product.id)} className="btn">
            Add to cart
          </button>
        </div>
      ))}

      <div className="korz">
        <h1>Корзина</h1>
        <p className="tot">Total:${totalAmount()}</p>

        {PRODUCTS.map((product) => {
          if (cartItems[product.id] > 0) {
                return ( <>
            <div className="korzina">
                <img src={product.productImage} alt="" />X{" "}
                <p className="num">{cartItems[product.id]}</p>
                <div className="cal">
                  <button
                    className="btn-plus"
                    onClick={() => addToCart(product.id)}
                  >
                    +
                  </button>
                  <button
                    className="btn-minus"
                    onClick={() => subformCArt(product.id)}
                  >
                    -
                  </button>
                  <button
                    className="r-btn"
                    onClick={() => removeFromCart(product.id)}
                  >
                    Удалит
                  </button>
                </div>
              </div>

              <div>
              <p>{product.productName}</p>
              <p>${product.price}</p>
              </div>
              </>);
          }
        })}
      </div>
    </div>
  );
}

export default Main;
