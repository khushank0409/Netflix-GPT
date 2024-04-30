// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAv_SRX1YFuFY7QWBEijv8Szi6pg6Q4-Ik",
  authDomain: "netflixgpt-edf72.firebaseapp.com",
  projectId: "netflixgpt-edf72",
  storageBucket: "netflixgpt-edf72.appspot.com",
  messagingSenderId: "702919212421",
  appId: "1:702919212421:web:0e9d0db9a4525bb790d8ec",
  measurementId: "G-K8VVLLT4QB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);