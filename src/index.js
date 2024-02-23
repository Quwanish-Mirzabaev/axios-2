import React, {useState} from "react";
import ReactDOM from "react-dom/client";



const InputComponent = () => {
    const [inputValue, setInputValue] = useState('');
    const [displayValue, setDisplayValue] = useState('');

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleClick = () => {
        setDisplayValue(inputValue);
    };

    return (
        <div>
            <input type="text" value={inputValue} onChange={handleChange} />
            <button onClick={handleClick}>Save</button>
            <p>copy: {displayValue}</p>
        </div>
    );
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<InputComponent/>);
