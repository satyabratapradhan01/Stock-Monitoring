
import axios from "axios"; 
import { useState } from "react";

function Signup() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignupForm = () => {
      let value =  axios.post("http://localhost:8080/signup", {
      name: name,
      email: email,
      password: password
    });
    console.log(value);
    }
// style={{marginTop: "5%", marginLeft: "40%"}}
    return ( 
  
    <>
    <div style={{marginTop: "9%", marginLeft: "40%"}} className="signup-container">
    <div className="signup-header">
      <h1>Sign Up</h1>
      <p>Create your account to get started</p>
    </div>
    <form id="signupForm">
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)}  />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email Address</label>
        <input type="email" id="email" name="email" value={email}  onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
      </div>
      <button type="submit" className="signup-btn" onClick={handleSignupForm}>
        Sign Up
      </button>
    </form>
    <div className="login-link">
      <p>
        Already have an account? <a href="#">Login here</a>
      </p>
    </div>
  </div>
    </>

     );
}

export default Signup;