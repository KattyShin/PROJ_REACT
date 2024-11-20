// AdminInterface.jsx
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
import Product from "./Product";
import SalesReportDaily from "./SalesreportDaily";
import SalesReportMonthly from "./SalesReportMonthly";
import SalesReportYearly from "./SalesReportYearly";
import Transaction from "./Transaction";
import ItemSold from "./ItemSold";
import Accounts from "./Accounts";

function AdminInterface({ onLogout }) {
  return (
    <Router >
      <div className="flex w-full h-full">
        {/* Sidebar with fixed width */}
        <div className="w-[230px] relative">
          <Sidebar onLogout={onLogout} />
        </div>

        {/* Main content */}
        <div className="flex-grow relative">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/product" element={<Product />} />
            <Route path="/sales-report/daily" element={<SalesReportDaily />} />
            <Route path="/sales-report/monthly" element={<SalesReportMonthly />} />
            <Route path="/sales-report/yearly" element={<SalesReportYearly />} />
            <Route path="/transaction" element={<Transaction />} />
            <Route path="/item-sold" element={<ItemSold />} />
            <Route path="/accounts" element={<Accounts/>} />
            {/* <Route path="*" element={<Navigate to="/" />} /> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default AdminInterface;
