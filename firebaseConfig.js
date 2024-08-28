// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyB3cD94lYK3OlwCXNlvRmCAUcQBad-kMvI",
    authDomain: "codeeditor-7b515.firebaseapp.com",
    projectId: "codeeditor-7b515",
    storageBucket: "codeeditor-7b515.appspot.com",
    messagingSenderId: "687839287286",
    appId: "1:687839287286:web:58b817dc47b1149c6ad9d7",
    measurementId: "G-C8P14Z5DK8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app);                // Firebase Authentication
const db = getFirestore(app);             // Firestore Database
const storage = getStorage(app);          // Firebase Storage
const provider = new GoogleAuthProvider(); // Google Auth Provider

// Export initialized Firebase services
export { auth, db, storage, provider };
