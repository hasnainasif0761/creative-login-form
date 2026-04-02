import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

export const firebaseConfig = { 
    apiKey: "AIzaSyCMWO93aaT0HaD21uqQ-RM4hRDc3VA6mmc",
    authDomain: "smit-e-commerce-application.firebaseapp.com",
    projectId: "smit-e-commerce-application",
    storageBucket: "smit-e-commerce-application.firebasestorage.app",
    messagingSenderId: "691707383552",
    appId: "1:691707383552:web:6955b49077269ed030ede5",
    measurementId: "G-DC20LGY005",
    databaseURL: "https://smit-e-commerce-application-default-rtdb.asia-southeast1.firebasedatabase.app/"
 };
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const rtdb = getDatabase(app);