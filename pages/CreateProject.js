import React from "react";
import { useRouter } from "next/router";
import { db, auth } from "../firebaseConfig";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";

const CreateProject = () => {
  const [user, loading] = useAuthState(auth);
  const router = useRouter();

  const handleCreateProject = async () => {
    if (user) {
      try {
        const projectRef = collection(db, "projects");
        const newProject = {
          uid: user.uid,
          html: "",
          css: "",
          js: "",
          createdAt: Timestamp.fromDate(new Date()),
        };

        const docRef = await addDoc(projectRef, newProject);
        router.push(`/editor/${docRef.id}`);
      } catch (error) {
        console.error("Error creating project:", error);
        alert("Failed to create project. Please try again.");
      }
    } else {
      alert("Please log in to create a project");
    }
  };

  if (loading) {
    return <div className="text-center mt-10 text-lg font-semibold">Loading...</div>;
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
          Create a New Project
        </h2>
        <button
          onClick={handleCreateProject}
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-500 transition duration-200"
        >
          Create New Project
        </button>
      </div>
    </div>
  );
};

export default CreateProject;
