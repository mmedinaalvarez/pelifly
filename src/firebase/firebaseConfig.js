
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCw_njvi6Nbg1vRh1hzGClvE9A5WyX6-0",
  authDomain: "pelifly-43250.firebaseapp.com",
  projectId: "pelifly-43250",
  storageBucket: "pelifly-43250.appspot.com",
  messagingSenderId: "826873428427",
  appId: "1:826873428427:web:d3fa7aa79b805acbb5de4e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);