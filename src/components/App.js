
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!username || !password){
      setError("Both username and password are required.")
    }
    else{
      setError("");
    }
  }
  return (
    <div>
        {/* Do not remove the main div */}
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username: </label>
          <input type="text" id="username" onChange={(event) => setUsername(event.target.value)} />
          <br/>
          <br/>
          <label htmlFor="password" >Password: </label>
          <input type="password" id="password" onChange={(event) => setPassword(event.target.value)} />
          {
            error ? <p id="errorMessage">{error}</p> : <p></p>
          }
          <button type="submit">Login</button>
        </form>
    </div>
  )
}

export default App