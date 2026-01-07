import React, { useState } from "react";
import Layout from "../components/Layout";

const Settings = () => {
  const [isProfileModalOpen, setProfileModalOpen] = useState(false);
  const [isPreferencesModalOpen, setPreferencesModalOpen] = useState(false);

  // Temporary state for inputs
  const [profile, setProfile] = useState({
    name: "Demo User",
    email: "demo@gmail.com",
  });

  const [preferences, setPreferences] = useState({
    theme: "Light",
    notifications: true,
  });

  const handleProfileSave = () => {
    alert(`Profile Updated!\nName: ${profile.name}\nEmail: ${profile.email}`);
    setProfileModalOpen(false);
  };

  const handlePreferencesSave = () => {
    alert(
      `Preferences Updated!\nTheme: ${preferences.theme}\nNotifications: ${
        preferences.notifications ? "On" : "Off"
      }`
    );
    setPreferencesModalOpen(false);
  };

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">Settings</h1>
      <p className="text-gray-600 mb-6">
        Manage your user profile and application preferences.
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Profile Settings */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-4">Profile Settings</h2>
          <p className="mb-2">Update your personal information.</p>
          <button
            onClick={() => setProfileModalOpen(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Edit Profile
          </button>
        </div>

        {/* Application Settings */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-4">Application Settings</h2>
          <p className="mb-2">Manage app preferences and notifications.</p>
          <button
            onClick={() => setPreferencesModalOpen(true)}
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
          >
            Edit Preferences
          </button>
        </div>
      </div>

      {/* Profile Modal */}
      {isProfileModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-xl w-96">
            <h3 className="text-xl font-bold mb-4">Edit Profile</h3>
            <label className="block mb-2">
              Name:
              <input
                type="text"
                value={profile.name}
                onChange={(e) =>
                  setProfile({ ...profile, name: e.target.value })
                }
                className="border p-2 w-full rounded mt-1"
              />
            </label>
            <label className="block mb-4">
              Email:
              <input
                type="email"
                value={profile.email}
                onChange={(e) =>
                  setProfile({ ...profile, email: e.target.value })
                }
                className="border p-2 w-full rounded mt-1"
              />
            </label>
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setProfileModalOpen(false)}
                className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleProfileSave}
                className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Preferences Modal */}
      {isPreferencesModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-xl w-96">
            <h3 className="text-xl font-bold mb-4">Edit Preferences</h3>
            <label className="block mb-2">
              Theme:
              <select
                value={preferences.theme}
                onChange={(e) =>
                  setPreferences({ ...preferences, theme: e.target.value })
                }
                className="border p-2 w-full rounded mt-1"
              >
                <option>Light</option>
                <option>Dark</option>
              </select>
            </label>
            <label className="flex items-center mb-4 gap-2">
              <input
                type="checkbox"
                checked={preferences.notifications}
                onChange={(e) =>
                  setPreferences({ ...preferences, notifications: e.target.checked })
                }
              />
              Notifications
            </label>
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setPreferencesModalOpen(false)}
                className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handlePreferencesSave}
                className="px-4 py-2 rounded bg-green-500 text-white hover:bg-green-600"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Settings;
