import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAxY6uVyBKLlY_0l8pLDLQWxJxdjc-0Yew",
  authDomain: "protecht-e1530.firebaseapp.com",
  projectId: "protecht-e1530",
  storageBucket: "protecht-e1530.firebasestorage.app",
  messagingSenderId: "946149229551",
  appId: "1:946149229551:web:49bd0067ebda7365172c1a",
  measurementId: "G-L3DNZQ04V9",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
