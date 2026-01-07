import React from "react";

const SubscriptionCard = ({ plan, onUpgrade }) => {
  return (
    <div
      className={`border rounded-xl p-6 shadow-md ${
        plan.current ? "border-blue-500 bg-blue-50" : "bg-white"
      }`}
    >
      <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
      <p className="text-2xl font-semibold mb-4">{plan.price}</p>

      <ul className="mb-4 text-gray-700">
        {plan.features.map((feature, index) => (
          <li key={index}>✔ {feature}</li>
        ))}
      </ul>

      {plan.current ? (
        <button className="w-full bg-gray-400 text-white py-2 rounded cursor-not-allowed">
          Current Plan
        </button>
      ) : (
        <button
          onClick={() => onUpgrade(plan.name)}
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Upgrade
        </button>
      )}
    </div>
  );
};

export default SubscriptionCard;
