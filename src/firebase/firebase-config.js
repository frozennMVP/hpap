// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVUs6tzT6FoM4lg256pyrMvY5x_eOGtPc",
  authDomain: "hpap-a90bb.firebaseapp.com",
  projectId: "hpap-a90bb",
  storageBucket: "hpap-a90bb.appspot.com",
  messagingSenderId: "814684777269",
  appId: "1:814684777269:web:9345cd937919fd1c487a7c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)

export const db = getFirestore(app)