import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'; 


const firebaseConfig = {
  apiKey: "AIzaSyAlKE45ccNbNSj4uGiMY67FRohAQpxeGDE",
  authDomain: "exam-attendance-app-718f8.firebaseapp.com",
  projectId: "exam-attendance-app-718f8",
  storageBucket: "exam-attendance-app-718f8.appspot.com", 
  messagingSenderId: "699512879964",
  appId: "1:699512879964:web:21e5b9188e477d22065f99",
  measurementId: "G-E4HKG0GZXG",
};


 const FIREBASE_APP = initializeApp(firebaseConfig);


export const auth = getAuth(FIREBASE_APP);

