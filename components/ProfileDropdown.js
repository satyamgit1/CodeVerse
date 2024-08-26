// // import React from "react";
// // import { useAuthState } from "react-firebase-hooks/auth";
// // import { auth } from "../firebaseConfig";
// // import { signOut } from "firebase/auth";
// // import { useRouter } from "next/router";

// // const Profile = () => {
// //   const [user, loading, error] = useAuthState(auth);
// //   const router = useRouter();

// //   const handleLogout = async () => {
// //     try {
// //       await signOut(auth);
// //       router.push("/login"); // Redirect to the login page after logout
// //     } catch (error) {
// //       console.error("Error logging out:", error);
// //       alert("Failed to log out. Please try again.");
// //     }
// //   };

// //   if (loading) {
// //     return <div className="text-center mt-10 text-lg font-semibold">Loading...</div>;
// //   }

// //   if (error) {
// //     return <div className="text-center mt-10 text-red-500">Error: {error.message}</div>;
// //   }

// //   if (!user) {
// //     router.push("/login");
// //     return null;
// //   }

// //   return (
// //     <div className="min-h-screen bg-gray-100 flex justify-center items-center">
// //       <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
// //         <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Your Profile</h2>
// //         <div className="space-y-4">
// //           <div>
// //             <h3 className="text-lg font-semibold text-gray-700">Name:</h3>
// //             <p className="text-gray-600">{user.displayName || "No name provided"}</p>
// //           </div>
// //           <div>
// //             <h3 className="text-lg font-semibold text-gray-700">Email:</h3>
// //             <p className="text-gray-600">{user.email}</p>
// //           </div>
// //           <div className="mt-6">
// //             <button
// //               onClick={handleLogout}
// //               className="w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-500 transition duration-200"
// //             >
// //               Sign Out
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Profile;


// import React, { useState } from "react";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { auth } from "../firebaseConfig";
// import { signOut } from "firebase/auth";
// import { useRouter } from "next/router";

// const ProfileDropdown = () => {
//   const [user] = useAuthState(auth);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const router = useRouter();

//   const handleLogout = async () => {
//     try {
//       await signOut(auth);
//       router.push("/login"); // Redirect to the login page after logout
//     } catch (error) {
//       console.error("Error logging out:", error);
//       alert("Failed to log out. Please try again.");
//     }
//   };

//   const toggleDropdown = () => {
//     setDropdownOpen(!dropdownOpen);
//   };

//   if (!user) {
//     return null; // Don't show the profile icon if the user is not logged in
//   }

//   return (
//     <div className="relative">
//       <button
//         onClick={toggleDropdown}
//         className="flex items-center focus:outline-none hover:opacity-80 transition-opacity duration-150"
//       >
//         <img
//           src={user.photoURL || "/default-profile.png"}
//           alt="Profile"
//           className="w-10 h-10 rounded-full border-2 border-gray-300 hover:border-indigo-500 transition-all duration-200"
//         />
//       </button>

//       {dropdownOpen && (
//         <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg py-2 z-50 border border-gray-200">
//           <div className="px-4 py-3 text-gray-800">
//             <div className="flex items-center space-x-3">
//               <img
//                 src={user.photoURL || "/default-profile.png"}
//                 alt="Profile"
//                 className="w-12 h-12 rounded-full border-2 border-indigo-500"
//               />
//               <div>
//                 <p className="text-sm font-semibold">{user.displayName || "No name provided"}</p>
//                 <p className="text-xs text-gray-500">{user.email}</p>
//               </div>
//             </div>
//           </div>
//           <div className="border-t my-2"></div>
//           <button
//             onClick={handleLogout}
//             className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-100 hover:text-red-700 transition-colors duration-150"
//           >
//             Sign Out
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProfileDropdown;



// import React, { useState } from "react";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { auth } from "../firebaseConfig";
// import { signOut } from "firebase/auth";
// import { useRouter } from "next/router";

// const ProfileDropdown = () => {
//   const [user] = useAuthState(auth);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const router = useRouter();

//   const handleLogout = async () => {
//     try {
//       await signOut(auth);
//       router.push("/login"); // Redirect to the login page after logout
//     } catch (error) {
//       console.error("Error logging out:", error);
//       alert("Failed to log out. Please try again.");
//     }
//   };

