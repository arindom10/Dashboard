import React, { useEffect, useState } from "react";
import { FaBell, FaEnvelope, FaUser, FaCog } from "react-icons/fa";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import SplineChart from "../SplineChart";
import SimpleDonut from "../SimpleDonut";
import Dashboard from "../Dashboard";
import Balance from "../Balance";
import Revinue from "../Revinue";
import RecentActivity from "../RecentActivity";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

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
          <a
            href="#"
            className="flex items-center py-2 px-4 rounded hover:bg-gray-200"
          >
            <i className="fas fa-tachometer-alt mr-2"></i>
            Overview
          </a>
          <a
            href="#"
            className="flex items-center py-2 px-4 rounded hover:bg-gray-200"
          >
            <i className="fas fa-cogs mr-2"></i>
            Widget
          </a>
          <a
            href="#"
            className="flex items-center py-2 px-4 rounded hover:bg-gray-200"
          >
            <i className="fas fa-puzzle-piece mr-2"></i>
            UI Elements
          </a>
          <a
            href="#"
            className="flex items-center py-2 px-4 rounded hover:bg-gray-200"
          >
            <i className="fas fa-layer-group mr-2"></i>
            Advanced UI
          </a>
          <a
            href="#"
            className="flex items-center py-2 px-4 rounded hover:bg-gray-200"
          >
            <i className="fas fa-edit mr-2"></i>
            Form Elements
          </a>
          <a
            href="#"
            className="flex items-center py-2 px-4 rounded hover:bg-gray-200"
          >
            <i className="fas fa-code mr-2"></i>
            Editors
          </a>
          <a
            href="#"
            className="flex items-center py-2 px-4 rounded hover:bg-gray-200"
          >
            <i className="fas fa-chart-pie mr-2"></i>
            Charts
          </a>
          <a
            href="#"
            className="flex items-center py-2 px-4 rounded hover:bg-gray-200"
          >
            <i className="fas fa-table mr-2"></i>
            Tables
          </a>
          <a
            href="#"
            className="flex items-center py-2 px-4 rounded hover:bg-gray-200"
          >
            <i className="fas fa-comment-alt mr-2"></i>
            Popups
          </a>
          <a
            href="#"
            className="flex items-center py-2 px-4 rounded hover:bg-gray-200"
          >
            <i className="fas fa-bell mr-2"></i>
            Notifications
          </a>
          <a
            href="#"
            className="flex items-center py-2 px-4 rounded hover:bg-gray-200"
          >
            <i className="fas fa-icons mr-2"></i>
            Icons
          </a>
          <a
            href="/"
            className="flex items-center py-2 px-4 rounded hover:bg-gray-200"
          >
            <i className="fas fa-map-marker-alt mr-2"></i>
            Maps
          </a>
          <a
            href="#"
            className="flex items-center py-2 px-4 rounded hover:bg-gray-200"
          >
            <i className="fas fa-user mr-2"></i>
            User Pages
          </a>
          <a
            href="#"
            className="flex items-center py-2 px-4 rounded hover:bg-gray-200"
          >
            <i className="fas fa-exclamation-circle mr-2"></i>
            Error Pages
          </a>
          <a
            href="#"
            className="flex items-center py-2 px-4 rounded hover:bg-gray-200"
          >
            <i className="fas fa-shopping-cart mr-2"></i>
            E-Commerce
          </a>
          <a
            href="#"
            className="flex items-center py-2 px-4 rounded hover:bg-gray-200"
          >
            <i className="fas fa-envelope mr-2"></i>
            E-Mail
          </a>
          <a
            href="#"
            className="flex items-center py-2 px-4 rounded hover:bg-gray-200"
          >
            <i className="fas fa-calendar-alt mr-2"></i>
            Calendar
          </a>
          <a
            href="#"
            className="flex items-center py-2 px-4 rounded hover:bg-gray-200"
          >
            <i className="fas fa-tasks mr-2"></i>
            Todo List
          </a>
          <a
            href="#"
            className="flex items-center py-2 px-4 rounded hover:bg-gray-200"
          >
            <i className="fas fa-image mr-2"></i>
            Gallery
          </a>
          <a
            href="#"
            className="flex items-center py-2 px-4 rounded hover:bg-gray-200"
          >
            <i className="fas fa-book mr-2"></i>
            Documentation
          </a>
        </aside>

        {/* Main View */}
        <main className="flex-1 p-4 h-screen">
          <div className="flex  space-x-4">
            <div
              className="bg-white shadow rounded-lg p-6 flex-1 flex flex-col space-y-4"
              style={{ minWidth: "60%" }}
            >
              <div className="flex flex-1 space-x-4">
                <div className="flex-1">
                  <Dashboard />
                </div>
                <div className="flex-1">
                  <SplineChart />
                </div>
              </div>
              <div className="flex-1">
                <Balance />
              </div>
            </div>
            <div
              className="flex-1 shadow bg-white rounded-lg p-6 flex items-center justify-center"
              style={{ minWidth: "30%" }}
            >
              <SimpleDonut />
            </div>
          </div>
          <Revinue />
          <RecentActivity />
        </main>
      </div>
    </div>
  );
}

export default Sidebar;
