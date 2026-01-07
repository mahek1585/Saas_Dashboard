import React from "react";

const Card = ({ title, value }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md flex-1 min-w-[150px]">
      <h3 className="text-gray-500 text-sm">{title}</h3>
      <p className="text-2xl font-bold mt-2">{value}</p>
    </div>
  );
};

export default Card;
