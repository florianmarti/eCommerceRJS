import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBXsXnQZ8eb2EBd71d4VcpcEai_e4e6TmM",
  authDomain: "reactcoder15dic.firebaseapp.com",
  projectId: "reactcoder15dic",
  storageBucket: "reactcoder15dic.appspot.com",
  messagingSenderId: "496586646465",
  appId: "1:496586646465:web:14da95c0ce19ef6f944540",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
