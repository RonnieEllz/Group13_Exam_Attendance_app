import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

export const loginWithEmailAndPassword = async (email, password) => {
    try
    {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return userCredential;
    }
    catch(error)
    {
        throw new Error(error.message);
    }
};
export const registerWithEmailAndPassword = async (email, password) =>
{
    try
    {
        const userCredential = await createUserWithEmailAndPassword(auth, email,password);
        return userCredential;
    }
    catch(error)
    {
        throw new Error(error.message);
    }

}