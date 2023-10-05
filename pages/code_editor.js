import React, { useState } from "react";
import Textarea from "@mui/joy/Textarea";
import Footer from "./api/footer";

export default function Home() {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");

  const combinedCode = `<html>
    <head>
      <style>${css}</style>
    </head>
    <body>
      ${html}
      <script>${js}</script>
    </body>
  </html>`;

  return (
    <div>
      
      <span class="ml-2 text-3xl font-bold text-indigo-200">
                      CodeVerse
                    </span>
                    <br />
                    <br />
                    

      <div className="flex justify-evenly">
        <div>
          <h3 >HTML</h3>
          <textarea
            className="textarea textarea-info  w-80 h-80"
            placeholder="html"
            value={html}
            onChange={(e) => setHtml(e.target.value)}
          ></textarea>
        </div>
        <div>
          <h3>CSS</h3>
          <textarea
            className="textarea textarea-info  w-80 h-80"
            placeholder="Css"
            value={css}
            onChange={(e) => setCss(e.target.value)}
          ></textarea>
        </div>
        <div>
          <h3>JAVASCRIPT</h3>
          <textarea
            className="textarea textarea-info w-80 h-80"
            placeholder="Javascript"
            value={js}
            onChange={(e) => setJs(e.target.value)}
          ></textarea>
        </div>
      </div>

      <div className="output">
        <h3>Output</h3>
        <iframe
          className="output-iframe"
          title="Output"
          width="100%"
          height="500px"
          srcDoc={combinedCode}
        />
      </div>
      <Footer />
    </div>
  );
}
