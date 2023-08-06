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
  apiKey: "AIzaSyBQ742Ixv8LpH7g4FFacZeA_4q1ugUqEZY",
  authDomain: "artlines-579f5.firebaseapp.com",
  projectId: "artlines-579f5",
  storageBucket: "artlines-579f5.appspot.com",
  messagingSenderId: "442020715475",
  appId: "1:442020715475:web:4f2204cf6af08a9e092d26",
  measurementId: "G-ZXQV98SJ7F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const storage = getStorage(app);



const DownloadFile = ({productSlug}:any) => {
    //console.log('productSlug:', productSlug.title + '.rar')
  const [isPaid, setIsPaid] = useState(true);
  console.log("download page", productSlug.title)

  const pathReference = ref(storage, productSlug.title + '.rar');

  const handleDownload = async () => {
    try {
      const url = await getDownloadURL(pathReference);
      const link = document.createElement("a");
      link.href = url;
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
