import React from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = ({ sidebarOpen, toggleSidebar }) => {
  const location = useLocation(); 

  const links = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Analytics", path: "/analytics" },
    { name: "Subscription", path: "/subscription" },
    { name: "Settings", path: "/settings" },
  ];

  return (
    <aside
      className={`bg-gray-800 text-white w-64 min-h-screen p-6 fixed md:relative z-50 transform ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out md:translate-x-0`}
    >
      <h2 className="text-2xl font-bold mb-8">Menu</h2>
      <ul>
        {links.map((link, index) => (
          <li key={index} className="mb-4">
            <Link
              to={link.path}
              className={`block p-2 rounded hover:bg-gray-700 ${
                location.pathname === link.path ? "bg-gray-700 font-semibold" : ""
              }`}
              onClick={toggleSidebar} // close sidebar on mobile click
            >
              {link.name}
            </Link>
          </li>
        ))}
        <li className="mt-10">
          <button
            className="w-full bg-red-500 hover:bg-red-600 p-2 rounded"
            onClick={() => {
              localStorage.removeItem("token");
              window.location.href = "/";
            }}
          >
            Logout
          </button>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
