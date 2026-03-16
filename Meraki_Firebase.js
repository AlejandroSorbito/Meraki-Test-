// meraki_firebase.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-analytics.js";

// web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyArIy_PGm0JNG6AVsnBdk-M88wgWmlSrPA",
    authDomain: "meraki-fe109.firebaseapp.com",
    projectId: "meraki-fe109",
    storageBucket: "meraki-fe109.firebasestorage.app",
    messagingSenderId: "76516644348",
    appId: "1:76516644348:web:f5df34bc98558874f8ce79",
    measurementId: "G-N74E1H8SW0"
};

// Firebase Initialization
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Export app so login.html and other pages can access it
export { app };