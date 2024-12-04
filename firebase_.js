// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7NkcMSQWcuUAk-1m52c7lDIs7ON14i7w",
  authDomain: "open-boards.firebaseapp.com",
  projectId: "open-boards",
  storageBucket: "open-boards.firebasestorage.app",
  messagingSenderId: "616471319678",
  appId: "1:616471319678:web:a0d71cf4ac42610bfef42f",
  measurementId: "G-ZGG743LXXD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);