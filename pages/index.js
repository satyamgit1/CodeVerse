import Link from "next/link";
import React from "react";
import Footer from "./api/footer";

export default function Editor() {
  return (
    <div class="relative h-screen  bg-white">
      <div class="h-full mx-auto max-w-7xl">
        <div class="relative z-10 h-full pb-8 bg-white sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32">
          <div class="relative z-40 bg-white">
            <div class="px-4 mx-auto max-w-7xl sm:px-6">
              <div class="flex items-center justify-between py-6 border-gray-100 md:space-x-10">
                <div class="flex items-center justify-start gap-12">
                  <a class="flex items-center" href="/">
                    <img
                      class="w-auto h-12 sm:h-12"
                      src="/pic.png"
                      alt="my_image_logo"
                    />
                    <span class="ml-2 text-2xl font-bold text-indigo-600">
                      CodeVerse
                    </span>
                  </a>
                  <nav class="hidden space-x-10 md:flex">
                    <div class="relative"></div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          <main class="h-full px-4 mx-auto mt-10 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div class="flex flex-col items-start justify-between w-full h-full md:flex-row md:justify-start md:h-1/2">
              <div class="z-20 flex flex-col items-center justify-start w-full h-full text-left md:z-30 md:w-1/2 md:items-start md:justify-center">
                <h1 class="text-6xl font-extrabold tracking-tight text-gray-900 titleHome ">
                  <span class="flex w-full m-auto text-indigo-600">
                   Welcome to Satyam Verse
                  </span>
                  <span class="block font-bold xl:inline">
                    {/* <span class="absolute">Interactive Code Playground</span> */}
                    {/* <br /> */}
                    Live Code Execution
                  </span>
                </h1>
                <h2 class="mt-3 text-lg text-gray-500 sm:mt-5 sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Run HTML, CSS, and JavaScript code in real-time, seeing
                  instant results.
                </h2>
                <div class="w-full mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div class="rounded-md shadow">
                    <Link
                      class="flex items-center justify-center w-full px-4 px-8 py-2 py-3 text-base font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
                      href="/code_editor"
                    >
                      Get started
                    </Link>
                  </div>
                  <div class="mt-3 sm:mt-0 sm:ml-3">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://github.com/satyamgit1"
                      class="flex items-center justify-center w-full px-4 px-8 py-2 py-3 text-base font-medium text-gray-800 bg-gray-100 rounded-md hover:bg-gray-200"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        class="ml-2"
                        viewBox="0 0 1792 1792"
                      >
                        <path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z"></path>
                      </svg>
                      <span class="ml-2">Github</span>
                    </a>
                  </div>
                </div>
                
              </div>
            </div>
          </main>
        </div>
      </div>


     

      <div class="container p-6 px-6 mx-auto bg-white dark:bg-gray-800">
        <div class="mb-16 text-center">
          <h2 class="text-base font-semibold tracking-wide text-indigo-600 uppercase">
            Features
          </h2>
          <p class="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            A better way to Code
          </p>
        </div>
        <div class="flex flex-wrap my-12 dark:text-white">
          <div class="w-full p-8 border-b md:w-1/2 md:border-r lg:w-1/3">
            <div class="flex items-center mb-6">
              <svg
                width="20"
                height="20"
                fill="currentColor"
                class="w-6 h-6 text-indigo-500"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
              </svg>
              <div class="ml-4 text-xl">Live Code Execution</div>
            </div>
            <p class="leading-loose text-gray-500 dark:text-gray-200 text-md">
              Run HTML, CSS, and JavaScript code in real-time. See immediate
              results and debug instantly.{" "}
            </p>
          </div>
          <div class="w-full p-8 border-b md:w-1/2 lg:w-1/3 lg:border-r">
            <div class="flex items-center mb-6">
              <svg
                width="20"
                height="20"
                fill="currentColor"
                class="w-6 h-6 text-indigo-500"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
              </svg>
              <div class="ml-4 text-xl">Collaborative Coding</div>
            </div>
            <p class="leading-loose text-gray-500 dark:text-gray-200 text-md">
              Work on projects with friends or colleagues in real-time.
              Collaborative coding fosters teamwork and creativity.{" "}
            </p>
          </div>
          <div class="w-full p-8 border-b md:w-1/2 md:border-r lg:w-1/3 lg:border-r-0">
            <div class="flex items-center mb-6">
              <svg
                width="20"
                height="20"
                fill="currentColor"
                class="w-6 h-6 text-indigo-500"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
              </svg>
              <div class="ml-4 text-xl">Interactive Learning</div>
            </div>
            <p class="leading-loose text-gray-500 dark:text-gray-200 text-md">
              Use the platform as an open-source learning environment. Learn,
              experiment, and improve your coding skills{" "}
            </p>
          </div>
          <div class="w-full p-8 border-b md:w-1/2 lg:w-1/3 lg:border-r lg:border-b-0">
            <div class="flex items-center mb-6">
              <svg
                width="20"
                height="20"
                fill="currentColor"
                class="w-6 h-6 text-indigo-500"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
              </svg>
              <div class="ml-4 text-xl">Embeddable Pens</div>
            </div>
            <p class="leading-loose text-gray-500 dark:text-gray-200 text-md">
              Embed your pens in blogs, portfolios, or websites. Showcase your
              work seamlessly across the web.{" "}
            </p>
          </div>
          <div class="w-full p-8 border-b md:w-1/2 md:border-r md:border-b-0 lg:w-1/3 lg:border-b-0">
            <div class="flex items-center mb-6">
              <svg
                width="20"
                height="20"
                fill="currentColor"
                class="w-6 h-6 text-indigo-500"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
              </svg>
              <div class="ml-4 text-xl">Secure Environment</div>
            </div>
            <p class="leading-loose text-gray-500 dark:text-gray-200 text-md">
              Code with confidence in a secure environment. Your data and
              projects are protected, ensuring a safe coding experience{" "}
            </p>
          </div>
          <div class="w-full p-8 md:w-1/2 lg:w-1/3">
            <div class="flex items-center mb-6">
              <svg
                width="20"
                height="20"
                fill="currentColor"
                class="w-6 h-6 text-indigo-500"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
              </svg>
              <div class="ml-4 text-xl">Mobile-Friendly Interface</div>
            </div>
            <p class="leading-loose text-gray-500 dark:text-gray-200 text-md">
              Access the platform on-the-go. The mobile-friendly interface
              allows you to code and collaborate from your smartphone or tablet.{" "}
            </p>
          </div>
        </div>
      </div>

<Footer/>


    </div>
  );
}
