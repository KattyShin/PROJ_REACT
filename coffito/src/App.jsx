// App.jsx
import React, { useState } from "react";
import AdminInterface from "./AdminInterface";
import Login from "./Login";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  }

  const handleLogout = () => {
    setIsLoggedIn(false);
  }

  return (
    <>
      {isLoggedIn ? ( 
        <AdminInterface onLogout={handleLogout} />
      ) : (
        <Login onLogin={handleLogin} />
      )} 
    </>
  );
}

export default App;
