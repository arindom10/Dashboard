import React from "react";

const Dashboard = () => {
  return (
    <div className="">
      <h2 className="text-lg font-bold mb-">Dashbord</h2>
      <h2 className="text-lg  mb-6">Overview of latest Month</h2>
      <div className="flex flex-wrap">
        <div className="bg-gray-50 p-4 rounded-lg ">
          <p className="text-4xl font-semibold text-gray-800">$6468.96</p>
          <h3 className="text-sm font-medium text-gray-600">
            Current Month Earnings
          </h3>
          <p className="text-4xl font-semibold text-gray-800">82</p>
          <h3 className="text-sm font-medium text-gray-600">
            Current Month Sales
          </h3>
          <button className="bg-rose-500 rounded-full text-white p-4 mt-12">
            Last Month Summary
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
