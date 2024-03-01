import React, {useState, useRef } from "react";
import ReactDOM from "react-dom/client";
import "./index.css"

const Counter = () => {
    const [count, setCount]=useState(0);
    const prevCountRef = useRef();

    const handleClick=()=>{
        prevCountRef.current=count;
        setCount(count+1);
    };

    return (
        <div>
            <p>Предыдущий:{prevCountRef.current}</p>
            <p>Счетчик: {count} </p>
            <button onClick={handleClick} className="btn"></button>
        </div>
    
    
    
    )

};    


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Counter />);
