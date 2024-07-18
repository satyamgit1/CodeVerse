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
    <div>
      <div className="relative h-screen bg-dark">
        <div className="h-full mx-auto ">
          <div className="">
            <div className="relative z-40 bg-dark">
              <div className="px-4 mx-auto max-w-7xl sm:px-6">
                <div className="flex items-center justify-between py-6 border-gray-100 md:space-x-10">
                  <div className="flex items-center justify-start gap-12">
                    <div className="flex items-center" href="/">
                      <img
                        className="w-auto h-12 sm:h-12"
                        src="/pic.png"
                        alt="my_image_logo"
                      />
                      <Link href="/" className="ml-8 text-5xl font-bold text-indigo-600">Welcome to Satyam Verse</Link>
                    </div>
                    <nav className="hidden space-x-10 md:flex">
                      <div className="relative"></div>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <br />
          <br />

          <div className="flex justify-evenly">
            <div>
              <h3>HTML</h3>
              <textarea
                className="textarea textarea-info w-80 h-80"
                placeholder=""
                value={html}
                onChange={(e) => setHtml(e.target.value)}
              ></textarea>
            </div>
            <div>
              <h3>CSS</h3>
              <textarea
                className="textarea textarea-info w-80 h-80"
                placeholder=""
                value={css}
                onChange={(e) => setCss(e.target.value)}
              ></textarea>
            </div>
            <div>
              <h3>JAVASCRIPT</h3>
              <textarea
                className="textarea textarea-info w-80 h-80"
                placeholder=""
                value={js}
                onChange={(e) => setJs(e.target.value)}
              ></textarea>
            </div>
          </div>

          <div className="output">
            <iframe
              className="output-iframe bg-white"
              title="Output"
              width="100%"
              height="500px"
              srcDoc={combinedCode}
            />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
