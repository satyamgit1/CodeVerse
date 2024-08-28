// // firebaseConfig.js
// import { initializeApp } from "firebase/app";
// import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage"; 

// // Your Firebase configuration object
// const firebaseConfig = {
//     apiKey: "AIzaSyB3cD94lYK3OlwCXNlvRmCAUcQBad-kMvI",
//     authDomain: "codeeditor-7b515.firebaseapp.com",
//     projectId: "codeeditor-7b515",
//     storageBucket: "codeeditor-7b515.appspot.com",
//     messagingSenderId: "687839287286",
//     appId: "1:687839287286:web:58b817dc47b1149c6ad9d7",
//     measurementId: "G-C8P14Z5DK8"
// };

// // Initialize Firebase app
// const app = initializeApp(firebaseConfig);

// // Initialize Firebase services
// const auth = getAuth(app);
// const db = getFirestore(app);
// const storage = getStorage(app);
// const provider = new GoogleAuthProvider();

// // Export Firebase services and Google Auth Provider
// export { auth, db, storage, provider };


import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
const provider = new GoogleAuthProvider();

export { auth, db, storage, provider };
