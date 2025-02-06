// firebase.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyDk--ewiBhSI-8vsS7f9ACFg83L6Iwm7gg",
    authDomain: "instreet-master.firebaseapp.com",
    databaseURL: "https://instreet-master-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "instreet-master",
    storageBucket: "instreet-master.firebasestorage.app",
    messagingSenderId: "458120269213",
    appId: "1:458120269213:web:061b2a2b1f0cc59907b374",
    measurementId: "G-J4PXH96C3D"
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