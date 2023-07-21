
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  let[user,setUser]=useState({name:"",password:""})
  let[error,setError]=useState("");
  function validator(e){
    e.preventDefault();
    if(user.name=="" || user.password==""){
      setError("Both username and password are required")

    }
  }
  return (
  
    <div>
        <form onSubmit={validator}>
        <label for="name">Username:</label>
        <input 
        type="text"
        name="name"
         onChange={(e)=>setUser(...user,user.name=e.target.value)}
        />
        <label for="password">Password:</label>
        <input
        type="password"
        name="password"
        onChange={(e)=>setUser(...user,user.password=e.target.value)}


        />
        <h5 id="errorMeassage">{error}</h5>
        <button type="submit">Login</button>
        </form>
    </div>
  )
}

export default App
