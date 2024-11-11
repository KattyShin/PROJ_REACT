// App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
import Product from "./Product";
import SalesReportDaily from "./SalesreportDaily";
import SalesReportMonthly from "./SalesReportMonthly";
import SalesReportYearly from "./SalesReportYearly";
import Transaction from "./Transaction";
import ItemSold from "./ItemSold";
import Login from "./Login";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <div className="flex">
        {isAuthenticated && <Sidebar onLogout = {handleLogout}/>}

        <div className="flex-grow">
          <Routes>
            <Route path="/" element={isAuthenticated ? <Dashboard /> : <Login onLogin={handleLogin} />} />

            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/product" element={<Product />} />
          
            <Route path="/sales-report/daily" element={<SalesReportDaily />} />
            <Route path="/sales-report/monthly" element={<SalesReportMonthly />} />
            <Route path="/sales-report/yearly" element={<SalesReportYearly />} />
            <Route path="/Transaction" element={<Transaction />} />
            <Route path="/item-sold" element={<ItemSold />} />
          </Routes> 
        </div> 
      </div>
    </Router>
  );
}

export default App;
