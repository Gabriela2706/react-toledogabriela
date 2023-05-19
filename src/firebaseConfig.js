import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD_sY_tgFrXbzvN1Fy0ywHyFODMlIxlm80",
  authDomain: "proyecto-e-comerce-pola-sur.firebaseapp.com",
  projectId: "proyecto-e-comerce-pola-sur",
  storageBucket: "proyecto-e-comerce-pola-sur.appspot.com",
  messagingSenderId: "489075489665",
  appId: "1:489075489665:web:1baf3462f3ce03a0ed4680",
};

const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
