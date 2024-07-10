import React, { useEffect, useState } from "react";
import { FaBell, FaEnvelope, FaUser, FaCog } from "react-icons/fa";

function Sidebar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900 dark:text-white">
      {/* Top Navbar */}
      <nav className="bg-white shadow-lg p-4 flex justify-between items-center dark:bg-gray-900 dark:text-white">
        <div className="text-xl font-semibold">Admin Dashboard</div>
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleDarkMode}
            className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-700 dark:bg-gray-800 dark:hover:bg-gray-600"
          >
            {darkMode ? "Light" : "Dark"} Mode
          </button>
          <FaBell className="text-gray-600 cursor-pointer" />
          <FaEnvelope className="text-gray-600 cursor-pointer" />
          <FaUser className="text-gray-600 cursor-pointer" />
          <FaCog className="text-gray-600 cursor-pointer" />
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-lg p-4 space-y-2 dark:bg-gray-900 dark:text-white">
          <a href="#" className="block py-2 px-4 rounded hover:bg-gray-200">
            Overview
          </a>
          <a href="#" className="block py-2 px-4 rounded hover:bg-gray-200">
            Widget
          </a>
          <a href="#" className="block py-2 px-4 rounded hover:bg-gray-200">
            UI Elements
          </a>
          <a href="#" className="block py-2 px-4 rounded hover:bg-gray-200">
            Advanced UI
          </a>
          <a href="#" className="block py-2 px-4 rounded hover:bg-gray-200">
            Form Elements
          </a>
          <a href="#" className="block py-2 px-4 rounded hover:bg-gray-200">
            Editors
          </a>
          <a href="#" className="block py-2 px-4 rounded hover:bg-gray-200">
            Charts
          </a>
          <a href="#" className="block py-2 px-4 rounded hover:bg-gray-200">
            Tables
          </a>
          <a href="#" className="block py-2 px-4 rounded hover:bg-gray-200">
            Popups
          </a>
          <a href="#" className="block py-2 px-4 rounded hover:bg-gray-200">
            Notifications
          </a>
          <a href="#" className="block py-2 px-4 rounded hover:bg-gray-200">
            Icons
          </a>
          <a href="#" className="block py-2 px-4 rounded hover:bg-gray-200">
            Maps
          </a>
          <a href="#" className="block py-2 px-4 rounded hover:bg-gray-200">
            User Pages
          </a>
          <a href="#" className="block py-2 px-4 rounded hover:bg-gray-200">
            Error Pages
          </a>
          <a href="#" className="block py-2 px-4 rounded hover:bg-gray-200">
            E-Commerce
          </a>
          <a href="#" className="block py-2 px-4 rounded hover:bg-gray-200">
            E-Mail
          </a>
          <a href="#" className="block py-2 px-4 rounded hover:bg-gray-200">
            Calendar
          </a>
          <a href="#" className="block py-2 px-4 rounded hover:bg-gray-200">
            Todo List
          </a>
          <a href="#" className="block py-2 px-4 rounded hover:bg-gray-200">
            Gallery
          </a>
          <a href="#" className="block py-2 px-4 rounded hover:bg-gray-200">
            Documentation
          </a>
        </aside>

        {/* Main View */}
        <main className="flex-1 p-4">
          <h1 className="text-2xl font-semibold">
            Welcome to the Admin Dashboard
          </h1>
          <p>Select a menu item from the sidebar to get started.</p>
        </main>
      </div>
    </div>
  );
}

export default Sidebar;
