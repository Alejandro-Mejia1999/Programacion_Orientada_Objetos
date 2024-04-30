
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCvRXWKKoSk4DKTGcdsSI0ajjzdjhvi_Uc",
    authDomain: "auth1-d24ea.firebaseapp.com",
    projectId: "auth1-d24ea",
    storageBucket: "auth1-d24ea.appspot.com",
    messagingSenderId: "340655596985",
    appId: "1:340655596985:web:ef3c5b0d2bb44c48304268",
    measurementId: "G-TLDYRK5WG2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
