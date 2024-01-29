import React from "react";

const User = ({ user }) => {
  return (
    <div className="flex justify-between">
      <div>
        <span className="ml-2 bg-green-300 rounded-full px-3 py-2 mb-1">
          {user.firstName[0].toUpperCase()}
        </span>
        <span className="ml-2 font-medium p-2">{user.firstName} {user.lastName}</span>
      </div>
      <div className="p-2 mb-1 bg-gray-400 rounded-lg m-2 hover:bg-gray-500">
        Send Money
      </div>
    </div>
  );
};

export default User;
