import { useState, useEffect } from "react";
import axios from "axios";
import "./Footer.css";
// const src = "https://fakestoreapi.com/products/";

function Footer() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);


  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setPosts(response.data);
      } catch (error) {
        setError(error.message);
      }
    }

    fetchPosts();

  }, []);

  return (
    <div>
      <h1>Post Titles</h1>
      {error && <p>Error: {error}</p>}
      <ul>
        {posts.map((post, index) => (
          <li key={index}>  
            <p>{post.id}</p>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
       <div>
        </div>
    </div>
  );
}

export default Footer;









