"use client";
import { SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";
import React from "react";
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
  measurementId: "G-ZXQV98SJ7F",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const storage = getStorage(app);

const OrdersClientSide = ({ orders }: any) => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  console.log("titles:", orders);

  const createLinksForDownloadUrl = async (title: any) => {
    // const title = orders.map(item=>item.items[0].description)
    //console.log(title)
    const pathReference = ref(storage, title + ".rar");
    const url = await getDownloadURL(pathReference);
    //console.log(url)
    try {
      const url = await getDownloadURL(pathReference);
      const link = document.createElement("a");
      link.href = url;
      console.log("created link for download:", link);
      link.click();
    } catch (error) {
      console.error("Error downloading file:", error);
    }
  };

  return (
    <div className="max-w-6xl mx-auto pt-10">
      <h1 className="text-3xl">Your Orders</h1>
      <hr className="bg-orange-300 h-[2px] w-full" />
      <SignedOut>
        <p>Please sign in to view your orders</p>
        <SignInButton mode="modal" redirectUrl="/orders">
          Sign In
        </SignInButton>
      </SignedOut>

      <SignedIn>
        <h2>{orders?.length} Orders</h2>
        <div className="mt-5 space-y-4">
          {orders?.map((order: any) => (
            <div className="border rounded-md">
              <div className="flex items-center space-x-10 p-5 bg-gray-100 text-sm text-gray-600">
                <div>
                  <p className="text-xs font-bold">Order Placed</p>
                  <p>
                    <p>
                      {new Date(order.timestamp).getDate()}{" "}
                      {monthNames[new Date(order.timestamp).getMonth()]}{" "}
                      {new Date(order.timestamp).getFullYear()}
                    </p>
                  </p>
                </div>
                <div className="flex-1">
                  <p className="text-xs font-bold">TOTAL</p>
                  <p> PHP {order.amount}</p>
                </div>
                <div className="text-end flex-1">
                  <p className="text-sm">{order.id}</p>
                  <p className="text-blue-500 text-sm whitespace-nowrap sm:text-lg ">
                    {order.items.length} items
                  </p>
                </div>
              </div>
              <div className="flex space-x-6 items-center">
                {Array.isArray(order.images) &&
                  order.images.map((image, index) => (
                    <div className="flex flex-col" key={image}>
                      <img
                        src={image}
                        alt=""
                        className="h-20 object-contain sm:h-32"
                      />
                      <p>{order.items[index].description}</p>
                      <button
                        className="h-fit bg-orange-300"
                        onClick={() =>
                          createLinksForDownloadUrl(
                            order.items[index].description
                          )
                        }
                      >
                        Download File
                      </button>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </SignedIn>
    </div>
  );
};

export default OrdersClientSide;
