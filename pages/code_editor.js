import React, { useState } from "react";
import Textarea from "@mui/joy/Textarea";
import Footer from "./api/footer";
import Link from "next/link";

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
      <div class="relative h-screen  bg-dark">
        <div class="h-full mx-auto ">
          <div class="">
            <div class="relative z-40 bg-dark">
              <div class="px-4 mx-auto max-w-7xl sm:px-6">
                <div class="flex items-center justify-between py-6 border-gray-100 md:space-x-10">
                  <div class="flex items-center justify-start gap-12">
                    <div class="flex items-center" href="/">
                      <img
                        class="w-auto h-12 sm:h-12"
                        src="/pic.png"
                        alt="my_image_logo"
                      />
                      <Link href="/" class="ml-2 text-2xl font-bold text-indigo-600">CodeVerse</Link>
                    </div>
                    <nav class="hidden space-x-10 md:flex">
                      <div class="relative"></div>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <Link href="/" className="ml-2 text-3xl font-bold text-indigo-200 hover:underline">
        CodeVerse
      </Link>   */}

          <br />
          <br />

          <div className="flex justify-evenly">
            <div>
              <h3>HTML</h3>
              <textarea
                className="textarea textarea-info  w-80 h-80"
                placeholder=""
                value={html}
                onChange={(e) => setHtml(e.target.value)}
              ></textarea>
            </div>
            <div>
              <h3>CSS</h3>
              <textarea
                className="textarea textarea-info  w-80 h-80"
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
            {/* <h3 className="ml-20 p-2 font-bold">Output</h3> */}
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
      </div>
    </div>
  );
}
