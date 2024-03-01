import ReactDOM from "react-dom/client";
import React from "react";
// import App from "./App";
import "./index.css"
import { useState } from 'react';
 
// import React, { useState } from 'react';

const InputClear = () => {
  const [text, setText] = useState('');

  const handleClear = () => {
    setText('');
  };

  return (
    
    <div className="container">
      <h1>Сброс пароля</h1>
      <p>Введите адрес электронной почты, 
        связанный с вашим аккаунтом.</p>
        
      <input
      
        type="text"
        placeholder="Введите email"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="button" onClick={handleClear} >Сбросит</button>
    </div>
  );
};



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<InputClear />);
