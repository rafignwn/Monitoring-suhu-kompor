import { FirebaseOptions, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig: FirebaseOptions = {
  apiKey: "AIzaSyCjkFTI-9C2IoorhFbyXbV3XopQ4_D8qfE",
  authDomain: "phb-dht23.firebaseapp.com",
  databaseURL:
    "https://phb-dht23-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "phb-dht23",
  storageBucket: "phb-dht23.appspot.com",
  messagingSenderId: "430466554189",
  appId: "1:430466554189:web:13441d2af24f90c5d3ff04",
  measurementId: "G-FL4WCVBMC6",
};

// const firebaseConfig: FirebaseOptions = {
//   apiKey: "AIzaSyDPNky55hfp-efCxPyaxBXCe0ZWzaK71So",
//   authDomain: "espultrasonic-d07bd.firebaseapp.com",
//   databaseURL:
//     "https://espultrasonic-d07bd-default-rtdb.asia-southeast1.firebasedatabase.app",
//   projectId: "espultrasonic-d07bd",
//   storageBucket: "espultrasonic-d07bd.appspot.com",
//   messagingSenderId: "714738915250",
//   appId: "1:714738915250:web:ccdfbdf2fc14d68bcfb6ab",
//   measurementId: "G-ESGM8Y053B",
// };

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getDatabase(app);
export const auth = getAuth(app);
export const store = getFirestore(app);
