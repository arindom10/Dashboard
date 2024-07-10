import React, { useState, useEffect } from "react";
import Sidebar from "./Components/SideBar/Sidebar";

function App() {
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
    <div className=" bg-white dark:bg-gray-900">
      {/* <button
        onClick={toggleDarkMode}
        className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-700 dark:bg-gray-800 dark:hover:bg-gray-600"
      >
        {darkMode ? "Light" : "Dark"} Mode
      </button> */}
      <Sidebar />
    </div>
  );
}

export default App;
