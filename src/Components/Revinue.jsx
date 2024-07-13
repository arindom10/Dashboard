import React from "react";
import { FaDollarSign, FaEye, FaArrowDown, FaArrowUp } from "react-icons/fa";

const Revinue = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-5">
      {/* Revenue Status */}
      <div className="bg-white shadow-md rounded-lg p-8 flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-gray-600">Revenue Status</p>
            <p className="text-gray-900 font-bold text-xl">$432</p>
            <p className="text-gray-500">Jan 01 - Jan 10</p>
          </div>
          <FaDollarSign className="text-green-500 text-4xl" />
        </div>
      </div>

      {/* Page View */}
      <div className="bg-white shadow-md rounded-lg p-4 flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-gray-600">Page View</p>
            <FaEye className="text-blue-500 text-4xl" />
          </div>
          <div>
            <p className="text-gray-900 font-bold text-xl">$432</p>
            <p className="text-gray-500">Jan 01 - Jan 10</p>
          </div>
        </div>
      </div>

      {/* Bounce Rate */}
      <div className="bg-white shadow-md rounded-lg p-4 flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-gray-600">Bounce Rate</p>
            <p className="text-gray-900 font-bold text-xl">20%</p>
            <p className="text-gray-500">Jan 01 - Jan 10</p>
          </div>
          <FaArrowDown className="text-red-500 text-4xl" />
        </div>
      </div>

      {/* Revenue Status */}
      <div className="bg-white shadow-md rounded-lg p-4 flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-gray-600">Revenue Status</p>
            <p className="text-gray-900 font-bold text-xl">$432</p>
            <p className="text-gray-500">Jan 01 - Jan 10</p>
          </div>
          <FaArrowUp className="text-green-500 text-4xl" />
        </div>
      </div>
    </div>
  );
};

export default Revinue;
