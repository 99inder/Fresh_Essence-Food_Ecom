// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDQyqbOJSV3AxDPUIPpjOAtD2jyaRi4ugQ",
    authDomain: "food-app-dc2ed.firebaseapp.com",
    databaseURL: "https://food-app-dc2ed-default-rtdb.firebaseio.com",
    projectId: "food-app-dc2ed",
    storageBucket: "food-app-dc2ed.appspot.com",
    messagingSenderId: "819732555109",
    appId: "1:819732555109:web:acd18187f122aea0422d8c"
};

// Initialize Firebase
const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };