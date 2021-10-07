
import './App.css';
import React, { useState } from 'react';
import {getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import initializeAuthentication from './Firebase/firebase.initialize';
initializeAuthentication();
const provider = new GoogleAuthProvider();

function App() {
// display
const [man, setMan] = useState({})

const handelGoogleSignIn=()=>{

const auth=getAuth();
signInWithPopup(auth,provider)
.then(result=>{

 const {displayName,email,photoURL}=result.user;
 
  const logedInUser={
    name:displayName,
    email:email,
    photo:photoURL
  };
  setMan(logedInUser);
})

  }
  return (
    <div className="App">
    <button onClick={handelGoogleSignIn} > Google Sign In </button>
  
  {
    man.email && <div>
      <h2> Email: {man.email} </h2>
      <h2> Welcome {man.name} </h2>
    
      <img width="300px" src={man.photo} alt="" />
       </div>
  }


    </div>
  );
}

export default App;


