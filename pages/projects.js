// import React, { useEffect, useState } from "react";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { useRouter } from "next/router";
// import { db, auth } from "../firebaseConfig";
// import { collection, query, where, getDocs } from "firebase/firestore";
// import Link from "next/link";

// const ProjectList = () => {
//   const [user, loading, error] = useAuthState(auth);
//   const [projects, setProjects] = useState([]);
//   const router = useRouter();

//   useEffect(() => {
//     if (user) {
//       const fetchProjects = async () => {
//         const projectsRef = collection(db, "projects");
//         const q = query(projectsRef, where("uid", "==", user.uid));
//         const querySnapshot = await getDocs(q);
//         const userProjects = querySnapshot.docs.map((doc) => ({
//           id: doc.id,
//           ...doc.data(),
//         }));
//         setProjects(userProjects);
//       };

//       fetchProjects();
//     } else if (!loading && !user) {
//       // If user is not logged in, redirect to login page
//       router.push("/login");
//     }
//   }, [user, loading, router]);

//   if (loading) {
//     return <div className="text-center mt-10 text-lg font-semibold">Loading...</div>;
//   }

//   if (error) {
//     return <div className="text-center mt-10 text-red-500">Error: {error.message}</div>;
//   }

//   return (
//     <div className="max-w-4xl mx-auto p-6">
//       <h1 className="text-3xl font-bold mb-6 text-center">Your Projects</h1>
//       <div className="flex justify-end mb-4">
//         <button
//           onClick={() => router.push("/CreateProject")}
//           className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-500"
//         >
//           Create New Project
//         </button>
//       </div>
//       <ul className="grid gap-4 grid-cols-1 md:grid-cols-2">
//         {projects.map((project) => (
//           <li
//             key={project.id}
//             className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow"
//           >
//             <Link href={`/editor/${project.id}`} className="text-xl font-semibold text-indigo-600 hover:text-indigo-800">
//               {`Project ${project.id}`}
//             </Link>
//             <p className="text-gray-500 mt-2">
//               Created at: {new Date(project.createdAt?.seconds * 1000).toLocaleDateString()}
//             </p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ProjectList;


// import React, { useEffect, useState } from "react";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { useRouter } from "next/router";
// import { db, auth } from "../firebaseConfig";
// import { collection, query, where, getDocs } from "firebase/firestore";
// import Link from "next/link";
// import ProfileDropdown from "../components/ProfileDropdown";

// const ProjectList = () => {
//   const [user, loading, error] = useAuthState(auth);
//   const [projects, setProjects] = useState([]);
//   const router = useRouter();

//   useEffect(() => {
//     if (user) {
//       const fetchProjects = async () => {
//         const projectsRef = collection(db, "projects");
//         const q = query(projectsRef, where("uid", "==", user.uid));
//         const querySnapshot = await getDocs(q);
//         const userProjects = querySnapshot.docs.map((doc) => ({
//           id: doc.id,
//           ...doc.data(),
//         }));
//         setProjects(userProjects);
//       };

//       fetchProjects();
//     } else if (!loading && !user) {
//       // If user is not logged in, redirect to login page
//       router.push("/login");
//     }
//   }, [user, loading, router]);

//   if (loading) {
//     return <div className="text-center mt-10 text-lg font-semibold">Loading...</div>;
//   }

//   if (error) {
//     return <div className="text-center mt-10 text-red-500">Error: {error.message}</div>;
//   }

//   return (
//     <div className="max-w-4xl mx-auto p-6">
//       <header className="flex justify-between items-center mb-6">
//         <h1 className="text-3xl font-bold">Your Projects</h1>
//         <ProfileDropdown /> {/* Display the profile dropdown in the top-right corner */}
//       </header>
//       <div className="flex justify-end mb-4">
//         <button
//           onClick={() => router.push("/CreateProject")}
//           className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-500"
//         >
//           Create New Project
//         </button>
//       </div>
//       <ul className="grid gap-4 grid-cols-1 md:grid-cols-2">
//         {projects.map((project) => (
//           <li
//             key={project.id}
//             className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow"
//           >
//             <Link href={`/editor/${project.id}`} className="text-xl font-semibold text-indigo-600 hover:text-indigo-800">
//               {`Project ${project.id}`}
//             </Link>
//             <p className="text-gray-500 mt-2">
//               Created at: {new Date(project.createdAt?.seconds * 1000).toLocaleDateString()}
//             </p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ProjectList;


// import React, { useEffect, useState } from "react";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { useRouter } from "next/router";
// import { db, auth } from "../firebaseConfig";
// import { collection, query, where, getDocs, deleteDoc, doc } from "firebase/firestore";
// import Link from "next/link";
// import ProfileDropdown from "../components/ProfileDropdown"; // Ensure this is correctly imported

