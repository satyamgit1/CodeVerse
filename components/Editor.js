import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { db } from "../firebaseConfig";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import _ from "lodash";

const Editor = () => {
  const router = useRouter();
  const { id } = router.query;

  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  const [activeEditor, setActiveEditor] = useState("html");

  // Load the project data when the component mounts or the ID changes
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
  }, [id]);

  // Throttled update function to avoid frequent Firestore updates
  const throttledUpdate = _.throttle(async () => {
    if (id) {
      try {
        const docRef = doc(db, "projects", id);
        await updateDoc(docRef, { html, css, js });
        console.log("Document updated successfully:", { html, css, js });
      } catch (error) {
        console.error("Error updating document:", error);
      }
    }
  }, 1000); // Adjust the delay as needed

  // Use useEffect to call throttledUpdate whenever HTML, CSS, or JS changes
  useEffect(() => {
    throttledUpdate();
  }, [html, css, js]);

  const combinedCode = `
    <html>
      <head>
        <style>${css}</style>
      </head>
      <body>
        ${html}
        <script>${js}<\/script>
      </body>
    </html>
  `;

  return (
    <div className="editor-container">
      <div className="editor-tabs">
        <button onClick={() => setActiveEditor("html")}>HTML</button>
        <button onClick={() => setActiveEditor("css")}>CSS</button>
        <button onClick={() => setActiveEditor("js")}>JavaScript</button>
      </div>
      <div className="flex flex-col md:flex-row">
        <textarea
          className={`code-editor ${activeEditor === "html" ? "" : "hidden"}`}
          placeholder="Write HTML here..."
          value={html}
          onChange={(e) => setHtml(e.target.value)}
        ></textarea>
        <textarea
          className={`code-editor ${activeEditor === "css" ? "" : "hidden"}`}
          placeholder="Write CSS here..."
          value={css}
          onChange={(e) => setCss(e.target.value)}
        ></textarea>
        <textarea
          className={`code-editor ${activeEditor === "js" ? "" : "hidden"}`}
          placeholder="Write JavaScript here..."
          value={js}
          onChange={(e) => setJs(e.target.value)}
        ></textarea>
        <iframe className="output-screen" title="Output" srcDoc={combinedCode} />
      </div>
    </div>
  );
};

export default Editor;
