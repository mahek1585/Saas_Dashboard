import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Card from "../components/Card";
import AnalyticsChart from "../components/AnalyticsChart";
import SubscriptionCard from "../components/SubscriptionCard";
import { plans } from "../Data/subscriptionData";
import { dashboardData } from "../Data/dashboardData";


const Dashboard = () => {
  const [user, setUser] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) window.location.href = "/";
    else setUser("Demo User");
  }, []);

  const stats = [
  { title: "Total Users", value: dashboardData.stats.totalUsers },
  { title: "Active Users", value: dashboardData.stats.activeUsers },
  { title: "Revenue", value: `$${dashboardData.stats.revenue}` },
  { title: "Subscriptions", value: dashboardData.stats.subscriptions },
];

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={() => setSidebarOpen(false)} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <Navbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

        {/* Dashboard Content */}
        <div className="p-6 flex-1">
          <h1 className="text-3xl font-bold mb-6">Welcome, {user}</h1>

          {/* Analytics Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <Card key={index} title={stat.title} value={stat.value} />
            ))}
          </div>
          {/* Charts Section */}
          <div className="mt-10">
            <AnalyticsChart />
          </div>

          {/* Subscription Plans */}
<div className="mt-10">
  <h2 className="text-2xl font-bold mb-6">Subscription Plans</h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {plans.map((plan, index) => (
      <SubscriptionCard
        key={index}
        plan={plan}
        onUpgrade={(planName) =>
          alert(`Upgrade to ${planName} plan clicked`)
        }
      />
    ))}
  </div>
</div>



          {/* Subscription Section */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold mb-4">Subscription Plan</h2>
            <p className="mb-2">
              Current Plan: <span className="font-semibold">Free</span>
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
              Upgrade to Pro
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
