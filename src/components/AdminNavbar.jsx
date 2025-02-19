import React from "react";
import { Link } from "react-router-dom";

const AdminNavbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4">
        <li><Link to="/" className="text-white">Home</Link></li>
        <li><Link to="/admin" className="text-white">Admin Dashboard</Link></li>
        <li><Link to="/profile" className="text-white">Profile</Link></li>
        <li><span className="text-white">Admin</span></li> 
      </ul>
    </nav>
  );
};

export default AdminNavbar;