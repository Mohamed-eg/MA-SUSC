// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9Ta7DFHVitz5WV4NXlwyKsPI4BeGafXY",
  authDomain: "form-ma.firebaseapp.com",
  projectId: "form-ma",
  storageBucket: "form-ma.appspot.com",
  messagingSenderId: "325085674318",
  appId: "1:325085674318:web:a4d884c8f74e5d0dfdfc1f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore =getFirestore(app)