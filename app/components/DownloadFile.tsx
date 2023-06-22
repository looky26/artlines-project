"use client";

import React, { useState } from "react";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getStorage, ref, getDownloadURL } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQl6RNeFwU4rwficIjY4N-whlABkC43f8",
  authDomain: "artlinesproject-9810f.firebaseapp.com",
  projectId: "artlinesproject-9810f",
  storageBucket: "artlinesproject-9810f.appspot.com",
  messagingSenderId: "578165981512",
  appId: "1:578165981512:web:2068e8d5e013017ecdb37d",
  measurementId: "G-LWXT8N474M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const storage = getStorage(app);



const DownloadFile = ({productSlug}:any) => {
    console.log('productSlug:', productSlug.title + '.rar')
  const [isPaid, setIsPaid] = useState(true);

  const pathReference = ref(storage, productSlug.title + '.rar');

  const handleDownload = async () => {
    try {
      const url = await getDownloadURL(pathReference);
      const link = document.createElement("a");
      link.href = url;
      link.download = "stars.jpg";
      console.log('created link for download:',link)
      link.click();
    } catch (error) {
      console.error("Error downloading file:", error);
    }
  };

  return (
    <div>{isPaid && <button  className="bg-black px-2 py-2 rounded-md text-white" onClick={handleDownload}>Download</button>}</div>
  );
};

export default DownloadFile;
