import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../firebaseConfig";

// Login function using email and password
export const LoginAPI = async (email, password) => {
  try {
    let response = await signInWithEmailAndPassword(auth, email, password);
    return response;
  } catch (err) {
    // Log and return the error for further handling
    console.error("Login Error:", err);
    throw err;
  }
};

// Register function using email and password
export const RegisterAPI = async (email, password) => {
  try {
    let response = await createUserWithEmailAndPassword(auth, email, password);
    return response;
  } catch (err) {
    // Log and return the error for further handling
    console.error("Registration Error:", err);
    throw err;
  }
};

// Google Sign-In function
export const GoogleSignInAPI = async () => {
  try {
    let googleProvider = new GoogleAuthProvider();
    let response = await signInWithPopup(auth, googleProvider);
    return response;
  } catch (err) {
    // Log and return the error for further handling
    console.error("Google Sign-In Error:", err);
    throw err;
  }
};

// Logout function
export const onLogout = async () => {
  try {
    await signOut(auth);
    console.log("User logged out successfully");
  } catch (err) {
    // Log and return the error for further handling
    console.error("Logout Error:", err);
    throw err;
  }
};
