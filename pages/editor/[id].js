// import React, { useState, useEffect } from "react";
// import { useRouter } from "next/router";
// import { db } from "../../firebaseConfig";
// import { doc, getDoc, updateDoc } from "firebase/firestore";
// import debounce from 'lodash/debounce';

// const Editor = () => {
//   const router = useRouter();
//   const { id } = router.query;

//   const [html, setHtml] = useState("");
//   const [css, setCss] = useState("");
//   const [js, setJs] = useState("");
//   const [activeEditor, setActiveEditor] = useState("html");

//   // Load the project data when the component mounts or the ID changes
//   useEffect(() => {
//     if (id) {
//       const fetchProject = async () => {
//         try {
//           const docRef = doc(db, "projects", id);
//           const docSnap = await getDoc(docRef);

//           if (docSnap.exists()) {
//             const data = docSnap.data();
//             setHtml(data.html || "");
//             setCss(data.css || "");
//             setJs(data.js || "");
//             console.log("Project loaded successfully:", data);
//           } else {
//             console.error("No such document!");
//           }
//         } catch (error) {
//           console.error("Error fetching project:", error);
//         }
//       };

//       fetchProject();
//     }
//   }, [id]);

//   // Debounced function to update Firestore
//   const saveData = debounce(async (updatedData) => {
//     if (id) {
//       try {
//         const docRef = doc(db, "projects", id);
//         await updateDoc(docRef, updatedData);
//         console.log("Document updated successfully:", updatedData);
//       } catch (error) {
//         console.error("Error updating document:", error);
//       }
//     }
//   }, 1000); // Adjust the debounce delay as needed

//   // Handlers for updating state and saving to Firestore
//   const handleHtmlChange = (value) => {
//     setHtml(value);
//     saveData({ html: value });
//   };

//   const handleCssChange = (value) => {
//     setCss(value);
//     saveData({ css: value });
//   };

//   const handleJsChange = (value) => {
//     setJs(value);
//     saveData({ js: value });
//   };

//   const combinedCode = `
//     <html>
//       <head>
//         <style>${css}</style>
//       </head>
//       <body>
//         ${html}
//         <script>${js}<\/script>
//       </body>
//     </html>
//   `;

//   return (
//     <div className="editor-container">
//       <div className="editor-tabs">
//         <button onClick={() => setActiveEditor("html")}>HTML</button>
//         <button onClick={() => setActiveEditor("css")}>CSS</button>
//         <button onClick={() => setActiveEditor("js")}>JavaScript</button>
//       </div>
//       <div className="flex flex-col md:flex-row">
//         <textarea
//           className={`code-editor ${activeEditor === "html" ? "" : "hidden"}`}
//           placeholder="Write HTML here..."
//           value={html}
//           onChange={(e) => handleHtmlChange(e.target.value)}
//         ></textarea>
//         <textarea
//           className={`code-editor ${activeEditor === "css" ? "" : "hidden"}`}
//           placeholder="Write CSS here..."
//           value={css}
//           onChange={(e) => handleCssChange(e.target.value)}
//         ></textarea>
//         <textarea
//           className={`code-editor ${activeEditor === "js" ? "" : "hidden"}`}
//           placeholder="Write JavaScript here..."
//           value={js}
//           onChange={(e) => handleJsChange(e.target.value)}
//         ></textarea>
//         <iframe className="output-screen" title="Output" srcDoc={combinedCode} />
//       </div>
//     </div>
//   );
// };

// export default Editor;


// import React, { useState, useEffect } from "react";
// import { useRouter } from "next/router";
// import { db } from "../../firebaseConfig";
// import { doc, getDoc, updateDoc } from "firebase/firestore";
// import debounce from 'lodash/debounce';

// const Editor = () => {
//   const router = useRouter();
//   const { id } = router.query;

//   const [projectName, setProjectName] = useState(""); // State to hold the project name
//   const [html, setHtml] = useState("");
//   const [css, setCss] = useState("");
//   const [js, setJs] = useState("");
//   const [activeEditor, setActiveEditor] = useState("html");

//   // Load the project data when the component mounts or the ID changes
//   useEffect(() => {
//     if (id) {
//       const fetchProject = async () => {
//         try {
//           const docRef = doc(db, "projects", id);
//           const docSnap = await getDoc(docRef);

//           if (docSnap.exists()) {
//             const data = docSnap.data();
//             setHtml(data.html || "");
//             setCss(data.css || "");
//             setJs(data.js || "");
//             setProjectName(router.query.name || data.name || "Untitled Project"); // Set the project name
//             console.log("Project loaded successfully:", data);
//           } else {
//             console.error("No such document!");
//           }
//         } catch (error) {
//           console.error("Error fetching project:", error);
//         }
//       };

//       fetchProject();
//     }
//   }, [id, router.query.name]);

//   // Debounced function to update Firestore
//   const saveData = debounce(async (updatedData) => {
//     if (id) {
//       try {
//         const docRef = doc(db, "projects", id);
//         await updateDoc(docRef, updatedData);
//         console.log("Document updated successfully:", updatedData);
//       } catch (error) {
//         console.error("Error updating document:", error);
//       }
//     }
//   }, 1000); // Adjust the debounce delay as needed

//   // Handlers for updating state and saving to Firestore
//   const handleHtmlChange = (value) => {
//     setHtml(value);
//     saveData({ html: value });
//   };

//   const handleCssChange = (value) => {
//     setCss(value);
//     saveData({ css: value });
//   };

