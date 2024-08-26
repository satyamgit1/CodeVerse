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





// // src/pages/projects.js
// import React, { useEffect, useState } from "react";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { useRouter } from "next/router";
// import { db, auth } from "../firebaseConfig";
// import { collection, query, where, getDocs, deleteDoc, doc } from "firebase/firestore";
// import Link from "next/link";
// import ProfileDropdown from "../components/ProfileDropdown";
// import Modal from "../components/Modal";
// import Toast from "../components/Toast"; // Import the Toast component
// import { FaEdit, FaTrash } from "react-icons/fa"; // Import the edit and delete icons
// import Navbar from "../components/Navbar";

// const ProjectList = () => {
//   const [user, loading, error] = useAuthState(auth);
//   const [projects, setProjects] = useState([]);
//   const [selectedProject, setSelectedProject] = useState(null);
//   const [showModal, setShowModal] = useState(false);
//   const [toastMessage, setToastMessage] = useState(null); // For toast notifications
//   const router = useRouter();

//   useEffect(() => {
//     if (!loading) {
//       if (!user) {
//         // If user is not logged in, redirect to the login page
//         router.push("/login");
//       } else {
//         // Fetch projects if the user is logged in
//         const fetchProjects = async () => {
//           const projectsRef = collection(db, "projects");
//           const q = query(projectsRef, where("uid", "==", user.uid));
//           const querySnapshot = await getDocs(q);
//           const userProjects = querySnapshot.docs.map((doc) => ({
//             id: doc.id,
//             ...doc.data(),
//           }));
//           setProjects(userProjects);
//         };

//         fetchProjects();
//       }
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

//   const handleEdit = (projectId) => {
//     router.push(`/editor/${projectId}`); // Redirect to the editor page for editing
//   };

//   if (loading) {
//     return <div className="text-center mt-10 text-lg font-semibold">Loading...</div>;
//   }

//   if (error) {
//     return <div className="text-center mt-10 text-red-500">Error: {error.message}</div>;
//   }

//   return (
//     <div>
//       <Navbar />
//       <div className="max-w-4xl mx-auto p-6">
//         <header className="flex justify-between items-center mb-6">
//           <h1 className="text-3xl font-bold">Your Projects</h1>
          
//         </header>
//         <div className="flex justify-end mb-4">
//           <button
//             onClick={() => router.push("/CreateProject")}
//             className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-500"
//           >
//             Create New Project
//           </button>
//         </div>
//         <ul className="grid gap-4 grid-cols-1">
//           {projects.map((project) => (
//             <li
//               key={project.id}
//               className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow flex justify-between items-center"
//             >
//               <div>
//                 <Link href={`/editor/${project.id}`}>
//                   <span className="text-xl font-semibold text-indigo-600 hover:text-indigo-800">
//                     {`Project: ${project.name || project.id}`}
//                   </span>
//                 </Link>
//                 <p className="text-gray-500 mt-2">
//                   Created at: {new Date(project.createdAt?.seconds * 1000).toLocaleDateString()}
//                 </p>
//               </div>
//               <div className="flex space-x-4">
//                 <button
//                   onClick={() => handleEdit(project.id)}
//                   className="text-blue-600 hover:text-blue-800"
//                 >
//                   <FaEdit /> {/* Edit icon */}
//                 </button>
//                 <button
//                   onClick={() => openModal(project.id)}
//                   className="text-red-600 hover:text-red-800"
//                 >
//                   <FaTrash /> {/* Delete icon */}
//                 </button>
//               </div>
//             </li>
//           ))}
//         </ul>

//         <Modal
//           show={showModal}
//           onClose={closeModal}
//           onConfirm={handleDelete}
//           title="Delete Project"
//           message="Are you sure you want to delete this project? This action cannot be undone."
//         />

//         {toastMessage && (
//           <Toast
//             message={toastMessage.message}
//             type={toastMessage.type}
//             onClose={() => setToastMessage(null)}
//           />
//         )}
//       </div>
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
// import Toast from "../components/Toast"; // Import the Toast component
// import { FaTrash } from "react-icons/fa"; // Import the delete icon
// import Navbar from "../components/Navbar";

// const ProjectList = () => {
//   const [user, loading, error] = useAuthState(auth);
//   const [projects, setProjects] = useState([]);
//   const [selectedProject, setSelectedProject] = useState(null);
//   const [showModal, setShowModal] = useState(false);
//   const [toastMessage, setToastMessage] = useState(null); // For toast notifications
//   const router = useRouter();

//   useEffect(() => {
//     if (!loading) {
//       if (!user) {
//         // If user is not logged in, redirect to the login page
//         router.push("/login");
//       } else {
//         // Fetch projects if the user is logged in
//         const fetchProjects = async () => {
//           const projectsRef = collection(db, "projects");
//           const q = query(projectsRef, where("uid", "==", user.uid));
//           const querySnapshot = await getDocs(q);
//           const userProjects = querySnapshot.docs.map((doc) => ({
//             id: doc.id,
//             ...doc.data(),
//           }));
//           setProjects(userProjects);
//         };

