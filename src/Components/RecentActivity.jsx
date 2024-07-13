import React from "react";
import {
  FaCheckCircle,
  FaPlusCircle,
  FaPenNib,
  FaFileAlt,
  FaReply,
} from "react-icons/fa";

const RecentActivity = () => {
  const activities = [
    {
      time: "40 mins ago",
      icon: <FaCheckCircle />,
      title: "Task Updated",
      description: "Ak updated the task",
    },
    {
      time: "1 hour ago",
      icon: <FaPlusCircle />,
      title: "Deal Added",
      description: "Ak added a new deal",
    },
    {
      time: "2 hours ago",
      icon: <FaPenNib />,
      title: "Published Article",
      description: "Ak published a new article",
    },
    {
      time: "3 hours ago",
      icon: <FaFileAlt />,
      title: "Dock Updated",
      description: "Ak updated the dock",
    },
    {
      time: "4 hours ago",
      icon: <FaReply />,
      title: "Replied Comment",
      description: "Ak replied to a comment",
    },
  ];

  return (
    <div className="w-1/2 mt-5 bg-white shadow-md rounded-lg p-4">
      <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
      {activities.map((activity, index) => (
        <div
          key={index}
          className="flex items-start border-b border-gray-200 py-2"
        >
          <div className="text-gray-500 text-sm mr-5">{activity.time}</div>
          <div className="flex-1 flex items-center">
            <div className="text-gray-500 text-xl mr-3">{activity.icon}</div>
            <div>
              <p className="text-gray-900 font-semibold">{activity.title}</p>
              <p className="text-gray-600">{activity.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecentActivity;
