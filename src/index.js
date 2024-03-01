import React, { useRef } from "react";
import ReactDOM from "react-dom/client";

const InputClear = () => {
  const textRef = useRef("");

  const handleClear = () => {
    textRef.current.value = "";
  };

  return (
    <div className="container">
      <h1>Сброс пароля</h1>
      <input type="text" placeholder="Введите текст" ref={textRef} />
      <button type="button" onClick={handleClear}>
        Сбросит
      </button>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<InputClear />);
