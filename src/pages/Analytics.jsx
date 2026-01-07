import React from "react";
import Layout from "../components/Layout";
import AnalyticsChart from "../components/AnalyticsChart";

const Analytics = () => {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">Analytics</h1>

      {/* Stats cards example */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-md">Total Users: 1200</div>
        <div className="bg-white p-6 rounded-xl shadow-md">Active Users: 875</div>
        <div className="bg-white p-6 rounded-xl shadow-md">Revenue: $5400</div>
        <div className="bg-white p-6 rounded-xl shadow-md">Subscriptions: 350</div>
      </div>

      {/* Charts */}
      <AnalyticsChart />
    </Layout>
  );
};

export default Analytics;
