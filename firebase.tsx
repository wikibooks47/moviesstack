// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB5gvZs6RRrqcrSH3X_OBPkj5NjE1sSGsg",
    authDomain: "nollymovies-5b99d.firebaseapp.com",
    projectId: "nollymovies-5b99d",
    storageBucket: "nollymovies-5b99d.appspot.com",
    messagingSenderId: "630856594889",
    appId: "1:630856594889:web:622d925a4345751d81a418"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;