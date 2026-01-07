import React from "react";

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
        <li
          className="mb-4 p-2 rounded hover:bg-gray-700 cursor-pointer"
          onClick={toggleSidebar}
        >
          Dashboard
        </li>
        <li
          className="mb-4 p-2 rounded hover:bg-gray-700 cursor-pointer"
          onClick={toggleSidebar}
        >
          Analytics
        </li>
        <li
          className="mb-4 p-2 rounded hover:bg-gray-700 cursor-pointer"
          onClick={toggleSidebar}
        >
          Subscription
        </li>
        <li
          className="mb-4 p-2 rounded hover:bg-gray-700 cursor-pointer"
          onClick={toggleSidebar}
        >
          Settings
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
