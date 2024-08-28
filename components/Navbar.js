import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebaseConfig";
import { useRouter } from "next/router";
import Link from "next/link";
import ProfileDropdown from "./ProfileDropdown"; // Import the ProfileDropdown component
import { useTheme } from "next-themes"; // Import useTheme from next-themes

const Navbar = () => {
  const [user] = useAuthState(auth);
  const router = useRouter();
  const { theme, setTheme } = useTheme(); // Use the theme hook

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
    <nav className={`p-4 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <div className="flex items-center cursor-pointer">
            <img
              src="/logo_nav.webp"
              alt="Codeverse Logo"
              className="h-8 w-8 mr-2 rounded-full" // Make the logo circular
            />
            <span className={`text-lg font-bold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Codeverse</span>
          </div>
        </Link>
        <div className="space-x-4 flex items-center">
          <Link href="/">
            <span className={`${theme === 'dark' ? 'text-white' : 'text-black'} cursor-pointer`}>Home</span>
          </Link>
          <span onClick={handleProjectsClick} className={`${theme === 'dark' ? 'text-white' : 'text-black'} cursor-pointer`}>
            Projects
          </span>
          <div className="flex items-center">
            {/* Theme Toggle */}
            <label className={`${theme === 'dark' ? 'text-white' : 'text-black'} cursor-pointer flex items-center`}>
              <span className="mr-2">Light</span>
              <input
                type="checkbox"
                className="toggle toggle-md"
                checked={theme === 'dark'}
                onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
              />
              <span className="ml-2">Dark</span>
            </label>
          </div>
          {user ? (
            <ProfileDropdown /> // Show profile icon when user is logged in
          ) : (
            <button
              onClick={handleLoginClick}
              className={`px-4 py-2 rounded hover:bg-indigo-500 transition duration-200 ${
                theme === 'dark' ? 'bg-indigo-600 text-white' : 'bg-indigo-500 text-black'
              }`}
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
