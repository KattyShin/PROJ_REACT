// App.jsx
import React, { useState, useEffect } from "react";
import Login from "./Login";
import Dashboard from "./Dashboard";
import AdminInterface from "./AdminInterface";

function App() {
    // State to track whether the user is authenticated
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // Check for saved login state on component mount (optional)
    useEffect(() => {
        const authStatus = localStorage.getItem("isAuthenticated");
        setIsAuthenticated(authStatus === "true");
    }, []);

    // Function to handle successful login
    const handleLogin = () => {
        setIsAuthenticated(true);
        localStorage.setItem("isAuthenticated", "true"); // Save login status
    };

    // Function to handle logout
    const handleLogout = () => {
        setIsAuthenticated(false);
        localStorage.removeItem("isAuthenticated"); // Clear login status
    };

    return (
        <div>
            {isAuthenticated ? <AdminInterface onLogout={handleLogout} /> : <Login onLogin={handleLogin} />}
        </div>
    );
}

export default App;
