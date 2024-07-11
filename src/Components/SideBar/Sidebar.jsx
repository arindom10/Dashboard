import React, { useEffect, useState } from "react";
import { FaBell, FaEnvelope, FaUser, FaCog } from "react-icons/fa";
import { Line, Bar } from "react-chartjs-2";
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

const lineData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  datasets: [
    {
      label: "Sales",
      data: [33, 53, 85, 41, 44, 65, 85],
      fill: false,
      backgroundColor: "rgba(75,192,192,0.6)",
      borderColor: "rgba(75,192,192,1)",
    },
  ],
};

const barData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Traffic",
      data: [65, 59, 80, 81, 56, 55],
      backgroundColor: "rgba(75,192,192,0.6)",
    },
  ],
};

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
        <main className="flex-1 p-4 space-y-4">
          {/* Overview of Latest Month */}
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-4">
              Overview of Latest Month
            </h2>
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/2 lg:w-1/4 p-2">
                <div className="bg-gray-50 p-4 rounded-lg shadow">
                  <h3 className="text-sm font-medium text-gray-600">
                    Current Month Earnings
                  </h3>
                  <p className="text-2xl font-semibold text-gray-800">
                    $6468.96
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/4 p-2">
                <div className="bg-gray-50 p-4 rounded-lg shadow">
                  <h3 className="text-sm font-medium text-gray-600">
                    Wallet Balance
                  </h3>
                  <p className="text-2xl font-semibold text-gray-800">
                    $3,567.80
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/4 p-2">
                <div className="bg-gray-50 p-4 rounded-lg shadow">
                  <h3 className="text-sm font-medium text-gray-600">
                    Referral Earning
                  </h3>
                  <p className="text-2xl font-semibold text-gray-800">
                    $1589.53
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/4 p-2">
                <div className="bg-gray-50 p-4 rounded-lg shadow">
                  <h3 className="text-sm font-medium text-gray-600">
                    Estimate Sales
                  </h3>
                  <p className="text-2xl font-semibold text-gray-800">
                    $2651.50
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Current Month Sales */}
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-4">Current Month Sales</h2>
            <Line data={lineData} />
          </div>

          {/* Traffic */}
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-4">Traffic</h2>
            <Bar data={barData} />
          </div>

          {/* Recent Activities */}
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-4">Recent Activities</h2>
            <ul className="space-y-2">
              <li className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Nikolai Updated a Task</p>
                  <p className="text-xs text-gray-500">40 Mins Ago</p>
                </div>
                <p className="text-sm font-medium text-gray-800">INVOICE</p>
              </li>
              <li className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Panshi Updated a Task</p>
                  <p className="text-xs text-gray-500">1 day ago</p>
                </div>
                <p className="text-sm font-medium text-gray-800">CUSTOMERS</p>
              </li>
              <li className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Manshi Updated a Task</p>
                  <p className="text-xs text-gray-500">1 day ago</p>
                </div>
                <p className="text-sm font-medium text-gray-800">PROCESS</p>
              </li>
              <li className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Fanshi Added a Comment</p>
                  <p className="text-xs text-gray-500">1 day ago</p>
                </div>
                <p className="text-sm font-medium text-gray-800">COMMENT</p>
              </li>
            </ul>
          </div>

          {/* Order Status */}
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-4">Order Status</h2>
            <table className="w-full text-left">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b">INVOICE</th>
                  <th className="py-2 px-4 border-b">CUSTOMERS</th>
                  <th className="py-2 px-4 border-b">FROM</th>
                  <th className="py-2 px-4 border-b">PRICE</th>
                  <th className="py-2 px-4 border-b">STATUS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border-b">12386</td>
                  <td className="py-2 px-4 border-b">Charly dues</td>
                  <td className="py-2 px-4 border-b">Russia</td>
                  <td className="py-2 px-4 border-b">$2652</td>
                  <td className="py-2 px-4 border-b">Process</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">12386</td>
                  <td className="py-2 px-4 border-b">Charly dues</td>
                  <td className="py-2 px-4 border-b">Russia</td>
                  <td className="py-2 px-4 border-b">$2652</td>
                  <td className="py-2 px-4 border-b">Open</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">12386</td>
                  <td className="py-2 px-4 border-b">Charly dues</td>
                  <td className="py-2 px-4 border-b">Russia</td>
                  <td className="py-2 px-4 border-b">$2652</td>
                  <td className="py-2 px-4 border-b">On Hold</td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Sidebar;
