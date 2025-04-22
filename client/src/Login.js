import React, { useState } from "react";
import axios from "axios";
import "./Login.css"; // Import styles

function Login({ setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const response = await axios.post("http://localhost:5000/auth/login", {
        username,
        password,
      });

      const token = response.data.token;
      console.log("Received token:", token); // Debug log

      setToken(token);
      localStorage.setItem("token", token);
      // Store token for future use
    } catch (err) {
      console.error(
        "Login error:",
        err.response ? err.response.data : err.message
      );
      setError("Invalid username or password.");
    }
  };

  return (
    <>
      <div className="login-container">
        <h2>Log in to continue</h2>
        {error && (
          <p className="error-message">
            
            {error}
          </p>
        )}
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Enter your username"
            className="login-input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Enter your password"
            className="login-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className="login-btn" type="submit">
            Continue
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;
