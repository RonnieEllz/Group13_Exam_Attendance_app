// Import necessary Firebase modules
import { initializeApp } from 'firebase/app'; 
import { 
  getAuth, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword 
} from 'firebase/auth'; 
import { 
  getFirestore, 
  collection, 
  addDoc, 
  getDocs, 
  updateDoc, 
  doc 
} from 'firebase/firestore';

// Firebase configuration (replace with your actual Firebase config)
const firebaseConfig = {
  apiKey: "AIzaSyAlKE45ccNbNSj4uGiMY67FRohAQpxeGDE", 
  authDomain: "exam-attendance-app-718f8.firebaseapp.com", 
  projectId: "exam-attendance-app-718f8", 
  storageBucket: "exam-attendance-app-718f8.appspot.com", 
  messagingSenderId: "699512879964", 
  appId: "1:699512879964:web:21e5b9188e477d22065f99", 
  measurementId: "G-E4HKG0GZXG", 
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Auth
const db = getFirestore(app);
const auth = getAuth(app);

// Export Firebase services
export { db, auth };

/** Firestore Functions **/

// Add a new document to a collection
export const addDocument = async (collectionName, document) => {
  try {
    const docRef = await addDoc(collection(db, collectionName), document);
    console.log(`${collectionName} document added with ID: `, docRef.id);
    return docRef.id;
  } catch (error) {
    console.error(`Error adding document to ${collectionName}:`, error);
    throw new Error(`Unable to add document: ${error.message}`);
  }
};

// Fetch all documents from a collection
export const getAllDocuments = async (collectionName) => {
  try {
    const querySnapshot = await getDocs(collection(db, collectionName));
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error(`Error fetching documents from ${collectionName}:`, error);
    throw new Error(`Unable to fetch documents: ${error.message}`);
  }
};

// Update a specific document in a collection
export const updateDocument = async (collectionName, documentId, updatedData) => {
  try {
    const docRef = doc(db, collectionName, documentId);
    await updateDoc(docRef, updatedData);
    console.log(`${collectionName} document with ID ${documentId} updated.`);
  } catch (error) {
    console.error(`Error updating document in ${collectionName}:`, error);
    throw new Error(`Unable to update document: ${error.message}`);
  }
};

/** Authentication Functions **/

// Sign in a user with email and password
export const loginWithEmailAndPassword = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log('User logged in:', userCredential.user.uid);
    return userCredential.user;
  } catch (error) {
    console.error('Login failed:', error);
    throw new Error('Login failed: ' + error.message);
  }
};

// Register a new user with email and password
export const registerWithEmailAndPassword = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log('User registered:', userCredential.user.uid);
    return userCredential.user;
  } catch (error) {
    console.error('Registration failed:', error);
    throw new Error('Registration failed: ' + error.message);
  }
};
