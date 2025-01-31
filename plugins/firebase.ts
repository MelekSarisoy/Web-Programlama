// firebase.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCAD2khLqzodNIBCWhYTlomZofQn7qu6iQ",
  authDomain: "instreet2.firebaseapp.com",
  projectId: "instreet2",
  storageBucket: "instreet2.firebasestorage.app",
  messagingSenderId: "1016870610831",
  appId: "1:1016870610831:web:013d8761f2538a638bcdfa",
  measurementId: "G-VVYJKD5V5Q",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(firebaseApp);

// Initialize Authentication
export const auth = getAuth(firebaseApp);

// Initialize Analytics (browser only)
if (typeof window !== "undefined") {
  try {
    getAnalytics(firebaseApp);
  } catch (error) {
    console.warn("Analytics could not be initialized:", error);
  }
}

export { firebaseApp };
