import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

export const loginWithEmailAndPassword = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    let message;
    switch (error.code) {
      case 'auth/wrong-password':
        message = 'Incorrect password. Please try again.';
        break;
      case 'auth/user-not-found':
        message = 'No user found with this email address.';
        break;
      case 'auth/invalid-email':
        message = 'Invalid email address format.';
        break;
      default:
        message = error.message;
    }
    throw new Error(message);
  }
};

export const registerWithEmailAndPassword = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    let message;
    switch (error.code) {
      case 'auth/email-already-in-use':
        message = 'This email address is already in use.';
        break;
      case 'auth/invalid-email':
        message = 'Invalid email address format.';
        break;
      default:
        message = error.message;
    }
    throw new Error(message);
  }
};
