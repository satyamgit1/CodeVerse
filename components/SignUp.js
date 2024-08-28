// import React, { useState } from "react";
// import { auth } from "../firebaseConfig";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { useRouter } from "next/router";

// const SignUp = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const router = useRouter();

//   const handleSignUp = async (e) => {
//     e.preventDefault();
//     try {
//       await createUserWithEmailAndPassword(auth, email, password);
//       alert("User created successfully!");
//       router.push("/login"); // Redirect to login after successful sign up
//     } catch (error) {
//       console.error(error);
//       alert("Error signing up");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
//         <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Create an Account</h2>
//         <form onSubmit={handleSignUp} className="space-y-6">
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
//               Sign Up
//             </button>
//           </div>
//         </form>
//         <div className="mt-6 text-center">
//           <p className="text-gray-600">
//             Already have an account?{' '}
//             <a href="/login" className="text-indigo-600 hover:text-indigo-500">
//               Login
//             </a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignUp;



// import React, { useState } from "react";
// import { auth } from "../firebaseConfig";
// import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
// import { useRouter } from "next/router";

// const SignUp = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [name, setName] = useState("");  // New state for user's name
//   const router = useRouter();

//   const handleSignUp = async (e) => {
//     e.preventDefault();
//     try {
//       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//       await updateProfile(userCredential.user, { displayName: name });
//       alert("User created successfully!");
//       router.push("/login");  // Redirect after sign-up
//     } catch (error) {
//       console.error(error);
//       alert("Error signing up");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
//         <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Create an Account</h2>
//         <form onSubmit={handleSignUp} className="space-y-6">
//           <div className="flex flex-col">
//             <label htmlFor="name" className="text-sm font-semibold text-gray-600 mb-2">Name</label>
//             <input
//               type="text"
//               id="name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               placeholder="Enter your name"
//               required
//               className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
//             />
//           </div>
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
//               Sign Up
//             </button>
//           </div>
//         </form>
//         <div className="mt-6 text-center">
//           <p className="text-gray-600">
//             Already have an account?{' '}
//             <a href="/login" className="text-indigo-600 hover:text-indigo-500">
//               Login
//             </a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignUp;

// import React, { useState } from "react";
// import { auth } from "../firebaseConfig";
// import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
// import { useRouter } from "next/router";
// import Link from "next/link";

// const SignUp = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [name, setName] = useState("");
//   const [error, setError] = useState("");
//   const router = useRouter();

//   const validatePassword = (password) => {
//     const minLength = 8;
//     const hasUppercase = /[A-Z]/.test(password);
//     const hasLowercase = /[a-z]/.test(password);
//     const hasDigit = /\d/.test(password);
//     const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

//     if (password.length < minLength) {
//       return `Password must be at least ${minLength} characters long.`;
//     }
//     if (!hasUppercase) {
//       return "Password must contain at least one uppercase letter.";
//     }
//     if (!hasLowercase) {
//       return "Password must contain at least one lowercase letter.";
//     }
//     if (!hasDigit) {
//       return "Password must contain at least one digit.";
//     }
//     if (!hasSpecialChar) {
//       return "Password must contain at least one special character.";
//     }
//     return null;
//   };

//   const handleSignUp = async (e) => {
//     e.preventDefault();
//     setError("");

//     const passwordError = validatePassword(password);
//     if (passwordError) {
//       setError(passwordError);
//       return;
//     }

//     try {
//       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//       await updateProfile(userCredential.user, { displayName: name });

//       alert("User created successfully!");
//       router.push("/login");
//     } catch (error) {
//       console.error("Error signing up:", error);

//       if (error.code === "auth/email-already-in-use") {
//         setError("This email is already registered. Please use another email or login.");
//       } else if (error.code === "auth/weak-password") {
//         setError("The password is too weak. Please choose a stronger password.");
//       } else if (error.code === "auth/invalid-email") {
//         setError("The email address is invalid. Please enter a valid email.");
//       } else {
//         setError("Error signing up. Please try again.");
//       }
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
//         <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Create an Account</h2>
//         {error && <p className="text-red-500 text-center mb-4">{error}</p>}
//         <form onSubmit={handleSignUp} className="space-y-6">
//           <div className="flex flex-col">
//             <label htmlFor="name" className="text-sm font-semibold text-gray-600 mb-2">Name</label>
//             <input
//               type="text"
//               id="name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               placeholder="Enter your name"
//               required
//               className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
//             />
//           </div>
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
//               Sign Up
//             </button>
//           </div>
//         </form>
//         <div className="mt-6 text-center">
//           <p className="text-gray-600">
//             Already have an account?{" "}
//             <Link href="/login" className="text-indigo-600 hover:text-indigo-500">
//               Login
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignUp;


import React, { useState } from "react";
import { auth } from "../firebaseConfig";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useRouter } from "next/router";
import Link from "next/link";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const validatePassword = (password) => {
    const minLength = 8;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasDigit = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (password.length < minLength) {
      return `Password must be at least ${minLength} characters long.`;
    }
    if (!hasUppercase) {
      return "Password must contain at least one uppercase letter.";
    }
    if (!hasLowercase) {
      return "Password must contain at least one lowercase letter.";
    }
    if (!hasDigit) {
      return "Password must contain at least one digit.";
    }
    if (!hasSpecialChar) {
      return "Password must contain at least one special character.";
    }
    return null;
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError("");

    const passwordError = validatePassword(password);
    if (passwordError) {
      setError(passwordError);
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCredential.user, { displayName: name });

      // Send the thank you email
      await fetch("/api/sendThankYouEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: userCredential.user.email,
          name: name,
        })
      });

      alert("User created successfully! Thank you email sent.");
      router.push("/login");
    } catch (error) {
      console.error("Error signing up:", error);

      if (error.code === "auth/email-already-in-use") {
        setError("This email is already registered. Please use another email or login.");
      } else if (error.code === "auth/weak-password") {
        setError("The password is too weak. Please choose a stronger password.");
      } else if (error.code === "auth/invalid-email") {
        setError("The email address is invalid. Please enter a valid email.");
      } else {
        setError("Error signing up. Please try again.");
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Create an Account</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleSignUp} className="space-y-6">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-sm font-semibold text-gray-600 mb-2">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              required
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>
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
              Sign Up
            </button>
          </div>
        </form>
        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Already have an account?{" "}
            <Link href="/login" className="text-indigo-600 hover:text-indigo-500">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
