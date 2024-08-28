import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"; // Add this import

// Your Firebase configuration object
const firebaseConfig = {
    apiKey: "AIzaSyB3cD94lYK3OlwCXNlvRmCAUcQBad-kMvI",
    authDomain: "codeeditor-7b515.firebaseapp.com",
    projectId: "codeeditor-7b515",
    storageBucket: "codeeditor-7b515.appspot.com",
    messagingSenderId: "687839287286",
    appId: "1:687839287286:web:58b817dc47b1149c6ad9d7",
    measurementId: "G-C8P14Z5DK8"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app); // Initialize Firebase Storage
const provider = new GoogleAuthProvider();


export { auth, db, storage };