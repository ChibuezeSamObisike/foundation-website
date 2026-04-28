// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkOGropCkL7TcksyQaap-9oGFc8olfRcI",
  authDomain: "harry-foundation.firebaseapp.com",
  projectId: "harry-foundation",
  storageBucket: "harry-foundation.firebasestorage.app",
  messagingSenderId: "223444866644",
  appId: "1:223444866644:web:1da461d3447f9927e47fc1",
  measurementId: "G-DV9HCE7VXP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
