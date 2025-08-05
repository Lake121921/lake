// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";//used for authentication services
import "firebase/compat/firestore";//used for firestore database
import "firebase/compat/auth";//udes for authentication modules
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjcLUPlmzni9kUoG0hm87vR9YgxJUxym4",
  authDomain: "clone-e9586.firebaseapp.com",
  projectId: "clone-e9586",
  storageBucket: "clone-e9586.firebasestorage.app",
  messagingSenderId: "429853505508",
  appId: "1:429853505508:web:1e6a8a16ac64ea327439f1",
  measurementId: "G-1S8LL5ELXZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);//exporting the auth module to use it in other files
//auth is an object which has methods those mehods are working about login, logout,logged etc
export const db = getFirestore(app);//exporting the firestore database to use it in other files