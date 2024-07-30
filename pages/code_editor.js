import React, { useState, useEffect } from "react";

const Editor = () => {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  const [activeEditor, setActiveEditor] = useState("html");

  useEffect(() => {
    const savedHtml = localStorage.getItem("savedHtml");
    const savedCss = localStorage.getItem("savedCss");
    const savedJs = localStorage.getItem("savedJs");

    if (savedHtml) setHtml(savedHtml);
    if (savedCss) setCss(savedCss);
    if (savedJs) setJs(savedJs);
  }, []);

  useEffect(() => {
    localStorage.setItem("savedHtml", html);
    localStorage.setItem("savedCss", css);
    localStorage.setItem("savedJs", js);
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
      <div className="flex">
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
