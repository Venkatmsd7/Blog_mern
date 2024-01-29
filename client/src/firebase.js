// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-mern-14576.firebaseapp.com",
  projectId: "blog-mern-14576",
  storageBucket: "blog-mern-14576.appspot.com",
  messagingSenderId: "1041555781487",
  appId: "1:1041555781487:web:d232d81f5a927e919fda9a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);