import React from "react";
import {
  FaWallet,
  FaUserFriends,
  FaChartLine,
  FaMoneyBillWave,
} from "react-icons/fa";

const StatCard = ({ icon, title, amount }) => (
  <div className="flex items-center bg-white shadow rounded-lg p-4 space-x-4">
    <div className="text-4xl text-blue-500">{icon}</div>
    <div>
      <div className="text-gray-600">{title}</div>
      <div className="text-xl font-bold">{amount}</div>
    </div>
  </div>
);

const Balance = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4">
    <StatCard icon={<FaWallet />} title="Wallet Balance" amount="$3,567.80" />
    <StatCard
      icon={<FaUserFriends />}
      title="Referral Earning"
      amount="$1,589.53"
    />
    <StatCard
      icon={<FaChartLine />}
      title="Estimate Sales"
      amount="$2,651.50"
    />
    <StatCard icon={<FaMoneyBillWave />} title="Earning" amount="$53,567.54" />
  </div>
);

export default Balance;
