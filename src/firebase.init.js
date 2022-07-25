// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCx3hZCmxngQmp2wBp73KT_8cQLzWnb9h4",
  authDomain: "doctor-portal-config.firebaseapp.com",
  projectId: "doctor-portal-config",
  storageBucket: "doctor-portal-config.appspot.com",
  messagingSenderId: "119278478205",
  appId: "1:119278478205:web:ca2b7a0f3add5c3c18a214"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;