//   const handleJsChange = (value) => {
//     setJs(value);
//     saveData({ js: value });
//   };

//   const combinedCode = `
//     <html>
//       <head>
//         <style>${css}</style>
//       </head>
//       <body>
//         ${html}
//         <script>${js}<\/script>
//       </body>
//     </html>
//   `;

//   return (
//     <div className="editor-container">
//       {/* Display the project name at the top */}
//       <h1 className="text-3xl font-bold mb-4">{projectName}</h1>

//       <div className="editor-tabs">
//         <button onClick={() => setActiveEditor("html")}>HTML</button>
//         <button onClick={() => setActiveEditor("css")}>CSS</button>
//         <button onClick={() => setActiveEditor("js")}>JavaScript</button>
//       </div>
//       <div className="flex flex-col md:flex-row">
//         <textarea
//           className={`code-editor ${activeEditor === "html" ? "" : "hidden"}`}
//           placeholder="Write HTML here..."
//           value={html}
//           onChange={(e) => handleHtmlChange(e.target.value)}
//         ></textarea>
//         <textarea
//           className={`code-editor ${activeEditor === "css" ? "" : "hidden"}`}
//           placeholder="Write CSS here..."
//           value={css}
//           onChange={(e) => handleCssChange(e.target.value)}
//         ></textarea>
//         <textarea
//           className={`code-editor ${activeEditor === "js" ? "" : "hidden"}`}
//           placeholder="Write JavaScript here..."
//           value={js}
//           onChange={(e) => handleJsChange(e.target.value)}
//         ></textarea>
//         <iframe className="output-screen" title="Output" srcDoc={combinedCode} />
//       </div>
//     </div>
//   );
// };

// export default Editor;


import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { db } from "../../firebaseConfig";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import debounce from 'lodash/debounce';
import { useTheme } from 'next-themes';

const Editor = () => {
  const router = useRouter();
  const { id } = router.query;
  const { theme } = useTheme(); // Use the current theme
  const [projectName, setProjectName] = useState(""); 
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  const [activeEditor, setActiveEditor] = useState("html");

  useEffect(() => {
    if (id) {
      const fetchProject = async () => {
        try {
          const docRef = doc(db, "projects", id);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            const data = docSnap.data();
            setHtml(data.html || "");
            setCss(data.css || "");
            setJs(data.js || "");
            setProjectName(router.query.name || data.name || "Untitled Project");
            console.log("Project loaded successfully:", data);
          } else {
            console.error("No such document!");
          }
        } catch (error) {
          console.error("Error fetching project:", error);
        }
      };

      fetchProject();
    }
  }, [id, router.query.name]);

  const saveData = debounce(async (updatedData) => {
    if (id) {
      try {
        const docRef = doc(db, "projects", id);
        await updateDoc(docRef, updatedData);
        console.log("Document updated successfully:", updatedData);
      } catch (error) {
        console.error("Error updating document:", error);
      }
    }
  }, 1000);

  const handleHtmlChange = (value) => {
    setHtml(value);
    saveData({ html: value });
  };

  const handleCssChange = (value) => {
    setCss(value);
    saveData({ css: value });
  };

  const handleJsChange = (value) => {
    setJs(value);
    saveData({ js: value });
  };

  const combinedCode = `
    <html>
      <head>
        <style>${css}</style>
      </head>
      <body class="${theme}">
        ${html}
        <script>${js}<\/script>
      </body>
    </html>
  `;

  return (
    <div className={`editor-container ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black'} p-4 rounded-lg`}>
      <h1 className="text-3xl font-bold mb-4">{projectName}</h1>

      <div className="editor-tabs flex space-x-4 mb-4">
        <button 
          onClick={() => setActiveEditor("html")} 
          className={`px-4 py-2 rounded ${activeEditor === 'html' ? 'bg-indigo-600 text-white' : 'bg-gray-300 text-black'} transition duration-200`}
        >
          HTML
        </button>
        <button 
          onClick={() => setActiveEditor("css")} 
          className={`px-4 py-2 rounded ${activeEditor === 'css' ? 'bg-indigo-600 text-white' : 'bg-gray-300 text-black'} transition duration-200`}
        >
          CSS
        </button>
        <button 
          onClick={() => setActiveEditor("js")} 
          className={`px-4 py-2 rounded ${activeEditor === 'js' ? 'bg-indigo-600 text-white' : 'bg-gray-300 text-black'} transition duration-200`}
        >
          JavaScript
        </button>
      </div>

      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        <textarea
          className={`code-editor ${activeEditor === "html" ? '' : 'hidden'} p-4 border rounded-lg ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black'}`}
          placeholder="Write HTML here..."
          value={html}
          onChange={(e) => handleHtmlChange(e.target.value)}
        ></textarea>
        <textarea
          className={`code-editor ${activeEditor === "css" ? '' : 'hidden'} p-4 border rounded-lg ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black'}`}
          placeholder="Write CSS here..."
          value={css}
          onChange={(e) => handleCssChange(e.target.value)}
        ></textarea>
        <textarea
          className={`code-editor ${activeEditor === "js" ? '' : 'hidden'} p-4 border rounded-lg ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black'}`}
          placeholder="Write JavaScript here..."
          value={js}
          onChange={(e) => handleJsChange(e.target.value)}
        ></textarea>
        <iframe 
          className={`output-screen border rounded-lg ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black'}`} 
          title="Output" 
          srcDoc={combinedCode} 
        />
      </div>
    </div>
  );
};

export default Editor;
