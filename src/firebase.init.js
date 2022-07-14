// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgd1bUMbU0yOoZi-my4CYJ21iKYZfXfFk",
  authDomain: "doctors-portal-eb7c0.firebaseapp.com",
  projectId: "doctors-portal-eb7c0",
  storageBucket: "doctors-portal-eb7c0.appspot.com",
  messagingSenderId: "208537397910",
  appId: "1:208537397910:web:9bbb5e42d022ab6b5bb0b7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;