// import React from "react";
// import { useRouter } from "next/router";
// import { db, auth } from "../firebaseConfig";
// import { collection, addDoc, Timestamp } from "firebase/firestore";
// import { useAuthState } from "react-firebase-hooks/auth";

// const CreateProject = () => {
//   const [user, loading] = useAuthState(auth);
//   const router = useRouter();

//   const handleCreateProject = async () => {
//     if (user) {
//       try {
//         const projectRef = collection(db, "projects");
//         const newProject = {
//           uid: user.uid,
//           html: "",
//           css: "",
//           js: "",
//           createdAt: Timestamp.fromDate(new Date()),
//         };

//         const docRef = await addDoc(projectRef, newProject);
//         router.push(`/editor/${docRef.id}`);
//       } catch (error) {
//         console.error("Error creating project:", error);
//         alert("Failed to create project. Please try again.");
//       }
//     } else {
//       alert("Please log in to create a project");
//     }
//   };

//   if (loading) {
//     return <div className="text-center mt-10 text-lg font-semibold">Loading...</div>;
//   }

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100">
//       <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
//         <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
//           Create a New Project
//         </h2>
//         <button
//           onClick={handleCreateProject}
//           className="w-full bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-500 transition duration-200"
//         >
//           Create New Project
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CreateProject;


import React, { useState } from "react";
import { useRouter } from "next/router";
import { db, auth } from "../firebaseConfig";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";

const CreateProject = () => {
  const [user, loading] = useAuthState(auth);
  const [projectName, setProjectName] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleCreateProject = async (e) => {
    e.preventDefault();

    if (!projectName) {
      setError("Project name is required");
      return;
    }

    if (user) {
      const projectRef = collection(db, "projects");
      const newProject = {
        uid: user.uid,
        name: projectName, // Save the project name provided by the user
        html: "",
        css: "",
        js: "",
        createdAt: Timestamp.fromDate(new Date()),
      };

      try {
        const docRef = await addDoc(projectRef, newProject);
        router.push(`/editor/${docRef.id}`);
      } catch (error) {
        console.error("Error creating project: ", error);
        alert("Failed to create project. Please try again.");
      }
    } else {
      alert("Please log in to create a project");
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Create a New Project
        </h2>
        <form onSubmit={handleCreateProject} className="space-y-6">
          <div className="flex flex-col">
            <label
              htmlFor="projectName"
              className="text-sm font-semibold text-gray-600 mb-2"
            >
              Project Name
            </label>
            <input
              type="text"
              id="projectName"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              placeholder="Enter your project name"
              required
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-500 transition duration-200"
            >
              Create Project
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateProject;
