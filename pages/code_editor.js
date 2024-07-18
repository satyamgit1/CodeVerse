import React, { useState, useEffect } from "react";
import Textarea from "@mui/joy/Textarea";
import Footer from "./api/footer";
import Link from "next/link";

export default function Home() {
  // State variables for HTML, CSS, and JavaScript inputs
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");

  // useEffect to load saved code from localStorage on component mount
  useEffect(() => {
    const savedHtml = localStorage.getItem("savedHtml");
    const savedCss = localStorage.getItem("savedCss");
    const savedJs = localStorage.getItem("savedJs");

    if (savedHtml) setHtml(savedHtml);
    if (savedCss) setCss(savedCss);
    if (savedJs) setJs(savedJs);
  }, []);

  // useEffect to save code to localStorage whenever html, css, or js state changes
  useEffect(() => {
    localStorage.setItem("savedHtml", html);
    localStorage.setItem("savedCss", css);
    localStorage.setItem("savedJs", js);
  }, [html, css, js]);

  // Combined code for the iframe
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
    <div className="min-h-screen bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="flex items-center justify-between py-6 border-gray-100 md:space-x-10">
          <div className="flex items-center gap-12">
            <Link href="/" className="flex items-center">
              <img className="w-auto h-12 sm:h-12" src="/pic.png" alt="my_image_logo" />
              <span className="ml-8 text-2xl sm:text-5xl font-bold text-indigo-600">Welcome to Satyam Verse</span>
            </Link>
          </div>
        </header>
        <main className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <h3 className="text-center">HTML</h3>
              <textarea
                className="textarea textarea-info w-full h-40 sm:h-80"
                placeholder=""
                value={html}
                onChange={(e) => setHtml(e.target.value)}
              ></textarea>
            </div>
            <div>
              <h3 className="text-center">CSS</h3>
              <textarea
                className="textarea textarea-info w-full h-40 sm:h-80"
                placeholder=""
                value={css}
                onChange={(e) => setCss(e.target.value)}
              ></textarea>
            </div>
            <div>
              <h3 className="text-center">JAVASCRIPT</h3>
              <textarea
                className="textarea textarea-info w-full h-40 sm:h-80"
                placeholder=""
                value={js}
                onChange={(e) => setJs(e.target.value)}
              ></textarea>
            </div>
          </div>
          <div className="output">
            <iframe
              className="output-iframe w-full h-64 sm:h-96 bg-white"
              title="Output"
              srcDoc={combinedCode}
            />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}