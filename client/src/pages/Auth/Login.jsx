import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import './SignupLogin.css';  // Import the CSS

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login attempt:", email, password);
    
    axios
      .post("http://localhost:3001/login", { email, password })
      .then((result) => {
        console.log("Login success:", result);
        if (result.data) {
          sessionStorage.setItem('isLoggedIn', 'true');
          navigate('/Home'); // redirect to protected route after login
        } else {
          alert("Invalid login credentials");
        }
      })
      .catch((err) => {
        console.error("Login error:", err);
      });
  };

  return (
    <div className="outer">
      <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
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
        <button type="submit" className="button">Login</button>
      </form>
      <p className="footer-text">Don't have an account?</p>
      <Link to="/signup">Signup</Link>
      </div>
    </div>
  );
}

export default Login;
