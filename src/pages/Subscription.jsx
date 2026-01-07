import React, { useState } from "react";
import Layout from "../components/Layout";
import { plans } from "../Data/subscriptionData"; // Dummy data for plans

const Subscription = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleUpgradeClick = (plan) => {
    setSelectedPlan(plan);
  };

  const handleConfirmUpgrade = () => {
    alert(`Upgraded to ${selectedPlan.name} plan!`);
    setSelectedPlan(null);
  };

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">Subscription Plans</h1>
      <p className="text-gray-600 mb-6">
        Manage your subscription plans here.
      </p>

      {/* Subscription Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-md flex flex-col justify-between">
            <h2 className="text-xl font-semibold mb-2">{plan.name}</h2>
            <p className="mb-4">{plan.description}</p>
            <p className="font-bold mb-4">${plan.price}/month</p>
            <button
              onClick={() => handleUpgradeClick(plan)}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Upgrade
            </button>
          </div>
        ))}
      </div>

      {/* Upgrade Modal */}
      {selectedPlan && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-xl w-96">
            <h3 className="text-xl font-bold mb-4">Confirm Upgrade</h3>
            <p className="mb-4">
              Are you sure you want to upgrade to <span className="font-semibold">{selectedPlan.name}</span> plan for <span className="font-bold">${selectedPlan.price}/month</span>?
            </p>
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setSelectedPlan(null)}
                className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmUpgrade}
                className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Subscription;
