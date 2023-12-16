// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore,getDocs,collection,addDoc,deleteDoc,updateDoc } from "firebase/firestore"; 
import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyCWh2bfskP70QNfaXF8lClRc5WbaU9nrdI",
  authDomain: "olxproject-46933.firebaseapp.com",
  projectId: "olxproject-46933",
  storageBucket: "olxproject-46933.appspot.com",
  messagingSenderId: "148246182265",
  appId: "1:148246182265:web:b3b2e4c8268fc757f657a8",
  measurementId: "G-VGJ7YK2VVE"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const firestore=getFirestore(app)
export const auth=getAuth(app)
export {getDocs,collection,addDoc,deleteDoc,updateDoc,createUserWithEmailAndPassword,signInWithEmailAndPassword}