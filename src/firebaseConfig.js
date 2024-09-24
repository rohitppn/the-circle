// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqcHoKjPJQ_w39_u4cGb6UscownhC7cMo",
  authDomain: "linkedin-clone-8c5ff.firebaseapp.com",
  projectId: "linkedin-clone-8c5ff",
  storageBucket: "linkedin-clone-8c5ff.appspot.com",
  messagingSenderId: "525663348235",
  appId: "1:525663348235:web:ba4b94f91af74f0c4a890e",
  measurementId: "G-KC1KKG4RG6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);
export { auth, app, firestore, storage };
