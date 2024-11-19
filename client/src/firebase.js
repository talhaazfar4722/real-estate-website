// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-5f246.firebaseapp.com",
  projectId: "real-estate-5f246",
  storageBucket: "real-estate-5f246.firebasestorage.app",
  messagingSenderId: "423276842962",
  appId: "1:423276842962:web:e52b9df790e812029b020b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);