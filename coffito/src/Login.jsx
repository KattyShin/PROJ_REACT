//Login.jsx
import React, { useState } from "react";
import loginlogo from "./assets/CoffitoLogo.png";

function Login({ onLogin }) {
    // State for username and password fields
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (username === "admin" && password === "admin2024") {
            onLogin();
        } else {
            alert("Invalid credentials. Please try again.");
        }
    };

    return (
        <div className="login-parent flex flex-row justify-center items-center min-h-screen">
            <div className="loginlogo mr-[10%]">
                <img src={loginlogo} alt="Coffito Cafe" />
            </div>
            <div className="login-box flex-col items-center justify-center rounded-lg"> <br />
                <div><h2 className="h2login">Login</h2></div>
                <div className="login-fields">
                    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", width: "300px" }}>
                        <label>
                            Username: <br />
                            <input className="input-fields focus:outline-none" type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
                        </label> <br />
                        <label>
                            Password: <br />
                            <input className="input-fields focus:outline-none" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                        </label> <br />
                        <button className="login-btn rounded-md" type="submit">Log In</button> <br /> <br />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
