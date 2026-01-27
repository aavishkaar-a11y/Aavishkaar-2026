// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUdBQ-n72mQIPs7NTipLr0yddvYXtehu4",
  authDomain: "aavishkaar-2026.firebaseapp.com",
  projectId: "aavishkaar-2026",
  storageBucket: "aavishkaar-2026.firebasestorage.app",
  messagingSenderId: "292953968541",
  appId: "1:292953968541:web:1cf86999040c0e28c2a974",
  measurementId: "G-DZDBNXWC1Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);