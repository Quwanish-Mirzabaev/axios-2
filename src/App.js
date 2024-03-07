import React, { useState } from "react";
import "./App.css";

function App() {

  const [theme, setTheme] = useState(false)

  return (
    <div class={theme ? "theme-dark" : ""}>
      <div class="content-bg-color main-content">
        <h1>Dark</h1>
        <input type="checkbox" onChange={() => setTheme(!theme)} />
      </div>
    </div>
  );
}

export default App;