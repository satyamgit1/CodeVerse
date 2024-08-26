// import React, { useState } from "react";
// import { auth } from "../firebaseConfig";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { useRouter } from "next/router";
// import SignUp from "./SignUp";
// import Footer from "./Footer";
// import Link from "next/link";
// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const router = useRouter();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//       router.push("/projects");
//     } catch (error) {
//       console.error(error);
//       alert("Error logging in");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
//         <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Login to Your Account</h2>
//         <form onSubmit={handleLogin} className="space-y-6">
//           <div className="flex flex-col">
//             <label htmlFor="email" className="text-sm font-semibold text-gray-600 mb-2">Email</label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Enter your email"
//               required
//               className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
//             />
//           </div>
//           <div className="flex flex-col">
//             <label htmlFor="password" className="text-sm font-semibold text-gray-600 mb-2">Password</label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="Enter your password"
//               required
//               className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
//             />
//           </div>
//           <div className="flex items-center justify-between">
//             <button
//               type="submit"
//               className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-500 transition duration-200"
//             >
//               Login
//             </button>
//           </div>
//         </form>
//         <div className="mt-6 text-center">
//         <p className="text-gray-600">
//     Don't have an account?{' '}
//     <Link href="./SignUp" className="text-indigo-600 hover:text-indigo-500">
//       Sign Up
//     </Link>
//   </p>
//         </div>
//       </div>

//     </div>
//   );
// };

// export default Login;


import React, { useState } from "react";
import { auth } from "../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/router";
import Link from "next/link";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/projects");
    } catch (error) {
      console.error(error);
      alert("Error logging in");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Login to Your Account</h2>
        <form onSubmit={handleLogin} className="space-y-6">
          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm font-semibold text-gray-600 mb-2">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="text-sm font-semibold text-gray-600 mb-2">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-500 transition duration-200"
            >
              Login
            </button>
          </div>
        </form>
        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Don't have an account?{" "}
            <Link href="/signup" className="text-indigo-600 hover:text-indigo-500">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

