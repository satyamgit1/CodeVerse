// src/pages/profile.js
import React from "react";
import ProfileDropdown from "../components/ProfileDropdown"; // Import the ProfileDropdown component

const ProfilePage = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Your Profile</h2>
        <ProfileDropdown /> {/* Render the ProfileDropdown component */}
      </div>
    </div>
  );
};

export default ProfilePage;
