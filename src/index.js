import React, {useState} from "react";
import ReactDOM from "react-dom/client";




const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};
 

 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Counter/>);
