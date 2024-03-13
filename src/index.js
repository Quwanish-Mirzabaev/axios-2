import React, { createContext, useContext, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css'
// import logo from './logo.svg'
import logo from './asd (2).png'

const UserContext = createContext();

function UserLogIn() {
  const [user, setUser] = useState({});
  const nameRef = useRef();
  const emailRef = useRef();

  const handleLogIn = () => {
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    setUser({name, email});
  }

  

  return (
    <UserContext.Provider value={user}>
      <div className='login'>
        <h2>User Log In</h2>
        <input className='inp' type="text" placeholder=" your name" ref={nameRef} />
        <input className='inp2' type="email" placeholder=" your email" ref={emailRef} />
        <button onClick={handleLogIn}>Log In</button>
      </div>
      <UserProfile />
    </UserContext.Provider>
  );
}

function UserProfile() {
  const user = useContext(UserContext);

  return (
    <div className='profile'>
      <h2>User Profile</h2>
      
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <UserLogIn />
    </div>
  );
}
const root = document.getElementById("root");
ReactDOM.render(<App/>, root);