//   const toggleDropdown = () => {
//     setDropdownOpen(!dropdownOpen);
//   };

//   if (!user) {
//     return null; // Don't show the profile icon if the user is not logged in
//   }

//   return (
//     <div className="relative">
//       <button
//         onClick={toggleDropdown}
//         className="flex items-center focus:outline-none hover:opacity-80 transition-opacity duration-150"
//       >
//         <img
//           src={user.photoURL || "/pic.png"}
//           alt="Profile"
//           className="w-10 h-10 rounded-full border-2 border-gray-300 hover:border-indigo-500 transition-all duration-200"
//         />
//       </button>

//       {dropdownOpen && (
//         <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg py-2 z-50 border border-gray-200">
//           <div className="px-4 py-3 text-gray-800">
//             <div className="flex items-center space-x-3">
//               <img
//                 src={user.photoURL || "/pic.png"}
//                 alt="Profile"
//                 className="w-12 h-12 rounded-full border-2 border-indigo-500"
//               />
//               <div>
//                 <p className="text-sm font-semibold">{user.displayName || "No name provided"}</p>
//                 <p className="text-xs text-gray-500">{user.email}</p>
//               </div>
//             </div>
//           </div>
//           <div className="border-t my-2"></div>
//           <button
//             onClick={handleLogout}
//             className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-100 hover:text-red-700 transition-colors duration-150"
//           >
//             Sign Out
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProfileDropdown;



// import React, { useState } from "react";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { auth } from "../firebaseConfig";
// import { signOut, updateProfile } from "firebase/auth";
// import { useRouter } from "next/router";
// import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

// const ProfileDropdown = () => {
//   const [user] = useAuthState(auth);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [uploading, setUploading] = useState(false);
//   const router = useRouter();
//   const storage = getStorage(); // Initialize Firebase Storage

//   const handleLogout = async () => {
//     try {
//       await signOut(auth);
//       router.push("/login"); // Redirect to the login page after logout
//     } catch (error) {
//       console.error("Error logging out:", error);
//       alert("Failed to log out. Please try again.");
//     }
//   };

//   const toggleDropdown = () => {
//     setDropdownOpen(!dropdownOpen);
//   };

//   const handleFileUpload = async (e) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     setUploading(true);
//     const storageRef = ref(storage, `profilePictures/${user.uid}`);
    
//     try {
//       await uploadBytes(storageRef, file);
//       const photoURL = await getDownloadURL(storageRef);
//       await updateProfile(user, { photoURL });
//       alert("Profile picture updated successfully!");
//     } catch (error) {
//       console.error("Error uploading profile picture:", error);
//       alert("Failed to upload profile picture. Please try again.");
//     } finally {
//       setUploading(false);
//     }
//   };

//   if (!user) {
//     return null; // Don't show the profile icon if the user is not logged in
//   }

//   return (
//     <div className="relative">
//       <button
//         onClick={toggleDropdown}
//         className="flex items-center focus:outline-none hover:opacity-80 transition-opacity duration-150"
//       >
//         <img
//           src={user.photoURL || "/pic.png"}
//           alt="Profile"
//           className="w-10 h-10 rounded-full border-2 border-gray-300 hover:border-indigo-500 transition-all duration-200"
//         />
//       </button>

//       {dropdownOpen && (
//         <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg py-2 z-50 border border-gray-200">
//           <div className="px-4 py-3 text-gray-800">
//             <div className="flex items-center space-x-3">
//               <img
//                 src={user.photoURL || "/pic.png"}
//                 alt="Profile"
//                 className="w-12 h-12 rounded-full border-2 border-indigo-500"
//               />
//               <div>
//                 <p className="text-sm font-semibold">{user.displayName || "No name provided"}</p>
//                 <p className="text-xs text-gray-500">{user.email}</p>
//               </div>
//             </div>
//             <div className="mt-3">
//               <label className="block text-sm text-gray-600">Upload Profile Picture</label>
//               <input
//                 type="file"
//                 accept="image/*"
//                 onChange={handleFileUpload}
//                 className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-600 hover:file:bg-indigo-100"
//               />
//               {uploading && <p className="text-sm text-gray-500 mt-2">Uploading...</p>}
//             </div>
//           </div>
//           <div className="border-t my-2"></div>
//           <button
//             onClick={handleLogout}
//             className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-100 hover:text-red-700 transition-colors duration-150"
//           >
//             Sign Out
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProfileDropdown;



