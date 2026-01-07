import React, { useState } from "react";

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <div className="flex items-center">
        {/* Hamburger for mobile */}
        <button
          className="md:hidden mr-4 focus:outline-none"
          onClick={toggleSidebar}
        >
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
        <h1 className="text-2xl font-bold text-gray-800">SaaS Dashboard</h1>
      </div>

      <button
        onClick={() => {
          localStorage.removeItem("token");
          window.location.href = "/";
        }}
        className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
      >
        Logout
      </button>
    </nav>
  );
};

export default Navbar;
