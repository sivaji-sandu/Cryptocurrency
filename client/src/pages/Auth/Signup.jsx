import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";
import './SignupLogin.css';  // Import the CSS

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Log the values before sending the request
    console.log("Name:", name, "Email:", email, "Password:", password);
    
    axios
      .post("http://localhost:3001/register", { name, email, password })
      .then((result) => {
        console.log("Signup success:", result);
        navigate("/Login");
        // Redirect after successful signup
      })
      .catch((err) => {
        console.error("Signup error:", err);
      });
  };

  return (
    <div className="outer">
      <div className="form-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="button">Register</button>
      </form>
      <p className="footer-text">Already have an account?</p>
      <Link to="/login">Login</Link>
      </div>
    </div>
  );
}

export default Signup;


