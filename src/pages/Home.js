import { PRODUCTS } from "../components/product";
import "./magaz.css";
import React, { useEffect, useState } from "react";

const Home = () => {

  const [cartItems, setCartItems] = useState([]);
  
  const handleAddToCart = (product) => {
    setCartItems([...cartItems, {...product}])
  };

  localStorage.setItem("cart", JSON.stringify(cartItems));

  console.log(cartItems);
 
  

  return (
    <section>
      {PRODUCTS.map((product) => (
        <div className="cards" key={product.id}>
          <img src={product.img} alt="" width="150px " height="200px" />
          <p>{product.title}</p>
          <p>{product.description}</p>
          <p>${product.price}</p>
          <button
            className="add-btn"
            onClick={() => {
              handleAddToCart(product);
            }}
          >
            Add Cart
          </button>
        </div>
      ))}
    </section>
  );
};

export default Home;
