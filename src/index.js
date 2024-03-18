// import React, { createContext, useContext, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import Main from './components/main' 
function App (){
  return<>
  <Main/>
  </>
}

const root = document.getElementById("root");
ReactDOM.render(<App/>, root);