// const ProjectList = () => {
//   const [user, loading, error] = useAuthState(auth);
//   const [projects, setProjects] = useState([]);
//   const router = useRouter();

//   useEffect(() => {
//     if (user) {
//       const fetchProjects = async () => {
//         const projectsRef = collection(db, "projects");
//         const q = query(projectsRef, where("uid", "==", user.uid));
//         const querySnapshot = await getDocs(q);
//         const userProjects = querySnapshot.docs.map((doc) => ({
//           id: doc.id,
//           ...doc.data(),
//         }));
//         setProjects(userProjects);
//       };

//       fetchProjects();
//     } else if (!loading && !user) {
//       router.push("/login");
//     }
//   }, [user, loading, router]);

//   const handleDelete = async (projectId) => {
//     const confirmDelete = window.confirm("Are you sure you want to delete this project?");
//     if (confirmDelete) {
//       try {
//         await deleteDoc(doc(db, "projects", projectId));
//         setProjects(projects.filter((project) => project.id !== projectId));
//         alert("Project deleted successfully!");
//       } catch (error) {
//         console.error("Error deleting project:", error);
//         alert("Failed to delete project. Please try again.");
//       }
//     }
//   };

//   if (loading) {
//     return <div className="text-center mt-10 text-lg font-semibold">Loading...</div>;
//   }

//   if (error) {
//     return <div className="text-center mt-10 text-red-500">Error: {error.message}</div>;
//   }

//   return (
//     <div className="max-w-4xl mx-auto p-6">
//       <header className="flex justify-between items-center mb-6">
//         <h1 className="text-3xl font-bold">Your Projects</h1>
//         <ProfileDropdown />
//       </header>
//       <div className="flex justify-end mb-4">
//         <button
//           onClick={() => router.push("/CreateProject")}
//           className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-500"
//         >
//           Create New Project
//         </button>
//       </div>
//       <ul className="grid gap-4 grid-cols-1 md:grid-cols-2">
//         {projects.map((project) => (
//           <li
//             key={project.id}
//             className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow flex justify-between items-center"
//           >
//             <div>
//               <Link href={`/editor/${project.id}`} className="text-xl font-semibold text-indigo-600 hover:text-indigo-800">
//                 {`Project ${project.id}`}
//               </Link>
//               <p className="text-gray-500 mt-2">
//                 Created at: {new Date(project.createdAt?.seconds * 1000).toLocaleDateString()}
//               </p>
//             </div>
//             <button
//               onClick={() => handleDelete(project.id)}
//               className="text-red-600 hover:text-red-800 ml-4"
//             >
//               Delete
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ProjectList;


// import React, { useEffect, useState } from "react";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { useRouter } from "next/router";
// import { db, auth } from "../firebaseConfig";
// import { collection, query, where, getDocs, deleteDoc, doc } from "firebase/firestore";
// import Link from "next/link";
// import ProfileDropdown from "../components/ProfileDropdown";
// import Modal from "../components/Modal";
// import Toast from "../components/Toast";
// import Footer from "../components/Footer";

// const ProjectList = () => {
//   const [user, loading, error] = useAuthState(auth);
//   const [projects, setProjects] = useState([]);
//   const [selectedProject, setSelectedProject] = useState(null);
//   const [showModal, setShowModal] = useState(false);
//   const [toastMessage, setToastMessage] = useState(null);
//   const router = useRouter();

//   useEffect(() => {
//     if (user) {
//       const fetchProjects = async () => {
//         const projectsRef = collection(db, "projects");
//         const q = query(projectsRef, where("uid", "==", user.uid));
//         const querySnapshot = await getDocs(q);
//         const userProjects = querySnapshot.docs.map((doc) => ({
//           id: doc.id,
//           ...doc.data(),
//         }));
//         setProjects(userProjects);
//       };

//       fetchProjects();
//     } else if (!loading && !user) {
//       router.push("/login");
//     }
//   }, [user, loading, router]);

//   const handleDelete = async () => {
//     if (selectedProject) {
//       try {
//         await deleteDoc(doc(db, "projects", selectedProject));
//         setProjects(projects.filter((project) => project.id !== selectedProject));
//         setShowModal(false);
//         setToastMessage({ message: "Project deleted successfully!", type: "success" });
//       } catch (error) {
//         console.error("Error deleting project:", error);
//         setToastMessage({ message: "Failed to delete project. Please try again.", type: "error" });
//       }
//     }
//   };

//   const openModal = (projectId) => {
//     setSelectedProject(projectId);
//     setShowModal(true);
//   };

