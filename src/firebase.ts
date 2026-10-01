import { initializeApp, type FirebaseApp } from "firebase/app";
import { getAuth, type Auth } from "firebase/auth";
import { getDatabase, type Database } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCA-kBwPsiGzhxeeb-HottfcMMAFScvedQ",
  authDomain: "test-fire-627f6.firebaseapp.com",
  databaseURL: "https://test-fire-627f6-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "test-fire-627f6",
  storageBucket: "test-fire-627f6.firebasestorage.app",
  messagingSenderId: "37795693428",
  appId: "1:37795693428:web:abac03ae0abf48dc25e221"
};

// Initialisation typée
export const app: FirebaseApp = initializeApp(firebaseConfig);
export const auth: Auth = getAuth(app);
export const database: Database = getDatabase(app);