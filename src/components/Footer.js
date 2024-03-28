import { useState, useEffect } from "react";
import axios from "axios";
import "./Footer.css";
const src = "https://fakestoreapi.com/products/";

function Footer() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get(src).then((data) => {
      setArticles(data.data);
    });
  }, []);

  return (
    <>
      <div className="products">
        {articles.map((article) => {
          return (
            <div className="card">
              <div>
                <img className="product-img" src={article.image} alt="" />
              </div>
              <div className="product-title">
                <h1>{article.title}</h1>
              </div>
              <div className="product-category">{article.category}</div>
              <div className="product.price">${article.price}</div>
              <div>
                <button className="add-btn" >Add Cart</button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Footer;
