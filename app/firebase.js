import { initializeApp } from 'firebase/app'; // Firebase App initialization
import { getAuth } from 'firebase/auth'; // Firebase Auth from the same SDK

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlKE45ccNbNSj4uGiMY67FRohAQpxeGDE",
  authDomain: "exam-attendance-app-718f8.firebaseapp.com",
  projectId: "exam-attendance-app-718f8",
  storageBucket: "exam-attendance-app-718f8.appspot.com", // Fixed URL typo
  messagingSenderId: "699512879964",
  appId: "1:699512879964:web:21e5b9188e477d22065f99",
  measurementId: "G-E4HKG0GZXG",
};

// Initialize Firebase App
 const FIREBASE_APP = initializeApp(firebaseConfig);

// Get Firebase Auth instance
export const auth = getAuth(FIREBASE_APP);

