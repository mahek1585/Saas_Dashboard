import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ sidebarOpen, toggleSidebar }) => {
  return (
    <aside
      className={`
        bg-gray-800 text-white w-64 min-h-screen p-6 fixed md:static top-0 left-0 z-50
        transform transition-transform duration-300 ease-in-out
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0
      `}
    >
      <h2 className="text-2xl font-bold mb-8">Menu</h2>
      <ul>
        
        <li className="mb-4">
          <Link to="/dashboard" className="block p-2 rounded hover:bg-gray-700">
            Dashboard
          </Link>
        </li>

        <li className="mb-4">
          <Link to="/analytics" className="block p-2 rounded hover:bg-gray-700">
            Analytics
          </Link>
        </li>

        <li className="mb-4">
          <Link to="/subscription" className="block p-2 rounded hover:bg-gray-700">
            Subscription
          </Link>
        </li>

        <li className="mb-4">
          <Link to="/settings" className="block p-2 rounded hover:bg-gray-700">
            Settings
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
