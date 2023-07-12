import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import { getFirestore, serverTimestamp, collection, onSnapshot, query, where, deleteDoc, getDocs, setDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyAM2dTUEHbV94G3r1JPykCXbXJK_pXORf0",
  authDomain: "mycardiomyopathy-ed9a7.firebaseapp.com",
  projectId: "mycardiomyopathy-ed9a7",
  storageBucket: "mycardiomyopathy-ed9a7.appspot.com",
  messagingSenderId: "711093302736",
  appId: "1:711093302736:web:e7806ed3141ff8cc8335d5"
};

const app = initializeApp(firebaseConfig);
const firebaseAuthentication = getAuth();
const firebaseFireStore = getFirestore();
const timestamp = serverTimestamp();

export { app, firebaseAuthentication, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile,
  firebaseFireStore, timestamp, collection, onSnapshot, serverTimestamp, query, where, deleteDoc, getDocs, setDoc };
