import ReactDOM from "react-dom/client";
import React from "react";
import Footer from "./components/Footer";
import "./index.css"



function App(){
    return (
        <>
          
            <Footer />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
