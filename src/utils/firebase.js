// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAB4t5_tEdGoMzukOjEPApheSknLtZCLEc",
  authDomain: "netflixgpt-56fe2.firebaseapp.com",
  projectId: "netflixgpt-56fe2",
  storageBucket: "netflixgpt-56fe2.appspot.com",
  messagingSenderId: "818963662729",
  appId: "1:818963662729:web:561e677ac83ff4e211c358",
  measurementId: "G-X4R87D4FC6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);