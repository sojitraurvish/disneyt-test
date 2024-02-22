

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmqs2S7-U1FXYtY7hrRKCICXqzTukfRLs",
  authDomain: "disney-demo-d4b31.firebaseapp.com",
  projectId: "disney-demo-d4b31",
  storageBucket: "disney-demo-d4b31.appspot.com",
  messagingSenderId: "511028944999",
  appId: "1:511028944999:web:3c5427f75e09f91f6834c2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db=getFirestore();



