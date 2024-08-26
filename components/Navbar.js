import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebaseConfig";
import { useRouter } from "next/router";
import Link from "next/link";
import ProfileDropdown from "./ProfileDropdown"; // Import the ProfileDropdown component

const Navbar = () => {
  const [user] = useAuthState(auth);
  const router = useRouter();

  const handleProjectsClick = (e) => {
    e.preventDefault();
    if (user) {
      router.push("/projects");
    } else {
      router.push("/login");
      alert("Please log in to access your projects.");
    }
  };

  const handleLoginClick = () => {
    router.push("/login");
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <div className="flex items-center cursor-pointer">
            <img src="/logo_nav.webp" alt="Codeverse Logo" className="h-8 w-8 mr-2" /> {/* Restore the logo */}
            <span className="text-white text-lg font-bold">Codeverse</span> {/* Restore the name */}
          </div>
        </Link>
        <div className="space-x-4 flex items-center">
          <Link href="/">
            <span className="text-white cursor-pointer">Home</span>
          </Link>
          <span onClick={handleProjectsClick} className="text-white cursor-pointer">
            Projects
          </span>
          {user ? (
            <ProfileDropdown /> // Show profile icon when user is logged in
          ) : (
            <button
              onClick={handleLoginClick}
              className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-500 transition duration-200"
            >
              Login
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