//         fetchProjects();
//       }
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
//     <div>
//       <Navbar />
//       <div className="max-w-6xl mx-auto p-6">
//         <header className="flex justify-between items-center mb-6">
//           <h1 className="text-3xl font-bold">Your Projects</h1>
//         </header>
//         <div className="flex justify-end mb-4">
//           <button
//             onClick={() => router.push("/CreateProject")}
//             className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-500"
//           >
//             Create New Project
//           </button>
//         </div>
//         <div className="overflow-x-auto">
//           <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
//             <thead className="bg-gray-50">
//               <tr>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Language</th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created</th>
//                 <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
//               </tr>
//             </thead>
//             <tbody className="bg-white divide-y divide-gray-200">
//               {projects.map((project) => (
//                 <tr key={project.id}>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <Link href={`/editor/${project.id}`}>
//                       <span className="text-indigo-600 hover:text-indigo-800 font-medium cursor-pointer">
//                         {project.name || `Project ${project.id}`}
//                       </span>
//                     </Link>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-gray-600">{project.language || 'html'}</td>
//                   <td className="px-6 py-4 whitespace-nowrap text-gray-600">{new Date(project.createdAt?.seconds * 1000).toLocaleDateString()}</td>
//                   <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
//                     <button
//                       onClick={() => openModal(project.id)}
//                       className="text-red-600 hover:text-red-800"
//                     >
//                       <FaTrash />
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         <Modal
//           show={showModal}
//           onClose={closeModal}
//           onConfirm={handleDelete}
//           title="Delete Project"
//           message="Are you sure you want to delete this project? This action cannot be undone."
//         />

//         {toastMessage && (
//           <Toast
//             message={toastMessage.message}
//             type={toastMessage.type}
//             onClose={() => setToastMessage(null)}
//           />
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProjectList;



import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";
import { db, auth } from "../firebaseConfig";
import { collection, query, where, getDocs, addDoc, deleteDoc, doc, Timestamp } from "firebase/firestore";
import Link from "next/link";
import ProfileDropdown from "../components/ProfileDropdown";
import Toast from "../components/Toast"; // Import the Toast component
import { FaTrash } from "react-icons/fa"; // Import the delete icon
import Navbar from "../components/Navbar";

const ProjectList = () => {
  const [user, loading, error] = useAuthState(auth);
  const [projects, setProjects] = useState([]);
  const [showCreateModal, setShowCreateModal] = useState(false); // State to control create modal visibility
  const [showToast, setShowToast] = useState(false); // State to control toast visibility
  const [newProjectName, setNewProjectName] = useState(""); // State for new project name
  const [projectToDelete, setProjectToDelete] = useState(null); // State to track which project to delete
  const [showDeleteModal, setShowDeleteModal] = useState(false); // State to control delete modal visibility
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

  const handleCreateProject = async () => {
    if (!newProjectName) return;

    try {
      const projectRef = collection(db, "projects");
      const newProject = {
        uid: user.uid,
        name: newProjectName,
        html: "",
        css: "",
        js: "",
        createdAt: Timestamp.fromDate(new Date()),
      };

      const docRef = await addDoc(projectRef, newProject);
      setProjects([...projects, { id: docRef.id, ...newProject }]);

      setShowCreateModal(false); // Close the modal
      setShowToast(true); // Show the toast notification
      setTimeout(() => setShowToast(false), 3000); // Hide the toast after 3 seconds
      setNewProjectName(""); // Reset the input field

      // Navigate to the new project page and pass the project name as a query parameter
      router.push(`/editor/${docRef.id}?name=${encodeURIComponent(newProjectName)}`);
    } catch (error) {
      console.error("Error creating project: ", error);
      alert("Failed to create project. Please try again.");
    }
};


  const handleDeleteProject = async () => {
    if (!projectToDelete) return;

    try {
      const projectDocRef = doc(db, "projects", projectToDelete);
      await deleteDoc(projectDocRef);

      setProjects(projects.filter(project => project.id !== projectToDelete));
      setProjectToDelete(null);
      setShowDeleteModal(false);
    } catch (error) {
      console.error("Error deleting project: ", error);
      alert("Failed to delete project. Please try again.");
    }
  };

  const openCreateModal = () => setShowCreateModal(true);
  const closeCreateModal = () => setShowCreateModal(false);

  const openDeleteModal = (projectId) => {
    setProjectToDelete(projectId);
    setShowDeleteModal(true);
  };

  const closeDeleteModal = () => {
    setProjectToDelete(null);
    setShowDeleteModal(false);
  };

  return (
    <div>
      <Navbar />
      <div className="max-w-6xl mx-auto p-6">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Your Projects</h1>
          
        </header>
        <div className="flex justify-end mb-4">
          <button
            onClick={openCreateModal}
            className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-500"
          >
            Create New Project
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Language</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {projects.map((project) => (
                <tr key={project.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Link href={`/editor/${project.id}`}>
                      <span className="text-indigo-600 hover:text-indigo-800 font-medium cursor-pointer">
                        {project.name || `Project ${project.id}`}
                      </span>
                    </Link>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-600">{project.language || 'html'}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-600">{new Date(project.createdAt?.seconds * 1000).toLocaleDateString()}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button
                      onClick={() => openDeleteModal(project.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {showCreateModal && (
          <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
              <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
              </div>
              <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
              <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <h3 className="text-lg leading-6 font-medium text-gray-900">Create a New Project</h3>
                      <div className="mt-2">
                        <input
                          type="text"
                          placeholder="Enter your project name"
                          value={newProjectName}
                          onChange={(e) => setNewProjectName(e.target.value)}
                          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    onClick={handleCreateProject}
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-500 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Create Project
                  </button>
                  <button
                    type="button"
                    onClick={closeCreateModal}
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {showDeleteModal && (
          <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
              <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
              </div>
              <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
              <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <h3 className="text-lg leading-6 font-medium text-gray-900">Delete Project</h3>
                      <div className="mt-2">
                        <p>Are you sure you want to delete this project? This action cannot be undone.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    onClick={handleDeleteProject}
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-500 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Delete
                  </button>
                  <button
                    type="button"
                    onClick={closeDeleteModal}
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {showToast && (
          <div className="toast toast-center toast-middle fixed top-0 left-0 right-0 mx-auto mt-5 w-1/2">
            <div className="alert alert-info">
              <span>Project created successfully!</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectList;
