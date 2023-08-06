"use client";
import { SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";
import React from "react";

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

  console.log(orders);

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
        <h2>{orders.length} Orders</h2>
        <div className="mt-5 space-y-4">
          {orders.map((order:any) => (
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
              <div className="flex space-x-6">

              
              {Array.isArray(order.images) &&
                order.images.map((item:any) => <img key={item} src={item} alt="" className="h-20 object-contain sm:h-32" />)}
         </div>
            </div>
          ))}
        </div>
      </SignedIn>
    </div>
  );
};

export default OrdersClientSide;
