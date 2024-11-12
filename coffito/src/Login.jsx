import React, { useState } from "react";
import loginlogo from "./assets/CoffitoLogo.png";
import axios from "axios"; // Import axios for making API requests

function Login({ onLogin }) {
  // State for username, password, and error messages
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // For storing error messages
  const [usernameError, setUsernameError] = useState(""); // For username error
  const [passwordError, setPasswordError] = useState(""); // For password error

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset error messages before trying to submit
    setError("");
    setUsernameError("");
    setPasswordError("");

    // Validation for empty fields
    if (!username) {
      setUsernameError("Username is required.");
      return;
    }
    if (!password) {
      setPasswordError("Password is required.");
      return;
    }

    // Hardcoded user_id value
    const user_id = "12134";
    try {
      // Send POST request to the backend with username, password, and hardcoded user_id
      const response = await axios.post("http://localhost:5000/api/users", {
        username,
        password,
        user_id, // Use the hardcoded user_id here
      });

      // If login is successful
      if (response.status === 200) {
        onLogin(); // Call onLogin callback if login is successful
      }
    } catch (err) {
      // Handle error (invalid credentials or server error)
      setError("Invalid credentials");
      console.error("Login error:", err);
    }
  };

  return (
    <div className="login-parent flex flex-row justify-center items-center min-h-screen">
      <div className="loginlogo mr-[10%]">
        <img src={loginlogo} alt="Coffito Cafe" />
      </div>

      <div className="login-box">
        <h2 className="h2login">Login</h2>
        <div className="login-fields">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col"
          >
              <label>
                Username: <br />
                <input
                  className="input-fields focus:outline-none"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </label>
              {usernameError && (
                <div className="error-message">{usernameError}</div>
              )}
              <br />
              <label >
                Password: <br />
                <input
                  className="input-fields focus:outline-none"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
            
            <br />
            <button className="login-btn rounded-md" type="submit">
              Log In
            </button>
            {error && (
              <div className="error-message mt-4 text-center">{error}</div>
            )}
            <br />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
