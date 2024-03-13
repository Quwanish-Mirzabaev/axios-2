import React, { useState } from "react";
import "./App.css";

const ThemeContext = React.createContext();

function App() {
  const [theme, setTheme] = useState(false);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={theme ? "theme-dark" : ""}>
        <div className="content-bg-color main-content">
          <h1>Dark</h1>
          <input className="inp" type="checkbox" onChange={() => setTheme(!theme)} />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;