//   const closeModal = () => {
//     setShowModal(false);
//     setSelectedProject(null);
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-6">
//       <header className="flex justify-between items-center mb-6">
//         <h1 className="text-3xl font-bold">Your Projects</h1>
//         <ProfileDropdown />
//       </header>
//       <div className="flex justify-end mb-4">
//         <button
//           onClick={() => router.push("/CreateProject")}
//           className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-500"
//         >
//           Create New Project
//         </button>
//       </div>
//       <ul className="grid gap-4 grid-cols-1 md:grid-cols-2">
//         {projects.map((project) => (
//           <li
//             key={project.id}
//             className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow flex justify-between items-center"
//           >
//             <div>
//               <Link href={`/editor/${project.id}`} className="text-xl font-semibold text-indigo-600 hover:text-indigo-800">
//                 {project.name || `Project ${project.id}`}
//               </Link>
//               <p className="text-gray-500 mt-2">
//                 Created at: {new Date(project.createdAt?.seconds * 1000).toLocaleDateString()}
//               </p>
//             </div>
//             <button
//               onClick={() => openModal(project.id)}
//               className="text-red-600 hover:text-red-800 ml-4"
//             >
//               Delete
//             </button>
//           </li>
//         ))}
//       </ul>

//       <Modal
//         show={showModal}
//         onClose={closeModal}
//         onConfirm={handleDelete}
//         title="Delete Project"
//         message="Are you sure you want to delete this project? This action cannot be undone."
//       />

//       {toastMessage && (
//         <Toast
//           message={toastMessage.message}
//           type={toastMessage.type}
//           onClose={() => setToastMessage(null)}
//         />
//       )}
//       <Footer />
//     </div>
//   );
// };

// export default ProjectList;





// src/pages/projects.js
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";
import { db, auth } from "../firebaseConfig";
import { collection, query, where, getDocs, deleteDoc, doc } from "firebase/firestore";
import Link from "next/link";
import ProfileDropdown from "../components/ProfileDropdown";
import Modal from "../components/Modal";
import Toast from "../components/Toast"; // Import the Toast component
import { FaEdit, FaTrash } from "react-icons/fa"; // Import the edit and delete icons
import Navbar from "../components/Navbar";

const ProjectList = () => {
  const [user, loading, error] = useAuthState(auth);
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [toastMessage, setToastMessage] = useState(null); // For toast notifications
  const router = useRouter();

  useEffect(() => {
    if (!loading) {
      if (!user) {
        // If user is not logged in, redirect to the login page
        router.push("/login");
      } else {
        // Fetch projects if the user is logged in
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
      }
    }
  }, [user, loading, router]);

  const handleDelete = async () => {
    if (selectedProject) {
      try {
        await deleteDoc(doc(db, "projects", selectedProject));
        setProjects(projects.filter((project) => project.id !== selectedProject));
        setShowModal(false);
        setToastMessage({ message: "Project deleted successfully!", type: "success" });
      } catch (error) {
        console.error("Error deleting project:", error);
        setToastMessage({ message: "Failed to delete project. Please try again.", type: "error" });
      }
    }
  };

  const openModal = (projectId) => {
    setSelectedProject(projectId);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  const handleEdit = (projectId) => {
    router.push(`/editor/${projectId}`); // Redirect to the editor page for editing
  };

  if (loading) {
    return <div className="text-center mt-10 text-lg font-semibold">Loading...</div>;
  }

  if (error) {
    return <div className="text-center mt-10 text-red-500">Error: {error.message}</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto p-6">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Your Projects</h1>
          <ProfileDropdown />
        </header>
        <div className="flex justify-end mb-4">
          <button
            onClick={() => router.push("/CreateProject")}
            className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-500"
          >
            Create New Project
          </button>
        </div>
        <ul className="grid gap-4 grid-cols-1">
          {projects.map((project) => (
            <li
              key={project.id}
              className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow flex justify-between items-center"
            >
              <div>
                <Link href={`/editor/${project.id}`}>
                  <span className="text-xl font-semibold text-indigo-600 hover:text-indigo-800">
                    {`Project ${project.name || project.id}`}
                  </span>
                </Link>
                <p className="text-gray-500 mt-2">
                  Created at: {new Date(project.createdAt?.seconds * 1000).toLocaleDateString()}
                </p>
              </div>
              <div className="flex space-x-4">
                <button
                  onClick={() => handleEdit(project.id)}
                  className="text-blue-600 hover:text-blue-800"
                >
                  <FaEdit /> {/* Edit icon */}
                </button>
                <button
                  onClick={() => openModal(project.id)}
                  className="text-red-600 hover:text-red-800"
                >
                  <FaTrash /> {/* Delete icon */}
                </button>
              </div>
            </li>
          ))}
        </ul>

        <Modal
          show={showModal}
          onClose={closeModal}
          onConfirm={handleDelete}
          title="Delete Project"
          message="Are you sure you want to delete this project? This action cannot be undone."
        />

        {toastMessage && (
          <Toast
            message={toastMessage.message}
            type={toastMessage.type}
            onClose={() => setToastMessage(null)}
          />
        )}
      </div>
    </div>
  );
};

export default ProjectList;
