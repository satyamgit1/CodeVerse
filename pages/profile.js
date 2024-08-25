import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebaseConfig";
import { signOut } from "firebase/auth";
import { useRouter } from "next/router";

const ProfileDropdown = () => {
  const [user] = useAuthState(auth);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const router = useRouter();
  const storageRef = ref(storage, `profilePictures/${user.uid}`);


  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push("/login"); // Redirect to the login page after logout
    } catch (error) {
      console.error("Error logging out:", error);
      alert("Failed to log out. Please try again.");
    }
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  if (!user) {
    return null; // Don't show the profile icon if the user is not logged in
  }

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex items-center focus:outline-none hover:opacity-80 transition-opacity duration-150"
      >
        <img
          src={user.photoURL || "/default-profile.png"}
          alt="Profile"
          className="w-10 h-10 rounded-full border-2 border-gray-300 hover:border-indigo-500 transition-all duration-200"
        />
      </button>

      {dropdownOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg py-2 z-50 border border-gray-200">
          <div className="px-4 py-3 text-gray-800">
            <div className="flex items-center space-x-3">
              <img
                src={user.photoURL || "/default-profile.png"}
                alt="Profile"
                className="w-12 h-12 rounded-full border-2 border-indigo-500"
              />
              <div>
                <p className="text-sm font-semibold">{user.displayName || "No name provided"}</p>
                <p className="text-xs text-gray-500">{user.email}</p>
              </div>
            </div>
          </div>
          <div className="border-t my-2"></div>
          <button
            onClick={handleLogout}
            className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-100 hover:text-red-700 transition-colors duration-150"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
