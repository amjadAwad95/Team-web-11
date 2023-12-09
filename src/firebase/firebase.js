import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAYeZ0ax0M3KG14fNdeTJAcMhWEGWGHYCY",
    authDomain: "team11-database.firebaseapp.com",
    projectId: "team11-database",
    storageBucket: "team11-database.appspot.com",
    messagingSenderId: "48508756395",
    appId: "1:48508756395:web:f9a242ceda3f6a06adb2ee"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);