// import React, { useState } from "react";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { auth, storage } from "../firebaseConfig";
// import { signOut, updateProfile } from "firebase/auth";
// import { useRouter } from "next/router";
// import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

// const ProfileDropdown = () => {
//   const [user] = useAuthState(auth);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [uploading, setUploading] = useState(false);
//   const router = useRouter();

//   const handleLogout = async () => {
//     try {
//       await signOut(auth);
//       router.push("/login"); // Redirect to the login page after logout
//     } catch (error) {
//       console.error("Error logging out:", error);
//       alert("Failed to log out. Please try again.");
//     }
//   };

//   const toggleDropdown = () => {
//     setDropdownOpen(!dropdownOpen);
//   };

//   const handleFileUpload = async (e) => {
//     const file = e.target.files[0];
//     if (!file || !user) return;

//     setUploading(true);
//     const storageRef = ref(storage, `profilePictures/${user.uid}`);

//     try {
//       // Upload the file
//       await uploadBytes(storageRef, file);

//       // Get the download URL
//       const photoURL = await getDownloadURL(storageRef);

//       // Update the user profile with the new photo URL
//       await updateProfile(user, { photoURL });

//       alert("Profile picture updated successfully!");
//     } catch (error) {
//       console.error("Error uploading profile picture:", error);
//       alert("Failed to upload profile picture. Please try again.");
//     } finally {
//       setUploading(false);
//     }
//   };

//   if (!user) {
//     return null; // Don't show the profile icon if the user is not logged in
//   }

//   return (
//     <div className="relative">
//       <button
//         onClick={toggleDropdown}
//         className="flex items-center focus:outline-none hover:opacity-80 transition-opacity duration-150"
//       >
//         <img
//           src={user.photoURL || "/pic.png"}
//           alt="Profile"
//           className="w-10 h-10 rounded-full border-2 border-gray-300 hover:border-indigo-500 transition-all duration-200"
//         />
//       </button>

//       {dropdownOpen && (
//         <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg py-2 z-50 border border-gray-200">
//           <div className="px-4 py-3 text-gray-800">
//             <div className="flex items-center space-x-3">
//               <img
//                 src={user.photoURL || "/pic.png"}
//                 alt="Profile"
//                 className="w-12 h-12 rounded-full border-2 border-indigo-500"
//               />
//               <div>
//                 <p className="text-sm font-semibold">{user.displayName || "No name provided"}</p>
//                 <p className="text-xs text-gray-500">{user.email}</p>
//               </div>
//             </div>
//             <div className="mt-3">
//               <label className="block text-sm text-gray-600">Upload Profile Picture</label>
//               <input
//                 type="file"
//                 accept="image/*"
//                 onChange={handleFileUpload}
//                 className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-600 hover:file:bg-indigo-100"
//               />
//               {uploading && <p className="text-sm text-gray-500 mt-2">Uploading...</p>}
//             </div>
//           </div>
//           <div className="border-t my-2"></div>
//           <button
//             onClick={handleLogout}
//             className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-100 hover:text-red-700 transition-colors duration-150"
//           >
//             Sign Out
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProfileDropdown;



// import React, { useState } from "react";
// import { auth, storage } from "../firebaseConfig";
// import { signOut, updateProfile } from "firebase/auth";
// import { useRouter } from "next/router";
// import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

// const ProfileDropdown = () => {
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [uploading, setUploading] = useState(false);
//   const router = useRouter();
//   const user = auth.currentUser; // Check if the user is authenticated

//   const handleLogout = async () => {
//     try {
//       await signOut(auth);
//       router.push("/login"); // Redirect to the login page after logout
//     } catch (error) {
//       console.error("Error logging out:", error);
//       alert("Failed to log out. Please try again.");
//     }
//   };

//   const toggleDropdown = () => {
//     setDropdownOpen(!dropdownOpen);
//   };

//   const handleFileUpload = async (e) => {
//     if (!user) {
//       console.error("User is not authenticated.");
//       alert("Please log in to upload a profile picture.");
//       return;
//     }

//     const file = e.target.files[0];
//     if (!file) return;

//     setUploading(true);
//     const storageRef = ref(storage, `profilePictures/${user.uid}`); // Define the storage reference

//     try {
//       // Upload the file to Firebase Storage
//       await uploadBytes(storageRef, file);

//       // Get the download URL for the uploaded file
//       const photoURL = await getDownloadURL(storageRef);

//       // Update the user profile with the new photo URL
//       await updateProfile(user, { photoURL });

//       alert("Profile picture updated successfully!");
//     } catch (error) {
//       console.error("Error uploading profile picture:", error);
//       alert("Failed to upload profile picture. Please try again.");
//     } finally {
//       setUploading(false);
//     }
//   };

//   if (!user) {
//     return null; // Don't show the profile icon if the user is not logged in
//   }

//   return (
//     <div className="relative">
//       <button
//         onClick={toggleDropdown}
//         className="flex items-center focus:outline-none hover:opacity-80 transition-opacity duration-150"
//       >
//         <img
//           src={user.photoURL || "/pic.png"}
//           alt="Profile"
//           className="w-10 h-10 rounded-full border-2 border-gray-300 hover:border-indigo-500 transition-all duration-200"
//         />
//       </button>

//       {dropdownOpen && (
//         <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg py-2 z-50 border border-gray-200">
//           <div className="px-4 py-3 text-gray-800">
//             <div className="flex items-center space-x-3">
//               <img
//                 src={user.photoURL || "/pic.png"}
//                 alt="Profile"
//                 className="w-12 h-12 rounded-full border-2 border-indigo-500"
//               />
//               <div>
//                 <p className="text-sm font-semibold">{user.displayName || "No name provided"}</p>
//                 <p className="text-xs text-gray-500">{user.email}</p>
//               </div>
//             </div>
//             <div className="mt-3">
//               <label className="block text-sm text-gray-600">Upload Profile Picture</label>
//               <input
//                 type="file"
//                 accept="image/*"
//                 onChange={handleFileUpload}
//                 className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-600 hover:file:bg-indigo-100"
//               />
//               {uploading && <p className="text-sm text-gray-500 mt-2">Uploading...</p>}
//             </div>
//           </div>
//           <div className="border-t my-2"></div>
//           <button
//             onClick={handleLogout}
//             className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-100 hover:text-red-700 transition-colors duration-150"
//           >
//             Sign Out
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProfileDropdown;


// src/components/ProfileDropdown.js
import React, { useState } from "react";
import { auth, storage } from "../firebaseConfig";
import { signOut, updateProfile } from "firebase/auth";
import { useRouter } from "next/router";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useAuthState } from "react-firebase-hooks/auth";

const ProfileDropdown = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [user] = useAuthState(auth); // Authenticated user state
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push("/login");
    } catch (error) {
      console.error("Error logging out:", error);
      alert("Failed to log out. Please try again.");
    }
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleFileUpload = async (e) => {
    if (!user) {
      console.error("User is not authenticated.");
      alert("Please log in to upload a profile picture.");
      return;
    }

    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);
    const storageRef = ref(storage, `profilePictures/${user.uid}`);

    try {
      await uploadBytes(storageRef, file);
      const photoURL = await getDownloadURL(storageRef);

      await updateProfile(user, { photoURL });

      alert("Profile picture updated successfully!");
    } catch (error) {
      console.error("Error uploading profile picture:", error);
      alert("Failed to upload profile picture. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  if (!user) {
    return null;
  }

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex items-center focus:outline-none hover:opacity-80 transition-opacity duration-150"
      >
        <img
          src={user.photoURL || "/pic.png"}
          alt="Profile"
          className="w-10 h-10 rounded-full border-2 border-gray-300 hover:border-indigo-500 transition-all duration-200"
        />
      </button>

      {dropdownOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg py-2 z-50 border border-gray-200">
          <div className="px-4 py-3 text-gray-800">
            <div className="flex items-center space-x-3">
              <img
                src={user.photoURL || "/pic.png"}
                alt="Profile"
                className="w-12 h-12 rounded-full border-2 border-indigo-500"
              />
              <div>
                <p className="text-sm font-semibold">{user.displayName || "No name provided"}</p>
                <p className="text-xs text-gray-500">{user.email}</p>
              </div>
            </div>
            <div className="mt-3">
              <label className="block text-sm text-gray-600">Upload Profile Picture</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-600 hover:file:bg-indigo-100"
              />
              {uploading && <p className="text-sm text-gray-500 mt-2">Uploading...</p>}
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
