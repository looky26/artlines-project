import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQ742Ixv8LpH7g4FFacZeA_4q1ugUqEZY",
  authDomain: "artlines-579f5.firebaseapp.com",
  projectId: "artlines-579f5",
  storageBucket: "artlines-579f5.appspot.com",
  messagingSenderId: "442020715475",
  appId: "1:442020715475:web:4f2204cf6af08a9e092d26",
  measurementId: "G-ZXQV98SJ7F"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
