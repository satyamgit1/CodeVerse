import React from "react";
import { auth } from "../firebaseConfig";
import { signOut } from "firebase/auth";
import { useRouter } from "next/router";

const Logout = () => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push("/login"); // Redirect to the login page after logout
    } catch (error) {
      console.error("Error logging out:", error);
      alert("Failed to log out. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Ready to leave?</h2>
        <p className="text-gray-600 mb-6">You can log out of your account now.</p>
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-500 transition duration-200 w-full"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Logout;
