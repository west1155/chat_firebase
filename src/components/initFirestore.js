import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCKdug_8SS9601IM9_cps6BN4nBl8i2cbY",
    authDomain: "chat-c2684.firebaseapp.com",
    databaseURL: "https://chat-c2684-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "chat-c2684",
    storageBucket: "chat-c2684.appspot.com",
    messagingSenderId: "920450147709",
    appId: "1:920450147709:web:6468bbfab208efcb535814",
    measurementId: "G-7CJB30V900"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default db