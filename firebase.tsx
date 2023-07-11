import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQl6RNeFwU4rwficIjY4N-whlABkC43f8",
  authDomain: "artlinesproject-9810f.firebaseapp.com",
  projectId: "artlinesproject-9810f",
  storageBucket: "artlinesproject-9810f.appspot.com",
  messagingSenderId: "578165981512",
  appId: "1:578165981512:web:2068e8d5e013017ecdb37d",
  measurementId: "G-LWXT8N474M",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
