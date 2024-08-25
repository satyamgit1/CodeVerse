import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";
import { db, auth } from "../firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";
import Link from "next/link";

const ProjectList = () => {
  const [user, loading, error] = useAuthState(auth);
  const [projects, setProjects] = useState([]);
  const router = useRouter();

  useEffect(() => {
    if (user) {
      const fetchProjects = async () => {
        const projectsRef = collection(db, "projects");
        const q = query(projectsRef, where("uid", "==", user.uid));
        const querySnapshot = await getDocs(q);
        const userProjects = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProjects(userProjects);
      };

      fetchProjects();
    } else if (!loading && !user) {
      // If user is not logged in, redirect to login page
      router.push("/login");
    }
  }, [user, loading, router]);

  if (loading) {
    return <div className="text-center mt-10 text-lg font-semibold">Loading...</div>;
  }

  if (error) {
    return <div className="text-center mt-10 text-red-500">Error: {error.message}</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Your Projects</h1>
      <div className="flex justify-end mb-4">
        <button
          onClick={() => router.push("/CreateProject")}
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-500"
        >
          Create New Project
        </button>
      </div>
      <ul className="grid gap-4 grid-cols-1 md:grid-cols-2">
        {projects.map((project) => (
          <li
            key={project.id}
            className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow"
          >
            <Link href={`/editor/${project.id}`} className="text-xl font-semibold text-indigo-600 hover:text-indigo-800">
              {`Project ${project.id}`}
            </Link>
            <p className="text-gray-500 mt-2">
              Created at: {new Date(project.createdAt?.seconds * 1000).toLocaleDateString()}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;
