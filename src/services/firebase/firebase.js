import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCllmVs3Kvld4X3fRWT5eVt8QtGkxsHeFw",
  authDomain: "snaker-city.firebaseapp.com",
  projectId: "snaker-city",
  storageBucket: "snaker-city.appspot.com",
  messagingSenderId: "222395507681",
  appId: "1:222395507681:web:b7fb4c93e3813ed924e8a0"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const app = initializeApp(firebaseConfig);
export const db = getFirestore()

export const getProducts = async () => {
  const products = await getDocs(collection(db, "products"));
    return products;
  }
